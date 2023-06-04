// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const MainSearchBar = (props) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(
      " absolute bg-[#FFF5DA] h-[60px] w-[390px] items-center text-2xl leading-[60px] top-[100px] text-[#A1AFA9] left-[12px]  rounded-[10px] " +
        props.color
    );
  }, []);
  return (
    <div>
      <div className={color}>ㅤ검색어를 입력해주세요</div>
    </div>
  );
};

MainSearchBar.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchBar);
