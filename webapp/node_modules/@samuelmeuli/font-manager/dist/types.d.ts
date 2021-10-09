export declare type Category = "sans-serif" | "serif" | "display" | "handwriting" | "monospace";
export declare type Script = "arabic" | "bengali" | "chinese-simplified" | "chinese-traditional" | "cyrillic" | "cyrillic-ext" | "devanagari" | "greek" | "greek-ext" | "gujarati" | "gurmukhi" | "hebrew" | "japanese" | "kannada" | "khmer" | "korean" | "latin" | "latin-ext" | "malayalam" | "myanmar" | "oriya" | "sinhala" | "tamil" | "​telugu" | "thai" | "vietnamese";
export declare type SortOption = "alphabet" | "popularity";
export declare type Variant = "100" | "100italic" | "200" | "200italic" | "300" | "300italic" | "regular" | "italic" | "500" | "500italic" | "600" | "600italic" | "700" | "700italic" | "800" | "800italic" | "900" | "900italic";
export interface Font {
    family: string;
    id: string;
    category: Category;
    scripts: Script[];
    variants: Variant[];
    kind?: string;
    version?: string;
    lastModified?: string;
    files?: Record<Variant, string>;
}
export declare const FONT_FAMILY_DEFAULT = "Open Sans";
export declare type FontList = Map<string, Font>;
export interface Options {
    pickerId: string;
    families: string[];
    categories: Category[];
    scripts: Script[];
    variants: Variant[];
    filter: (font: Font) => boolean;
    limit: number;
    sort: SortOption;
}
export declare const OPTIONS_DEFAULTS: Options;
//# sourceMappingURL=types.d.ts.map