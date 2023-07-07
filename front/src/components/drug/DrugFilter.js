import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ColorOptions from "./ColorOptions";
import { drugSearchActions } from "store/features/drugSearchSlice";

export const DrugFilter = (props) => {
  const dispatch = useDispatch();
  const [mark, setMark] = useState("");

  useEffect(() => {
    dispatch(drugSearchActions.setMark(mark));
  }, [mark])

  const changeMark = (e) => {
    setMark(e.target.value);
  }
  
  return (
    <div className="absolute bg-[#D7F1FF] h-[35em] w-11/12 top-[11em] left-4 rounded-[10px] p-5 mx-auto">
      <div className="text-[#303030] text-2xl font-semibold">색상</div>
      <ColorOptions />
      <div className="grid grid-cols-2 mt-8 justify-items-center">
        {props.shape === "모양" && (
          <div
            className="w-36 h-24 bg-[#D1F1C9] shadow-xl rounded-2xl leading-[6rem] text-center text-3xl text-[#303030] font-semibold"
            onClick={() => props.selectModalOpenHandler("shape")}
          >
            {props.shape}
          </div>
        )}
        {props.shape !== "모양" && (
          <div
            className="w-36 h-24 bg-[#D1F1C9] rounded-2xl leading-[6rem] text-center text-3xl text-[#303030] font-semibold border-[#96DE83] border-4"
            onClick={() => props.selectModalOpenHandler("shape")}
          >
            {props.shape}
          </div>
        )}

        {props.line === "분할선" && (
          <div
            className="w-36 h-24 bg-[#D1F1C9] shadow-xl rounded-2xl leading-[6rem] text-center text-3xl text-[#303030] font-semibold"
            onClick={() => props.selectModalOpenHandler("line")}
          >
            {props.line}
          </div>
        )}
        {props.line !== "분할선" && (
          <div
            className="w-36 h-24 bg-[#D1F1C9] rounded-2xl leading-[6rem] text-center text-3xl text-[#303030] font-semibold border-[#96DE83] border-4"
            onClick={() => props.selectModalOpenHandler("line")}
          >
            {props.line}
          </div>
        )}
      </div>
      <div className="text-[#303030] text-2xl font-semibold mt-8">식별문자</div>
      <input
        className="p-5 mt-3 ml-2 text-xl h-14 w-80 rounded-xl"
        type="text"
        placeholder="약에 적힌 문자를 입력하세요"
        value={mark}
        onChange={changeMark}
      ></input>
      {props.setDetail && (
        <div
          className="absolute top-0 right-0"
          onClick={() => {
            props.setDetail((e) => !e);
          }}
        >
          <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▲</p>
        </div>
      )}
    </div>
  );
};

DrugFilter.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugFilter);
