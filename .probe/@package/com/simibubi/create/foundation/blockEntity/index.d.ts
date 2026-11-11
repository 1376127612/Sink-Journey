import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Logger } from "@package/org/slf4j";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sendData(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        blockHolderGetter(): $HolderGetter<$Block>;
        notifyUpdate(): void;
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
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
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
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        invalidate(): void;
        tick(): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        award(arg0: $CreateAdvancement): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        canPlayerUse(arg0: $Player): boolean;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        lazyTick(): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        isChunkUnloaded(): boolean;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        markVirtual(): void;
        setLazyTickRate(arg0: number): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        get chunkUnloaded(): boolean;
        set lazyTickRate(value: number);
    }
}
