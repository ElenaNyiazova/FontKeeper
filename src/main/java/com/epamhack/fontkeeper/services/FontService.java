package com.epamhack.fontkeeper.services;

import com.epamhack.fontkeeper.model.db.Font;
import com.epamhack.fontkeeper.model.rest.FontDTO;
import com.epamhack.fontkeeper.repositories.FontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class FontService {

    private FontRepository fontRepository;

    @Autowired
    public FontService(FontRepository fontRepository) {
        this.fontRepository = fontRepository;
    }

    public FontDTO findById(Long id) {

        return new FontDTO(fontRepository.findById(id).orElseThrow(RuntimeException::new));
    }

    public Set<FontDTO> findAll() {

        Set<Font> fontSet = new HashSet<>();
        for(Font font : fontRepository.findAll()) {
            fontSet.add(font);
        }
        return fontSet.stream()
                .map(FontDTO::new)
                .collect(Collectors.toSet());
    }

    public void delete(Font font) {
        fontRepository.delete(font);
    }
}
