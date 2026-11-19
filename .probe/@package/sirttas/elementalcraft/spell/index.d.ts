import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $UseAnim, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AbstractSpellInstance } from "@package/sirttas/elementalcraft/spell/tick";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ElementType, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as air from "@package/sirttas/elementalcraft/spell/air";
export * as tick from "@package/sirttas/elementalcraft/spell/tick";

declare module "@package/sirttas/elementalcraft/spell" {
    export interface $Spell extends RegistryMarked<RegistryTypes.ElementalcraftSpellTag, RegistryTypes.ElementalcraftSpell> {}
    export class $Spell implements $IElementTypeProvider {
        getUseAnimation(): $UseAnim;
        getUseDuration(): number;
        addInformation(arg0: $List_<$Component_>): void;
        getItemInOtherHand(arg0: $LivingEntity): $ItemStack;
        addSpellInstance(arg0: $AbstractSpellInstance): void;
        castOnBlock(arg0: $Level_, arg1: $Entity, arg2: $BlockPos_, arg3: $BlockHitResult): $InteractionResult;
        getSpellType(): $Spell$Type;
        isChannelable(): boolean;
        getConsumeAmount(): number;
        castOnEntity(arg0: $Level_, arg1: $Entity, arg2: $Entity): $InteractionResult;
        getOnUseAttributeModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        castOnSelf(arg0: $Level_, arg1: $Entity): $InteractionResult;
        getKey(): $ResourceLocation;
        delay(arg0: $Entity, arg1: number, arg2: $Runnable_): void;
        is(arg0: $Holder_<$Spell>): boolean;
        getElementType(): $ElementType;
        isValid(): boolean;
        consume(arg0: $Entity, arg1: boolean): boolean;
        getDisplayName(): $Component;
        effect(arg0: $Entity, arg1: number, arg2: $Consumer_<$AbstractSpellInstance>): void;
        getColor(): number;
        getWeight(): number;
        getDescriptionId(): string;
        getRange(arg0: $Entity | null): number;
        getCooldown(): number;
        isVisible(): boolean;
        getStrength(): number;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        get useAnimation(): $UseAnim;
        get useDuration(): number;
        get spellType(): $Spell$Type;
        get channelable(): boolean;
        get consumeAmount(): number;
        get onUseAttributeModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get key(): $ResourceLocation;
        get elementType(): $ElementType;
        get valid(): boolean;
        get displayName(): $Component;
        get color(): number;
        get weight(): number;
        get descriptionId(): string;
        get cooldown(): number;
        get visible(): boolean;
        get strength(): number;
        get elementTypeSupplier(): $Supplier<$ElementType>;
    }
    /**
     * Values that may be interpreted as {@link $Spell}.
     */
    export type $Spell_ = RegistryTypes.ElementalcraftSpell;
    export class $Spell$Type extends $Enum<$Spell$Type> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $Spell$Type[];
        static valueOf(arg0: string): $Spell$Type;
        static byName(arg0: string): $Spell$Type;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Spell$Type>;
        static MIXED: $Spell$Type;
        static COMBAT: $Spell$Type;
        static NONE: $Spell$Type;
        static UTILITY: $Spell$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Spell$Type}.
     */
    export type $Spell$Type_ = "none" | "combat" | "utility" | "mixed";
}
