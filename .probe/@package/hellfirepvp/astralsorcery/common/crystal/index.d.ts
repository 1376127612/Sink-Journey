import { $ChatFormatting_ } from "@package/net/minecraft";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $MutableComponent, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Comparable } from "@package/java/lang";

declare module "@package/hellfirepvp/astralsorcery/common/crystal" {
    export class $CrystalProperty implements $Comparable<$CrystalProperty> {
        getName(arg0: number, arg1: number): $MutableComponent;
        compareTo(arg0: $CrystalProperty_): number;
        getColor(): $ColorWrapper;
        getMaxTier(): number;
        getNameFormat(): string;
        constructor(arg0: $ChatFormatting_, arg1: number);
        constructor(arg0: $ColorWrapper, arg1: number);
        constructor(arg0: $TextColor_, arg1: number);
        get color(): $ColorWrapper;
        get maxTier(): number;
        get nameFormat(): string;
    }
    /**
     * Values that may be interpreted as {@link $CrystalProperty}.
     */
    export type $CrystalProperty_ = RegistryTypes.AstralsorceryCrystalProperties;
    export interface $CrystalProperty extends RegistryMarked<RegistryTypes.AstralsorceryCrystalPropertiesTag, RegistryTypes.AstralsorceryCrystalProperties> {}
}
