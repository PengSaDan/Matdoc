package com.roller.doc.api.service.drug;

import java.util.ArrayList;
import java.util.List;

import com.roller.doc.api.request.DrugFilterReq;
import com.roller.doc.api.response.drug.DrugDetailRes;
import com.roller.doc.api.response.drug.DrugMyPillRes;
import com.roller.doc.db.entity.DrugMyPill;
import com.roller.doc.db.repository.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.roller.doc.api.response.ResponseDTO;
import com.roller.doc.api.response.drug.DrugAvoidRes;
import com.roller.doc.api.response.drug.DrugDescRes;
import com.roller.doc.api.response.drug.DrugRes;
import com.roller.doc.db.entity.Drug;
import com.roller.doc.db.entity.DrugAvoid;
import com.roller.doc.db.entity.DrugDesc;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@Transactional
@RequiredArgsConstructor
public class DrugServiceImpl implements DrugService {

	private final DrugRepository drugRepository;
	private final DrugCustomRepo drugCustomRepo;

	/**
	 * 필터를 통한 의약품 검색 re
	 */
	@Override
	public ResponseDTO filteringDrug(DrugFilterReq d) {
		ResponseDTO responseDTO = new ResponseDTO();
		List<DrugRes> result = new ArrayList<>();

		try {
			List<Drug> drugList = drugCustomRepo.searchDrug(d);
			if (drugList.isEmpty()) {
				responseDTO.setStatus_code(400);
				responseDTO.setMessage("필터를 통한 의약품 검색 실패");
			} else {
				for (Drug drug : drugList) {
					DrugRes drugRes = DrugRes.builder()
						.drugId(drug.getDrug_id())
						.drugName(drug.getDrug_name())
						.drugImg(drug.getDrug_img())
						.drugMarkf(drug.getDrug_markf())
						.drugMarkb(drug.getDrug_markb())
						.drugType(drug.getDrug_type())
						.drugColorf(drug.getDrug_colorf())
						.drugColorb(drug.getDrug_colorb())
						.drugLine(drug.getDrug_line())
						.drugIngre(drug.getDrug_ingre())
						.build();
					result.add(drugRes);
				}

				responseDTO.setStatus_code(200);
				responseDTO.setMessage("필터를 통한 의약품 검색 성공");
				responseDTO.setData(result);
			}
		} catch (Exception e) {
			log.error(e.getMessage());
			e.printStackTrace();
		}
		return responseDTO;
	}

	/**
	 * drugId로 의약품 상세정보 조회 re
	 */
	@Override
	public ResponseDTO getDrugDetail(long drugId) {
		ResponseDTO responseDTO = new ResponseDTO();

		try {
			Drug drug = drugRepository.getDrug(drugId);
			DrugDesc drugDesc = drugRepository.getDrugDesc(drugId);
			List<DrugAvoid> drugAvoid = drugRepository.getDrugAvoid(drugId);

			if (drug == null && drugDesc == null && drugAvoid == null) {
				responseDTO.setStatus_code(400);
				responseDTO.setMessage("의약품 상세정보 조회 실패");
			} else {
				DrugRes drugRes = new DrugRes();
				if (drug != null) {
					drugRes = DrugRes.builder()
						.drugId(drug.getDrug_id())
						.drugName(drug.getDrug_name())
						.drugImg(drug.getDrug_img())
						.drugMarkf(drug.getDrug_markf())
						.drugMarkb(drug.getDrug_markb())
						.drugType(drug.getDrug_type())
						.drugColorf(drug.getDrug_colorf())
						.drugColorb(drug.getDrug_colorb())
						.drugLine(drug.getDrug_line())
						.drugIngre(drug.getDrug_ingre())
						.build();
				}

				DrugDescRes drugDescRes = new DrugDescRes();
				if (drugDesc != null) {
					drugDescRes = DrugDescRes.builder()
						.drugId(drugDesc.getDrug_id())
						.drugDescCat(drugDesc.getDrug_desc_cat())
						.drugDescShape(drugDesc.getDrug_desc_shape())
						.drugDescCom(drugDesc.getDrug_desc_com())
						.drugDescSafety(drugDesc.getDrug_desc_safety())
						.drugDescEffect(drugDesc.getDrug_desc_effect())
						.drugDescUse(drugDesc.getDrug_desc_use())
						.build();
				}

				List<DrugAvoidRes> avoid = new ArrayList<>();
				if (drugAvoid != null) {
					for (DrugAvoid da : drugAvoid) {
						DrugAvoidRes drugAvoidRes = DrugAvoidRes.builder()
							.drugAvoidId(da.getDrug_avoid_id())
							.drugId(da.getDrug_id())
							.drugAvoidB(da.getDrug_avoid_b())
							.drugAvoidNameB(da.getDrug_avoid_name_b())
							.drugAvoidDesc(da.getDrug_avoid_desc())
							.build();
						avoid.add(drugAvoidRes);
					}
				}

				DrugDetailRes drugDetailRes = DrugDetailRes.builder()
					.drugId(drugId)
					.drug(drugRes)
					.desc(drugDescRes)
					.avoid(avoid)
					.build();

				responseDTO.setStatus_code(200);
				responseDTO.setMessage("의약품 상세정보 조회 성공");
				responseDTO.setData(drugDetailRes);
			}
		} catch (Exception e) {
			log.error(e.getMessage());
			e.printStackTrace();
		}

		return responseDTO;
	}

}
