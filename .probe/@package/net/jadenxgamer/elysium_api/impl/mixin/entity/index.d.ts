import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/jadenxgamer/elysium_api/impl/mixin/entity" {
    export class $PlayerSkinAccessor {
    }
    export interface $PlayerSkinAccessor {
        elysium_api$setCapeTexture(arg0: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinAccessor}.
     */
    export type $PlayerSkinAccessor_ = ((arg0: $ResourceLocation) => void);
}
