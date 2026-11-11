import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/org/anti_ad/mc/ipnext/mixin" {
    export class $IMixinKeyBinding {
    }
    export interface $IMixinKeyBinding {
        setTimesPressed(arg0: number): void;
        getTimesPressed(): number;
        setPressed(arg0: boolean): void;
        getKeyCode(): $InputConstants$Key;
        getPressed(): boolean;
        get keyCode(): $InputConstants$Key;
    }
}
