import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $Registry, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec, $DataResult } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/modifier/target" {
    export class $HolderTarget$Type {
    }
    export interface $HolderTarget$Type {
        apply<A>(arg0: $ResourceKey_<$Registry<A>>): $DataResult<$MapCodec<$HolderTarget<A>>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderTarget$Type}.
     */
    export type $HolderTarget$Type_ = RegistryTypes.LithostitchedHolderTargetType | ((arg0: $ResourceKey<$Registry<any>>) => $DataResult<$MapCodec_<$HolderTarget<any>>>);
    export class $HolderTarget<T> {
        static of<T>(arg0: $Holder_<T>): $HolderTarget<T>;
        static of<T>(arg0: $HolderSet_<T>): $HolderTarget<T>;
        static createCodec<T>(arg0: $ResourceKey_<$Registry<T>>): $Codec<$HolderTarget<T>>;
        static BIOMES: $Codec<$HolderTarget<$Biome>>;
    }
    export interface $HolderTarget<T> {
        getType(): $HolderTarget$Type;
        getHoldersAsSet(arg0: $RegistryAccess): $HolderSet<T>;
        getHolders(arg0: $RegistryAccess): $Iterable<$Holder<T>>;
        get type(): $HolderTarget$Type;
    }
    export interface $HolderTarget$Type extends RegistryMarked<RegistryTypes.LithostitchedHolderTargetTypeTag, RegistryTypes.LithostitchedHolderTargetType> {}
}
