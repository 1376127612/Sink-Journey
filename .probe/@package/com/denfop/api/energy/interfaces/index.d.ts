import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";

declare module "@package/com/denfop/api/energy/interfaces" {
    export class $EnergyTile {
    }
    export interface $EnergyTile {
        setId(arg0: number): void;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        isRemovedTile(): boolean;
        getPos(): $BlockPos;
        getTiles(): $Map<$Direction, $EnergyTile>;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        set id(value: number);
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
        get pos(): $BlockPos;
        get tiles(): $Map<$Direction, $EnergyTile>;
    }
    export class $EnergyController {
    }
    export interface $EnergyController extends $EnergyTile {
        unload(): void;
        work(): void;
        getWork(): boolean;
    }
}
