import { $ChatFormatting } from "@package/net/minecraft";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/nred/nuclearcraft/block_entity/internal/energy" {
    export class $EnergyConnection extends $Enum<$EnergyConnection> implements $StringRepresentable {
        static values(): $EnergyConnection[];
        static valueOf(arg0: string): $EnergyConnection;
        next(arg0: $EnergyConnection$Type_): $EnergyConnection;
        canExtract(): boolean;
        canReceive(): boolean;
        getSerializedName(): string;
        canConnect(): boolean;
        getTextColor(): $ChatFormatting;
        getRemappedEnumConstantName(): string;
        static IN: $EnergyConnection;
        static NON: $EnergyConnection;
        static BOTH: $EnergyConnection;
        static OUT: $EnergyConnection;
        get serializedName(): string;
        get textColor(): $ChatFormatting;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnergyConnection}.
     */
    export type $EnergyConnection_ = "in" | "out" | "both" | "non";
    export class $EnergyConnection$Type extends $Enum<$EnergyConnection$Type> {
        static values(): $EnergyConnection$Type[];
        static valueOf(arg0: string): $EnergyConnection$Type;
        static DEFAULT: $EnergyConnection$Type;
    }
    /**
     * Values that may be interpreted as {@link $EnergyConnection$Type}.
     */
    export type $EnergyConnection$Type_ = "default";
}
