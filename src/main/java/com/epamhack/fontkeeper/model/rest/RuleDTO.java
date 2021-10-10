package com.epamhack.fontkeeper.model.rest;

import com.epamhack.fontkeeper.services.RuleService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RuleDTO {

    RuleService ruleService;

    private long id;
    private String ruleName;
    private String ruleInfo;
    private int ruleCategory;
    private int rank;
    private boolean visible;
    private int letters;
    private List<LetterDTO> allLettersWithRule;


}
