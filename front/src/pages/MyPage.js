import Header from "components/common/Header";
import BasketDrug from "components/mypage/BasketDrug";
import LikeHospital from "components/mypage/LikeHospital";
import MyDrug from "components/mypage/MyDrug";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const MyPage = (props) => {
  const navigation = useNavigate();
  const params = useParams();
  
  const [page, setPage] = useState("myDrug");

  useEffect(() => {
    setPage(params.type);
  }, [params])

  const linkLikeHospital = () => {
    navigation(`/mypage/likeHospital`);
  };

  const linkMyDrug = () => {
    navigation(`/mypage/myDrug`);
  };

  const linkBasketDrug = () => {
    navigation(`/mypage/basketDrug`);
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
