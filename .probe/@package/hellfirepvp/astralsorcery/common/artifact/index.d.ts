import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ChatFormatting } from "@package/net/minecraft";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vector3, $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $ItemEntityArtifact } from "@package/hellfirepvp/astralsorcery/common/entity/item";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/artifact" {
    export class $ArtifactCondition$Type<T extends $ArtifactCondition> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $ArtifactCondition$Type}.
     */
    export type $ArtifactCondition$Type_<T> = RegistryTypes.AstralsorceryArtifactConditionTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactCondition>, codec?: $MapCodec_<$ArtifactCondition>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactCondition>, codec?: $MapCodec_<$ArtifactCondition>, ];
    export class $ArtifactEffect {
        applyEffect(arg0: $RandomSource, arg1: $ServerLevel, arg2: $ItemEntityArtifact): void;
        unwrapType(): $ArtifactEffect$Type<never>;
        getId(): $ResourceLocation;
        getType(): $ArtifactEffect$DeferredType<never>;
        static CODEC: $Codec<$ArtifactEffect>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactEffect>;
        get id(): $ResourceLocation;
        get type(): $ArtifactEffect$DeferredType<never>;
    }
    export interface $ArtifactEffect$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryArtifactEffectTypesTag, RegistryTypes.AstralsorceryArtifactEffectTypes> {}
    export class $ArtifactStability extends $Enum<$ArtifactStability> {
        getPulseEffectChanceMultiplier(): number;
        getChatColor(): $ChatFormatting;
        mayTriggerPulse(): boolean;
        getPulseDelayMultiplier(): number;
        getWorseStability(): ($ArtifactStability) | undefined;
        getBetterStability(): ($ArtifactStability) | undefined;
        mayCauseBreak(): boolean;
        static values(): $ArtifactStability[];
        static valueOf(arg0: string): $ArtifactStability;
        getDisplay(): $Component;
        static VOLATILE: $ArtifactStability;
        static ACTIVE: $ArtifactStability;
        static INERT: $ArtifactStability;
        static STABLE: $ArtifactStability;
        static UNSTABLE: $ArtifactStability;
        static CRITICAL: $ArtifactStability;
        get pulseEffectChanceMultiplier(): number;
        get chatColor(): $ChatFormatting;
        get pulseDelayMultiplier(): number;
        get worseStability(): ($ArtifactStability) | undefined;
        get betterStability(): ($ArtifactStability) | undefined;
        get display(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ArtifactStability}.
     */
    export type $ArtifactStability_ = "inert" | "active" | "unstable" | "volatile" | "critical" | "stable";
    export interface $ArtifactCondition$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryArtifactConditionTypesTag, RegistryTypes.AstralsorceryArtifactConditionTypes> {}
    export class $ArtifactCondition$DeferredType<T extends $ArtifactCondition> extends $Record {
        holder(): $DeferredHolder<$ArtifactCondition$Type<never>, $ArtifactCondition$Type<T>>;
        constructor(holder: $DeferredHolder<$ArtifactCondition$Type_<never>, $ArtifactCondition$Type_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $ArtifactCondition$DeferredType}.
     */
    export type $ArtifactCondition$DeferredType_<T> = { holder?: $DeferredHolder<$ArtifactCondition$Type_<never>, $ArtifactCondition$Type_<$ArtifactCondition>>,  } | [holder?: $DeferredHolder<$ArtifactCondition$Type_<never>, $ArtifactCondition$Type_<$ArtifactCondition>>, ];
    export class $ArtifactCondition {
        unwrapType(): $ArtifactCondition$Type<never>;
        isFulfilled(arg0: $RandomSource, arg1: $ServerLevel, arg2: $ItemEntityArtifact): $List<$Vector3>;
        fulfillCondition(arg0: $RandomSource, arg1: $ServerLevel, arg2: $ItemEntityArtifact): void;
        getDisplayHint(arg0: $RandomSource, arg1: boolean): $Component;
        getId(): $ResourceLocation;
        getType(): $ArtifactCondition$DeferredType<never>;
        static CODEC: $Codec<$ArtifactCondition>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactCondition>;
        get id(): $ResourceLocation;
        get type(): $ArtifactCondition$DeferredType<never>;
    }
    export class $ArtifactStats extends $Record {
        pulses(): number;
        incrementPulse(): $ArtifactStats;
        incrementEmptyTrigger(): $ArtifactStats;
        incrementPartialTrigger(): $ArtifactStats;
        eligibleForStabilityDecrease(): boolean;
        emptyTriggers(): number;
        eligibleForBreak(): boolean;
        partialTriggers(): number;
        static CODEC: $Codec<$ArtifactStats>;
        static EMPTY: $ArtifactStats;
        constructor(pulses: number, emptyTriggers: number, partialTriggers: number);
    }
    /**
     * Values that may be interpreted as {@link $ArtifactStats}.
     */
    export type $ArtifactStats_ = { partialTriggers?: number, emptyTriggers?: number, pulses?: number,  } | [partialTriggers?: number, emptyTriggers?: number, pulses?: number, ];
    export interface $ArtifactType extends RegistryMarked<RegistryTypes.AstralsorceryArtifactTypesTag, RegistryTypes.AstralsorceryArtifactTypes> {}
    export class $TestableArtifactCondition extends $Record {
        getRandom(): $RandomSource;
        isFulfilled(arg0: $ItemEntityArtifact): $List<$Vector3>;
        fulfillCondition(arg0: $ItemEntityArtifact): void;
        successEffect(): $ChancedArtifactEffect;
        conditionSeed(): number;
        condition(): $ArtifactCondition;
        getColor(): $ColorWrapper;
        getDisplay(arg0: boolean): $Component;
        static CODEC: $Codec<$TestableArtifactCondition>;
        constructor(condition: $ArtifactCondition, conditionSeed: number, successEffect: $ChancedArtifactEffect_);
        get random(): $RandomSource;
        get color(): $ColorWrapper;
    }
    /**
     * Values that may be interpreted as {@link $TestableArtifactCondition}.
     */
    export type $TestableArtifactCondition_ = { successEffect?: $ChancedArtifactEffect_, condition?: $ArtifactCondition, conditionSeed?: number,  } | [successEffect?: $ChancedArtifactEffect_, condition?: $ArtifactCondition, conditionSeed?: number, ];
    export class $ArtifactType {
        getName(): $MutableComponent;
        constructor();
        get name(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $ArtifactType}.
     */
    export type $ArtifactType_ = RegistryTypes.AstralsorceryArtifactTypes;
    export class $ArtifactEffect$DeferredType<T extends $ArtifactEffect> extends $Record {
        holder(): $DeferredHolder<$ArtifactEffect$Type<never>, $ArtifactEffect$Type<T>>;
        constructor(holder: $DeferredHolder<$ArtifactEffect$Type_<never>, $ArtifactEffect$Type_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $ArtifactEffect$DeferredType}.
     */
    export type $ArtifactEffect$DeferredType_<T> = { holder?: $DeferredHolder<$ArtifactEffect$Type_<never>, $ArtifactEffect$Type_<$ArtifactEffect>>,  } | [holder?: $DeferredHolder<$ArtifactEffect$Type_<never>, $ArtifactEffect$Type_<$ArtifactEffect>>, ];
    export class $ChancedArtifactEffect extends $Record {
        chance(): number;
        effect(): $ArtifactEffect;
        static CODEC: $Codec<$ChancedArtifactEffect>;
        constructor(effect: $ArtifactEffect, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $ChancedArtifactEffect}.
     */
    export type $ChancedArtifactEffect_ = { effect?: $ArtifactEffect, chance?: number,  } | [effect?: $ArtifactEffect, chance?: number, ];
    export class $ArtifactEffect$Type<T extends $ArtifactEffect> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $ArtifactEffect$Type}.
     */
    export type $ArtifactEffect$Type_<T> = RegistryTypes.AstralsorceryArtifactEffectTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactEffect>, codec?: $MapCodec_<$ArtifactEffect>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ArtifactEffect>, codec?: $MapCodec_<$ArtifactEffect>, ];
}
