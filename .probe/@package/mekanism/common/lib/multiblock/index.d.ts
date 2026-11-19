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
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        hasStructure(structure: $Structure): boolean;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        resetForFormed(): void;
        getDefaultData(): $MultiblockData;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        get defaultData(): $MultiblockData;
    }
    export class $IMultiblock<T extends $MultiblockData> {
    }
    export interface $IMultiblock<T extends $MultiblockData> extends $IMultiblockBase {
        getStructure(): $Structure;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        getMultiblock(): T;
        hasStructure(structure: $Structure): boolean;
        createFormationProtocol(): $FormationProtocol<T>;
        isMaster(): boolean;
        canBeMaster(): boolean;
        getDefaultData(): T;
        setStructure(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        createMultiblock(): T;
        getManager(): $MultiblockManager<T>;
        resetCache(): void;
        getCacheID(): $UUID;
        get multiblock(): T;
        get master(): boolean;
        get defaultData(): T;
        get manager(): $MultiblockManager<T>;
        get cacheID(): $UUID;
    }
    export class $MultiblockData implements $IMekanismInventory, $IMekanismFluidHandler, $IMekanismStrictEnergyHandler, $ITileHeatHandler, $IMekanismChemicalHandler {
        getMaxPos(): $BlockPos;
        getCurrentRedstoneLevel(): number;
        forceUpdateComparatorLevel(): void;
        notExternalFormedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        isPositionInsideBounds<T extends $MultiblockData>(structure: $Structure, pos: $BlockPos_): boolean;
        notifyAllUpdateComparator(world: $Level_): void;
        markDirtyComparator(world: $Level_): void;
        allowsStructuralGuiAccess(multiblock: $TileEntityStructuralMultiblock): boolean;
        isPositionOutsideBounds(pos: $BlockPos_): boolean;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        markDirty(): void;
        onContentsChanged(): void;
        formedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        getOutsideSide(pos: $BlockPos_): $Direction;
        getValveData(): $Collection<$IValveHandler$ValveData>;
        meltdownHappened(world: $Level_): void;
        isKnownLocation(pos: $BlockPos_): boolean;
        setFormedForce(formed: boolean): void;
        writeUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        readUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        remove(world: $Level_, oldStructure: $Structure): void;
        length(): number;
        getBounds(): $VoxelCuboid;
        width(): number;
        isDirty(): boolean;
        tick(world: $Level_): boolean;
        getLevel(): $Level;
        setShape(shape: $IShape): boolean;
        isFormed(): boolean;
        onCreated(world: $Level_): void;
        setVolume(volume: number): void;
        resetDirty(): void;
        getMinPos(): $BlockPos;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        getHeatCapacitors(side: $Direction_): $List<$IHeatCapacitor>;
        getInventorySlots(side: $Direction_): $List<$IInventorySlot>;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        height(): number;
        getVolume(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getSlots(arg0: $Direction_): number;
        hasInventory(): boolean;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getEnergyContainerCount(arg0: $Direction_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        simulate(): $HeatAPI$HeatTransfer;
        simulateEnvironment(): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        getAmbientTemperature(side: $Direction_): number;
        updateHeatCapacitors(side: $Direction_): void;
        simulateAdjacent(): number;
        getAdjacent(side: $Direction_): $IHeatHandler;
        getCountChemicalTanks(arg0: $Direction_): number;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        canHandleChemicals(): boolean;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getInventorySideFor(): $Direction;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        getEnergyContainerCount(): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number): void;
        getMaxEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergySideFor(): $Direction;
        getEnergy(arg0: number): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        canHandleHeat(): boolean;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalInTank(arg0: number): $ChemicalStack;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getChemicalTankCapacity(arg0: number): number;
        getSideFor(): $Direction;
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
        getTotalHeatCapacity(): number;
        getTotalTemperature(): number;
        getTotalInverseConduction(): number;
        getInverseConduction(arg0: number): number;
        getHeatCapacitorCount(): number;
        getHeatSideFor(): $Direction;
        getTemperature(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getHeatCapacity(arg0: number): number;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        getHeight(): number;
        getWidth(): number;
        setChanged(): void;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        recheckStructure: boolean;
        hasMaster: boolean;
        valves: $Set<$IValveHandler$ValveData>;
        renderLocation: $BlockPos;
        inventoryID: $UUID;
        locations: $Set<$BlockPos>;
        internalLocations: $Set<$BlockPos>;
        constructor(tile: $BlockEntity);
        get maxPos(): $BlockPos;
        get currentRedstoneLevel(): number;
        get valveData(): $Collection<$IValveHandler$ValveData>;
        set formedForce(value: boolean);
        get bounds(): $VoxelCuboid;
        get dirty(): boolean;
        get level(): $Level;
        set shape(value: $IShape);
        get formed(): boolean;
        get minPos(): $BlockPos;
        get inventorySideFor(): $Direction;
        get fluidSideFor(): $Direction;
        get energySideFor(): $Direction;
        get sideFor(): $Direction;
        get totalInverseConduction(): number;
        get heatSideFor(): $Direction;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $Structure {
        markForUpdate(world: $Level_, invalidate: boolean): void;
        getMultiblockData(): $MultiblockData;
        setMultiblockData(multiblockData: $MultiblockData): void;
        runUpdate<TILE extends $BlockEntity>(tile: TILE): $FormationProtocol$FormationResult;
        doImmediateUpdate<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        size(): number;
        add(s: $Structure): void;
        contains(pos: $BlockPos_): boolean;
        isValid(): boolean;
        invalidate(world: $Level_): void;
        tick<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        getManager(): $MultiblockManager<never>;
        getTile(pos: $BlockPos_): $IMultiblockBase;
        getController(): $IMultiblock<never>;
        getMinorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        getMajorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        removeMultiblock(world: $Level_): void;
        static INVALID: $Structure;
        constructor(node: $IMultiblockBase);
        get valid(): boolean;
        get manager(): $MultiblockManager<never>;
        get controller(): $IMultiblock<never>;
    }
    export class $FormationProtocol$FormationResult {
        getResultText(): $Component;
        static fail(text: $Component_): $FormationProtocol$FormationResult;
        static fail(text: $Component_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_): $FormationProtocol$FormationResult;
        isFormed(): boolean;
        isNoIgnore(): boolean;
        static SUCCESS: $FormationProtocol$FormationResult;
        static FAIL: $FormationProtocol$FormationResult;
        get resultText(): $Component;
        get formed(): boolean;
        get noIgnore(): boolean;
    }
    export class $MultiblockManager<T extends $MultiblockData> {
        isCompatible(tile: $BlockEntity): boolean;
        createValidator(): $IStructureValidator<T>;
        getName(): string;
        static reset(): void;
        getCache(multiblockID: $UUID_): $MultiblockCache<T>;
        trackCache(id: $UUID_, cache: $MultiblockCache<T>): void;
        markTicked(multiblock: T): void;
        getUniqueInventoryID(): $UUID;
        handleDirtyMultiblock(multiblock: T): void;
        replaceCaches(staleIds: $Set_<$UUID_>, id: $UUID_, cache: $MultiblockCache<T>): void;
        static createOrLoadAll(): void;
        createCache(): $MultiblockCache<T>;
        getNameLower(): string;
        constructor(name: string, cacheSupplier: $Supplier_<$MultiblockCache<T>>, validatorSupplier: $Supplier_<$IStructureValidator<T>>);
        get name(): string;
        get uniqueInventoryID(): $UUID;
        get nameLower(): string;
    }
    export class $IStructuralMultiblock {
    }
    export interface $IStructuralMultiblock extends $IMultiblockBase {
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        canInterface(manager: $MultiblockManager<never>): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        structuralGuiAccessAllowed(): boolean;
        hasFormedMultiblock(): boolean;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
    export class $Structure$Axis extends $Enum<$Structure$Axis> {
        static get(side: $Direction_): $Structure$Axis;
        static values(): $Structure$Axis[];
        static valueOf(name: string): $Structure$Axis;
        set(pos: $BlockPosBuilder, val: number): void;
        vertical(): $Structure$Axis;
        horizontal(): $Structure$Axis;
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
