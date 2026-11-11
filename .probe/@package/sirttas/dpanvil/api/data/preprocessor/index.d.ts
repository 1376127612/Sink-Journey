import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $List_, $List } from "@package/java/util";

declare module "@package/sirttas/dpanvil/api/data/preprocessor" {
    export class $DataPreprocessor$Context {
    }
    export interface $DataPreprocessor$Context {
        getProcessed(arg0: $ResourceLocation_): $List<$JsonElement>;
        getConditionContext(): $ICondition$IContext;
        getRegistryLookup(): $HolderLookup$Provider;
        get conditionContext(): $ICondition$IContext;
        get registryLookup(): $HolderLookup$Provider;
    }
    export class $DataPreprocessor {
    }
    export interface $DataPreprocessor {
        preprocess(arg0: $DataPreprocessor$Context, arg1: $List_<$JsonElement_>): $List<$JsonElement>;
    }
    /**
     * Values that may be interpreted as {@link $DataPreprocessor}.
     */
    export type $DataPreprocessor_ = ((arg0: $DataPreprocessor$Context, arg1: $List<$JsonElement>) => $List_<$JsonElement_>);
}
