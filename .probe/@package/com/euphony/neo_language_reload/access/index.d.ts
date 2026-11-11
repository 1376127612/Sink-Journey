import { $LanguageListWidget, $LanguageEntry } from "@package/com/euphony/neo_language_reload/gui";
import { $ClientLanguage } from "@package/net/minecraft/client/resources/language";

declare module "@package/com/euphony/neo_language_reload/access" {
    export class $ITranslationStorage {
    }
    export interface $ITranslationStorage {
        languagereload_getTargetLanguage(): string;
        languagereload_setTargetLanguage(arg0: string): void;
        languagereload_get(arg0: string): string;
    }
    export class $ILanguage {
    }
    export interface $ILanguage {
        languagereload_getTranslationStorage(): $ClientLanguage;
        languagereload_setTranslationStorage(arg0: $ClientLanguage): void;
    }
    export class $IAdvancementsScreen {
    }
    export interface $IAdvancementsScreen {
        languagereload_recreateWidgets(): void;
    }
    /**
     * Values that may be interpreted as {@link $IAdvancementsScreen}.
     */
    export type $IAdvancementsScreen_ = (() => void);
    export class $ILanguageOptionsScreen {
    }
    export interface $ILanguageOptionsScreen {
        languagereload_focusList(arg0: $LanguageListWidget): void;
        languagereload_focusEntry(arg0: $LanguageEntry): void;
    }
    export class $IAdvancementsTab {
    }
    export interface $IAdvancementsTab {
        languagereload_recreateWidgets(): void;
    }
    /**
     * Values that may be interpreted as {@link $IAdvancementsTab}.
     */
    export type $IAdvancementsTab_ = (() => void);
}
