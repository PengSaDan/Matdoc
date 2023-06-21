// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

export const KakaoMap = (props) => {
  console.log(props.lat);
  console.log(props.lng);
  return (
    <div>
      <Map
        center={{ lat: props.lat, lng: props.lng }}
        style={{ width: "412px", height: "412px" }}
      >
        <MapMarker position={{ lat: props.lat, lng: props.lng }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </div>
  );
};

KakaoMap.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(KakaoMap);
