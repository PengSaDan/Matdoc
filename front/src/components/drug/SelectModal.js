import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const SelectModal = (props) => {
  const [type, setType] = useState("");

  useEffect(() => {
    if (props.type === "shape") {
      setType("모양 선택");
    } else {
      setType("분할선 선택");
    }
  }, [props]);

  const shapes = [
    {
      name: "원형",
      image:
        "border bg-[url('assets/images/circle.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "타원형",
      image:
        "border bg-[url('assets/images/oval.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "장방형",
      image:
        "border bg-[url('assets/images/rectangle.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "반원형",
      image:
        "border bg-[url('assets/images/semicircular.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "삼각형",
      image:
        "border bg-[url('assets/images/triangle.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "사각형",
      image:
        "border bg-[url('assets/images/square.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "마름모형",
      image:
        "border bg-[url('assets/images/rhombus.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "오각형",
      image:
        "border bg-[url('assets/images/pentagon.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "육각형",
      image:
        "border bg-[url('assets/images/hexagon.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
    {
      name: "팔각형",
      image:
        "border bg-[url('assets/images/octagon.jpg')] bg-cover w-11/12 h-16 mt-3",
    },
  ];

  const lines = [
    {
      name: "없음",
      image:
        "border bg-[url('assets/images/none.jpg')] bg-cover w-11/12 h-20 mt-3",
    },
    {
      name: "(+)형",
      image:
        "border bg-[url('assets/images/plus.jpg')] bg-cover w-11/12 h-20 mt-3",
    },
    {
      name: "(-)형",
      image:
        "border bg-[url('assets/images/minus.jpg')] bg-cover w-11/12 h-20 mt-3",
    },
  ];
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full"
        onClick={() => props.selectModalCloseHandler()}
      ></div>
      <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px]">
        <div
          className="absolute right-2 top-2 text-[#303030] text-2xl font-semibold"
          onClick={() => props.selectModalCloseHandler()}
        >
          ⅹ
        </div>
        <div className="text-[#303030] text-2xl font-semibold">{type}</div>
        {props.type === "shape" && (
          <div className="grid w-full grid-cols-4 justify-items-center">
            {shapes.map((shape) => (
              <div
                className={shape.image}
                onClick={() => props.selectShapeHandler(shape.name)}
              >
                <div className="text-[#303030] font-semibold text-center leading-[6.5rem]">
                  {shape.name}
                </div>
              </div>
            ))}
            <div
              className="border bg-[url('assets/images/allShape.jpg')] bg-cover w-11/12 h-16 mt-3"
              onClick={() => props.selectShapeHandler("전체")}
            >
              <div className="text-[#303030] font-semibold text-center leading-[4rem]">
                전체
              </div>
            </div>
          </div>
        )}
        {props.type === "line" && (
          <div className="grid w-full grid-cols-3 justify-items-center">
            {lines.map((line) => (
              <div
                className={line.image}
                onClick={() => props.selectLineHandler(line.name)}
              >
                <div className="text-[#303030] font-semibold text-xl text-center leading-[7.5rem]">
                  {line.name}
                </div>
              </div>
            ))}
            <div
              className="border bg-[url('assets/images/allShape.jpg')] bg-cover w-11/12 h-20 mt-3"
              onClick={() => props.selectLineHandler("기타")}
            >
              <div className="text-[#303030] font-semibold text-xl text-center leading-[5rem]">
                기타
              </div>
            </div>
            <div
              className="border bg-[url('assets/images/allShape.jpg')] bg-cover w-11/12 h-20 mt-3"
              onClick={() => props.selectLineHandler("전체")}
            >
              <div className="text-[#303030] font-semibold text-xl text-center leading-[5rem]">
                전체
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

SelectModal.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectModal);
