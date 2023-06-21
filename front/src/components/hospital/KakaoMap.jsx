// import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

export const KakaoMap = (props) => {
  return (
    <div>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
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
