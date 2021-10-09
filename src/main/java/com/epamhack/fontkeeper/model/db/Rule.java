package com.epamhack.fontkeeper.model.db;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    private boolean rank;

    private int visible;

    @ManyToOne
    @JoinColumn(name = "letter_id", nullable = false)
    private Letter letter;
}
