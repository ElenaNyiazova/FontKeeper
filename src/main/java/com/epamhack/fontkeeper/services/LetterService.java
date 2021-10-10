package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.db.Letter;
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
    private RuleService ruleService;

    @Autowired
    public LetterService(LetterRepository letterRepositiry, RuleService ruleService) {
        this.letterRepository = letterRepositiry;
        this.ruleService = ruleService;
    }

    Letter findLetterById (long letterDtoId){
        return letterRepository.findById(letterDtoId).orElse(new Letter());
    }


    //получаем  id буквы, возвращаем список ее правил
    List<RuleDTO> findRulesByLetter(long letterID) {
        ArrayList<RuleDTO> listOfRules = new ArrayList<>();
        //найти букву по id


        //Если буква не найдена new LetterNotFoundException()

        //выбрать все правила для этой буквы

        listOfRules.add(letter,
        ruleService.
        return listOfRules;
    }

}