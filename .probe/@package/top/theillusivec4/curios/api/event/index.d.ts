import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap, $ImmutableList } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ICuriosItemHandler, $ICurio$DropRule_, $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/top/theillusivec4/curios/api/event" {
    export class $CurioChangeEvent extends $LivingEvent {
        getSlotIndex(): number;
        getFrom(): $ItemStack;
        getIdentifier(): string;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get slotIndex(): number;
        get from(): $ItemStack;
        get identifier(): string;
        get to(): $ItemStack;
    }
    export class $DropRulesEvent extends $LivingEvent {
        addOverride(arg0: $Predicate_<$ItemStack>, arg1: $ICurio$DropRule_): void;
        getLootingLevel(): number;
        isRecentlyHit(): boolean;
        getCurioHandler(): $ICuriosItemHandler;
        getSource(): $DamageSource;
        getOverrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: number, arg4: boolean);
        get lootingLevel(): number;
        get recentlyHit(): boolean;
        get curioHandler(): $ICuriosItemHandler;
        get source(): $DamageSource;
        get overrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
    }
    export class $CurioCanEquipEvent extends $LivingEvent {
        setEquipResult(arg0: $TriState_): void;
        getSlotContext(): $SlotContext;
        getEquipResult(): $TriState;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $TriState_);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get slotContext(): $SlotContext;
        get stack(): $ItemStack;
    }
    export class $SlotModifiersUpdatedEvent extends $LivingEvent {
        getTypes(): $Set<string>;
        constructor(arg0: $LivingEntity, arg1: $Set_<string>);
        get types(): $Set<string>;
    }
    export class $CurioCanUnequipEvent extends $LivingEvent {
        setUnequipResult(arg0: $TriState_): void;
        getUnequipResult(): $TriState;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get slotContext(): $SlotContext;
        get stack(): $ItemStack;
    }
    export class $CurioAttributeModifierEvent extends $Event {
        getOriginalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        clearModifiers(): void;
        getSlotContext(): $SlotContext;
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getId(): $ResourceLocation;
        getItemStack(): $ItemStack;
        removeAttribute(arg0: $Holder_<$Attribute>): $Collection<$AttributeModifier>;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $ResourceLocation_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
        get originalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get slotContext(): $SlotContext;
        get modifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get id(): $ResourceLocation;
        get itemStack(): $ItemStack;
    }
    export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getLootingLevel(): number;
        isRecentlyHit(): boolean;
        getCurioHandler(): $ICuriosItemHandler;
        getSource(): $DamageSource;
        getDrops(): $Collection<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: $Collection_<$ItemEntity>, arg4: number, arg5: boolean);
        get lootingLevel(): number;
        get recentlyHit(): boolean;
        get curioHandler(): $ICuriosItemHandler;
        get source(): $DamageSource;
        get drops(): $Collection<$ItemEntity>;
    }
}
