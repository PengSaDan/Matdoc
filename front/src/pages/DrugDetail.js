import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "components/common/Header";
import { FaPlusCircle } from "react-icons/fa";
import { basketActions } from "store/features/drugBasketSlice";
import { useState } from "react";
import instance from "util/Axios";

export const DrugDetail = (props) => {
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.login);

  const [openModal, setOpenModal] = useState(false);

  const [drug, setDrug] = useState({});
  const [drugDesc, setDrugDesc] = useState({});
  const [drugAvoid, setDrugAvoid] = useState([]);

  useEffect(() => {
    instance
      .get(`/drug/detail/${params.drugId}`)
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        setDrug(response.data.drug);
        setDrugDesc(response.data.desc);
        setDrugAvoid(response.data.avoid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  const goBasketDrug = () => {
    navigation(`/mypage/basketDrug`);
  };

  const pushBasket = () => {
    dispatch(
      basketActions.pushBasket({
        drugId: drug.drugId,
        name: drug.drugName,
      })
    );
  };

  const openModalhandler = () => {
    setOpenModal(true);
  };

  const closeModalhandler = () => {
    setOpenModal(false);
  };

  const goDetail = (props) => {
    navigation(`/drugDetail/${props}`);
  };

  return (
    <div className="bg-[#ECF9F6] w-screen min-h-screen mx-auto overflow-scroll">
      <Header />
      <img
        src={drug.drugImg}
        alt={drug.drugName}
        className="w-screen h-[200px] border-t-2 border-b-2 mt-5"
      />
      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4">
        <div className="flex">
          <div className="mr-2 text-2xl font-bold">{drug.drugName}</div>
          {loginStatus && (
            <div
              className="rounded-full shadow-xl w-9 h-9"
              onClick={() => {
                pushBasket();
                openModalhandler();
              }}
            >
              <FaPlusCircle className="text-4xl text-[#00C192]" />
            </div>
          )}
        </div>
        <div className="p-2">
          <p>
            성분 : {drug.drugIngre !== "null" ? drug.drugIngre : "정보 없음"}
          </p>
          <p>
            성상 : {drug.drugColorf === "-" ? "" : drug.drugColorf + " "}
            {drug.drugColorb === "-" ? "" : drug.drugColorb}
          </p>
          <p>제형 : {drug.drugType !== "null" ? drug.drugType : "정보 없음"}</p>
          <p>
            업체명 :{" "}
            {drugDesc.drugDescCom !== "null"
              ? drugDesc.drugDescCom
              : "정보 없음"}
          </p>
          <p>병용금기 : {drugAvoid.length === 0 && "정보 없음"}</p>
          <div className="ml-4">
            {drugAvoid.map((avoid) => (
              <span
                key={avoid.drugAvoidB}
                onClick={() => {
                  goDetail(avoid.drugAvoidB);
                }}
              >
                {avoid.drugAvoidNameB},{" "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[380px] p-5 bg-[#D7F1FF] rounded-[10px] mt-5 ml-4 mb-5">
        <p className="text-xl font-semibold">효능/효과</p>
        <p>
          {drugDesc.drugDescEffect !== "null"
            ? drugDesc.drugDescEffect
            : "정보 없음"}
        </p>
        <p className="mt-3 text-xl font-semibold">안전사용</p>
        <p>
          {drugDesc.drugDescSafety !== "null"
            ? drugDesc.drugDescSafety
            : "정보 없음"}
        </p>
        <p className="mt-3 text-xl font-semibold">사용법</p>
        <p>
          {drugDesc.drugDescUse !== "null" ? drugDesc.drugDescUse : "정보 없음"}
        </p>
      </div>
      {openModal && (
        <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
          <div className="text-xl">
            약 바구니에 약을 담았습니다. <br /> 마이페이지로 이동하시겠습니까?
          </div>
          <div className="flex mt-5 font-semibold text-center place-content-around">
            <div
              className="bg-[#00C192] w-[80px] p-2 rounded-[10px] border shadow-xl border-[#00C192]"
              onClick={() => {
                goBasketDrug();
              }}
            >
              확인
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
      )}
    </div>
  );
};

DrugDetail.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrugDetail);
