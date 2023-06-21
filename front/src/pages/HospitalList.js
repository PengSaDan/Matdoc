// import PropTypes from "prop-types";
import DetailSerachBar from "components/common/DetailSearchBar";
import Header from "components/common/Header";
import HospitalFilter from "components/hospital/HospitalFilter";
import List from "components/hospital/HospitalList";
import React, { useState } from "react";
import { connect } from "react-redux";
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
  },
  {
    hospitalId: 19802,
    hospitalName: "세림소아청소년과의원",
    hospitalOpen: true,
    distance: "1.5KM",
    address: "대전 유성구 학하서로20번길 21 2층 201호",
    hospitalTel: "042-825-3457",
    hospitalPart: "내과, 소아과, 피부과, 비뇨기과",
    hospitalDoc: "소아과 : 1명",
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
  },
  {
    hospitalId: 14961,
    hospitalName: "베스트내과의원",
    hospitalOpen: true,
    distance: "1.6KM",
    address: "대전 유성구 학하로 104 2층 201호, 202호, 203호",
    hospitalTel: "042-721-7502",
    hospitalPart: "내과, 신경과, 소아과, 이비인후과, 피부과, 가정의학과",
    hospitalDoc: "내과 : 1명",
    hospitalParking: false,
    hospitalDevice: "정보없음",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "08:30~18:00",
      "08:30~18:00",
      "08:30~18:00",
      "08:30~18:00",
      "08:30~18:00",
      "휴진",
      "휴진",
    ],
  },
  {
    hospitalId: 10147,
    hospitalName: "도안이비인후과의원",
    hospitalOpen: true,
    distance: "3.8KM",
    address: "대전 유성구 도안대로 511-12 대림프라자 2층",
    hospitalTel: "042-826-5055",
    hospitalPart: "이비인후과",
    hospitalDoc: "이비인후과 : 1명",
    hospitalParking: false,
    hospitalDevice: "초음파영상진단기/콘빔CT",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "휴진",
      "휴진",
    ],
  },
  {
    hospitalId: 74804,
    hospitalName: "풀잎한의원",
    hospitalOpen: false,
    distance: "3.8KM",
    address: "대전 유성구 도안대로 511-8 상대동 농협건물 4층",
    hospitalTel: "0507-1427-1013",
    hospitalPart: "한의원",
    hospitalDoc: "한의학 : 1명",
    hospitalParking: true,
    hospitalDevice: "정보없음",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "09:00~19:00",
      "휴진",
      "휴진",
    ],
  },
  {
    hospitalId: 29056,
    hospitalName: "이양덕내과의원",
    hospitalOpen: true,
    distance: "4KM",
    address: "대전 유성구 도안대로 512-17 3층",
    hospitalTel: "042-822-7525",
    hospitalPart: "내과, 소아과, 이비인후과, 피부과, 비뇨기과",
    hospitalDoc: "내과 : 1명",
    hospitalParking: false,
    hospitalDevice: "정보없음",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "08:30~18:30",
      "08:30~18:30",
      "08:30~18:30",
      "휴진",
      "08:30~18:30",
      "휴진",
      "휴진",
    ],
  },
  {
    hospitalId: 799,
    hospitalName: "봉키병원",
    hospitalOpen: true,
    distance: "4KM",
    address: "대전 유성구 계룡로 120 6-9층",
    hospitalTel: "1522-6705",
    hospitalPart: "내과, 소아과, 이비인후과, 피부과",
    hospitalDoc: "소아과 : 6명",
    hospitalParking: false,
    hospitalDevice: "정보없음",
    hospitalSpecial: "정보없음",
    hospitalTime: [
      "08:00~23:00",
      "08:00~23:00",
      "08:00~23:00",
      "08:00~23:00",
      "08:00~23:00",
      "09:00~20:00",
      "09:00~22:00",
    ],
  },
];

export const HospitalList = (prop) => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen ">
      <Header />
      <DetailSerachBar color={"bg-[#FFF5DA]"} />
      <div
        className=" absolute top-[170px] bg-[#FFF5DA] left-[14px] h-[43px] w-[380px] leading-[43px] flex row-span-2 justify-between"
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        <p className="text-[#303030] text-xl ml-3 mt-1 font-semibold">
          {props.length} 건
        </p>
        {!isopen && (
          <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▼</p>
        )}
      </div>
      <div className="absolute w-full overflow-scroll top-56 h-3/4">
        {props.map((items, idx) => {
          return <List props={items} />;
        })}
      </div>
      {isopen && <HospitalFilter />}
      <div
        className="absolute top-44 right-5"
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        {isopen && (
          <p className="text-[#A1AFA9] text-xl mr-3 mt-2">상세검색 ▲</p>
        )}
      </div>
    </div>
  );
};

HospitalList.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList);
