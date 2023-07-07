import HospitalList from "components/hospital/HospitalList";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import instance from "util/Axios";

export const LikeHospital = (props) => {
  const [data, setData] = useState([]);
  const location = useSelector((state) => state.user.location);
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
  
  useEffect(() => {
    instance
      .post(`/user/hospital/marklist`, {
        // hour: now.getHours(),
        // min: now.getMinutes(),
        hour: 19,
        min: 30,
        day: now.getDay(),
      })
      .then((response) => {
        setTimeout(() => {}, 3000);
        if (response.data !== "null") {
          makeHospitalList(response.data);
        }
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
      });
  }, []);
  return (
    <div>
      <div
        className=" absolute rounded-t-xl top-[100px] h-[60px] w-[170px] bg-[#FFE194]"
        onClick={props.linkLikeHospital}
      >
        <p className="text-center leading-[60px] text-xl font-semibold">
          찜한 병원
        </p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[171px] h-[60px] w-[120px] bg-[#D4F0FF]"
        onClick={props.linkMyDrug}
      >
        <p className="text-center leading-[60px] text-xl ">나의 약봉지</p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]"
        onClick={props.linkBasketDrug}
      >
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full h-full bg-[#FFE194]">
        <div className="relative overflow-x-scroll">
          {data.map((items) => (
            <HospitalList props={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

LikeHospital.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LikeHospital);
