package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.db.Rule;
import com.epamhack.fontkeeper.model.rest.LetterDTO;
import com.epamhack.fontkeeper.model.rest.RuleDTO;
import com.epamhack.fontkeeper.repositories.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RuleService {
    RuleRepository ruleRepository;

    @Autowired
    public RuleService(RuleRepository ruleRepository) {
        this.ruleRepository = ruleRepository;
    }


    List<LetterDTO> getAllLetterWithRule(RuleDTO ruleDTO){
        Iterable<Rule> list = ruleRepository.findAllById(ruleDTO.getId());
        allLettersWithRule.addAll(ruleService.findLetters(ruleDTO.id));
        return allLettersWithRule;
    }
}
