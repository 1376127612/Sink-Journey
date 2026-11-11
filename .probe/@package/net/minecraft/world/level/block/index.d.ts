import { $Codec, $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $CraftingRecipe, $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimpleParticleType } from "@package/net/minecraft/core/particles";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $ColorRGBA_, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultState } from "@package/net/minecraft/world/level/block/entity/vault";
import { $WorldlyContainerHolder, $InteractionHand_, $Container, $InteractionResultHolder, $WorldlyContainer, $SimpleContainer, $ItemInteractionResult, $InteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IBlockExtension, $IBucketPickupExtension, $IBaseRailBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $IGameLeaves } from "@package/me/srrapero720/chloride/api";
import { $BlockBehaviour$Properties, $BlockBehaviour, $StateDefinition, $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $LiquidBlockAccessor } from "@package/dev/architectury/mixin/forge/neoforge";
import { $BlockStateOnlyInventory } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $ItemAbility_, $IShearable } from "@package/net/neoforged/neoforge/common";
import { $TooltipFlag, $Item$TooltipContext, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack, $Item, $Item_, $Equipable } from "@package/net/minecraft/world/item";
import { $BlockPattern, $BlockPattern$BlockPatternMatch } from "@package/net/minecraft/world/level/block/state/pattern";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome$Precipitation_ } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Float2FloatFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SculkSensorPhase, $BambooLeaves, $IntegerProperty, $WoodType_, $StructureMode, $DirectionProperty, $BedPart, $StairsShape, $AttachFace, $WallSide, $RailShape, $RedstoneSide, $DoubleBlockHalf, $SlabType, $BlockSetType_, $EnumProperty, $DripstoneThickness, $BellAttachType, $Half, $ChestType, $DoorHingeSide, $RailShape_, $NoteBlockInstrument, $WoodType, $Property, $BooleanProperty, $BlockSetType, $ComparatorMode } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $CauldronInteraction$InteractionMap_ } from "@package/net/minecraft/core/cauldron";
import { $InjectedLiquidBlockExtension, $InjectedBlockExtension } from "@package/dev/architectury/extensions/injected";
import { $TreeGrower } from "@package/net/minecraft/world/level/block/grower";
import { $BlockKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $OctahedralGroup } from "@package/com/mojang/math";
import { $Vec3_, $BlockHitResult, $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CropBlockAccessor, $ConcretePowderBlockAccessor, $DispenserBlockAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Collection_, $List_, $Map, $OptionalInt, $Set } from "@package/java/util";
import { $Function_, $Supplier_, $BiConsumer_, $Supplier, $Consumer_, $ToIntFunction, $BiPredicate_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer$RespawnPosAngle } from "@package/net/minecraft/server/level";
import { $PathType_, $PathComputationType_, $PathType } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2ByteLinkedOpenHashMap, $Object2FloatMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Direction_, $NonNullList, $Direction, $Holder_, $FrontAndTop, $Position, $IdMapper, $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction$Axis, $Registry } from "@package/net/minecraft/core";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Object, $Record, $ThreadLocal } from "@package/java/lang";
import { $IBushBlockMixin } from "@package/com/buuz135/industrial/mixin";
import { $ItemLike_, $Level_, $LevelReader, $CollisionGetter, $Explosion, $LevelAccessor, $BlockGetter, $SignalGetter, $BlockAndTintGetter, $ItemLike } from "@package/net/minecraft/world/level";
import { $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $BlockSource_, $DispenseItemBehavior, $DispenseItemBehavior_ } from "@package/net/minecraft/core/dispenser";
import { $FlowingFluid, $Fluid, $Fluid_, $MapColor, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $SuspiciousStewEffects_, $SuspiciousStewEffects } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $BiMap } from "@package/com/google/common/collect";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $ChestBlockEntity, $BlockEntityType_, $SignBlockEntity, $BeehiveBlockEntity$BeeReleaseStatus_, $SkullBlockEntity, $BlockEntityType, $BlockEntity, $LidBlockEntity_, $EnderChestBlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as entity from "@package/net/minecraft/world/level/block/entity";
export * as state from "@package/net/minecraft/world/level/block/state";
export * as piston from "@package/net/minecraft/world/level/block/piston";
export * as grower from "@package/net/minecraft/world/level/block/grower";

