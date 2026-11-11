import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/upgrades" {
    export class $UpgradableProperty extends $Enum<$UpgradableProperty> {
        static values(): $UpgradableProperty[];
        static valueOf(arg0: string): $UpgradableProperty;
        static Transformer: $UpgradableProperty;
        static FluidExtract: $UpgradableProperty;
        static EnergyStorage: $UpgradableProperty;
        static ItemExtract: $UpgradableProperty;
        static FluidInput: $UpgradableProperty;
        static ItemInput: $UpgradableProperty;
        static Processing: $UpgradableProperty;
    }
    /**
     * Values that may be interpreted as {@link $UpgradableProperty}.
     */
    export type $UpgradableProperty_ = "processing" | "transformer" | "energystorage" | "itemextract" | "iteminput" | "fluidextract" | "fluidinput";
}
