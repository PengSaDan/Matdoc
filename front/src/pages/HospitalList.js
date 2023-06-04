// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import React from "react";
import { connect } from "react-redux";

export const HospitalList = (props) => {
  return (
    <div className="bg-opacity-10 bg-[#00C192] w-screen h-screen overflow-hidden">
      <Header />
      <DetailSerachBar color={"bg-[#FFF5DA]"} />
    </div>
  );
};

HospitalList.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList);
