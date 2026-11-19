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
        static addLevel(arg0: $Holder_<$Enchantment>, arg1: number): $EnchantmentModifier;
        getEnchantment(): ($Holder<$Enchantment>) | undefined;
        static addToAll(arg0: number): $EnchantmentModifier;
        static addEnchantmentLevel(arg0: $EnchantmentModifier$Type_, arg1: $Holder_<$Enchantment>, arg2: number): $EnchantmentModifier;
        copyWithModifier(arg0: number): $EnchantmentModifier;
        static addToExistingLevel(arg0: $Holder_<$Enchantment>, arg1: number): $EnchantmentModifier;
        getModifierChangeDisplay(): string;
        isEmpty(): boolean;
        getType(): $EnchantmentModifier$Type;
        getModifier(): number;
        getDisplay(): $MutableComponent;
        static CODEC: $Codec<$EnchantmentModifier>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantmentModifier>;
        get enchantment(): ($Holder<$Enchantment>) | undefined;
        get modifierChangeDisplay(): string;
        get empty(): boolean;
        get type(): $EnchantmentModifier$Type;
        get modifier(): number;
        get display(): $MutableComponent;
    }
    export class $CombinedEnchantmentModifiers {
        getAddedToExistingSpecific(): $Map<$Holder<$Enchantment>, number>;
        getAddedToAll(): number;
        getAddedToSpecific(): $Map<$Holder<$Enchantment>, number>;
        static of(): $CombinedEnchantmentModifiers;
        static of(...arg0: $EnchantmentModifier[]): $CombinedEnchantmentModifiers;
        static of(arg0: $Collection_<$EnchantmentModifier>): $CombinedEnchantmentModifiers;
        combine(arg0: $CombinedEnchantmentModifiers): $CombinedEnchantmentModifiers;
        mutable(): $CombinedEnchantmentModifiers$Mutable;
        get addedToExistingSpecific(): $Map<$Holder<$Enchantment>, number>;
        get addedToAll(): number;
        get addedToSpecific(): $Map<$Holder<$Enchantment>, number>;
    }
    export class $EnchantmentModifier$Type extends $Enum<$EnchantmentModifier$Type> {
        hasEnchantment(): boolean;
        static values(): $EnchantmentModifier$Type[];
        static valueOf(arg0: string): $EnchantmentModifier$Type;
        getDisplayFormat(): string;
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
        addModifier(arg0: $EnchantmentModifier): void;
        setAddToAllEnchantments(arg0: number): void;
        getAddToAllEnchantments(): number;
        getModifiers(): $List<$EnchantmentModifier>;
        build(): $CombinedEnchantmentModifiers;
        removeModifier(arg0: $EnchantmentModifier): ($EnchantmentModifier) | undefined;
        removeModifier(arg0: $Holder_<$Enchantment>, arg1: $EnchantmentModifier$Type_): ($EnchantmentModifier) | undefined;
        getModifier(arg0: $Holder_<$Enchantment>, arg1: $EnchantmentModifier$Type_): ($EnchantmentModifier) | undefined;
        get modifiers(): $List<$EnchantmentModifier>;
    }
}
