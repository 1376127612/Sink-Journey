import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ITranslationStorage } from "@package/com/euphony/neo_language_reload/access";
import { $SortedMap, $List_, $Locale, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        /**
         * Translates the given string and then formats it. Equivalent to `String.format(translate(key), parameters)`.
         */
        static get(translateKey: string, ...parameters: $Object[]): string;
        static exists(key: string): boolean;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener {
        getLanguage(code: string): $LanguageInfo;
        setSelected(selected: string): void;
        getSelected(): string;
        getJavaLocale(): $Locale;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
        get javaLocale(): $Locale;
        get languages(): $SortedMap<string, $LanguageInfo>;
        get name(): string;
    }
    export class $ClientLanguage extends $Language implements $ITranslationStorage {
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        languagereload_getTargetLanguage(): string;
        languagereload_setTargetLanguage(arg0: string): void;
        languagereload_get(id: string): string;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRightToLeft: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        toComponent(): $Component;
        bidirectional(): boolean;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { region?: string, name?: string, bidirectional?: boolean,  } | [region?: string, name?: string, bidirectional?: boolean, ];
}
