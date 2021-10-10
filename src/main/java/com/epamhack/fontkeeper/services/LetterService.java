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

@Service
public class LetterService {
    private LetterRepository letterRepository;

    @Autowired
    public LetterService(LetterRepository letterRepositiry) {
        this.letterRepository = letterRepositiry;
    }

    Letter findLetterById (long letterDtoId){
        return letterRepository.findById(letterDtoId).orElseThrow(LetterNotFoundException::new);
    }

    List<RuleDTO> findRulesByLetter(long letterID) {
        List<RuleDTO> listRulesDTO = new ArrayList<>();
        List<Rule> listRules =  findLetterById(letterID).getRules();

        for(Rule rule: listRules){
            listRulesDTO.add(new RuleDTO(rule));
        }
        return listRulesDTO;
    }

}