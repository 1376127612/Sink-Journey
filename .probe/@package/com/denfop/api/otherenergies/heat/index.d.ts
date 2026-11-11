import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/heat/event";

declare module "@package/com/denfop/api/otherenergies/heat" {
    export class $IHeatTile {
    }
    export interface $IHeatTile {
        hashCode(): number;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getPos(): $BlockPos;
        getTile(): $BlockEntity;
        getHeatTiles(): $Map<$Direction, $IHeatTile>;
        AddHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        RemoveHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        getHeatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        set id(value: number);
        get idNetwork(): number;
        get pos(): $BlockPos;
        get tile(): $BlockEntity;
        get heatTiles(): $Map<$Direction, $IHeatTile>;
        get heatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
    }
}
