import { $RenderBuffers } from "@package/net/minecraft/client/renderer";

declare module "@package/com/george_vi/electroenergetics/mixins" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        electroEnergetics$getRenderBuffers(): $RenderBuffers;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $RenderBuffers);
}
