import "./picker-styles/styles.scss";
import { Font, FontList, Options } from "./types";
export default class FontManager {
    private readonly apiKey;
    private readonly options;
    private onChange;
    private activeFontFamily;
    private fonts;
    selectorSuffix: string;
    constructor(apiKey: string, defaultFamily: string | undefined, { pickerId, families, categories, scripts, variants, filter, limit, sort, }: Options, onChange?: (font: Font) => void);
    init(): Promise<FontList>;
    getFonts(): FontList;
    addFont(fontFamily: string, downloadPreview?: boolean): void;
    removeFont(fontFamily: string): void;
    getActiveFont(): Font;
    setActiveFont(fontFamily: string, runOnChange?: boolean): void;
    setOnChange(onChange: (font: Font) => void): void;
}
//# sourceMappingURL=FontManager.d.ts.map