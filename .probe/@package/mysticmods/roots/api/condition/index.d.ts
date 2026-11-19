import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $PartialBlockState_ } from "@package/mysticmods/roots/api/test/world";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record, $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/condition" {
    export interface $ILevelConditionType<T> extends RegistryMarked<RegistryTypes.RootsLevelConditionsTag, RegistryTypes.RootsLevelConditions> {}
    export class $IPlayerConditionType<T extends $IPlayerCondition> {
    }
    export interface $IPlayerConditionType<T extends $IPlayerCondition> {
        mapCodec(): $MapCodec<T>;
        codec(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConditionType}.
     */
    export type $IPlayerConditionType_<T> = RegistryTypes.RootsPlayerConditions;
    export class $CanonicalRepresentation extends $Record {
        resolvedStates(): $List<$BlockState>;
        states(): $List<$Either<$CanonicalRepresentation$CanonicalBlock, $CanonicalRepresentation$CanonicalBlockState>>;
        getStates(): $List<$BlockState>;
        place(arg0: $Level_, arg1: $BlockPos_): boolean;
        static CODEC: $Codec<$CanonicalRepresentation>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CanonicalRepresentation>;
        constructor(...arg0: $Object[]);
        constructor(states: $List_<$Either<$CanonicalRepresentation$CanonicalBlock_, $CanonicalRepresentation$CanonicalBlockState_>>, resolvedStates: $List_<$BlockState_>);
    }
    /**
     * Values that may be interpreted as {@link $CanonicalRepresentation}.
     */
    export type $CanonicalRepresentation_ = { states?: $List_<$Either<$CanonicalRepresentation$CanonicalBlock_, $CanonicalRepresentation$CanonicalBlockState_>>, resolvedStates?: $List_<$BlockState_>,  } | [states?: $List_<$Either<$CanonicalRepresentation$CanonicalBlock_, $CanonicalRepresentation$CanonicalBlockState_>>, resolvedStates?: $List_<$BlockState_>, ];
    export class $ILevelCondition {
        static hasTag(arg0: $ILevelCondition, arg1: $TagKey_<$ILevelConditionType<never>>): boolean;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ILevelCondition>>;
        static CODEC: $Codec<$ILevelCondition>;
        static LIST_CODEC: $Codec<$List<$ILevelCondition>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ILevelCondition>;
    }
    export interface $ILevelCondition {
        getRepresentation(): $CanonicalRepresentation;
        getDescriptionComponent(): $Component;
        getNameComponent(): $Component;
        getName(): string;
        type(): $ILevelConditionType<never>;
        test(arg0: $BlockPos_, arg1: $Level_, arg2: $Player | null): $Set<$BlockPos>;
        test(arg0: $Level_, arg1: $Player, arg2: $BoundingBox, arg3: $BlockPos_, arg4: $Set_<$BlockPos_>): $Set<$BlockPos>;
        get representation(): $CanonicalRepresentation;
        get descriptionComponent(): $Component;
        get nameComponent(): $Component;
        get name(): string;
    }
    export class $CanonicalRepresentation$CanonicalBlockState extends $Record implements $CanonicalRepresentation$CanonicalBlockOrState {
    }
    /**
     * Values that may be interpreted as {@link $CanonicalRepresentation$CanonicalBlockState}.
     */
    export type $CanonicalRepresentation$CanonicalBlockState_ = { state?: $PartialBlockState_,  } | [state?: $PartialBlockState_, ];
    export class $IPlayerCondition {
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$IPlayerCondition>>;
        static CODEC: $Codec<$IPlayerCondition>;
        static LIST_CODEC: $Codec<$List<$IPlayerCondition>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IPlayerCondition>;
    }
    export interface $IPlayerCondition {
        getDescriptionComponent(): $Component;
        getNameComponent(): $Component;
        getName(): string;
        type(): $IPlayerConditionType<never>;
        test(arg0: $Level_, arg1: $Player): boolean;
        get descriptionComponent(): $Component;
        get nameComponent(): $Component;
        get name(): string;
    }
    export class $CanonicalRepresentation$CanonicalBlockOrState {
    }
    export interface $CanonicalRepresentation$CanonicalBlockOrState {
    }
    export class $CanonicalRepresentation$CanonicalBlock extends $Record implements $CanonicalRepresentation$CanonicalBlockOrState {
    }
    /**
     * Values that may be interpreted as {@link $CanonicalRepresentation$CanonicalBlock}.
     */
    export type $CanonicalRepresentation$CanonicalBlock_ = { block?: $Block_,  } | [block?: $Block_, ];
    export interface $IPlayerConditionType<T> extends RegistryMarked<RegistryTypes.RootsPlayerConditionsTag, RegistryTypes.RootsPlayerConditions> {}
    export class $ILevelConditionType<T extends $ILevelCondition> {
    }
    export interface $ILevelConditionType<T extends $ILevelCondition> {
        mapCodec(): $MapCodec<T>;
        codec(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $ILevelConditionType}.
     */
    export type $ILevelConditionType_<T> = RegistryTypes.RootsLevelConditions;
}
