/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HospitalList from '../../components/hospital/HospitalList';

import Header from '../../components/common/Header';
import Back from '../../assets/Back.png';
import GreenHospital from '../../assets/MyPage/GreenHospital.png';
import BlackMedicine from '../../assets/MyPage/BlackMedicine.png';
import BlackBasket from '../../assets/MyPage/BlackBasket.png';

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SBack = styled.img`
  width: 8vw;
  margin-bottom: 2vh;
  margin-left: 3vw;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 2vw 0;
`;

const SImg = styled.img`
  width: 8vw;
  display: flex;
`;

const SText = styled.div``;

const SBoldText = styled.div`
  font-weight: bold;
`;
const SBox = styled.div`
  /* display: flex; */
`;

const SPageBox = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: #f3f6fa;
  border-radius: 15px;
  margin: 5vw 2.5vw 5vw 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SPageSelectBox = styled.div`
  width: 90vw;
  display: flex;
  margin: 0 5vw;
`;

const SLine = styled.div`
  height: 1vh;
  background-color: #f1f3f4;
`;

function MyPageHospitalList() {
  return (
    <>
      <Header />
      <SLink to="/">
        <SBack src={Back} alt="Back" />
      </SLink>
      <SPageSelectBox>
        <SPageBox>
          <SBox>
            <ImgBox>
              <SImg src={GreenHospital} alt="GreenHospital" />
            </ImgBox>
            <SBoldText>병원리스트</SBoldText>
          </SBox>
        </SPageBox>
        <SPageBox>
          <SLink to="/mypage/medicine">
            <SBox>
              <ImgBox>
                <SImg src={BlackMedicine} alt="BlackMedicine" />
              </ImgBox>
              <SText>나의 약봉지</SText>
            </SBox>
          </SLink>
        </SPageBox>
        <SPageBox>
          <SLink to="/mypage/basket">
            <SBox>
              <ImgBox>
                <SImg src={BlackBasket} alt="BlackBasket" />
              </ImgBox>
              <SText>약 바구니</SText>
            </SBox>
          </SLink>
        </SPageBox>
      </SPageSelectBox>
      <SLine />
      <HospitalList />
    </>
  );
}

export default MyPageHospitalList;
