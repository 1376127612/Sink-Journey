import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $MachineEvent } from "@package/com/lowdragmc/mbd2/common/machine/definition/config/event";
import { $BlueprintGraph } from "@package/com/lowdragmc/kilagraph/blueprint";
import { $GraphNodeRegistry } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";
import { $Class } from "@package/java/lang";
import { $CustomGraphModelImpl } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $MachineBlueprintBinding } from "@package/com/lowdragmc/mbd2/common/machine/definition/config/blueprint";

declare module "@package/com/lowdragmc/mbd2/common/blueprint" {
    export class $MachineBlueprintGraph extends $BlueprintGraph {
        graphModel: $CustomGraphModelImpl;
        static NODE_REGISTRY: $GraphNodeRegistry;
        constructor();
    }
    export class $MachineBlueprintInstance {
        getBinding(): $MachineBlueprintBinding;
        release(): void;
        handles(arg0: $Class<never>): boolean;
        post(arg0: $MachineEvent): void;
        getMachine(): $MBDMachine;
        constructor(arg0: $MBDMachine, arg1: $MachineBlueprintBinding);
        get binding(): $MachineBlueprintBinding;
        get machine(): $MBDMachine;
    }
}
