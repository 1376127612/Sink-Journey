import { $EntitySlotGroup_, $EntitySlotGroup } from "@package/dev/shadowsoffire/apothic_attributes/modifiers";
import { $Predicate_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/apotheosis/loot" {
    export interface $LootCategory extends RegistryMarked<RegistryTypes.ApotheosisLootCategoryTag, RegistryTypes.ApotheosisLootCategory> {}
    export class $LootCategory {
        static forItem(arg0: $ItemStack_): $LootCategory;
        /**
         * @deprecated
         */
        isArmor(): boolean;
        static mapCodec<T>(arg0: $Codec<T>): $MapCodec<$Map<$LootCategory, T>>;
        /**
         * @deprecated
         */
        isBreaker(): boolean;
        getDescIdPlural(): string;
        /**
         * @deprecated
         */
        isMeleeOrShield(): boolean;
        /**
         * @deprecated
         */
        isDefensive(): boolean;
        getDescId(): string;
        /**
         * @deprecated
         */
        isRanged(): boolean;
        /**
         * @deprecated
         */
        isMelee(): boolean;
        priority(): number;
        getKey(): $ResourceLocation;
        isValid(arg0: $ItemStack_): boolean;
        getSlots(): $EntitySlotGroup;
        isNone(): boolean;
        static CODEC: $Codec<$LootCategory>;
        static SET_CODEC: $Codec<$Set<$LootCategory>>;
        static OPTIONAL_CODEC: $Codec<$LootCategory>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LootCategory>;
        constructor(arg0: $Predicate_<$ItemStack>, arg1: $EntitySlotGroup_, arg2: number);
        constructor(arg0: $Predicate_<$ItemStack>, arg1: $EntitySlotGroup_);
        get armor(): boolean;
        get breaker(): boolean;
        get descIdPlural(): string;
        get meleeOrShield(): boolean;
        get defensive(): boolean;
        get descId(): string;
        get ranged(): boolean;
        get melee(): boolean;
        get key(): $ResourceLocation;
        get slots(): $EntitySlotGroup;
        get none(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LootCategory}.
     */
    export type $LootCategory_ = RegistryTypes.ApotheosisLootCategory;
}
