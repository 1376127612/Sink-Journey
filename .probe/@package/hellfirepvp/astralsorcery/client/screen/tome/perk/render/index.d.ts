import { $PerkAllocationStatus_ } from "@package/hellfirepvp/astralsorcery/common/research/perk";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BatchPerkContext } from "@package/hellfirepvp/astralsorcery/client/screen/tome/perk";
import { $FloatRectangle } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $PerkTreePoint, $AbstractPerk } from "@package/hellfirepvp/astralsorcery/common/perk/tree";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparable, $Record } from "@package/java/lang";

declare module "@package/hellfirepvp/astralsorcery/client/screen/tome/perk/render" {
    export class $PerkRenderType extends $Record implements $Comparable<$PerkRenderType> {
        priority(): number;
        compareTo(arg0: $PerkRenderType_): number;
        renderType(): $RenderType;
        constructor(renderType: $RenderType, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $PerkRenderType}.
     */
    export type $PerkRenderType_ = { priority?: number, renderType?: $RenderType,  } | [priority?: number, renderType?: $RenderType, ];
    export class $PerkRenderer<T extends $PerkTreePoint<A>, A extends $AbstractPerk<never>> {
        renderImmediate(arg0: $GuiGraphics, arg1: T, arg2: $PerkAllocationStatus_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        needsImmediateRender(arg0: $PerkTreePoint<never>): boolean;
        getEffectTick(arg0: T): number;
        getSealRenderSize(arg0: T, arg1: number): number;
        renderPerk(arg0: $BatchPerkContext, arg1: $GuiGraphics, arg2: T, arg3: $PerkAllocationStatus_, arg4: number, arg5: number, arg6: number, arg7: number): $FloatRectangle;
        static DEFAULT: $PerkRenderer<never, never>;
    }
}
