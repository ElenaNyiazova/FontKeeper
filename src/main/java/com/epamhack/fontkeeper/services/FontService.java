package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.db.Font;
import com.epamhack.fontkeeper.model.rest.FontDTO;
import com.epamhack.fontkeeper.repositories.FontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;

@Service
public class FontService {

    private FontRepository fontRepository;

    @Autowired
    public FontService(FontRepository fontRepository) {
        this.fontRepository = fontRepository;
    }

    public FontDTO create(Font font) {

        //TODO: 09.10.2021 implement method
        return null;

    }

    public Set<FontDTO> findAll() {

        // TODO: 09.10.2021 implement method
        fontRepository.findAll();
        return Collections.emptySet();
    }

}
