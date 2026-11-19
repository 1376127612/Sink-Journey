import { $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $BiMap } from "@package/com/google/common/collect";

declare module "@package/net/mehvahdjukaar/codecui/mixins" {
    export class $RegistryFixedCodecAccessor {
    }
    export interface $RegistryFixedCodecAccessor {
        codecui$getRegistryKey(): $ResourceKey<$Registry<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryFixedCodecAccessor}.
     */
    export type $RegistryFixedCodecAccessor_ = (() => $ResourceKey_<$Registry<never>>);
    export class $SpriteSourcesAccessor {
        static codecui$getTypes(): $BiMap<any, any>;
    }
    export interface $SpriteSourcesAccessor {
    }
    export class $RegistryFileCodecAccessor {
    }
    export interface $RegistryFileCodecAccessor {
        codecui$allowsInline(): boolean;
        codecui$getElementCodec(): $Codec<never>;
        codecui$getRegistryKey(): $ResourceKey<$Registry<never>>;
    }
}
