import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $PerkRenderType_ } from "@package/hellfirepvp/astralsorcery/client/screen/tome/perk/render";
export * as render from "@package/hellfirepvp/astralsorcery/client/screen/tome/perk/render";

declare module "@package/hellfirepvp/astralsorcery/client/screen/tome/perk" {
    export class $BatchPerkContext$Builder {
        build(): $BatchPerkContext;
        addRenderType(arg0: $PerkRenderType_): $BatchPerkContext$Builder;
        constructor();
    }
    export class $BatchPerkContext {
        static builder(): $BatchPerkContext$Builder;
        free(): void;
        getBuffer(arg0: $PerkRenderType_): $VertexConsumer;
        draw(): void;
        static PRIORITY_FOREGROUND: number;
        static PRIORITY_BACKGROUND: number;
        static PRIORITY_OVERLAY: number;
    }
}