declare module "@package/net/minecraft/world/level/block" {
    export class $FrostedIceBlock extends $IceBlock {
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FrostedIceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BambooStalkBlock extends $Block implements $BonemealableBlock {
        codec(): $MapCodec<$BambooStalkBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static LEAVES: $EnumProperty<$BambooLeaves>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static STAGE_DONE_GROWING: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static AGE_THICK_BAMBOO: number;
        static UPDATE_KNOWN_SHAPE: number;
        static MAX_HEIGHT: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static AGE: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BambooStalkBlock>;
        static STAGE: $IntegerProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STAGE_GROWING: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static AGE_THIN_BAMBOO: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $DragonEggBlock extends $FallingBlock {
        codec(): $MapCodec<$DragonEggBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DragonEggBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DispenserBlock extends $BaseEntityBlock implements $DispenserBlockAccessor {
        static registerBehavior(item: $ItemLike_, behavior: $DispenseItemBehavior_): void;
        codec(): $MapCodec<$DispenserBlock>;
        static registerProjectileBehavior(item: $ItemLike_): void;
        static getDispensePosition(blockSource: $BlockSource_, multiplier: number, arg2: $Vec3_): $Position;
        static getDispensePosition(blockSource: $BlockSource_): $Position;
        create$callGetDispenseMethod(level: $Level_, item: $ItemStack_): $DispenseItemBehavior;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DispenserBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static DISPENSER_REGISTRY: $Map<$Item, $DispenseItemBehavior>;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static TRIGGERED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BaseTorchBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $PlayerWallHeadBlock extends $WallSkullBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PlayerWallHeadBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WeepingVinesBlock extends $GrowingPlantHeadBlock {
        codec(): $MapCodec<$WeepingVinesBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeepingVinesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $NetherrackBlock extends $Block implements $BonemealableBlock {
        getType(): $BonemealableBlock$Type;
        codec(): $MapCodec<$NetherrackBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NetherrackBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $DoubleBlockCombiner$NeighborCombineResult$Double<S> implements $DoubleBlockCombiner$NeighborCombineResult<S> {
        apply<T>(combiner: $DoubleBlockCombiner$Combiner<S, T>): T;
        constructor(first: S, second: S);
    }
    export class $KelpBlock extends $GrowingPlantHeadBlock implements $LiquidBlockContainer {
        codec(): $MapCodec<$KelpBlock>;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$KelpBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SeagrassBlock extends $BushBlock implements $BonemealableBlock, $LiquidBlockContainer, $IShearable {
        codec(): $MapCodec<$SeagrassBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        spawnShearedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SeagrassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $MultifaceSpreader$SpreadPos extends $Record {
        pos(): $BlockPos;
        face(): $Direction;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadPos}.
     */
    export type $MultifaceSpreader$SpreadPos_ = { face?: $Direction_, pos?: $BlockPos_,  } | [face?: $Direction_, pos?: $BlockPos_, ];
    export class $BubbleColumnBlock extends $Block implements $BucketPickup {
        static updateColumn(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        static updateColumn(level: $LevelAccessor, pos: $BlockPos_, fluid: $BlockState_, state: $BlockState_): void;
        getPickupSound(): ($SoundEvent) | undefined;
        codec(): $MapCodec<$BubbleColumnBlock>;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BubbleColumnBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static DRAG_DOWN: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SupportType extends $Enum<$SupportType> {
        static values(): $SupportType[];
        static valueOf(arg0: string): $SupportType;
        isSupporting(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, face: $Direction_): boolean;
        static CENTER: $SupportType;
        static FULL: $SupportType;
        static RIGID: $SupportType;
    }
    /**
     * Values that may be interpreted as {@link $SupportType}.
     */
    export type $SupportType_ = "full" | "center" | "rigid";
    export class $WoolCarpetBlock extends $CarpetBlock implements $Equipable {
        getColor(): $DyeColor;
        getEquipSound(): $Holder<$SoundEvent>;
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WoolCarpetBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(color: $DyeColor_, properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
        get equipSound(): $Holder<$SoundEvent>;
        get equipmentSlot(): $EquipmentSlot;
    }
    export class $ConcretePowderBlock extends $FallingBlock implements $ConcretePowderBlockAccessor {
        codec(): $MapCodec<$ConcretePowderBlock>;
        create$getConcrete(): $Block;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ConcretePowderBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(concrete: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $TransparentBlock extends $HalfTransparentBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TransparentBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WallTorchBlock extends $TorchBlock {
        static getShape(state: $BlockState_): $VoxelShape;
        static canSurvive(level: $LevelReader, pos: $BlockPos_, facing: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallTorchBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(flameParticle: $SimpleParticleType, properties: $BlockBehaviour$Properties);
    }
    export class $LeavesBlock extends $Block implements $SimpleWaterloggedBlock, $IShearable, $IGameLeaves {
        chloride$getRL(): $ResourceLocation;
        skipRendering(state: $BlockState_, adjacentState: $BlockState_, direction: $Direction_): boolean;
        codec(): $MapCodec<$LeavesBlock>;
        static getOptionalDistanceAt(state: $BlockState_): $OptionalInt;
        chloride$neighborCount(): number;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        /**
         * Spawns the given stack into the Level at the given position, respecting the doTileDrops gamerule
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static DISTANCE: $IntegerProperty;
        static PERSISTENT: $BooleanProperty;
        static CODEC: $MapCodec<$LeavesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static DECAY_DISTANCE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DirectionalBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
    }
    export class $BannerBlock extends $AbstractBannerBlock {
        static byColor(color: $DyeColor_): $Block;
        codec(): $MapCodec<$BannerBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BannerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(color: $DyeColor_, properties: $BlockBehaviour$Properties);
    }
    export class $StainedGlassPaneBlock extends $IronBarsBlock implements $BeaconBeamBlock {
        getColor(): $DyeColor;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StainedGlassPaneBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(color: $DyeColor_, properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
    }
    export class $CocoaBlock extends $HorizontalDirectionalBlock implements $BonemealableBlock {
        codec(): $MapCodec<$CocoaBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CocoaBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $PressurePlateBlock extends $BasePressurePlateBlock {
        codec(): $MapCodec<$PressurePlateBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PressurePlateBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $CoralBlock extends $Block {
        codec(): $MapCodec<$CoralBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CoralBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static DEAD_CORAL_FIELD: $MapCodec<$Block>;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(deadBlock: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $WitherWallSkullBlock extends $WallSkullBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WitherWallSkullBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CactusBlock extends $Block {
        codec(): $MapCodec<$CactusBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CactusBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TntBlock extends $Block {
        /**
         * @deprecated
         */
        static explode(level: $Level_, pos: $BlockPos_): void;
        codec(): $MapCodec<$TntBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TntBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static UNSTABLE: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PointedDripstoneBlock$FluidInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PointedDripstoneBlock$FluidInfo}.
     */
    export type $PointedDripstoneBlock$FluidInfo_ = { fluid?: $Fluid_, pos?: $BlockPos_, sourceState?: $BlockState_,  } | [fluid?: $Fluid_, pos?: $BlockPos_, sourceState?: $BlockState_, ];
    export class $SeaPickleBlock extends $BushBlock implements $BonemealableBlock, $SimpleWaterloggedBlock {
        static isDead(state: $BlockState_): boolean;
        codec(): $MapCodec<$SeaPickleBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static MAX_PICKLES: number;
        static CODEC: $MapCodec<$SeaPickleBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static PICKLES: $IntegerProperty;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $LeverBlock extends $FaceAttachedHorizontalDirectionalBlock {
        pull(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player | null): void;
        static makeParticle(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, alpha: number): void;
        codec(): $MapCodec<$LeverBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LeverBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RodBlock extends $DirectionalBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SculkBehaviour {
        static DEFAULT: $SculkBehaviour;
    }
    export interface $SculkBehaviour {
        getSculkSpreadDelay(): number;
        canChangeBlockStateOnSpread(): boolean;
        attemptSpreadVein(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, directions: $Collection_<$Direction_> | null, markForPostprocessing: boolean): boolean;
        onDischarged(level: $LevelAccessor, state: $BlockState_, pos: $BlockPos_, random: $RandomSource): void;
        updateDecayDelay(currentDecayDelay: number): number;
        attemptUseCharge(cursor: $SculkSpreader$ChargeCursor, level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, spreader: $SculkSpreader, shouldConvertBlocks: boolean): number;
        depositCharge(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource): boolean;
        get sculkSpreadDelay(): number;
    }
    /**
     * Values that may be interpreted as {@link $SculkBehaviour}.
     */
    export type $SculkBehaviour_ = ((arg0: $SculkSpreader$ChargeCursor, arg1: $LevelAccessor, arg2: $BlockPos, arg3: $RandomSource, arg4: $SculkSpreader, arg5: boolean) => number);
    export class $RailBlock extends $BaseRailBlock {
        codec(): $MapCodec<$RailBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RailBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$RailShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $EnchantingTableBlock extends $BaseEntityBlock {
        static isValidBookShelf(level: $Level_, enchantingTablePos: $BlockPos_, bookshelfPos: $BlockPos_): boolean;
        codec(): $MapCodec<$EnchantingTableBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EnchantingTableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static BOOKSHELF_OFFSETS: $List<$BlockPos>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RailState {
        getState(): $BlockState;
        place(powered: boolean, alwaysPlace: boolean, shape: $RailShape_): $RailState;
        getConnections(): $List<$BlockPos>;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_);
        get state(): $BlockState;
        get connections(): $List<$BlockPos>;
    }
    export class $CarrotBlock extends $CropBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CarrotBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MagmaBlock extends $Block {
        codec(): $MapCodec<$MagmaBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MagmaBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FenceBlock extends $CrossCollisionBlock {
        connectsTo(state: $BlockState_, isSideSolid: boolean, direction: $Direction_): boolean;
        codec(): $MapCodec<$FenceBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FenceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BigDripleafStemBlock extends $HorizontalDirectionalBlock implements $BonemealableBlock, $SimpleWaterloggedBlock {
        codec(): $MapCodec<$BigDripleafStemBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BigDripleafStemBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $AbstractBannerBlock extends $BaseEntityBlock {
        getColor(): $DyeColor;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        get color(): $DyeColor;
    }
    export class $CopperBulbBlock extends $Block {
        checkAndFlip(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CopperBulbBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DoubleBlockCombiner$NeighborCombineResult$Single<S> implements $DoubleBlockCombiner$NeighborCombineResult<S> {
        apply<T>(combiner: $DoubleBlockCombiner$Combiner<S, T>): T;
        constructor(single: S);
    }
    export class $RedstoneLampBlock extends $Block {
        codec(): $MapCodec<$RedstoneLampBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RedstoneLampBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SculkSpreader {
        static createLevelSpreader(): $SculkSpreader;
        load(tag: $CompoundTag_): void;
        clear(): void;
        save(tag: $CompoundTag_): void;
        additionalDecayRate(): number;
        updateCursors(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, shouldConvertBlocks: boolean): void;
        growthSpawnCost(): number;
        isWorldGeneration(): boolean;
        replaceableBlocks(): $TagKey<$Block>;
        chargeDecayRate(): number;
        noGrowthRadius(): number;
        static createWorldGenSpreader(): $SculkSpreader;
        addCursors(pos: $BlockPos_, charge: number): void;
        getCursors(): $List<$SculkSpreader$ChargeCursor>;
        static MAX_DECAY_FACTOR: number;
        static SHRIEKER_PLACEMENT_RATE: number;
        static MAX_CHARGE: number;
        static MAX_GROWTH_RATE_RADIUS: number;
        constructor(isWorldGeneration: boolean, replaceableBlocks: $TagKey_<$Block>, growthSpawnCoat: number, noGrowthRadius: number, chargeDecayRate: number, additionalDecayRate: number);
        get worldGeneration(): boolean;
        get cursors(): $List<$SculkSpreader$ChargeCursor>;
    }
    export class $SoundType {
        getFallSound(): $SoundEvent;
        getPitch(): number;
        getVolume(): number;
        getStepSound(): $SoundEvent;
        getPlaceSound(): $SoundEvent;
        getBreakSound(): $SoundEvent;
        getHitSound(): $SoundEvent;
        static CANDLE: $SoundType;
        static MUD_BRICKS: $SoundType;
        static HANGING_ROOTS: $SoundType;
        static NYLIUM: $SoundType;
        static COPPER_GRATE: $SoundType;
        static NETHERITE_BLOCK: $SoundType;
        static PACKED_MUD: $SoundType;
        static MOSS_CARPET: $SoundType;
        static SMALL_AMETHYST_BUD: $SoundType;
        static ANVIL: $SoundType;
        static CHERRY_SAPLING: $SoundType;
        static ROOTS: $SoundType;
        static WART_BLOCK: $SoundType;
        static SCULK_VEIN: $SoundType;
        static WET_SPONGE: $SoundType;
        pitch: number;
        static LARGE_AMETHYST_BUD: $SoundType;
        static FUNGUS: $SoundType;
        static TUFF: $SoundType;
        static BAMBOO_SAPLING: $SoundType;
        static DEEPSLATE: $SoundType;
        static NETHER_GOLD_ORE: $SoundType;
        static TWISTING_VINES: $SoundType;
        static PINK_PETALS: $SoundType;
        static SLIME_BLOCK: $SoundType;
        static SCULK_SENSOR: $SoundType;
        static HONEY_BLOCK: $SoundType;
        static TUFF_BRICKS: $SoundType;
        static LILY_PAD: $SoundType;
        static AZALEA: $SoundType;
        static MEDIUM_AMETHYST_BUD: $SoundType;
        static SMALL_DRIPLEAF: $SoundType;
        static LADDER: $SoundType;
        static CHISELED_BOOKSHELF: $SoundType;
        static DECORATED_POT: $SoundType;
        static BASALT: $SoundType;
        static GILDED_BLACKSTONE: $SoundType;
        static POINTED_DRIPSTONE: $SoundType;
        static GLASS: $SoundType;
        static POLISHED_DEEPSLATE: $SoundType;
        static CHERRY_WOOD_HANGING_SIGN: $SoundType;
        static ROOTED_DIRT: $SoundType;
        static DEEPSLATE_BRICKS: $SoundType;
        static SOUL_SAND: $SoundType;
        static AMETHYST: $SoundType;
        static SCULK_CATALYST: $SoundType;
        static BAMBOO_WOOD: $SoundType;
        static CORAL_BLOCK: $SoundType;
        static SCULK_SHRIEKER: $SoundType;
        static SCAFFOLDING: $SoundType;
        static CHAIN: $SoundType;
        static TRIAL_SPAWNER: $SoundType;
        static SOUL_SOIL: $SoundType;
        static CALCITE: $SoundType;
        static VINE: $SoundType;
        static DRIPSTONE_BLOCK: $SoundType;
        static WOOD: $SoundType;
        static CHERRY_WOOD: $SoundType;
        static NETHER_SPROUTS: $SoundType;
        static SUSPICIOUS_SAND: $SoundType;
        static SUSPICIOUS_GRAVEL: $SoundType;
        static FROGLIGHT: $SoundType;
        static CROP: $SoundType;
        static DECORATED_POT_CRACKED: $SoundType;
        static NETHER_WOOD: $SoundType;
        static GRASS: $SoundType;
        static GLOW_LICHEN: $SoundType;
        static WOOL: $SoundType;
        static MUD: $SoundType;
        static SAND: $SoundType;
        static BAMBOO: $SoundType;
        static SNOW: $SoundType;
        static MOSS: $SoundType;
        static WEEPING_VINES: $SoundType;
        static CHERRY_LEAVES: $SoundType;
        static BONE_BLOCK: $SoundType;
        static SPORE_BLOSSOM: $SoundType;
        volume: number;
        static NETHER_WART: $SoundType;
        static FLOWERING_AZALEA: $SoundType;
        static DEEPSLATE_TILES: $SoundType;
        static METAL: $SoundType;
        static AZALEA_LEAVES: $SoundType;
        static SHROOMLIGHT: $SoundType;
        static NETHER_ORE: $SoundType;
        static HANGING_SIGN: $SoundType;
        static BAMBOO_WOOD_HANGING_SIGN: $SoundType;
        static AMETHYST_CLUSTER: $SoundType;
        static VAULT: $SoundType;
        static COPPER: $SoundType;
        static GRAVEL: $SoundType;
        static MANGROVE_ROOTS: $SoundType;
        static LANTERN: $SoundType;
        static COBWEB: $SoundType;
        static POWDER_SNOW: $SoundType;
        static ANCIENT_DEBRIS: $SoundType;
        static EMPTY: $SoundType;
        static NETHER_BRICKS: $SoundType;
        static MUDDY_MANGROVE_ROOTS: $SoundType;
        static BIG_DRIPLEAF: $SoundType;
        static HEAVY_CORE: $SoundType;
        static POLISHED_TUFF: $SoundType;
        static HARD_CROP: $SoundType;
        static LODESTONE: $SoundType;
        static STEM: $SoundType;
        static NETHER_WOOD_HANGING_SIGN: $SoundType;
        static CAVE_VINES: $SoundType;
        static NETHERRACK: $SoundType;
        static WET_GRASS: $SoundType;
        static SPONGE: $SoundType;
        static COPPER_BULB: $SoundType;
        static SCULK: $SoundType;
        static FROGSPAWN: $SoundType;
        static SWEET_BERRY_BUSH: $SoundType;
        static STONE: $SoundType;
        /**
         * @deprecated
         */
        constructor(volume: number, pitch: number, breakSound: $SoundEvent_, stepSound: $SoundEvent_, placeSound: $SoundEvent_, hitSound: $SoundEvent_, fallSound: $SoundEvent_);
        get fallSound(): $SoundEvent;
        get stepSound(): $SoundEvent;
        get placeSound(): $SoundEvent;
        get breakSound(): $SoundEvent;
        get hitSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $SoundType}.
     */
    export type $SoundType_ = "empty" | "wood" | "gravel" | "grass" | "lily_pad" | "stone" | "metal" | "glass" | "wool" | "sand" | "snow" | "powder_snow" | "ladder" | "anvil" | "slime_block" | "honey_block" | "wet_grass" | "coral_block" | "bamboo" | "bamboo_sapling" | "scaffolding" | "sweet_berry_bush" | "crop" | "hard_crop" | "vine" | "nether_wart" | "lantern" | "stem" | "nylium" | "fungus" | "roots" | "shroomlight" | "weeping_vines" | "twisting_vines" | "soul_sand" | "soul_soil" | "basalt" | "wart_block" | "netherrack" | "nether_bricks" | "nether_sprouts" | "nether_ore" | "bone_block" | "netherite_block" | "ancient_debris" | "lodestone" | "chain" | "nether_gold_ore" | "gilded_blackstone" | "candle" | "amethyst" | "amethyst_cluster" | "small_amethyst_bud" | "medium_amethyst_bud" | "large_amethyst_bud" | "tuff" | "tuff_bricks" | "polished_tuff" | "calcite" | "dripstone_block" | "pointed_dripstone" | "copper" | "copper_bulb" | "copper_grate" | "cave_vines" | "spore_blossom" | "azalea" | "flowering_azalea" | "moss_carpet" | "pink_petals" | "moss" | "big_dripleaf" | "small_dripleaf" | "rooted_dirt" | "hanging_roots" | "azalea_leaves" | "sculk_sensor" | "sculk_catalyst" | "sculk" | "sculk_vein" | "sculk_shrieker" | "glow_lichen" | "deepslate" | "deepslate_bricks" | "deepslate_tiles" | "polished_deepslate" | "froglight" | "frogspawn" | "mangrove_roots" | "muddy_mangrove_roots" | "mud" | "mud_bricks" | "packed_mud" | "hanging_sign" | "nether_wood_hanging_sign" | "bamboo_wood_hanging_sign" | "bamboo_wood" | "nether_wood" | "cherry_wood" | "cherry_sapling" | "cherry_leaves" | "cherry_wood_hanging_sign" | "chiseled_bookshelf" | "suspicious_sand" | "suspicious_gravel" | "decorated_pot" | "decorated_pot_cracked" | "trial_spawner" | "sponge" | "wet_sponge" | "vault" | "heavy_core" | "cobweb";
    export class $WeatheringCopperFullBlock extends $Block implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        codec(): $MapCodec<$WeatheringCopperFullBlock>;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperFullBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $BaseCoralWallFanBlock extends $BaseCoralFanBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BaseCoralWallFanBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DoubleBlockCombiner {
        static combineWithNeigbour<S extends $BlockEntity>(blockEntityType: $BlockEntityType_<S>, doubleBlockTypeGetter: $Function_<$BlockState, $DoubleBlockCombiner$BlockType>, directionGetter: $Function_<$BlockState, $Direction>, directionProperty: $DirectionProperty, state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, blockedChestTest: $BiPredicate_<$LevelAccessor, $BlockPos>): $DoubleBlockCombiner$NeighborCombineResult<S>;
        constructor();
    }
    export interface $Block extends RegistryMarked<RegistryTypes.BlockTag, RegistryTypes.Block> {}
    export class $SkullBlock extends $AbstractSkullBlock {
        codec(): $MapCodec<$SkullBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SkullBlock>;
        static MAX: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $SkullBlock$Type_, properties: $BlockBehaviour$Properties);
    }
    export class $SmithingTableBlock extends $CraftingTableBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SmithingTableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FlowerBlock extends $BushBlock implements $SuspiciousEffectHolder {
        getSuspiciousEffects(): $SuspiciousStewEffects;
        codec(): $MapCodec<$FlowerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FlowerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(suspiciousStewEffects: $SuspiciousStewEffects_, properties: $BlockBehaviour$Properties);
        constructor(effect: $Holder_<$MobEffect>, seconds: number, properties: $BlockBehaviour$Properties);
        get suspiciousEffects(): $SuspiciousStewEffects;
    }
    export class $Portal {
    }
    export interface $Portal {
        getLocalTransition(): $Portal$Transition;
        getPortalDestination(level: $ServerLevel, entity: $Entity, pos: $BlockPos_): $DimensionTransition;
        getPortalTransitionTime(level: $ServerLevel, entity: $Entity): number;
        get localTransition(): $Portal$Transition;
    }
    /**
     * Values that may be interpreted as {@link $Portal}.
     */
    export type $Portal_ = ((arg0: $ServerLevel, arg1: $Entity, arg2: $BlockPos) => $DimensionTransition_);
    export class $WeatheringCopper$WeatherState extends $Enum<$WeatheringCopper$WeatherState> implements $StringRepresentable {
        static values(): $WeatheringCopper$WeatherState[];
        static valueOf(arg0: string): $WeatheringCopper$WeatherState;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNAFFECTED: $WeatheringCopper$WeatherState;
        static CODEC: $Codec<$WeatheringCopper$WeatherState>;
        static EXPOSED: $WeatheringCopper$WeatherState;
        static WEATHERED: $WeatheringCopper$WeatherState;
        static OXIDIZED: $WeatheringCopper$WeatherState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WeatheringCopper$WeatherState}.
     */
    export type $WeatheringCopper$WeatherState_ = "unaffected" | "exposed" | "weathered" | "oxidized";
    export class $SnowyDirtBlock extends $Block {
        static SNOWY: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SnowyDirtBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MyceliumBlock extends $SpreadingSnowyDirtBlock {
        codec(): $MapCodec<$MyceliumBlock>;
        static SNOWY: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MyceliumBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $AbstractChestBlock<E extends $BlockEntity> extends $BaseEntityBlock {
        combine(state: $BlockState_, level: $Level_, pos: $BlockPos_, override: boolean): $DoubleBlockCombiner$NeighborCombineResult<$ChestBlockEntity>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $RedStoneWireBlock extends $Block {
        static getColorForPower(power: number): number;
        codec(): $MapCodec<$RedStoneWireBlock>;
        static WEST: $EnumProperty<$RedstoneSide>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static NORTH: $EnumProperty<$RedstoneSide>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static SOUTH: $EnumProperty<$RedstoneSide>;
        static EAST: $EnumProperty<$RedstoneSide>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RedStoneWireBlock>;
        shouldSignal: boolean;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        static PROPERTY_BY_DIRECTION: $Map<$Direction, $EnumProperty<$RedstoneSide>>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ComposterBlock$OutputContainer extends $SimpleContainer implements $WorldlyContainer, $BlockStateOnlyInventory {
        items: $NonNullList<$ItemStack>;
    }
    export class $MultifaceSpreader$SpreadConfig {
    }
    export interface $MultifaceSpreader$SpreadConfig {
        getStateForPlacement(currentState: $BlockState_, level: $BlockGetter, pos: $BlockPos_, lookingDirection: $Direction_): $BlockState;
        canSpreadInto(level: $BlockGetter, pos: $BlockPos_, spreadPos: $MultifaceSpreader$SpreadPos_): boolean;
        canSpreadFrom(state: $BlockState_, direction: $Direction_): boolean;
        getSpreadTypes(): $MultifaceSpreader$SpreadType[];
        hasFace(state: $BlockState_, direction: $Direction_): boolean;
        isOtherBlockValidAsSource(otherBlock: $BlockState_): boolean;
        placeBlock(level: $LevelAccessor, pos: $MultifaceSpreader$SpreadPos_, state: $BlockState_, markForPostprocessing: boolean): boolean;
        get spreadTypes(): $MultifaceSpreader$SpreadType[];
    }
    export class $DoublePlantBlock extends $BushBlock {
        static placeAt(level: $LevelAccessor, state: $BlockState_, pos: $BlockPos_, flags: number): void;
        codec(): $MapCodec<$DoublePlantBlock>;
        static copyWaterloggedFrom(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): $BlockState;
        static preventDropFromBottomPart(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DoublePlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FrogspawnBlock extends $Block {
        static setDefaultHatchDelay(): void;
        codec(): $MapCodec<$FrogspawnBlock>;
        static setHatchDelay(minHatchDelay: number, maxHatchDelay: number): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FrogspawnBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $AirBlock extends $Block {
        codec(): $MapCodec<$AirBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AirBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $LanternBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$LanternBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LanternBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static HANGING: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ComparatorBlock extends $DiodeBlock implements $EntityBlock {
        /**
         * Update the provided state given the provided neighbor direction and neighbor state, returning a new state.
         * For example, fences make their connections to the passed in state if possible, and wet concrete powder immediately returns its solidified counterpart.
         * Note that this method should ideally consider only the specific direction passed in.
         */
        updateShape(state: $BlockState_, direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        codec(): $MapCodec<$ComparatorBlock>;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getListener<T extends $BlockEntity>(level: $ServerLevel, blockEntity: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ComparatorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MODE: $EnumProperty<$ComparatorMode>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ColoredFallingBlock extends $FallingBlock {
        codec(): $MapCodec<$ColoredFallingBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ColoredFallingBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(dustColor: $ColorRGBA_, properties: $BlockBehaviour$Properties);
    }
    export class $DoorBlock extends $Block {
        type(): $BlockSetType;
        isOpen(state: $BlockState_): boolean;
        static isWoodenDoor(state: $BlockState_): boolean;
        static isWoodenDoor(level: $Level_, pos: $BlockPos_): boolean;
        codec(): $MapCodec<$DoorBlock>;
        setOpen(entity: $Entity | null, level: $Level_, state: $BlockState_, pos: $BlockPos_, open: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $SuspiciousEffectHolder {
        static tryGet(item: $ItemLike_): $SuspiciousEffectHolder;
        static getAllEffectHolders(): $List<$SuspiciousEffectHolder>;
        static get allEffectHolders(): $List<$SuspiciousEffectHolder>;
    }
    export interface $SuspiciousEffectHolder {
        getSuspiciousEffects(): $SuspiciousStewEffects;
        get suspiciousEffects(): $SuspiciousStewEffects;
    }
    /**
     * Values that may be interpreted as {@link $SuspiciousEffectHolder}.
     */
    export type $SuspiciousEffectHolder_ = (() => $SuspiciousStewEffects_);
    export class $BaseEntityBlock extends $Block implements $EntityBlock {
        getListener<T extends $BlockEntity>(level: $ServerLevel, blockEntity: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $CalibratedSculkSensorBlock extends $SculkSensorBlock {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CalibratedSculkSensorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static PHASE: $EnumProperty<$SculkSensorPhase>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static ACTIVE_TICKS: number;
        static COOLDOWN_TICKS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WitherRoseBlock extends $FlowerBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WitherRoseBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(suspiciousStewEffects: $SuspiciousStewEffects_, properties: $BlockBehaviour$Properties);
        constructor(effect: $Holder_<$MobEffect>, seconds: number, properties: $BlockBehaviour$Properties);
    }
    export class $MossBlock extends $Block implements $BonemealableBlock {
        getType(): $BonemealableBlock$Type;
        codec(): $MapCodec<$MossBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MossBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $SpreadingSnowyDirtBlock extends $SnowyDirtBlock {
        static SNOWY: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SnowyDirtBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $TwistingVinesBlock extends $GrowingPlantHeadBlock {
        codec(): $MapCodec<$TwistingVinesBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TwistingVinesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopperGrateBlock extends $WaterloggedTransparentBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperGrateBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $SkullBlock$Types extends $Enum<$SkullBlock$Types> implements $SkullBlock$Type {
        static values(): $SkullBlock$Types[];
        static valueOf(arg0: string): $SkullBlock$Types;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $SkullBlock$Types;
        static CREEPER: $SkullBlock$Types;
        static ZOMBIE: $SkullBlock$Types;
        static DRAGON: $SkullBlock$Types;
        static PIGLIN: $SkullBlock$Types;
        static SKELETON: $SkullBlock$Types;
        static WITHER_SKELETON: $SkullBlock$Types;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SkullBlock$Types}.
     */
    export type $SkullBlock$Types_ = "skeleton" | "wither_skeleton" | "player" | "zombie" | "creeper" | "piglin" | "dragon";
    export class $FurnaceBlock extends $AbstractFurnaceBlock {
        codec(): $MapCodec<$FurnaceBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FurnaceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $GlowLichenBlock extends $MultifaceBlock implements $BonemealableBlock, $SimpleWaterloggedBlock {
        static emission(light: number): $ToIntFunction<$BlockState>;
        codec(): $MapCodec<$GlowLichenBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$GlowLichenBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $BellBlock extends $BaseEntityBlock {
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        attemptToRing(entity: $Entity | null, level: $Level_, pos: $BlockPos_, direction: $Direction_ | null): boolean;
        attemptToRing(level: $Level_, pos: $BlockPos_, direction: $Direction_ | null): boolean;
        onHit(level: $Level_, state: $BlockState_, result: $BlockHitResult, player: $Player | null, canRingBell: boolean): boolean;
        codec(): $MapCodec<$BellBlock>;
        static UPDATE_IMMEDIATE: number;
        static ATTACHMENT: $EnumProperty<$BellAttachType>;
        static CODEC: $MapCodec<$BellBlock>;
        static EVENT_BELL_RING: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ComposterBlock extends $Block implements $WorldlyContainerHolder {
        static getValue(arg0: $ItemStack_): number;
        getContainer(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $WorldlyContainer;
        static handleFill(level: $Level_, pos: $BlockPos_, success: boolean): void;
        static bootStrap(): void;
        codec(): $MapCodec<$ComposterBlock>;
        static insertItem(entity: $Entity, state: $BlockState_, level: $ServerLevel, stack: $ItemStack_, pos: $BlockPos_): $BlockState;
        static extractProduce(entity: $Entity, state: $BlockState_, level: $Level_, pos: $BlockPos_): $BlockState;
        static READY: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ComposterBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MIN_LEVEL: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        /**
         * @deprecated
         */
        static COMPOSTABLES: $Object2FloatMap<$ItemLike>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static MAX_LEVEL: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $LayeredCauldronBlock extends $AbstractCauldronBlock {
        static lowerFillLevel(state: $BlockState_, level: $Level_, pos: $BlockPos_): void;
        codec(): $MapCodec<$LayeredCauldronBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LayeredCauldronBlock>;
        static MAX_FILL_LEVEL: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static MIN_FILL_LEVEL: number;
        constructor(precipitationType: $Biome$Precipitation_, interactions: $CauldronInteraction$InteractionMap_, properties: $BlockBehaviour$Properties);
    }
    export class $CandleCakeBlock extends $AbstractCandleBlock {
        static byCandle(candle: $CandleBlock): $BlockState;
        codec(): $MapCodec<$CandleCakeBlock>;
        static canLight(state: $BlockState_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CandleCakeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static LIGHT_PER_CANDLE: number;
        constructor(candleBlock: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $PowderSnowBlock extends $Block implements $BucketPickup {
        static canEntityWalkOnPowderSnow(entity: $Entity): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        codec(): $MapCodec<$PowderSnowBlock>;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PowderSnowBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $LightningRodBlock extends $RodBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$LightningRodBlock>;
        onLightningStrike(state: $BlockState_, level: $Level_, pos: $BlockPos_): void;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LightningRodBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static RANGE: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BrewingStandBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$BrewingStandBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BrewingStandBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static HAS_BOTTLE: $BooleanProperty[];
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ComposterBlock$EmptyContainer extends $SimpleContainer implements $WorldlyContainer, $BlockStateOnlyInventory {
        items: $NonNullList<$ItemStack>;
    }
    export class $BaseFireBlock extends $Block {
        static getState(reader: $BlockGetter, pos: $BlockPos_): $BlockState;
        static canBePlacedAt(level: $Level_, pos: $BlockPos_, direction: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties, fireDamage: number);
    }
    export class $BaseRailBlock extends $Block implements $SimpleWaterloggedBlock, $IBaseRailBlockExtension {
        isFlexibleRail(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        getRailDirection(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $AbstractMinecart): $RailShape;
        /**
         * @deprecated
         */
        getShapeProperty(): $Property<$RailShape>;
        isStraight(): boolean;
        static isRail(state: $BlockState_): boolean;
        static isRail(level: $Level_, pos: $BlockPos_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        onMinecartPass(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): void;
        isValidRailShape(arg0: $RailShape_): boolean;
        canMakeSlopes(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        getRailMaxSpeed(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): number;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        get shapeProperty(): $Property<$RailShape>;
        get straight(): boolean;
    }
    export class $DecoratedPotBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$DecoratedPotBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DecoratedPotBlock>;
        static SHERDS_DYNAMIC_DROP_ID: $ResourceLocation;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static CRACKED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $ObserverBlock extends $DirectionalBlock {
        codec(): $MapCodec<$ObserverBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ObserverBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DoubleBlockCombiner$Combiner<S, T> {
    }
    export interface $DoubleBlockCombiner$Combiner<S, T> {
        acceptSingle(single: S): T;
        acceptDouble(first: S, second: S): T;
        acceptNone(): T;
    }
    export class $HayBlock extends $RotatedPillarBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HayBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PitcherCropBlock$PosAndState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PitcherCropBlock$PosAndState}.
     */
    export type $PitcherCropBlock$PosAndState_ = { state?: $BlockState_, pos?: $BlockPos_,  } | [state?: $BlockState_, pos?: $BlockPos_, ];
    export class $FlowerPotBlock extends $Block {
        getPotted(): $Block;
        codec(): $MapCodec<$FlowerPotBlock>;
        addPlant(arg0: $ResourceLocation_, arg1: $Supplier_<$Block>): void;
        getEmptyPot(): $FlowerPotBlock;
        getFullPotsView(): $Map<$ResourceLocation, $Supplier<$Block>>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FlowerPotBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static AABB_SIZE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $Supplier_<$FlowerPotBlock>, arg1: $Supplier_<$Block>, arg2: $BlockBehaviour$Properties);
        /**
         * @deprecated
         */
        constructor(potted: $Block_, properties: $BlockBehaviour$Properties);
        get potted(): $Block;
        get emptyPot(): $FlowerPotBlock;
        get fullPotsView(): $Map<$ResourceLocation, $Supplier<$Block>>;
    }
    export class $AttachedStemBlock extends $BushBlock {
        codec(): $MapCodec<$AttachedStemBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AttachedStemBlock>;
        fruit: $ResourceKey<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(stem: $ResourceKey_<$Block>, fruit: $ResourceKey_<$Block>, seed: $ResourceKey_<$Item>, properties: $BlockBehaviour$Properties);
    }
    export class $GrowingPlantBlock extends $Block {
        getStateForPlacement(level: $LevelAccessor): $BlockState;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $TurtleEggBlock extends $Block {
        static onSand(reader: $BlockGetter, pos: $BlockPos_): boolean;
        static isSand(reader: $BlockGetter, pos: $BlockPos_): boolean;
        codec(): $MapCodec<$TurtleEggBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TurtleEggBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MAX_HATCH_LEVEL: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static MIN_EGGS: number;
        static UPDATE_INVISIBLE: number;
        static EGGS: $IntegerProperty;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static HATCH: $IntegerProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static MAX_EGGS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TintedGlassBlock extends $TransparentBlock {
        codec(): $MapCodec<$TintedGlassBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TintedGlassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $AbstractFurnaceBlock extends $BaseEntityBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
    }
    export class $BambooSaplingBlock extends $Block implements $BonemealableBlock {
        codec(): $MapCodec<$BambooSaplingBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BambooSaplingBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $CeilingHangingSignBlock extends $SignBlock {
        codec(): $MapCodec<$CeilingHangingSignBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CeilingHangingSignBlock>;
        static ATTACHED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $BushBlock extends $Block implements $IBushBlockMixin {
        invokeMayPlaceOn(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $PotatoBlock extends $CropBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PotatoBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SaplingBlock extends $BushBlock implements $BonemealableBlock {
        codec(): $MapCodec<$SaplingBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        advanceTree(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, random: $RandomSource): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SaplingBlock>;
        static STAGE: $IntegerProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        treeGrower: $TreeGrower;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(treeGrower: $TreeGrower, properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $PiglinWallSkullBlock extends $WallSkullBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PiglinWallSkullBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $MangroveLeavesBlock extends $LeavesBlock implements $BonemealableBlock {
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        static UPDATE_IMMEDIATE: number;
        static DISTANCE: $IntegerProperty;
        static PERSISTENT: $BooleanProperty;
        static CODEC: $MapCodec<$MangroveLeavesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static DECAY_DISTANCE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $RedStoneOreBlock extends $Block {
        codec(): $MapCodec<$RedStoneOreBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RedStoneOreBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RotatedPillarBlock extends $Block {
        codec(): $MapCodec<$RotatedPillarBlock>;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        static rotatePillar(state: $BlockState_, rot: $Rotation_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PlayerHeadBlock extends $SkullBlock {
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PlayerHeadBlock>;
        static MAX: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WitherSkullBlock extends $SkullBlock {
        static canSpawnMob(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): boolean;
        static checkSpawn(level: $Level_, pos: $BlockPos_): void;
        static checkSpawn(level: $Level_, pos: $BlockPos_, blockEntity: $SkullBlockEntity): void;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WitherSkullBlock>;
        static MAX: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BrushableBlock extends $BaseEntityBlock implements $Fallable {
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * The type of render function called. MODEL for mixed tesr and static model, MODELBLOCK_ANIMATED for TESR-only, LIQUID for vanilla liquids, INVISIBLE to skip all rendering
         */
        getRenderShape(state: $BlockState_): $RenderShape;
        /**
         * Update the provided state given the provided neighbor direction and neighbor state, returning a new state.
         * For example, fences make their connections to the passed in state if possible, and wet concrete powder immediately returns its solidified counterpart.
         * Note that this method should ideally consider only the specific direction passed in.
         */
        updateShape(state: $BlockState_, direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        codec(): $MapCodec<$BrushableBlock>;
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getBrushCompletedSound(): $SoundEvent;
        getTurnsInto(): $Block;
        onBrokenAfterFall(level: $Level_, pos: $BlockPos_, fallingBlock: $FallingBlockEntity): void;
        getBrushSound(): $SoundEvent;
        onLand(level: $Level_, pos: $BlockPos_, state: $BlockState_, replaceableState: $BlockState_, fallingBlock: $FallingBlockEntity): void;
        getFallDamageSource(entity: $Entity): $DamageSource;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BrushableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static TICK_DELAY: number;
        static UPDATE_CLIENTS: number;
        constructor(turnsInto: $Block_, brushSound: $SoundEvent_, brushCompletedSound: $SoundEvent_, properties: $BlockBehaviour$Properties);
        get brushCompletedSound(): $SoundEvent;
        get turnsInto(): $Block;
        get brushSound(): $SoundEvent;
    }
    export class $WallBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$WallBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static SOUTH_WALL: $EnumProperty<$WallSide>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST_WALL: $EnumProperty<$WallSide>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static NORTH_WALL: $EnumProperty<$WallSide>;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_WALL: $EnumProperty<$WallSide>;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UP: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FaceAttachedHorizontalDirectionalBlock extends $HorizontalDirectionalBlock {
        static canAttach(reader: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        static getConnectedDirection(state: $BlockState_): $Direction;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
    }
    export class $SugarCaneBlock extends $Block {
        codec(): $MapCodec<$SugarCaneBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SugarCaneBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SkullBlock$Type {
        static TYPES: $Map<string, $SkullBlock$Type>;
        static CODEC: $Codec<$SkullBlock$Type>;
    }
    export interface $SkullBlock$Type extends $StringRepresentable {
    }
    /**
     * Values that may be interpreted as {@link $SkullBlock$Type}.
     */
    export type $SkullBlock$Type_ = (() => void);
    export class $BeehiveBlock extends $BaseEntityBlock {
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        codec(): $MapCodec<$BeehiveBlock>;
        releaseBeesAndResetHoneyLevel(level: $Level_, state: $BlockState_, pos: $BlockPos_, player: $Player | null, beeReleaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        resetHoneyLevel(level: $Level_, state: $BlockState_, pos: $BlockPos_): void;
        static dropHoneycomb(level: $Level_, pos: $BlockPos_): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BeehiveBlock>;
        static MAX_HONEY_LEVELS: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static HONEY_LEVEL: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopperDoorBlock extends $DoorBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperDoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $VaultBlock extends $BaseEntityBlock {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        codec(): $MapCodec<$VaultBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$VaultBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STATE: $Property<$VaultState>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static OMINOUS: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $MultifaceSpreader {
        canSpreadInAnyDirection(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, spreadDirection: $Direction_): boolean;
        spreadAll(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, markForPostprocessing: boolean): number;
        spreadToFace(level: $LevelAccessor, pos: $MultifaceSpreader$SpreadPos_, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        spreadFromFaceTowardRandomDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, spreadDirection: $Direction_, random: $RandomSource, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        spreadFromRandomFaceTowardRandomDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource): ($MultifaceSpreader$SpreadPos) | undefined;
        spreadFromFaceTowardDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, spreadDirection: $Direction_, face: $Direction_, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        getSpreadFromFaceTowardDirection(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, spreadDirection: $Direction_, face: $Direction_, predicate: $MultifaceSpreader$SpreadPredicate_): ($MultifaceSpreader$SpreadPos) | undefined;
        static DEFAULT_SPREAD_ORDER: $MultifaceSpreader$SpreadType[];
        constructor(block: $MultifaceBlock);
        constructor(config: $MultifaceSpreader$SpreadConfig);
    }
    export class $WetSpongeBlock extends $Block {
        codec(): $MapCodec<$WetSpongeBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WetSpongeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $EndRodBlock extends $RodBlock {
        codec(): $MapCodec<$EndRodBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EndRodBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FallingBlock extends $Block implements $Fallable {
        static isFree(state: $BlockState_): boolean;
        getDustColor(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        onLand(level: $Level_, pos: $BlockPos_, state: $BlockState_, replaceableState: $BlockState_, fallingBlock: $FallingBlockEntity): void;
        getFallDamageSource(entity: $Entity): $DamageSource;
        onBrokenAfterFall(level: $Level_, pos: $BlockPos_, fallingBlock: $FallingBlockEntity): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TorchBlock extends $BaseTorchBlock {
        codec(): $MapCodec<$TorchBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TorchBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(flameParticle: $SimpleParticleType, properties: $BlockBehaviour$Properties);
    }
    export class $MultifaceSpreader$SpreadPredicate {
    }
    export interface $MultifaceSpreader$SpreadPredicate {
        test(level: $BlockGetter, pos: $BlockPos_, spreadPos: $MultifaceSpreader$SpreadPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadPredicate}.
     */
    export type $MultifaceSpreader$SpreadPredicate_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $MultifaceSpreader$SpreadPos) => boolean);
    export class $ChangeOverTimeBlock<T extends $Enum<T>> {
        static SCAN_DISTANCE: number;
    }
    export interface $ChangeOverTimeBlock<T extends $Enum<T>> {
        getAge(): T;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getChanceModifier(): number;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        get age(): T;
        get chanceModifier(): number;
    }
    export class $WeepingVinesPlantBlock extends $GrowingPlantBodyBlock {
        codec(): $MapCodec<$WeepingVinesPlantBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeepingVinesPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SweetBerryBushBlock extends $BushBlock implements $BonemealableBlock {
        codec(): $MapCodec<$SweetBerryBushBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SweetBerryBushBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $TwistingVinesPlantBlock extends $GrowingPlantBodyBlock {
        codec(): $MapCodec<$TwistingVinesPlantBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TwistingVinesPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BaseCoralFanBlock extends $BaseCoralPlantTypeBlock {
        codec(): $MapCodec<$BaseCoralFanBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BaseCoralFanBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $Blocks {
        static register(resourceKey: $ResourceKey_<$Block>, block: $Block_): $Block;
        static register(key: string, block: $Block_): $Block;
        static never(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_): boolean;
        static never(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static always(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static always(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_): boolean;
        static rebuildCache(): void;
        static ocelotOrParrot(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static GREEN_CONCRETE_POWDER: $Block;
        static PIGLIN_HEAD: $Block;
        static TUBE_CORAL_WALL_FAN: $Block;
        static PURPLE_CARPET: $Block;
        static SMALL_AMETHYST_BUD: $Block;
        static DEAD_TUBE_CORAL: $Block;
        static JUNGLE_PRESSURE_PLATE: $Block;
        static GREEN_GLAZED_TERRACOTTA: $Block;
        static EXPOSED_CUT_COPPER: $Block;
        static WATER_CAULDRON: $Block;
        static POTTED_AZALEA: $Block;
        static TRAPPED_CHEST: $Block;
        static STONE_BRICK_STAIRS: $Block;
        static SANDSTONE_WALL: $Block;
        static WATER: $Block;
        static MELON_STEM: $Block;
        static OAK_WOOD: $Block;
        static WHITE_TULIP: $Block;
        static GRAY_STAINED_GLASS: $Block;
        static BLUE_ORCHID: $Block;
        static SPRUCE_DOOR: $Block;
        static STRIPPED_BIRCH_LOG: $Block;
        static LIGHT_BLUE_TERRACOTTA: $Block;
        static ZOMBIE_HEAD: $Block;
        static BROWN_WOOL: $Block;
        static GRANITE_WALL: $Block;
        static SHORT_GRASS: $Block;
        static ORANGE_SHULKER_BOX: $Block;
        static GREEN_CANDLE: $Block;
        static CRACKED_STONE_BRICKS: $Block;
        static BRICK_SLAB: $Block;
        static CYAN_CANDLE_CAKE: $Block;
        static BLUE_CANDLE: $Block;
        static LAPIS_BLOCK: $Block;
        static PURPLE_BED: $Block;
        static JUNGLE_SLAB: $Block;
        static END_STONE_BRICK_STAIRS: $Block;
        static JUNGLE_PLANKS: $Block;
        static TURTLE_EGG: $Block;
        static WHITE_CANDLE: $Block;
        static VERDANT_FROGLIGHT: $Block;
        static COBBLESTONE: $Block;
        static TUBE_CORAL: $Block;
        static GILDED_BLACKSTONE: $Block;
        static CYAN_STAINED_GLASS_PANE: $Block;
        static WAXED_COPPER_BULB: $Block;
        static SMOOTH_RED_SANDSTONE_SLAB: $Block;
        static CHISELED_SANDSTONE: $Block;
        static LIGHT_BLUE_SHULKER_BOX: $Block;
        static NETHER_BRICK_WALL: $Block;
        static RED_WOOL: $Block;
        static WAXED_WEATHERED_CUT_COPPER_STAIRS: $Block;
        static COMMAND_BLOCK: $Block;
        static ROOTED_DIRT: $Block;
        static PRISMARINE_STAIRS: $Block;
        static DEEPSLATE_TILE_STAIRS: $Block;
        static POLISHED_ANDESITE: $Block;
        static CRAFTING_TABLE: $Block;
        static CORNFLOWER: $Block;
        static SCULK_SHRIEKER: $Block;
        static RED_WALL_BANNER: $Block;
        static INFESTED_COBBLESTONE: $Block;
        static DIORITE: $Block;
        static LIGHT_BLUE_CONCRETE: $Block;
        static POLISHED_ANDESITE_SLAB: $Block;
        static POLISHED_BLACKSTONE_BUTTON: $Block;
        static SPRUCE_WALL_SIGN: $Block;
        static MOSSY_STONE_BRICK_WALL: $Block;
        static POLISHED_DEEPSLATE_WALL: $Block;
        static WARPED_SLAB: $Block;
        static STONE_BRICK_WALL: $Block;
        static DARK_OAK_WOOD: $Block;
        static JUNGLE_WALL_SIGN: $Block;
        static CRIMSON_HYPHAE: $Block;
        static WAXED_EXPOSED_CUT_COPPER_STAIRS: $Block;
        static JUKEBOX: $Block;
        static POTTED_RED_MUSHROOM: $Block;
        static DARK_OAK_BUTTON: $Block;
        static POTTED_ORANGE_TULIP: $Block;
        static CRACKED_DEEPSLATE_BRICKS: $Block;
        static CHERRY_PRESSURE_PLATE: $Block;
        static WARPED_STAIRS: $Block;
        static MANGROVE_PLANKS: $Block;
        static DEEPSLATE_TILE_WALL: $Block;
        static BLACK_CONCRETE_POWDER: $Block;
        static DARK_OAK_PRESSURE_PLATE: $Block;
        static STRIPPED_SPRUCE_WOOD: $Block;
        static MANGROVE_LOG: $Block;
        static OAK_BUTTON: $Block;
        static GRANITE: $Block;
        static SAND: $Block;
        static LIGHT: $Block;
        static OAK_WALL_SIGN: $Block;
        static BROWN_TERRACOTTA: $Block;
        static ORANGE_STAINED_GLASS_PANE: $Block;
        static REINFORCED_DEEPSLATE: $Block;
        static WHITE_WALL_BANNER: $Block;
        static NETHER_WART: $Block;
        static YELLOW_CARPET: $Block;
        static LILY_OF_THE_VALLEY: $Block;
        static DEEPSLATE_TILES: $Block;
        static HAY_BLOCK: $Block;
        static LECTERN: $Block;
        static RAW_COPPER_BLOCK: $Block;
        static CRIMSON_FENCE_GATE: $Block;
        static BLACK_STAINED_GLASS_PANE: $Block;
        static ALLIUM: $Block;
        static COBBLESTONE_STAIRS: $Block;
        static TUFF_BRICK_WALL: $Block;
        static CRYING_OBSIDIAN: $Block;
        static DETECTOR_RAIL: $Block;
        static SOUL_CAMPFIRE: $Block;
        static CUT_SANDSTONE_SLAB: $Block;
        static CREEPER_WALL_HEAD: $Block;
        static AMETHYST_CLUSTER: $Block;
        static PURPLE_STAINED_GLASS: $Block;
        static BROWN_CONCRETE_POWDER: $Block;
        static TUFF_STAIRS: $Block;
        static MANGROVE_ROOTS: $Block;
        static TERRACOTTA: $Block;
        static REDSTONE_WIRE: $Block;
        static YELLOW_WALL_BANNER: $Block;
        static END_STONE_BRICKS: $Block;
        static COARSE_DIRT: $Block;
        static LIGHT_GRAY_GLAZED_TERRACOTTA: $Block;
        static GLOWSTONE: $Block;
        static MANGROVE_HANGING_SIGN: $Block;
        static DIORITE_SLAB: $Block;
        static ANCIENT_DEBRIS: $Block;
        static WAXED_EXPOSED_COPPER_TRAPDOOR: $Block;
        static PINK_SHULKER_BOX: $Block;
        static CARROTS: $Block;
        static CRIMSON_DOOR: $Block;
        static GLASS_PANE: $Block;
        static POLISHED_TUFF: $Block;
        static DIAMOND_ORE: $Block;
        static CHIPPED_ANVIL: $Block;
        static DEEPSLATE_COPPER_ORE: $Block;
        static OAK_LEAVES: $Block;
        static CYAN_BANNER: $Block;
        static BAMBOO_STAIRS: $Block;
        static MAGENTA_BED: $Block;
        static WAXED_OXIDIZED_CUT_COPPER_SLAB: $Block;
        static SPONGE: $Block;
        static RED_BED: $Block;
        static SCULK: $Block;
        static POTTED_BROWN_MUSHROOM: $Block;
        static WARPED_WALL_SIGN: $Block;
        static MANGROVE_TRAPDOOR: $Block;
        static CANDLE: $Block;
        static STRIPPED_SPRUCE_LOG: $Block;
        static WAXED_EXPOSED_COPPER_DOOR: $Block;
        static COPPER_GRATE: $Block;
        static CHORUS_PLANT: $Block;
        static ANDESITE_STAIRS: $Block;
        static WAXED_WEATHERED_COPPER_BULB: $Block;
        static SPRUCE_WALL_HANGING_SIGN: $Block;
        static BRICKS: $Block;
        static PISTON_HEAD: $Block;
        static CRIMSON_WALL_SIGN: $Block;
        static RED_NETHER_BRICK_WALL: $Block;
        static WET_SPONGE: $Block;
        static STRUCTURE_BLOCK: $Block;
        static CHERRY_BUTTON: $Block;
        static RED_CARPET: $Block;
        static ENCHANTING_TABLE: $Block;
        static YELLOW_STAINED_GLASS: $Block;
        static SOUL_FIRE: $Block;
        static DEEPSLATE: $Block;
        static RED_BANNER: $Block;
        static BLUE_STAINED_GLASS_PANE: $Block;
        static SPRUCE_LOG: $Block;
        static COPPER_TRAPDOOR: $Block;
        static POTTED_RED_TULIP: $Block;
        static BIRCH_FENCE: $Block;
        static SOUL_LANTERN: $Block;
        static POLISHED_BLACKSTONE_BRICKS: $Block;
        static POTTED_AZURE_BLUET: $Block;
        static WHITE_STAINED_GLASS_PANE: $Block;
        static LIME_STAINED_GLASS: $Block;
        static DIORITE_WALL: $Block;
        static MAGMA_BLOCK: $Block;
        static DARK_OAK_SIGN: $Block;
        static POLISHED_DEEPSLATE: $Block;
        static BLUE_CONCRETE_POWDER: $Block;
        static CHORUS_FLOWER: $Block;
        static BLACK_GLAZED_TERRACOTTA: $Block;
        static RED_STAINED_GLASS: $Block;
        static BARRIER: $Block;
        static WARPED_FENCE_GATE: $Block;
        static DEEPSLATE_REDSTONE_ORE: $Block;
        static BAMBOO_MOSAIC_STAIRS: $Block;
        static DEEPSLATE_BRICK_STAIRS: $Block;
        static GRAY_CANDLE: $Block;
        static FARMLAND: $Block;
        static TRIAL_SPAWNER: $Block;
        static SKELETON_WALL_SKULL: $Block;
        static PRISMARINE_BRICKS: $Block;
        static SMOOTH_BASALT: $Block;
        static DARK_OAK_LOG: $Block;
        static BRAIN_CORAL_FAN: $Block;
        static WEATHERED_CUT_COPPER_SLAB: $Block;
        static ACACIA_HANGING_SIGN: $Block;
        static MAGENTA_SHULKER_BOX: $Block;
        static QUARTZ_PILLAR: $Block;
        static WARPED_TRAPDOOR: $Block;
        static BROWN_CANDLE_CAKE: $Block;
        static STRIPPED_BAMBOO_BLOCK: $Block;
        static PURPLE_WALL_BANNER: $Block;
        static REDSTONE_BLOCK: $Block;
        static COBBLED_DEEPSLATE_WALL: $Block;
        static DEAD_BUBBLE_CORAL_WALL_FAN: $Block;
        static CHISELED_POLISHED_BLACKSTONE: $Block;
        static BIRCH_SLAB: $Block;
        static EXPOSED_CHISELED_COPPER: $Block;
        static LIME_SHULKER_BOX: $Block;
        static QUARTZ_SLAB: $Block;
        static OXIDIZED_COPPER_GRATE: $Block;
        static QUARTZ_BLOCK: $Block;
        static SNOW: $Block;
        static SUGAR_CANE: $Block;
        static BRAIN_CORAL_WALL_FAN: $Block;
        static ACACIA_FENCE: $Block;
        static DARK_OAK_FENCE: $Block;
        static HORN_CORAL: $Block;
        static TUBE_CORAL_FAN: $Block;
        static POTTED_CHERRY_SAPLING: $Block;
        static MOSSY_COBBLESTONE: $Block;
        static DAYLIGHT_DETECTOR: $Block;
        static WARPED_FENCE: $Block;
        static POLISHED_TUFF_WALL: $Block;
        static BUBBLE_CORAL: $Block;
        static JUNGLE_STAIRS: $Block;
        static CYAN_CARPET: $Block;
        static OXIDIZED_COPPER_DOOR: $Block;
        static OBSERVER: $Block;
        static DEEPSLATE_DIAMOND_ORE: $Block;
        static AMETHYST_BLOCK: $Block;
        static SPRUCE_TRAPDOOR: $Block;
        static CHERRY_STAIRS: $Block;
        static CUT_COPPER: $Block;
        static BLAST_FURNACE: $Block;
        static OBSIDIAN: $Block;
        static RED_SANDSTONE_SLAB: $Block;
        static FIRE_CORAL_FAN: $Block;
        static AZURE_BLUET: $Block;
        static BAMBOO_WALL_SIGN: $Block;
        static PURPLE_STAINED_GLASS_PANE: $Block;
        static LIME_GLAZED_TERRACOTTA: $Block;
        static CARTOGRAPHY_TABLE: $Block;
        static ORANGE_CANDLE: $Block;
        static WITHER_ROSE: $Block;
        static PISTON: $Block;
        static DEAD_BRAIN_CORAL_FAN: $Block;
        static BLACK_CANDLE: $Block;
        static YELLOW_BANNER: $Block;
        static CUT_RED_SANDSTONE: $Block;
        static BIRCH_SAPLING: $Block;
        static LIME_CONCRETE: $Block;
        static BEETROOTS: $Block;
        static PURPUR_SLAB: $Block;
        static PURPLE_BANNER: $Block;
        static PURPLE_CONCRETE_POWDER: $Block;
        static BIRCH_LOG: $Block;
        static DEEPSLATE_BRICK_WALL: $Block;
        static DARK_PRISMARINE_SLAB: $Block;
        static ACACIA_PLANKS: $Block;
        static MYCELIUM: $Block;
        static RED_SANDSTONE: $Block;
        static BROWN_CONCRETE: $Block;
        static PRISMARINE_BRICK_STAIRS: $Block;
        static CAVE_VINES: $Block;
        static STONE_SLAB: $Block;
        static LIME_WALL_BANNER: $Block;
        static MANGROVE_WALL_SIGN: $Block;
        static BIRCH_LEAVES: $Block;
        static CHERRY_WALL_HANGING_SIGN: $Block;
        static BLUE_CANDLE_CAKE: $Block;
        static BAMBOO_FENCE_GATE: $Block;
        static DEEPSLATE_GOLD_ORE: $Block;
        static NETHER_BRICK_FENCE: $Block;
        static BROWN_MUSHROOM: $Block;
        static TUFF_BRICK_SLAB: $Block;
        static CYAN_SHULKER_BOX: $Block;
        static POLISHED_BLACKSTONE_SLAB: $Block;
        static WAXED_EXPOSED_CHISELED_COPPER: $Block;
        static JUNGLE_WALL_HANGING_SIGN: $Block;
        static NETHERITE_BLOCK: $Block;
        static ACACIA_PRESSURE_PLATE: $Block;
        static RED_SAND: $Block;
        static PACKED_MUD: $Block;
        static POLISHED_GRANITE_STAIRS: $Block;
        static MAGENTA_BANNER: $Block;
        static QUARTZ_STAIRS: $Block;
        static DRIED_KELP_BLOCK: $Block;
        static SCULK_VEIN: $Block;
        static BREWING_STAND: $Block;
        static CACTUS: $Block;
        static CAKE: $Block;
        static SMOOTH_QUARTZ_SLAB: $Block;
        static STRIPPED_ACACIA_WOOD: $Block;
        static BAMBOO_MOSAIC_SLAB: $Block;
        static LIGHT_GRAY_BANNER: $Block;
        static GREEN_BANNER: $Block;
        static SPRUCE_SIGN: $Block;
        static BLUE_STAINED_GLASS: $Block;
        static CHISELED_TUFF_BRICKS: $Block;
        static STRIPPED_BIRCH_WOOD: $Block;
        static SLIME_BLOCK: $Block;
        static RED_MUSHROOM: $Block;
        static BAMBOO_FENCE: $Block;
        static SPRUCE_SAPLING: $Block;
        static LIGHT_BLUE_STAINED_GLASS: $Block;
        static EXPOSED_COPPER_DOOR: $Block;
        static POLISHED_GRANITE_SLAB: $Block;
        static SMOOTH_RED_SANDSTONE_STAIRS: $Block;
        static WAXED_COPPER_TRAPDOOR: $Block;
        static BRAIN_CORAL: $Block;
        static COMPARATOR: $Block;
        static REDSTONE_ORE: $Block;
        static STRIPPED_CRIMSON_HYPHAE: $Block;
        static DRAGON_WALL_HEAD: $Block;
        static PINK_CANDLE: $Block;
        static DEAD_FIRE_CORAL_BLOCK: $Block;
        static MAGENTA_CANDLE_CAKE: $Block;
        static WITHER_SKELETON_SKULL: $Block;
        static RED_SANDSTONE_WALL: $Block;
        static LIGHT_GRAY_TERRACOTTA: $Block;
        static LIGHT_BLUE_STAINED_GLASS_PANE: $Block;
        static GRASS_BLOCK: $Block;
        static EXPOSED_COPPER_TRAPDOOR: $Block;
        static MAGENTA_STAINED_GLASS: $Block;
        static CRIMSON_PRESSURE_PLATE: $Block;
        static COAL_ORE: $Block;
        static DEEPSLATE_BRICKS: $Block;
        static WAXED_EXPOSED_COPPER_BULB: $Block;
        static ICE: $Block;
        static PURPLE_SHULKER_BOX: $Block;
        static GRAY_CANDLE_CAKE: $Block;
        static LIGHT_GRAY_CONCRETE_POWDER: $Block;
        static STRIPPED_OAK_WOOD: $Block;
        static DEEPSLATE_BRICK_SLAB: $Block;
        static GOLD_ORE: $Block;
        static GREEN_CARPET: $Block;
        static OCHRE_FROGLIGHT: $Block;
        static POLISHED_BLACKSTONE: $Block;
        static CLAY: $Block;
        static TUBE_CORAL_BLOCK: $Block;
        static LILAC: $Block;
        static RED_SANDSTONE_STAIRS: $Block;
        static STRIPPED_CHERRY_LOG: $Block;
        static DEAD_BRAIN_CORAL_WALL_FAN: $Block;
        static WAXED_CUT_COPPER_STAIRS: $Block;
        static DARK_PRISMARINE: $Block;
        static WAXED_EXPOSED_COPPER_GRATE: $Block;
        static NETHER_SPROUTS: $Block;
        static BUBBLE_CORAL_BLOCK: $Block;
        static BLUE_GLAZED_TERRACOTTA: $Block;
        static ACACIA_FENCE_GATE: $Block;
        static BRICK_WALL: $Block;
        static GLOW_LICHEN: $Block;
        static CHERRY_DOOR: $Block;
        static WITHER_SKELETON_WALL_SKULL: $Block;
        static BIRCH_FENCE_GATE: $Block;
        static LIGHT_GRAY_CONCRETE: $Block;
        static MOSSY_COBBLESTONE_STAIRS: $Block;
        static OXIDIZED_CUT_COPPER_SLAB: $Block;
        static DARK_OAK_TRAPDOOR: $Block;
        static YELLOW_TERRACOTTA: $Block;
        static PITCHER_CROP: $Block;
        static WEATHERED_CHISELED_COPPER: $Block;
        static CHISELED_RED_SANDSTONE: $Block;
        static JUNGLE_WOOD: $Block;
        static CRACKED_DEEPSLATE_TILES: $Block;
        static WHITE_BANNER: $Block;
        static ACACIA_DOOR: $Block;
        static FLOWERING_AZALEA: $Block;
        static MOSSY_STONE_BRICKS: $Block;
        static PRISMARINE: $Block;
        static WARPED_BUTTON: $Block;
        static DEAD_TUBE_CORAL_BLOCK: $Block;
        static TUFF_SLAB: $Block;
        static SMOOTH_SANDSTONE: $Block;
        static DIAMOND_BLOCK: $Block;
        static OAK_SAPLING: $Block;
        static POLISHED_DEEPSLATE_SLAB: $Block;
        static LAVA: $Block;
        static MANGROVE_FENCE_GATE: $Block;
        static CHISELED_DEEPSLATE: $Block;
        static STONE_BRICK_SLAB: $Block;
        static CUT_COPPER_STAIRS: $Block;
        static GRAY_CONCRETE: $Block;
        static DARK_OAK_LEAVES: $Block;
        static EXPOSED_COPPER_GRATE: $Block;
        static BAMBOO_PRESSURE_PLATE: $Block;
        static MELON: $Block;
        static SEA_LANTERN: $Block;
        static GREEN_CONCRETE: $Block;
        static LANTERN: $Block;
        static ORANGE_WALL_BANNER: $Block;
        static VOID_AIR: $Block;
        static SMOOTH_STONE_SLAB: $Block;
        static SMOOTH_STONE: $Block;
        static GREEN_STAINED_GLASS_PANE: $Block;
        static ORANGE_CONCRETE: $Block;
        static RED_NETHER_BRICKS: $Block;
        static MANGROVE_DOOR: $Block;
        static CYAN_CONCRETE_POWDER: $Block;
        static WAXED_COPPER_BLOCK: $Block;
        static SMOKER: $Block;
        static BIRCH_PLANKS: $Block;
        static TRIPWIRE: $Block;
        static REPEATING_COMMAND_BLOCK: $Block;
        static RED_CONCRETE_POWDER: $Block;
        static BIRCH_DOOR: $Block;
        static CRIMSON_SIGN: $Block;
        static CRIMSON_TRAPDOOR: $Block;
        static CHISELED_COPPER: $Block;
        static WEATHERED_COPPER_TRAPDOOR: $Block;
        static BLUE_CARPET: $Block;
        static DEEPSLATE_TILE_SLAB: $Block;
        static DRAGON_EGG: $Block;
        static SANDSTONE: $Block;
        static CRIMSON_STAIRS: $Block;
        static EXPOSED_COPPER: $Block;
        static WEATHERED_CUT_COPPER_STAIRS: $Block;
        static COBBLED_DEEPSLATE_SLAB: $Block;
        static MOSS_CARPET: $Block;
        static ANVIL: $Block;
        static REPEATER: $Block;
        static CRIMSON_HANGING_SIGN: $Block;
        static OXIDIZED_COPPER_BULB: $Block;
        static DEAD_BRAIN_CORAL: $Block;
        static BOOKSHELF: $Block;
        static SMOOTH_QUARTZ_STAIRS: $Block;
        static LIGHT_BLUE_CANDLE: $Block;
        static SPRUCE_WOOD: $Block;
        static BLACK_TERRACOTTA: $Block;
        static STONE_STAIRS: $Block;
        static POLISHED_TUFF_SLAB: $Block;
        static LIME_WOOL: $Block;
        static SPRUCE_FENCE: $Block;
        static OAK_PRESSURE_PLATE: $Block;
        static HONEY_BLOCK: $Block;
        static STRIPPED_DARK_OAK_WOOD: $Block;
        static MEDIUM_AMETHYST_BUD: $Block;
        static BIRCH_STAIRS: $Block;
        static POTTED_BAMBOO: $Block;
        static MANGROVE_BUTTON: $Block;
        static BIRCH_TRAPDOOR: $Block;
        static COMPOSTER: $Block;
        static ORANGE_STAINED_GLASS: $Block;
        static DECORATED_POT: $Block;
        static GLASS: $Block;
        static STRIPPED_MANGROVE_LOG: $Block;
        static CHERRY_PLANKS: $Block;
        static SOUL_SAND: $Block;
        static GREEN_STAINED_GLASS: $Block;
        static GRAY_STAINED_GLASS_PANE: $Block;
        static POTTED_FLOWERING_AZALEA: $Block;
        static BLUE_WOOL: $Block;
        static MAGENTA_WOOL: $Block;
        static BAMBOO_DOOR: $Block;
        static PITCHER_PLANT: $Block;
        static DEAD_HORN_CORAL: $Block;
        static PINK_BED: $Block;
        static CYAN_CANDLE: $Block;
        static POPPY: $Block;
        static CYAN_TERRACOTTA: $Block;
        static TRIPWIRE_HOOK: $Block;
        static PACKED_ICE: $Block;
        static YELLOW_CONCRETE: $Block;
        static WEATHERED_COPPER_DOOR: $Block;
        static ACACIA_STAIRS: $Block;
        static VINE: $Block;
        static POTTED_SPRUCE_SAPLING: $Block;
        static BUBBLE_COLUMN: $Block;
        static INFESTED_STONE_BRICKS: $Block;
        static COPPER_ORE: $Block;
        static BAMBOO_TRAPDOOR: $Block;
        static PODZOL: $Block;
        static WARPED_WART_BLOCK: $Block;
        static POLISHED_BLACKSTONE_WALL: $Block;
        static WARPED_NYLIUM: $Block;
        static STRIPPED_CRIMSON_STEM: $Block;
        static POTTED_ALLIUM: $Block;
        static BLUE_BED: $Block;
        static DEAD_FIRE_CORAL: $Block;
        static BLACK_WALL_BANNER: $Block;
        static BLACK_CARPET: $Block;
        static MUD: $Block;
        static PINK_TERRACOTTA: $Block;
        static POTTED_LILY_OF_THE_VALLEY: $Block;
        static FIRE_CORAL_BLOCK: $Block;
        static WARPED_WALL_HANGING_SIGN: $Block;
        static GRAY_GLAZED_TERRACOTTA: $Block;
        static CHERRY_LEAVES: $Block;
        static WEATHERED_COPPER_GRATE: $Block;
        static JUNGLE_FENCE: $Block;
        static SPAWNER: $Block;
        static POLISHED_BASALT: $Block;
        static WARPED_FUNGUS: $Block;
        static GRAY_WALL_BANNER: $Block;
        static WHITE_CONCRETE_POWDER: $Block;
        static RAIL: $Block;
        static GRAY_TERRACOTTA: $Block;
        static NETHER_PORTAL: $Block;
        static BEDROCK: $Block;
        static INFESTED_DEEPSLATE: $Block;
        static SHROOMLIGHT: $Block;
        static CHAIN_COMMAND_BLOCK: $Block;
        static CYAN_GLAZED_TERRACOTTA: $Block;
        static WAXED_WEATHERED_CUT_COPPER_SLAB: $Block;
        static STRIPPED_DARK_OAK_LOG: $Block;
        static GRAY_WOOL: $Block;
        static CYAN_WALL_BANNER: $Block;
        static DARK_OAK_SLAB: $Block;
        static OAK_SIGN: $Block;
        static RED_CONCRETE: $Block;
        static CRACKED_POLISHED_BLACKSTONE_BRICKS: $Block;
        static BEEHIVE: $Block;
        static WAXED_OXIDIZED_COPPER_DOOR: $Block;
        static GRAY_SHULKER_BOX: $Block;
        static WARPED_DOOR: $Block;
        static OAK_FENCE: $Block;
        static NETHER_BRICKS: $Block;
        static RED_CANDLE: $Block;
        static PURPLE_CANDLE_CAKE: $Block;
        static FLETCHING_TABLE: $Block;
        static BIG_DRIPLEAF_STEM: $Block;
        static GRAY_BANNER: $Block;
        static JUNGLE_FENCE_GATE: $Block;
        static MAGENTA_CONCRETE: $Block;
        static LIGHT_BLUE_WALL_BANNER: $Block;
        static BLACK_SHULKER_BOX: $Block;
        static BUBBLE_CORAL_WALL_FAN: $Block;
        static FROGSPAWN: $Block;
        static JUNGLE_TRAPDOOR: $Block;
        static ACTIVATOR_RAIL: $Block;
        static OXIDIZED_CUT_COPPER_STAIRS: $Block;
        static DIRT_PATH: $Block;
        static FROSTED_ICE: $Block;
        static ORANGE_CARPET: $Block;
        static PINK_CARPET: $Block;
        static STRUCTURE_VOID: $Block;
        static POWDER_SNOW_CAULDRON: $Block;
        static POTTED_ACACIA_SAPLING: $Block;
        static STONECUTTER: $Block;
        static LIME_CONCRETE_POWDER: $Block;
        static PINK_BANNER: $Block;
        static POLISHED_BLACKSTONE_PRESSURE_PLATE: $Block;
        static GREEN_WOOL: $Block;
        static HORN_CORAL_FAN: $Block;
        static POTTED_WARPED_ROOTS: $Block;
        static DEAD_HORN_CORAL_WALL_FAN: $Block;
        static CHERRY_FENCE: $Block;
        static OAK_WALL_HANGING_SIGN: $Block;
        static MOSSY_COBBLESTONE_SLAB: $Block;
        static BAMBOO_SAPLING: $Block;
        static DARK_PRISMARINE_STAIRS: $Block;
        static TWISTING_VINES: $Block;
        static LIME_BANNER: $Block;
        static PINK_CONCRETE: $Block;
        static RED_CANDLE_CAKE: $Block;
        static JUNGLE_BUTTON: $Block;
        static WAXED_WEATHERED_COPPER: $Block;
        static MUSHROOM_STEM: $Block;
        static BLUE_TERRACOTTA: $Block;
        static BROWN_MUSHROOM_BLOCK: $Block;
        static DEAD_TUBE_CORAL_FAN: $Block;
        static MAGENTA_GLAZED_TERRACOTTA: $Block;
        static CHISELED_BOOKSHELF: $Block;
        static TUFF_WALL: $Block;
        static POTTED_CACTUS: $Block;
        static DEAD_BUBBLE_CORAL: $Block;
        static WHITE_GLAZED_TERRACOTTA: $Block;
        static POTTED_BIRCH_SAPLING: $Block;
        static DEAD_FIRE_CORAL_WALL_FAN: $Block;
        static WAXED_OXIDIZED_COPPER: $Block;
        static GREEN_BED: $Block;
        static BROWN_WALL_BANNER: $Block;
        static CAULDRON: $Block;
        static POLISHED_ANDESITE_STAIRS: $Block;
        static POTTED_OAK_SAPLING: $Block;
        static CHERRY_FENCE_GATE: $Block;
        static EMERALD_BLOCK: $Block;
        static POTTED_TORCHFLOWER: $Block;
        static LIME_STAINED_GLASS_PANE: $Block;
        static ORANGE_BANNER: $Block;
        static WAXED_WEATHERED_CHISELED_COPPER: $Block;
        static CAVE_AIR: $Block;
        static LIGHT_BLUE_GLAZED_TERRACOTTA: $Block;
        static PINK_STAINED_GLASS: $Block;
        static OXIDIZED_COPPER: $Block;
        static SPRUCE_STAIRS: $Block;
        static BLUE_ICE: $Block;
        static SCAFFOLDING: $Block;
        static BLUE_SHULKER_BOX: $Block;
        static HORN_CORAL_BLOCK: $Block;
        static CRIMSON_SLAB: $Block;
        static RESPAWN_ANCHOR: $Block;
        static POTTED_JUNGLE_SAPLING: $Block;
        static KELP: $Block;
        static COPPER_BLOCK: $Block;
        static STRIPPED_WARPED_HYPHAE: $Block;
        static STRIPPED_JUNGLE_LOG: $Block;
        static ANDESITE_SLAB: $Block;
        static SUSPICIOUS_GRAVEL: $Block;
        static ATTACHED_MELON_STEM: $Block;
        static POTTED_CRIMSON_ROOTS: $Block;
        static GOLD_BLOCK: $Block;
        static CRIMSON_PLANKS: $Block;
        static DARK_OAK_FENCE_GATE: $Block;
        static SPRUCE_PRESSURE_PLATE: $Block;
        static ACACIA_LEAVES: $Block;
        static COBBLESTONE_SLAB: $Block;
        static HEAVY_WEIGHTED_PRESSURE_PLATE: $Block;
        static PINK_CONCRETE_POWDER: $Block;
        static WAXED_COPPER_GRATE: $Block;
        static LIGHT_BLUE_CONCRETE_POWDER: $Block;
        static WHITE_BED: $Block;
        static CHISELED_TUFF: $Block;
        static BUBBLE_CORAL_FAN: $Block;
        static YELLOW_CANDLE_CAKE: $Block;
        static ACACIA_WALL_HANGING_SIGN: $Block;
        static JUNGLE_LOG: $Block;
        static NOTE_BLOCK: $Block;
        static MANGROVE_SIGN: $Block;
        static WARPED_HYPHAE: $Block;
        static CHERRY_SIGN: $Block;
        static TORCHFLOWER_CROP: $Block;
        static SPRUCE_SLAB: $Block;
        static PEONY: $Block;
        static OXEYE_DAISY: $Block;
        static OAK_HANGING_SIGN: $Block;
        static ACACIA_SIGN: $Block;
        static STRIPPED_WARPED_STEM: $Block;
        static BEACON: $Block;
        static WAXED_OXIDIZED_CUT_COPPER: $Block;
        static MOSS_BLOCK: $Block;
        static HONEYCOMB_BLOCK: $Block;
        static POTTED_FERN: $Block;
        static NETHER_BRICK_STAIRS: $Block;
        static COBWEB: $Block;
        static POTTED_WITHER_ROSE: $Block;
        static DARK_OAK_WALL_SIGN: $Block;
        static OAK_LOG: $Block;
        static STRIPPED_JUNGLE_WOOD: $Block;
        static DEAD_BRAIN_CORAL_BLOCK: $Block;
        static MUDDY_MANGROVE_ROOTS: $Block;
        static TINTED_GLASS: $Block;
        static MAGENTA_CANDLE: $Block;
        static YELLOW_BED: $Block;
        static LIGHT_GRAY_CANDLE: $Block;
        static END_GATEWAY: $Block;
        static POTTED_WARPED_FUNGUS: $Block;
        static POTTED_DARK_OAK_SAPLING: $Block;
        static CHISELED_QUARTZ_BLOCK: $Block;
        static LIME_CARPET: $Block;
        static DEEPSLATE_EMERALD_ORE: $Block;
        static MUD_BRICK_SLAB: $Block;
        static PURPLE_GLAZED_TERRACOTTA: $Block;
        static IRON_BARS: $Block;
        static WHITE_CONCRETE: $Block;
        static STONE: $Block;
        static YELLOW_WOOL: $Block;
        static CAVE_VINES_PLANT: $Block;
        static ROSE_BUSH: $Block;
        static MUD_BRICKS: $Block;
        static BROWN_CARPET: $Block;
        static WAXED_CHISELED_COPPER: $Block;
        static STRIPPED_CHERRY_WOOD: $Block;
        static BLACKSTONE_STAIRS: $Block;
        static WHITE_CANDLE_CAKE: $Block;
        static REDSTONE_WALL_TORCH: $Block;
        static BLACK_CANDLE_CAKE: $Block;
        static ACACIA_LOG: $Block;
        static INFESTED_MOSSY_STONE_BRICKS: $Block;
        static ORANGE_GLAZED_TERRACOTTA: $Block;
        static MUD_BRICK_STAIRS: $Block;
        static MAGENTA_CONCRETE_POWDER: $Block;
        static TNT: $Block;
        static BELL: $Block;
        static TWISTING_VINES_PLANT: $Block;
        static BLACKSTONE_SLAB: $Block;
        static TORCHFLOWER: $Block;
        static SPRUCE_HANGING_SIGN: $Block;
        static STRIPPED_ACACIA_LOG: $Block;
        static RAW_IRON_BLOCK: $Block;
        static BROWN_BANNER: $Block;
        static AIR: $Block;
        static GRANITE_STAIRS: $Block;
        static BEE_NEST: $Block;
        static CHEST: $Block;
        static PINK_PETALS: $Block;
        static SCULK_SENSOR: $Block;
        static OAK_DOOR: $Block;
        static MANGROVE_FENCE: $Block;
        static LILY_PAD: $Block;
        static SMALL_DRIPLEAF: $Block;
        static PURPUR_STAIRS: $Block;
        static EXPOSED_CUT_COPPER_SLAB: $Block;
        static LADDER: $Block;
        static RED_MUSHROOM_BLOCK: $Block;
        static WALL_TORCH: $Block;
        static CRAFTER: $Block;
        static BASALT: $Block;
        static MAGENTA_WALL_BANNER: $Block;
        static BAMBOO_SIGN: $Block;
        static TALL_GRASS: $Block;
        static DEAD_BUSH: $Block;
        static EXPOSED_CUT_COPPER_STAIRS: $Block;
        static PETRIFIED_OAK_SLAB: $Block;
        static MUD_BRICK_WALL: $Block;
        static LIGHT_BLUE_CARPET: $Block;
        static MANGROVE_WALL_HANGING_SIGN: $Block;
        static CALIBRATED_SCULK_SENSOR: $Block;
        static SCULK_CATALYST: $Block;
        static WAXED_OXIDIZED_CUT_COPPER_STAIRS: $Block;
        static WARPED_ROOTS: $Block;
        static CHAIN: $Block;
        static FIRE_CORAL: $Block;
        static DEEPSLATE_IRON_ORE: $Block;
        static WAXED_OXIDIZED_COPPER_BULB: $Block;
        static CHISELED_NETHER_BRICKS: $Block;
        static LIGHT_GRAY_STAINED_GLASS_PANE: $Block;
        static COAL_BLOCK: $Block;
        static WHITE_STAINED_GLASS: $Block;
        static WEATHERED_CUT_COPPER: $Block;
        static PURPUR_PILLAR: $Block;
        static CALCITE: $Block;
        static ACACIA_TRAPDOOR: $Block;
        static CHERRY_WOOD: $Block;
        static WHITE_CARPET: $Block;
        static CRIMSON_STEM: $Block;
        static CHISELED_STONE_BRICKS: $Block;
        static RAW_GOLD_BLOCK: $Block;
        static JIGSAW: $Block;
        static PURPUR_BLOCK: $Block;
        static FURNACE: $Block;
        static JACK_O_LANTERN: $Block;
        static BLACK_BED: $Block;
        static BIRCH_PRESSURE_PLATE: $Block;
        static DEEPSLATE_LAPIS_ORE: $Block;
        static WAXED_OXIDIZED_CHISELED_COPPER: $Block;
        static LARGE_FERN: $Block;
        static SNIFFER_EGG: $Block;
        static BAMBOO_WALL_HANGING_SIGN: $Block;
        static PURPLE_TERRACOTTA: $Block;
        static CUT_RED_SANDSTONE_SLAB: $Block;
        static DIRT: $Block;
        static WEEPING_VINES: $Block;
        static COBBLED_DEEPSLATE: $Block;
        static GRAY_BED: $Block;
        static BONE_BLOCK: $Block;
        static LIGHT_BLUE_CANDLE_CAKE: $Block;
        static POLISHED_DIORITE: $Block;
        static CUT_SANDSTONE: $Block;
        static WHITE_TERRACOTTA: $Block;
        static MOSSY_COBBLESTONE_WALL: $Block;
        static GRINDSTONE: $Block;
        static POWERED_RAIL: $Block;
        static JUNGLE_SIGN: $Block;
        static DARK_OAK_PLANKS: $Block;
        static ACACIA_WOOD: $Block;
        static END_STONE_BRICK_SLAB: $Block;
        static MANGROVE_WOOD: $Block;
        static LIGHT_GRAY_STAINED_GLASS: $Block;
        static PIGLIN_WALL_HEAD: $Block;
        static POTTED_OXEYE_DAISY: $Block;
        static CHERRY_WALL_SIGN: $Block;
        static SEAGRASS: $Block;
        static WEATHERED_COPPER: $Block;
        static WAXED_WEATHERED_COPPER_GRATE: $Block;
        static OAK_PLANKS: $Block;
        static DEAD_TUBE_CORAL_WALL_FAN: $Block;
        static END_PORTAL_FRAME: $Block;
        static WAXED_OXIDIZED_COPPER_TRAPDOOR: $Block;
        static DEEPSLATE_COAL_ORE: $Block;
        static FLOWER_POT: $Block;
        static HEAVY_CORE: $Block;
        static RED_TERRACOTTA: $Block;
        static WAXED_EXPOSED_CUT_COPPER: $Block;
        static WARPED_SIGN: $Block;
        static COPPER_BULB: $Block;
        static SWEET_BERRY_BUSH: $Block;
        static SNOW_BLOCK: $Block;
        static CRIMSON_FENCE: $Block;
        static POLISHED_DIORITE_SLAB: $Block;
        static LAVA_CAULDRON: $Block;
        static BRAIN_CORAL_BLOCK: $Block;
        static MOSSY_STONE_BRICK_SLAB: $Block;
        static STONE_BRICKS: $Block;
        static SANDSTONE_STAIRS: $Block;
        static BROWN_BED: $Block;
        static MANGROVE_LEAVES: $Block;
        static POTTED_DANDELION: $Block;
        static SMOOTH_SANDSTONE_SLAB: $Block;
        static CHERRY_TRAPDOOR: $Block;
        static ATTACHED_PUMPKIN_STEM: $Block;
        static MAGENTA_TERRACOTTA: $Block;
        static SMOOTH_SANDSTONE_STAIRS: $Block;
        static SPRUCE_PLANKS: $Block;
        static DRAGON_HEAD: $Block;
        static CHERRY_SAPLING: $Block;
        static FIRE: $Block;
        static ANDESITE_WALL: $Block;
        static BLACK_WOOL: $Block;
        static LIGHT_GRAY_CARPET: $Block;
        static PURPLE_CONCRETE: $Block;
        static LIGHTNING_ROD: $Block;
        static CYAN_BED: $Block;
        static CHERRY_HANGING_SIGN: $Block;
        static LARGE_AMETHYST_BUD: $Block;
        static RED_SHULKER_BOX: $Block;
        static PEARLESCENT_FROGLIGHT: $Block;
        static REDSTONE_TORCH: $Block;
        static MAGENTA_CARPET: $Block;
        static STICKY_PISTON: $Block;
        static CRIMSON_ROOTS: $Block;
        static PUMPKIN: $Block;
        static SMOOTH_QUARTZ: $Block;
        static FLOWERING_AZALEA_LEAVES: $Block;
        static NETHER_WART_BLOCK: $Block;
        static COBBLED_DEEPSLATE_STAIRS: $Block;
        static COBBLESTONE_WALL: $Block;
        static WHEAT: $Block;
        static BLUE_WALL_BANNER: $Block;
        static DEAD_FIRE_CORAL_FAN: $Block;
        static LIME_CANDLE: $Block;
        static ACACIA_SLAB: $Block;
        static CRIMSON_NYLIUM: $Block;
        static ORANGE_CANDLE_CAKE: $Block;
        static OXIDIZED_COPPER_TRAPDOOR: $Block;
        static ORANGE_TERRACOTTA: $Block;
        static BLACK_CONCRETE: $Block;
        static DROPPER: $Block;
        static AZALEA: $Block;
        static POTTED_POPPY: $Block;
        static MOSSY_STONE_BRICK_STAIRS: $Block;
        static WARPED_HANGING_SIGN: $Block;
        static OAK_STAIRS: $Block;
        static BLACK_STAINED_GLASS: $Block;
        static IRON_TRAPDOOR: $Block;
        static KELP_PLANT: $Block;
        static PINK_CANDLE_CAKE: $Block;
        static INFESTED_CHISELED_STONE_BRICKS: $Block;
        static BLUE_BANNER: $Block;
        static POLISHED_DIORITE_STAIRS: $Block;
        static WARPED_PRESSURE_PLATE: $Block;
        static HORN_CORAL_WALL_FAN: $Block;
        static BAMBOO_HANGING_SIGN: $Block;
        static OAK_SLAB: $Block;
        static POINTED_DRIPSTONE: $Block;
        static WAXED_EXPOSED_COPPER: $Block;
        static PURPLE_CANDLE: $Block;
        static CRIMSON_FUNGUS: $Block;
        static DARK_OAK_HANGING_SIGN: $Block;
        static DARK_OAK_SAPLING: $Block;
        static ACACIA_BUTTON: $Block;
        static EMERALD_ORE: $Block;
        static POLISHED_DEEPSLATE_STAIRS: $Block;
        static LIGHT_GRAY_CANDLE_CAKE: $Block;
        static OAK_FENCE_GATE: $Block;
        static POTTED_WHITE_TULIP: $Block;
        static POLISHED_BLACKSTONE_STAIRS: $Block;
        static WAXED_CUT_COPPER_SLAB: $Block;
        static BAMBOO_BLOCK: $Block;
        static SUNFLOWER: $Block;
        static CAMPFIRE: $Block;
        static SANDSTONE_SLAB: $Block;
        static MANGROVE_PRESSURE_PLATE: $Block;
        static SPRUCE_BUTTON: $Block;
        static POTTED_MANGROVE_PROPAGULE: $Block;
        static CYAN_WOOL: $Block;
        static JUNGLE_HANGING_SIGN: $Block;
        static ZOMBIE_WALL_HEAD: $Block;
        static TARGET: $Block;
        static PRISMARINE_BRICK_SLAB: $Block;
        static LOOM: $Block;
        static DRIPSTONE_BLOCK: $Block;
        static CREEPER_HEAD: $Block;
        static BAMBOO_PLANKS: $Block;
        static NETHER_QUARTZ_ORE: $Block;
        static DEAD_BUBBLE_CORAL_FAN: $Block;
        static SUSPICIOUS_SAND: $Block;
        static BLACK_BANNER: $Block;
        static COPPER_DOOR: $Block;
        static WAXED_COPPER_DOOR: $Block;
        static LIGHT_BLUE_BED: $Block;
        static BIRCH_WALL_SIGN: $Block;
        static PRISMARINE_WALL: $Block;
        static PINK_STAINED_GLASS_PANE: $Block;
        static WEATHERED_COPPER_BULB: $Block;
        static DIORITE_STAIRS: $Block;
        static BLACKSTONE_WALL: $Block;
        static BRICK_STAIRS: $Block;
        static END_PORTAL: $Block;
        static PLAYER_WALL_HEAD: $Block;
        static BIRCH_HANGING_SIGN: $Block;
        static DAMAGED_ANVIL: $Block;
        static PINK_WALL_BANNER: $Block;
        static BAMBOO: $Block;
        static CONDUIT: $Block;
        static JUNGLE_LEAVES: $Block;
        static RED_TULIP: $Block;
        static SPORE_BLOSSOM: $Block;
        static WAXED_WEATHERED_COPPER_DOOR: $Block;
        static DARK_OAK_STAIRS: $Block;
        static YELLOW_SHULKER_BOX: $Block;
        static PINK_GLAZED_TERRACOTTA: $Block;
        static CANDLE_CAKE: $Block;
        static DANDELION: $Block;
        static AZALEA_LEAVES: $Block;
        static COCOA: $Block;
        static RED_GLAZED_TERRACOTTA: $Block;
        static BAMBOO_MOSAIC: $Block;
        static WARPED_STEM: $Block;
        static OAK_TRAPDOOR: $Block;
        static YELLOW_CONCRETE_POWDER: $Block;
        static BAMBOO_BUTTON: $Block;
        static PURPLE_WOOL: $Block;
        static VAULT: $Block;
        static LIGHT_BLUE_BANNER: $Block;
        static END_STONE: $Block;
        static SPRUCE_FENCE_GATE: $Block;
        static GRAVEL: $Block;
        static BUDDING_AMETHYST: $Block;
        static CYAN_STAINED_GLASS: $Block;
        static LAPIS_ORE: $Block;
        static ORANGE_BED: $Block;
        static WAXED_WEATHERED_COPPER_TRAPDOOR: $Block;
        static BIG_DRIPLEAF: $Block;
        static POTTED_CORNFLOWER: $Block;
        static DISPENSER: $Block;
        static NETHER_BRICK_SLAB: $Block;
        static CYAN_CONCRETE: $Block;
        static SMITHING_TABLE: $Block;
        static IRON_ORE: $Block;
        static POLISHED_BLACKSTONE_BRICK_SLAB: $Block;
        static NETHERRACK: $Block;
        static RED_STAINED_GLASS_PANE: $Block;
        static GREEN_CANDLE_CAKE: $Block;
        static BROWN_SHULKER_BOX: $Block;
        static HANGING_ROOTS: $Block;
        static PRISMARINE_SLAB: $Block;
        static SMOOTH_RED_SANDSTONE: $Block;
        static BROWN_STAINED_GLASS: $Block;
        static BIRCH_WALL_HANGING_SIGN: $Block;
        static SKELETON_SKULL: $Block;
        static GREEN_WALL_BANNER: $Block;
        static END_STONE_BRICK_WALL: $Block;
        static POLISHED_TUFF_STAIRS: $Block;
        static TORCH: $Block;
        static ENDER_CHEST: $Block;
        static WAXED_OXIDIZED_COPPER_GRATE: $Block;
        static FERN: $Block;
        static BIRCH_SIGN: $Block;
        static POLISHED_GRANITE: $Block;
        static PINK_TULIP: $Block;
        static INFESTED_CRACKED_STONE_BRICKS: $Block;
        static JUNGLE_SAPLING: $Block;
        static TALL_SEAGRASS: $Block;
        static LEVER: $Block;
        static DEAD_BUBBLE_CORAL_BLOCK: $Block;
        static STONE_PRESSURE_PLATE: $Block;
        static TUFF: $Block;
        static POLISHED_BLACKSTONE_BRICK_STAIRS: $Block;
        static NETHER_GOLD_ORE: $Block;
        static LIME_BED: $Block;
        static POTTED_DEAD_BUSH: $Block;
        static QUARTZ_BRICKS: $Block;
        static POTTED_PINK_TULIP: $Block;
        static STRIPPED_OAK_LOG: $Block;
        static MANGROVE_SLAB: $Block;
        static END_ROD: $Block;
        static WARPED_PLANKS: $Block;
        static CHERRY_SLAB: $Block;
        static ORANGE_CONCRETE_POWDER: $Block;
        static ORANGE_WOOL: $Block;
        static PLAYER_HEAD: $Block;
        static LIME_TERRACOTTA: $Block;
        static MANGROVE_STAIRS: $Block;
        static TUFF_BRICKS: $Block;
        static WHITE_WOOL: $Block;
        static GRAY_CARPET: $Block;
        static GREEN_TERRACOTTA: $Block;
        static BROWN_CANDLE: $Block;
        static DARK_OAK_DOOR: $Block;
        static GREEN_SHULKER_BOX: $Block;
        static GRAY_CONCRETE_POWDER: $Block;
        static OXIDIZED_CUT_COPPER: $Block;
        static LIGHT_GRAY_WALL_BANNER: $Block;
        static WHITE_SHULKER_BOX: $Block;
        static CRIMSON_BUTTON: $Block;
        static IRON_BLOCK: $Block;
        static BLUE_CONCRETE: $Block;
        static REDSTONE_LAMP: $Block;
        static POLISHED_BLACKSTONE_BRICK_WALL: $Block;
        static PUMPKIN_STEM: $Block;
        static POTTED_BLUE_ORCHID: $Block;
        static POTATOES: $Block;
        static BIRCH_BUTTON: $Block;
        static HOPPER: $Block;
        static DARK_OAK_WALL_HANGING_SIGN: $Block;
        static LIGHT_WEIGHTED_PRESSURE_PLATE: $Block;
        static SOUL_SOIL: $Block;
        static YELLOW_CANDLE: $Block;
        static SOUL_TORCH: $Block;
        static LIGHT_BLUE_WOOL: $Block;
        static TUFF_BRICK_STAIRS: $Block;
        static ACACIA_WALL_SIGN: $Block;
        static POTTED_CRIMSON_FUNGUS: $Block;
        static LIGHT_GRAY_SHULKER_BOX: $Block;
        static WAXED_CUT_COPPER: $Block;
        static STRIPPED_MANGROVE_WOOD: $Block;
        static FIRE_CORAL_WALL_FAN: $Block;
        static CHERRY_LOG: $Block;
        static WAXED_WEATHERED_CUT_COPPER: $Block;
        static YELLOW_STAINED_GLASS_PANE: $Block;
        static CUT_COPPER_SLAB: $Block;
        static BLACKSTONE: $Block;
        static RED_NETHER_BRICK_SLAB: $Block;
        static LIME_CANDLE_CAKE: $Block;
        static MAGENTA_STAINED_GLASS_PANE: $Block;
        static DEAD_HORN_CORAL_FAN: $Block;
        static SHULKER_BOX: $Block;
        static DEAD_HORN_CORAL_BLOCK: $Block;
        static CARVED_PUMPKIN: $Block;
        static PINK_WOOL: $Block;
        static WEEPING_VINES_PLANT: $Block;
        static LIGHT_GRAY_WOOL: $Block;
        static JUNGLE_DOOR: $Block;
        static STONE_BUTTON: $Block;
        static GRANITE_SLAB: $Block;
        static CRACKED_NETHER_BRICKS: $Block;
        static LIGHT_GRAY_BED: $Block;
        static ACACIA_SAPLING: $Block;
        static POWDER_SNOW: $Block;
        static EXPOSED_COPPER_BULB: $Block;
        static BAMBOO_SLAB: $Block;
        static CRIMSON_WALL_HANGING_SIGN: $Block;
        static IRON_DOOR: $Block;
        static BROWN_STAINED_GLASS_PANE: $Block;
        static MOVING_PISTON: $Block;
        static WAXED_EXPOSED_CUT_COPPER_SLAB: $Block;
        static SOUL_WALL_TORCH: $Block;
        static BIRCH_WOOD: $Block;
        static LODESTONE: $Block;
        static SEA_PICKLE: $Block;
        static SPRUCE_LEAVES: $Block;
        static ORANGE_TULIP: $Block;
        static ANDESITE: $Block;
        static RED_NETHER_BRICK_STAIRS: $Block;
        static MANGROVE_PROPAGULE: $Block;
        static BROWN_GLAZED_TERRACOTTA: $Block;
        static BARREL: $Block;
        static OXIDIZED_CHISELED_COPPER: $Block;
        static INFESTED_STONE: $Block;
        static YELLOW_GLAZED_TERRACOTTA: $Block;
        constructor();
    }
    export class $WallBannerBlock extends $AbstractBannerBlock {
        codec(): $MapCodec<$WallBannerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallBannerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(color: $DyeColor_, properties: $BlockBehaviour$Properties);
    }
    export class $CraftingTableBlock extends $Block {
        codec(): $MapCodec<$CraftingTableBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CraftingTableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CoralPlantBlock extends $BaseCoralPlantTypeBlock {
        codec(): $MapCodec<$CoralPlantBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CoralPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(deadBlock: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $BlastFurnaceBlock extends $AbstractFurnaceBlock {
        codec(): $MapCodec<$BlastFurnaceBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BlastFurnaceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CampfireBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        static isSmokeyPos(level: $Level_, pos: $BlockPos_): boolean;
        static makeParticles(level: $Level_, pos: $BlockPos_, isSignalFire: boolean, spawnExtraSmoke: boolean): void;
        static isLitCampfire(state: $BlockState_): boolean;
        codec(): $MapCodec<$CampfireBlock>;
        static dowse(entity: $Entity | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        static canLight(state: $BlockState_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CampfireBlock>;
        static SIGNAL_FIRE: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(spawnParticles: boolean, fireDamage: number, properties: $BlockBehaviour$Properties);
    }
    export class $CrossCollisionBlock extends $Block implements $SimpleWaterloggedBlock {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
    }
    export class $StandingSignBlock extends $SignBlock {
        codec(): $MapCodec<$StandingSignBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StandingSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $SoulFireBlock extends $BaseFireBlock {
        static canSurviveOnBlock(state: $BlockState_): boolean;
        codec(): $MapCodec<$SoulFireBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SoulFireBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BonemealableBlock {
    }
    export interface $BonemealableBlock {
        getType(): $BonemealableBlock$Type;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        get type(): $BonemealableBlock$Type;
    }
    export class $Rotation extends $Enum<$Rotation> implements $StringRepresentable {
        static values(): $Rotation[];
        static valueOf(arg0: string): $Rotation;
        rotate(facing: $Direction_): $Direction;
        rotate(rotation: number, positionCount: number): number;
        /**
         * Chooses a random rotation.
         */
        static getRandom(random: $RandomSource): $Rotation;
        getRotated(rotation: $Rotation_): $Rotation;
        getSerializedName(): string;
        rotation(): $OctahedralGroup;
        /**
         * Get a list of all rotations in random order.
         */
        static getShuffled(random: $RandomSource): $List<$Rotation>;
        getRemappedEnumConstantName(): string;
        static COUNTERCLOCKWISE_90: $Rotation;
        static CODEC: $Codec<$Rotation>;
        static CLOCKWISE_90: $Rotation;
        static CLOCKWISE_180: $Rotation;
        static NONE: $Rotation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rotation}.
     */
    export type $Rotation_ = "none" | "clockwise_90" | "180" | "counterclockwise_90";
    export class $LevelEvent {
        static SOUND_BAT_LIFTOFF: number;
        static SOUND_END_PORTAL_SPAWN: number;
        static PARTICLES_EGG_CRACK: number;
        static SOUND_DRAGON_FIREBALL: number;
        static SOUND_DISPENSER_DISPENSE: number;
        static PARTICLES_SMASH_ATTACK: number;
        static PARTICLES_AND_SOUND_WAX_ON: number;
        static PARTICLES_WAX_OFF: number;
        static SOUND_WITHER_BOSS_SHOOT: number;
        static PARTICLES_SCULK_SHRIEK: number;
        static SOUND_STOP_JUKEBOX_SONG: number;
        static SOUND_ANVIL_BROKEN: number;
        static REDSTONE_TORCH_BURNOUT: number;
        static SOUND_PORTAL_TRAVEL: number;
        static SOUND_ZOMBIE_IRON_DOOR: number;
        static SOUND_ZOMBIE_WOODEN_DOOR: number;
        static SOUND_ANVIL_LAND: number;
        static SOUND_DRIP_LAVA_INTO_CAULDRON: number;
        static SOUND_CHORUS_DEATH: number;
        static END_PORTAL_FRAME_FILL: number;
        static SOUND_PAGE_TURN: number;
        static SOUND_CRAFTER_FAIL: number;
        static PARTICLES_TRIAL_SPAWNER_DETECT_PLAYER: number;
        static SOUND_WITHER_BOSS_SPAWN: number;
        static PARTICLES_EYE_OF_ENDER_DEATH: number;
        static ANIMATION_VAULT_ACTIVATE: number;
        static SOUND_ZOMBIE_INFECTED: number;
        static PARTICLES_SCRAPE: number;
        static PARTICLES_MOBBLOCK_SPAWN: number;
        static SOUND_ZOMBIE_CONVERTED: number;
        static PARTICLES_WATER_EVAPORATING: number;
        static SOUND_GHAST_FIREBALL: number;
        static SOUND_ZOMBIE_DOOR_CRASH: number;
        static PARTICLES_SPELL_POTION_SPLASH: number;
        static SOUND_HUSK_TO_ZOMBIE: number;
        static SOUND_FIREWORK_SHOOT: number;
        static PARTICLES_DRAGON_BLOCK_BREAK: number;
        static SOUND_ANVIL_USED: number;
        static PARTICLES_AND_SOUND_BRUSH_BLOCK_COMPLETE: number;
        static SOUND_BLAZE_FIREBALL: number;
        static SOUND_DRAGON_DEATH: number;
        static COMPOSTER_FILL: number;
        static SOUND_DRIP_WATER_INTO_CAULDRON: number;
        static SOUND_DISPENSER_PROJECTILE_LAUNCH: number;
        static PARTICLES_DRAGON_FIREBALL_SPLASH: number;
        static PARTICLES_TRIAL_SPAWNER_DETECT_PLAYER_OMINOUS: number;
        static PARTICLES_AND_SOUND_PLANT_GROWTH: number;
        static ANIMATION_VAULT_DEACTIVATE: number;
        static PARTICLES_DESTROY_BLOCK: number;
        static SOUND_CHORUS_GROW: number;
        static SOUND_EXTINGUISH_FIRE: number;
        static PARTICLES_SHOOT_SMOKE: number;
        static SOUND_PHANTOM_BITE: number;
        static LAVA_FIZZ: number;
        static PARTICLES_INSTANT_POTION_SPLASH: number;
        static ANIMATION_DRAGON_SUMMON_ROAR: number;
        static PARTICLES_TURTLE_EGG_PLACEMENT: number;
        static PARTICLES_SCULK_CHARGE: number;
        static SOUND_GRINDSTONE_USED: number;
        static SOUND_WITHER_BLOCK_BREAK: number;
        static SOUND_SMITHING_TABLE_USED: number;
        static DRIPSTONE_DRIP: number;
        static ANIMATION_END_GATEWAY_SPAWN: number;
        static SOUND_DISPENSER_FAIL: number;
        static SOUND_PLAY_JUKEBOX_SONG: number;
        static SOUND_ZOMBIE_TO_DROWNED: number;
        static ANIMATION_VAULT_EJECT_ITEM: number;
        static SOUND_BREWING_STAND_BREW: number;
        static PARTICLES_ELECTRIC_SPARK: number;
        static ANIMATION_SPAWN_COBWEB: number;
        static PARTICLES_TRIAL_SPAWNER_SPAWN_ITEM: number;
        static PARTICLES_BEE_GROWTH: number;
        static PARTICLES_TRIAL_SPAWNER_SPAWN_MOB_AT: number;
        static PARTICLES_TRIAL_SPAWNER_SPAWN: number;
        static ANIMATION_TRIAL_SPAWNER_EJECT_ITEM: number;
        static SOUND_GHAST_WARNING: number;
        static PARTICLES_SHOOT_WHITE_SMOKE: number;
        static SOUND_POINTED_DRIPSTONE_LAND: number;
        static SOUND_WIND_CHARGE_SHOOT: number;
        static PARTICLES_TRIAL_SPAWNER_BECOME_OMINOUS: number;
        static SOUND_SKELETON_TO_STRAY: number;
        static SOUND_CRAFTER_CRAFT: number;
        constructor();
    }
    export class $SporeBlossomBlock extends $Block {
        codec(): $MapCodec<$SporeBlossomBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SporeBlossomBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $TrialSpawnerBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$TrialSpawnerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TrialSpawnerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STATE: $EnumProperty<$TrialSpawnerState>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static OMINOUS: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BucketPickup {
    }
    export interface $BucketPickup extends $IBucketPickupExtension {
        /**
         * @deprecated
         */
        getPickupSound(): ($SoundEvent) | undefined;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        get pickupSound(): ($SoundEvent) | undefined;
    }
    export class $ConduitBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$ConduitBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ConduitBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MangroveRootsBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$MangroveRootsBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MangroveRootsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WallSkullBlock extends $AbstractSkullBlock {
        codec(): $MapCodec<$WallSkullBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallSkullBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $SkullBlock$Type_, properties: $BlockBehaviour$Properties);
    }
    export class $TorchflowerCropBlock extends $CropBlock {
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TorchflowerCropBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $Block$BlockStatePairKey {
        constructor(first: $BlockState_, second: $BlockState_, direction: $Direction_);
    }
    export class $SculkBlock extends $DropExperienceBlock implements $SculkBehaviour {
        canChangeBlockStateOnSpread(): boolean;
        attemptUseCharge(cursor: $SculkSpreader$ChargeCursor, level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, spreader: $SculkSpreader, shouldConvertBlocks: boolean): number;
        getSculkSpreadDelay(): number;
        attemptSpreadVein(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, directions: $Collection_<$Direction_> | null, markForPostprocessing: boolean): boolean;
        onDischarged(level: $LevelAccessor, state: $BlockState_, pos: $BlockPos_, random: $RandomSource): void;
        updateDecayDelay(currentDecayDelay: number): number;
        depositCharge(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SculkBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get sculkSpreadDelay(): number;
    }
    export class $KelpPlantBlock extends $GrowingPlantBodyBlock implements $LiquidBlockContainer {
        codec(): $MapCodec<$KelpPlantBlock>;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$KelpPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TripWireBlock extends $Block {
        shouldConnectTo(state: $BlockState_, direction: $Direction_): boolean;
        codec(): $MapCodec<$TripWireBlock>;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static SOUTH: $BooleanProperty;
        static EAST: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TripWireBlock>;
        static ATTACHED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static DISARMED: $BooleanProperty;
        constructor(hook: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $BuddingAmethystBlock extends $AmethystBlock {
        static canClusterGrowAtState(state: $BlockState_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BuddingAmethystBlock>;
        static GROWTH_CHANCE: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SimpleWaterloggedBlock {
    }
    export interface $SimpleWaterloggedBlock extends $BucketPickup, $LiquidBlockContainer {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        get pickupSound(): ($SoundEvent) | undefined;
    }
    export class $HopperBlock extends $BaseEntityBlock implements $ShapeUpdateHandlingBlockBehaviour {
        codec(): $MapCodec<$HopperBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HopperBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static ENABLED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TallSeagrassBlock extends $DoublePlantBlock implements $LiquidBlockContainer {
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TallSeagrassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BeetrootBlock extends $CropBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BeetrootBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CropBlock extends $BushBlock implements $BonemealableBlock, $CropBlockAccessor {
        getMaxAge(): number;
        getAge(state: $BlockState_): number;
        static hasSufficientLight(level: $LevelReader, pos: $BlockPos_): boolean;
        getAgeProperty(): $IntegerProperty;
        getStateForAge(age: number): $BlockState;
        codec(): $MapCodec<$CropBlock>;
        isMaxAge(state: $BlockState_): boolean;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        growCrops(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        create$callGetAgeProperty(): $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CropBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get ageProperty(): $IntegerProperty;
        get type(): $BonemealableBlock$Type;
    }
    export class $StonecutterBlock extends $Block {
        codec(): $MapCodec<$StonecutterBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StonecutterBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FireBlock extends $BaseFireBlock {
        canCatchFire(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        setFlammable(block: $Block_, encouragement: number, flammability: number): void;
        static bootStrap(): void;
        /**
         * @deprecated
         */
        getBurnOdds(state: $BlockState_): number;
        /**
         * @deprecated
         */
        getIgniteOdds(state: $BlockState_): number;
        codec(): $MapCodec<$FireBlock>;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static SOUTH: $BooleanProperty;
        static UP: $BooleanProperty;
        static EAST: $BooleanProperty;
        static AGE: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FireBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WaterlilyBlock extends $BushBlock {
        codec(): $MapCodec<$WaterlilyBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WaterlilyBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MultifaceSpreader$SpreadType extends $Enum<$MultifaceSpreader$SpreadType> {
        static values(): $MultifaceSpreader$SpreadType[];
        static valueOf(arg0: string): $MultifaceSpreader$SpreadType;
        getSpreadPos(pos: $BlockPos_, face: $Direction_, spreadDirection: $Direction_): $MultifaceSpreader$SpreadPos;
        static WRAP_AROUND: $MultifaceSpreader$SpreadType;
        static SAME_POSITION: $MultifaceSpreader$SpreadType;
        static SAME_PLANE: $MultifaceSpreader$SpreadType;
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadType}.
     */
    export type $MultifaceSpreader$SpreadType_ = "same_position" | "same_plane" | "wrap_around";
    export class $PipeBlock extends $Block {
        static DOWN: $BooleanProperty;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static SOUTH: $BooleanProperty;
        static UP: $BooleanProperty;
        static EAST: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static PROPERTY_BY_DIRECTION: $Map<$Direction, $BooleanProperty>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(apothem: number, properties: $BlockBehaviour$Properties);
    }
    export class $ChainBlock extends $RotatedPillarBlock implements $SimpleWaterloggedBlock {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ChainBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $InfestedBlock extends $Block {
        getHostBlock(): $Block;
        static infestedStateByHost(infested: $BlockState_): $BlockState;
        hostStateByInfested(infested: $BlockState_): $BlockState;
        static isCompatibleHostBlock(state: $BlockState_): boolean;
        codec(): $MapCodec<$InfestedBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$InfestedBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(hostBlock: $Block_, properties: $BlockBehaviour$Properties);
        get hostBlock(): $Block;
    }
    export class $NetherVines {
        static getBlocksToGrowWhenBonemealed(random: $RandomSource): number;
        static isValidGrowthState(state: $BlockState_): boolean;
        static GROW_PER_TICK_PROBABILITY: number;
        constructor();
    }
    export class $TallFlowerBlock extends $DoublePlantBlock implements $BonemealableBlock {
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TallFlowerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $PoweredRailBlock extends $BaseRailBlock {
        isActivatorRail(): boolean;
        codec(): $MapCodec<$PoweredRailBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PoweredRailBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$RailShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties, arg1: boolean);
        constructor(properties: $BlockBehaviour$Properties);
        get activatorRail(): boolean;
    }
    export class $TargetBlock extends $Block {
        codec(): $MapCodec<$TargetBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TargetBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $EquipableCarvedPumpkinBlock extends $CarvedPumpkinBlock implements $Equipable {
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipSound(): $Holder<$SoundEvent>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EquipableCarvedPumpkinBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $DropperBlock extends $DispenserBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DropperBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static DISPENSER_REGISTRY: $Map<$Item, $DispenseItemBehavior>;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static TRIGGERED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $DeadBushBlock extends $BushBlock implements $IShearable {
        codec(): $MapCodec<$DeadBushBlock>;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        /**
         * Spawns the given stack into the Level at the given position, respecting the doTileDrops gamerule
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DeadBushBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $InfestedRotatedPillarBlock extends $InfestedBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$InfestedRotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $Block_, arg1: $BlockBehaviour$Properties);
    }
    export class $DiodeBlock extends $HorizontalDirectionalBlock {
        isLocked(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        /**
         * Check if this diode should have a higher tick priority than default.
         * 
         * Both repeaters and comparators use this method to increase their tick priorities
         * when facing other diodes. This makes certain monostable circuits based on the repeater locking
         * mechanic more reliable.
         */
        shouldPrioritize(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_): boolean;
        static isDiode(state: $BlockState_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
    }
    export class $ComposterBlock$InputContainer extends $SimpleContainer implements $WorldlyContainer, $BlockStateOnlyInventory {
        items: $NonNullList<$ItemStack>;
    }
    export class $ChorusPlantBlock extends $PipeBlock {
        static getStateWithConnections(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_): $BlockState;
        codec(): $MapCodec<$ChorusPlantBlock>;
        static DOWN: $BooleanProperty;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static SOUTH: $BooleanProperty;
        static UP: $BooleanProperty;
        static EAST: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ChorusPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static PROPERTY_BY_DIRECTION: $Map<$Direction, $BooleanProperty>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MultifaceBlock extends $Block {
        static unpack(packedDirections: number): $Set<$Direction>;
        static pack(directions: $Collection_<$Direction_>): number;
        getStateForPlacement(currentState: $BlockState_, level: $BlockGetter, pos: $BlockPos_, lookingDirection: $Direction_): $BlockState;
        static canAttachTo(level: $BlockGetter, direction: $Direction_, pos: $BlockPos_, state: $BlockState_): boolean;
        getSpreader(): $MultifaceSpreader;
        static availableFaces(state: $BlockState_): $Set<$Direction>;
        static getFaceProperty(direction: $Direction_): $BooleanProperty;
        isValidStateForPlacement(level: $BlockGetter, state: $BlockState_, pos: $BlockPos_, direction: $Direction_): boolean;
        static hasFace(state: $BlockState_, direction: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get spreader(): $MultifaceSpreader;
    }
    export class $JigsawBlock extends $Block implements $EntityBlock, $GameMasterBlock {
        static canAttach(info: $StructureTemplate$StructureBlockInfo_, info2: $StructureTemplate$StructureBlockInfo_): boolean;
        codec(): $MapCodec<$JigsawBlock>;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        /**
         * This represents the face that the puzzle piece is on. To connect: 2 jigsaws must have their puzzle piece face facing each other.
         */
        static getTopFacing(state: $BlockState_): $Direction;
        /**
         * This represents the face that the puzzle piece is on. To connect: 2 jigsaws must have their puzzle piece face facing each other.
         */
        static getFrontFacing(state: $BlockState_): $Direction;
        getListener<T extends $BlockEntity>(level: $ServerLevel, blockEntity: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$JigsawBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static ORIENTATION: $EnumProperty<$FrontAndTop>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $EndGatewayBlock extends $BaseEntityBlock implements $Portal {
        getPortalDestination(level: $ServerLevel, entity: $Entity, pos: $BlockPos_): $DimensionTransition;
        codec(): $MapCodec<$EndGatewayBlock>;
        getLocalTransition(): $Portal$Transition;
        getPortalTransitionTime(level: $ServerLevel, entity: $Entity): number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EndGatewayBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get localTransition(): $Portal$Transition;
    }
    export class $SoulSandBlock extends $Block {
        codec(): $MapCodec<$SoulSandBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SoulSandBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ShulkerBoxBlock extends $BaseEntityBlock {
        static getColoredItemStack(color: $DyeColor_ | null): $ItemStack;
        getColor(): $DyeColor;
        codec(): $MapCodec<$ShulkerBoxBlock>;
        static getColorFromBlock(block: $Block_): $DyeColor;
        static getColorFromItem(item: $Item_): $DyeColor;
        static getBlockByColor(color: $DyeColor_ | null): $Block;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ShulkerBoxBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static CONTENTS: $ResourceLocation;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $EnumProperty<$Direction>;
        constructor(color: $DyeColor_ | null, properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
    }
    export class $SpongeBlock extends $Block {
        codec(): $MapCodec<$SpongeBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SpongeBlock>;
        static MAX_COUNT: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MAX_DEPTH: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BeaconBeamBlock {
    }
    export interface $BeaconBeamBlock {
        getColor(): $DyeColor;
        get color(): $DyeColor;
    }
    /**
     * Values that may be interpreted as {@link $BeaconBeamBlock}.
     */
    export type $BeaconBeamBlock_ = (() => $DyeColor_);
    export class $StairBlock extends $Block implements $SimpleWaterloggedBlock {
        static isStairs(state: $BlockState_): boolean;
        codec(): $MapCodec<$StairBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(baseState: $BlockState_, properties: $BlockBehaviour$Properties);
    }
    export class $BeaconBlock extends $BaseEntityBlock implements $BeaconBeamBlock {
        getColor(): $DyeColor;
        codec(): $MapCodec<$BeaconBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BeaconBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
    }
    export class $SlabBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$SlabBlock>;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SlabBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static TYPE: $EnumProperty<$SlabType>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopperBulbBlock extends $CopperBulbBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperBulbBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $SmallDripleafBlock extends $DoublePlantBlock implements $BonemealableBlock, $SimpleWaterloggedBlock {
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SmallDripleafBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $WeatheringCopperStairBlock extends $StairBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperStairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(weatherState: $WeatheringCopper$WeatherState_, baseState: $BlockState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $CoralFanBlock extends $BaseCoralFanBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CoralFanBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(deadBlock: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $CaveVinesBlock extends $GrowingPlantHeadBlock implements $BonemealableBlock, $CaveVines {
        codec(): $MapCodec<$CaveVinesBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CaveVinesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $StructureVoidBlock extends $Block {
        codec(): $MapCodec<$StructureVoidBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StructureVoidBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WallSignBlock extends $SignBlock {
        codec(): $MapCodec<$WallSignBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $VineBlock extends $Block implements $IShearable {
        static getPropertyForFace(face: $Direction_): $BooleanProperty;
        static isAcceptableNeighbour(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        codec(): $MapCodec<$VineBlock>;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        /**
         * Spawns the given stack into the Level at the given position, respecting the doTileDrops gamerule
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$VineBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static PROPERTY_BY_DIRECTION: $Map<$Direction, $BooleanProperty>;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UP: $BooleanProperty;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CoralWallFanBlock extends $BaseCoralWallFanBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CoralWallFanBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(deadBlock: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $EnderChestBlock extends $AbstractChestBlock<$EnderChestBlockEntity> implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$EnderChestBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EnderChestBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $GlazedTerracottaBlock extends $HorizontalDirectionalBlock {
        codec(): $MapCodec<$GlazedTerracottaBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$GlazedTerracottaBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CrafterBlock extends $BaseEntityBlock {
        static getPotentialResults(level: $Level_, input: $CraftingInput): ($RecipeHolder<$CraftingRecipe>) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CrafterBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static CRAFTING: $BooleanProperty;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static TRIGGERED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DoubleBlockCombiner$BlockType extends $Enum<$DoubleBlockCombiner$BlockType> {
        static values(): $DoubleBlockCombiner$BlockType[];
        static valueOf(arg0: string): $DoubleBlockCombiner$BlockType;
        static SINGLE: $DoubleBlockCombiner$BlockType;
        static SECOND: $DoubleBlockCombiner$BlockType;
        static FIRST: $DoubleBlockCombiner$BlockType;
    }
    /**
     * Values that may be interpreted as {@link $DoubleBlockCombiner$BlockType}.
     */
    export type $DoubleBlockCombiner$BlockType_ = "single" | "first" | "second";
    export class $TrappedChestBlock extends $ChestBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TrappedChestBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static EVENT_SET_OPEN_COUNT: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$ChestType>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $EntityBlock {
    }
    export interface $EntityBlock {
        getListener<T extends $BlockEntity>(level: $ServerLevel, blockEntity: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $EntityBlock}.
     */
    export type $EntityBlock_ = ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity);
    export class $Fallable {
    }
    export interface $Fallable {
        onLand(level: $Level_, pos: $BlockPos_, state: $BlockState_, replaceableState: $BlockState_, fallingBlock: $FallingBlockEntity): void;
        getFallDamageSource(entity: $Entity): $DamageSource;
        onBrokenAfterFall(level: $Level_, pos: $BlockPos_, fallingBlock: $FallingBlockEntity): void;
    }
    export class $CherryLeavesBlock extends $LeavesBlock {
        static UPDATE_IMMEDIATE: number;
        static DISTANCE: $IntegerProperty;
        static PERSISTENT: $BooleanProperty;
        static CODEC: $MapCodec<$CherryLeavesBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static DECAY_DISTANCE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $EndPortalBlock extends $BaseEntityBlock implements $Portal {
        getPortalDestination(level: $ServerLevel, entity: $Entity, pos: $BlockPos_): $DimensionTransition;
        codec(): $MapCodec<$EndPortalBlock>;
        getLocalTransition(): $Portal$Transition;
        getPortalTransitionTime(level: $ServerLevel, entity: $Entity): number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EndPortalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get localTransition(): $Portal$Transition;
    }
    export class $RedstoneTorchBlock extends $BaseTorchBlock {
        codec(): $MapCodec<$RedstoneTorchBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RedstoneTorchBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static RESTART_DELAY: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static MAX_RECENT_TOGGLES: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static RECENT_TOGGLE_TIMER: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $Portal$Transition extends $Enum<$Portal$Transition> {
        static values(): $Portal$Transition[];
        static valueOf(arg0: string): $Portal$Transition;
        static CONFUSION: $Portal$Transition;
        static NONE: $Portal$Transition;
    }
    /**
     * Values that may be interpreted as {@link $Portal$Transition}.
     */
    export type $Portal$Transition_ = "confusion" | "none";
    export class $FarmBlock extends $Block {
        codec(): $MapCodec<$FarmBlock>;
        static turnToDirt(entity: $Entity | null, state: $BlockState_, level: $Level_, pos: $BlockPos_): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FarmBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static MAX_MOISTURE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static MOISTURE: $IntegerProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $HeavyCoreBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$HeavyCoreBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HeavyCoreBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SculkVeinBlock extends $MultifaceBlock implements $SculkBehaviour, $SimpleWaterloggedBlock {
        getSameSpaceSpreader(): $MultifaceSpreader;
        static regrow(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, directions: $Collection_<$Direction_>): boolean;
        codec(): $MapCodec<$SculkVeinBlock>;
        onDischarged(level: $LevelAccessor, state: $BlockState_, pos: $BlockPos_, random: $RandomSource): void;
        attemptUseCharge(cursor: $SculkSpreader$ChargeCursor, level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, spreader: $SculkSpreader, shouldConvertBlocks: boolean): number;
        static hasSubstrateAccess(level: $LevelAccessor, state: $BlockState_, pos: $BlockPos_): boolean;
        getSculkSpreadDelay(): number;
        canChangeBlockStateOnSpread(): boolean;
        attemptSpreadVein(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, directions: $Collection_<$Direction_> | null, markForPostprocessing: boolean): boolean;
        updateDecayDelay(currentDecayDelay: number): number;
        depositCharge(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SculkVeinBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get sameSpaceSpreader(): $MultifaceSpreader;
        get sculkSpreadDelay(): number;
    }
    export class $SlimeBlock extends $HalfTransparentBlock {
        codec(): $MapCodec<$SlimeBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SlimeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MangrovePropaguleBlock extends $SaplingBlock implements $SimpleWaterloggedBlock {
        static createNewHangingPropagule(age: number): $BlockState;
        /**
         * Gets the default state for this block
         */
        static createNewHangingPropagule(): $BlockState;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MangrovePropaguleBlock>;
        static STAGE: $IntegerProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static HANGING: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        treeGrower: $TreeGrower;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(treeGrower: $TreeGrower, properties: $BlockBehaviour$Properties);
    }
    export class $SnowLayerBlock extends $Block {
        codec(): $MapCodec<$SnowLayerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SnowLayerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static LAYERS: $IntegerProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static MAX_HEIGHT: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static HEIGHT_IMPASSABLE: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $StemBlock extends $BushBlock implements $BonemealableBlock {
        codec(): $MapCodec<$StemBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StemBlock>;
        fruit: $ResourceKey<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(fruit: $ResourceKey_<$Block>, attachedStem: $ResourceKey_<$Block>, seed: $ResourceKey_<$Item>, properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $AmethystBlock extends $Block {
        codec(): $MapCodec<$AmethystBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AmethystBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LecternBlock extends $BaseEntityBlock {
        static tryPlaceBook(entity: $LivingEntity | null, level: $Level_, pos: $BlockPos_, state: $BlockState_, stack: $ItemStack_): boolean;
        static signalPageChange(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        static resetBookState(entity: $Entity | null, level: $Level_, pos: $BlockPos_, state: $BlockState_, hasBook: boolean): void;
        codec(): $MapCodec<$LecternBlock>;
        static SHAPE_NORTH: $VoxelShape;
        static SHAPE_SOUTH: $VoxelShape;
        static SHAPE_BASE: $VoxelShape;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static HAS_BOOK: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static SHAPE_COMMON: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE_POST: $VoxelShape;
        static SHAPE_TOP_PLATE: $VoxelShape;
        static UPDATE_ALL: number;
        static UPDATE_KNOWN_SHAPE: number;
        static SHAPE_COLLISION: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        static SHAPE_WEST: $VoxelShape;
        static CODEC: $MapCodec<$LecternBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static SHAPE_EAST: $VoxelShape;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CakeBlock extends $Block {
        static getOutputSignal(eaten: number): number;
        codec(): $MapCodec<$CakeBlock>;
        static UPDATE_IMMEDIATE: number;
        static FULL_CAKE_SIGNAL: number;
        static CODEC: $MapCodec<$CakeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MAX_BITES: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static BITES: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BaseCoralPlantBlock extends $BaseCoralPlantTypeBlock {
        codec(): $MapCodec<$BaseCoralPlantBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BaseCoralPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $MudBlock extends $Block {
        codec(): $MapCodec<$MudBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MudBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $ScaffoldingBlock extends $Block implements $SimpleWaterloggedBlock {
        static getDistance(level: $BlockGetter, pos: $BlockPos_): number;
        codec(): $MapCodec<$ScaffoldingBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static DISTANCE: $IntegerProperty;
        static CODEC: $MapCodec<$ScaffoldingBlock>;
        static STABILITY_MAX_DISTANCE: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static BOTTOM: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CarpetBlock extends $Block {
        codec(): $MapCodec<$CarpetBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CarpetBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $NetherSproutsBlock extends $BushBlock {
        codec(): $MapCodec<$NetherSproutsBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NetherSproutsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $ChorusFlowerBlock extends $Block {
        getBlockSupportShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static generatePlant(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, maxHorizontalDistance: number): void;
        codec(): $MapCodec<$ChorusFlowerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ChorusFlowerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static DEAD_AGE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(plant: $Block_, properties: $BlockBehaviour$Properties);
    }
    export class $NyliumBlock extends $Block implements $BonemealableBlock {
        getType(): $BonemealableBlock$Type;
        codec(): $MapCodec<$NyliumBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NyliumBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $CandleBlock extends $AbstractCandleBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$CandleBlock>;
        static canLight(state: $BlockState_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static LIGHT_PER_CANDLE: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CandleBlock>;
        static MIN_CANDLES: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static CANDLES: $IntegerProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIGHT_EMISSION: $ToIntFunction<$BlockState>;
        static MAX_CANDLES: number;
        static LIT: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopper {
        static getFirst(state: $BlockState_): $BlockState;
        static getFirst(block: $Block_): $Block;
        static getNext(block: $Block_): ($Block) | undefined;
        static getPrevious(block: $Block_): ($Block) | undefined;
        static getPrevious(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @deprecated
         */
        static NEXT_BY_BLOCK: $Supplier<$BiMap<$Block, $Block>>;
        /**
         * @deprecated
         */
        static PREVIOUS_BY_BLOCK: $Supplier<$BiMap<$Block, $Block>>;
    }
    export interface $WeatheringCopper extends $ChangeOverTimeBlock<$WeatheringCopper$WeatherState> {
        getNext(state: $BlockState_): ($BlockState) | undefined;
        getChanceModifier(): number;
        get chanceModifier(): number;
    }
    /**
     * Values that may be interpreted as {@link $WeatheringCopper}.
     */
    export type $WeatheringCopper_ = (() => void);
    export class $ButtonBlock extends $FaceAttachedHorizontalDirectionalBlock {
        codec(): $MapCodec<$ButtonBlock>;
        playSound(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, hitByArrow: boolean): void;
        press(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player | null): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ButtonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        type: $BlockSetType;
        ticksToStayPressed: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        constructor(type: $BlockSetType_, ticksToStayPressed: number, properties: $BlockBehaviour$Properties);
    }
    export class $CommandBlock extends $BaseEntityBlock implements $GameMasterBlock {
        codec(): $MapCodec<$CommandBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CommandBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static CONDITIONAL: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(automatic: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $CartographyTableBlock extends $Block {
        codec(): $MapCodec<$CartographyTableBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CartographyTableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $GrassBlock extends $SpreadingSnowyDirtBlock implements $BonemealableBlock {
        getType(): $BonemealableBlock$Type;
        codec(): $MapCodec<$GrassBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        static SNOWY: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$GrassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $Block extends $BlockBehaviour implements $ItemLike, $IBlockExtension, $InjectedBlockExtension, $BlockKJS {
        getName(): $MutableComponent;
        static getId(state: $BlockState_ | null): number;
        /**
         * Called after this block has been removed by a player.
         */
        destroy(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        static box(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number): $VoxelShape;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientBlockExtensions>): void;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Block>;
        getStateForPlacement(context: $BlockPlaceContext): $BlockState;
        /**
         * @deprecated
         * @return how much this block resists an explosion
         */
        getExplosionResistance(): number;
        static isExceptionForConnection(state: $BlockState_): boolean;
        /**
         * @return whether the given position has a rigid top face
         */
        static canSupportRigidBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        isPossibleToRespawnInThis(state: $BlockState_): boolean;
        handlePrecipitation(state: $BlockState_, level: $Level_, pos: $BlockPos_, precipitation: $Biome$Precipitation_): void;
        setBlockBuilder(b: $BlockBuilder): void;
        getBlockBuilder(): $BlockBuilder;
        static popResourceFromFace(level: $Level_, pos: $BlockPos_, direction: $Direction_, stack: $ItemStack_): void;
        /**
         * With the provided block state, performs neighbor checks for all neighboring blocks to get an "adjusted" blockstate for placement in the world, if the current state is not valid.
         */
        static updateFromNeighbourShapes(currentState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $BlockState;
        handler$bil000$ftbultimine$onPlayerWillDestroy(level: $Level_, blockPos: $BlockPos_, blockState: $BlockState_, player: $Player, cir: $CallbackInfoReturnable<any>): void;
        getStateDefinition(): $StateDefinition<$Block, $BlockState>;
        /**
         * @return the description ID of this block, for use with language files.
         */
        getDescriptionId(): string;
        /**
         * Called periodically clientside on blocks near the player to show effects (like furnace fire particles).
         */
        animateTick(state: $BlockState_, level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * @deprecated
         */
        getCloneItemStack(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        /**
         * Called when an Entity lands on this Block.
         * This method is responsible for doing any modification on the motion of the entity that should result from the landing.
         */
        updateEntityAfterFallOn(level: $BlockGetter, entity: $Entity): void;
        hasDynamicShape(): boolean;
        /**
         * Called by BlockItem after this block has been placed.
         */
        setPlacedBy(level: $Level_, pos: $BlockPos_, state: $BlockState_, placer: $LivingEntity | null, stack: $ItemStack_): void;
        setNameKey(arg0: string): void;
        static shouldRenderFace(state: $BlockState_, level: $BlockGetter, offset: $BlockPos_, face: $Direction_, pos: $BlockPos_): boolean;
        /**
         * Called when this Block is destroyed by an Explosion
         */
        wasExploded(level: $Level_, pos: $BlockPos_, explosion: $Explosion): void;
        withPropertiesOf(state: $BlockState_): $BlockState;
        /**
         * @return whether the given position has a solid center in the given direction
         */
        static canSupportCenter(level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        static updateOrDestroy(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        /**
         * Replaces oldState with newState, possibly playing effects and creating drops. Flags are as in `BlockState, int)`.
         */
        static updateOrDestroy(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        static pushEntitiesUp(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $BlockState;
        /**
         * Called after a player has successfully harvested this block. This method will only be called if the player has used the correct tool and drops should be spawned.
         */
        playerDestroy(level: $Level_, player: $Player, pos: $BlockPos_, state: $BlockState_, blockEntity: $BlockEntity | null, tool: $ItemStack_): void;
        /**
         * @deprecated
         * @return whether this block should drop its drops when destroyed by the given explosion
         */
        dropFromExplosion(explosion: $Explosion): boolean;
        playerWillDestroy(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player): $BlockState;
        appendHoverText(stack: $ItemStack_, context: $Item$TooltipContext, tooltipComponents: $List_<$Component_>, tooltipFlag: $TooltipFlag): void;
        /**
         * @return whether the provided `VoxelShape` is a full block (1x1x1)
         */
        static isShapeFullBlock(shape: $VoxelShape): boolean;
        static popResource(itemStack: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        /**
         * Spawns the given amount of experience into the Level as experience orb entities.
         */
        popExperience(level: $ServerLevel, pos: $BlockPos_, amount: number): void;
        /**
         * Gets the default state for this block
         */
        defaultBlockState(): $BlockState;
        /**
         * @return how much this block resists an explosion
         */
        getFriction(): number;
        static dropResources(state: $BlockState_, level: $Level_, pos: $BlockPos_): void;
        static dropResources(state: $BlockState_, level: $Level_, pos: $BlockPos_, blockEntity: $BlockEntity | null, entity: $Entity | null, tool: $ItemStack_): void;
        static dropResources(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, blockEntity: $BlockEntity | null): void;
        /**
         * @return how much this block resists an explosion
         */
        getJumpFactor(): number;
        /**
         * @return how much this block resists an explosion
         */
        getSpeedFactor(): number;
        static stateById(id: number): $BlockState;
        static byItem(item: $Item_ | null): $Block;
        static getDrops(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, blockEntity: $BlockEntity | null): $List<$ItemStack>;
        static getDrops(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, blockEntity: $BlockEntity | null, entity: $Entity | null, tool: $ItemStack_): $List<$ItemStack>;
        static isFaceFull(shape: $VoxelShape, face: $Direction_): boolean;
        stepOn(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity): void;
        fallOn(level: $Level_, state: $BlockState_, pos: $BlockPos_, entity: $Entity, fallDistance: number): void;
        isEmpty(state: $BlockState_): boolean;
        rotate(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Rotation_): $BlockState;
        getAdjacentBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        hasDynamicLightEmission(state: $BlockState_): boolean;
        supportsExternalFaceHiding(state: $BlockState_): boolean;
        onDestroyedByPushReaction(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $FluidState): void;
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        onDestroyedByPlayer(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: boolean, arg5: $FluidState): boolean;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getToolModifiedState(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        canDropFromExplosion(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): boolean;
        getBubbleColumnDirection(arg0: $BlockState_): $BubbleColumnDirection;
        getStateAtViewpoint(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Vec3_): $BlockState;
        getBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob): $PathType;
        getCloneItemStack(arg0: $BlockState_, arg1: $HitResult, arg2: $LevelReader, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        collisionExtendsVertically(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getPistonPushReaction(arg0: $BlockState_): $PushReaction;
        ignitedByLava(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        /**
         * Returns the signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getFlammability(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isPortalFrame(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns the signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getFireSpreadSpeed(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isConduitFrame(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        canConnectRedstone(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        canBeHydrated(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $FluidState, arg4: $BlockPos_): boolean;
        isStickyBlock(state: $BlockState_): boolean;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        onCaughtFire(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $LivingEntity): void;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        onBlockExploded(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Explosion): void;
        getRespawnPosition(arg0: $BlockState_, arg1: $EntityType_<never>, arg2: $LevelReader, arg3: $BlockPos_, arg4: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        canHarvestBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Player): boolean;
        isSlimeBlock(state: $BlockState_): boolean;
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        isScaffolding(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        setBedOccupied(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $LivingEntity, arg4: boolean): void;
        getBedDirection(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): $Direction;
        isBed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getLightEmission(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        onNeighborChange(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): void;
        getWeakChanges(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        shouldHideAdjacentFluidFace(arg0: $BlockState_, arg1: $Direction_, arg2: $FluidState): boolean;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        isBurning(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        onTreeGrow(arg0: $BlockState_, arg1: $LevelReader, arg2: $BiConsumer_<$BlockPos, $BlockState>, arg3: $RandomSource, arg4: $BlockPos_, arg5: $TreeConfiguration): boolean;
        isLadder(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getExpDrop(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockEntity, arg4: $Entity, arg5: $ItemStack_): number;
        isFertile(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        canStickTo(arg0: $BlockState_, arg1: $BlockState_): boolean;
        shouldCheckWeakPower(arg0: $BlockState_, arg1: $SignalGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        arch$holder(): $Holder<$Block>;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlockStates(): $List<$BlockState>;
        arch$registryName(): $ResourceLocation;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get name(): $MutableComponent;
        get descriptionId(): string;
        set nameKey(value: string);
        get jumpFactor(): number;
        get speedFactor(): number;
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        get blockStates(): $List<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $Block}.
     */
    export type $Block_ = RegistryTypes.Block;
    export class $AbstractSkullBlock extends $BaseEntityBlock implements $Equipable {
        getType(): $SkullBlock$Type;
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipSound(): $Holder<$SoundEvent>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $SkullBlock$Type_, properties: $BlockBehaviour$Properties);
        get type(): $SkullBlock$Type;
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $MultifaceSpreader$DefaultSpreaderConfig implements $MultifaceSpreader$SpreadConfig {
        getStateForPlacement(currentState: $BlockState_, level: $BlockGetter, pos: $BlockPos_, lookingDirection: $Direction_): $BlockState;
        canSpreadInto(level: $BlockGetter, pos: $BlockPos_, spreadPos: $MultifaceSpreader$SpreadPos_): boolean;
        canSpreadFrom(state: $BlockState_, direction: $Direction_): boolean;
        getSpreadTypes(): $MultifaceSpreader$SpreadType[];
        hasFace(state: $BlockState_, direction: $Direction_): boolean;
        isOtherBlockValidAsSource(otherBlock: $BlockState_): boolean;
        placeBlock(level: $LevelAccessor, pos: $MultifaceSpreader$SpreadPos_, state: $BlockState_, markForPostprocessing: boolean): boolean;
        constructor(block: $MultifaceBlock);
        get spreadTypes(): $MultifaceSpreader$SpreadType[];
    }
    export class $RedstoneWallTorchBlock extends $RedstoneTorchBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RedstoneWallTorchBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static RESTART_DELAY: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static MAX_RECENT_TOGGLES: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static RECENT_TOGGLE_TIMER: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $DropExperienceBlock extends $Block {
        codec(): $MapCodec<$DropExperienceBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DropExperienceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(xpRange: $IntProvider_, properties: $BlockBehaviour$Properties);
    }
    export class $GameMasterBlock {
    }
    export interface $GameMasterBlock {
    }
    export class $SnifferEggBlock extends $Block {
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getHatchLevel(state: $BlockState_): number;
        static hatchBoost(level: $BlockGetter, pos: $BlockPos_): boolean;
        isPathfindable(state: $BlockState_, pathComputationType: $PathComputationType_): boolean;
        codec(): $MapCodec<$SnifferEggBlock>;
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SnifferEggBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MAX_HATCH_LEVEL: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static HATCH: $IntegerProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $NoteBlock extends $Block {
        static getPitchFromNote(note: number): number;
        codec(): $MapCodec<$NoteBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NoteBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static NOTE_VOLUME: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static INSTRUMENT: $EnumProperty<$NoteBlockInstrument>;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static NOTE: $IntegerProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SignBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        type(): $WoodType;
        static getWoodType(block: $Block_): $WoodType;
        getSignHitboxCenterPosition(state: $BlockState_): $Vec3;
        openTextEdit(player: $Player, signEntity: $SignBlockEntity, isFrontText: boolean): void;
        getYRotationDegrees(state: $BlockState_): number;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $AzaleaBlock extends $BushBlock implements $BonemealableBlock {
        codec(): $MapCodec<$AzaleaBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AzaleaBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $RenderShape extends $Enum<$RenderShape> {
        static values(): $RenderShape[];
        static valueOf(arg0: string): $RenderShape;
        static INVISIBLE: $RenderShape;
        static MODEL: $RenderShape;
        static ENTITYBLOCK_ANIMATED: $RenderShape;
    }
    /**
     * Values that may be interpreted as {@link $RenderShape}.
     */
    export type $RenderShape_ = "invisible" | "entityblock_animated" | "model";
    export class $PitcherCropBlock extends $DoublePlantBlock implements $BonemealableBlock {
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        canBeReplaced(state: $BlockState_, useContext: $BlockPlaceContext): boolean;
        /**
         * Update the provided state given the provided neighbor direction and neighbor state, returning a new state.
         * For example, fences make their connections to the passed in state if possible, and wet concrete powder immediately returns its solidified counterpart.
         * Note that this method should ideally consider only the specific direction passed in.
         */
        updateShape(state: $BlockState_, facing: $Direction_, facingState: $BlockState_, level: $LevelAccessor, currentPos: $BlockPos_, facingPos: $BlockPos_): $BlockState;
        isRandomlyTicking(state: $BlockState_): boolean;
        canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        getCollisionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        /**
         * Performs a random tick on a block.
         */
        randomTick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PitcherCropBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $WeightedPressurePlateBlock extends $BasePressurePlateBlock {
        codec(): $MapCodec<$WeightedPressurePlateBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeightedPressurePlateBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(maxWeight: number, type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $IceBlock extends $HalfTransparentBlock {
        /**
         * Gets the default state for this block
         */
        static meltsInto(): $BlockState;
        codec(): $MapCodec<$IceBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$IceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PumpkinBlock extends $Block {
        codec(): $MapCodec<$PumpkinBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PumpkinBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $FenceGateBlock extends $HorizontalDirectionalBlock {
        static connectsToDirection(state: $BlockState_, direction: $Direction_): boolean;
        codec(): $MapCodec<$FenceGateBlock>;
        static IN_WALL: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FenceGateBlock>;
        closeSound: $SoundEvent;
        openSound: $SoundEvent;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $SoundEvent_, arg2: $SoundEvent_);
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
        constructor(arg0: ($WoodType_) | undefined, arg1: $BlockBehaviour$Properties, arg2: ($SoundEvent_) | undefined, arg3: ($SoundEvent_) | undefined);
    }
    export class $LoomBlock extends $HorizontalDirectionalBlock {
        codec(): $MapCodec<$LoomBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LoomBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PinkPetalsBlock extends $BushBlock implements $BonemealableBlock {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        codec(): $MapCodec<$PinkPetalsBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        static MIN_FLOWERS: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PinkPetalsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static AMOUNT: $IntegerProperty;
        static MAX_FLOWERS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $ChestBlock extends $AbstractChestBlock<$ChestBlockEntity> implements $SimpleWaterloggedBlock {
        static getContainer(chest: $ChestBlock, state: $BlockState_, level: $Level_, pos: $BlockPos_, override: boolean): $Container;
        static getBlockType(state: $BlockState_): $DoubleBlockCombiner$BlockType;
        static isChestBlockedAt(level: $LevelAccessor, pos: $BlockPos_): boolean;
        static opennessCombiner(lid: $LidBlockEntity_): $DoubleBlockCombiner$Combiner<$ChestBlockEntity, $Float2FloatFunction>;
        codec(): $MapCodec<$ChestBlock>;
        /**
         * @return the Direction pointing from the given state to its attached double chest
         */
        static getConnectedDirection(state: $BlockState_): $Direction;
        blockEntityType(): $BlockEntityType<$ChestBlockEntity>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ChestBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static EVENT_SET_OPEN_COUNT: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$ChestType>;
        constructor(properties: $BlockBehaviour$Properties, blockEntityType: $Supplier_<$BlockEntityType<$ChestBlockEntity>>);
    }
    export class $HalfTransparentBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HalfTransparentBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WaterloggedTransparentBlock extends $TransparentBlock implements $SimpleWaterloggedBlock {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WaterloggedTransparentBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $DirtPathBlock extends $Block {
        codec(): $MapCodec<$DirtPathBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DirtPathBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $GrowingPlantHeadBlock extends $GrowingPlantBlock implements $BonemealableBlock {
        getMaxAgeState(state: $BlockState_): $BlockState;
        isMaxAge(state: $BlockState_): boolean;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        get type(): $BonemealableBlock$Type;
    }
    export class $CryingObsidianBlock extends $Block {
        codec(): $MapCodec<$CryingObsidianBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CryingObsidianBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LightBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$LightBlock>;
        static setLightOnStack(stack: $ItemStack_, light: number): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LightBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static LIGHT_EMISSION: $ToIntFunction<$BlockState>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static MAX_LEVEL: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CauldronBlock extends $AbstractCauldronBlock {
        codec(): $MapCodec<$CauldronBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CauldronBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $NetherWartBlock extends $BushBlock {
        codec(): $MapCodec<$NetherWartBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NetherWartBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static MAX_AGE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BlockTypes {
        static bootstrap(registry: $Registry<$MapCodec_<$Block_>>): $MapCodec<$Block>;
        static CODEC: $MapCodec<$Block>;
        constructor();
    }
    export class $SmokerBlock extends $AbstractFurnaceBlock {
        codec(): $MapCodec<$SmokerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SmokerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SpawnerBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$SpawnerBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SpawnerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $TripWireHookBlock extends $Block {
        static calculateState(level: $Level_, pos: $BlockPos_, hookState: $BlockState_, attaching: boolean, shouldNotifyNeighbours: boolean, searchRange: number, state: $BlockState_ | null): void;
        codec(): $MapCodec<$TripWireHookBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TripWireHookBlock>;
        static ATTACHED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SculkVeinBlock$SculkVeinSpreaderConfig extends $MultifaceSpreader$DefaultSpreaderConfig {
    }
    export class $IronBarsBlock extends $CrossCollisionBlock {
        codec(): $MapCodec<$IronBarsBlock>;
        attachsTo(state: $BlockState_, solidSide: boolean): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$IronBarsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CarvedPumpkinBlock extends $HorizontalDirectionalBlock {
        static clearPatternBlocks(level: $Level_, patternMatch: $BlockPattern$BlockPatternMatch): void;
        canSpawnGolem(level: $LevelReader, pos: $BlockPos_): boolean;
        static updatePatternBlocks(level: $Level_, patternMatch: $BlockPattern$BlockPatternMatch): void;
        codec(): $MapCodec<$CarvedPumpkinBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CarvedPumpkinBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SculkCatalystBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$SculkCatalystBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SculkCatalystBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static PULSE: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LadderBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$LadderBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LadderBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $LiquidBlock extends $Block implements $BucketPickup, $LiquidBlockAccessor, $InjectedLiquidBlockExtension {
        getPickupSound(): ($SoundEvent) | undefined;
        codec(): $MapCodec<$LiquidBlock>;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        arch$getFluid(): $FlowingFluid;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        getFluid(): $FlowingFluid;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LiquidBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POSSIBLE_FLOW_DIRECTIONS: $ImmutableList<$Direction>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static STABLE_SHAPE: $VoxelShape;
        fluid: $FlowingFluid;
        static UPDATE_CLIENTS: number;
        constructor(fluid: $FlowingFluid, properties: $BlockBehaviour$Properties);
    }
    export class $RedstoneTorchBlock$Toggle {
        constructor(pos: $BlockPos_, when: number);
    }
    export class $LavaCauldronBlock extends $AbstractCauldronBlock {
        codec(): $MapCodec<$LavaCauldronBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LavaCauldronBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $StructureBlock extends $BaseEntityBlock implements $GameMasterBlock {
        codec(): $MapCodec<$StructureBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StructureBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MODE: $EnumProperty<$StructureMode>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BarrelBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$BarrelBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BarrelBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PointedDripstoneBlock extends $Block implements $Fallable, $SimpleWaterloggedBlock {
        static getCauldronFillFluidType(level: $ServerLevel, pos: $BlockPos_): $Fluid;
        static canDrip(state: $BlockState_): boolean;
        codec(): $MapCodec<$PointedDripstoneBlock>;
        static findStalactiteTipAboveCauldron(level: $Level_, pos: $BlockPos_): $BlockPos;
        getFallDamageSource(entity: $Entity): $DamageSource;
        onBrokenAfterFall(level: $Level_, pos: $BlockPos_, fallingBlock: $FallingBlockEntity): void;
        static spawnDripParticle(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        static maybeTransferFluid(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, randChance: number): void;
        static growStalactiteOrStalagmiteIfPossible(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        onLand(level: $Level_, pos: $BlockPos_, state: $BlockState_, replaceableState: $BlockState_, fallingBlock: $FallingBlockEntity): void;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PointedDripstoneBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static LAVA_TRANSFER_PROBABILITY_PER_RANDOM_TICK: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static TIP_DIRECTION: $DirectionProperty;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static WATER_TRANSFER_PROBABILITY_PER_RANDOM_TICK: number;
        static UPDATE_CLIENTS: number;
        static THICKNESS: $EnumProperty<$DripstoneThickness>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FletchingTableBlock extends $CraftingTableBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FletchingTableBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $AnvilBlock extends $FallingBlock {
        static damage(state: $BlockState_): $BlockState;
        codec(): $MapCodec<$AnvilBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AnvilBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $CaveVines {
        static use(entity: $Entity | null, state: $BlockState_, level: $Level_, pos: $BlockPos_): $InteractionResult;
        static emission(berries: number): $ToIntFunction<$BlockState>;
        static hasGlowBerries(state: $BlockState_): boolean;
        static SHAPE: $VoxelShape;
        static BERRIES: $BooleanProperty;
    }
    export interface $CaveVines {
    }
    export class $AbstractCandleBlock extends $Block {
        static isLit(state: $BlockState_): boolean;
        static extinguish(player: $Player | null, state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static LIT: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static LIGHT_PER_CANDLE: number;
    }
    export class $NetherPortalBlock extends $Block implements $Portal {
        getLocalTransition(): $Portal$Transition;
        getPortalDestination(level: $ServerLevel, entity: $Entity, pos: $BlockPos_): $DimensionTransition;
        getPortalTransitionTime(level: $ServerLevel, entity: $Entity): number;
        codec(): $MapCodec<$NetherPortalBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$NetherPortalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(properties: $BlockBehaviour$Properties);
        get localTransition(): $Portal$Transition;
    }
    export class $WebBlock extends $Block implements $IShearable {
        codec(): $MapCodec<$WebBlock>;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        /**
         * Spawns the given stack into the Level at the given position, respecting the doTileDrops gamerule
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WebBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BonemealableBlock$Type extends $Enum<$BonemealableBlock$Type> {
        static values(): $BonemealableBlock$Type[];
        static valueOf(arg0: string): $BonemealableBlock$Type;
        static GROWER: $BonemealableBlock$Type;
        static NEIGHBOR_SPREADER: $BonemealableBlock$Type;
    }
    /**
     * Values that may be interpreted as {@link $BonemealableBlock$Type}.
     */
    export type $BonemealableBlock$Type_ = "neighbor_spreader" | "grower";
    export class $JukeboxBlock extends $BaseEntityBlock {
        /**
         * Returns the signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        codec(): $MapCodec<$JukeboxBlock>;
        isSignalSource(state: $BlockState_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$JukeboxBlock>;
        static HAS_RECORD: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $GrindstoneBlock extends $FaceAttachedHorizontalDirectionalBlock {
        codec(): $MapCodec<$GrindstoneBlock>;
        static FLOOR_EAST_WEST_GRINDSTONE: $VoxelShape;
        static WALL_WEST_LEFT_POST: $VoxelShape;
        static WALL_NORTH_RIGHT_POST: $VoxelShape;
        static CEILING_EAST_WEST_RIGHT_LEG: $VoxelShape;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static WALL_WEST_RIGHT_POST: $VoxelShape;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static FLOOR_NORTH_SOUTH_LEFT_LEG: $VoxelShape;
        static CEILING_NORTH_SOUTH_LEFT_PIVOT: $VoxelShape;
        static CEILING_NORTH_SOUTH_GRINDSTONE: $VoxelShape;
        static UPDATE_LIMIT: number;
        static WALL_SOUTH_LEFT_POST: $VoxelShape;
        static WALL_SOUTH_ALL_LEGS: $VoxelShape;
        static FLOOR_EAST_WEST_LEFT_POST: $VoxelShape;
        static UPDATE_KNOWN_SHAPE: number;
        static WALL_SOUTH_GRINDSTONE: $VoxelShape;
        static FLOOR_EAST_WEST_LEFT_PIVOT: $VoxelShape;
        static WALL_EAST_LEFT_POST: $VoxelShape;
        static FLOOR_EAST_WEST_RIGHT_LEG: $VoxelShape;
        static WALL_SOUTH_RIGHT_LEG: $VoxelShape;
        static CEILING_NORTH_SOUTH_RIGHT_LEG: $VoxelShape;
        static FLOOR_NORTH_SOUTH_RIGHT_PIVOT: $VoxelShape;
        static CEILING_NORTH_SOUTH_LEFT_LEG: $VoxelShape;
        static CODEC: $MapCodec<$GrindstoneBlock>;
        static WALL_NORTH_LEFT_LEG: $VoxelShape;
        static WALL_WEST_LEFT_PIVOT: $VoxelShape;
        static WALL_EAST_LEFT_LEG: $VoxelShape;
        static WALL_NORTH_GRINDSTONE: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static FLOOR_EAST_WEST_RIGHT_PIVOT: $VoxelShape;
        static WALL_SOUTH_LEFT_LEG: $VoxelShape;
        static CEILING_EAST_WEST_GRINDSTONE: $VoxelShape;
        static INSTANT: number;
        static WALL_WEST_LEFT_LEG: $VoxelShape;
        static WALL_NORTH_RIGHT_LEG: $VoxelShape;
        static WALL_EAST_RIGHT_POST: $VoxelShape;
        static FLOOR_NORTH_SOUTH_RIGHT_LEG: $VoxelShape;
        static WALL_EAST_RIGHT_PIVOT: $VoxelShape;
        static FLOOR_NORTH_SOUTH_LEFT_POST: $VoxelShape;
        static CEILING_NORTH_SOUTH_LEFT_POST: $VoxelShape;
        static CEILING_EAST_WEST_ALL_LEGS: $VoxelShape;
        static CEILING_NORTH_SOUTH_RIGHT_PIVOT: $VoxelShape;
        static WALL_SOUTH_RIGHT_POST: $VoxelShape;
        static WALL_NORTH_RIGHT_PIVOT: $VoxelShape;
        static CEILING_NORTH_SOUTH_RIGHT_POST: $VoxelShape;
        static FLOOR_NORTH_SOUTH_GRINDSTONE: $VoxelShape;
        static WALL_EAST_LEFT_PIVOT: $VoxelShape;
        static CEILING_EAST_WEST_LEFT_PIVOT: $VoxelShape;
        static CEILING_EAST_WEST_LEFT_LEG: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static WALL_EAST_RIGHT_LEG: $VoxelShape;
        static WALL_NORTH_LEFT_PIVOT: $VoxelShape;
        static CEILING_EAST_WEST_LEFT_POST: $VoxelShape;
        static UPDATE_ALL: number;
        static WALL_WEST_RIGHT_PIVOT: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        static FLOOR_EAST_WEST_LEFT_LEG: $VoxelShape;
        static CEILING_EAST_WEST_RIGHT_PIVOT: $VoxelShape;
        static FLOOR_NORTH_SOUTH_LEFT_PIVOT: $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        static CEILING_NORTH_SOUTH_ALL_LEGS: $VoxelShape;
        static WALL_WEST_RIGHT_LEG: $VoxelShape;
        static WALL_SOUTH_RIGHT_PIVOT: $VoxelShape;
        static WALL_NORTH_LEFT_POST: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static FLOOR_EAST_WEST_RIGHT_POST: $VoxelShape;
        static WALL_WEST_ALL_LEGS: $VoxelShape;
        static WALL_WEST_GRINDSTONE: $VoxelShape;
        static WALL_EAST_ALL_LEGS: $VoxelShape;
        static FLOOR_NORTH_SOUTH_RIGHT_POST: $VoxelShape;
        static WALL_SOUTH_LEFT_PIVOT: $VoxelShape;
        static FLOOR_NORTH_SOUTH_ALL_LEGS: $VoxelShape;
        static CEILING_EAST_WEST_RIGHT_POST: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static FLOOR_EAST_WEST_ALL_LEGS: $VoxelShape;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static WALL_NORTH_ALL_LEGS: $VoxelShape;
        static FACE: $EnumProperty<$AttachFace>;
        static WALL_EAST_GRINDSTONE: $VoxelShape;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RootedDirtBlock extends $Block implements $BonemealableBlock {
        codec(): $MapCodec<$RootedDirtBlock>;
        isValidBonemealTarget(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        performBonemeal(arg0: $ServerLevel, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): void;
        getParticlePos(arg0: $BlockPos_): $BlockPos;
        isBonemealSuccess(arg0: $Level_, arg1: $RandomSource, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RootedDirtBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $DetectorRailBlock extends $BaseRailBlock {
        codec(): $MapCodec<$DetectorRailBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DetectorRailBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$RailShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BarrierBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$BarrierBlock>;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BarrierBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $GrowingPlantBodyBlock extends $GrowingPlantBlock implements $BonemealableBlock {
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        get type(): $BonemealableBlock$Type;
    }
    export class $BasePressurePlateBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $AmethystClusterBlock extends $AmethystBlock implements $SimpleWaterloggedBlock {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$AmethystClusterBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(height: number, aabbOffset: number, properties: $BlockBehaviour$Properties);
    }
    export class $HoneyBlock extends $HalfTransparentBlock {
        static showJumpParticles(entity: $Entity): void;
        codec(): $MapCodec<$HoneyBlock>;
        static showSlideParticles(entity: $Entity): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HoneyBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $Mirror extends $Enum<$Mirror> implements $StringRepresentable {
        static values(): $Mirror[];
        static valueOf(arg0: string): $Mirror;
        symbol(): $Component;
        /**
         * Determines the rotation that is equivalent to this mirror if the rotating object faces in the given direction
         */
        getRotation(facing: $Direction_): $Rotation;
        /**
         * Mirror the given facing according to this mirror
         */
        mirror(facing: $Direction_): $Direction;
        /**
         * Mirrors the given rotation like specified by this mirror. Rotations start at 0 and go up to rotationCount-1. 0 is front, rotationCount/2 is back.
         */
        mirror(rotation: number, rotationCount: number): number;
        getSerializedName(): string;
        rotation(): $OctahedralGroup;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Mirror>;
        static FRONT_BACK: $Mirror;
        static LEFT_RIGHT: $Mirror;
        static NONE: $Mirror;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Mirror}.
     */
    export type $Mirror_ = "none" | "left_right" | "front_back";
    export class $FungusBlock extends $BushBlock implements $BonemealableBlock {
        codec(): $MapCodec<$FungusBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FungusBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(feature: $ResourceKey_<$ConfiguredFeature<never, never>>, requiredBlock: $Block_, properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $SculkSpreader$ChargeCursor {
        getFacingData(): $Set<$Direction>;
        update(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, spreader: $SculkSpreader, shouldConvertBlocks: boolean): void;
        getPos(): $BlockPos;
        getCharge(): number;
        getDecayDelay(): number;
        static CODEC: $Codec<$SculkSpreader$ChargeCursor>;
        static MAX_CURSOR_DECAY_DELAY: number;
        constructor(pos: $BlockPos_, charge: number);
        get facingData(): $Set<$Direction>;
        get pos(): $BlockPos;
        get charge(): number;
        get decayDelay(): number;
    }
    export class $RootsBlock extends $BushBlock {
        codec(): $MapCodec<$RootsBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RootsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BigDripleafBlock extends $HorizontalDirectionalBlock implements $BonemealableBlock, $SimpleWaterloggedBlock {
        static placeWithRandomHeight(level: $LevelAccessor, random: $RandomSource, pos: $BlockPos_, direction: $Direction_): void;
        codec(): $MapCodec<$BigDripleafBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BigDripleafBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $SculkSensorBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        static getPhase(state: $BlockState_): $SculkSensorPhase;
        activate(entity: $Entity | null, level: $Level_, pos: $BlockPos_, state: $BlockState_, power: number, frequency: number): void;
        static deactivate(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        static tryResonateVibration(entity: $Entity | null, level: $Level_, pos: $BlockPos_, frequency: number): void;
        codec(): $MapCodec<$SculkSensorBlock>;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        getActiveTicks(): number;
        static canActivate(state: $BlockState_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SculkSensorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static PHASE: $EnumProperty<$SculkSensorPhase>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static ACTIVE_TICKS: number;
        static COOLDOWN_TICKS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get activeTicks(): number;
    }
    export class $PoweredBlock extends $Block {
        codec(): $MapCodec<$PoweredBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PoweredBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $AbstractCauldronBlock extends $Block {
        isFull(state: $BlockState_): boolean;
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        onRemove(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties, interactions: $CauldronInteraction$InteractionMap_);
    }
    export class $MushroomBlock extends $BushBlock implements $BonemealableBlock {
        growMushroom(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, random: $RandomSource): boolean;
        codec(): $MapCodec<$MushroomBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MushroomBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(feature: $ResourceKey_<$ConfiguredFeature<never, never>>, properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $TrapDoorBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$TrapDoorBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TrapDoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $SculkShriekerBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$SculkShriekerBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SculkShriekerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static CAN_SUMMON: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static TOP_Y: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static SHRIEKING: $BooleanProperty;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopperSlabBlock extends $SlabBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperSlabBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static TYPE: $EnumProperty<$SlabType>;
        constructor(weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $RespawnAnchorBlock extends $Block {
        static findStandUpPosition(entityType: $EntityType_<never>, level: $CollisionGetter, pos: $BlockPos_): ($Vec3) | undefined;
        static charge(entity: $Entity | null, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        static canSetSpawn(level: $Level_): boolean;
        codec(): $MapCodec<$RespawnAnchorBlock>;
        static getScaledChargeLevel(state: $BlockState_, scale: number): number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RespawnAnchorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static MIN_CHARGES: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static MAX_CHARGES: number;
        static UPDATE_CLIENTS: number;
        static CHARGE: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $BaseCoralPlantTypeBlock extends $Block implements $SimpleWaterloggedBlock {
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $HorizontalDirectionalBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
    }
    export class $TallGrassBlock extends $BushBlock implements $BonemealableBlock, $IShearable {
        codec(): $MapCodec<$TallGrassBlock>;
        isValidBonemealTarget(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): boolean;
        performBonemeal(level: $ServerLevel, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): void;
        isBonemealSuccess(level: $Level_, random: $RandomSource, pos: $BlockPos_, state: $BlockState_): boolean;
        getType(): $BonemealableBlock$Type;
        getParticlePos(pos: $BlockPos_): $BlockPos;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        /**
         * Spawns the given stack into the Level at the given position, respecting the doTileDrops gamerule
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, stack: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TallGrassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get type(): $BonemealableBlock$Type;
    }
    export class $WallHangingSignBlock extends $SignBlock {
        canAttachTo(level: $LevelReader, state: $BlockState_, pos: $BlockPos_, direction: $Direction_): boolean;
        codec(): $MapCodec<$WallHangingSignBlock>;
        canPlace(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallHangingSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SHAPE_NORTHSOUTH: $VoxelShape;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLANK_EASTWEST: $VoxelShape;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static PLANK_NORTHSOUTH: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static SHAPE_EASTWEST: $VoxelShape;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $BedBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
        static getBlockType(state: $BlockState_): $DoubleBlockCombiner$BlockType;
        static findStandUpPosition(entityType: $EntityType_<never>, collisionGetter: $CollisionGetter, pos: $BlockPos_, direction: $Direction_, yRot: number): ($Vec3) | undefined;
        getColor(): $DyeColor;
        skipRendering(state: $BlockState_, adjacentState: $BlockState_, direction: $Direction_): boolean;
        static canSetSpawn(level: $Level_): boolean;
        static getBedOrientation(level: $BlockGetter, pos: $BlockPos_): $Direction;
        codec(): $MapCodec<$BedBlock>;
        static getConnectedDirection(state: $BlockState_): $Direction;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getListener<T extends $BlockEntity>(level: $ServerLevel, blockEntity: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$BedBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static PART: $EnumProperty<$BedPart>;
        static UPDATE_KNOWN_SHAPE: number;
        static OCCUPIED: $BooleanProperty;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(color: $DyeColor_, properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
    }
    export class $HangingRootsBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$HangingRootsBlock>;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$HangingRootsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CaveVinesPlantBlock extends $GrowingPlantBodyBlock implements $BonemealableBlock, $CaveVines {
        codec(): $MapCodec<$CaveVinesPlantBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CaveVinesPlantBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $DoubleBlockCombiner$NeighborCombineResult<S> {
    }
    export interface $DoubleBlockCombiner$NeighborCombineResult<S> {
        apply<T>(combiner: $DoubleBlockCombiner$Combiner<S, T>): T;
    }
    /**
     * Values that may be interpreted as {@link $DoubleBlockCombiner$NeighborCombineResult}.
     */
    export type $DoubleBlockCombiner$NeighborCombineResult_<S> = ((arg0: $DoubleBlockCombiner$Combiner<S, any>) => any);
    export class $LiquidBlockContainer {
    }
    export interface $LiquidBlockContainer {
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
    }
    export class $DaylightDetectorBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$DaylightDetectorBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DaylightDetectorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static INVERTED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RepeaterBlock extends $DiodeBlock {
        codec(): $MapCodec<$RepeaterBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RepeaterBlock>;
        static LOCKED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static DELAY: $IntegerProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $StainedGlassBlock extends $TransparentBlock implements $BeaconBeamBlock {
        getColor(): $DyeColor;
        codec(): $MapCodec<$StainedGlassBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StainedGlassBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(dyeColor: $DyeColor_, properties: $BlockBehaviour$Properties);
        get color(): $DyeColor;
    }
    export class $ChiseledBookShelfBlock extends $BaseEntityBlock {
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        codec(): $MapCodec<$ChiseledBookShelfBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ChiseledBookShelfBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BOOKS_PER_ROW: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SLOT_OCCUPIED_PROPERTIES: $List<$BooleanProperty>;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $WeatheringCopperTrapDoorBlock extends $TrapDoorBlock implements $WeatheringCopper {
        getAge(): $WeatheringCopper$WeatherState;
        getNext(state: $BlockState_): ($BlockState) | undefined;
        /**
         * @return how much this block resists an explosion
         */
        getChanceModifier(): number;
        /**
         * Performs a random tick on a block.
         */
        changeOverTime(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getNextState(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WeatheringCopperTrapDoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, weatherState: $WeatheringCopper$WeatherState_, properties: $BlockBehaviour$Properties);
        get age(): $WeatheringCopper$WeatherState;
        get chanceModifier(): number;
    }
    export class $EndPortalFrameBlock extends $Block {
        static getOrCreatePortalShape(): $BlockPattern;
        codec(): $MapCodec<$EndPortalFrameBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$EndPortalFrameBlock>;
        static HAS_EYE: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(properties: $BlockBehaviour$Properties);
        static get orCreatePortalShape(): $BlockPattern;
    }
    export class $HugeMushroomBlock extends $Block {
        codec(): $MapCodec<$HugeMushroomBlock>;
        static UPDATE_IMMEDIATE: number;
        static DOWN: $BooleanProperty;
        static CODEC: $MapCodec<$HugeMushroomBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UP: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
}
