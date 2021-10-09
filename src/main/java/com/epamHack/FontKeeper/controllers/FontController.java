package com.epamHack.FontKeeper.controllers;

import com.epamHack.FontKeeper.services.FontService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.epamHack.FontKeeper.constants.EndPoints.*;

@RestController
public class FontController {

    private FontService fontService;

    public FontController(FontService fontService) {
        this.fontService = fontService;
    }

//    @GetMapping(API_FONTS)
//    public Set<FontDTO> getAllFonts() {
//        return fontService.findAll();
//    }
}
