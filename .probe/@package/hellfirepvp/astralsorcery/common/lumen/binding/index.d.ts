import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LumenBindingUsage } from "@package/hellfirepvp/astralsorcery/common/lumen/binding/usage";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $List, $List_, $Map_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $LumenBindingEffect } from "@package/hellfirepvp/astralsorcery/common/lumen/binding/effect";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Enum } from "@package/java/lang";
import { $RandomMobEffectInstance } from "@package/hellfirepvp/astralsorcery/common/util";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
export * as usage from "@package/hellfirepvp/astralsorcery/common/lumen/binding/usage";
export * as effect from "@package/hellfirepvp/astralsorcery/common/lumen/binding/effect";

declare module "@package/hellfirepvp/astralsorcery/common/lumen/binding" {
    export class $LumenBindingType$SlotType extends $Enum<$LumenBindingType$SlotType> implements $StringRepresentable, $IExtensibleEnum {
        getStackFromEntity(arg0: $LivingEntity): $ItemStack;
        static values(): $LumenBindingType$SlotType[];
        static valueOf(arg0: string): $LumenBindingType$SlotType;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getDisplayStack(): $ItemStack;
        isSlotTypeFor(arg0: $ItemStack_): boolean;
        getRemappedEnumConstantName(): string;
        static LEGGINGS: $LumenBindingType$SlotType;
        static HELMET: $LumenBindingType$SlotType;
        static MELEE_WEAPON: $LumenBindingType$SlotType;
        static CHESTPLATE: $LumenBindingType$SlotType;
        static BOOTS: $LumenBindingType$SlotType;
        static RANGED_WEAPON: $LumenBindingType$SlotType;
        static TOOL: $LumenBindingType$SlotType;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get displayStack(): $ItemStack;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LumenBindingType$SlotType}.
     */
    export type $LumenBindingType$SlotType_ = "helmet" | "chestplate" | "leggings" | "boots" | "melee_weapon" | "ranged_weapon" | "tool";
    export class $LumenBindingType {
        getPotionEffect(): ($MobEffectInstance) | undefined;
        static of(arg0: $Map_<$LumenBindingType$SlotType_, $LumenBinding>, arg1: $RandomMobEffectInstance | null): $LumenBindingType;
        static applyBinding(arg0: $Lumen_, arg1: $ResourceLocation_, arg2: $ItemStack_): void;
        getBinding(arg0: $LumenBindingType$SlotType_): ($LumenBinding) | undefined;
        getBinding(arg0: $ItemStack_): ($LumenBinding) | undefined;
        getActiveBinding(arg0: $ItemStack_, arg1: $LivingEntity): ($LumenBinding) | undefined;
        static CODEC: $Codec<$LumenBindingType>;
        get potionEffect(): ($MobEffectInstance) | undefined;
    }
    export class $LumenBinding {
        static of(arg0: $LumenBindingUsage, arg1: $List_<$Component_>, arg2: $LumenBindingEffect): $LumenBinding;
        getEffect(): $LumenBindingEffect;
        getDisplayText(): $List<$Component>;
        getLumenUsage(): $LumenBindingUsage;
        static CODEC: $Codec<$LumenBinding>;
        get effect(): $LumenBindingEffect;
        get displayText(): $List<$Component>;
        get lumenUsage(): $LumenBindingUsage;
    }
}
