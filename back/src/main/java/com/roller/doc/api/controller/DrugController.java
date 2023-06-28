package com.roller.doc.api.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.roller.doc.api.request.DrugFilterReq;
import com.roller.doc.api.request.HospitalFilterReq;
import com.roller.doc.api.response.ResponseDTO;
import com.roller.doc.api.service.drug.DrugService;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@ResponseBody
@RequiredArgsConstructor
@RequestMapping("/drug")
public class DrugController {
	private final DrugService drugService;

	/**
	 * 필터를 통한 의약품 검색 re
	 */
	@PostMapping("/find")
	public ResponseEntity filteringDrug(@RequestBody DrugFilterReq d) {
		System.out.println(d);
		ResponseDTO responseDTO = drugService.filteringDrug(d);
		return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
	}

	/**
	 * drugId로 의약품 상세정보 조회 re
	 */
	@GetMapping("/detail/{drugId}")
	public ResponseEntity getDrugDetail(@PathVariable("drugId") long drugId) {
		ResponseDTO result = drugService.getDrugDetail(drugId);
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
