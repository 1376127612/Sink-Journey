import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/cool/event";

declare module "@package/com/denfop/api/otherenergies/cool" {
    export class $ICoolTile {
    }
    export interface $ICoolTile {
        hashCode(): number;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getPos(): $BlockPos;
        getTile(): $BlockEntity;
        AddCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        RemoveCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        getCoolTiles(): $Map<$Direction, $ICoolTile>;
        getCoolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        set id(value: number);
        get idNetwork(): number;
        get pos(): $BlockPos;
        get tile(): $BlockEntity;
        get coolTiles(): $Map<$Direction, $ICoolTile>;
        get coolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
    }
}
