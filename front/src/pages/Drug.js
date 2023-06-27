import Header from "components/common/Header";
import MainSearchBar from "components/common/MainSearchBar";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { drugSearchActions } from "store/features/drugSearchSlice";

export const Drug = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState("");
  const [shape, setShape] = useState("모양");
  const [line, setLine] = useState("분할선");

  const [nameSearch, setNameSearch] = useState("");
  const [colorsSearch, setColorsSearch] = useState([]);
  const [typeSearch, setTypeSearch] = useState("");
  const [lineSearch, setLineSearch] = useState("");
  const [markSearch, setMarkSearch] = useState("");

  const selectModalOpenHandler = (props) => {
    setModal(props);
  };

  const selectModalCloseHandler = (props) => {
    setModal("");
  };

  const selectNameHandler = (props) => {
    setNameSearch(props);
  };

  const selectColorHandler = (props) => {
    setColorsSearch(props);
  };

  const selectShapeHandler = (props) => {
    setShape(props);

    if (props === "전체") {
      setTypeSearch("");
    } else {
      setTypeSearch(props);
    }

    setModal("");
  };

  const selectLineHandler = (props) => {
    setLine(props);

    // eslint-disable-next-line default-case
    switch (props) {
      case "없음":
        setLineSearch("oxo");
        break;
      case "(+)형":
        setLineSearch("+");
        break;
      case "(-)형":
        setLineSearch("-");
        break;
      case "기타":
        setLineSearch("");
        break;
      case "전체":
        setLineSearch("");
        break;
    }

    setModal("");
  };

  const selectMarkHandler = (props) => {
    setMarkSearch(props);
  };

  const searchPills = () => {
    // axios요청을 해서 결과를 redux에 넣고 페이지 이동
    const request = {
      name: nameSearch,
      colors: colorsSearch,
      type: typeSearch,
      line: lineSearch,
      mark: markSearch,
    };

    dispatch(drugSearchActions.setFilter(request));

    navigation(
      `/druglist?name=${request.name}&colors=${request.colors}&type=${request.type}&line=${request.line}&mark=${request.mark}`
    );
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden mx-auto">
      <Header />
      <div>
        <MainSearchBar
          color={"bg-[#D7F1FF]"}
          type="drug"
          selectNameHandler={selectNameHandler}
        />
        <DrugFilter
          selectModalOpenHandler={selectModalOpenHandler}
          selectColorHandler={selectColorHandler}
          selectMarkHandler={selectMarkHandler}
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
