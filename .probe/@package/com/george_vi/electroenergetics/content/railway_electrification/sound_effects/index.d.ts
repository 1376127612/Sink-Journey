import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ElectricTrainSoundType_, $ElectricTrainSoundType } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
export * as sound_types from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types";

declare module "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects" {
    export class $TrainSoundModifier {
        priority(): number;
        block(): $Block;
        soundType(): $ElectricTrainSoundType;
        constructor(arg0: $Block_, arg1: number, arg2: $ElectricTrainSoundType_);
    }
    export class $ElectricTrainSoundInstance extends $AbstractTickableSoundInstance {
        keepAlive(): void;
        setPitchImmediately(arg0: number): void;
        fadeOut(): void;
        setPos(arg0: $Vec3_): void;
        setVolumeImmediately(arg0: number): void;
        targetVolume: number;
        targetPitch: number;
        constructor(arg0: $Vec3_, arg1: $SoundEvent_);
        set pitchImmediately(value: number);
        set pos(value: $Vec3_);
        set volumeImmediately(value: number);
    }
}
