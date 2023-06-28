package com.roller.doc.api.request;

import lombok.Data;

@Data
public class DrugFilterReq {
	private String name;
	private String colors;
	private String type;
	private String line;
	private String mark;
}
