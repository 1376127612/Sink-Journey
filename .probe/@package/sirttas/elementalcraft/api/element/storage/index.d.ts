import { $Direction_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ElementType_ } from "@package/sirttas/elementalcraft/api/element";
import { $ISingleElementStorage } from "@package/sirttas/elementalcraft/api/element/storage/single";
export * as single from "@package/sirttas/elementalcraft/api/element/storage/single";

declare module "@package/sirttas/elementalcraft/api/element/storage" {
    export class $IElementStorage {
        static empty(): $IElementStorage;
    }
    export interface $IElementStorage {
        isEmpty(): boolean;
        fill(arg0: $ElementType_): void;
        fill(): void;
        transferTo(arg0: $IElementStorage, arg1: $ElementType_, arg2: number, arg3: number): number;
        transferTo(arg0: $IElementStorage, arg1: $ElementType_, arg2: number): number;
        getElementCapacity(arg0: $ElementType_): number;
        getElementAmount(arg0: $ElementType_): number;
        insertElement(arg0: number, arg1: $ElementType_, arg2: boolean): number;
        forElement(arg0: $ElementType_): $ISingleElementStorage;
        extractElement(arg0: number, arg1: $ElementType_, arg2: boolean): number;
        usableInInventory(): boolean;
        doesRenderGauge(arg0: $Player): boolean;
        transferAll(arg0: $IElementStorage): number;
        canPipeExtract(arg0: $ElementType_, arg1: $Direction_ | null): boolean;
        canPipeInsert(arg0: $ElementType_, arg1: $Direction_ | null): boolean;
    }
}
