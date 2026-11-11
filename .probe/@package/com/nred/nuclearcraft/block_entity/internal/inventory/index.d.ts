import { $ChatFormatting } from "@package/net/minecraft";
import { $IGuiButton } from "@package/com/nred/nuclearcraft/gui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/nred/nuclearcraft/block_entity/internal/inventory" {
    export class $ItemSorption$Type extends $Enum<$ItemSorption$Type> {
        static values(): $ItemSorption$Type[];
        static valueOf(arg0: string): $ItemSorption$Type;
        static INPUT: $ItemSorption$Type;
        static OUTPUT: $ItemSorption$Type;
        static DEFAULT: $ItemSorption$Type;
    }
    /**
     * Values that may be interpreted as {@link $ItemSorption$Type}.
     */
    export type $ItemSorption$Type_ = "default" | "input" | "output";
    export class $ItemSorption extends $Enum<$ItemSorption> implements $StringRepresentable, $IGuiButton {
        static values(): $ItemSorption[];
        static valueOf(arg0: string): $ItemSorption;
        next(arg0: $ItemSorption$Type_, arg1: boolean): $ItemSorption;
        canExtract(): boolean;
        getTexture(arg0: boolean): $ResourceLocation;
        canReceive(): boolean;
        getSerializedName(): string;
        canConnect(): boolean;
        getTextColor(): $ChatFormatting;
        static fromInt(arg0: $ItemSorption$Type_, arg1: number): $ItemSorption;
        getTextureWidth(): number;
        getTextureHeight(): number;
        getRemappedEnumConstantName(): string;
        static AUTO_IN: $ItemSorption;
        static AUTO_OUT: $ItemSorption;
        static IN: $ItemSorption;
        static NON: $ItemSorption;
        static BOTH: $ItemSorption;
        static OUT: $ItemSorption;
        get serializedName(): string;
        get textColor(): $ChatFormatting;
        get textureWidth(): number;
        get textureHeight(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemSorption}.
     */
    export type $ItemSorption_ = "in" | "out" | "both" | "non" | "auto_in" | "auto_out";
}
