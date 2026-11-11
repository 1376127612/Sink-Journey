import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $ClientLanguage } from "@package/net/minecraft/client/resources/language";
import { $ILanguage } from "@package/com/euphony/neo_language_reload/access";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language implements $ILanguage {
        /**
         * Return the StringTranslate singleton instance
         */
        static getInstance(): $Language;
        getOrDefault(id: string): string;
        getOrDefault(key: string, defaultValue: string): string;
        has(id: string): boolean;
        static inject(instance: $Language): void;
        getComponent(arg0: string): $Component;
        languagereload_getTranslationStorage(): $ClientLanguage;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        static loadFromJson(stream: $InputStream, output: $BiConsumer_<string, string>): void;
        getVisualOrder(text: $FormattedText): $FormattedCharSequence;
        getVisualOrder(text: $List_<any>): $List<any>;
        getLanguageData(): $Map<string, string>;
        isDefaultRightToLeft(): boolean;
        languagereload_setTranslationStorage(arg0: $ClientLanguage): void;
        static DEFAULT: string;
        constructor();
        static get instance(): $Language;
        get languageData(): $Map<string, string>;
        get defaultRightToLeft(): boolean;
    }
}
