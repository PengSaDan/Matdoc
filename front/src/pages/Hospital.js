import Header from "components/common/Header";
import React from "react";
import { connect } from "react-redux";

export const Hospital = (props) => {
  return (
    <div className="bg-opacity-10 bg-[#00C192] w-screen h-screen overflow-hidden">
      <Header />
      <div>병원 검색</div>
    </div>
  );
};

Hospital.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);
