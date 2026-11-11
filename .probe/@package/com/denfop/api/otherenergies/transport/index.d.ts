import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
export * as event from "@package/com/denfop/api/otherenergies/transport/event";

declare module "@package/com/denfop/api/otherenergies/transport" {
    export class $ITransportTile<T, E> {
    }
    export interface $ITransportTile<T, E> {
        getHandler(arg0: $Direction_): E;
        setId(arg0: number): void;
        getValidReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getPos(): $BlockPos;
        getTiles(): $Map<$Direction, $ITransportTile<any, any>>;
        AddTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        RemoveTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        set id(value: number);
        get validReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        get idNetwork(): number;
        get pos(): $BlockPos;
        get tiles(): $Map<$Direction, $ITransportTile<any, any>>;
    }
}
