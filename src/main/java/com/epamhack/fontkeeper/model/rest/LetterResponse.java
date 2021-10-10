package com.epamhack.fontkeeper.model.rest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LetterResponse {

    private LetterDTO letterDTO;
    private List<RuleDTO> ruleDTOList;
}

//    Создать класс LetterResponse, RuleDTO, LetterDTO в пакете rest. Класс LetterResponse
//        должен иметь поля LetterDTO и Set<RuleDTO>. Подумать, что нам нужно передавать
//        на фронт, может букву и не надо возвращать.