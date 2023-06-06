// import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";

export const DrugCard = (props) => {
  return (
    <div className="w-full p-4 border-t-2">
      <div className="text-2xl font-semibold">{props.pill.name}</div>
      <div className="flex mt-2">
        <img src={props.pill.image} alt={props.pill.name} className="rounded-[10px] w-2/5 h-[100px]" />
        <div className="w-3/5 p-2">
          <div>성분 : {props.pill.ingredient}</div>
          <div>모양 : {props.pill.shape}</div>
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
