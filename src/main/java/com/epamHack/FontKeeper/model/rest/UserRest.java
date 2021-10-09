package com.epamHack.FontKeeper.model.rest;
//Этот класс принимает запросы от контролера и отправляет данные в сервис

import com.epamHack.FontKeeper.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRest {

    private Long id;
    private String Name;
    private String email;
    private String password;
    private int suggested;
    private int accepted;
    private boolean status;

    private Role role;
}
