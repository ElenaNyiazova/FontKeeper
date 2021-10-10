package com.epamhack.fontkeeper.controllers;

import com.epamhack.fontkeeper.services.LetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import static com.epamhack.fontkeeper.constants.EndPoints.*;

@RestController
public class LetterController {

    private LetterService letterService;

    @Autowired
    public LetterController(LetterService letterService) {
        this.letterService = letterService;
    }
// TODO дописать метод как будут сделаны сервис и прочее
//    @GetMapping(API_LETTERS_SEARCH_BY_ID)
//    public LetterResponse getLetterByID(@PathVariable("id") Long id) {
//
//     //   letterService.findById(id);
//        return null;
//    }
}
