package com.epamHack.FontKeeper.model.rest;

import com.sun.istack.internal.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FontDTO {

    @Id
    private int id;

    @NotNull
    private String fontName;
    private boolean serifCategory;
    private boolean sansSerifCategory;
    private boolean handwritingCategory;
    private boolean display;
    private boolean monospace;
    private boolean cyrillic;
    private boolean latin;
    private String license;
    private String sourceLink;
    private boolean addToLib;
    private int ownerID;
}