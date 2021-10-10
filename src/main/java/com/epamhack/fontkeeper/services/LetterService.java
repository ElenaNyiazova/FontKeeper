package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.rest.LetterDTO;
import com.epamhack.fontkeeper.model.rest.RuleDTO;
import com.epamhack.fontkeeper.repositories.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class LetterService {
    private LetterRepository letterRepository;
    private RuleService ruleService;

    @Autowired
    public LetterService(LetterRepository letterRepositiry, RuleService ruleService) {
        this.letterRepository = letterRepositiry;
        this.ruleService = ruleService;
    }

    //получаем букву возвращаем список ее правил
    List<RuleDTO> getRules(long letterID) {

        letterRepository.findById(letterID);


        ArrayList<RuleDTO> l = ruleService.

                letterRepository.findById(letterID).get().

    }

}