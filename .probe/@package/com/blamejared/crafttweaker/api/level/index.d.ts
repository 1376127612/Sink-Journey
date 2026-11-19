import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $IData, $MapData } from "@package/com/blamejared/crafttweaker/api/data";

declare module "@package/com/blamejared/crafttweaker/api/level" {
    export class $CraftTweakerSavedData extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CraftTweakerSavedData;
        getData(): $IData;
        setData(arg0: $MapData): void;
        updateData(arg0: $IData): void;
        constructor();
        constructor(arg0: $MapData);
    }
    export class $CraftTweakerSavedDataHolder {
    }
    export interface $CraftTweakerSavedDataHolder {
        crafttweaker$getSavedData(): $CraftTweakerSavedData;
    }
    /**
     * Values that may be interpreted as {@link $CraftTweakerSavedDataHolder}.
     */
    export type $CraftTweakerSavedDataHolder_ = (() => $CraftTweakerSavedData);
}
