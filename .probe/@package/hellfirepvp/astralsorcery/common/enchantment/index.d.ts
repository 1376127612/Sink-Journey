import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";
import { $Collection_, $List, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/enchantment" {
    export class $EnchantmentModifier {
        isEmpty(): boolean;
        getType(): $EnchantmentModifier$Type;
        static addLevel(arg0: $Holder_<$Enchantment>, arg1: number): $EnchantmentModifier;
        getModifier(): number;
        static addToAll(arg0: number): $EnchantmentModifier;
        getEnchantment(): ($Holder<$Enchantment>) | undefined;
        static addEnchantmentLevel(arg0: $EnchantmentModifier$Type_, arg1: $Holder_<$Enchantment>, arg2: number): $EnchantmentModifier;
        getDisplay(): $MutableComponent;
        static addToExistingLevel(arg0: $Holder_<$Enchantment>, arg1: number): $EnchantmentModifier;
        copyWithModifier(arg0: number): $EnchantmentModifier;
        getModifierChangeDisplay(): string;
        static CODEC: $Codec<$EnchantmentModifier>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantmentModifier>;
        get empty(): boolean;
        get type(): $EnchantmentModifier$Type;
        get modifier(): number;
        get enchantment(): ($Holder<$Enchantment>) | undefined;
        get display(): $MutableComponent;
        get modifierChangeDisplay(): string;
    }
    export class $CombinedEnchantmentModifiers {
        static of(...arg0: $EnchantmentModifier[]): $CombinedEnchantmentModifiers;
        static of(): $CombinedEnchantmentModifiers;
        static of(arg0: $Collection_<$EnchantmentModifier>): $CombinedEnchantmentModifiers;
        combine(arg0: $CombinedEnchantmentModifiers): $CombinedEnchantmentModifiers;
        mutable(): $CombinedEnchantmentModifiers$Mutable;
        getAddedToExistingSpecific(): $Map<$Holder<$Enchantment>, number>;
        getAddedToAll(): number;
        getAddedToSpecific(): $Map<$Holder<$Enchantment>, number>;
        get addedToExistingSpecific(): $Map<$Holder<$Enchantment>, number>;
        get addedToAll(): number;
        get addedToSpecific(): $Map<$Holder<$Enchantment>, number>;
    }
    export class $EnchantmentModifier$Type extends $Enum<$EnchantmentModifier$Type> {
        static values(): $EnchantmentModifier$Type[];
        static valueOf(arg0: string): $EnchantmentModifier$Type;
        getDisplayFormat(): string;
        hasEnchantment(): boolean;
        static ADD_TO_SPECIFIC: $EnchantmentModifier$Type;
        static ADD_TO_EXISTING_SPECIFIC: $EnchantmentModifier$Type;
        static ADD_TO_EXISTING_ALL: $EnchantmentModifier$Type;
        get displayFormat(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentModifier$Type}.
     */
    export type $EnchantmentModifier$Type_ = "add_to_specific" | "add_to_existing_specific" | "add_to_existing_all";
    export class $CombinedEnchantmentModifiers$Mutable {
        getAddToAllEnchantments(): number;
        setAddToAllEnchantments(arg0: number): void;
        getModifiers(): $List<$EnchantmentModifier>;
        build(): $CombinedEnchantmentModifiers;
        getModifier(arg0: $Holder_<$Enchantment>, arg1: $EnchantmentModifier$Type_): ($EnchantmentModifier) | undefined;
        removeModifier(arg0: $EnchantmentModifier): ($EnchantmentModifier) | undefined;
        removeModifier(arg0: $Holder_<$Enchantment>, arg1: $EnchantmentModifier$Type_): ($EnchantmentModifier) | undefined;
        addModifier(arg0: $EnchantmentModifier): void;
        get modifiers(): $List<$EnchantmentModifier>;
    }
}
