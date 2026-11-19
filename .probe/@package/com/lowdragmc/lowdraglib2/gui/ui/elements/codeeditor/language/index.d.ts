import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Style } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $Pattern, $Matcher } from "@package/java/util/regex";
import { $Set_, $List, $List_, $Map, $Set } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language" {
    export class $StyleManager {
        getStyleForTokenType(arg0: $TokenType): $Style;
        getStyleMap(): $Map<string, $Style>;
        setDefaultStyle(arg0: $Style): void;
        getDefaultStyle(): $Style;
        defaultStyle: $Style;
        static DEFAULT: $StyleManager;
        constructor();
        get styleMap(): $Map<string, $Style>;
    }
    export class $SyntaxParser {
        parseLine(arg0: string): $List<$Token>;
        getLanguageDefinition(): $ILanguageDefinition;
        setLanguageDefinition(arg0: $ILanguageDefinition): void;
        constructor();
    }
    export class $Token extends $Record {
        type(): $TokenType;
        endIndex(): number;
        startIndex(): number;
        text(): string;
        constructor(text: string, type: $TokenType, startIndex: number, endIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $Token}.
     */
    export type $Token_ = { type?: $TokenType, startIndex?: number, endIndex?: number, text?: string,  } | [type?: $TokenType, startIndex?: number, endIndex?: number, text?: string, ];
    export class $LanguageDefinition implements $ILanguageDefinition {
        getTypesInOrder(): $List<$TokenType>;
        getIndentations(): $Set<string>;
        getTokenPattern(): $Pattern;
        shouldIncreaseIndentation(arg0: string): boolean;
        compileTokenPattern(): $LanguageDefinition;
        getName(): string;
        getTokenType(arg0: $Matcher): $TokenType;
        constructor(arg0: string, arg1: $List_<$TokenType>, arg2: $Set_<string>);
        get typesInOrder(): $List<$TokenType>;
        get indentations(): $Set<string>;
        get tokenPattern(): $Pattern;
        get name(): string;
    }
    export class $Languages {
        static JAVASCRIPT: $LanguageDefinition;
        static XML: $LanguageDefinition;
        static LSS: $LanguageDefinition;
    }
    export class $TokenType implements $Predicate<$Matcher> {
        setMatcher(arg0: $Predicate_<$Matcher>): $TokenType;
        hasPattern(): boolean;
        test(arg0: $Matcher): boolean;
        getPattern(): string;
        setPattern(arg0: string): $TokenType;
        getMatcher(): $Predicate<$Matcher>;
        or(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        negate(): $Predicate<$Matcher>;
        and(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        name: string;
        constructor(arg0: string);
    }
    export class $ILanguageDefinition {
    }
    export interface $ILanguageDefinition {
        getTokenPattern(): $Pattern;
        shouldIncreaseIndentation(arg0: string): boolean;
        getName(): string;
        getTokenType(arg0: $Matcher): $TokenType;
        get tokenPattern(): $Pattern;
        get name(): string;
    }
}
