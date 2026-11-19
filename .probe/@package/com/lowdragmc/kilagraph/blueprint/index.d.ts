import { $GraphNodeRegistry, $Graph } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";
import { $CustomGraphModelImpl } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";

declare module "@package/com/lowdragmc/kilagraph/blueprint" {
    export class $BlueprintGraph extends $Graph {
        graphModel: $CustomGraphModelImpl;
        static NODE_REGISTRY: $GraphNodeRegistry;
        constructor();
    }
}
