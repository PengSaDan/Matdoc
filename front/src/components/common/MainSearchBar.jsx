// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { drugSearchActions } from "store/features/drugSearchSlice";

export const MainSearchBar = (props) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    if (props.type === "drug") {
      dispatch(drugSearchActions.setName(word));
    }
  }, [word]);

  const changeWord = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    setColor(
      " absolute h-[60px] w-[380px] items-center text-2xl leading-[60px] top-[100px] placeholder-[#A1AFA9] p-4 left-[14px]  rounded-[10px] " +
        props.color
    );
  }, []);
  
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className={color}
        value={word}
        onChange={changeWord}
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
