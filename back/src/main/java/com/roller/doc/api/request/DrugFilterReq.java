package com.roller.doc.api.request;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
public class DrugFilterReq {
	private String name;
	private String colors;
	private String type;
	private String line;
	private String mark;

	@Builder
	public DrugFilterReq(String name, String colors, String type, String line, String mark) {
		this.name = name;
		this.colors = colors;
		this.type = type;
		this.line = line;
		this.mark = mark;
	}
}
