import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  text-decoration: none;
`;

const SLogo = styled.div`
  font-size: 10vw;
  font-weight: bold;
  color: #00c192;
  margin-top: 5vh;
  margin-left: 6vw;
`;

const SLoginButton = styled.button``;

const SLoginLink = styled.a`
  color: black;
  text-decoration: none;
`;

const SLogoutButton = styled.button``;

function Header() {
  const onClickLogoutHandler = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/user/logout`, {});
  };

  return (
    <div>
      <SLink to="/">
        <SLogo>맞닥</SLogo>
      </SLink>
      <SLoginButton>
        {/* <SLoginLink href="http://192.168.31.33:8080/oauth2/authorization/kakao"> */}
        {/* <SLoginLink href="http://localhost:8080/oauth2/authorization/kakao"> */}
        <SLoginLink
          href={`${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`}
        >
          로그인
        </SLoginLink>
      </SLoginButton>
      <SLogoutButton type="button" onClick={onClickLogoutHandler}>
        로그아웃
      </SLogoutButton>
    </div>
  );
}

export default Header;
