import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Block, $SoundType } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
export * as properties_transformer from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/properties_transformer";
export * as use_behaviors from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/use_behaviors";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block" {
    export class $BlockSoundTransformer extends $Record {
        toSoundType(): $SoundType;
        hitSound(): $SoundEvent;
        volume(): number;
        placeSound(): $SoundEvent;
        stepSound(): $SoundEvent;
        breakSound(): $SoundEvent;
        fallSound(): $SoundEvent;
        blocks(): $HolderSet<$Block>;
        pitch(): number;
        static CODEC: $Codec<$BlockSoundTransformer>;
        constructor(blocks: $HolderSet_<$Block>, breakSound: $SoundEvent_, stepSound: $SoundEvent_, placeSound: $SoundEvent_, hitSound: $SoundEvent_, fallSound: $SoundEvent_, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockSoundTransformer}.
     */
    export type $BlockSoundTransformer_ = RegistryTypes.ElysiumApiBlockSoundTransformers | { placeSound?: $SoundEvent_, blocks?: $HolderSet_<$Block>, fallSound?: $SoundEvent_, stepSound?: $SoundEvent_, pitch?: number, breakSound?: $SoundEvent_, hitSound?: $SoundEvent_, volume?: number,  } | [placeSound?: $SoundEvent_, blocks?: $HolderSet_<$Block>, fallSound?: $SoundEvent_, stepSound?: $SoundEvent_, pitch?: number, breakSound?: $SoundEvent_, hitSound?: $SoundEvent_, volume?: number, ];
    export interface $BlockSoundTransformer extends RegistryMarked<RegistryTypes.ElysiumApiBlockSoundTransformersTag, RegistryTypes.ElysiumApiBlockSoundTransformers> {}
}
