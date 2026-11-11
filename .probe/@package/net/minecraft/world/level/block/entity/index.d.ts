import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $RecipeType, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorAbstractFurnaceBlockEntity } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $FormattedCharSequence_, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CraftingContainer, $AbstractContainerMenu, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $BlockEntityAccessor } from "@package/com/extendedae_plus/mixin/minecraft/accessor";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $SkullBlockEntityInvoker } from "@package/earth/terrarium/adastra/mixins/common";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $AbstractFurnaceBlockEntityAccess, $BaseContainerBlockEntityAccess, $BlockEntityTypeAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $List_, $Set, $UUID } from "@package/java/util";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Cullable } from "@package/dev/tr7zw/entityculling/access";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $SignTextAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        setCooldown(cooldownTime: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isGridAligned(): boolean;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        getLastUpdateTime(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOnCustomCooldown(): boolean;
        getInsertInventory(arg0: $Level_): $Container;
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        getExtractBlockInventory(level: $Level_, pos: $BlockPos_, state: $BlockState_): $Container;
        getInsertBlockInventory(arg0: $Level_): $Container;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        handler$cka003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getSuckAabb(): $AABB;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        static HOPPER_CONTAINER_SIZE: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set cooldown(value: number);
        get gridAligned(): boolean;
        get lastUpdateTime(): number;
        get onCustomCooldown(): boolean;
        get levelZ(): number;
        get levelY(): number;
        get levelX(): number;
        get suckAabb(): $AABB;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $SkullBlockEntityInvoker {
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        setOwner(owner: $ResolvableProfile_ | null): void;
        getNoteBlockSound(): $ResourceLocation;
        static invokeFetchGameProfile$ad_astra_$md$796745$1(profileName: string): $CompletableFuture<any>;
        static getCheckedMainThreadExecutor$ad_astra_$md$796745$0(): $Executor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        getAnimation(partialTick: number): number;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        getOwnerProfile(): $ResolvableProfile;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get noteBlockSound(): $ResourceLocation;
        static get checkedMainThreadExecutor$ad_astra_$md$796745$0(): $Executor;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get ownerProfile(): $ResolvableProfile;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getTranslatedName(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        shouldBeOpen(shouldBeOpen: boolean): void;
        getOpenness(partialTicks: number): number;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getCustomName(): $Component;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasCustomName(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        blockState: $BlockState;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        static DATA_SECONDARY: number;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        customPersistentData: $CompoundTag;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText implements $SignTextAccessor {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        getMessages(isFiltered: boolean): $Component[];
        hasMessage(player: $Player): boolean;
        getColor(): $DyeColor;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasAnyClickCommands(player: $Player): boolean;
        hasGlowingText(): boolean;
        languagereload_setOrderedMessages(arg0: $FormattedCharSequence_[]): void;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        worldPosition: $BlockPos;
        blockState: $BlockState;
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $BlockEntityTypeAccess, $ExtendedBlockEntityType<any>, $IRenderableEntity, $BlockEntityTypeExtension<any> {
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        chloride$whitelisted(): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        neoforge$setValidBlocks(arg0: $Set_<$Block_>): void;
        getValidBlocks(): $Set<$Block>;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
        get validBlocks(): $Set<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        blockState: $BlockState;
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        level: $Level;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearContent(): void;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        dowse(): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get items(): $NonNullList<$ItemStack>;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        recheckOpen(): void;
        handler$cjm000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getColor(): number;
        getHeight(): number;
        constructor(color: number);
        get color(): number;
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        onDataChanged(): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { left?: ($Item_) | undefined, right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined,  } | [left?: ($Item_) | undefined, right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        recheckOpen(): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        handler$cjo001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getOpenNess(partialTicks: number): number;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        entityData(): $CustomData;
        ticksInHive(): number;
        minTicksInHive(): number;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number,  } | [minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $BlockEntityAccessor, $Cullable {
        getType(): $BlockEntityType<never>;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        components(): $DataComponentMap;
        setLevel(level: $Level_): void;
        getLevel(): $Level;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        collectComponents(): $DataComponentMap;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isShouldEntityAppearGlowing(): boolean;
        setShouldEntityAppearGlowing(shouldEntityAppearGlowing: boolean): void;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        getPersistentData(): $CompoundTag;
        getRenderData(): $Object;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        triggerEvent(id: number, type: number): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        setOutOfCamera(value: boolean): void;
        getEc$BoundingBox(): $AABB;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        setEc$BoundingBox(ec$BoundingBox: $AABB_): void;
        getEc$Position(): $Vec3;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        setEc$Position(ec$Position: $Vec3_): void;
        setEc$PBlockPos(ec$PBlockPos: $BlockPos_): void;
        getEc$PBlockPos(): $BlockPos;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        setCulled(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$hasAnyComparatorNearby(): boolean;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$isSupported(): boolean;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        getRenderAttachmentData(): $Object;
        setComponents(components: $DataComponentMap_): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        isValidBlockState(arg0: $BlockState_): boolean;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        lithium$handleSetChanged(): void;
        extendedae_plus$setType(arg0: $BlockEntityType_<never>): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get blockPos(): $BlockPos;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get persistentData(): $CompoundTag;
        get renderData(): $Object;
        get forcedVisible(): boolean;
        get renderAttachmentData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity {
        /**
         * @return whether this BlockEntity's level has been set
         */
        isClosed(): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        getColor(): $DyeColor;
        getBoundingBox(state: $BlockState_): $AABB;
        getProgress(partialTicks: number): number;
        getSlotsForFace(side: $Direction_): number[];
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        handler$ckb004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        static LOGGER: $Logger;
        openCount: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        customPersistentData: $CompoundTag;
        static ROWS: number;
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        getItem(): $ItemStack;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        checkReset(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        unpackLootTable(player: $Player): void;
        getHitDirection(): $Direction;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        recheckOpen(): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        getOpenNess(partialTicks: number): number;
        stillValid(player: $Player): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $BaseContainerBlockEntityAccess {
        getName(): $Component;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        getDisplayName(): $Component;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clearContent(): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        handler$cjn000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getCustomName(): $Component;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        stillValid(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        lithium$emitContentModified(): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        lithium$emitFirstComparatorAdded(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        lithium$emitStackListReplaced(): void;
        canOpen(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        lithium$emitRemoved(): void;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasCustomName(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        emitCallbackReplaced(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clear(): void;
        setTransferCooldown(arg0: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        getLockKey(): $LockCode;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        get name(): $Component;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
        get lockKey(): $LockCode;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(dataType: $Type<never>): $BlockEntityType<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        /**
         * @return whether this BlockEntity's level has been set
         */
        isAutomatic(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        getCommandBlock(): $BaseCommandBlock;
        /**
         * @return whether this BlockEntity's level has been set
         */
        wasConditionMet(): boolean;
        setAutomatic(auto: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        markConditionMet(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isConditional(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onModeSwitch(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        static PULSE_TICKS: number;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get sculkSpreader(): $SculkSpreader;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        getItems(): $NonNullList<$ItemStack>;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        fillStackedContents(contents: $StackedContents): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        setSlotState(slot: number, state: boolean): void;
        isSlotDisabled(slot: number): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isTriggered(): boolean;
        setTriggered(triggered: boolean): void;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        static CONTAINER_WIDTH: number;
        blockState: $BlockState;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get width(): number;
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        get items(): $NonNullList<$ItemStack>;
        get height(): number;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        getSlotsForFace(side: $Direction_): number[];
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        static isBrewable(potionBrewing: $PotionBrewing, items: $NonNullList<$ItemStack_>): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        static DATA_BREW_TIME: number;
        blockState: $BlockState;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static FUEL_USES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        getRotation(): $Rotation;
        setRotation(rotation: $Rotation_): void;
        getSeed(): number;
        setSeed(seed: number): void;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        getMirror(): $Mirror;
        createdBy(author: $LivingEntity): void;
        usedBy(player: $Player): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setMetaData(metaData: string): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        setIgnoreEntities(ignoreEntities: boolean): void;
        static createRandom(seed: number): $RandomSource;
        setIntegrity(integrity: number): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        setStructurePos(structurePos: $BlockPos_): void;
        getMetaData(): string;
        setStructureSize(structureSize: $Vec3i): void;
        getStructurePos(): $BlockPos;
        getStructureName(): string;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        loadStructureInfo(level: $ServerLevel): boolean;
        setShowBoundingBox(ignoreEntities: boolean): void;
        getIntegrity(): number;
        getStructureSize(): $Vec3i;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        unloadStructure(): void;
        placeStructure(level: $ServerLevel): void;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        setShowAir(ignoreEntities: boolean): void;
        setMirror(mirror: $Mirror_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $AbstractFurnaceBlockEntityAccess, $AccessorAbstractFurnaceBlockEntity {
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        static invalidateCache(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isLit(): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        getSlotsForFace(side: $Direction_): number[];
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getBurnDuration(fuel: $ItemStack_): number;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        fillStackedContents(helper: $StackedContents): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static isFuel(stack: $ItemStack_): boolean;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSleeping(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$startSleeping(): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        getItems(): $NonNullList<$ItemStack>;
        setLitDuration(arg0: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingProgress(): number;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getLitTime(): number;
        setLitTime(arg0: number): void;
        blockState: $BlockState;
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        level: $Level;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        customPersistentData: $CompoundTag;
        get lit(): boolean;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
        get items(): $NonNullList<$ItemStack>;
        set litDuration(value: number);
        get cookingProgress(): number;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
        setCustomName(customName: $Component_ | null): void;
        getDisplayName(): $Component;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasCustomName(): boolean;
        oFlip: number;
        blockState: $BlockState;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        static LOGGER: $Logger;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isFull(): boolean;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        static getHoneyLevel(state: $BlockState_): number;
        addOccupant(occupant: $Entity): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isFireNearby(): boolean;
        getOccupantCount(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSedated(): boolean;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get empty(): boolean;
        get full(): boolean;
        get fireNearby(): boolean;
        get occupantCount(): number;
        get sedated(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        getPos(): $BlockPos;
        isRemoved(): boolean;
        get type(): string;
        get pos(): $BlockPos;
        get removed(): boolean;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity {
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        onHit(direction: $Direction_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        shaking: boolean;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        setText(text: $SignText, isFrontText: boolean): boolean;
        getText(isFrontText: boolean): $SignText;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        isFacingFrontText(player: $Player): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        getTextLineHeight(): number;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        getMaxTextLineWidth(): number;
        setWaxed(isWaxed: boolean): boolean;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isWaxed(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        get textLineHeight(): number;
        get frontText(): $SignText;
        get backText(): $SignText;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem {
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        tryForcePlaySong(): void;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        onSongChanged(): void;
        splitTheItem(amount: number): $ItemStack;
        getTheItem(): $ItemStack;
        setTheItem(stack: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        removeItemNoUpdate(amount: number): $ItemStack;
        removeTheItem(): $ItemStack;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clear(): void;
        setTransferCooldown(arg0: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getListener(): $VibrationSystem$Listener;
        getLastVibrationFrequency(): number;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        markUpdated(): void;
        getTrialSpawner(): $TrialSpawner;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        getRandomSlot(random: $RandomSource): number;
        handler$cjp002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        insertItem(stack: $ItemStack_): $ItemStack;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getCooldownPercent(partialTicks: number): number;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCoolingDown(): boolean;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        getSpawnPercent(partialTicks: number): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isSpawning(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get coolingDown(): boolean;
        get particleAmount(): number;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get spawning(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        blockState: $BlockState;
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        level: $Level;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTableSeed(seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        blockState: $BlockState;
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        level: $Level;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static LOGGER: $Logger;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
        getDisplayName(): $Component;
        getRedstoneSignal(): number;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearContent(): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getPage(): number;
        getBook(): $ItemStack;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
        get page(): number;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getItem(): $ItemStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getCustomName(): $Component;
        getBaseColor(): $DyeColor;
        getPatterns(): $BannerPatternLayers;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getDisplayName(): $Component;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get name(): $Component;
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get customName(): $Component;
        get baseColor(): $DyeColor;
        get patterns(): $BannerPatternLayers;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getSuckAabb(): $AABB;
        isGridAligned(): boolean;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        get suckAabb(): $AABB;
        get gridAligned(): boolean;
        get levelZ(): number;
        get levelY(): number;
        get levelX(): number;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clearContent(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clear(): void;
        setTransferCooldown(arg0: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        canReceiveTransferCooldown(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        /**
         * @return whether this BlockEntity's level has been set
         */
        isActive(): boolean;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getActiveRotation(partialTick: number): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isHunting(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getFinalState(): string;
        setFinalState(finalState: string): void;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        setPlacementPriority(placementPriority: number): void;
        setSelectionPriority(placementPriority: number): void;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        static TARGET: string;
        blockState: $BlockState;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static NAME: string;
        worldPosition: $BlockPos;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static LOGGER: $Logger;
        static JOINT: string;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        getDecorations(): $PotDecorations;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        getDirection(): $Direction;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        splitTheItem(amount: number): $ItemStack;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        setFromItem(item: $ItemStack_): void;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getPotAsItem(): $ItemStack;
        setLootTableSeed(seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clearContent(): void;
        removeTheItem(): $ItemStack;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Marks this `BlockEntity` as no longer valid (removed from the level).
         */
        clear(): void;
        setTransferCooldown(seed: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        static TAG_SHERDS: string;
        blockState: $BlockState;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static EVENT_POT_WOBBLES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        wobbleStartedAtTick: number;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get decorations(): $PotDecorations;
        get direction(): $Direction;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get containerBlockEntity(): $BlockEntity;
        set fromItem(value: $ItemStack_);
        get potAsItem(): $ItemStack;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getListener(): $VibrationSystem$Listener;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        getVibrationData(): $VibrationSystem$Data;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getVibrationUser(): $VibrationSystem$User;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
    }
}
