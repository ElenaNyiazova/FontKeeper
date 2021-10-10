package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.db.Rule;
import com.epamhack.fontkeeper.model.rest.LetterDTO;
import com.epamhack.fontkeeper.model.rest.RuleDTO;
import com.epamhack.fontkeeper.repositories.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RuleService {

    @Autowired
    private RuleRepository ruleRepository;

    @Autowired
    private LetterService letterService;

//найти правило по id, создать правило+, достать лист letters

    public RuleDTO createRuleDTO(Rule rule){
        return RuleDTO.builder()
                .ruleName(rule.getRuleName())
                .ruleInfo(rule.getRuleInfo())
                .ruleCategory(rule.getRuleCategory())
                .rank(rule.getRank())
                .visible(rule.isVisible())
                .build();
    }

//        List<LetterDTO> letterDTOList = rule.getLetters().stream()
//                .map(letterService::createLetterDTO)
//                .collect(Collectors.toList());
}