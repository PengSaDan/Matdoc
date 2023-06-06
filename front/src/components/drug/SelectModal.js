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
    { name: "원형", image: "assets/images/circle.jpg" },
    { name: "타원형", image: "assets/images/circle.jpg" },
    { name: "장방형", image: "assets/images/circle.jpg" },
    { name: "반원형", image: "assets/images/circle.jpg" },
    { name: "삼각형", image: "assets/images/circle.jpg" },
    { name: "사각형", image: "assets/images/circle.jpg" },
    { name: "마름모형", image: "assets/images/circle.jpg" },
    { name: "오각형", image: "assets/images/circle.jpg" },
    { name: "육각형", image: "assets/images/circle.jpg" },
    { name: "팔각형", image: "assets/images/circle.jpg" },
    { name: "전체", image: "assets/images/allShape.jpg" },
  ];
  return (
    <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5">
      <div className="text-[#303030] text-2xl font-semibold">{type}</div>
      <div className="grid w-full grid-cols-4 justify-items-center">
        {shapes.map((shape) => (
          <div className="w-11/12 h-16 mt-3 bg-red-50">{shape.name}</div>
        ))}
      </div>
    </div> 
  );
};

SelectModal.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectModal);
