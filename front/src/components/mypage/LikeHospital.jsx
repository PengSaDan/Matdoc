import HospitalList from "components/hospital/HospitalList";
import React from "react";
import { connect } from "react-redux";
import 충남대 from "assets/images/tmp/충남대.png";
import 최경호 from "assets/images/tmp/최경호.png";
const props = [
  {
    hospitalId: 33525,
    hospitalName: "최경호가정의학과의원",
    hospitalOpen: false,
    distance: "1.1KM",
    hospitalTel: "042-822-7589",
    address: "대전광역시 유성구 학하중앙로59번길 5-3 (덕명동. 호연빌딩)",
    hospitalPart:
      "내과, 외과, 소아과, 이비인후과, 피부과, 비뇨기과, 가정의학과",
    hospitalDoc: "내과 1",
    hospitalParking: true,
    hospitalDevice: "정보없음",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "휴진",
      "휴진",
    ],
    poto: 최경호,
  },
  {
    hospitalId: 36,
    hospitalName: "충남대학교병원",
    hospitalOpen: true,
    distance: "11.3KM",
    address: "대전 중구 문화로 282 충남대학교병원",
    hospitalTel: "1599-7123",
    hospitalPart:
      "내과, 소아청소년과, 외과, 마취통증의학과, 영상의학과, 정형외과, 신경과, 응급의학과, 신경외과, 안과, 비뇨의학과, 산부인과, 재활의학과, 정신건강의학과, 병리과, 심장혈관흉부외과, 가정의학과, 성형외과, 이비인후과, 방사선종양학과, 진단검사의학과, 피부과, 구강악안면외과, 핵의학과",
    hospitalDoc:
      "내과 : 78명 \n 소아청소년과	: 21명 \n 외과 : 17명 \n 마취통증의학과	: 15명 \n 영상의학과 : 15명 \n 정형외과	15명 \n 신경과 : 13명 \n 응급의학과 : 11명 \n 신경외과 : 10명 \n 안과 : 9명 \n 비뇨의학과	: 8명 \n 산부인과	: 8명 \n 재활의학과	: 8명 \n 정신건강의학과 :	8명 \n 병리과	: 7명 \n 심장혈관흉부외과 :	7명 \n 가정의학과	: 6명 \n 성형외과	: 6명 \n 이비인후과	: 6명 \n 방사선종양학과	: 4명 \n 진단검사의학과 :	4명 \n 피부과	: 4명 \n 구강악안면외과	: 2명 \n 핵의학과	: 2명",
    hospitalParking: false,
    hospitalDevice: "CT, 유방촬영장치, MRI",
    hospitalSpecial:
      "부정맥고주파절제술, 혈액투석, 체외충격파쇄석술, 인공와우 실시기관, 입원형 호스피스 전문기관, 측두하악 관절자극요법 실시기관",
    hospitalTime: [
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "09:00~18:30",
      "휴진",
      "휴진",
    ],
    poto: 충남대,
  },
];

export const LikeHospital = (prop) => {
  return (
    <div>
      <div
        className=" absolute rounded-t-xl top-[100px] h-[60px] w-[170px] bg-[#FFE194]"
        onClick={prop.linkLikeHospital}
      >
        <p className="text-center leading-[60px] text-xl font-semibold">
          찜한 병원
        </p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[171px] h-[60px] w-[120px] bg-[#D4F0FF]"
        onClick={prop.linkMyDrug}
      >
        <p className="text-center leading-[60px] text-xl ">나의 약봉지</p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]"
        onClick={prop.linkBasketDrug}
      >
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full h-auto bg-[#FFE194]">
        <div className="relative overflow-x-scroll">
          {props.map((items) => (
            <HospitalList props={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

LikeHospital.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LikeHospital);
