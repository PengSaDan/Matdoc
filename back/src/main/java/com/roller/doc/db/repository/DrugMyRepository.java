package com.roller.doc.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.roller.doc.db.entity.DrugMy;

@Repository
public interface DrugMyRepository extends JpaRepository<DrugMy, Long> {

	/**
	 * 나의 약봉지 리스트 조회 re
	 */
	@Query(value = "select dm from DrugMy dm where dm.userId = :userId and dm.drug_my_del = false")
	List<DrugMy> getMyList(@Param("userId") Long userId);

}
