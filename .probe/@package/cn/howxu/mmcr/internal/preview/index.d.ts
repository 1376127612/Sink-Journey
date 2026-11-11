import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/internal/preview" {
    export class $MultiblockPreviewSnapshot$Entry extends $Record {
        state(): $BlockState;
        relativePos(): $BlockPos;
        constructor(relativePos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $MultiblockPreviewSnapshot$Entry}.
     */
    export type $MultiblockPreviewSnapshot$Entry_ = { state?: $BlockState_, relativePos?: $BlockPos_,  } | [state?: $BlockState_, relativePos?: $BlockPos_, ];
    export class $MultiblockPreviewSnapshot extends $Record {
        isEmpty(): boolean;
        entries(): $List<$MultiblockPreviewSnapshot$Entry>;
        dimension(): $ResourceKey<$Level>;
        controllerPos(): $BlockPos;
        constructor(dimension: $ResourceKey_<$Level>, controllerPos: $BlockPos_, entries: $List_<$MultiblockPreviewSnapshot$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultiblockPreviewSnapshot}.
     */
    export type $MultiblockPreviewSnapshot_ = { controllerPos?: $BlockPos_, dimension?: $ResourceKey_<$Level>, entries?: $List_<$MultiblockPreviewSnapshot$Entry_>,  } | [controllerPos?: $BlockPos_, dimension?: $ResourceKey_<$Level>, entries?: $List_<$MultiblockPreviewSnapshot$Entry_>, ];
}
