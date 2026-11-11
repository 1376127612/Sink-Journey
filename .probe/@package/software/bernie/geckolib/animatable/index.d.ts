import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        shouldPlayAnimsWhileGamePaused(): boolean;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        animatableCacheOverride(): $AnimatableInstanceCache;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getTick(arg0: $Object): number;
        getBoneResetTime(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get boneResetTime(): number;
    }
}
