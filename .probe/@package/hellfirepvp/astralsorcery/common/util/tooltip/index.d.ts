import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Record } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";
import { $StoredLumenComponent_, $StoredLumenComponent, $IdentifierComponent, $IdentifierComponent_, $StoredLumenComponent$StoredLumen_ } from "@package/hellfirepvp/astralsorcery/common/component";

declare module "@package/hellfirepvp/astralsorcery/common/util/tooltip" {
    export class $StoredLumenDisplayTooltip extends $Record implements $TooltipComponent {
        stack(): $ItemStack;
        static of(arg0: $ItemStack_, arg1: $IdentifierComponent_, arg2: $StoredLumenComponent_): $StoredLumenDisplayTooltip;
        static of(arg0: $ItemStack_, arg1: $UUID_, arg2: $StoredLumenComponent_, arg3: number): $StoredLumenDisplayTooltip;
        static of(arg0: $UUID_, arg1: $StoredLumenComponent_): $StoredLumenDisplayTooltip;
        static of(arg0: $UUID_, ...arg1: $StoredLumenComponent$StoredLumen_[]): $StoredLumenDisplayTooltip;
        static of(arg0: $ItemStack_, arg1: $UUID_, arg2: $StoredLumenComponent_): $StoredLumenDisplayTooltip;
        identifier(): $IdentifierComponent;
        lumenComponent(): $StoredLumenComponent;
        maxComponentWidth(): number;
        constructor(stack: $ItemStack_, identifier: $IdentifierComponent_, lumenComponent: $StoredLumenComponent_, maxComponentWidth: number);
    }
    /**
     * Values that may be interpreted as {@link $StoredLumenDisplayTooltip}.
     */
    export type $StoredLumenDisplayTooltip_ = { maxComponentWidth?: number, stack?: $ItemStack_, identifier?: $IdentifierComponent_, lumenComponent?: $StoredLumenComponent_,  } | [maxComponentWidth?: number, stack?: $ItemStack_, identifier?: $IdentifierComponent_, lumenComponent?: $StoredLumenComponent_, ];
}
