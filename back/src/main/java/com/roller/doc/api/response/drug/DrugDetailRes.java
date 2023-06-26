package com.roller.doc.api.response.drug;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
public class DrugDetailRes {
	private Long drugId;
	private DrugRes drug;
	private DrugDescRes desc; // 상세정보
	private List<DrugAvoidRes> avoid; // 병용금기

	@Builder
	public DrugDetailRes(Long drugId, DrugRes drug, DrugDescRes desc, List<DrugAvoidRes> avoid) {
		this.drugId = drugId;
		this.drug = drug;
		this.desc = desc;
		this.avoid = avoid;
	}
}
