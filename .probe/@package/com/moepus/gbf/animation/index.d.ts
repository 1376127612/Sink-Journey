import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BoneAnimationQueue } from "@package/software/bernie/geckolib/animation/keyframe";
import { $EasingType } from "@package/software/bernie/geckolib/animation";

declare module "@package/com/moepus/gbf/animation" {
    export class $AnimationControllerExtension {
    }
    export interface $AnimationControllerExtension {
        gbf$setJustStarting(arg0: boolean): void;
        gbf$getActiveQueues(): $ObjectArrayList<$BoneAnimationQueue>;
        gbf$beginFrame(): void;
        gbf$getEasingType(): $EasingType;
    }
}
