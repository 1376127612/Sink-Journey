
declare module "@package/io/github/reserveword/imblocker/common/gui" {
    export class $CursorInfo {
        cursor: number;
        cursorLineBeginIndex: number;
        text: string;
        constructor(arg0: number, arg1: number, arg2: string);
    }
    export class $FocusableObject {
    }
    export interface $FocusableObject {
        getGuiScale(): number;
        getBoundsAbs(): $Rectangle;
        isTrulyFocused(): boolean;
        getPreferredState(): boolean;
        updateIMState(): void;
        updateEnglishState(): void;
        getCaretPos(): $Point;
        getFontHeight(): number;
        deliverFocus(): void;
        lostFocus(): void;
        getPreferredEnglishState(): boolean;
        get guiScale(): number;
        get boundsAbs(): $Rectangle;
        get trulyFocused(): boolean;
        get preferredState(): boolean;
        get caretPos(): $Point;
        get fontHeight(): number;
        get preferredEnglishState(): boolean;
    }
    export class $FocusContainer implements $FocusableObject {
        requestFocus(arg0: $FocusableWidget): void;
        getGuiScale(): number;
        setGuiScaleFactor(arg0: number): void;
        checkFocusCandidatesVisibility(arg0: number): void;
        clearFocus(): void;
        switchFocus(arg0: $FocusableWidget): void;
        locateRealFocus(): void;
        setPreferredState(arg0: boolean): void;
        getBoundsAbs(): $Rectangle;
        getPreferredState(): boolean;
        removeFocus(arg0: $FocusableWidget): void;
        getCaretPos(): $Point;
        deliverFocus(): void;
        lostFocus(): void;
        getInternalGuiScale(): number;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        updateEnglishState(): void;
        getFontHeight(): number;
        getPreferredEnglishState(): boolean;
        static MINECRAFT: $FocusContainer;
        static IMGUI: $FocusContainer;
        get guiScale(): number;
        set guiScaleFactor(value: number);
        get boundsAbs(): $Rectangle;
        get caretPos(): $Point;
        get internalGuiScale(): number;
        get trulyFocused(): boolean;
        get fontHeight(): number;
        get preferredEnglishState(): boolean;
    }
    export class $MinecraftMultilineEditBoxWidget {
    }
    export interface $MinecraftMultilineEditBoxWidget extends $MinecraftAbstractTextInputWidget<$MultilineCursorInfo> {
        getCaretPos(): $Point;
        imblocker$getContentOffsetX(): number;
        imblocker$getContentOffsetY(): number;
        get caretPos(): $Point;
    }
    export class $Rectangle {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        derive(arg0: number): $Rectangle;
        static EMPTY: $Rectangle;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SinglelineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        widgetHeight: number;
        hasBorder: boolean;
        text: string;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MultilineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        scrollY: number;
        text: string;
        cursorLineIndex: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MinecraftFocusableWidget {
    }
    export interface $MinecraftFocusableWidget extends $FocusableWidget {
        getGuiScale(): number;
        getFocusContainer(): $FocusContainer;
        imblocker$onFocusGained(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        getInternalGuiScale(): number;
        get guiScale(): number;
        get focusContainer(): $FocusContainer;
        get internalGuiScale(): number;
    }
    export class $FocusableWidget {
    }
    export interface $FocusableWidget extends $FocusableObject {
        getGuiScale(): number;
        isRenderable(): boolean;
        getFocusContainer(): $FocusContainer;
        getPreferredState(): boolean;
        get guiScale(): number;
        get renderable(): boolean;
        get focusContainer(): $FocusContainer;
        get preferredState(): boolean;
    }
    export class $Point {
        x(): number;
        y(): number;
        derive(arg0: number): $Point;
        static TOP_LEFT: $Point;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
    }
    export class $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> {
    }
    export interface $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> extends $MinecraftFocusableWidget {
        deliverFocus(): void;
        imblocker$onCursorChanged(): void;
        getCursorInfo(): CI;
        updateCursorInfo(): boolean;
        get cursorInfo(): CI;
    }
    export class $MinecraftTextFieldWidget {
    }
    export interface $MinecraftTextFieldWidget extends $MinecraftAbstractTextInputWidget<$SinglelineCursorInfo> {
        getPaddingX(): number;
        checkVisibility(arg0: number): void;
        getCaretPos(): $Point;
        setPreferredEnglishState(arg0: boolean): void;
        getPrimaryEnglishState(): boolean;
        get paddingX(): number;
        get caretPos(): $Point;
        set preferredEnglishState(value: boolean);
        get primaryEnglishState(): boolean;
    }
}
