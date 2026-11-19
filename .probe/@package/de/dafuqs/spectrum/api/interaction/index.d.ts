import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $List, $List_ } from "@package/java/util";
import { $BrokenBlockPredicate_, $BrokenBlockPredicate } from "@package/de/dafuqs/spectrum/api/predicate/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/de/dafuqs/spectrum/api/interaction" {
    export interface $ResonanceProcessor extends RegistryMarked<RegistryTypes.SpectrumResonanceProcessorTag, RegistryTypes.SpectrumResonanceProcessor> {}
    export class $ResonanceProcessor {
        getCodec(): $MapCodec<$ResonanceProcessor>;
        process(arg0: $BlockState_, arg1: $BlockEntity, arg2: $List_<$ItemStack_>): ($List<$ItemStack>) | undefined;
        static applyResonance(arg0: $RegistryAccess, arg1: $BlockState_, arg2: $BlockEntity, arg3: $List_<$ItemStack_>): $List<$ItemStack>;
        static CODEC: $Codec<$ResonanceProcessor>;
        static preventNextXPDrop: boolean;
        blockPredicate: $BrokenBlockPredicate;
        constructor(arg0: $BrokenBlockPredicate_);
        get codec(): $MapCodec<$ResonanceProcessor>;
    }
    /**
     * Values that may be interpreted as {@link $ResonanceProcessor}.
     */
    export type $ResonanceProcessor_ = RegistryTypes.SpectrumResonanceProcessor;
}
