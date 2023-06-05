import Header from "components/common/Header";
import MainSearchBar from "components/common/MainSearchBar";
import HospitalFilter from "components/hospital/HospitalFilter";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Hospital = (props) => {
  const navigation = useNavigate();

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden">
      <Header />
      <div>
        <MainSearchBar color={"bg-[#FFF5DA]"} />
        <HospitalFilter />
        <div
          className="absolute h-[80px] w-[380px] bg-[#00C192] top-[761px] rounded-[10px] text-3xl text-center leading-[80px] text-white font-bold left-[14px]"
          onClick={() => {
            navigation("/hospitalList");
          }}
        >
          검색
        </div>
      </div>
    </div>
  );
};

Hospital.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);
