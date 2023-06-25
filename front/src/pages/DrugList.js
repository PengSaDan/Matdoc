import Header from "components/common/Header";
import DetailSerachBar from "components/common/DetailSearchBar";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import DrugCard from "components/drug/DrugCard";
import tirenol from "assets/images/drug/tirenol.jpg";
import glucophage from "assets/images/drug/glucophage.jpg";
import myRept from "assets/images/drug/my-rept.jpg";
import farlutal from "assets/images/drug/farlutal.jpg";
import hycraduo from "assets/images/drug/hycraduo.jpg";
import novamet from "assets/images/drug/novamet.jpg";
import locol from "assets/images/drug/locol.jpg";
import instance from "util/Axios";
import { drugSearchActions } from "store/features/drugSearchSlice";

const pills = [
  {
    drugId: 1,
    name: "타이레놀정500mg Tylenol Tab. 500mg",
    ingredient: "아세트아미노펜",
    shape: "장방형, 하양",
    image: tirenol,
  },
  {
    drugId: 2,
    name: "	글루코파지엑스알서방정 Glucophage XR Tab.",
    ingredient: "메트포르민염산염",
    shape: "장방형, 하양",
    image: glucophage,
  },
  {
    drugId: 3,
    name: "마이렙트정500mg My-Rept Tab. 500mg",
    ingredient: "미코페놀레이트모페틸",
    shape: "장방형, 하양",
    image: myRept,
  },
  {
    drugId: 4,
    name: "파루탈정 Farlutal Tab.",
    ingredient: "메드록시프로게스테론아세테이트",
    shape: "장방형, 하양",
    image: farlutal,
  },
  {
    drugId: 5,
    name: "하이크라듀오정500mg Hycraduo Tab. 500mg",
    ingredient: "아목시실린수화물, 묽은클라불란산칼륨",
    shape: "장방형, 하양",
    image: hycraduo,
  },
  {
    drugId: 6,
    name: "노바메트지알정500mg Novamet GR Tab. 500mg",
    ingredient: "메트포르민염산염",
    shape: "장방형, 하양",
    image: novamet,
  },
  {
    drugId: 7,
    name: "로콜서방정500mg Locol SR Tab. 500mg",
    ingredient: "니코틴산",
    shape: "장방형, 하양",
    image: locol,
  },
];

export const DrugList = (props) => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.drugSearch.filter);

  const [detail, setDetail] = useState(false);
  const [modal, setModal] = useState("");
  const [shape, setShape] = useState("모양");
  const [line, setLine] = useState("분할선");

  const [nameSearch, setNameSearch] = useState("");
  const [colorsSearch, setColorsSearch] = useState([]);
  const [typeSearch, setTypeSearch] = useState("");
  const [lineSearch, setLineSearch] = useState("");
  const [markSearch, setMarkSearch] = useState("");

  useEffect(() => {
    instance
      .post(`/drug/find`, request)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [request]);

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

  const reSearch = () => {
    const request = {
      name: nameSearch,
      colors: colorsSearch,
      type: typeSearch,
      line: lineSearch,
      mark: markSearch,
    };

    dispatch(drugSearchActions.setFilter(request));

  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen mx-auto">
      <Header />
      <div>
        <DetailSerachBar
          color={"bg-[#D7F1FF]"}
          type="drug"
          selectNameHandler={selectNameHandler}
          reSearch={reSearch}
        />
        {!detail && (
          <div
            className="absolute top-[170px] bg-[#D7F1FF] left-[14px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-between rounded-[10px] "
            onClick={() => {
              setDetail((e) => !e);
            }}
          >
            <p className="text-[#303030] text-xl ml-3 mt-1 font-semibold">
              {pills.length} 건
            </p>
            <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
          </div>
        )}
        <div className="absolute w-full overflow-scroll h-3/4 top-56">
          {pills.map((pill) => (
            <DrugCard key={pill.drugId} pill={pill} />
          ))}
        </div>
        {detail && (
          <DrugFilter
            selectModalOpenHandler={selectModalOpenHandler}
            shape={shape}
            line={line}
            setDetail={setDetail}
            selectColorHandler={selectColorHandler}
            selectMarkHandler={selectMarkHandler}
          />
        )}
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

DrugList.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugList);
