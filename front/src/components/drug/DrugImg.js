// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DrugImg = (props) => {
  const navigation = useNavigate();

  const [imagePath, setImagePath] = useState([]);

  const goDetail = (props) => {
    navigation(`/drugDetail/${props}`);
  };

  useEffect(() => {
    let shape = "";
    let color = "";
    switch (props.drug.drugType) {
      case "원형":
        shape = "circle";
        break;
      case "타원형":
        shape = "oval";
        break;
      case "장방형":
        shape = "rectangle";
        break;
      case "반원형":
        shape = "semicircular";
        break;
      case "삼각형":
        shape = "triangle";
        break;
      case "사각형":
        shape = "square";
        break;
      case "마름모형":
        shape = "rhombus";
        break;
      case "오각형":
        shape = "pentagon";
        break;
      case "육각형":
        shape = "hexagon";
        break;
      case "팔각형":
        shape = "octagon";
        break;
      default:
        shape = "circle";
        break;
    }
    switch (props.drug.drugColorf) {
      case "하양":
        color = "white";
        break;
      case "노랑":
        color = "yellow";
        break;
      case "주황":
        color = "orange";
        break;
      case "분홍":
        color = "pink";
        break;
      case "빨강":
        color = "red";
        break;
      case "갈색":
        color = "brown";
        break;
      case "연두":
        color = "lightgreen";
        break;
      case "초록":
        color = "green";
        break;
      case "청록":
        color = "deepgreen";
        break;
      case "파랑":
        color = "blue";
        break;
      case "남색":
        color = "indigo";
        break;
      case "자주":
        color = "redviolet";
        break;
      case "보라":
        color = "violet";
        break;
      case "회색":
        color = "gray";
        break;
      case "검정":
        color = "black";
        break;
      case "투명":
        color = "transparent";
        break;
      default:
        color = "white";
    }
    setImagePath([require(`../../assets/images/drug/${shape}_${color}.jpg`)]);
  }, []);

  return (
    <img
      src={imagePath[0]}
      alt={props.drug.drugName}
      className="rounded-[10px] border"
      onClick={(e) => {
        e.stopPropagation();
        goDetail(props.drug.drugId);
      }}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugImg);
