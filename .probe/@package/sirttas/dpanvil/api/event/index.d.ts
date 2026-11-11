import { $IDataManager } from "@package/sirttas/dpanvil/api/data";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/sirttas/dpanvil/api/event" {
    export class $DataPackReloadCompleteEvent extends $Event {
        getRegistry(): $RegistryAccess;
        getRecipeManager(): $RecipeManager;
        getDataManagers(): $Map<$ResourceKey<$IDataManager<never>>, $IDataManager<never>>;
        constructor(arg0: $RecipeManager, arg1: $Map_<$ResourceKey_<$IDataManager<never>>, $IDataManager<never>>, arg2: $RegistryAccess);
        get registry(): $RegistryAccess;
        get recipeManager(): $RecipeManager;
        get dataManagers(): $Map<$ResourceKey<$IDataManager<never>>, $IDataManager<never>>;
    }
    export class $DataManagerReloadEvent extends $Event {
        isFor<T>(arg0: $ResourceKey_<$IDataManager<T>>): boolean;
        getDataManager<T>(): $IDataManager<T>;
        constructor(arg0: $IDataManager<never>);
        get dataManager(): $IDataManager<T>;
    }
}
