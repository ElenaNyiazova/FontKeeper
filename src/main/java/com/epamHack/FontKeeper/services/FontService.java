package com.epamHack.FontKeeper.services;

import com.epamHack.FontKeeper.model.db.Font;
import com.epamHack.FontKeeper.model.rest.FontDTO;
import com.epamHack.FontKeeper.repositories.FontRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FontService {

    private FontRepository fontRepository;

    public FontService(FontRepository fontRepository) {
        this.fontRepository = fontRepository;
    }

    public FontDTO create(Font font) {

        return null;
      //  fontRepository.create(font);
    }

    public Set<FontDTO> findAll() {

        return null;
     //   fontRepository.findAll();
    }

}
