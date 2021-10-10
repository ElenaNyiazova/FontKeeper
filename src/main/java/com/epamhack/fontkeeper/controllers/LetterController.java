package com.epamhack.fontkeeper.controllers;

import com.epamhack.fontkeeper.model.rest.RuleDTO;
import com.epamhack.fontkeeper.services.LetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.epamhack.fontkeeper.constants.EndPoints.*;

@RestController
public class LetterController {

    private LetterService letterService;

    @Autowired
    public LetterController(LetterService letterService) {
        this.letterService = letterService;
    }

    @GetMapping(API_LETTERS_SEARCH_BY_ID)
    public List <RuleDTO> getRulesByLetterID(@PathVariable("id") Long id) {

        return  letterService.getRulesByLetter(id);
    }
}
