import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IElementTransferPathNode_, $IElementTransferPathNode } from "@package/sirttas/elementalcraft/api/element/transfer/path";
import { $ElementType_, $ElementType } from "@package/sirttas/elementalcraft/api/element";
import { $List_, $List } from "@package/java/util";
export * as path from "@package/sirttas/elementalcraft/api/element/transfer/path";

declare module "@package/sirttas/elementalcraft/api/element/transfer" {
    export class $IElementTransferer {
    }
    export interface $IElementTransferer {
        isValid(): boolean;
        getRemainingTransferAmount(): number;
        getConnectedNodes(arg0: $ElementType_): $List<$IElementTransferPathNode>;
        onTransfer(arg0: $ElementType_, arg1: number, arg2: $IElementTransferPathNode_ | null, arg3: $IElementTransferPathNode_ | null): void;
        canConnectTo(arg0: $BlockPos_): boolean;
        get valid(): boolean;
        get remainingTransferAmount(): number;
    }
    /**
     * Values that may be interpreted as {@link $IElementTransferer}.
     */
    export type $IElementTransferer_ = ((arg0: $ElementType) => $List_<$IElementTransferPathNode>);
}
