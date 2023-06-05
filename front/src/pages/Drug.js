import Header from "components/common/Header";
import React from "react";
import { connect } from "react-redux";

export const Drug = (props) => {
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden">
      <Header />
      <div>약 검색</div>
    </div>
  );
};

Drug.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Drug);
