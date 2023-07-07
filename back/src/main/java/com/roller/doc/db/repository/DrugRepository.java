package com.roller.doc.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.roller.doc.db.entity.Drug;
import com.roller.doc.db.entity.DrugAvoid;
import com.roller.doc.db.entity.DrugDesc;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long> {

	/**
	 * drugId로 의약품 정보 조회 re
	 */
	@Query(value = "select d from Drug d where d.drug_id = :drugId")
	Drug getDrug(@Param("drugId") long drugId);

	/**
	 * drugId로 의약품 상세 정보 조회 re
	 */
	@Query(value = "select dd from DrugDesc dd where dd.drug_id = :drugId")
	DrugDesc getDrugDesc(@Param("drugId") long drugId);

	/**
	 * drugId로 의약품 병용금기 정보 조회 re
	 */
	@Query(value = "select da from DrugAvoid da where da.drug_id = :drugId")
	List<DrugAvoid> getDrugAvoid(@Param("drugId") long drugId);
}
