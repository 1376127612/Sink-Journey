import { $TagKey } from "@package/net/minecraft/tags";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/org/betterx/wover/pottable/api" {
    export interface $PottableSoil extends RegistryMarked<RegistryTypes.WoverWoverPottableSoilTag, RegistryTypes.WoverWoverPottableSoil> {}
    export class $PottableSoil {
        block: $ResourceKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $PottableSoil}.
     */
    export type $PottableSoil_ = RegistryTypes.WoverWoverPottableSoil;
    export class $PottablePlant {
        isValidSoil(arg0: $Block_): boolean;
        validSoils: ($TagKey<$Block>) | undefined;
        block: $ResourceKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $PottablePlant}.
     */
    export type $PottablePlant_ = RegistryTypes.WoverWoverPottablePlant;
    export interface $PottablePlant extends RegistryMarked<RegistryTypes.WoverWoverPottablePlantTag, RegistryTypes.WoverWoverPottablePlant> {}
}
