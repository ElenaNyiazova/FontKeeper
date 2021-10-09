package com.epamhack.fontkeeper.model.rest;


import com.epamhack.fontkeeper.model.db.Font;
import com.epamhack.fontkeeper.model.db.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FontDTO {

    @Id
    private long id;

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
    private User ownerID;

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
        this.license = font.getLicense();
        this.sourceLink = font.getSourceLink();
        this.addToLib = font.isAddToLib();
        this.ownerID = font.getOwnerID();
    }

}