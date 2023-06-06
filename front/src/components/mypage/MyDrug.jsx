// import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";

export const MyDrug = (props) => {
  return (
    <div>
      <div className=" absolute rounded-t-xl top-[100px] h-[60px] w-[120px] bg-[#FFE194]">
        <p className="text-center leading-[60px] text-xl">찜한 병원</p>
      </div>
      <div className="absolute rounded-t-xl top-[100px]  left-[120px] h-[60px] w-[171px] bg-[#D4F0FF]">
        <p className="text-center leading-[60px] text-xl font-semibold ">
          나의 약봉지
        </p>
      </div>
      <div className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]">
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full h-full bg-[#D4F0FF]"></div>
    </div>
  );
};

MyDrug.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyDrug);
