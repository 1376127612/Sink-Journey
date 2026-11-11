import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $UUID_, $Set_, $Collection, $Map, $Set } from "@package/java/util";
import { $TileEntityStructuralMultiblock } from "@package/mekanism/common/tile/prefab";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $IChemicalTank, $ChemicalStack, $IMekanismChemicalHandler } from "@package/mekanism/api/chemical";
import { $Supplier_, $BiPredicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ITileHeatHandler } from "@package/mekanism/common/capabilities/heat";
import { $Enum } from "@package/java/lang";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $ILangEntry_ } from "@package/mekanism/api/text";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $VoxelCuboid, $BlockPosBuilder, $VoxelPlane, $IShape } from "@package/mekanism/common/lib/math/voxel";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $AutomationType } from "@package/mekanism/api";
import { $IMekanismInventory, $IInventorySlot } from "@package/mekanism/api/inventory";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IHeatCapacitor, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";
import { $IEnergyContainer, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/lib/multiblock" {
    export class $IMultiblockBase {
    }
    export interface $IMultiblockBase extends $ITileWrapper {
        getStructure(manager: $MultiblockManager<never>): $Structure;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        hasStructure(structure: $Structure): boolean;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        getDefaultData(): $MultiblockData;
        resetForFormed(): void;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        get defaultData(): $MultiblockData;
    }
    export class $IMultiblock<T extends $MultiblockData> {
    }
    export interface $IMultiblock<T extends $MultiblockData> extends $IMultiblockBase {
        getManager(): $MultiblockManager<T>;
        getStructure(): $Structure;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        hasStructure(structure: $Structure): boolean;
        createFormationProtocol(): $FormationProtocol<T>;
        setStructure(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getCacheID(): $UUID;
        resetCache(): void;
        getMultiblock(): T;
        isMaster(): boolean;
        getDefaultData(): T;
        createMultiblock(): T;
        canBeMaster(): boolean;
        get manager(): $MultiblockManager<T>;
        get cacheID(): $UUID;
        get multiblock(): T;
        get master(): boolean;
        get defaultData(): T;
    }
    export class $MultiblockData implements $IMekanismInventory, $IMekanismFluidHandler, $IMekanismStrictEnergyHandler, $ITileHeatHandler, $IMekanismChemicalHandler {
        remove(world: $Level_, oldStructure: $Structure): void;
        length(): number;
        getBounds(): $VoxelCuboid;
        isDirty(): boolean;
        width(): number;
        getLevel(): $Level;
        tick(world: $Level_): boolean;
        height(): number;
        getMaxPos(): $BlockPos;
        setShape(shape: $IShape): boolean;
        markDirty(): void;
        getVolume(): number;
        isFormed(): boolean;
        onCreated(world: $Level_): void;
        onContentsChanged(): void;
        getCurrentRedstoneLevel(): number;
        forceUpdateComparatorLevel(): void;
        markDirtyComparator(world: $Level_): void;
        isPositionOutsideBounds(pos: $BlockPos_): boolean;
        isPositionInsideBounds<T extends $MultiblockData>(structure: $Structure, pos: $BlockPos_): boolean;
        notExternalFormedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        notifyAllUpdateComparator(world: $Level_): void;
        allowsStructuralGuiAccess(multiblock: $TileEntityStructuralMultiblock): boolean;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        getInventorySlots(side: $Direction_): $List<$IInventorySlot>;
        getMinPos(): $BlockPos;
        setVolume(volume: number): void;
        getHeatCapacitors(side: $Direction_): $List<$IHeatCapacitor>;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        getOutsideSide(pos: $BlockPos_): $Direction;
        isKnownLocation(pos: $BlockPos_): boolean;
        getValveData(): $Collection<$IValveHandler$ValveData>;
        formedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        readUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        writeUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        meltdownHappened(world: $Level_): void;
        setFormedForce(formed: boolean): void;
        resetDirty(): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlots(arg0: $Direction_): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        hasInventory(): boolean;
        getTanks(arg0: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergyContainerCount(arg0: $Direction_): number;
        simulate(): $HeatAPI$HeatTransfer;
        getAmbientTemperature(side: $Direction_): number;
        updateHeatCapacitors(side: $Direction_): void;
        simulateEnvironment(): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        simulateAdjacent(): number;
        getAdjacent(side: $Direction_): $IHeatHandler;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        canHandleChemicals(): boolean;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        getCountChemicalTanks(arg0: $Direction_): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getStackInSlot(arg0: number): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getInventorySideFor(): $Direction;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        getFluidSideFor(): $Direction;
        getMaxEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number): void;
        getEnergyContainerCount(): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        canHandleHeat(): boolean;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getSideFor(): $Direction;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number): number;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getTemperature(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getHeatCapacitorCount(): number;
        getTotalHeatCapacity(): number;
        getTotalInverseConduction(): number;
        getInverseConduction(arg0: number): number;
        getTotalTemperature(): number;
        getHeatCapacity(arg0: number): number;
        getHeatSideFor(): $Direction;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        recheckStructure: boolean;
        hasMaster: boolean;
        valves: $Set<$IValveHandler$ValveData>;
        renderLocation: $BlockPos;
        inventoryID: $UUID;
        locations: $Set<$BlockPos>;
        internalLocations: $Set<$BlockPos>;
        constructor(tile: $BlockEntity);
        get bounds(): $VoxelCuboid;
        get dirty(): boolean;
        get level(): $Level;
        get maxPos(): $BlockPos;
        set shape(value: $IShape);
        get formed(): boolean;
        get currentRedstoneLevel(): number;
        get minPos(): $BlockPos;
        get valveData(): $Collection<$IValveHandler$ValveData>;
        set formedForce(value: boolean);
        get inventorySideFor(): $Direction;
        get fluidSideFor(): $Direction;
        get energySideFor(): $Direction;
        get sideFor(): $Direction;
        get totalInverseConduction(): number;
        get heatSideFor(): $Direction;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $Structure {
        size(): number;
        add(s: $Structure): void;
        contains(pos: $BlockPos_): boolean;
        isValid(): boolean;
        invalidate(world: $Level_): void;
        getManager(): $MultiblockManager<never>;
        tick<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        getTile(pos: $BlockPos_): $IMultiblockBase;
        markForUpdate(world: $Level_, invalidate: boolean): void;
        getMultiblockData(): $MultiblockData;
        getController(): $IMultiblock<never>;
        setMultiblockData(multiblockData: $MultiblockData): void;
        runUpdate<TILE extends $BlockEntity>(tile: TILE): $FormationProtocol$FormationResult;
        doImmediateUpdate<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        removeMultiblock(world: $Level_): void;
        getMajorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        getMinorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        static INVALID: $Structure;
        constructor(node: $IMultiblockBase);
        get valid(): boolean;
        get manager(): $MultiblockManager<never>;
        get controller(): $IMultiblock<never>;
    }
    export class $FormationProtocol$FormationResult {
        static fail(text: $ILangEntry_, pos: $BlockPos_): $FormationProtocol$FormationResult;
        static fail(text: $Component_): $FormationProtocol$FormationResult;
        static fail(text: $Component_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_): $FormationProtocol$FormationResult;
        isFormed(): boolean;
        isNoIgnore(): boolean;
        getResultText(): $Component;
        static SUCCESS: $FormationProtocol$FormationResult;
        static FAIL: $FormationProtocol$FormationResult;
        get formed(): boolean;
        get noIgnore(): boolean;
        get resultText(): $Component;
    }
    export class $MultiblockManager<T extends $MultiblockData> {
        getName(): string;
        static reset(): void;
        isCompatible(tile: $BlockEntity): boolean;
        getCache(multiblockID: $UUID_): $MultiblockCache<T>;
        createCache(): $MultiblockCache<T>;
        createValidator(): $IStructureValidator<T>;
        replaceCaches(staleIds: $Set_<$UUID_>, id: $UUID_, cache: $MultiblockCache<T>): void;
        static createOrLoadAll(): void;
        getNameLower(): string;
        handleDirtyMultiblock(multiblock: T): void;
        getUniqueInventoryID(): $UUID;
        trackCache(id: $UUID_, cache: $MultiblockCache<T>): void;
        markTicked(multiblock: T): void;
        constructor(name: string, cacheSupplier: $Supplier_<$MultiblockCache<T>>, validatorSupplier: $Supplier_<$IStructureValidator<T>>);
        get name(): string;
        get nameLower(): string;
        get uniqueInventoryID(): $UUID;
    }
    export class $IStructuralMultiblock {
    }
    export interface $IStructuralMultiblock extends $IMultiblockBase {
        structuralGuiAccessAllowed(): boolean;
        canInterface(manager: $MultiblockManager<never>): boolean;
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        hasFormedMultiblock(): boolean;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
    export class $Structure$Axis extends $Enum<$Structure$Axis> {
        static get(side: $Direction_): $Structure$Axis;
        static values(): $Structure$Axis[];
        static valueOf(name: string): $Structure$Axis;
        set(pos: $BlockPosBuilder, val: number): void;
        horizontal(): $Structure$Axis;
        vertical(): $Structure$Axis;
        getCoord(pos: $BlockPos_): number;
        static X: $Structure$Axis;
        static Y: $Structure$Axis;
        static Z: $Structure$Axis;
    }
    /**
     * Values that may be interpreted as {@link $Structure$Axis}.
     */
    export type $Structure$Axis_ = "x" | "y" | "z";
    export class $IValveHandler$ValveData {
        onTransfer(): void;
        side: $Direction;
        activeTicks: number;
        location: $BlockPos;
        prevActive: boolean;
        constructor(location: $BlockPos_, side: $Direction_);
    }
}
