import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/org/cyclops/integrateddynamics/api/block/cable" {
    export class $ICable {
    }
    export interface $ICable {
        reconnect(arg0: $Direction_): void;
        destroy(): void;
        isConnected(arg0: $Direction_): boolean;
        getItemStack(): $ItemStack;
        disconnect(arg0: $Direction_): void;
        canConnect(arg0: $ICable, arg1: $Direction_): boolean;
        updateConnections(): void;
        updateConnections(arg0: boolean): void;
        get itemStack(): $ItemStack;
    }
    export class $ICableFakeable {
    }
    export interface $ICableFakeable {
        setRealCable(arg0: boolean): void;
        isRealCable(): boolean;
    }
}
