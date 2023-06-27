// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { drugSearchActions } from "store/features/drugSearchSlice";

export const DetailSearchBar = (props) => {
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

  const Search = () => {
    if (props.type === "drug") {
      props.reSearch();
    }
    //페이지넘기기
  };
  useEffect(() => {
    setColor(
      "absolute h-[60px] w-[290px] text-2xl leading-[60px] top-[100px] placeholder-[#A1AFA9] p-4 left-[12px] rounded-[10px] " +
        props.color
    );
  }, []);

  return (
    <div>
      <input
        type="text"
        className={color}
        placeholder="검색어를 입력해주세요"
        value={word}
        onChange={changeWord}
      />
      <div
        className="absolute bg-[#00C192] h-[60px] w-[85px] text-2xl leading-[60px] top-[100px]
          text-[#ffffff] font-bold left-[311px] text-center rounded-[10px]"
        onClick={() => Search()}
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
