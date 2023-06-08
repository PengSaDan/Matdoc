import Header from "components/common/Header";
import BasketDrug from "components/mypage/BasketDrug";
import LikeHospital from "components/mypage/LikeHospital";
import MyDrug from "components/mypage/MyDrug";
import React, { useState } from "react";
import { connect } from "react-redux";

export const MyPage = (props) => {
  const [page, setPage] = useState("likeHospital");

  const linkLikeHospital = () => {
    setPage("likeHospital");
  };

  const linkMyDrug = () => {
    setPage("myDrug");
  };

  const linkBasketDrug = () => {
    setPage("basketDrug");
  };

  return (
    <div className="bg-[#ECF9F6] w-screen h-screen overflow-hidden">
      <Header />
      {page === "likeHospital" && (
        <LikeHospital
          linkLikeHospital={linkLikeHospital}
          linkMyDrug={linkMyDrug}
          linkBasketDrug={linkBasketDrug}
        />
      )}
      {page === "myDrug" && (
        <MyDrug
          linkLikeHospital={linkLikeHospital}
          linkMyDrug={linkMyDrug}
          linkBasketDrug={linkBasketDrug}
        />
      )}
      {page === "basketDrug" && (
        <BasketDrug
          linkLikeHospital={linkLikeHospital}
          linkMyDrug={linkMyDrug}
          linkBasketDrug={linkBasketDrug}
        />
      )}
    </div>
  );
};

MyPage.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
