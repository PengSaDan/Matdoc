import Header from "components/common/Header";
import MainSearchBar from "components/common/MainSearchBar";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Hospital = (props) => {
  const navigation = useNavigate();

  return (
    <div className="bg-opacity-10 bg-[#00C192] w-screen h-screen overflow-hidden">
      <Header />
      <div>
        <MainSearchBar color={"bg-[#FFF5DA]"} />
        <div
          className="absolute top-96 h-40 w-40 bg-slate-400"
          onClick={() => {
            navigation("/hospitalList");
          }}
        >
          검색버튼
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
