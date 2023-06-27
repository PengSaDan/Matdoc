import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import hycraduo from "assets/images/drug/hycraduo.jpg";
import Header from "components/common/Header";
import { FaPlusCircle } from "react-icons/fa";
import { basketActions } from "store/features/drugBasketSlice";
import { useState } from "react";
import instance from "util/Axios";

export const DrugDetail = (props) => {
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const pillDetail = {
    drugId: params.drugId,
    name: "하이크라듀오정500mg Hycraduo Tab. 500mg",
    ingredient: "아목시실린수화물, 묽은클라불란산칼륨", // 성분,
    color: "하양", // 성상
    shape: "장방형", // 제형
    company: "한국휴텍스제약(주)",
    image: hycraduo,
    avoid: "", // 병용금기
    // 효능, 효과
    effect:
      "급·만성 기관지염, 대엽성 및 기관지 폐렴, 농흉, 폐농양, 편도염, 부비동염, 중이염",
    safety:
      "이 약의 사용에 있어서 내성균의 발현을 방지하기 위하여 감수성을 확인하고 치료 상 필요한 최소 기간만 투여하는 것이 바람직하다.",
    usage:
      "성인의 중증 감염과 호흡기감염에 1회 2정, 1일 2회 12시간마다 경구투여한다. 신부전환자는 신기능의 정도에 따라 용량을 감소할 수 있다.",
  };

  useEffect(() => {
    instance
      .get(`/drug/detail/${params.drugId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  const goBasketDrug = () => {
    navigation(`/mypage`);
  };

  const pushBasket = () => {
    dispatch(
      basketActions.pushBasket({
        drugId: pillDetail.drugId,
        name: pillDetail.name,
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
    <div className="bg-[#ECF9F6] w-screen min-h-screen mx-auto overflow-scroll">
      <Header />
      <img
        src={pillDetail.image}
        alt={pillDetail.name}
        className="w-screen h-[200px] border-t-2 border-b-2 mt-5"
      />
      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4">
        <div className="flex">
          <div className="mr-2 text-2xl font-bold">{pillDetail.name}</div>
          <div
            className="rounded-full shadow-xl w-9 h-9"
            onClick={() => {
              pushBasket();
              openModalhandler();
            }}
          >
            <FaPlusCircle className="text-4xl text-[#00C192]" />
          </div>
        </div>
        <div className="p-2">
          <p>성분 : {pillDetail.ingredient}</p>
          <p>성상 : {pillDetail.color}</p>
          <p>제형 : {pillDetail.shape}</p>
          <p>업체명 : {pillDetail.company}</p>
          <p>
            병용금기 : {pillDetail.avoid ? pillDetail.avoid : "병용금기 없음"}
          </p>
        </div>
      </div>

      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4 mb-5">
        <p className="text-xl font-semibold">효능/효과</p>
        <p>{pillDetail.effect}</p>
        <p className="mt-3 text-xl font-semibold">안전사용</p>
        <p>{pillDetail.safety}</p>
        <p className="mt-3 text-xl font-semibold">사용법</p>
        <p>{pillDetail.usage}</p>
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
