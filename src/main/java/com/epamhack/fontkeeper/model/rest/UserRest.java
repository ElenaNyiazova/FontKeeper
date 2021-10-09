package com.epamhack.fontkeeper.model.rest;

import com.epamhack.fontkeeper.enums.Role;
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
