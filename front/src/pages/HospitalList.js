// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import HospitalFilter from "components/hospital/HospitalFilter";
import List from "components/hospital/HospitalList";
import React, { useState } from "react";
import { connect } from "react-redux";

const props = [
  {
    hospitalName: "봉담삼육오웰의원",
    hospitalOpen: true,
    distance: "1.5KM",
    address: "경기도 화성시",
    hospitalTel: "031-123-1234",
  },
  {
    hospitalName: "병원2",
    hospitalOpen: false,
    distance: "1.5KM",
    address: "경기도 화성시",
    hospitalTel: "031-123-1234",
  },
  {
    hospitalName: "병원3",
    hospitalOpen: true,
    distance: "1.5KM",
    address: "경기도 화성시",
    hospitalTel: "031-123-1234",
  },
  {
    hospitalName: "병원4",
    hospitalOpen: true,
    distance: "1.5KM",
    address: "경기도 화성시",
    hospitalTel: "031-123-1234",
  },
  {
    hospitalName: "병원5",
    hospitalOpen: false,
    distance: "1.5KM",
    address: "경기도 화성시",
    hospitalTel: "031-123-1234",
  },
];
export const HospitalList = (prop) => {
  const [isopen, setIsOpen] = useState(false);

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
        {props.map((i) => {
          return <List props={i} />;
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
