// import PropTypes from 'prop-types'
import React from "react";
import { connect, useDispatch } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { basketActions } from "store/features/drugBasketSlice";
import { useState } from "react";

export const DrugCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const goDetail = () => {
    navigation(`/drugDetail/${props.drug.drugId}`);
  };

  const goBasketDrug = () => {
    navigation(`/mypage`);
  }

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
            src={props.drug.drugImg}
            alt={props.drug.drugName}
            className="rounded-[10px] w-2/5 h-[100px]"
          />
          <div className="relative w-3/5 p-2">
            <div>성분 : {props.drug.drugIngre === "null" ? "정보 없음" : props.drug.drugIngre}</div>
            <div className="mt-1">모양 : {props.drug.drugType}, {props.drug.drugColorf === "-" ? "" : props.drug.drugColorf + " "}{props.drug.drugColorb === "-" ? "" : props.drug.drugColorb}</div>
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
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed top-0 z-10 w-screen h-screen">
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
