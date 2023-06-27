package com.roller.doc.db.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.roller.doc.api.request.DrugFilterReq;
import com.roller.doc.config.QuerydslConfig;
import com.roller.doc.db.entity.Drug;

import lombok.RequiredArgsConstructor;

import static com.roller.doc.db.entity.QDrug.*;

@Repository
@RequiredArgsConstructor
public class DrugCustomRepo {
	private final QuerydslConfig querydslConfig;

	public List<Drug> searchDrug(DrugFilterReq d) {
		JPAQueryFactory query = querydslConfig.jpaQueryFactory();
		return query
			.selectFrom(drug)
			.where(filteringDrug(d), filteringColor(d))
			.fetch();
	}

	private BooleanBuilder filteringColor(DrugFilterReq d) {
		BooleanBuilder builder = new BooleanBuilder();

		String[] colors = d.getColors().split(",");
		for (String color : colors) {
			builder.or(colorSearch(color));
		}

		return builder;
	}

	private BooleanBuilder filteringDrug(DrugFilterReq d) {
		BooleanBuilder builder = new BooleanBuilder();

		builder
			.and(nameSearch(d.getName()))
			.and(typeSearch(d.getType()))
			.and(lineSearch(d.getLine()))
			.and(markSearch(d.getMark()));

		return builder;
	}

	/**
	 * 이름 검색
	 */
	private BooleanExpression nameSearch(String name) {
		return StringUtils.hasText(name) ? drug.drug_name.contains(name) : null;
	}

	/**
	 * 색상 검색
	 */
	private BooleanExpression colorSearch(String color) {
		return drug.drug_colorf.contains(color).or(drug.drug_colorb.contains(color));
	}

	/**
	 * 모양 검색
	 */
	private BooleanExpression typeSearch(String type) {
		return StringUtils.hasText(type) ? drug.drug_type.eq(type) : null;
	}

	/**
	 * 분할선 검색
	 */
	private BooleanExpression lineSearch(String line) {
		// 기타, 전체는 null
		// 없음은 oxo
		return StringUtils.hasText(line) ? drug.drug_line.contains(line) : null;
	}

	/**
	 * 식별문자 검색
	 */
	private Predicate markSearch(String mark) {
		return StringUtils.hasText(mark) ? drug.drug_markf.contains(mark).or(drug.drug_markb.contains(mark)) : null;
	}

}


