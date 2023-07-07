// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const HospitalList = (props) => {
  const navigation = useNavigate();
  const location = useSelector((state) => state.user.location);

  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [addr, setAddr] = useState("");

  //props로 받은 영업중 여부가
  useEffect(() => {
    if (props.props.hospitalOpen) {
      setStatus("진료중");
      setColor(
        "relative -top-7 left-72 h-[42px] w-[110px] rounded-[50px] bg-[#32EBBE] "
      );
    } else {
      setStatus("휴진");
      setColor(
        "relative -top-7 left-72 h-[42px] w-[110px] rounded-[50px] bg-[#BDD3CE] "
      );
    }

    getAddr(props.props.hospitalY, props.props.hospitalX)

  }, [props]);

  const getAddr = (lat, lng) => {
    let geocoder = new window.kakao.maps.services.Geocoder();

    let coord = new window.kakao.maps.LatLng(lat, lng);
    let callback = function(result, status) {
      if(status === window.kakao.maps.services.Status.OK) {
        setAddr(result[0].address.address_name);
      }
    }
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const goHospitalDetail = () => {
    navigation(`/hospitaldetail/${props.props.hospitalId}`, {
      state: { hospital: props.props },
    });
  };

  return (
    <div
      className=" w-[412px]  h-[180px] border-t-2"
      onClick={goHospitalDetail}
    >
      <p className="relative w-[390px] top-3 left-3 mb-2 text-3xl font-semibold">
        {props.props.hospitalName}
      </p>
      <p className="relative w-[390px] top-3 left-4 text-lg">
        {props.props.hospitalDistance} km
      </p>
      <p className="relative w-[290px] top-3 left-4 text-lg">
        {addr}
      </p>
      <p className="relative w-[390px] top-3 left-4 text-lg">
        {props.props.hospitalTel}
      </p>
      <div className={color}>
        <p className="text-center leading-[42px] font-bold text-lg">{status}</p>
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
