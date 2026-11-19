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
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): ($PartConfigSnapshot) | undefined;
        getRequiredMaxOffset(arg0: $Set_<$PartConfigSection_>): number;
        getRequiredBlankVariables(arg0: $Set_<$PartConfigSection_>): number;
        sourcePartType(): $ResourceLocation;
        partSettings(): ($PartConfigSnapshot$PartSettings) | undefined;
        hasSection(arg0: $PartConfigSection_): boolean;
        aspectProperties(): $Map<$ResourceLocation, $CompoundTag>;
        withEntryEnabled(arg0: string, arg1: boolean): $PartConfigSnapshot;
        disabledEntries(): $List<string>;
        version(): number;
        isEmpty(): boolean;
        isEnabled(arg0: string): boolean;
        getEntries(arg0: $ValueDeseralizationContext_): $List<$PartConfigEntry>;
        extraData(): $Map<$PartConfigSection, $CompoundTag>;
        getSections(): $Set<$PartConfigSection>;
        getExtraData(arg0: $PartConfigSection_): $CompoundTag;
        static getOffsetEnhancements(arg0: number): $ItemStack;
        getVariableCards(arg0: $Set_<$PartConfigSection_>): $List<$PartConfigSnapshot$VariableCard>;
        variableCards(): $List<$PartConfigSnapshot$VariableCard>;
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
        constructor(version: number, sourcePartType: $ResourceLocation_, partSettings: ($PartConfigSnapshot$PartSettings_) | undefined, aspectProperties: $Map_<$ResourceLocation_, $CompoundTag_>, variableCards: $List_<$PartConfigSnapshot$VariableCard_>, extraData: $Map_<$PartConfigSection_, $CompoundTag_>, disabledEntries: $List_<string>);
        constructor(arg0: number, arg1: $ResourceLocation_, arg2: ($PartConfigSnapshot$PartSettings_) | undefined, arg3: $Map_<$ResourceLocation_, $CompoundTag_>, arg4: $List_<$PartConfigSnapshot$VariableCard_>, arg5: $Map_<$PartConfigSection_, $CompoundTag_>);
        get empty(): boolean;
        get sections(): $Set<$PartConfigSection>;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot}.
     */
    export type $PartConfigSnapshot_ = { disabledEntries?: $List_<string>, variableCards?: $List_<$PartConfigSnapshot$VariableCard_>, extraData?: $Map_<$PartConfigSection_, $CompoundTag_>, version?: number, partSettings?: ($PartConfigSnapshot$PartSettings_) | undefined, sourcePartType?: $ResourceLocation_, aspectProperties?: $Map_<$ResourceLocation_, $CompoundTag_>,  } | [disabledEntries?: $List_<string>, variableCards?: $List_<$PartConfigSnapshot$VariableCard_>, extraData?: $Map_<$PartConfigSection_, $CompoundTag_>, version?: number, partSettings?: ($PartConfigSnapshot$PartSettings_) | undefined, sourcePartType?: $ResourceLocation_, aspectProperties?: $Map_<$ResourceLocation_, $CompoundTag_>, ];
    export class $PartConfigApplyResult {
        getWarnings(): $List<$MutableComponent>;
        addWarning(arg0: $Component_): void;
        addApplied(arg0: $Component_): void;
        getMessage(): $MutableComponent;
        getCardsSkipped(): number;
        getCardsPasted(): number;
        getMissingBlanks(): number;
        isOffsetFailed(): boolean;
        getSkippedProperties(): number;
        isPartSettingsApplied(): boolean;
        getAppliedMaxOffset(): number;
        getMissingMaxOffset(): number;
        getAppliedProperties(): number;
        addSkippedProperties(arg0: number): void;
        addAppliedProperties(arg0: number): void;
        setAppliedMaxOffset(arg0: number): void;
        setMissingMaxOffset(arg0: number): void;
        setPartSettingsApplied(arg0: boolean): void;
        setMissingBlanks(arg0: number): void;
        addCardsSkipped(arg0: number): void;
        addCardsPasted(arg0: number): void;
        setOffsetFailed(arg0: boolean): void;
        constructor();
        get warnings(): $List<$MutableComponent>;
        get message(): $MutableComponent;
        get cardsSkipped(): number;
        get cardsPasted(): number;
        get skippedProperties(): number;
        get appliedProperties(): number;
    }
    export class $PartConfigSnapshot$VariableCard extends $Record {
        inventoryName(): string;
        slot(): number;
        itemStack(): $ItemStack;
        constructor(inventoryName: string, slot: number, itemStack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot$VariableCard}.
     */
    export type $PartConfigSnapshot$VariableCard_ = { itemStack?: $ItemStack_, slot?: number, inventoryName?: string,  } | [itemStack?: $ItemStack_, slot?: number, inventoryName?: string, ];
    export class $PartConfigSection extends $Enum<$PartConfigSection> implements $StringRepresentable {
        getTranslationKey(): string;
        getSerializedName(): string;
        getGuiTranslationKey(): string;
        static forInventoryName(arg0: string): $PartConfigSection;
        static values(): $PartConfigSection[];
        static valueOf(arg0: string): $PartConfigSection;
        getRemappedEnumConstantName(): string;
        static ALL: $Set<$PartConfigSection>;
        static CODEC: $Codec<$PartConfigSection>;
        static PART_SETTINGS: $PartConfigSection;
        static ASPECT: $PartConfigSection;
        get translationKey(): string;
        get serializedName(): string;
        get guiTranslationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSection}.
     */
    export type $PartConfigSection_ = "part_settings" | "aspect";
    export class $PartConfigSnapshot$PartSettings extends $Record {
        updateInterval(): (number) | undefined;
        priority(): (number) | undefined;
        isEmpty(): boolean;
        channel(): (number) | undefined;
        targetSide(): ($Direction) | undefined;
        maxOffset(): (number) | undefined;
        targetOffset(): ($Vec3i) | undefined;
        constructor(updateInterval: (number) | undefined, priority: (number) | undefined, channel: (number) | undefined, targetSide: ($Direction_) | undefined, targetOffset: ($Vec3i) | undefined, maxOffset: (number) | undefined);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PartConfigSnapshot$PartSettings}.
     */
    export type $PartConfigSnapshot$PartSettings_ = { updateInterval?: (number) | undefined, maxOffset?: (number) | undefined, channel?: (number) | undefined, priority?: (number) | undefined, targetOffset?: ($Vec3i) | undefined, targetSide?: ($Direction_) | undefined,  } | [updateInterval?: (number) | undefined, maxOffset?: (number) | undefined, channel?: (number) | undefined, priority?: (number) | undefined, targetOffset?: ($Vec3i) | undefined, targetSide?: ($Direction_) | undefined, ];
    export class $PartConfigEntry extends $Record {
        icon(): $ItemStack;
        static idExtra(arg0: $PartConfigSection_, arg1: string): string;
        group(): $Component;
        value(): $Component;
        id(): string;
        color(): $OptionalInt;
        section(): $PartConfigSection;
        label(): $Component;
        aspect(): ($ResourceLocation) | undefined;
        static idVariableCard(arg0: string, arg1: number): string;
        static idPartSetting(arg0: string): string;
        static idAspectProperty(arg0: $ResourceLocation_, arg1: string): string;
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
    export type $PartConfigEntry_ = { icon?: $ItemStack_, aspect?: ($ResourceLocation_) | undefined, section?: $PartConfigSection_, label?: $Component_, color?: $OptionalInt, value?: $Component_, group?: $Component_, id?: string,  } | [icon?: $ItemStack_, aspect?: ($ResourceLocation_) | undefined, section?: $PartConfigSection_, label?: $Component_, color?: $OptionalInt, value?: $Component_, group?: $Component_, id?: string, ];
}
