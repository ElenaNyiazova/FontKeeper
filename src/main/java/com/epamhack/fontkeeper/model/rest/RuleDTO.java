package com.epamhack.fontkeeper.model.rest;

import com.epamhack.fontkeeper.model.db.Rule;
import com.epamhack.fontkeeper.model.db.RuleCategory;
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

    private long id;
    private String ruleName;
    private String ruleInfo;
    private RuleCategory ruleCategory;
    private int rank;
    private boolean visible;
    private List letters;
    //private List<LetterDTO> allLettersWithRule;


    public RuleDTO (Rule rule) {
        this.ruleName = rule.getRuleName();
        this.ruleInfo = rule.getRuleInfo();
        this.ruleCategory = rule.getRuleCategory();
        this.rank = rule.getRank();
        this.visible = rule.isVisible();
        this.letters = rule.getLetters();
        //todo
    }
}
