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

const now = new Date();
export const HosptialDetail = (props) => {
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
      <div className=" w-[412px] h-[412px] bg-slate-300"> 지도지도넓은지도</div>
      <div className="flex col-span-2 mt-10 ml-3 ">
        <p className="text-3xl font-semibold mr-5 ">봉담삼육오웰의원</p>
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
                    <p className="w-[250px] text-center">09:00~18:00</p>
                  </div>
                )}
                {(idx + 1) % 7 !== now.getDay() && (
                  <div className="h-[40px] leading-[40px] flex col-span-2 text-lg">
                    <p className="w-[130px] text-center">{day}</p>
                    <p className="w-[250px] text-center">09:00~18:00</p>
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
              <p className="ml-8"> 경기도 화성시 봉담읍 경기도 화성시 봉담읍</p>
            </div>
            <div className="mt-4 flex col-span-2">
              <LuPhone className="absolute" size="25" />
              <p className="ml-8"> 031-123-1234</p>
            </div>
            <div className="mt-4 flex col-span-2">
              <RiHospitalLine className="absolute" size="25" />
              <p className="ml-8">
                내과, 정형외과, 피부과, 내과, 정형외과, 피부과, 내과, 정형외과,
                피부과
              </p>
            </div>
            <div>
              {parking && (
                <div className="mt-4 flex col-span-2">
                  <LuParkingSquare className="absolute" size="25" />
                  <p className="ml-8"> 주차가능</p>
                </div>
              )}
              {!parking && (
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
            <p className="ml-4 mt-3">내과 : 1명</p>
            <p className="ml-4 mt-3">정형외과 : 10명</p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">의료장비</p>
            <p className="ml-4 mt-3">
              CT/체외충격파쇄석기/MRI/양전자단층촬영기
              (PET)/골밀도검사기/콘빔CT/초음파영상진단기/혈액투석을위한인공신장기/유방촬영장치
            </p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">기타</p>
            <p className="ml-4 mt-3">
              제3차 의료급여기관/응급의료병원/성인·소아 중환자실/신생아
              중환자실/가정간호실시병원/혈액투석/체외충격파쇄석술/인공와우이식술/완화의료전문기관
            </p>
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
