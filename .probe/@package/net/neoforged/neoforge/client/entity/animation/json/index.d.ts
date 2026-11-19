import { $AnimationTarget, $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AnimationChannel$Interpolation_, $AnimationChannel$Interpolation, $Keyframe, $AnimationDefinition, $AnimationChannel, $AnimationChannel$Target_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/neoforged/neoforge/client/entity/animation/json" {
    export class $AnimationTypeManager {
        static getInterpolation(arg0: $ResourceLocation_): $AnimationChannel$Interpolation;
        static getTargetList(): string;
        static getKeyframeCodec(arg0: $AnimationTarget_): $Codec<$Keyframe>;
        static getTargetFromChannelTarget(arg0: $AnimationChannel$Target_): $AnimationTarget;
        static getInterpolationList(): string;
        static getInterpolationName(arg0: $AnimationChannel$Interpolation_): $ResourceLocation;
        static init(): void;
        static getTarget(arg0: $ResourceLocation_): $AnimationTarget;
        static getTargetName(arg0: $AnimationTarget_): $ResourceLocation;
        static get targetList(): string;
        static get interpolationList(): string;
    }
    export class $AnimationHolder {
        getOrNull(): $AnimationDefinition;
        get(): $AnimationDefinition;
        key(): $ResourceLocation;
        isBound(): boolean;
        static EMPTY_ANIMATION: $AnimationDefinition;
        get orNull(): $AnimationDefinition;
        get bound(): boolean;
    }
    export class $AnimationLoader extends $SimpleJsonResourceReloadListener {
        getAnimationHolder(arg0: $ResourceLocation_): $AnimationHolder;
        getAnimation(arg0: $ResourceLocation_): $AnimationDefinition;
        static INSTANCE: $AnimationLoader;
    }
    export class $AnimationParser {
        static CHANNEL_CODEC: $MapCodec<$AnimationChannel>;
        static CODEC: $Codec<$AnimationDefinition>;
    }
}
