package com.roller.doc.api.service.User;

import com.roller.doc.api.request.DrugMyReq;
import com.roller.doc.api.request.HospitalMyListReq;
import com.roller.doc.api.response.ResponseDTO;
import com.roller.doc.api.response.drug.DrugMyCreateRes;
import com.roller.doc.api.response.drug.DrugMyRes;

public interface UserService {

    /**
     * 즐겨찾기 병원 상태변경
     */
    ResponseDTO statusHospitalMy(long hospitalId);

    /**
     * 즐겨찾기 여부
     */
    ResponseDTO isHospitalMy(long hospitalId);

    /**
     * 병원 즐겨찾기 리스트
     */
    ResponseDTO listHospitalMy(HospitalMyListReq hospitalMyListReq);

    /**
     * 나의 약봉지 추가 re
     */
    ResponseDTO insertDrugMy(DrugMyReq drugMyReq);

    /**
     * 나의 약봉지 리스트 조회 re
     */
    ResponseDTO listDrugMy(Long userId);

    /**
     * 나의 약봉지 삭제 re
     */
    ResponseDTO deleteDrugMy(Long drugMyId);
}
