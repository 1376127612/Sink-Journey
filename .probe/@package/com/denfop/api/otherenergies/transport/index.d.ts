import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Map, $List } from "@package/java/util";
export * as event from "@package/com/denfop/api/otherenergies/transport/event";

declare module "@package/com/denfop/api/otherenergies/transport" {
    export class $ITransportTile<T, E> {
    }
    export interface $ITransportTile<T, E> {
        getPos(): $BlockPos;
        getTiles(): $Map<$Direction, $ITransportTile<any, any>>;
        getValidReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        RemoveTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        AddTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        setHashCodeSource(arg0: number): void;
        getHandler(arg0: $Direction_): E;
        setId(arg0: number): void;
        get pos(): $BlockPos;
        get tiles(): $Map<$Direction, $ITransportTile<any, any>>;
        get validReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        get idNetwork(): number;
        set id(value: number);
    }
}
