package com.epamHack.FontKeeper.model.db;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "fonts")
@NoArgsConstructor
public class Font {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String fontName;

    private boolean serifCategory;

    private boolean sansSerifCategory;

    private boolean handwritingCategory;

    private boolean display;

    private boolean monospace;

    private boolean cyrillic;

    private boolean latin;

    private String license;

    @Column(nullable = false)
    private String sourceLink;

    private boolean addToLib;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User ownerID;
}
