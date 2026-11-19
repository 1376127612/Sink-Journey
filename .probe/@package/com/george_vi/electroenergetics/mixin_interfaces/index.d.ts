import { $BlockPos_ } from "@package/net/minecraft/core";
import { $TrainPantographEntry } from "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph";
import { $TrainSoundModifier } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects";
import { $ElectricTrainSoundType_, $ElectricTrainSoundType } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types";
import { $ElectricTrainData } from "@package/com/george_vi/electroenergetics/content/railway_electrification";
import { $List_, $Set, $List } from "@package/java/util";

declare module "@package/com/george_vi/electroenergetics/mixin_interfaces" {
    export class $IPantographList {
    }
    export interface $IPantographList {
        electroEnergetics$getPantographList(): $List<$TrainPantographEntry>;
        electroEnergetics$getSoundModifyingBlocks(): $Set<$TrainSoundModifier>;
        electroEnergetics$setPantographList(arg0: $List_<$TrainPantographEntry>): void;
        getPantographState(arg0: $BlockPos_): $TrainPantographEntry;
        electroEnergetics$hasCreativeElectricalSource(): boolean;
        electroEnergetics$hasElectricMotor(): boolean;
        electroEnergetics$getAccumulators(): number;
        electroEnergetics$setElectricMotor(arg0: boolean): void;
        electroEnergetics$setAccumulators(arg0: number): void;
        changePantographState(arg0: $BlockPos_, arg1: boolean): void;
    }
    export class $ICEETrainExtension {
    }
    export interface $ICEETrainExtension {
        getSoundType(): $ElectricTrainSoundType;
        getElectricTrainData(): $ElectricTrainData;
        getSoundModifyingBlocks(): $Set<$TrainSoundModifier>;
        setSoundType(arg0: $ElectricTrainSoundType_): void;
        get electricTrainData(): $ElectricTrainData;
        get soundModifyingBlocks(): $Set<$TrainSoundModifier>;
    }
}
