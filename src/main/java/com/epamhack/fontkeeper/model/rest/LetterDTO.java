package com.epamhack.fontkeeper.model.rest;

import com.epamhack.fontkeeper.services.LetterService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LetterDTO {

    private long id;
    private String letterName;
    private String alphabet;
}