// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const MainSearchBar = (props) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(
      " absolute bg-[#FFF5DA] h-[60px] w-[380px] items-center text-2xl leading-[60px] top-[100px] placeholder-[#A1AFA9] p-4 left-[14px]  rounded-[10px] " +
        props.color
    );
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className={color}
      />
    </div>
  );
};

MainSearchBar.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchBar);
