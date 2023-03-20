DROP TABLE IF EXISTS drug;
CREATE EXTERNAL TABLE IF NOT EXISTS drug(
 	drug_id int,
 	drug_name string,
	drug_img string,
	drug_markf string,
	drug_markb string,
	drug_type string,
	drug_colorf string,
	drug_colorb string,
	drug_line string,
	drug_ingre string,
	drug_secu string,
	drug_ingrecode string
);

INSERT OVERWRITE TABLE drug
        SELECT
	row_sequence(),
             detail.drug_detail_name,
             detail.drug_detail_img,
             detail.drug_detail_markf,
             detail.drug_detail_markb,
             detail.drug_detail_type,
             detail.drug_detail_colorf,
             detail.drug_detail_colorb,
             concat(detail.drug_detail_linef, '^', detail.drug_detail_lineb ) as drug_line,
        	info.drug_info_ingre as drug_ingre,
    	detail.drug_detail_secu,
     	codes.drug_codes_ingrecode as drug_ingrecode	
        FROM
	drug_detail_tmp detail
	LEFT OUTER JOIN drug_codes_tmp codes ON codes.drug_codes_secu=detail.drug_detail_secu
	LEFT OUTER JOIN drug_info_tmp info ON info.drug_info_secu=detail.drug_detail_secu;