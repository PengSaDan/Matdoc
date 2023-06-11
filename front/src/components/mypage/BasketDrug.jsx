// import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { basketActions } from "store/features/drugBasketSlice";

export const BasketDrug = (props) => {
  const basket = useSelector((state) => state.drugBasket.basket);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const [checkedList, setCheckedList] = useState([]);
  const [checkedPill, setCheckedPill] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const checkHandler = (checked, drugId, name) => {
    if (checked) {
      setCheckedList([...checkedList, drugId]);
      setCheckedPill([...checkedPill, { drugId: drugId, name: name }]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== drugId));
      setCheckedPill(checkedPill.filter((el) => el.drugId !== drugId));
    }
  };

  const deleteCheckedHandler = () => {
    checkedList.forEach((id) => {
      dispatch(
        basketActions.popBasket(Number(id))
      );
    })
    
    setCheckedList([]);
    setCheckedPill([]);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const makeMyDrug = () => {
    openModalhandler();
  };

  const openModalhandler = () => {
    setOpenModal(true);
  };

  const closeModalhandler = () => {
    setOpenModal(false);
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
        className="absolute rounded-t-xl top-[100px]  left-[120px] h-[60px] w-[120px] bg-[#D4F0FF]"
        onClick={props.linkMyDrug}
      >
        <p className="text-center leading-[60px] text-xl ">나의 약봉지</p>
      </div>
      <div
        className="absolute rounded-t-xl top-[100px]  left-[240px] h-[60px] w-[171px] bg-[#D1F1C9]"
        onClick={props.linkBasketDrug}
      >
        <p className="text-center leading-[60px] text-xl font-semibold ">
          약 바구니
        </p>
      </div>
      <div className=" absolute top-[160px] w-full bg-[#D1F1C9] p-5">
        <div className="relative w-[370px] h-[260px] bg-[#FEFFEC] rounded-[10px] py-5">
          <div className="h-[190px] w-full overflow-scroll px-5">
            {basket.map((pill) => {
              return (
                <div className="w-full h-8 leading-8 " key={pill.drugId}>
                  <input
                    type="checkbox"
                    className="inline-block w-5 h-5 mr-2 align-middle"
                    value={pill.drugId}
                    onChange={(e) => {
                      checkHandler(e.target.checked, e.target.value, pill.name);
                    }}
                    checked={
                      checkedList.includes(`${pill.drugId}`) ? true : false
                    }
                  />
                  <span className="inline-block overflow-hidden align-middle w-[300px] whitespace-nowrap text-ellipsis">
                    {pill.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="bg-[#EEECEC] w-14 h-8 leading-8 text-center rounded-md font-semibold absolute bottom-4 right-4"
            onClick={() => deleteCheckedHandler()}
          >
            삭제
          </div>
        </div>
        <div>
          <div className="mt-5 text-2xl font-bold">나의 약봉지 만들기</div>
          <input
            className="p-5 mt-4 text-xl h-12 w-[370px] rounded-xl bg-[#FEFFEC]"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={changeTitle}
          ></input>
          <textarea
            className="p-5 mt-4 text-xl h-56 w-[370px] rounded-xl bg-[#FEFFEC] resize-none"
            placeholder="메모를 입력하세요"
            value={text}
            onChange={changeText}
          ></textarea>
          <div
            className="text-center leading-[73px] w-[370px] h-[73px] bg-[#00C192] rounded-[10px] text-3xl text-white font-bold mt-5 shadow-xl"
            onClick={makeMyDrug}
          >
            저장
          </div>
        </div>
      </div>
      {openModal && <div className="absolute bg-white border-[#00C192] border-4 shadow-xl w-[350px] top-1/3 rounded-xl p-5 left-[31px] z-[99999]">
          <div className="text-xl">
            나의 약봉지에 저장했습니다. <br /> 나의 약봉지로 이동하시겠습니까?
          </div>
          <div className="flex mt-5 font-semibold text-center place-content-around">
            <div
              className="bg-[#00C192] w-[80px] p-2 rounded-[10px] border shadow-xl border-[#00C192]"
              onClick={props.linkMyDrug}
            >
              확인
            </div>
            <div
              className="w-[80px] border rounded-[10px] shadow-xl p-2 border-[#00C192]"
              onClick={closeModalhandler}
            >
              취소
            </div>
          </div>
        </div>}
      
    </div>
  );
};

BasketDrug.propTypes = {
  //   second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketDrug);
