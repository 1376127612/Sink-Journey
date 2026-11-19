import { $PackSource } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Version, $Version$ModVersionProvider } from "@package/de/ambertation/wunderlib/utils";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Logger as $Logger$1 } from "@package/de/ambertation/wunderlib/general";
import { $Object, $Enum, $Exception } from "@package/java/lang";
import { $ModContainer } from "@package/net/neoforged/fml";

declare module "@package/org/betterx/wover/core/api" {
    export class $DatapackActivationType extends $Enum<$DatapackActivationType> {
        packSource(): $PackSource;
        static values(): $DatapackActivationType[];
        static valueOf(arg0: string): $DatapackActivationType;
        alwaysActive(): boolean;
        static ALWAYS_ENABLED: $DatapackActivationType;
        static DEFAULT_ENABLED: $DatapackActivationType;
        static NORMAL: $DatapackActivationType;
    }
    /**
     * Values that may be interpreted as {@link $DatapackActivationType}.
     */
    export type $DatapackActivationType_ = "normal" | "default_enabled" | "always_enabled";
    export class $Logger extends $Logger$1 {
        verboseError(arg0: string): void;
        verboseError(arg0: string, arg1: $Exception): void;
        verboseWarning(arg0: string, ...arg1: $Object[]): void;
        verboseWarning(arg0: string): void;
        static create(arg0: $ModCore): $Logger;
        verbose(arg0: string, ...arg1: $Object[]): void;
        verbose(arg0: string): void;
    }
    export class $ModCore implements $Version$ModVersionProvider {
        registerDatapackListener(arg0: $IEventBus): void;
        getModID(): string;
        static isServer(): boolean;
        static isDatagen(): boolean;
        id(arg0: string): $ResourceLocation;
        static create(arg0: string): $ModCore;
        static create(arg0: string, arg1: string): $ModCore;
        mk(arg0: string): $ResourceLocation;
        isLoaded(): boolean;
        getNamespace(): string;
        static isDevEnvironment(): boolean;
        getModVersion(): $Version;
        providedDatapacks(): $Stream<$ResourceLocation>;
        convertNamespace(arg0: $ResourceLocation_): $ResourceLocation;
        convertNamespace<T>(arg0: $ResourceKey_<T>): $ResourceLocation;
        addDatapack(arg0: string, arg1: $DatapackActivationType_): $ResourceLocation;
        addDatapack(arg0: $ModCore): $ResourceLocation;
        static isClient(): boolean;
        LOG: $Logger;
        log: $Logger;
        namespace: string;
        modId: string;
        modContainer: $ModContainer;
        get modID(): string;
        static get server(): boolean;
        static get datagen(): boolean;
        get loaded(): boolean;
        static get devEnvironment(): boolean;
        get modVersion(): $Version;
        static get client(): boolean;
    }
}
