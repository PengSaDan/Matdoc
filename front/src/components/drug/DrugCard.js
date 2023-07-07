// import PropTypes from 'prop-types'
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { basketActions } from "store/features/drugBasketSlice";
import { useState } from "react";

export const DrugCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.login);
  const [imagePath, setImagePath] = useState([]);

  useEffect(() => {
    let shape = "";
    let color = "";
    switch (props.drug.drugType) {
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
    switch (props.drug.drugColorf) {
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
    setImagePath([require(`../../assets/images/drug/${shape}_${color}.jpg`)]);
    
    if(props.drug.drugName === '레벡스캡슐(운지다당체)') {
      setImagePath([require(`../../assets/images/drug/레벡스캡슐(운지다당체).jpg`)]);
    }else if(props.drug.drugName === '유한이브펜연질캡슐') {
      setImagePath([require(`../../assets/images/drug/유한이브펜연질캡슐.jpg`)]);
    }else if(props.drug.drugName === '이지엔6이브연질캡슐') {
      setImagePath([require(`../../assets/images/drug/이지엔6이브연질캡슐.jpg`)]);
    }else if(props.drug.drugName === '탁센이브연질캡슐') {
      setImagePath([require(`../../assets/images/drug/탁센이브연질캡슐.jpg`)]);
    }
  
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const goDetail = () => {
    navigation(`/drugDetail/${props.drug.drugId}`);
  };

  const goBasketDrug = () => {
    navigation(`/mypage/basketDrug`);
  };

  const pushBasket = () => {
    dispatch(
      basketActions.pushBasket({
        drugId: props.drug.drugId,
        name: props.drug.drugName,
      })
    );
  };

  const openModalhandler = () => {
    setOpenModal(true);
  };

  const closeModalhandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="w-full p-4 border-t-2" onClick={() => goDetail()}>
        <div className="text-2xl font-semibold">{props.drug.drugName}</div>
        <div className="flex mt-2">
          <img
            src={imagePath[0]}
            alt={props.drug.drugName}
            className="rounded-[10px] w-2/5 h-[100px] border"
          />
          <div className="relative w-3/5 p-2">
            <div>
              성분 :{" "}
              {props.drug.drugIngre === "null"
                ? "정보 없음"
                : props.drug.drugIngre}
            </div>
            <div className="mt-1">
              모양 : {props.drug.drugType},{" "}
              {props.drug.drugColorf === "-" ? "" : props.drug.drugColorf + " "}
              {props.drug.drugColorb === "-" ? "" : props.drug.drugColorb}
            </div>
            {loginStatus && (
              <div
                className="absolute rounded-full shadow-xl right-1 bottom-1"
                onClick={(e) => {
                  e.stopPropagation();
                  pushBasket();
                  openModalhandler();
                }}
              >
                <FaPlusCircle className="text-4xl text-[#00C192]" />
              </div>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed top-0 z-10 w-screen h-screen">
          <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
            <div className="text-xl text-center">
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
        </div>
      )}
    </>
  );
};

DrugCard.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugCard);
