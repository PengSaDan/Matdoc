import Header from "components/common/Header";
import MainSearchBar from "components/common/MainSearchBar";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { drugSearchActions } from "store/features/drugSearchSlice";

export const Drug = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const request = useSelector((state) => state.drugSearch.filter);

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

    if (props === "전체") {
      dispatch(drugSearchActions.setType(""));
    } else {
      dispatch(drugSearchActions.setType(props));
    }

    setModal("");
  };

  const selectLineHandler = (props) => {
    setLine(props);

    // eslint-disable-next-line default-case
    switch (props) {
      case "없음":
        dispatch(drugSearchActions.setLine("oxo"));
        break;
      case "(+)형":
        dispatch(drugSearchActions.setLine("+"));
        break;
      case "(-)형":
        dispatch(drugSearchActions.setLine("-"));
        break;
      case "기타":
        dispatch(drugSearchActions.setLine(""));
        break;
      case "전체":
        dispatch(drugSearchActions.setLine(""));
        break;
    }

    setModal("");
  };

  useEffect(() => {
    if (shape === "모양") {
      dispatch(drugSearchActions.setType(""));
    }
    if (line === "분할선") {
      dispatch(drugSearchActions.setLine(""));
    }
  }, []);

  const searchPills = () => {
    let queryString = "";
    if(request.name) {
      queryString += `name=${request.name}&`
    }
    if(request.colors.length !== 0) {
      queryString += `colors=${request.colors}&`
    }
    if(request.type) {
      queryString += `type=${request.type}&`
    }
    if(request.line) {
      queryString += `line=${request.line}&`
    }
    if(request.mark) {
      queryString += `mark=${request.mark}&`
    }
    
    navigation(
      `/druglist?${queryString}`
    );
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden mx-auto">
      <Header />
      <div>
        <MainSearchBar color={"bg-[#D7F1FF]"} type="drug" />
        <DrugFilter
          selectModalOpenHandler={selectModalOpenHandler}
          shape={shape}
          line={line}
        />
        <div
          className="absolute left-[16px] top-[760px] text-center leading-[80px] w-[380px] h-[80px] bg-[#00C192] rounded-[10px] text-3xl text-white font-bold"
          onClick={() => searchPills()}
        >
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
