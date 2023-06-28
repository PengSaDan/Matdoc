package com.roller.doc.api.response.drug;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
public class DrugMyListRes {
	private Long drugMyId;
	private String drugMyTitle;
	private String drugMyMemo;
	private List<DrugRes> drugMyDrugs;

	@Builder
	public DrugMyListRes(Long drugMyId, String drugMyTitle, String drugMyMemo, List<DrugRes> drugMyDrugs) {
		this.drugMyId = drugMyId;
		this.drugMyTitle = drugMyTitle;
		this.drugMyMemo = drugMyMemo;
		this.drugMyDrugs = drugMyDrugs;
	}
}
