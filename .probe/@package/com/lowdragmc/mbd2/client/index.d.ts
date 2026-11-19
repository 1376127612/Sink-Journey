import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
export * as renderer from "@package/com/lowdragmc/mbd2/client/renderer";

declare module "@package/com/lowdragmc/mbd2/client" {
    export class $MachineSound extends $AbstractTickableSoundInstance {
        release(): void;
        play(): void;
        predicate: $BooleanSupplier;
        loop: boolean;
        loopWithShuffle: boolean;
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: $BooleanSupplier_, arg3: $BlockPos_, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number);
    }
}
