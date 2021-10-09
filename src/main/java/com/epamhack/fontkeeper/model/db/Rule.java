package com.epamhack.fontkeeper.model.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
public class Rule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String ruleName;
    private String ruleInfo;
    private long ruleCategory;
    private boolean rank;
    private int visible;
    private int letters;
}
