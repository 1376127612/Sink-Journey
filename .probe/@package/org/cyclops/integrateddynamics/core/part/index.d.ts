import { $HolderLookup$Provider, $Direction_, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ValueDeseralizationContext_ } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $Set_, $List_, $OptionalInt } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as event from "@package/org/cyclops/integrateddynamics/core/part/event";

declare module "@package/org/cyclops/integrateddynamics/core/part" {
    export class $PartConfigSnapshot extends $Record {
        version(): number;
        isEmpty(): boolean;
        isEnabled(arg0: string): boolean;
        getEntries(arg0: $ValueDeseralizationContext_): $List<$PartConfigEntry>;
        extraData(): $Map<$PartConfigSection, $CompoundTag>;
        getRequiredMaxOffset(arg0: $Set_<$PartConfigSection_>): number;
        getRequiredBlankVariables(arg0: $Set_<$PartConfigSection_>): number;
        disabledEntries(): $List<string>;
        withEntryEnabled(arg0: string, arg1: boolean): $PartConfigSnapshot;
        getSections(): $Set<$PartConfigSection>;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): ($PartConfigSnapshot) | undefined;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        aspectProperties(): $Map<$ResourceLocation, $CompoundTag>;
        getExtraData(arg0: $PartConfigSection_): $CompoundTag;
        hasSection(arg0: $PartConfigSection_): boolean;
        sourcePartType(): $ResourceLocation;
        static getOffsetEnhancements(arg0: number): $ItemStack;
        getVariableCards(arg0: $Set_<$PartConfigSection_>): $List<$PartConfigSnapshot$VariableCard>;
        variableCards(): $List<$PartConfigSnapshot$VariableCard>;
        partSettings(): ($PartConfigSnapshot$PartSettings) | undefined;
        static SETTING_TARGET_SIDE: string;
        static CODEC_VARIABLE_CARD: $Codec<$PartConfigSnapshot$VariableCard>;
        static CODEC: $Codec<$PartConfigSnapshot>;
        static INVENTORY_NAME_ACTIVE: string;
        static VERSION: number;
        static SETTING_UPDATE_INTERVAL: string;
        static SETTING_PRIORITY: string;
        static SETTING_CHANNEL: string;
        static SETTING_MAX_OFFSET: string;
        static CODEC_PART_SETTINGS: $Codec<$PartConfigSnapshot$PartSettings>;
        static SETTING_TARGET_OFFSET: string;
        constructor(arg0: number, arg1: $ResourceLocation_, arg2: ($PartConfigSnapshot$PartSettings_) | undefined, arg3: $Map_<$ResourceLocation_, $CompoundTag_>, arg4: $List_<$PartConfigSnapshot$VariableCard_>, arg5: $Map_<$PartConfigSection_, $CompoundTag_>);
        constructor(version: number, sourcePartType: $ResourceLocation_, partSettings: ($PartConfigSnapshot$PartSettings_) | undefined, aspectProperties: $Map_<$ResourceLocation_, $CompoundTag_>, variableCards: $List_<$PartConfigSnapshot$VariableCard_>, extraData: $Map_<$PartConfigSection_, $CompoundTag_>, disabledEntries: $List_<string>);
        get empty(): boolean;
        get sections(): $Set<$PartConfigSection>;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot}.
     */
    export type $PartConfigSnapshot_ = { extraData?: $Map_<$PartConfigSection_, $CompoundTag_>, version?: number, partSettings?: ($PartConfigSnapshot$PartSettings_) | undefined, sourcePartType?: $ResourceLocation_, aspectProperties?: $Map_<$ResourceLocation_, $CompoundTag_>, disabledEntries?: $List_<string>, variableCards?: $List_<$PartConfigSnapshot$VariableCard_>,  } | [extraData?: $Map_<$PartConfigSection_, $CompoundTag_>, version?: number, partSettings?: ($PartConfigSnapshot$PartSettings_) | undefined, sourcePartType?: $ResourceLocation_, aspectProperties?: $Map_<$ResourceLocation_, $CompoundTag_>, disabledEntries?: $List_<string>, variableCards?: $List_<$PartConfigSnapshot$VariableCard_>, ];
    export class $PartConfigApplyResult {
        getMessage(): $MutableComponent;
        addWarning(arg0: $Component_): void;
        getWarnings(): $List<$MutableComponent>;
        addApplied(arg0: $Component_): void;
        setAppliedMaxOffset(arg0: number): void;
        addAppliedProperties(arg0: number): void;
        addSkippedProperties(arg0: number): void;
        setMissingMaxOffset(arg0: number): void;
        setPartSettingsApplied(arg0: boolean): void;
        isPartSettingsApplied(): boolean;
        getMissingMaxOffset(): number;
        getSkippedProperties(): number;
        getAppliedMaxOffset(): number;
        getAppliedProperties(): number;
        setMissingBlanks(arg0: number): void;
        setOffsetFailed(arg0: boolean): void;
        addCardsSkipped(arg0: number): void;
        addCardsPasted(arg0: number): void;
        isOffsetFailed(): boolean;
        getMissingBlanks(): number;
        getCardsPasted(): number;
        getCardsSkipped(): number;
        constructor();
        get message(): $MutableComponent;
        get warnings(): $List<$MutableComponent>;
        get skippedProperties(): number;
        get appliedProperties(): number;
        get cardsPasted(): number;
        get cardsSkipped(): number;
    }
    export class $PartConfigSnapshot$VariableCard extends $Record {
        slot(): number;
        inventoryName(): string;
        itemStack(): $ItemStack;
        constructor(inventoryName: string, slot: number, itemStack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot$VariableCard}.
     */
    export type $PartConfigSnapshot$VariableCard_ = { inventoryName?: string, itemStack?: $ItemStack_, slot?: number,  } | [inventoryName?: string, itemStack?: $ItemStack_, slot?: number, ];
    export class $PartConfigSection extends $Enum<$PartConfigSection> implements $StringRepresentable {
        static values(): $PartConfigSection[];
        static valueOf(arg0: string): $PartConfigSection;
        getGuiTranslationKey(): string;
        static forInventoryName(arg0: string): $PartConfigSection;
        getSerializedName(): string;
        getTranslationKey(): string;
        getRemappedEnumConstantName(): string;
        static ALL: $Set<$PartConfigSection>;
        static CODEC: $Codec<$PartConfigSection>;
        static PART_SETTINGS: $PartConfigSection;
        static ASPECT: $PartConfigSection;
        get guiTranslationKey(): string;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSection}.
     */
    export type $PartConfigSection_ = "part_settings" | "aspect";
    export class $PartConfigSnapshot$PartSettings extends $Record {
        priority(): (number) | undefined;
        isEmpty(): boolean;
        channel(): (number) | undefined;
        maxOffset(): (number) | undefined;
        updateInterval(): (number) | undefined;
        targetSide(): ($Direction) | undefined;
        targetOffset(): ($Vec3i) | undefined;
        constructor(updateInterval: (number) | undefined, priority: (number) | undefined, channel: (number) | undefined, targetSide: ($Direction_) | undefined, targetOffset: ($Vec3i) | undefined, maxOffset: (number) | undefined);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot$PartSettings}.
     */
    export type $PartConfigSnapshot$PartSettings_ = { priority?: (number) | undefined, targetOffset?: ($Vec3i) | undefined, targetSide?: ($Direction_) | undefined, updateInterval?: (number) | undefined, maxOffset?: (number) | undefined, channel?: (number) | undefined,  } | [priority?: (number) | undefined, targetOffset?: ($Vec3i) | undefined, targetSide?: ($Direction_) | undefined, updateInterval?: (number) | undefined, maxOffset?: (number) | undefined, channel?: (number) | undefined, ];
    export class $PartConfigEntry extends $Record {
        group(): $Component;
        value(): $Component;
        id(): string;
        color(): $OptionalInt;
        section(): $PartConfigSection;
        label(): $Component;
        aspect(): ($ResourceLocation) | undefined;
        icon(): $ItemStack;
        static idExtra(arg0: $PartConfigSection_, arg1: string): string;
        static idAspectProperty(arg0: $ResourceLocation_, arg1: string): string;
        static idPartSetting(arg0: string): string;
        static idVariableCard(arg0: string, arg1: number): string;
        static PREFIX_PART_SETTINGS: string;
        static PREFIX_EXTRA: string;
        static PREFIX_VARIABLE_CARD: string;
        static PREFIX_ASPECT: string;
        constructor(arg0: string, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $PartConfigSection_);
        constructor(id: string, group: $Component_, label: $Component_, value: $Component_, icon: $ItemStack_, aspect: ($ResourceLocation_) | undefined, color: $OptionalInt, section: $PartConfigSection_);
    }
    /**
     * Values that may be interpreted as {@link $PartConfigEntry}.
     */
    export type $PartConfigEntry_ = { group?: $Component_, id?: string, icon?: $ItemStack_, aspect?: ($ResourceLocation_) | undefined, section?: $PartConfigSection_, label?: $Component_, color?: $OptionalInt, value?: $Component_,  } | [group?: $Component_, id?: string, icon?: $ItemStack_, aspect?: ($ResourceLocation_) | undefined, section?: $PartConfigSection_, label?: $Component_, color?: $OptionalInt, value?: $Component_, ];
}
