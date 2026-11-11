import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";

declare module "@package/cn/dancingsnow/neoecoae/api/storage" {
    export interface $ECOCellType extends RegistryMarked<RegistryTypes.NeoecoaeCellTypeTag, RegistryTypes.NeoecoaeCellType> {}
    export class $ECOCellType extends $Record {
        static builder(): $ECOCellType$Builder;
        desc(): $Component;
        visible(): boolean;
        typeCount(): number;
        constructor(arg0: $Component_, arg1: number);
        constructor(desc: $Component_, typeCount: number, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ECOCellType}.
     */
    export type $ECOCellType_ = RegistryTypes.NeoecoaeCellType | { typeCount?: number, visible?: boolean, desc?: $Component_,  } | [typeCount?: number, visible?: boolean, desc?: $Component_, ];
    export class $ECOCellType$Builder {
        desc(arg0: $Component_): $ECOCellType$Builder;
        build(): $ECOCellType;
        visible(arg0: boolean): $ECOCellType$Builder;
        typeCount(arg0: number): $ECOCellType$Builder;
        constructor();
    }
}
