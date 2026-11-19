import { $GridEvent } from "@package/appeng/api/networking/events";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set, $Set_ } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Object, $Iterable, $Class } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as crafting from "@package/appeng/api/networking/crafting";
export * as energy from "@package/appeng/api/networking/energy";
export * as storage from "@package/appeng/api/networking/storage";
export * as security from "@package/appeng/api/networking/security";
export * as pathing from "@package/appeng/api/networking/pathing";
export * as spatial from "@package/appeng/api/networking/spatial";
export * as events from "@package/appeng/api/networking/events";
export * as ticking from "@package/appeng/api/networking/ticking";

declare module "@package/appeng/api/networking" {
    export class $IManagedGridNode {
    }
    export interface $IManagedGridNode {
        isPowered(): boolean;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        setOwningPlayer(arg0: $Player): void;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setTagName(arg0: string): $IManagedGridNode;
        isOnline(): boolean;
        setVisualRepresentation(arg0: $AEItemKey): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        setGridColor(arg0: $AEColor_): $IManagedGridNode;
        setOwningPlayerId(arg0: number): void;
        hasGridBooted(): boolean;
        destroy(): void;
        create(arg0: $Level_, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        getGrid(): $IGrid;
        isReady(): boolean;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        saveToNBT(arg0: $CompoundTag_): void;
        loadFromNBT(arg0: $CompoundTag_): void;
        get powered(): boolean;
        set exposedOnSides(value: $Set_<$Direction_>);
        set inWorldNode(value: boolean);
        set owningPlayer(value: $Player);
        set idlePowerUsage(value: number);
        set tagName(value: string);
        get online(): boolean;
        set gridColor(value: $AEColor_);
        set owningPlayerId(value: number);
        get active(): boolean;
        get node(): $IGridNode;
        set flags(value: $GridFlags_[]);
        get grid(): $IGrid;
        get ready(): boolean;
    }
    export class $IGridNode {
    }
    export interface $IGridNode {
        hasFlag(arg0: $GridFlags_): boolean;
        isPowered(): boolean;
        isOnline(): boolean;
        hasGridBooted(): boolean;
        getConnectedSides(): $Set<$Direction>;
        getOwningPlayerId(): number;
        getIdlePowerUsage(): number;
        getMaxChannels(): number;
        getGridColor(): $AEColor;
        getUsedChannels(): number;
        getVisualRepresentation(): $AEItemKey;
        getOwningPlayerProfileId(): $UUID;
        meetsChannelRequirements(): boolean;
        getInWorldConnections(): $Map<$Direction, $IGridConnection>;
        beginVisit(arg0: $IGridVisitor_): void;
        isActive(): boolean;
        getOwner(): $Object;
        getLevel(): $ServerLevel;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        getGrid(): $IGrid;
        getConnections(): $List<$IGridConnection>;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        get powered(): boolean;
        get online(): boolean;
        get connectedSides(): $Set<$Direction>;
        get owningPlayerId(): number;
        get idlePowerUsage(): number;
        get maxChannels(): number;
        get gridColor(): $AEColor;
        get usedChannels(): number;
        get visualRepresentation(): $AEItemKey;
        get owningPlayerProfileId(): $UUID;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get active(): boolean;
        get owner(): $Object;
        get level(): $ServerLevel;
        get grid(): $IGrid;
        get connections(): $List<$IGridConnection>;
    }
    export class $IGridVisitor {
    }
    export interface $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGridVisitor}.
     */
    export type $IGridVisitor_ = ((arg0: $IGridNode) => boolean);
    export class $IGridService {
    }
    export interface $IGridService {
    }
    export class $IGrid {
    }
    export interface $IGrid {
        postEvent<T extends $GridEvent>(arg0: T): T;
        getEnergyService(): $IEnergyService;
        getCraftingService(): $ICraftingService;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getStorageService(): $IStorageService;
        getMachineClasses(): $Iterable<$Class<never>>;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        getPivot(): $IGridNode;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getSpatialService(): $ISpatialService;
        getTickManager(): $ITickManager;
        getPathingService(): $IPathingService;
        size(): number;
        isEmpty(): boolean;
        "export"(arg0: $JsonWriter): void;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        getNodes(): $Iterable<$IGridNode>;
        get energyService(): $IEnergyService;
        get craftingService(): $ICraftingService;
        get storageService(): $IStorageService;
        get machineClasses(): $Iterable<$Class<never>>;
        get pivot(): $IGridNode;
        get spatialService(): $ISpatialService;
        get tickManager(): $ITickManager;
        get pathingService(): $IPathingService;
        get empty(): boolean;
        get nodes(): $Iterable<$IGridNode>;
    }
    export class $IGridNodeService {
    }
    export interface $IGridNodeService {
    }
    export class $IGridConnection {
    }
    export interface $IGridConnection {
        isInWorld(): boolean;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        getUsedChannels(): number;
        b(): $IGridNode;
        a(): $IGridNode;
        destroy(): void;
        getDirection(arg0: $IGridNode): $Direction;
        get inWorld(): boolean;
        get usedChannels(): number;
    }
    export class $GridFlags extends $Enum<$GridFlags> {
        static values(): $GridFlags[];
        static valueOf(arg0: string): $GridFlags;
        static COMPRESSED_CHANNEL: $GridFlags;
        static CANNOT_CARRY_COMPRESSED: $GridFlags;
        static CANNOT_CARRY: $GridFlags;
        static DENSE_CAPACITY: $GridFlags;
        static PREFERRED: $GridFlags;
        static MULTIBLOCK: $GridFlags;
        static REQUIRE_CHANNEL: $GridFlags;
    }
    /**
     * Values that may be interpreted as {@link $GridFlags}.
     */
    export type $GridFlags_ = "require_channel" | "compressed_channel" | "cannot_carry" | "cannot_carry_compressed" | "dense_capacity" | "multiblock" | "preferred";
}
