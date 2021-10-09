package com.epamHack.FontKeeper.model.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
public class Font {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fontName;
    private String fontCategory;
    private boolean display;
    private boolean monospace;
    private boolean cyrillic;
    private boolean latin;
    private String license;
    private String sourceLink;
    private boolean addToLib;
    private int ownerID;
}
