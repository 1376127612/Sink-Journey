import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WireAttachment } from "@package/com/george_vi/electroenergetics/content/wire";
import { $Enum } from "@package/java/lang";
import { $NodeConnectionPoint_ } from "@package/com/george_vi/electroenergetics/foundation/nodes";

declare module "@package/com/george_vi/electroenergetics/content/wire/interaction" {
    export interface $WireInteractionBehaviour extends RegistryMarked<RegistryTypes.ElectroenergeticsWireInteractionBehaviourTag, RegistryTypes.ElectroenergeticsWireInteractionBehaviour> {}
    export class $WireInteractionBehaviour {
        attachToWire(arg0: $NodeConnectionPoint_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_, arg4: $WireAttachment): void;
        tryUseOnWire(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_): boolean;
        getWireDisplayType(arg0: $NodeConnectionPoint_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_): $WireInteractionBehaviour$DisplayType;
        attachmentColor(): number;
        canInteractOn(arg0: $ClientLevel, arg1: $BlockState_, arg2: $BlockPos_): boolean;
        getWireDisplayColor(arg0: $NodeConnectionPoint_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_): number;
        isActuallyActiveFor(arg0: $NodeConnectionPoint_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_): boolean;
        interactWire(arg0: $NodeConnectionPoint_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_): void;
        isActiveFor(arg0: $ItemStack_, arg1: $Player): boolean;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $WireInteractionBehaviour}.
     */
    export type $WireInteractionBehaviour_ = RegistryTypes.ElectroenergeticsWireInteractionBehaviour;
    export class $WireInteractionBehaviour$DisplayType extends $Enum<$WireInteractionBehaviour$DisplayType> {
        static values(): $WireInteractionBehaviour$DisplayType[];
        static valueOf(arg0: string): $WireInteractionBehaviour$DisplayType;
        static LINE: $WireInteractionBehaviour$DisplayType;
        static DOT: $WireInteractionBehaviour$DisplayType;
        static NONE: $WireInteractionBehaviour$DisplayType;
    }
    /**
     * Values that may be interpreted as {@link $WireInteractionBehaviour$DisplayType}.
     */
    export type $WireInteractionBehaviour$DisplayType_ = "dot" | "line" | "none";
}
