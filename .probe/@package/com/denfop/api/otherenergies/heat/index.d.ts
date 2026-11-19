import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/heat/event";

declare module "@package/com/denfop/api/otherenergies/heat" {
    export class $IHeatEmitter {
    }
    export interface $IHeatEmitter extends $IHeatTile {
        emitsHeatTo(arg0: $IHeatAcceptor, arg1: $Direction_): boolean;
    }
    export class $IHeatTile {
    }
    export interface $IHeatTile {
        getPos(): $BlockPos;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getHeatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        setHashCodeSource(arg0: number): void;
        RemoveHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        getHeatTiles(): $Map<$Direction, $IHeatTile>;
        AddHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        hashCode(): number;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        get pos(): $BlockPos;
        get idNetwork(): number;
        get heatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        get heatTiles(): $Map<$Direction, $IHeatTile>;
        set id(value: number);
        get tile(): $BlockEntity;
    }
    export class $IHeatAcceptor {
    }
    export interface $IHeatAcceptor extends $IHeatTile {
        acceptsHeatFrom(arg0: $IHeatEmitter, arg1: $Direction_): boolean;
    }
}
