import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "components/common/Header";
import { FaPlusCircle } from "react-icons/fa";
import { basketActions } from "store/features/drugBasketSlice";
import { useState } from "react";
import instance from "util/Axios";

export const DrugDetail = (props) => {
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.login);

  const [openModal, setOpenModal] = useState(false);

  const [drug, setDrug] = useState({});
  const [drugDesc, setDrugDesc] = useState({});
  const [drugAvoid, setDrugAvoid] = useState([]);
  const [imagePath, setImagePath] = useState([]);

  useEffect(() => {
    instance
      .get(`/drug/detail/${params.drugId}`)
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        setDrug(response.data.drug);
        setDrugDesc(response.data.desc);
        setDrugAvoid(response.data.avoid);

        let shape = "";
        let color = "";
        switch (response.data.drug.drugType) {
          case "원형":
            shape = "circle";
            break;
          case "타원형":
            shape = "oval";
            break;
          case "장방형":
            shape = "rectangle";
            break;
          case "반원형":
            shape = "semicircular";
            break;
          case "삼각형":
            shape = "triangle";
            break;
          case "사각형":
            shape = "square";
            break;
          case "마름모형":
            shape = "rhombus";
            break;
          case "오각형":
            shape = "pentagon";
            break;
          case "육각형":
            shape = "hexagon";
            break;
          case "팔각형":
            shape = "octagon";
            break;
          default:
            shape = "circle";
            break;
        }
        switch (response.data.drug.drugColorf) {
          case "하양":
            color = "white";
            break;
          case "노랑":
            color = "yellow";
            break;
          case "주황":
            color = "orange";
            break;
          case "분홍":
            color = "pink";
            break;
          case "빨강":
            color = "red";
            break;
          case "갈색":
            color = "brown";
            break;
          case "연두":
            color = "lightgreen";
            break;
          case "초록":
            color = "green";
            break;
          case "청록":
            color = "deepgreen";
            break;
          case "파랑":
            color = "blue";
            break;
          case "남색":
            color = "indigo";
            break;
          case "자주":
            color = "redviolet";
            break;
          case "보라":
            color = "violet";
            break;
          case "회색":
            color = "gray";
            break;
          case "검정":
            color = "black";
            break;
          case "투명":
            color = "transparent";
            break;
          default:
            color = "white";
        }
        setImagePath([require(`../assets/images/drug/${shape}_${color}.jpg`)]);

        if(response.data.drug.drugName === '레벡스캡슐(운지다당체)') {
          setImagePath([require(`../assets/images/drug/레벡스캡슐(운지다당체).jpg`)]);
        }else if(response.data.drug.drugName === '유한이브펜연질캡슐') {
          setImagePath([require(`../assets/images/drug/유한이브펜연질캡슐.jpg`)]);
        }else if(response.data.drug.drugName === '이지엔6이브연질캡슐') {
          setImagePath([require(`../assets/images/drug/이지엔6이브연질캡슐.jpg`)]);
        }else if(response.data.drug.drugName === '탁센이브연질캡슐') {
          setImagePath([require(`../assets/images/drug/탁센이브연질캡슐.jpg`)]);
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  const goBasketDrug = () => {
    navigation(`/mypage/basketDrug`);
  };

  const pushBasket = () => {
    dispatch(
      basketActions.pushBasket({
        drugId: drug.drugId,
        name: drug.drugName,
      })
    );
  };

  const openModalhandler = () => {
    setOpenModal(true);
  };

  const closeModalhandler = () => {
    setOpenModal(false);
  };

  const goDetail = (props) => {
    navigation(`/drugDetail/${props}`);
  };

  return (
    <div className="bg-[#ECF9F6] w-screen min-h-screen mx-auto overflow-scroll">
      <Header />
      <img
        src={imagePath[0]}
        alt={drug.drugName}
        className="w-screen h-[200px] border-t-2 border-b-2 mt-5"
      />
      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4">
        <div className="flex">
          <div className="mr-2 text-2xl font-bold">{drug.drugName}</div>
          {loginStatus && (
            <div
              className="rounded-full shadow-xl w-9 h-9"
              onClick={() => {
                pushBasket();
                openModalhandler();
              }}
            >
              <FaPlusCircle className="text-4xl text-[#00C192]" />
            </div>
          )}
        </div>
        <div className="p-2">
          <p>
            성분 : {drug.drugIngre !== "null" ? drug.drugIngre : "정보 없음"}
          </p>
          <p>
            성상 : {drug.drugColorf === "-" ? "" : drug.drugColorf + " "}
            {drug.drugColorb === "-" ? "" : drug.drugColorb}
          </p>
          <p>제형 : {drug.drugType !== "null" ? drug.drugType : "정보 없음"}</p>
          <p>
            업체명 :{" "}
            {drugDesc.drugDescCom !== "null"
              ? drugDesc.drugDescCom
              : "정보 없음"}
          </p>
          <p>병용금기 : {drugAvoid.length === 0 && "정보 없음"}</p>
          <div className="ml-4">
            {drugAvoid.map((avoid) => (
              <span
                key={avoid.drugAvoidB}
                onClick={() => {
                  goDetail(avoid.drugAvoidB);
                }}
              >
                {avoid.drugAvoidNameB},{" "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4 mb-5">
        <p className="text-xl font-semibold">효능/효과</p>
        <p>
          {drugDesc.drugDescEffect !== "null"
            ? drugDesc.drugDescEffect
            : "정보 없음"}
        </p>
        <p className="mt-3 text-xl font-semibold">안전사용</p>
        <p>
          {drugDesc.drugDescSafety !== "null"
            ? drugDesc.drugDescSafety
            : "정보 없음"}
        </p>
        <p className="mt-3 text-xl font-semibold">사용법</p>
        <p>
          {drugDesc.drugDescUse !== "null" ? drugDesc.drugDescUse : "정보 없음"}
        </p>
      </div>
      {openModal && (
        <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
          <div className="text-xl">
            약 바구니에 약을 담았습니다. <br /> 마이페이지로 이동하시겠습니까?
          </div>
          <div className="flex mt-5 font-semibold text-center place-content-around">
            <div
              className="bg-[#00C192] w-[80px] p-2 rounded-[10px] border shadow-xl border-[#00C192]"
              onClick={() => {
                goBasketDrug();
              }}
            >
              확인
            </div>
            <div
              className="w-[80px] border rounded-[10px] shadow-xl p-2 border-[#00C192]"
              onClick={() => {
                closeModalhandler();
              }}
            >
              취소
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DrugDetail.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugDetail);
