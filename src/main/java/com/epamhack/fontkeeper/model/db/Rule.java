package com.epamhack.fontkeeper.model.db;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "rules")
@NoArgsConstructor
public class Rule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String ruleName;

    @Column(nullable = false)
    private String ruleInfo;

    @ManyToOne
    @JoinColumn(name = "rule_category_id", nullable = false)
    private RuleCategory ruleCategory;

    private int rank;

    private boolean visible;

    @ManyToMany
    @JoinTable (name="letters_rules",
            joinColumns=@JoinColumn (name="rule_id", nullable = false),
            inverseJoinColumns=@JoinColumn(name="letter_id", nullable = false))
    private List<Letter> allLettersWithRule;
}
