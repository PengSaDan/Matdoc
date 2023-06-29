// import PropTypes from 'prop-types'
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export const KakaoMap = (props) => {
  return (
    <div>
      <Map
        center={{ lat: props.lat, lng: props.lng }}
        style={{ width: "412px", height: "412px" }}
      >
        <MapMarker position={{ lat: props.lat, lng: props.lng }}></MapMarker>
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
