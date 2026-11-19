import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/org/cyclops/integrateddynamics/api/block/cable" {
    export class $ICable {
    }
    export interface $ICable {
        updateConnections(arg0: boolean): void;
        updateConnections(): void;
        canConnect(arg0: $ICable, arg1: $Direction_): boolean;
        reconnect(arg0: $Direction_): void;
        destroy(): void;
        isConnected(arg0: $Direction_): boolean;
        disconnect(arg0: $Direction_): void;
        getItemStack(): $ItemStack;
        get itemStack(): $ItemStack;
    }
    export class $ICableFakeable {
    }
    export interface $ICableFakeable {
        isRealCable(): boolean;
        setRealCable(arg0: boolean): void;
    }
}
