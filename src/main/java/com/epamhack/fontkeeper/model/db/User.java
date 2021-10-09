package com.epamhack.fontkeeper.model.db;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private int suggested;

    private int accepted;

    private boolean status;

//    @ManyToOne
//    @JoinColumn(name = "role_id", nullable = false)
//    private Role role;
}
