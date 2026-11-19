import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IVariableFacade } from "@package/org/cyclops/integrateddynamics/api/item";

declare module "@package/org/cyclops/integrateddynamics/core/logicprogrammer/event" {
    export class $LogicProgrammerVariableFacadeCreatedEvent extends $LogicProgrammerEvent {
        getVariableFacade(): $IVariableFacade;
        getBlockState(): $BlockState;
        constructor(arg0: $Player, arg1: $IVariableFacade, arg2: $BlockState_);
        get variableFacade(): $IVariableFacade;
        get blockState(): $BlockState;
    }
    export class $LogicProgrammerEvent extends $Event {
        getPlayer(): $Player;
        constructor(arg0: $Player);
        get player(): $Player;
    }
}
