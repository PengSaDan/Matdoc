// import PropTypes from "prop-types";
import Header from "components/common/Header";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RiMapPin5Line } from "react-icons/ri";
import { RiHospitalLine } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";
import { RiCheckboxFill } from "react-icons/ri";
import { LuParkingSquare } from "react-icons/lu";
import { LuParkingSquareOff } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import KakaoMap from "components/hospital/KakaoMap";
import instance from "util/Axios";

const days = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
const now = new Date();
export const HosptialDetail = (props) => {
  const { state } = useLocation();
  const [mark, setMark] = useState(false);
  const [data, setData] = useState([]);
  const [addr, setAddr] = useState("");
  const [part, setPart] = useState([]);
  useEffect(() => {
    instance
      .get(`/hospital/desc/${state.hospital.hospitalId}`)
      .then((response) => {
        setTimeout(() => {}, 3000);
        if (response.data !== null) {
          setData(response.data);
        }
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
      });
    instance
      .post(`/user/hospital/ismark/`, {
        hospitalId: state.hospital.hospitalId,
      })
      .then((response) => {
        setTimeout(() => {}, 3000);
        setMark(response.data);
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
      });

    let lat = state.hospital.hospitalY;
    let lng = state.hospital.hospitalX;
    getAddr(lat, lng);
    setPart(state.hospital.hospitalPart);
  }, []);

  const markClickHandler = () => {
    if (mark) {
      instance
        .put(`/user/hospital/statusmark`, {
          hospitalId: state.hospital.hospitalId,
        })
        .catch((error) => {
          setTimeout(() => {}, 3000);
        });
      setMark(false);
    } else {
      instance
        .put(`/user/hospital/statusmark`, {
          hospitalId: state.hospital.hospitalId,
        })
        .catch((error) => {
          setTimeout(() => {}, 3000);
        });
      setMark(true);
    }
  };
  const getAddr = (lat, lng) => {
    let geocoder = new window.kakao.maps.services.Geocoder();

    let coord = new window.kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        setAddr(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-scroll ">
      <Header />
      <KakaoMap lat={state.hospital.hospitalY} lng={state.hospital.hospitalX} />
      <div className="flex col-span-2 mt-10 ml-3 ">
        <p className="mr-5 text-3xl font-semibold ">
          {state.hospital.hospitalName}
        </p>
        {!mark && (
          <RiAddBoxLine
            size={40}
            color="00C192"
            onClick={() => {
              markClickHandler();
            }}
          />
        )}
        {mark && (
          <RiCheckboxFill
            size={40}
            color="00C192"
            onClick={() => {
              markClickHandler();
            }}
          />
        )}
      </div>
      <div className=" h-full w-[412px] ">
        <div className="h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          {days.map((day, idx) => {
            return (
              <div>
                {(idx + 1) % 7 === now.getDay() && (
                  <div className="h-[40px] leading-[40px] flex col-span-2 bg-[#D1F1C9] text-lg">
                    <p className="w-[130px] text-center">{day}</p>
                    <p className="w-[250px] text-center">
                      {state.hospital.hospitalTime[idx]}
                    </p>
                  </div>
                )}
                {(idx + 1) % 7 !== now.getDay() && (
                  <div className="h-[40px] leading-[40px] flex col-span-2 text-lg">
                    <p className="w-[130px] text-center">{day}</p>
                    <p className="w-[250px] text-center">
                      {state.hospital.hospitalTime[idx]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
          {state.hospital.hospitalTime[7] !== "휴진" && (
            <div className="h-[40px] leading-[40px] flex col-span-2 text-lg">
              <p className="w-[130px] text-center">기타</p>
              <p className="w-[250px] text-center">
                {state.hospital.hospitalTime[7]}
              </p>
            </div>
          )}
        </div>
        <div className=" w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7 text-xl font-semibold">
          <div className="relative w-[340px] ml-4 ">
            <div className="h-2"></div>
            <div className="flex col-span-2 mt-4">
              <RiMapPin5Line className="absolute" size="25" />
              <p className="ml-8"> {addr}</p>
            </div>
            <div className="flex col-span-2 mt-4">
              <LuPhone className="absolute" size="25" />
              <p className="ml-8"> {state.hospital.hospitalTel}</p>
            </div>
            <div className="flex col-span-2 mt-4">
              <RiHospitalLine className="absolute" size="25" />
              <p className="ml-8">
                {part.map((p, idx) => {
                  if (idx % 2 === 0) {
                    return <div> - {p}</div>;
                  }
                })}
              </p>
            </div>
            <div>
              {data.hospitalParking > 0 && (
                <div className="flex col-span-2 mt-4">
                  <LuParkingSquare className="absolute" size="25" />
                  <p className="ml-8"> 주차가능</p>
                </div>
              )}
              {data.hospitalParking <= 0 && (
                <div className="flex col-span-2 mt-4">
                  <LuParkingSquareOff className="absolute" size="25" />
                  <p className="ml-8"> 주차정보없음</p>
                </div>
              )}
            </div>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">전문의</p>
            <p className="mt-3 ml-4 whitespace-pre-line">
              {part.map((p, idx) => {
                if ((idx % 2 === 1) & (p !== "0")) {
                  return (
                    <div>
                      <p>
                        {state.hospital.hospitalPart[idx - 1]}
                        <t> </t>
                        {state.hospital.hospitalPart[idx]} 명
                      </p>
                    </div>
                  );
                }
              })}
            </p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">의료장비</p>
            <p className="mt-3 ml-4">{data.hospitalDevice}</p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="overflow-hidden h-auto w-[380px] bg-[#FFF5DA] rounded-[10px] ml-[16px] mt-7">
          <div className="relative h-auto w-[340px] ml-4 ">
            <div className="h-4"></div>
            <p className="text-xl">기타</p>
            <p className="mt-3 ml-4">{data.hospitalSpecial}</p>
            <div className="h-4"></div>
          </div>
        </div>
        <div className="h-[80px] w-[380px]"></div>
      </div>
    </div>
  );
};

HosptialDetail.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HosptialDetail);
