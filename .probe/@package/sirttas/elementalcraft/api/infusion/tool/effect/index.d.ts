import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";

declare module "@package/sirttas/elementalcraft/api/infusion/tool/effect" {
    export class $IToolInfusionEffect {
        static CODEC: $Codec<$IToolInfusionEffect>;
    }
    export interface $IToolInfusionEffect {
        getType(): $ToolInfusionEffectType<$IToolInfusionEffect>;
        getDescription(): $Component;
        get type(): $ToolInfusionEffectType<$IToolInfusionEffect>;
        get description(): $Component;
    }
    export class $ToolInfusionEffectType<T extends $IToolInfusionEffect> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ToolInfusionEffectType}.
     */
    export type $ToolInfusionEffectType_<T> = RegistryTypes.ElementalcraftToolInfusionType | { codec?: $MapCodec_<$IToolInfusionEffect>,  } | [codec?: $MapCodec_<$IToolInfusionEffect>, ];
    export interface $ToolInfusionEffectType<T> extends RegistryMarked<RegistryTypes.ElementalcraftToolInfusionTypeTag, RegistryTypes.ElementalcraftToolInfusionType> {}
}
