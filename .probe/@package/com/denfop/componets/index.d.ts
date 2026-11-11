import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Inventory$TypeItemSlot_, $Inventory, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $BlockEntityInventory, $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Predicate } from "@package/com/google/common/base";
import { $UUID, $List, $Map, $Set, $Set_, $List_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $Enum } from "@package/java/lang";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/componets" {
    export class $BufferEnergy {
        allow: boolean;
        sinkTier: number;
        need: boolean;
        storage: number;
        sourceTier: number;
        capacity: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $ComponentPrivate extends $AbstractComponent {
        getPlayerByUUID(arg0: $Level_, arg1: string): $Player;
        getPlayers(): $List<string>;
        setActivate(arg0: boolean): void;
        getPlayersUUID(): $List<$UUID>;
        constructor(arg0: $BlockEntityInventory);
        get players(): $List<string>;
        set activate(value: boolean);
        get playersUUID(): $List<$UUID>;
    }
    export class $TypePurifierJob extends $Enum<$TypePurifierJob> {
    }
    /**
     * Values that may be interpreted as {@link $TypePurifierJob}.
     */
    export type $TypePurifierJob_ = "itemstack" | "actions" | "none";
    export class $AirPollutionComponent extends $AbstractComponent {
        getPercent(): number;
        static spawnAirPollutionDirected(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        isEffectivelyActive(): boolean;
        getCurrentContribution(): number;
        getDefault_pollution(): number;
        setPollution(arg0: number): void;
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get percent(): number;
        get effectivelyActive(): boolean;
        get currentContribution(): number;
        get default_pollution(): number;
        set pollution(value: number);
    }
    export class $Energy extends $AbstractComponent {
        setCapacity(arg0: number): void;
        getCapacity(): number;
        getDelegate(): $EnergyTile;
        getDefaultCapacity(): number;
        setLimit(arg0: boolean): void;
        forceAddEnergy(arg0: number): void;
        setSendingEnabled(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        getChunkPos(): $ChunkPos;
        setReceivingEnabled(arg0: boolean): void;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        addEnergy(arg0: number): number;
        getEnergy(): number;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setDirections(arg0: $List_<$Direction_>, arg1: $List_<$Direction_>): void;
        getFreeEnergy(): number;
        getFillRatio(): number;
        setOverclockRates(arg0: $InventoryUpgrade): void;
        setSinkTier(arg0: number): void;
        addManagedSlot(arg0: $Inventory): $Energy;
        canUseEnergy(arg0: number): boolean;
        getSourceTier(): number;
        getSourceDirs(): $Set<$Direction>;
        getSinkDirs(): $Set<$Direction>;
        getSinkTier(): number;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $Energy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: boolean): $Energy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $Energy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $Energy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $Energy;
        setMultiSource(arg0: boolean): $Energy;
        setPacketOutput(arg0: number): void;
        setSourceTier(arg0: number): void;
        createDelegate(): void;
        getComparatorValue(): number;
        addCapacity(arg0: number): void;
        upgrade: boolean;
        managedSlots: $List<$Inventory>;
        sourceDirections: $Set<$Direction>;
        multiSource: boolean;
        delegate: $EnergyNetDelegate;
        loaded: boolean;
        fullEnergy: boolean;
        limit_amount: number;
        defaultCapacity: number;
        defaultSinkTier: number;
        sourcePackets: number;
        limit: boolean;
        defaultSourceTier: number;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $List_<$Direction_>, arg3: $List_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number);
        constructor(arg0: $BlockEntityInventory, arg1: number);
        set sendingEnabled(value: boolean);
        set enabled(value: boolean);
        get chunkPos(): $ChunkPos;
        set receivingEnabled(value: boolean);
        get energy(): number;
        get freeEnergy(): number;
        get fillRatio(): number;
        set overclockRates(value: $InventoryUpgrade);
        get sourceDirs(): $Set<$Direction>;
        get sinkDirs(): $Set<$Direction>;
        set packetOutput(value: number);
        get comparatorValue(): number;
    }
    export class $EnergyNetDelegate implements $EnergyTile {
        setId(arg0: number): void;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        getConductors(): $Map<$Direction, $EnergyTile>;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        getSourceEnergy(): number;
        isRemovedTile(): boolean;
        worldPosition: $BlockPos;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $Energy);
        constructor(arg0: $BlockEntityBase, arg1: $Set_<$Direction_>, arg2: $BufferEnergy);
        set id(value: number);
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get conductors(): $Map<$Direction, $EnergyTile>;
        get sourceEnergy(): number;
        get removedTile(): boolean;
    }
    export class $AbstractComponent {
        getParent(): $BlockEntityBase;
        getCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        isClient(): boolean;
        setParent(arg0: $BlockEntityBase): void;
        canUsePurifier(arg0: $Player): boolean;
        workPurifier(): void;
        getItemStackUpgrade(): $ItemStack;
        canEntityDestroy(arg0: $Entity): boolean;
        updateComponent(): $CustomPacketBuffer;
        wrenchCanRemove(arg0: $Player): boolean;
        addInformation(arg0: $ItemStack_, arg1: $List_<string>): void;
        onNetworkUpdate(arg0: $CustomPacketBuffer): void;
        updateEntityClient(): void;
        readFromNbt(arg0: $CompoundTag_): void;
        writeNBTToDrops(arg0: $CompoundTag_): $CompoundTag;
        updateEntityServer(): void;
        markDirty(): void;
        onNeighborChange(arg0: $BlockState_, arg1: $BlockPos_): void;
        getDrops(): $List<$ItemStack>;
        onLoaded(): void;
        isServer(): boolean;
        onUnloaded(): void;
        writeToNbt(): $CompoundTag;
        onPlaced(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $Direction_): void;
        blockBreak(): void;
        onContainerUpdate(arg0: $ServerPlayer): void;
        needWriteNBTToDrops(): boolean;
        onSneakingActivated(arg0: $Player, arg1: $InteractionHand_): boolean;
        getProvidedCapabilities(arg0: $Direction_): $Collection<$BlockCapability<never, never>>;
        onBlockActivated(arg0: $Player, arg1: $InteractionHand_): boolean;
        getPurifierJob(): $TypePurifierJob;
        canUpgradeBlock(): boolean;
        ActionPurifier(): void;
        actionGetDrop(): void;
        constructor(arg0: $BlockEntityBase);
        get client(): boolean;
        get itemStackUpgrade(): $ItemStack;
        get drops(): $List<$ItemStack>;
        get server(): boolean;
        get purifierJob(): $TypePurifierJob;
    }
    export class $SoilPollutionComponent extends $AbstractComponent {
        getPercent(): number;
        isEffectivelyActive(): boolean;
        getCurrentContribution(): number;
        getDefault_pollution(): number;
        setPollution(arg0: number): void;
        static spawnSoilPollution(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get percent(): number;
        get effectivelyActive(): boolean;
        get currentContribution(): number;
        get default_pollution(): number;
        set pollution(value: number);
    }
    export class $Fluids$InternalFluidTank extends $FluidTank {
        getIdentifier(): string;
        writePacket(): $CustomPacketBuffer;
        isInput(): boolean;
        setTypeItemSlot(arg0: $Inventory$TypeItemSlot_): void;
        readPacket(arg0: $CustomPacketBuffer): void;
        isOutput(): boolean;
        setAcceptedFluids(arg0: $Predicate<$Fluid_>): void;
        canDrain(arg0: $Direction_): boolean;
        canFill(arg0: $Direction_): boolean;
        setCanAccept(arg0: boolean): void;
        acceptsFluid(arg0: $Fluid_): boolean;
        getFluidList(): $List<string>;
        getAcceptedFluids(): $Predicate<$Fluid>;
        modeFluid: number;
        get identifier(): string;
        get input(): boolean;
        set typeItemSlot(value: $Inventory$TypeItemSlot_);
        get output(): boolean;
        set canAccept(value: boolean);
        get fluidList(): $List<string>;
    }
}
