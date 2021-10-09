package com.epamHack.FontKeeper.model.db;

import com.epamHack.FontKeeper.enums.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Name;
    private String email;
    private String password;
    private int suggested;
    private int accepted;
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;
}
