package com.epamhack.fontkeeper.controllers;

import com.epamhack.fontkeeper.model.rest.FontDTO;
import com.epamhack.fontkeeper.services.FontService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

import static com.epamhack.fontkeeper.constants.EndPoints.*;

@RestController
public class FontController {

    private FontService fontService;

    @Autowired
    public FontController(FontService fontService) {
        this.fontService = fontService;
    }

    @GetMapping(API_FONTS)
    public Set<FontDTO> getAllFonts() {
        return fontService.findAll();
    }
}
