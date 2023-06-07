import HospitalList from "components/hospital/HospitalList";
import React from "react";
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
export const LikeHospital = (prop) => {
  return (
    <div>
      <div className=" absolute rounded-t-xl top-[100px] h-[60px] w-[170px] bg-[#FFE194]">
        <p className="text-center leading-[60px] text-xl font-semibold">
          찜한 병원
        </p>
      </div>
      <div className="absolute rounded-t-xl top-[100px]  left-[171px] h-[60px] w-[120px] bg-[#D4F0FF]">
        <p className="text-center leading-[60px] text-xl ">나의 약봉지</p>
      </div>
      <div className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]">
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full h-full bg-[#FFE194]">
        <div className="relative overflow-x-scroll">
          {props.map((items) => (
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
