import { $BakedGeoModel_, $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Enum } from "@package/java/lang";

declare module "@package/com/moepus/gbf/renderer/plan" {
    export class $BoneRenderPlanProvider {
    }
    export interface $BoneRenderPlanProvider {
        gbf$getBoneRenderPlan(): $BoneRenderPlan;
    }
    export class $BoneVisit extends $Enum<$BoneVisit> {
        static values(): $BoneVisit[];
        static valueOf(arg0: string): $BoneVisit;
        static TRANSFORM_ONLY: $BoneVisit;
        static RENDER: $BoneVisit;
        static SKIP_SUBTREE: $BoneVisit;
    }
    /**
     * Values that may be interpreted as {@link $BoneVisit}.
     */
    export type $BoneVisit_ = "skip_subtree" | "transform_only" | "render";
    export class $BoneRenderPlan {
        static FULL: $BoneRenderPlan;
    }
    export interface $BoneRenderPlan {
        prepare(arg0: $BakedGeoModel_, arg1: boolean): void;
        classify(arg0: $GeoBone): $BoneVisit;
    }
    /**
     * Values that may be interpreted as {@link $BoneRenderPlan}.
     */
    export type $BoneRenderPlan_ = ((arg0: $GeoBone) => $BoneVisit_);
}
