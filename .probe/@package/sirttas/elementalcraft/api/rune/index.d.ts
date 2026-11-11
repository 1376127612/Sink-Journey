import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/sirttas/elementalcraft/api/rune" {
    export class $Rune$BonusType extends $Enum<$Rune$BonusType> implements $StringRepresentable {
        static values(): $Rune$BonusType[];
        static valueOf(arg0: string): $Rune$BonusType;
        static byName(arg0: string): $Rune$BonusType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPEED: $Rune$BonusType;
        static LUCK: $Rune$BonusType;
        static CODEC: $Codec<$Rune$BonusType>;
        static ELEMENT_PRESERVATION: $Rune$BonusType;
        static NONE: $Rune$BonusType;
        static RANGE: $Rune$BonusType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rune$BonusType}.
     */
    export type $Rune$BonusType_ = "none" | "speed" | "element_preservation" | "luck" | "range";
}
