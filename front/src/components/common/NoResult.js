import React from "react";
import { FaSadTear } from "react-icons/fa";
import { connect } from "react-redux";

export const NoResult = (props) => {
  return (
    <>
      <div className="flex justify-center w-full mt-5">
        <FaSadTear className="text-[#00C192] text-[200px]" />
      </div>
      <div className="mt-5 text-center text-[#303030] font-bold text-3xl">
        검색 결과가 없습니다
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NoResult);
