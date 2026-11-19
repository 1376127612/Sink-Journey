import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EnumSet, $Set_, $Set } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/internal/autoio" {
    export class $AutoIOConfig {
        setEnabled(enabled: boolean): void;
        isSideEnabled(side: $Direction_): boolean;
        static toMask(sides: $Set_<$Direction_>): number;
        setAllSides(enabled: boolean): void;
        enabledSides(): $Set<$Direction>;
        static fromMask(mask: number): $EnumSet<$Direction>;
        static load(input: $CompoundTag_): $AutoIOConfig;
        enabled(): boolean;
        save(output: $CompoundTag_): void;
        loadInto(input: $CompoundTag_): void;
        setSide(side: $Direction_, enabled: boolean): void;
        toggleSide(side: $Direction_): void;
        constructor();
        set allSides(value: boolean);
    }
}
