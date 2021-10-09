package com.epamHack.FontKeeper.model.rest;


import com.epamHack.FontKeeper.model.db.Font;
import com.sun.istack.internal.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

public class FontDTO{

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

    public FontDTO(Font font) {

        this.id = font.getId();
        this.fontName = font.getFontName();
        this.serifCategory = font.isSerifCategory();
        this.sansSerifCategory = font.isSansSerifCategory();
        this.handwritingCategory = font.isHandwritingCategory();
        this.display = font.isDisplay();
        this.monospace = font.isMonospace();
        this.cyrillic = font.isCyrillic();
        this.latin = font.isLatin();
        this.license = font.getLicense().toString();
        this.sourceLink = font.getSourceLink();
        this.addToLib = font.isAddToLib();
        this.ownerID = font.getOwnerID();
    }

}