// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import instance from "util/Axios";
import { FaTrashAlt } from "react-icons/fa";
import DrugImg from "components/drug/DrugImg";

export const MyDrug = (props) => {
  const userId = useSelector((state) => state.user.userId);

  const [myDrugs, setMyDrugs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteDrugMyId, setDeleteDrugMyId] = useState();

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("userId", userId);

    instance
      .post(`/user/drug/listmy`, params, config)
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        if (response.data !== null) {
          setMyDrugs(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModalhandler = (drugMyId) => {
    setDeleteDrugMyId(drugMyId);
    setOpenModal(true);
  };

  const closeModalhandler = () => {
    setOpenModal(false);
  };

  const deleteDrugMy = () => {
    const params = new URLSearchParams();
    params.append("drugMyId", deleteDrugMyId);

    instance
      .put(`/user/drug/deletemy`, params, config)
      .then((response) => {
        setTimeout(() => {}, 3000);
        // console.log(response);
        setOpenModal(false);
        window.location.reload();
        props.linkMyDrug();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        className=" absolute rounded-t-xl top-[100px] h-[60px] w-[120px] bg-[#FFE194]"
        onClick={props.linkLikeHospital}
      >
        <p className="text-center leading-[60px] text-xl">찜한 병원</p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[120px] h-[60px] w-[171px] bg-[#D4F0FF]"
        onClick={props.linkMyDrug}
      >
        <p className="text-center leading-[60px] text-xl font-semibold ">
          나의 약봉지
        </p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[291px] h-[60px] w-[120px] bg-[#D1F1C9]"
        onClick={props.linkBasketDrug}
      >
        <p className="text-center leading-[60px] text-xl ">약 바구니</p>
      </div>
      <div className=" absolute top-[160px] w-full bg-[#D4F0FF] p-5 h-[755px]">
        {myDrugs.map((myDrug) => (
          <div
            className="relative w-[370px] bg-[#FFFFFF] rounded-[10px] p-5 mb-4"
            key={myDrug.drugMyId}
          >
            <div className="text-2xl font-bold">{myDrug.drugMyTitle}</div>
            <div className="mt-5">{myDrug.drugMyMemo}</div>

            <div className="grid grid-cols-3 mt-5">
              {myDrug.drugMyDrugs.map((drug) => (
                <DrugImg key={drug.drugId} drug={drug} />
              ))}
            </div>

            <div
              className="absolute shadow-xl right-5 top-5"
              onClick={(e) => {
                e.stopPropagation();
                openModalhandler(myDrug.drugMyId);
              }}
            >
              <FaTrashAlt className="text-2xl text-[#F97474]" />
            </div>
          </div>
        ))}
      </div>
      {openModal && (
        <div className="fixed top-0 z-10 w-screen h-screen">
          <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
            <div className="text-xl text-center">
              나의 약봉지를 삭제하시겠습니까?
            </div>
            <div className="flex mt-5 font-semibold text-center place-content-around">
              <div
                className="bg-[#00C192] w-[80px] p-2 rounded-[10px] border shadow-xl border-[#00C192]"
                onClick={() => {
                  deleteDrugMy();
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
        </div>
      )}
    </div>
  );
};

MyDrug.propTypes = {
  //   second: PropTypes.third
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyDrug);
