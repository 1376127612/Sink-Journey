import { $SimpleInventory } from "@package/org/cyclops/cyclopscore/inventory";
import { $IPartNetwork, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $IVariable, $ValueDeseralizationContext_, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IAspectWrite } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $IPartTypeActiveVariable, $IPartState, $PartTarget } from "@package/org/cyclops/integrateddynamics/api/part";

declare module "@package/org/cyclops/integrateddynamics/api/part/write" {
    export class $IPartStateWriter<P extends $IPartTypeWriter<any, any>> {
    }
    export interface $IPartStateWriter<P extends $IPartTypeWriter<any, any>> extends $IPartState<P> {
        setDeactivated(arg0: boolean): void;
        getActiveAspect(): $IAspectWrite<any, any>;
        isDeactivated(): boolean;
        onVariableContentsUpdated(arg0: P, arg1: $PartTarget): void;
        triggerAspectInfoUpdate(arg0: P, arg1: $PartTarget, arg2: $IAspectWrite<any, any>, arg3: boolean): void;
        checkAndResetFirstTick(): boolean;
        getInventory(): $SimpleInventory;
        addError(arg0: $IAspectWrite<any, any>, arg1: $MutableComponent_): void;
        getVariable<V extends $IValue>(arg0: $INetwork, arg1: $IPartNetwork, arg2: $ValueDeseralizationContext_): $IVariable<V>;
        hasVariable(): boolean;
        getErrors(arg0: $IAspectWrite<any, any>): $List<$MutableComponent>;
        get activeAspect(): $IAspectWrite<any, any>;
        get inventory(): $SimpleInventory;
    }
    export class $IPartTypeWriter<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>> {
    }
    export interface $IPartTypeWriter<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>> extends $IPartTypeActiveVariable<P, S> {
        getActiveAspect(arg0: $PartTarget, arg1: S): $IAspectWrite<any, any>;
        updateActivation(arg0: $PartTarget, arg1: S, arg2: $Player | null): void;
        getWriteAspects(): $List<$IAspectWrite<any, any>>;
        get writeAspects(): $List<$IAspectWrite<any, any>>;
    }
}
