// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import List from "components/hospital/HospitalList";
import React from "react";
import { connect } from "react-redux";

export const HospitalList = (prop) => {
  const props = [
    {
      name: "봉담삼육오웰의원",
      distance: "1.5KM",
      address: "경기도 화성시",
      tel: "031-123-1234",
    },
    {
      name: "병원2",
      distance: "1.5KM",
      address: "경기도 화성시",
      tel: "031-123-1234",
    },
    {
      name: "병원3",
      distance: "1.5KM",
      address: "경기도 화성시",
      tel: "031-123-1234",
    },
    {
      name: "병원4",
      distance: "1.5KM",
      address: "경기도 화성시",
      tel: "031-123-1234",
    },
    {
      name: "병원5",
      distance: "1.5KM",
      address: "경기도 화성시",
      tel: "031-123-1234",
    },
  ];
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen ">
      <Header />
      <DetailSerachBar color={"bg-[#FFF5DA]"} />
      <div className="absolute w-full top-56">
        {props.map((i) => {
          return <List props={i} />;
        })}
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
