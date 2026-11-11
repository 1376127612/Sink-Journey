import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ElectricTrainSoundInstance } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types" {
    export class $ElectricTrainSoundType {
        translationKey(): string;
        id: $ResourceLocation;
        soundBehaviour: $Supplier<$ElectricTrainSoundBehaviour>;
        validBlocks: $Supplier<$Object2IntMap<$Block>>;
        constructor(arg0: $Supplier_<$Supplier<$ElectricTrainSoundBehaviour>>, arg1: $ResourceLocation_, arg2: $Supplier_<$Object2IntMap<$Block>>);
    }
    /**
     * Values that may be interpreted as {@link $ElectricTrainSoundType}.
     */
    export type $ElectricTrainSoundType_ = RegistryTypes.ElectroenergeticsElectricTrainSoundType;
    export class $ElectricTrainSoundBehaviour {
        tick(): void;
        static playSound(arg0: $Vec3_, arg1: $SoundEvent_): $ElectricTrainSoundInstance;
        acceleration: number;
        trainSpeed: number;
        pos: $Vec3;
        windSoundInstance: $ElectricTrainSoundInstance;
        windRiseSoundInstance: $ElectricTrainSoundInstance;
        constructor();
    }
    export interface $ElectricTrainSoundType extends RegistryMarked<RegistryTypes.ElectroenergeticsElectricTrainSoundTypeTag, RegistryTypes.ElectroenergeticsElectricTrainSoundType> {}
}
