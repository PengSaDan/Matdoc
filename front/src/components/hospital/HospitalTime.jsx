// import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";

const time = [
  { id: 0, time: "전체" },
  { id: 1, time: "토요일" },
  { id: 2, time: "일요일" },
  { id: 3, time: "공휴일" },
  { id: 4, time: "야간" },
];
export const HospitalTime = (props) => {
  const [pick, setPick] = useState([0]);
  console.log(pick);
  const addPick = (props) => {
    if (props === 0 || pick.length === 3) {
      setPick([0]);
    } else {
      let copy = [...pick];
      copy = copy.filter((idx) => idx !== 0);
      copy[copy.length] = props;
      setPick([...new Set(copy)]);
    }
    console.log(pick.length);
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
    <div>
      <div className="flex flex-wrap row-span-3 col-span-6 ">
        {time.map((items) => (
          <div key={items.id}>
            {!pick.includes(items.id) && (
              <div
                className="w-[110px] h-[42px] bg-[#D1F1C9] rounded-[50px] shadow-slate-400 shadow-md ml-3 mt-3"
                onClick={() => {
                  addPick(items.id);
                }}
              >
                <p className="text-lg leading-[42px] text-center font-semibold ">
                  {items.time}
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
                  {items.time}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

HospitalTime.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalTime);
