import Header from "components/common/Header";
import DetailSerachBar from "components/common/DetailSearchBar";
import React, { useState } from "react";
import { connect } from "react-redux";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import DrugCard from "components/drug/DrugCard";
import image from "assets/images/circle.jpg";

const pills = [
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
  {
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: image,
  },
];

export const DrugList = (props) => {
  const [detail, setDetail] = useState(false);
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
    <div className="bg-[#ECF9F6] w-screen h-screen mx-auto">
      <Header />
      <div>
        <DetailSerachBar color={"bg-[#D7F1FF]"} />
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
            <DrugCard pill={pill} />
          ))}
        </div>
        {detail && (
          <DrugFilter
            selectModalOpenHandler={selectModalOpenHandler}
            shape={shape}
            line={line}
            setDetail={setDetail}
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
