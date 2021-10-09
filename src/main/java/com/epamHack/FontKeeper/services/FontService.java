package com.epamHack.FontKeeper.services;

import com.epamHack.FontKeeper.model.db.Font;
import com.epamHack.FontKeeper.model.rest.FontDTO;
import com.epamHack.FontKeeper.repositories.FontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FontService {

    @Autowired
    private FontRepository fontRepository;

    public FontDTO create(Font font) {

        return null;
      //  fontRepository.create(font);
    }

    public Set<FontDTO> findAll() {

        return null;
     //   fontRepository.findAll();
    }

}
