import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/energy" {
    export class $IEnergyStorage {
    }
    export interface $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    export class $EmptyEnergyStorage implements $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        static INSTANCE: $EmptyEnergyStorage;
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<$Tag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $Tag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Tag;
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    export class $ComponentEnergyStorage implements $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number);
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
}
