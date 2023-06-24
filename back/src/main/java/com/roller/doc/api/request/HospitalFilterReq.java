package com.roller.doc.api.request;

import lombok.Data;

import java.util.List;

@Data
public class HospitalFilterReq {
    private String word;
    private double e;
    private double w;
    private double s;
    private double n;
    private int hour;
    private int min;
    private int day;
    private List<Integer> part;
    private List<Integer> open;
}
