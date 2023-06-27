package com.roller.doc.api.controller;

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
	 * 나의 약봉지 속 약 조회
	 */
	@GetMapping("/mypill/{drugMyId}")
	public ResponseEntity findPillList(@PathVariable("drugMyId") Long drugMyId) throws Exception {
		ResponseDTO result = drugService.findMyPillList(drugMyId);
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	/**
	 * 나의 약봉지 삭제
	 */
	@PutMapping("/delete/{drugMyId}")
	public ResponseEntity deleteDrugMy(@PathVariable("drugMyId") Long drugMyId) throws Exception {
		ResponseDTO result = drugService.deleteDrugMy(drugMyId);
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	/**
	 * 필터를 통한 의약품 검색
	 */
	@GetMapping("/find")
	public ResponseEntity filteringDrug(@RequestParam(value = "name") String name,
		@RequestParam(value = "colors[]") List<String> colors, @RequestParam(value = "type") String type,
		@RequestParam(value = "line") String line, @RequestParam(value = "mark") String mark) {
		DrugFilterReq d = DrugFilterReq.builder()
			.name(name)
			.colors(colors)
			.type(type)
			.line(line)
			.mark(mark)
			.build();
		ResponseDTO responseDTO = drugService.filteringDrug(d);
		return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
	}

	/**
	 * drugId로 의약품 상세정보 조회
	 */
	@GetMapping("/detail/{drugId}")
	public ResponseEntity getDrugDetail(@PathVariable("drugId") long drugId) {
		ResponseDTO result = drugService.getDrugDetail(drugId);
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
