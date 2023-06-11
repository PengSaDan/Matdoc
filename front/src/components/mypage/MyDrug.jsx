// import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";
import tirenol from "assets/images/drug/tirenol.jpg"

const pills = [
  {
    drugId: 1,
    name: "타이레놀정500밀리그람(아세트아미노펜)",
    ingredient: "아세트아미노펜",
    shape: "타원형, 하양, 회색",
    image: tirenol,
  },
];

export const MyDrug = (props) => {
  return (
    <div>
      <div
        className=" absolute rounded-t-xl top-[100px] h-[60px] w-[120px] bg-[#FFE194]"
        onClick={props.linkLikeHospital}
      >
        <p className="text-center leading-[60px] text-xl">찜한 병원</p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[120px] h-[60px] w-[171px] bg-[#D4F0FF]"
        onClick={props.linkMyDrug}
      >
        <p className="text-center leading-[60px] text-xl font-semibold ">
          나의 약봉지
        </p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]"
        onClick={props.linkBasketDrug}
      >
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full bg-[#D4F0FF] p-5 h-[755px]">
        <div className="relative w-[370px] bg-[#FFFFFF] rounded-[10px] p-5">
          <div className="text-2xl font-bold">진통제</div>
          <div className="mt-5">
          아플때 먹으면 바로 행복해집니다. 꼭 물과 함께 복용하십시오 많은 사람들 가운데 당신만이 이 진통제를 먹을 자격이 있습니다.
          </div>
          <div className="grid grid-cols-3 mt-5">
          <img
            src={pills[0].image}
            alt={pills[0].name}
            className="rounded-[10px] border"
          />
          {/* <img
            src={pills[0].image}
            alt={pills[0].name}
            className="rounded-[10px] border"
          />
          <img
            src={pills[0].image}
            alt={pills[0].name}
            className="rounded-[10px] border"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

MyDrug.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyDrug);
