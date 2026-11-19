import { $IHasTranslationKey } from "@package/mekanism/api/text";
import { $CachedValue } from "@package/mekanism/common/config/value";
import { $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $ModConfigSpec$Builder, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
export * as value from "@package/mekanism/common/config/value";

declare module "@package/mekanism/common/config" {
    export class $IConfigTranslation {
        static getSectionTitle(title: string, isSection: boolean): string;
    }
    export interface $IConfigTranslation extends $IHasTranslationKey {
        applyToBuilder(builder: $ModConfigSpec$Builder): $ModConfigSpec$Builder;
        title(): string;
        button(): string;
        tooltip(): string;
    }
    export class $IMekanismConfig {
    }
    export interface $IMekanismConfig {
        getTranslation(): string;
        getConfigSpec(): $ModConfigSpec;
        getConfigType(): $ModConfig$Type;
        addCachedValue(configValue: $CachedValue<never>): void;
        save(): void;
        getFileName(): string;
        isLoaded(): boolean;
        clearCache(unloading: boolean): void;
        get translation(): string;
        get configSpec(): $ModConfigSpec;
        get configType(): $ModConfig$Type;
        get fileName(): string;
        get loaded(): boolean;
    }
}
