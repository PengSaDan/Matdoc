import Header from "components/common/Header";
import DetailSerachBar from "components/common/DetailSearchBar";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import DrugFilter from "components/drug/DrugFilter";
import SelectModal from "components/drug/SelectModal";
import DrugCard from "components/drug/DrugCard";
import instance from "util/Axios";
import { drugSearchActions } from "store/features/drugSearchSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import QueryString from "qs";

export const DrugList = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const request = useSelector((state) => state.drugSearch.filter);

  const [searchParams, setSearchParams] = useSearchParams();

  const [detail, setDetail] = useState(false);
  const [modal, setModal] = useState("");
  const [shape, setShape] = useState("모양");
  const [line, setLine] = useState("분할선");

  const [drugs, setDrugs] = useState([]);
  const [drugsLength, setDrugsLength] = useState(0);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const queryObj = QueryString.parse(searchParams.toString());

    setisLoading(true);

    instance
      .post(`/drug/find`, {
        name: queryObj.name,
        colors: queryObj.colors,
        type: queryObj.type,
        line: queryObj.line,
        mark: queryObj.mark,
      })
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        if (response.data !== null) {
          setDrugs(response.data);
          setDrugsLength(response.data.length);
          setisLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  const selectModalOpenHandler = (props) => {
    setModal(props);
  };

  const selectModalCloseHandler = (props) => {
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

  const selectShapeHandler = (props) => {
    setShape(props);

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

  const reSearch = () => {
    setDetail(false);

    if (shape === "모양") {
      dispatch(drugSearchActions.setType(""));
    }
    if (line === "분할선") {
      dispatch(drugSearchActions.setLine(""));
    }

    let queryString = "";
    if (request.name) {
      queryString += `name=${request.name}&`;
    }
    if (request.colors.length !== 0) {
      queryString += `colors=${request.colors}&`;
    }
    if (request.type) {
      queryString += `type=${request.type}&`;
    }
    if (request.line) {
      queryString += `line=${request.line}&`;
    }
    if (request.mark) {
      queryString += `mark=${request.mark}&`;
    }

    navigation(`/druglist?${queryString}`);
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen mx-auto">
      <Header />
      <div>
        <DetailSerachBar
          color={"bg-[#D7F1FF]"}
          type="drug"
          reSearch={reSearch}
        />
        {!detail && !isLoading && (
          <div
            className="absolute top-[170px] bg-[#D7F1FF] left-[14px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-between rounded-[10px] "
            onClick={() => {
              setDetail((e) => !e);
            }}
          >
            <p className="text-[#303030] text-xl ml-3 mt-1 font-semibold">
              {drugsLength} 건
            </p>
            <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
          </div>
        )}
        {isLoading && (
          <div className="absolute w-full overflow-scroll h-3/4 top-56"></div>
        )}
        {!isLoading && (
          <div className="absolute w-full overflow-scroll h-3/4 top-56">
            {drugs.slice(0, 300).map((drug) => (
              <DrugCard key={drug.drugId} drug={drug} />
            ))}
          </div>
        )}

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
