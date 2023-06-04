// import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Main = (props) => {
  const navigation = useNavigate();

  return (
    <div className="bg-[#00C192] w-screen h-screen overflow-hidden relative">
      <div className="flex w-screen p-3 text-white">
        <div className="text-6xl font-bold whitespace-nowrap">맞닥</div>
        <div className="mt-auto mb-0 ml-auto mr-0 text-3xl font-semibold whitespace-nowrap">당신만의 맞춤의사</div>
      </div>
      <div className="absolute bg-[#FFE194] rounded-full cursor-pointer w-80 h-80 -left-16 top-36 shadow-xl"
        onClick={() => {
          navigation("/hospital");
        }}
      >
        <div className="text-[#303030] text-5xl text-right leading-[20rem] px-10 font-semibold">병원 검색</div>
      </div>
      <div className="absolute bg-[#D4F0FF] rounded-full cursor-pointer w-72 h-72 -right-20 bottom-64 shadow-xl"
        onClick={() => {
          navigation("/drug");
        }}
      >
        <div className="text-[#303030] text-5xl text-left leading-[18rem] px-10 font-semibold">약 검색</div>
      </div>
      <div className="absolute bg-[#D1F1C9] rounded-full cursor-pointer w-96 h-96 -left-10 -bottom-24 shadow-xl"
        onClick={() => {
          navigation("/mypage");
        }}
      >
        <div className="text-[#303030] text-5xl text-center leading-[24rem] px-10 font-semibold">마이페이지</div>
      </div>
    </div>
  );
};

Main.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
