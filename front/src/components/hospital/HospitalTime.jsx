// import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const HospitalTime = (props) => {
  return (
    <div
      className="w-[110px] h-[42px] bg-[#D1F1C9] rounded-[50px] shadow-slate-400 shadow-md ml-3 mt-4"
      onClick={() => {}}
    >
      <p className="text-lg leading-[42px] text-center font-semibold ">
        {props.part}
      </p>
    </div>
  );
};

HospitalTime.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalTime);
