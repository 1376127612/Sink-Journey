import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map_, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Holder$Reference, $Registry, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $Explosion, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        createLegacyBlock(state: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        getDropOff(level: $LevelReader): number;
        getSlopeFindDistance(level: $LevelReader): number;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byId(id: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $InjectedFluidExtension, $FluidKJS {
        /**
         * @deprecated
         */
        is(tag: $TagKey_<$Fluid>): boolean;
        getShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getBucket(): $Item;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        isSource(state: $FluidState): boolean;
        getKey(): $ResourceKey<any>;
        asHolder(): $Holder$Reference<any>;
        getPickupSound(): ($SoundEvent) | undefined;
        getOwnHeight(state: $FluidState): number;
        getTickDelay(level: $LevelReader): number;
        getFluidType(): $FluidType;
        getId(): string;
        getHeight(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): number;
        defaultFluidState(): $FluidState;
        isSame(fluid: $Fluid_): boolean;
        getAmount(state: $FluidState): number;
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getAmount(): number;
        getFluid(): $Fluid;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        get bucket(): $Item;
        get stateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        get key(): $ResourceKey<any>;
        get pickupSound(): ($SoundEvent) | undefined;
        get fluidType(): $FluidType;
        get id(): string;
        get empty(): boolean;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get fluid(): $Fluid;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get tags(): $List<$ResourceLocation>;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        static getColorFromPackedId(packedId: number): number;
        static byId(id: number): $MapColor;
        getPackedId(brightness: $MapColor$Brightness_): number;
        calculateRGBColor(brightness: $MapColor$Brightness_): number;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static MATERIAL_COLORS: $MapColor[];
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor {
        getSource(falling: boolean): $FluidState;
        getSource(): $Fluid;
        tick(level: $Level_, pos: $BlockPos_, state: $FluidState): void;
        getFlowing(): $Fluid;
        getFlowing(level: number, falling: boolean): $FluidState;
        handler$dfd000$ftbchunks$onGetSpread(level: $Level_, blockPos: $BlockPos_, blockState: $BlockState_, cir: $CallbackInfoReturnable<any>, map: $Map_<any, any>): void;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        handler$cfd000$lithium$getSpread(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfoReturnable<any>): void;
        create$getNewLiquid(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        is(fluid: $Fluid_): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluids: $HolderSet_<$Fluid>): boolean;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        tick(level: $Level_, pos: $BlockPos_): void;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        isSourceOfType(fluid: $Fluid_): boolean;
        animateTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        isSource(): boolean;
        isRandomlyTicking(): boolean;
        getOwnHeight(): number;
        canBeReplacedWith(level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        getHeight(level: $BlockGetter, pos: $BlockPos_): number;
        createLegacyBlock(): $BlockState;
        getDripParticle(): $ParticleOptions;
        randomTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getFlow(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        getAmount(): number;
        shouldRenderBackwardUpFace(level: $BlockGetter, pos: $BlockPos_): boolean;
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        canExtinguish(level: $BlockGetter, pos: $BlockPos_): boolean;
        getFluidType(): $FluidType;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        static PROPERTIES_TAG: string;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        constructor(owner: $Fluid_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get source(): boolean;
        get randomlyTicking(): boolean;
        get ownHeight(): number;
        get dripParticle(): $ParticleOptions;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        createLegacyBlock(state: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        randomTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getDropOff(level: $LevelReader): number;
        getSlopeFindDistance(level: $LevelReader): number;
        getSpreadDelay(level: $Level_, pos: $BlockPos_, currentState: $FluidState, newState: $FluidState): number;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
