package com.roller.doc.api.controller;

import com.roller.doc.api.request.DrugMyReq;
import com.roller.doc.api.request.HospitalMyListReq;
import com.roller.doc.api.request.HospitalMyReq;
import com.roller.doc.api.request.HospitalMyStatusReq;
import com.roller.doc.api.response.ResponseDTO;
import com.roller.doc.api.response.drug.DrugMyCreateRes;
import com.roller.doc.api.response.drug.DrugMyRes;
import com.roller.doc.api.service.User.UserService;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 즐겨찾는 병원 상태변경
     */
    @PutMapping("/hospital/statusmark")
    public ResponseEntity statusHospitalMy( @RequestBody HospitalMyStatusReq hospitalMyStatusReq) {
        ResponseDTO responseDTO = userService.statusHospitalMy(hospitalMyStatusReq.getHospitalId());
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 즐겨찾기 여부
     */
    @PostMapping("/hospital/ismark")
    public ResponseEntity isHospitalMy(@RequestBody HospitalMyReq hospitalMyReq) {
        ResponseDTO responseDTO = userService.isHospitalMy(hospitalMyReq.getHospitalId());
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 즐겨찾기 리스트
     */
    @PostMapping("/hospital/marklist")
    public ResponseEntity listHospitalMy( @RequestBody HospitalMyListReq hospitalMyListReq) {
        ResponseDTO responseDTO = userService.listHospitalMy(hospitalMyListReq);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 나의 약봉지 추가 re
     */
    @PostMapping("/drug/insertmy")
    private ResponseEntity insertDrugMy(@RequestBody DrugMyReq drugMyReq) {
        ResponseDTO responseDTO = userService.insertDrugMy(drugMyReq);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 나의 약봉지 리스트 조회 re
     */
    @PostMapping("/drug/listmy")
    private ResponseEntity listDrugMy(@RequestParam Long userId) {
        // x-www-form-urlencoded
        ResponseDTO responseDTO = userService.listDrugMy(userId);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 나의 약봉지 삭제 re
     */
    @PutMapping("/drug/deletemy")
    private ResponseEntity deleteDrugMy(@RequestParam Long drugMyId) {
        // x-www-form-urlencoded
        ResponseDTO responseDTO = userService.deleteDrugMy(drugMyId);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

}
