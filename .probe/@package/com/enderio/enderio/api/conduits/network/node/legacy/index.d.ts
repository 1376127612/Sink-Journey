import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $NodeData } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/conduits/network/node/legacy" {
    /**
     * @deprecated
     */
    export class $ConduitDataAccessor {
    }
    export interface $ConduitDataAccessor {
        getOrCreateData<T extends $ConduitData<T>>(arg0: $ConduitDataType_<T>): T;
        getData<T extends $ConduitData<T>>(arg0: $ConduitDataType_<T>): T;
        hasData(arg0: $ConduitDataType_<never>): boolean;
    }
    export interface $ConduitDataType<T> extends RegistryMarked<RegistryTypes.EnderioConduitDataTypeTag, RegistryTypes.EnderioConduitDataType> {}
    /**
     * @deprecated
     */
    export class $ConduitData<T extends $ConduitData<T>> {
        static CODEC: $Codec<$ConduitData<never>>;
    }
    export interface $ConduitData<T extends $ConduitData<T>> {
        withClientChanges(arg0: T): T;
        toNodeData(): $NodeData;
        type(): $ConduitDataType<T>;
        deepCopy(): T;
    }
    /**
     * @deprecated
     */
    export class $ConduitDataType<T extends $ConduitData<T>> extends $Record {
        codec(): $MapCodec<T>;
        factory(): $Supplier<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>, factory: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ConduitDataType}.
     */
    export type $ConduitDataType_<T> = RegistryTypes.EnderioConduitDataType | { factory?: $Supplier_<$ConduitData<T>>, codec?: $MapCodec_<$ConduitData<T>>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ConduitData<T>>,  } | [factory?: $Supplier_<$ConduitData<T>>, codec?: $MapCodec_<$ConduitData<T>>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ConduitData<T>>, ];
}
