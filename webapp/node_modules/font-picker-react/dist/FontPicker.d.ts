import { Category, Font, FontManager, Script, SortOption, Variant } from "@samuelmeuli/font-manager";
import React, { PureComponent } from "react";
declare type LoadingStatus = "loading" | "finished" | "error";
interface Props {
    apiKey: string;
    activeFontFamily: string;
    onChange: (font: Font) => void;
    pickerId: string;
    families: string[];
    categories: Category[];
    scripts: Script[];
    variants: Variant[];
    filter: (font: Font) => boolean;
    limit: number;
    sort: SortOption;
}
interface State {
    expanded: boolean;
    loadingStatus: LoadingStatus;
}
export default class FontPicker extends PureComponent<Props, State> {
    fontManager: FontManager;
    static defaultProps: {
        activeFontFamily: string;
        onChange: () => void;
        pickerId: string;
        families: string[];
        categories: Category[];
        scripts: Script[];
        variants: Variant[];
        filter: (font: Font) => boolean;
        limit: number;
        sort: SortOption;
    };
    state: Readonly<State>;
    constructor(props: Props);
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: Props) => void;
    onClose: (e: MouseEvent) => void;
    onSelection: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
    setActiveFontFamily: (activeFontFamily: string) => void;
    generateFontList: (fonts: Font[]) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    toggleExpanded: () => void;
    render: () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export {};
//# sourceMappingURL=FontPicker.d.ts.map