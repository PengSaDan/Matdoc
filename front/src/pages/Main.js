// import PropTypes from 'prop-types'
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "store/features/userSlice";

export const Main = (props) => {
  const navigation = useNavigate();
  const isLogin = useSelector((state) => state.user.login);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const enterMyPage = () => {
    if (isLogin) {
      navigation("/mypage/likeHospital");
    } else {
      setOpenModal(true);
    }
  };

  const doLogin = () => {
    dispatch(userActions.login());
    navigation("/mypage/likeHospital");
  }

  const closeModalhandler = () => {
    setOpenModal(false);
  }

  return (
    <div className="bg-[#00C192] w-screen h-screen overflow-hidden relative">
      <div className="flex w-screen p-3 text-white">
        <div className="text-6xl font-bold whitespace-nowrap">맞닥</div>
        <div className="mt-auto mb-0 ml-auto mr-0 text-3xl font-semibold whitespace-nowrap">
          당신만의 맞춤의사
        </div>
      </div>
      <div
        className="absolute bg-[#FFE194] rounded-full cursor-pointer w-80 h-80 -left-16 top-36 shadow-xl"
        onClick={() => {
          navigation("/hospital");
        }}
      >
        <div className="text-[#303030] text-5xl text-right leading-[20rem] px-10 font-semibold">
          병원 검색
        </div>
      </div>
      <div
        className="absolute bg-[#D4F0FF] rounded-full cursor-pointer w-72 h-72 -right-20 bottom-64 shadow-xl"
        onClick={() => {
          navigation("/drug");
        }}
      >
        <div className="text-[#303030] text-5xl text-left leading-[18rem] px-10 font-semibold">
          약 검색
        </div>
      </div>
      <div
        className="absolute bg-[#D1F1C9] rounded-full cursor-pointer w-96 h-96 -left-10 -bottom-24 shadow-xl"
        onClick={() => {
          enterMyPage();
        }}
      >
        <div className="text-[#303030] text-5xl text-center leading-[24rem] px-10 font-semibold">
          마이페이지
        </div>
      </div>
      {openModal && (
        <div className="fixed top-0 z-10 w-screen h-screen">
          <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
            <div className="text-xl text-center">
              로그인이 필요합니다. <br /> 로그인 하시겠습니까?
            </div>
            <div className="flex mt-5 font-semibold text-center place-content-around">
              <div
                className="bg-[#00C192] w-[80px] p-2 rounded-[10px] border shadow-xl border-[#00C192]"
                onClick={() => {
                  doLogin();
                }}
              >
                로그인
              </div>
              <div
                className="w-[80px] border rounded-[10px] shadow-xl p-2 border-[#00C192]"
                onClick={() => {
                  closeModalhandler();
                }}
              >
                취소
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Main.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
