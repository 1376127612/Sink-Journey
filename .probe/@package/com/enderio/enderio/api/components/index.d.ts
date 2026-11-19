import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/components" {
    export class $GrindingBallData extends $Record {
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GrindingBallData;
        bonusMultiplier(): number;
        powerUse(): number;
        outputMultiplier(): number;
        save(arg0: $HolderLookup$Provider): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($GrindingBallData) | undefined;
        isIdentity(): boolean;
        durability(): number;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        static IDENTITY: $GrindingBallData;
        static DATA_MAP_TYPE: $DataMapType<$Item, $GrindingBallData>;
        static CODEC: $Codec<$GrindingBallData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GrindingBallData>;
        constructor(outputMultiplier: number, bonusMultiplier: number, powerUse: number, durability: number);
        get identity(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GrindingBallData}.
     */
    export type $GrindingBallData_ = { powerUse?: number, outputMultiplier?: number, durability?: number, bonusMultiplier?: number,  } | [powerUse?: number, outputMultiplier?: number, durability?: number, bonusMultiplier?: number, ];
}
