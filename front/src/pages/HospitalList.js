// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import HospitalFilter from "components/hospital/HospitalFilter";
import List from "components/hospital/HospitalList";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import instance from "util/Axios";

export const HospitalList = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .post(`/hospital/find`, {
        word: "성모",
        e: 126.9622,
        w: 126.944,
        s: 37.2154,
        n: 37.2231,
        hour: 1,
        min: 30,
        day: 2,
        part: [1, 4],
        open: [0],
      })
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response.data);
        // console.log("병원검색입니다");
        setData(response.data);
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
      });
  }, []);
  // console.log(data.data);
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen ">
      <Header />
      <DetailSerachBar color={"bg-[#FFF5DA]"} />
      <div
        className=" absolute top-[170px] bg-[#FFF5DA] left-[14px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-between"
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        <p className="text-[#303030] text-xl ml-3 mt-1 font-semibold">
          {props.length} 건
        </p>
        {!isopen && (
          <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
        )}
      </div>
      <div className="absolute w-full overflow-scroll top-56 h-3/4">
        {data.map((items, idx) => {
          return <List props={items} />;
        })}
      </div>
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
