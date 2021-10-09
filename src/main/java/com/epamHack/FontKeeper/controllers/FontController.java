package com.epamHack.FontKeeper.controllers;

import com.epamHack.FontKeeper.services.FontService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import static com.epamHack.FontKeeper.constants.EndPoints.*;

@RestController
public class FontController {

    @Autowired
    private FontService fontService;

//    @GetMapping(API_FONTS)
//    public Set<FontDTO> getAllFonts() {
//        return fontService.findAll();
//    }
}
