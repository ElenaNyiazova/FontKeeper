package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.exceptions.LetterNotFoundException;
import com.epamhack.fontkeeper.model.db.Letter;
import com.epamhack.fontkeeper.model.db.Rule;
import com.epamhack.fontkeeper.model.rest.LetterDTO;
import com.epamhack.fontkeeper.model.rest.RuleDTO;
import com.epamhack.fontkeeper.repositories.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LetterService {
    private LetterRepository letterRepository;
    private RuleService ruleService;

    @Autowired
    public LetterService(LetterRepository letterRepository, RuleService ruleService) {
        this.letterRepository = letterRepository;
        this.ruleService = ruleService;
    }

    public Letter findLetterById (long letterDtoId){
        return letterRepository.findById(letterDtoId).orElseThrow(LetterNotFoundException::new);
    }

    public List<RuleDTO> getRulesByLetter(long letterID) {
        List<RuleDTO> listRulesDTO = new ArrayList<>();
        List<Rule> listRules =  findLetterById(letterID).getRules();
        for(Rule rule: listRules){
            listRulesDTO.add(ruleService.createRuleDTO(rule));
        }
        return listRulesDTO;
    }

    public LetterDTO createLetterDTO(Letter letter){
        return LetterDTO.builder()
                .letterName(letter.getName())
                .alphabet(letter.getAlphabet())
                .build();
    }
}