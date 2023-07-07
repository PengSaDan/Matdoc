// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Hospitalpart from "./Hospitalpart";
import HospitalTime from "./HospitalTime";

export const HospitalFilter = (props) => {
  return (
    <div className="absolute top-[11em]  h-[35em]  w-11/12 bg-[#FFF5DA] left-4  rounded-[10px]">
      <p className=" relative top-3 left-3 mb-2 text-3xl font-semibold">
        진료과목
      </p>
      <Hospitalpart />
      <div>
        <p className=" relative top-5 left-3 mb-2 text-3xl font-semibold">
          야간/휴일
        </p>
        <HospitalTime />
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
