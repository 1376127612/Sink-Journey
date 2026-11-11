import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $AllGuiTextures } from "@package/com/simibubi/create/foundation/gui";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/transmission/sequencer" {
    export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
        static values(): $SequencerInstructions[];
        static valueOf(arg0: string): $SequencerInstructions;
        needsPropagation(): boolean;
        translationKey: string;
        maxValue: number;
        defaultValue: number;
        static AWAIT: $SequencerInstructions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SequencerInstructions>;
        static TURN_DISTANCE: $SequencerInstructions;
        shiftStep: number;
        descriptiveTranslationKey: string;
        hasValueParameter: boolean;
        background: $AllGuiTextures;
        parameterKey: string;
        hasSpeedParameter: boolean;
        static END: $SequencerInstructions;
        static TURN_ANGLE: $SequencerInstructions;
        static DELAY: $SequencerInstructions;
    }
    /**
     * Values that may be interpreted as {@link $SequencerInstructions}.
     */
    export type $SequencerInstructions_ = "turn_angle" | "turn_distance" | "delay" | "await" | "end";
    export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
        instruction(): $SequencerInstructions;
        static fromNBT(arg0: $CompoundTag_): $SequencedGearshiftBlockEntity$SequenceContext;
        serializeNBT(): $CompoundTag;
        getEffectiveValue(arg0: number): number;
        static fromGearshift(arg0: $SequencerInstructions_, arg1: number, arg2: number): $SequencedGearshiftBlockEntity$SequenceContext;
        relativeValue(): number;
        constructor(instruction: $SequencerInstructions_, relativeValue: number);
    }
    /**
     * Values that may be interpreted as {@link $SequencedGearshiftBlockEntity$SequenceContext}.
     */
    export type $SequencedGearshiftBlockEntity$SequenceContext_ = { instruction?: $SequencerInstructions_, relativeValue?: number,  } | [instruction?: $SequencerInstructions_, relativeValue?: number, ];
}
