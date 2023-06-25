package com.roller.doc.api.request;

import java.util.List;

import lombok.Data;

@Data
public class DrugFilterReq {
	private String name;
	private List<String> colors;
	private String type;
	private String line;
	private String mark;
}
