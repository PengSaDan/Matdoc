import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "store/features/userSlice";

export const Header = (props) => {
  const navigation = useNavigate();
  const isLogin = useSelector((state) => state.user.login);
  const dispatch = useDispatch();

  const doLogin = () => {
    dispatch(userActions.login());
  };

  const doLogout = () => {
    dispatch(userActions.logout());
    navigation("/");
  };

  return (
    <div className="relative w-screen p-3 overflow-hidden">
      <div
        className="text-6xl font-bold whitespace-nowrap text-[#00C192]"
        onClick={() => {
          navigation("/");
        }}
      >
        맞닥
      </div>
      {!isLogin && (
        <div className="absolute -right-5 bottom-3 bg-[#00C192] bg-opacity-80 w-36 h-36 rounded-full shadow-lg">
          <div
            className="text-white leading-[13rem] font-medium text-2xl text-center"
            onClick={doLogin}
          >
            로그인
          </div>
        </div>
      )}
      {isLogin && (
        <div className="absolute rounded-full -right-5 bottom-3 bg-opacity-80 w-36 h-36">
          <div
            className="text-[#CECCCC] leading-[13rem] font-semibold text-xl text-center"
            onClick={doLogout}
          >
            로그아웃
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
