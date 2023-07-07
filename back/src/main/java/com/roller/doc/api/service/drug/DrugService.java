package com.roller.doc.api.service.drug;

import com.roller.doc.api.request.DrugFilterReq;
import com.roller.doc.api.response.ResponseDTO;

public interface DrugService {

	/**
	 * 필터를 통한 의약품 검색 re
	 */
	ResponseDTO filteringDrug(DrugFilterReq d);

	/**
	 * drugId로 의약품 상세정보 조회 re
	 */
	ResponseDTO getDrugDetail(long drugId);
}
