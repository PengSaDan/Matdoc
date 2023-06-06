// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const HospitalList = (props) => {
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  //props로 받은 영업중 여부가
  useEffect(() => {
    if (props.props.hospitalOpen) {
      setStatus("진료중");
      setColor(
        "relative -top-7 left-72 h-[42px] w-[110px] rounded-[50px] bg-[#32EBBE] "
      );
    } else {
      setStatus("휴진");
      setColor(
        "relative -top-7 left-72 h-[42px] w-[110px] rounded-[50px] bg-[#BDD3CE] "
      );
    }
  }, []);
  return (
    <div className=" w-[412px]  h-[160px] border-t-2">
      <p className="relative w-[390px] top-3 left-3 mb-2 text-3xl font-semibold">
        {props.props.hospitalName}
      </p>
      <p className="relative w-[390px] top-3 left-4 text-lg">
        {props.props.distance}
      </p>
      <p className="relative w-[390px] top-3 left-4 text-lg">
        {props.props.address}
      </p>
      <p className="relative w-[390px] top-3 left-4 text-lg">
        {props.props.hospitalTel}
      </p>
      <div className={color}>
        <p className="text-center leading-[42px] font-bold text-lg">{status}</p>
      </div>
    </div>
  );
};

HospitalList.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList);
