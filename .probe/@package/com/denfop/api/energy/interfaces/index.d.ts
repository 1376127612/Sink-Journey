import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";

declare module "@package/com/denfop/api/energy/interfaces" {
    export class $EnergyTile {
    }
    export interface $EnergyTile {
        getPos(): $BlockPos;
        getTiles(): $Map<$Direction, $EnergyTile>;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        isRemovedTile(): boolean;
        setHashCodeSource(arg0: number): void;
        setId(arg0: number): void;
        get pos(): $BlockPos;
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
        set id(value: number);
    }
    export class $EnergyController {
    }
    export interface $EnergyController extends $EnergyTile {
        getWork(): boolean;
        unload(): void;
        work(): void;
    }
}
