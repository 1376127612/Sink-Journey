import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Deque, $Map, $Collection_, $Collection } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Class } from "@package/java/lang";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/george_vi/electroenergetics/devices/device" {
    export interface $DeviceFeatureType extends RegistryMarked<RegistryTypes.ElectroenergeticsSimulatedDeviceFeatureTypeTag, RegistryTypes.ElectroenergeticsSimulatedDeviceFeatureType> {}
    export class $SimulatedDeviceType<T extends $SimulatedDevice> extends $Record {
        factory(): $SimulatedDeviceFactory<T>;
        id(): $ResourceLocation;
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $DevicesSavedData): T;
        validBlocks(): $Collection<$Block>;
        static BY_BLOCK: $Map<$Block, $SimulatedDeviceType<never>>;
        constructor(id: $ResourceLocation_, factory: $SimulatedDeviceFactory_<T>, validBlocks: $Collection_<$Block_>);
        constructor(arg0: $ResourceLocation_, arg1: $SimulatedDeviceFactory_<T>);
    }
    /**
     * Values that may be interpreted as {@link $SimulatedDeviceType}.
     */
    export type $SimulatedDeviceType_<T> = RegistryTypes.ElectroenergeticsSimulatedDeviceType | { validBlocks?: $Collection_<$Block_>, id?: $ResourceLocation_, factory?: $SimulatedDeviceFactory_<$SimulatedDevice>,  } | [validBlocks?: $Collection_<$Block_>, id?: $ResourceLocation_, factory?: $SimulatedDeviceFactory_<$SimulatedDevice>, ];
    export interface $SimulatedDeviceType<T> extends RegistryMarked<RegistryTypes.ElectroenergeticsSimulatedDeviceTypeTag, RegistryTypes.ElectroenergeticsSimulatedDeviceType> {}
    export class $DevicesSavedData extends $SavedData {
        devicesToAddSable: $Deque<$Pair<$BlockPos, $SimulatedDevice>>;
        level: $ServerLevel;
        static LOGGER: $Logger;
        devicesToInitialize: $Deque<$SimulatedDevice>;
    }
    export class $SimulatedDevice {
        update(): void;
        initialize(): void;
        write(arg0: $CompoundTag_): void;
        read(arg0: $CompoundTag_): void;
        isValid(): boolean;
        onDestroy(): void;
        shouldRemove(arg0: $BlockState_, arg1: $BlockState_): boolean;
        level: $Level;
        pos: $BlockPos;
        deviceSD: $DevicesSavedData;
        type: $SimulatedDeviceType<never>;
        get valid(): boolean;
    }
    export class $SimulatedDeviceFactory<T extends $SimulatedDevice> {
    }
    export interface $SimulatedDeviceFactory<T extends $SimulatedDevice> {
        create(arg0: $SimulatedDeviceType_<T>, arg1: $Level_, arg2: $BlockPos_, arg3: $DevicesSavedData): T;
    }
    /**
     * Values that may be interpreted as {@link $SimulatedDeviceFactory}.
     */
    export type $SimulatedDeviceFactory_<T> = ((arg0: $SimulatedDeviceType<T>, arg1: $Level, arg2: $BlockPos, arg3: $DevicesSavedData) => T);
    export class $DeviceFeatureType {
        static freeze(): void;
        featureClazz: $Class<never>;
        id: number;
        constructor(arg0: $Class<never>);
    }
    /**
     * Values that may be interpreted as {@link $DeviceFeatureType}.
     */
    export type $DeviceFeatureType_ = RegistryTypes.ElectroenergeticsSimulatedDeviceFeatureType;
}
