import { $ConditionalBoolean_, $ConditionalInt_, $ConditionalBoolean, $ConditionalInt } from "@package/net/jadenxgamer/elysium_api/impl/util";
import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $PushReaction } from "@package/net/minecraft/world/level/material";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable$StringRepresentableCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/properties_transformer" {
    export class $BlockPropertiesTransformer$ConditionalProperties extends $Record {
        isSuffocating(): ($ConditionalBoolean) | undefined;
        isRedstoneConductor(): ($ConditionalBoolean) | undefined;
        lightEmission(): ($ConditionalInt) | undefined;
        isViewBlocking(): ($ConditionalBoolean) | undefined;
        hasPostProcess(): ($ConditionalBoolean) | undefined;
        emissiveRendering(): ($ConditionalBoolean) | undefined;
        isValidSpawn(): ($ConditionalBoolean) | undefined;
        static CODEC: $Codec<$BlockPropertiesTransformer$ConditionalProperties>;
        constructor(lightEmission: ($ConditionalInt_) | undefined, isValidSpawn: ($ConditionalBoolean_) | undefined, isRedstoneConductor: ($ConditionalBoolean_) | undefined, isSuffocating: ($ConditionalBoolean_) | undefined, isViewBlocking: ($ConditionalBoolean_) | undefined, hasPostProcess: ($ConditionalBoolean_) | undefined, emissiveRendering: ($ConditionalBoolean_) | undefined);
        get suffocating(): ($ConditionalBoolean) | undefined;
        get redstoneConductor(): ($ConditionalBoolean) | undefined;
        get viewBlocking(): ($ConditionalBoolean) | undefined;
        get validSpawn(): ($ConditionalBoolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer$ConditionalProperties}.
     */
    export type $BlockPropertiesTransformer$ConditionalProperties_ = { emissiveRendering?: ($ConditionalBoolean_) | undefined, lightEmission?: ($ConditionalInt_) | undefined, isValidSpawn?: ($ConditionalBoolean_) | undefined, isSuffocating?: ($ConditionalBoolean_) | undefined, isViewBlocking?: ($ConditionalBoolean_) | undefined, isRedstoneConductor?: ($ConditionalBoolean_) | undefined, hasPostProcess?: ($ConditionalBoolean_) | undefined,  } | [emissiveRendering?: ($ConditionalBoolean_) | undefined, lightEmission?: ($ConditionalInt_) | undefined, isValidSpawn?: ($ConditionalBoolean_) | undefined, isSuffocating?: ($ConditionalBoolean_) | undefined, isViewBlocking?: ($ConditionalBoolean_) | undefined, isRedstoneConductor?: ($ConditionalBoolean_) | undefined, hasPostProcess?: ($ConditionalBoolean_) | undefined, ];
    export interface $BlockPropertiesTransformer extends RegistryMarked<RegistryTypes.ElysiumApiBlockPropertiesTransformerTag, RegistryTypes.ElysiumApiBlockPropertiesTransformer> {}
    export class $BlockPropertiesTransformer$BasicProperties extends $Record {
        requiresCorrectToolForDrops(): (boolean) | undefined;
        canBeReplaced(): (boolean) | undefined;
        explosionResistance(): (number) | undefined;
        isAir(): (boolean) | undefined;
        pushReaction(): ($PushReactionEnum) | undefined;
        destroySpeed(): (number) | undefined;
        randomTicking(): (boolean) | undefined;
        speedFactor(): (number) | undefined;
        ignitedByLava(): (boolean) | undefined;
        canOcclude(): (boolean) | undefined;
        jumpFactor(): (number) | undefined;
        friction(): (number) | undefined;
        spawnTerrainParticles(): (boolean) | undefined;
        static CODEC: $Codec<$BlockPropertiesTransformer$BasicProperties>;
        constructor(destroySpeed: (number) | undefined, explosionResistance: (number) | undefined, requiresCorrectToolForDrops: (boolean) | undefined, randomTicking: (boolean) | undefined, friction: (number) | undefined, speedFactor: (number) | undefined, jumpFactor: (number) | undefined, canOcclude: (boolean) | undefined, isAir: (boolean) | undefined, ignitedByLava: (boolean) | undefined, pushReaction: ($PushReactionEnum_) | undefined, spawnTerrainParticles: (boolean) | undefined, canBeReplaced: (boolean) | undefined);
        get air(): (boolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer$BasicProperties}.
     */
    export type $BlockPropertiesTransformer$BasicProperties_ = { canOcclude?: (boolean) | undefined, friction?: (number) | undefined, requiresCorrectToolForDrops?: (boolean) | undefined, speedFactor?: (number) | undefined, randomTicking?: (boolean) | undefined, destroySpeed?: (number) | undefined, spawnTerrainParticles?: (boolean) | undefined, ignitedByLava?: (boolean) | undefined, isAir?: (boolean) | undefined, jumpFactor?: (number) | undefined, explosionResistance?: (number) | undefined, canBeReplaced?: (boolean) | undefined, pushReaction?: ($PushReactionEnum_) | undefined,  } | [canOcclude?: (boolean) | undefined, friction?: (number) | undefined, requiresCorrectToolForDrops?: (boolean) | undefined, speedFactor?: (number) | undefined, randomTicking?: (boolean) | undefined, destroySpeed?: (number) | undefined, spawnTerrainParticles?: (boolean) | undefined, ignitedByLava?: (boolean) | undefined, isAir?: (boolean) | undefined, jumpFactor?: (number) | undefined, explosionResistance?: (number) | undefined, canBeReplaced?: (boolean) | undefined, pushReaction?: ($PushReactionEnum_) | undefined, ];
    export class $BlockPropertiesTransformer extends $Record {
        blocks(): $HolderSet<$Block>;
        baseProperties(): $BlockPropertiesTransformer$BasicProperties;
        conditionalProperties(): $BlockPropertiesTransformer$ConditionalProperties;
        static CODEC: $Codec<$BlockPropertiesTransformer>;
        constructor(blocks: $HolderSet_<$Block>, baseProperties: $BlockPropertiesTransformer$BasicProperties_, conditionalProperties: $BlockPropertiesTransformer$ConditionalProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer}.
     */
    export type $BlockPropertiesTransformer_ = RegistryTypes.ElysiumApiBlockPropertiesTransformer | { baseProperties?: $BlockPropertiesTransformer$BasicProperties_, conditionalProperties?: $BlockPropertiesTransformer$ConditionalProperties_, blocks?: $HolderSet_<$Block>,  } | [baseProperties?: $BlockPropertiesTransformer$BasicProperties_, conditionalProperties?: $BlockPropertiesTransformer$ConditionalProperties_, blocks?: $HolderSet_<$Block>, ];
    export class $PushReactionEnum extends $Enum<$PushReactionEnum> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $PushReactionEnum[];
        static valueOf(arg0: string): $PushReactionEnum;
        toPushReaction(): $PushReaction;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$PushReactionEnum>;
        static DESTROY: $PushReactionEnum;
        static BLOCK: $PushReactionEnum;
        static PUSH_ONLY: $PushReactionEnum;
        static IGNORE: $PushReactionEnum;
        static NORMAL: $PushReactionEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PushReactionEnum}.
     */
    export type $PushReactionEnum_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
}
