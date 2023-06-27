package com.roller.doc.api.service.drug;

import com.roller.doc.api.request.DrugFilterReq;
import com.roller.doc.api.response.ResponseDTO;

public interface DrugService {
	/**
	 * 나의 약봉지 속 약 조회
	 */
	ResponseDTO findMyPillList(Long drug_my_id) throws Exception;

	/**
	 * 나의 약봉지 삭제
	 */
	ResponseDTO deleteDrugMy(Long drug_my_id) throws Exception;

	/**
	 * 필터를 통한 의약품 검색
	 */
	ResponseDTO filteringDrug(DrugFilterReq d);

	/**
	 * drugId로 의약품 상세정보 조회
	 */
	ResponseDTO getDrugDetail(long drugId);
}
