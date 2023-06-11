// import PropTypes from "prop-types";
import Header from "components/common/Header";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RiMapPin5Line } from "react-icons/ri";
import { RiHospitalLine } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";
import { RiCheckboxFill } from "react-icons/ri";
import { LuParkingSquare } from "react-icons/lu";
import { LuParkingSquareOff } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const part = [
  { id: 0, part: "전체" },
  { id: 1, part: "내과" },
  { id: 12, part: "안과" },
  { id: 4, part: "외과" },
  { id: 49, part: "치과" },
  { id: 11, part: "소아과" },
  { id: 2, part: "신경과" },
  { id: 14, part: "피부과" },
  { id: 15, part: "비뇨기과" },
  { id: 10, part: "산부인과" },
  { id: 8, part: "성형외과" },
  { id: 5, part: "정형외과" },
  { id: 23, part: "가정의학과" },
  { id: 9, part: "마취통증과" },
  { id: 13, part: "이비인후과" },
  { id: 3, part: "정신의학과" },
  { id: 100, part: "한의원" },
];

const now = new Date();
export const HosptialDetail = (props) => {
  const { state } = useLocation();
  const [parking, setParking] = useState(false);
  const [mark, setMark] = useState(false);
  const days = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  // console.log(now.getDay());
  //마크 바꿔주기
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-scroll ">
      <Header />
      <img src={state.hospital.poto} alt="사진"></img>
      {/* <div className=" w-[412px] h-[412px] bg-slate-300">
      </div> */}
      <div className="flex col-span-2 mt-10 ml-3 ">
        <p className="text-3xl font-semibold mr-5 ">
          {state.hospital.hospitalName}
        </p>
        {!mark && (
          <RiAddBoxLine
            size={40}
            color="00C192"
            onClick={() => {
              setMark(true);
            }}
          />
        )}
        {mark && (
          <RiCheckboxFill
            size={40}
            color="00C192"
            onClick={() => {
              setMark(false);
            }}
          />
        )}
      </div>
      <div className=" h-full w-[412px] ">
        <div className="h-[280px] w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          {days.map((day, idx) => {
            return (
              <div>
                {(idx + 1) % 7 === now.getDay() && (
                  <div className="h-[40px] leading-[40px] flex col-span-2 bg-[#D1F1C9] text-lg">
                    <p className="w-[130px] text-center">{day}</p>
                    <p className="w-[250px] text-center">
                      {state.hospital.hospitalTime[idx]}
                    </p>
                  </div>
                )}
                {(idx + 1) % 7 !== now.getDay() && (
                  <div className="h-[40px] leading-[40px] flex col-span-2 text-lg">
                    <p className="w-[130px] text-center">{day}</p>
                    <p className="w-[250px] text-center">
                      {state.hospital.hospitalTime[idx]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className=" w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7 text-xl font-semibold">
          <div className="relative w-[340px] ml-4 ">
            <div className="h-2"></div>
            <div className="mt-4 flex col-span-2">
              <RiMapPin5Line className="absolute" size="25" />
              <p className="ml-8"> {state.hospital.address}</p>
            </div>
            <div className="mt-4 flex col-span-2">
              <LuPhone className="absolute" size="25" />
              <p className="ml-8"> {state.hospital.hospitalTel}</p>
            </div>
            <div className="mt-4 flex col-span-2">
              <RiHospitalLine className="absolute" size="25" />
              <p className="ml-8">{state.hospital.hospitalPart}</p>
            </div>
            <div>
              {state.hospital.hospitalParking && (
                <div className="mt-4 flex col-span-2">
                  <LuParkingSquare className="absolute" size="25" />
                  <p className="ml-8"> 주차가능</p>
                </div>
              )}
              {!state.hospital.hospitalParking && (
                <div className="mt-4 flex col-span-2">
                  <LuParkingSquareOff className="absolute" size="25" />
                  <p className="ml-8"> 주차정보없음</p>
                </div>
              )}
            </div>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">전문의</p>
            <p className="ml-4 mt-3 whitespace-pre-line">
              {state.hospital.hospitalDoc}
            </p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">의료장비</p>
            <p className="ml-4 mt-3">{state.hospital.hospitalDevice}</p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">기타</p>
            <p className="ml-4 mt-3">{state.hospital.hospitalSpecial}</p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="h-[80px] w-[380px]"></div>
      </div>
    </div>
  );
};

HosptialDetail.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HosptialDetail);
