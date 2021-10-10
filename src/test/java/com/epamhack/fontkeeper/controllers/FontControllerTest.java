package com.epamhack.fontkeeper.controllers;

import com.epamhack.fontkeeper.model.db.Font;
import com.epamhack.fontkeeper.model.db.User;
import com.epamhack.fontkeeper.model.rest.FontDTO;
import com.epamhack.fontkeeper.services.FontService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FontControllerTest {

    @InjectMocks
    FontController fontController;

    @Mock
    FontService fontService;

    @Test
    void testGetAllFonts() {
        Set<FontDTO> extected = new HashSet<>();
        addFonts(extected);
        when(fontService.findAll()).thenReturn(extected);
        assertEquals(3, fontController.getAllFonts().size());
    }

    @Test
    void testGetAllFontsReturnThrow() {
        when(fontService.findAll()).thenReturn(null);

        assertThrows(NullPointerException.class, () -> {
            fontController.getAllFonts().size();
        });
    }

    private void addFonts(Set<FontDTO> extected) {
        extected.add(new FontDTO(new Font(1, "A", true,
                false, false, false, false,
                false, false, "Open", "", false, new User())));
        extected.add(new FontDTO(new Font(2, "Б", true,
                false, false, false, false,
                false, false, "Open", "", false, new User())));
        extected.add(new FontDTO(new Font(3, "В", true,
                false, false, false, false,
                false, false, "Open", "", false, new User())));
    }
}