import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";

declare module "@package/it/zerono/mods/zerocore/internal/mixin/client" {
    export class $GuiGraphicsAccessor {
    }
    export interface $GuiGraphicsAccessor {
        zerocore_invokeInnerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiGraphicsAccessor}.
     */
    export type $GuiGraphicsAccessor_ = ((arg0: $ResourceLocation, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number) => void);
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        zerocore_getModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakeryAccessor}.
     */
    export type $ModelBakeryAccessor_ = ((arg0: $ResourceLocation) => $UnbakedModel);
}
