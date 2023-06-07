// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const part = [
  { id: 0, part: "전체" },
  { id: 1, part: "내과" },
  { id: 12, part: "안과" },
  { id: 4, part: "외과" },
  { id: 49, part: "치과" },
  { id: 11, part: "소아과" },
  { id: 2, part: "신경과" },
  { id: 14, part: "피부과" },
  { id: 15, part: "비뇨기과" },
  { id: 10, part: "산부인과" },
  { id: 8, part: "성형외과" },
  { id: 5, part: "정형외과" },
  { id: 23, part: "가정의학과" },
  { id: 9, part: "마취통증과" },
  { id: 13, part: "이비인후과" },
  { id: 3, part: "정신의학과" },
  { id: 100, part: "한의원" },
];
export const Hospitalpart = (props) => {
  const [pick, setPick] = useState([0]);
  const addPick = (props) => {
    if (props === 0 || pick.length === 15) {
      setPick([0]);
    } else {
      let copy = [...pick];
      copy = copy.filter((idx) => idx !== 0);
      copy[copy.length] = props;
      setPick([...new Set(copy)]);
    }
  };

  const deletePick = (props) => {
    if (props.part === 0) {
      return;
    } else if (pick.length === 0) {
      pick([0]);
    } else {
      setPick(pick.filter((idx) => idx !== props.id));
    }
  };
  return (
    <div className="flex flex-wrap row-span-3 col-span-6 ">
      {part.map((items, idx) => (
        <div key={idx}>
          {!pick.includes(items.id) && (
            <div
              className="w-[110px] h-[42px] bg-[#D1F1C9] rounded-[50px] shadow-slate-400 shadow-md ml-3 mt-3"
              onClick={() => {
                addPick(items.id);
              }}
            >
              <p className="text-lg leading-[42px] text-center font-semibold ">
                {items.part}
              </p>
            </div>
          )}
          {pick.includes(items.id) && (
            <div
              className="w-[110px] h-[42px] bg-[#96DE83] rounded-[50px] ml-3 mt-3"
              onClick={() => {
                deletePick(items);
              }}
            >
              <p className="text-lg leading-[42px] text-center font-semibold ">
                {items.part}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Hospitalpart.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hospitalpart);
