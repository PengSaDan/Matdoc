// import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import Hospitalpart from "./Hospitalpart";
import HospitalTime from "./HospitalTime";

const part = [
  "전체",
  "내과",
  "소아과",
  "치과",
  "외과",
  "피부과",
  "신경과",
  "정형외과",
  "신경외과",
  "산부인과",
  "비뇨기과",
  "이비인후과",
  "가정의학과",
  "마취통증과",
  "정신의학과",
  "한의원",
];
const time = ["전체", "토요일", "일요일", "공휴일", "야간"];
export const HospitalFilter = (props) => {
  return (
    <div className="absolute top-[180px] h-[560px] w-[380px] bg-[#FFF5DA] left-[14px]  rounded-[10px]">
      <p className=" relative top-3 left-3 mb-2 text-3xl font-semibold">
        진료과목
      </p>
      <div className="flex flex-wrap row-span-3 col-span-6 ">
        {part.map((i) => {
          return <Hospitalpart part={i} />;
        })}
      </div>
      <div>
        <p className=" relative top-5 left-3 mb-2 text-3xl font-semibold">
          야간/휴일
        </p>
        <div className="flex flex-wrap row-span-3 col-span-6 ">
          {time.map((i) => {
            return <HospitalTime part={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

HospitalFilter.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalFilter);
