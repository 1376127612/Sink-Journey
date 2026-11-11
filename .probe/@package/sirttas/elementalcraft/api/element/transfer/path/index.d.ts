import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IElementTransferer } from "@package/sirttas/elementalcraft/api/element/transfer";
import { $ElementType_, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $List_, $List } from "@package/java/util";
import { $IElementStorage } from "@package/sirttas/elementalcraft/api/element/storage";

declare module "@package/sirttas/elementalcraft/api/element/transfer/path" {
    export class $IElementTransferPath {
        static transfer(arg0: $ElementType_, arg1: number, arg2: $List_<$IElementTransferPathNode_>): void;
    }
    export interface $IElementTransferPath extends $IElementTypeProvider {
        transfer(): void;
        isValid(): boolean;
        getNodes(): $List<$IElementTransferPathNode>;
        get valid(): boolean;
        get nodes(): $List<$IElementTransferPathNode>;
    }
    export class $IElementTransferPathNode {
        static forEachNodes(arg0: $List_<$IElementTransferPathNode_>, arg1: $IElementTransferPathNode$Consumer_): void;
    }
    export interface $IElementTransferPathNode {
        getPos(): $BlockPos;
        getWeight(arg0: $ElementType_, arg1: $IElementTransferPathNode_ | null, arg2: $IElementTransferPathNode_ | null): number;
        getStorage(): $IElementStorage;
        getTransferer(): $IElementTransferer;
        get pos(): $BlockPos;
        get storage(): $IElementStorage;
        get transferer(): $IElementTransferer;
    }
    /**
     * Values that may be interpreted as {@link $IElementTransferPathNode}.
     */
    export type $IElementTransferPathNode_ = (() => $BlockPos_);
    export class $IElementTransferPathNode$Consumer {
    }
    export interface $IElementTransferPathNode$Consumer {
        accept(arg0: $IElementTransferPathNode_, arg1: $IElementTransferPathNode_ | null, arg2: $IElementTransferPathNode_ | null): void;
    }
    /**
     * Values that may be interpreted as {@link $IElementTransferPathNode$Consumer}.
     */
    export type $IElementTransferPathNode$Consumer_ = ((arg0: $IElementTransferPathNode, arg1: $IElementTransferPathNode, arg2: $IElementTransferPathNode) => void);
}
