import React, { useState } from "react";
import { connect } from "react-redux";

export const ColorOptions = (props) => {
  const [colorList, setColorList] = useState(["전체"]);

  const colors = [
    {
      name: "전체",
      code: "bg-[url('assets/images/all.jpg')] bg-cover h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#00C192] leading-8 text-white font-bold border-[#96DE83] border-4",
    },
    {
      name: "하양",
      code: "bg-[#FFFFFF] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#FFFFFF] leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
    {
      name: "노랑",
      code: "bg-[#FFFF00] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#FFFF00] leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
    {
      name: "주황",
      code: "bg-[#FF7F00] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#FF7F00] leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
    {
      name: "빨강",
      code: "bg-[#FF0000] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#FF0000] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "갈색",
      code: "bg-[#964B00] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#964B00] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "연두",
      code: "bg-[#81C147] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#81C147] leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
    {
      name: "초록",
      code: "bg-[#008000] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#008000] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "청록",
      code: "bg-[#005666] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#005666] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "파랑",
      code: "bg-[#0067A3] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#0067A3] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "남색",
      code: "bg-[#000080] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#000080] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "자주",
      code: "bg-[#660099] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#660099] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "보라",
      code: "bg-[#8B00FF] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#8B00FF] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "회색",
      code: "bg-[#808080] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#808080] leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
    {
      name: "검정",
      code: "bg-[#000000] h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-[#000000] leading-8 text-[#FFFFFF] font-bold border-[#96DE83] border-4",
    },
    {
      name: "투명",
      code: "bg-[url('assets/images/transparent.jpg')] bg-cover h-1/3",
      selected:
        "w-16 h-10 mt-3 overflow-hidden text-center rounded-xl bg-transparent leading-8 text-[#303030] font-bold border-[#96DE83] border-4",
    },
  ];

  const addColorHandler = (props) => {
    if (props.color.name === "전체" || colorList.length === 14) {
      setColorList(["전체"]);
    } else {
      let copy = [...colorList];
      copy = copy.filter((color) => color !== "전체");
      copy[copy.length] = props.color.name;
      setColorList([...new Set(copy)]);
    }
  };

  const deleteColorHandler = (props) => {
    if (props.color.name === "전체") {
      return;
    } else if (colorList.length === 1) {
      setColorList(["전체"]);
    } else {
      setColorList(colorList.filter((color) => color !== props.color.name));
    }
  };

  return (
    <div className="grid w-full grid-cols-4 justify-items-center">
      {colors.map((color) => (
        <>
          {!colorList.includes({ color }.color.name) && (
            <div
              className="w-16 h-10 mt-3 overflow-hidden text-center bg-white shadow-xl rounded-xl"
              onClick={() => addColorHandler({ color })}
            >
              <div className={color.code}></div>
              <div className="text-[#303030]">{color.name}</div>
            </div>
          )}
          {colorList.includes({ color }.color.name) && (
            <div
              className={color.selected}
              onClick={() => deleteColorHandler({ color })}
            >
              {color.name}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

ColorOptions.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ColorOptions);
