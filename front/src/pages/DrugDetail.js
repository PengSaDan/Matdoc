import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import image from "assets/images/circle.jpg";
import Header from "components/common/Header";
import { FaPlusCircle } from "react-icons/fa";

export const DrugDetail = (props) => {
  const params = useParams();

  const pillDetail = {
    drugId: params.drugId,
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜", // 성분,
    color: "하양", // 성상
    shape: "타원형", // 제형
    company: "한국존슨앤드존슨판매(유)",
    image: image,
    avoid: "", // 병용금기
    effect: // 효능, 효과
      "아플때 먹으면 바로 행복해집니다. 꼭 물과 함께 복용하십시오 많은 사람들 가운데 당신만이 이 진통제를 먹을 자격이 있습니다.",
  };

  // console.log(params.drugId);
  // drugId로 상세정보를 요청하자

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
              console.log("바구니");
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
        <p>{pillDetail.effect}</p>
        <p className="mt-3 text-xl font-semibold">사용법</p>
        <p>{pillDetail.effect}</p>
      </div>
    </div>
  );
};

DrugDetail.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugDetail);
