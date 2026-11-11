import { $ElementType_, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $IElementStorage } from "@package/sirttas/elementalcraft/api/element/storage";

declare module "@package/sirttas/elementalcraft/api/element/storage/single" {
    export class $ISingleElementStorage {
    }
    export interface $ISingleElementStorage extends $IElementStorage, $IElementTypeProvider {
        isEmpty(): boolean;
        fill(): void;
        transferTo(arg0: $IElementStorage, arg1: number): number;
        transferTo(arg0: $IElementStorage, arg1: number, arg2: number): number;
        getElementCapacity(): number;
        getElementCapacity(arg0: $ElementType_): number;
        getElementAmount(arg0: $ElementType_): number;
        getElementAmount(): number;
        insertElement(arg0: number, arg1: boolean): number;
        forElement(arg0: $ElementType_): $ISingleElementStorage;
        extractElement(arg0: number, arg1: boolean): number;
    }
}
