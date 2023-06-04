// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const DetailSearchBar = (props) => {
  const [color, setColor] = useState("");
  const Search = () => {
    //페이지넘기기
  };
  useEffect(() => {
    setColor(
      "absolute h-[60px] w-[290px] text-2xl leading-[60px] top-[100px] text-[#A1AFA9] left-[12px] rounded-[10px] " +
        props.color
    );
  }, []);

  return (
    <div>
      <div className={color}>ㅤ검색어를 입력해주세요</div>
      <div
        className="absolute bg-[#00C192] h-[60px] w-[85px] text-2xl leading-[60px] top-[100px]
          text-[#ffffff] font-bold left-[311px] text-center rounded-[10px]"
        onClick={() => {}}
      >
        검색
      </div>
    </div>
  );
};

DetailSearchBar.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSearchBar);
