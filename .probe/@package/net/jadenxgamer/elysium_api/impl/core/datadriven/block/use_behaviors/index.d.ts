import { $BlockStatePropertiesCondition } from "@package/net/jadenxgamer/elysium_api/impl/util";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable$StringRepresentableCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/use_behaviors" {
    export class $UseBehavior$Sounds extends $Record {
        volume(): number;
        getVolume(): number;
        soundEvent(): $SoundEvent;
        pitch(): number;
        static CODEC: $Codec<$UseBehavior$Sounds>;
        constructor(soundEvent: $SoundEvent_, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $UseBehavior$Sounds}.
     */
    export type $UseBehavior$Sounds_ = { pitch?: number, soundEvent?: $SoundEvent_, volume?: number,  } | [pitch?: number, soundEvent?: $SoundEvent_, volume?: number, ];
    export class $PosEnum extends $Enum<$PosEnum> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $PosEnum[];
        static valueOf(arg0: string): $PosEnum;
        getRemappedEnumConstantName(): string;
        static RANDOM_HORIZONTAL: $PosEnum;
        static BELOW: $PosEnum;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$PosEnum>;
        static NORTH: $PosEnum;
        static NOOP: $PosEnum;
        static WEST: $PosEnum;
        static RANDOM_VERTICAL: $PosEnum;
        static SOUTH: $PosEnum;
        static EAST: $PosEnum;
        static ABOVE: $PosEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PosEnum}.
     */
    export type $PosEnum_ = "noop" | "above" | "below" | "north" | "east" | "south" | "west" | "random_horizontal" | "random_vertical";
    export class $UseBehaviorTypeEnum extends $Enum<$UseBehaviorTypeEnum> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $UseBehaviorTypeEnum[];
        static valueOf(arg0: string): $UseBehaviorTypeEnum;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$UseBehaviorTypeEnum>;
        static FEATURE: $UseBehaviorTypeEnum;
        static INSERT_STACK: $UseBehaviorTypeEnum;
        static PLACE: $UseBehaviorTypeEnum;
        static DROP_ITSELF: $UseBehaviorTypeEnum;
        static PLACE_ITSELF: $UseBehaviorTypeEnum;
        static DROP: $UseBehaviorTypeEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $UseBehaviorTypeEnum}.
     */
    export type $UseBehaviorTypeEnum_ = "place" | "place_itself" | "drop" | "drop_itself" | "feature" | "insert_stack";
    export class $UseBehavior$Behavior extends $Record {
        itemCount(): number;
        posOffset(): number;
        canReplace(): boolean;
        afterUseItem(): $AfterUseItemEnum;
        breakParticles(): boolean;
        type(): $UseBehaviorTypeEnum;
        feature(): ($ResourceLocation) | undefined;
        pos(): $PosEnum;
        block(): ($BlockState) | undefined;
        item(): ($ResourceLocation) | undefined;
        sounds(): ($UseBehavior$Sounds) | undefined;
        particles(): ($UseBehavior$Particles) | undefined;
        copyProperties(): ($List<string>) | undefined;
        static CODEC: $Codec<$UseBehavior$Behavior>;
        constructor(type: $UseBehaviorTypeEnum_, block: ($BlockState_) | undefined, item: ($ResourceLocation_) | undefined, itemCount: number, feature: ($ResourceLocation_) | undefined, pos: $PosEnum_, posOffset: number, afterUseItem: $AfterUseItemEnum_, canReplace: boolean, breakParticles: boolean, sounds: ($UseBehavior$Sounds_) | undefined, particles: ($UseBehavior$Particles_) | undefined, copyProperties: ($List_<string>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $UseBehavior$Behavior}.
     */
    export type $UseBehavior$Behavior_ = { feature?: ($ResourceLocation_) | undefined, pos?: $PosEnum_, itemCount?: number, sounds?: ($UseBehavior$Sounds_) | undefined, type?: $UseBehaviorTypeEnum_, particles?: ($UseBehavior$Particles_) | undefined, posOffset?: number, breakParticles?: boolean, canReplace?: boolean, item?: ($ResourceLocation_) | undefined, block?: ($BlockState_) | undefined, copyProperties?: ($List_<string>) | undefined, afterUseItem?: $AfterUseItemEnum_,  } | [feature?: ($ResourceLocation_) | undefined, pos?: $PosEnum_, itemCount?: number, sounds?: ($UseBehavior$Sounds_) | undefined, type?: $UseBehaviorTypeEnum_, particles?: ($UseBehavior$Particles_) | undefined, posOffset?: number, breakParticles?: boolean, canReplace?: boolean, item?: ($ResourceLocation_) | undefined, block?: ($BlockState_) | undefined, copyProperties?: ($List_<string>) | undefined, afterUseItem?: $AfterUseItemEnum_, ];
    export interface $UseBehavior extends RegistryMarked<RegistryTypes.ElysiumApiBlockUseBehaviorsTag, RegistryTypes.ElysiumApiBlockUseBehaviors> {}
    export class $UseBehavior$Particles extends $Record {
        particleType(): $ResourceLocation;
        xOffset(): number;
        zOffset(): number;
        yOffset(): number;
        count(): number;
        speed(): number;
        static CODEC: $Codec<$UseBehavior$Particles>;
        constructor(particleType: $ResourceLocation_, count: number, speed: number, xOffset: number, yOffset: number, zOffset: number);
    }
    /**
     * Values that may be interpreted as {@link $UseBehavior$Particles}.
     */
    export type $UseBehavior$Particles_ = { count?: number, speed?: number, xOffset?: number, particleType?: $ResourceLocation_, zOffset?: number, yOffset?: number,  } | [count?: number, speed?: number, xOffset?: number, particleType?: $ResourceLocation_, zOffset?: number, yOffset?: number, ];
    export class $UseBehavior extends $Record {
        blockstateCondition(): ($BlockStatePropertiesCondition) | undefined;
        itemCondition(): $HolderSet<$Item>;
        chanceToFail(): number;
        blocks(): $HolderSet<$Block>;
        behavior(): $UseBehavior$Behavior;
        static CODEC: $Codec<$UseBehavior>;
        constructor(blocks: $HolderSet_<$Block>, blockstateCondition: ($BlockStatePropertiesCondition) | undefined, itemCondition: $HolderSet_<$Item>, chanceToFail: number, behavior: $UseBehavior$Behavior_);
    }
    /**
     * Values that may be interpreted as {@link $UseBehavior}.
     */
    export type $UseBehavior_ = RegistryTypes.ElysiumApiBlockUseBehaviors | { itemCondition?: $HolderSet_<$Item>, behavior?: $UseBehavior$Behavior_, blockstateCondition?: ($BlockStatePropertiesCondition) | undefined, blocks?: $HolderSet_<$Block>, chanceToFail?: number,  } | [itemCondition?: $HolderSet_<$Item>, behavior?: $UseBehavior$Behavior_, blockstateCondition?: ($BlockStatePropertiesCondition) | undefined, blocks?: $HolderSet_<$Block>, chanceToFail?: number, ];
    export class $AfterUseItemEnum extends $Enum<$AfterUseItemEnum> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $AfterUseItemEnum[];
        static valueOf(arg0: string): $AfterUseItemEnum;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$AfterUseItemEnum>;
        static NOTHING: $AfterUseItemEnum;
        static CONSUME: $AfterUseItemEnum;
        static DAMAGE: $AfterUseItemEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AfterUseItemEnum}.
     */
    export type $AfterUseItemEnum_ = "nothing" | "consume" | "damage";
}
