import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/pressure/event";

declare module "@package/com/denfop/api/otherenergies/pressure" {
    export class $IPressureTile {
    }
    export interface $IPressureTile {
        getPos(): $BlockPos;
        getTiles(): $Map<$Direction, $IPressureTile>;
        getValidReceivers(): $List<$InfoTile<$IPressureTile>>;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        RemoveTile(arg0: $IPressureTile, arg1: $Direction_): void;
        AddTile(arg0: $IPressureTile, arg1: $Direction_): void;
        setHashCodeSource(arg0: number): void;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        get pos(): $BlockPos;
        get tiles(): $Map<$Direction, $IPressureTile>;
        get validReceivers(): $List<$InfoTile<$IPressureTile>>;
        get idNetwork(): number;
        set id(value: number);
        get tile(): $BlockEntity;
    }
}
