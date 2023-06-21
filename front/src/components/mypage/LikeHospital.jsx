import HospitalList from "components/hospital/HospitalList";
import React from "react";
import { connect } from "react-redux";

export const LikeHospital = (props) => {
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
      <div className=" absolute top-[160px] w-full h-auto bg-[#FFE194]">
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
