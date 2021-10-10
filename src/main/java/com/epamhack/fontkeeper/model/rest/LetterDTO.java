package com.epamhack.fontkeeper.model.rest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LetterDTO {

    private String letterName;
    private String alphabet;
}