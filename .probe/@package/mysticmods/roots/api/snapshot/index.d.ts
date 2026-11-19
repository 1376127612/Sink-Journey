import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/snapshot" {
    export class $SnapshotType<S extends $Snapshot> {
    }
    export interface $SnapshotType<S extends $Snapshot> {
        mapCodec(): $MapCodec<S>;
        codec(): $Codec<S>;
        cast(arg0: $Snapshot): S;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, S>;
    }
    /**
     * Values that may be interpreted as {@link $SnapshotType}.
     */
    export type $SnapshotType_<S> = RegistryTypes.RootsSnapshotTypes;
    export class $Snapshot {
        getDecay(): number;
        getType(): $SnapshotType<never>;
        getStartTime(): number;
        isExpired(arg0: $Entity): boolean;
        static CODEC: $Codec<$Snapshot>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Snapshot>;
        constructor(arg0: $Entity, arg1: number);
        constructor(arg0: number, arg1: number);
        get decay(): number;
        get type(): $SnapshotType<never>;
        get startTime(): number;
    }
    export interface $SnapshotType<S> extends RegistryMarked<RegistryTypes.RootsSnapshotTypesTag, RegistryTypes.RootsSnapshotTypes> {}
}
