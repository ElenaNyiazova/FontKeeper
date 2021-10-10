package com.epamhack.fontkeeper.model.db;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "letters")
@NoArgsConstructor
public class Letter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String alphabet;

    @ManyToMany
    @JoinTable (name="letters_rules",
            joinColumns=@JoinColumn (name="letter_id", nullable = false),
            inverseJoinColumns=@JoinColumn(name="rule_id", nullable = false))
    private List<Rule> rules;
}
