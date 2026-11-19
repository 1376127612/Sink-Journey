import { $EnumColor, $ILangEntry_, $EnumColor_ } from "@package/mekanism/api/text";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RadialData } from "@package/mekanism/api/radial";
import { $Record } from "@package/java/lang";

declare module "@package/mekanism/api/radial/mode" {
    export class $NestedRadialMode extends $Record implements $INestedRadialMode {
        icon(): $ResourceLocation;
        hasNestedData(): boolean;
        sliceName(): $Component;
        nestedData(): $RadialData<never>;
        color(): $EnumColor;
        constructor(arg0: $RadialData<never>, arg1: $Component_, arg2: $ResourceLocation_);
        constructor(arg0: $RadialData<never>, arg1: $ILangEntry_, arg2: $ResourceLocation_, arg3: $EnumColor_);
        constructor(nestedData: $RadialData<never>, sliceName: $Component_, icon: $ResourceLocation_, color: $EnumColor_);
    }
    /**
     * Values that may be interpreted as {@link $NestedRadialMode}.
     */
    export type $NestedRadialMode_ = { color?: $EnumColor_, icon?: $ResourceLocation_, nestedData?: $RadialData<never>, sliceName?: $Component_,  } | [color?: $EnumColor_, icon?: $ResourceLocation_, nestedData?: $RadialData<never>, sliceName?: $Component_, ];
    export class $IRadialMode {
    }
    export interface $IRadialMode {
        icon(): $ResourceLocation;
        sliceName(): $Component;
        color(): $EnumColor;
    }
    export class $INestedRadialMode {
    }
    export interface $INestedRadialMode extends $IRadialMode {
        hasNestedData(): boolean;
        nestedData(): $RadialData<never>;
    }
}
