import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";

declare module "@package/de/dafuqs/spectrum/helpers" {
    export class $TickLooper {
        static fromNbt(arg0: $CompoundTag_): $TickLooper;
        toNbt(): $Tag;
        getTick(): number;
        getProgress(): number;
        getMaxTick(): number;
        reachedCap(): boolean;
        reset(): void;
        tick(): void;
        static CODEC: $Codec<$TickLooper>;
        constructor(arg0: number);
        get progress(): number;
        get maxTick(): number;
    }
    export class $SchedulerMap$Callback {
    }
    export interface $SchedulerMap$Callback {
        trigger(): void;
    }
    /**
     * Values that may be interpreted as {@link $SchedulerMap$Callback}.
     */
    export type $SchedulerMap$Callback_ = (() => void);
}
