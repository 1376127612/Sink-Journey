import { $Codec } from "@package/com/mojang/serialization";
import { $PropertyHolder } from "@package/mysticmods/roots/api/property";
import { $List, $Set } from "@package/java/util";
import { $RitualModifier_, $RitualModifier } from "@package/mysticmods/roots/api/modifier";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IDataMapInitialize, $IDescribed } from "@package/mysticmods/roots/api/registry";
import { $BiPredicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PositionCache } from "@package/mysticmods/roots/util";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $IntArrayList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Style } from "@package/net/minecraft/network/chat";
import { $PyreBlockEntity } from "@package/mysticmods/roots/blockentity";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $RitualLike } from "@package/mysticmods/roots/api";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/ritual" {
    export class $Ritual implements $IDescribed, $TooltipComponent, $IDataMapInitialize<$Ritual> {
        getIcon(): $ItemStack;
        getRadiusY(): number;
        getAABB(): $AABB;
        ends(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PyreBlockEntity, arg4: $RandomSource): void;
        getRadiusXZ(): number;
        providesLight(): boolean;
        requiresCache(): boolean;
        stops(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PyreBlockEntity, arg4: $RandomSource): void;
        init(arg0: $Holder_<$Ritual>): void;
        getProperties(): $List<$PropertyHolder<never>>;
        is(arg0: $ResourceKey_<$Ritual>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Ritual>>): boolean;
        is(arg0: $TagKey_<$Ritual>): boolean;
        removed(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PyreBlockEntity, arg4: $RandomSource): void;
        getDuration(): number;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PyreBlockEntity, arg4: $PositionCache | null, arg5: $RandomSource): void;
        builtInRegistryHolder(): $Holder<$Ritual>;
        getInterval(): number;
        starts(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PyreBlockEntity, arg4: $RandomSource): void;
        getPredicates(): $List<$BiPredicate<$Level, $BlockPos>>;
        getBoundingBox(): $BoundingBox;
        getOrCreateDescriptionId(): string;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        performInit(arg0: $Holder_<never>): void;
        static CODEC: $Codec<$Ritual>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Ritual>;
        constructor();
        get icon(): $ItemStack;
        get radiusY(): number;
        get AABB(): $AABB;
        get radiusXZ(): number;
        get properties(): $List<$PropertyHolder<never>>;
        get duration(): number;
        get interval(): number;
        get predicates(): $List<$BiPredicate<$Level, $BlockPos>>;
        get boundingBox(): $BoundingBox;
        get orCreateDescriptionId(): string;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Ritual}.
     */
    export type $Ritual_ = RegistryTypes.RootsRituals;
    export interface $Ritual extends RegistryMarked<RegistryTypes.RootsRitualsTag, RegistryTypes.RootsRituals> {}
    export class $RitualInstanceData extends $Record {
        size(): number;
        get(arg0: number): number;
        data(): $IntArrayList;
        has(arg0: number): boolean;
        static CODEC: $Codec<$RitualInstanceData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RitualInstanceData>;
        constructor(arg0: number);
        constructor(data: $IntArrayList);
    }
    /**
     * Values that may be interpreted as {@link $RitualInstanceData}.
     */
    export type $RitualInstanceData_ = { data?: $IntArrayList,  } | [data?: $IntArrayList, ];
    export class $IRitualInstance {
        static of(arg0: $Ritual_): $IRitualInstance$SimpleRitual;
    }
    export interface $IRitualInstance extends $RitualLike {
        getRitual(): $Ritual;
        getLifetime(): number;
        getEnabledModifiers(): $Set<$RitualModifier>;
        asRitual(): $Ritual;
        getRitualData(): $RitualInstanceData;
        getName(): $MutableComponent;
        isEmpty(): boolean;
        getDuration(): number;
        hasModifier(arg0: $RitualModifier_): boolean;
        hasModifier(arg0: $Holder_<$RitualModifier>): boolean;
        get ritual(): $Ritual;
        get lifetime(): number;
        get enabledModifiers(): $Set<$RitualModifier>;
        get ritualData(): $RitualInstanceData;
        get name(): $MutableComponent;
        get empty(): boolean;
        get duration(): number;
    }
    export class $IRitualInstance$SimpleRitual extends $Record implements $IRitualInstance {
        getRitual(): $Ritual;
        getLifetime(): number;
        getEnabledModifiers(): $Set<$RitualModifier>;
        ritual(): $Ritual;
        hasModifier(arg0: $RitualModifier_): boolean;
        hasModifier(arg0: $Holder_<$RitualModifier>): boolean;
        asRitual(): $Ritual;
        getRitualData(): $RitualInstanceData;
        getName(): $MutableComponent;
        isEmpty(): boolean;
        getDuration(): number;
        constructor(ritual: $Ritual_);
        get lifetime(): number;
        get enabledModifiers(): $Set<$RitualModifier>;
        get ritualData(): $RitualInstanceData;
        get name(): $MutableComponent;
        get empty(): boolean;
        get duration(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRitualInstance$SimpleRitual}.
     */
    export type $IRitualInstance$SimpleRitual_ = { ritual?: $Ritual_,  } | [ritual?: $Ritual_, ];
}
