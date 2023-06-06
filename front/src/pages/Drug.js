import Header from "components/common/Header";
import MainSearchBar from "components/common/MainSearchBar";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import React, { useState } from "react";
import { connect } from "react-redux";

export const Drug = (props) => {
  const [modal, setModal] = useState("");
  const [shape, setShape] = useState("모양");
  const [line, setLine] = useState("분할선");

  const selectModalOpenHandler = (props) => {
    setModal(props);
  };

  const selectModalCloseHandler = (props) => {
    setModal("");
  };

  const selectShapeHandler = (props) => {
    setShape(props);
    setModal("");
  };

  const selectLineHandler = (props) => {
    setLine(props);
    setModal("");
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden mx-auto">
      <Header />
      <div>
        <MainSearchBar color={"bg-[#D7F1FF]"} />
        <DrugFilter
          selectModalOpenHandler={selectModalOpenHandler}
          shape={shape}
          line={line}
        />
        <div className="absolute left-[16px] top-[760px] text-center leading-[80px] w-[380px] h-[80px] bg-[#00C192] rounded-[10px] text-3xl text-white font-bold placeholder-[#A1AFA9]">
          검색
        </div>
      </div>

      {modal && (
        <SelectModal
          type={modal}
          selectModalCloseHandler={selectModalCloseHandler}
          selectShapeHandler={selectShapeHandler}
          selectLineHandler={selectLineHandler}
        />
      )}
    </div>
  );
};

Drug.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Drug);
