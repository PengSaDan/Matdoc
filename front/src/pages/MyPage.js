import Header from "components/common/Header";
import BasketDrug from "components/mypage/BasketDrug";
import LikeHospital from "components/mypage/LikeHospital";
import MyDrug from "components/mypage/MyDrug";
import React, { useState } from "react";
import { connect } from "react-redux";

export const MyPage = (props) => {
  const [page, setPage] = useState(<LikeHospital />);
  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden">
      <Header />
      {page}
      {/* <LikeHospital /> */}
      {/* <MyDrug /> */}
      {/* <BasketDrug /> */}
    </div>
  );
};

MyPage.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
