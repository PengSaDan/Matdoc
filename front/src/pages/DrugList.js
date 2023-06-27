import Header from "components/common/Header";
import DetailSerachBar from "components/common/DetailSearchBar";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import DrugCard from "components/drug/DrugCard";
import instance from "util/Axios";
import { drugSearchActions } from "store/features/drugSearchSlice";
import qs from "qs";

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

  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    instance
      .get(`/drug/find`, {
        params: {
          name: request.name,
          colors: request.colors,
          type: request.type,
          line: request.line,
          mark: request.mark,
        },
        paramsSerializer: params => {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      .then((response) => {
        // console.log(response);
        setDrugs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    window.location.reload();
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
              {drugs.length} 건
            </p>
            <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
          </div>
        )}
        <div className="absolute w-full overflow-scroll h-3/4 top-56">
          {drugs.map((drug) => (
            <DrugCard key={drug.drugId} drug={drug} />
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
