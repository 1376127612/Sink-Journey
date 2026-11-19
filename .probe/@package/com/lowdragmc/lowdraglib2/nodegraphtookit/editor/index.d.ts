import { $Supplier } from "@package/java/util/function";
import { $GraphView } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $Tag_, $CompoundTag, $Tag } from "@package/net/minecraft/nbt";
import { $Graph } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";
import { $Resource, $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/editor" {
    export class $GraphResource<G extends $Graph> extends $Resource<$CompoundTag> {
        serializeResource(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $Tag;
        deserializeGraphResource(arg0: $CompoundTag_, arg1: $IGraphReferenceResolver_): G;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $CompoundTag;
        serializeGraphResource(arg0: G): $CompoundTag;
        getGraphViewFactory(): $Supplier<$GraphView>;
        createGraph(): G;
        constructor();
        get graphViewFactory(): $Supplier<$GraphView>;
    }
    export class $IGraphReferenceResolver {
    }
    export interface $IGraphReferenceResolver {
        resolve(arg0: $IResourcePath): $Graph;
        save(arg0: $IResourcePath, arg1: $CompoundTag_): void;
        getSourceResource(): $GraphResource<never>;
        get sourceResource(): $GraphResource<never>;
    }
    /**
     * Values that may be interpreted as {@link $IGraphReferenceResolver}.
     */
    export type $IGraphReferenceResolver_ = ((arg0: $IResourcePath) => $Graph);
}
