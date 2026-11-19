import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $ClientLanguage } from "@package/net/minecraft/client/resources/language";
import { $ILanguage } from "@package/com/euphony/neo_language_reload/access";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language implements $ILanguage {
        languagereload_setTranslationStorage(arg0: $ClientLanguage): void;
        getVisualOrder(text: $FormattedText): $FormattedCharSequence;
        getVisualOrder(text: $List_<any>): $List<any>;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        static loadFromJson(stream: $InputStream, output: $BiConsumer_<string, string>): void;
        getLanguageData(): $Map<string, string>;
        languagereload_getTranslationStorage(): $ClientLanguage;
        /**
         * Return the StringTranslate singleton instance
         */
        static getInstance(): $Language;
        getOrDefault(key: string, defaultValue: string): string;
        getOrDefault(id: string): string;
        has(id: string): boolean;
        getComponent(arg0: string): $Component;
        static inject(instance: $Language): void;
        isDefaultRightToLeft(): boolean;
        static DEFAULT: string;
        constructor();
        get languageData(): $Map<string, string>;
        static get instance(): $Language;
        get defaultRightToLeft(): boolean;
    }
}
