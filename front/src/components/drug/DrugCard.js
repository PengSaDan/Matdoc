// import PropTypes from 'prop-types'
import React from "react";
import { connect, useDispatch } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { basketActions } from "store/features/drugBasketSlice";

export const DrugCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const goDetail = () => {
    navigation(`/drugDetail/${props.pill.drugId}`);
  };

  const pushBasket = (event) => {
    dispatch(
      basketActions.pushBasket({
        drugId: props.pill.drugId,
        name: props.pill.name,
      })
    );
  };

  return (
    <div className="w-full p-4 border-t-2" onClick={() => goDetail()}>
      <div className="text-2xl font-semibold">{props.pill.name}</div>
      <div className="flex mt-2">
        <img
          src={props.pill.image}
          alt={props.pill.name}
          className="rounded-[10px] w-2/5 h-[100px]"
        />
        <div className="relative w-3/5 p-2">
          <div>성분 : {props.pill.ingredient}</div>
          <div>모양 : {props.pill.shape}</div>
          <div
            className="absolute z-50 rounded-full shadow-xl right-1 bottom-1"
            onClick={(e) => {
              e.stopPropagation();
              pushBasket();
            }}
          >
            <FaPlusCircle className="text-4xl text-[#00C192]" />
          </div>
        </div>
      </div>
    </div>
  );
};

DrugCard.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugCard);
