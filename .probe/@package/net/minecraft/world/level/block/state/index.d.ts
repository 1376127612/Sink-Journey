import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $Map$Entry, $List, $Map_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockPropertiesAccessor } from "@package/com/supermartijn642/core/mixin";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ICache } from "@package/com/ccr4ft3r/lightspeed/interfaces";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $BlockStateFTBC } from "@package/dev/ftb/mods/ftbchunks/core";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> implements $ICache {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        lightspeed$persistAndClearCache(): void;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec_<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        handler$bfo000$lightspeed$getPropertyHeadInjected(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$bfo000$lightspeed$initReturnInjected(arg0: $Function_<any, any>, arg1: $Object, arg2: $StateDefinition$Factory_<any, any>, arg3: $Map_<any, any>, arg4: $CallbackInfo): void;
        get properties(): $Collection<$Property<never>>;
        get owner(): O;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        getCollisionShape(): $VoxelShape;
        setCollisionShape(arg0: $VoxelShape): void;
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        getOcclusionShapes(): $VoxelShape[];
        setFaceSturdy(arg0: boolean[]): void;
        getFaceSturdy(): boolean[];
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $BlockBehaviourKJS, $ShapeUpdateHandlingBlockBehaviour, $BlockBehaviourAccessor {
        properties(): $BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setHasCollision(arg0: boolean): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        requiredFeatures(): $FeatureFlagSet;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setSoundType(arg0: $SoundType_): void;
        setFriction(arg0: number): void;
        setJumpFactor(arg0: number): void;
        setSpeedFactor(arg0: number): void;
        defaultMapColor(): $MapColor;
        defaultDestroyTime(): number;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        getLootTable(): $ResourceKey<$LootTable>;
        asItem(): $Item;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        invokeGetFluidState(state: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(state: $BlockState_): boolean;
        create$getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        constructor(properties: $BlockBehaviour$Properties);
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
        set hasCollision(value: boolean);
        set randomTickCallback(value: $Consumer_<any>);
        set soundType(value: $SoundType_);
        set friction(value: number);
        set jumpFactor(value: number);
        set speedFactor(value: number);
        get lootTable(): $ResourceKey<$LootTable>;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get id(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
        get mod(): string;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateFTBC {
        getFTBCIsWater(): boolean;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        hasDynamicLightEmission(): boolean;
        supportsExternalFaceHiding(): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        isStickyBlock(): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isSlimeBlock(): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        isScaffolding(arg0: $LivingEntity): boolean;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static PROPERTIES_TAG: string;
        static CODEC: $Codec<$BlockState>;
        destroySpeed: number;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get FTBCIsWater(): boolean;
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStateKJS {
        is(block: $Holder_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        initCache(): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        canBeReplaced(): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        clearCache(): void;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        useShapeForLightOcclusion(): boolean;
        setRequiresTool(arg0: boolean): void;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        setDestroySpeed(arg0: number): void;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        setLightEmission(arg0: number): void;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        getFluidState(): $FluidState;
        getRenderShape(): $RenderShape;
        hasBlockEntity(): boolean;
        handler$fcj000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$fcj000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$zkp000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        handler$flp000$electroenergetics$onRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $CallbackInfo): void;
        shouldSpawnTerrainParticles(): boolean;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        getPistonPushReaction(): $PushReaction;
        /**
         * @deprecated
         */
        liquid(): boolean;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isAir(): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        hasLargeCollisionShape(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        requiresCorrectToolForDrops(): boolean;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        isRandomlyTicking(): boolean;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        isPathfindable(arg0: $PathComputationType_): boolean;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        isSignalSource(): boolean;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        canOcclude(): boolean;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getTags(): $Stream<$TagKey<$Block>>;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        instrument(): $NoteBlockInstrument;
        handler$dod000$integrateddynamics$getDirectSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        handler$dod000$integrateddynamics$getSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        isCacheInvalid(): boolean;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        getBlockHolder(): $Holder<$Block>;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasOffsetFunction(): boolean;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        hasAnalogOutputSignal(): boolean;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getKey(): $ResourceKey<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        toString(): string;
        getWebIconURL(size: number): $RelativeURL;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        static PROPERTIES_TAG: string;
        destroySpeed: number;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get block(): $Block;
        set requiresTool(value: boolean);
        get fluidState(): $FluidState;
        get renderShape(): $RenderShape;
        get pistonPushReaction(): $PushReaction;
        get air(): boolean;
        get randomlyTicking(): boolean;
        get soundType(): $SoundType;
        get signalSource(): boolean;
        get solid(): boolean;
        get cacheInvalid(): boolean;
        get blockHolder(): $Holder<$Block>;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get id(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get mod(): string;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $BlockPropertiesAccessor {
        static of(): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        redirect$fcf000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        getStateIndex(): number;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        getStateMap(): $FastMap<any>;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        setStateMap(arg0: $FastMap<any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get properties(): $Collection<$Property<never>>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get owner(): $Object;
    }
}
