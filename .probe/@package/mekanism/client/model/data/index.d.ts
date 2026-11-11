import { $ConnectionType_, $ConnectionType } from "@package/mekanism/common/lib/transmitter";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Map } from "@package/java/util";

declare module "@package/mekanism/client/model/data" {
    export class $TransmitterModelData {
        check(...types: $ConnectionType_[]): boolean;
        getHasColor(): boolean;
        setHasColor(hasColor: boolean): void;
        getConnectionsMap(): $Map<$Direction, $ConnectionType>;
        getConnectionType(side: $Direction_): $ConnectionType;
        setConnectionData(direction: $Direction_, connectionType: $ConnectionType_): void;
        constructor();
        get connectionsMap(): $Map<$Direction, $ConnectionType>;
    }
}
