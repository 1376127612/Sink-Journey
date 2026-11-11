import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/pressure/event";

declare module "@package/com/denfop/api/otherenergies/pressure" {
    export class $IPressureTile {
    }
    export interface $IPressureTile {
        setId(arg0: number): void;
        getValidReceivers(): $List<$InfoTile<$IPressureTile>>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getPos(): $BlockPos;
        getTile(): $BlockEntity;
        getTiles(): $Map<$Direction, $IPressureTile>;
        AddTile(arg0: $IPressureTile, arg1: $Direction_): void;
        RemoveTile(arg0: $IPressureTile, arg1: $Direction_): void;
        set id(value: number);
        get validReceivers(): $List<$InfoTile<$IPressureTile>>;
        get idNetwork(): number;
        get pos(): $BlockPos;
        get tile(): $BlockEntity;
        get tiles(): $Map<$Direction, $IPressureTile>;
    }
}
