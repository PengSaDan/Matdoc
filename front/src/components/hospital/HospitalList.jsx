// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const HospitalList = (props) => {
  const navigation = useNavigate();
  const location = useSelector((state) => state.user.location);

  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [dist, setDist] = useState(0);
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

    getDistanceFromLatLonInKm({
      lat1: location.lat,
      lng1: location.lng,
      lat2: props.props.hospitalY,
      lng2: props.props.hospitalX,
    });

    getAddr(props.props.hospitalY, props.props.hospitalX)

  }, []);

  const getDistanceFromLatLonInKm = (loc) => {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var r = 6371; //지구의 반지름(km)
    var dLat = deg2rad(loc.lat2 - loc.lat1);
    var dLon = deg2rad(loc.lng2 - loc.lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(loc.lat1)) *
        Math.cos(deg2rad(loc.lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    
    setDist(Math.round(d * 10) / 10);
  };

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
        {dist} km
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
