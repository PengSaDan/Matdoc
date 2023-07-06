// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import NoResult from "components/common/NoResult";
import HospitalFilter from "components/hospital/HospitalFilter";
import List from "components/hospital/HospitalList";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import instance from "util/Axios";

export const HospitalList = (props) => {
  const select = useSelector((state) => state.hospitalSearch.filter);
  const location = useSelector((state) => state.user.location);
  const [search, setSearch] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);
  const [dataDistance, setDataDistance] = useState([]);

  const [showDistance, setShowDistance] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [haveResult, setHaveResult] = useState(false);
  const now = new Date();

  const getDistanceFromLatLonInKm = (loc) => {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var r = 6371; //지구의 반지름(km)
    var dLat = deg2rad(loc.lat2 - loc.lat1);
    var dLon = deg2rad(loc.lng2 - loc.lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(loc.lat1)) *
        Math.cos(deg2rad(loc.lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km

    return Math.round(d * 10) / 10;
  };

  const makeHospitalList = (searchResult) => {
    const tmp = searchResult.slice(0, 100).map((h) => ({
      hospitalCode: h.hospitalCode,
      hospitalId: h.hospitalId,
      hospitalName: h.hospitalName,
      hospitalOpen: h.hospitalOpen,
      hospitalPart: h.hospitalPart,
      hospitalTel: h.hospitalTel,
      hospitalTime: h.hospitalTime,
      hospitalX: h.hospitalX,
      hospitalY: h.hospitalY,
      hospitalDistance: getDistanceFromLatLonInKm({
        lat1: location.lat,
        lng1: location.lng,
        lat2: h.hospitalY,
        lng2: h.hospitalX,
      }),
    }));
    setData(tmp);
  };

  const makeHospitalDistanceList = (searchResult) => {
    const tmp = searchResult.slice(0, 100).map((h) => ({
      hospitalCode: h.hospitalCode,
      hospitalId: h.hospitalId,
      hospitalName: h.hospitalName,
      hospitalOpen: h.hospitalOpen,
      hospitalPart: h.hospitalPart,
      hospitalTel: h.hospitalTel,
      hospitalTime: h.hospitalTime,
      hospitalX: h.hospitalX,
      hospitalY: h.hospitalY,
      hospitalDistance: getDistanceFromLatLonInKm({
        lat1: location.lat,
        lng1: location.lng,
        lat2: h.hospitalY,
        lng2: h.hospitalX,
      }),
    }));
    tmp.sort((a, b) => a.hospitalDistance - b.hospitalDistance);
    setDataDistance(tmp);
  };

  useEffect(() => {
    setisLoading(true);

    instance
      .post(`/hospital/find`, {
        word: select.word,
        e: location.e,
        w: location.w,
        s: location.s,
        n: location.n,
        hour: now.getHours(),
        min: now.getMinutes(),
        day: now.getDay(),
        part: select.part,
        open: select.time,
      })
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        if (response.data !== "null") {
          setDataLength(response.data.length);
          makeHospitalList(response.data);
          makeHospitalDistanceList(response.data);
          setHaveResult(true);
        } else {
          setDataLength(0);
          setData([]);
          setDataDistance([]);
          setHaveResult(false);
        }
        setisLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
      });
  }, [search]);

  const ReSearch = () => {
    console.log(search);
    console.log(select.word);
    setSearch(!search);
    window.location.href = `http://localhost:3000/hospitalList`;
  };
  const changeDistance = () => {
    setShowDistance(!showDistance);
  };

  const changeOpen = () => {
    setShowOpen(!showOpen);
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen ">
      <Header />
      <DetailSerachBar color={"bg-[#FFF5DA]"} reSearch={ReSearch} />
      {!isLoading && (
        <div
          className=" absolute top-[170px] bg-[#FFF5DA] left-[14px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-between"
          onClick={() => {
            setIsOpen((e) => !e);
          }}
        >
          <p className="text-[#303030] text-xl ml-3 mt-1 font-semibold">
            {dataLength} 건
          </p>
          {!isopen && (
            <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
          )}
        </div>
      )}

      {!isLoading && haveResult && (
        <div className=" absolute top-[225px] left-[10px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-end">
          {showDistance ? (
            <div
              className="w-24 text-lg text-right text-[#00C192] font-black"
              onClick={changeDistance}
            >
              ✔ 거리순
            </div>
          ) : (
            <div
              className="w-24 text-lg text-right text-[#303030]"
              onClick={changeDistance}
            >
              거리순
            </div>
          )}

          {showOpen ? (
            <div
              className="w-24 text-lg text-right text-[#00C192] font-black"
              onClick={changeOpen}
            >
              ✔ 진료중
            </div>
          ) : (
            <div
              className="w-24 text-lg text-right text-[#303030]"
              onClick={changeOpen}
            >
              진료중
            </div>
          )}
        </div>
      )}

      {isLoading && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]"></div>
      )}

      {!isLoading && haveResult && !showDistance && !showOpen && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]">
          {data.map((items, idx) => {
            return <List key={items.hospitalId} props={items} />;
          })}
        </div>
      )}
      {!isLoading && haveResult && showDistance && !showOpen && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]">
          {dataDistance.map((items, idx) => {
            return <List key={items.hospitalId} props={items} />;
          })}
        </div>
      )}
      {!isLoading && haveResult && !showDistance && showOpen && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]">
          {data
            .filter((h) => h.hospitalOpen)
            .map((items, idx) => {
              return <List key={items.hospitalId} props={items} />;
            })}
        </div>
      )}
      {!isLoading && haveResult && showDistance && showOpen && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]">
          {dataDistance
            .filter((h) => h.hospitalOpen)
            .map((items, idx) => {
              return <List key={items.hospitalId} props={items} />;
            })}
        </div>
      )}
      {!isLoading && !haveResult && (
        <div className="absolute w-full overflow-scroll top-[260px] h-[70%]">
          <NoResult />
        </div>
      )}

      {isopen && <HospitalFilter />}
      <div
        className="absolute top-44 right-5"
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        {isopen && (
          <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▲</p>
        )}
      </div>
    </div>
  );
};

HospitalList.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList);
