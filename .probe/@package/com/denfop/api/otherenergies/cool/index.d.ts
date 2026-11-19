import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/cool/event";

declare module "@package/com/denfop/api/otherenergies/cool" {
    export class $ICoolTile {
    }
    export interface $ICoolTile {
        getPos(): $BlockPos;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getCoolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        setHashCodeSource(arg0: number): void;
        getCoolTiles(): $Map<$Direction, $ICoolTile>;
        AddCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        RemoveCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        hashCode(): number;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        get pos(): $BlockPos;
        get idNetwork(): number;
        get coolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        get coolTiles(): $Map<$Direction, $ICoolTile>;
        set id(value: number);
        get tile(): $BlockEntity;
    }
    export class $ICoolAcceptor {
    }
    export interface $ICoolAcceptor extends $ICoolTile {
        acceptsCoolFrom(arg0: $ICoolEmitter, arg1: $Direction_): boolean;
    }
    export class $ICoolEmitter {
    }
    export interface $ICoolEmitter extends $ICoolTile {
        emitsCoolTo(arg0: $ICoolAcceptor, arg1: $Direction_): boolean;
    }
}
