import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Consumer, $Function, $Supplier } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $TickEvent, $GrantedEvent, $ExpiredEvent } from "@package/com/alessandro/astages/api/stage/event";
import { $ACompareCondition } from "@package/com/alessandro/astages/api/constant";
import { $ASimpleRestrictionType, $ARestrictionType, $Attribute, $AttributeType } from "@package/com/alessandro/astages/api/store";

declare module "@package/com/alessandro/astages/engine/store" {
    export class $StageAttributes {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static TITLE_REMOVE: $Attribute<$Function<string, $Component>>;
        static FADE_OUT: $Attribute<number>;
        static PLAYER_ONLY: $Attribute<boolean>;
        static ACTION_BAR_MESSAGE_ADD: $Attribute<$Function<string, $Component>>;
        static TITLE_ADD: $Attribute<$Function<string, $Component>>;
        static ACTION_BAR_MESSAGE_REMOVE: $Attribute<$Function<string, $Component>>;
        static CHAT_MESSAGE_REMOVE: $Attribute<$Function<string, $Component>>;
        static SUBTITLE_ADD: $Attribute<$Function<string, $Component>>;
        static SUBTITLE_REMOVE: $Attribute<$Function<string, $Component>>;
        static SERVER_ONLY: $Attribute<boolean>;
        static FADE_IN: $Attribute<number>;
        static TICK_EVENT: $Attribute<$Consumer<$TickEvent>>;
        static CHAT_MESSAGE_ADD: $Attribute<$Function<string, $Component>>;
        static SHOW_DEFAULT: $Attribute<boolean>;
        static ICON: $Attribute<$ItemStack>;
        static GRANTED_EVENT: $Attribute<$Consumer<$GrantedEvent>>;
        static STAY: $Attribute<number>;
        static EXPIRED_EVENT: $Attribute<$Consumer<$ExpiredEvent>>;
        constructor();
    }
    export class $Attributes$Pet {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static MOUNT_MESSAGE: $Attribute<$Function<$Entity, $Component>>;
        static TAME_MESSAGE: $Attribute<$Function<$Entity, $Component>>;
        static BREED_MESSAGE: $Attribute<$Function<$Entity, $Component>>;
        constructor();
    }
    export class $Attributes$Region {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static COMMAND_MESSAGE: $Attribute<$Function<string, $Component>>;
        static INTERACT_MESSAGE: $Attribute<$Supplier<$Component>>;
        constructor();
    }
    export class $ARestrictionTypes {
        static ENCHANT: $ARestrictionType;
        static MOB: $ARestrictionType;
        static ORE: $ARestrictionType;
        static RESTRICTION_TYPES: $DeferredRegister<$ARestrictionType>;
        static STRUCTURE: $ARestrictionType;
        static EFFECT: $ARestrictionType;
        static LOOT: $ARestrictionType;
        static CROP: $ARestrictionType;
        static REGION: $ARestrictionType;
        static ITEM: $ARestrictionType;
        static SCREEN: $ARestrictionType;
        static DIMENSION: $ARestrictionType;
        static RECIPE: $ARestrictionType;
        static PET: $ARestrictionType;
        constructor();
    }
    export class $Attributes {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static TIMER_FORMATTING: $Attribute<$ChatFormatting>;
        static MAX_LIGHT_LEVEL: $Attribute<number>;
        static EQUIPPING: $Attribute<boolean>;
        static APPLY_EVERYWHERE: $Attribute<boolean>;
        static TAMING: $Attribute<boolean>;
        static EXPLOSIONS_AFFECT_ENTITIES: $Attribute<boolean>;
        static BLOCK_PLACING: $Attribute<boolean>;
        static HAS_CHECKER: $Attribute<boolean>;
        static PICKUP_DELAY: $Attribute<number>;
        static BLOCK_INTERACTIONS: $Attribute<boolean>;
        static STORING_IN_CONTAINERS: $Attribute<boolean>;
        static ANVIL: $Attribute<boolean>;
        static DIMENSION: $Attribute<$ResourceLocation>;
        static HIDING_RECIPE_VIEWER: $Attribute<boolean>;
        static BREEDING: $Attribute<boolean>;
        static COMPARE_CONDITION: $Attribute<$ACompareCondition>;
        static PICKUP: $Attribute<boolean>;
        static BIDIRECTIONAL: $Attribute<boolean>;
        static ENCHANTING_TABLE: $Attribute<boolean>;
        static HAS_REPLACER: $Attribute<boolean>;
        static AGE: $Attribute<number>;
        static STORING_IN_INVENTORY: $Attribute<boolean>;
        static GENERIC_INTERACTIONS: $Attribute<boolean>;
        static PERFORM_COMMANDS: $Attribute<boolean>;
        static LEFT_CLICK_INTERACTIONS: $Attribute<boolean>;
        static RIGHT_CLICK_INTERACTIONS: $Attribute<boolean>;
        static ALLOW_ACCESS: $Attribute<boolean>;
        static MATCH_ALL_BLOCK_STATES: $Attribute<boolean>;
        static OVERALL_MOB_SPAWNING: $Attribute<boolean>;
        static ENTERING: $Attribute<boolean>;
        static SPAWN_WITH_EQUIPMENT: $Attribute<boolean>;
        static SHOW_ACTION_BAR_NAME: $Attribute<boolean>;
        static SHOW_JADE_BLOCK_NAME: $Attribute<boolean>;
        static LEVEL: $Attribute<number>;
        static MOUNTING: $Attribute<boolean>;
        static SHOW_JADE_ITEM_NAME: $Attribute<boolean>;
        static SHOW_RECIPE_VIEWER_NAME: $Attribute<boolean>;
        static REPLACEMENT: $Attribute<$EntityType<never>>;
        static EXPLOSIONS_AFFECT_BLOCKS: $Attribute<boolean>;
        static ATTACKING: $Attribute<boolean>;
        static MAX_ACCESS: $Attribute<number>;
        static BLOCK_BREAKING: $Attribute<boolean>;
        static AFFECTS_PLAYER_ACTIONS: $Attribute<boolean>;
        static SHOW_TOOLTIP_NAME: $Attribute<boolean>;
        static MIN_LIGHT_LEVEL: $Attribute<number>;
        constructor();
    }
    export class $Attributes$Structure {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static ATTACK_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static BREAKING_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static ENTER_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static INTERACT_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static PLACE_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        constructor();
    }
    export class $AttributeTypes {
        static ENTITY_TO_COMPONENT: $AttributeType<$Function<$Entity, $Component>>;
        static CHAT_FORMATTING: $AttributeType<$ChatFormatting>;
        static BOOLEAN: $AttributeType<boolean>;
        static STACK_TO_COMPONENT: $AttributeType<$Function<$ItemStack, $Component>>;
        static RESOURCE_LOCATION: $AttributeType<$ResourceLocation>;
        static MENU_TO_COMPONENT: $AttributeType<$Function<$MenuType<never>, $Component>>;
        static ENTITY: $AttributeType<$EntityType<never>>;
        static ITEM_STACK: $AttributeType<$ItemStack>;
        static VOID_TO_COMPONENT: $AttributeType<$Supplier<$Component>>;
        static STRING_TO_COMPONENT: $AttributeType<$Function<string, $Component>>;
        static COMPARE_CONDITION: $AttributeType<$ACompareCondition>;
        static COMPONENT: $AttributeType<$Component>;
        static RESOURCE_LOCATION_TO_COMPONENT: $AttributeType<$Function<$ResourceLocation, $Component>>;
        static INTEGER: $AttributeType<number>;
        constructor();
    }
    export class $Attributes$Item {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static PICKUP_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static DROP_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static ATTACK_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static ACTION_BAR_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static USE_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static BREAKING_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static TOOLTIP_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static RECIPE_VIEWER_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static PLACE_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static JADE_ITEM_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        static JADE_BLOCK_MESSAGE: $Attribute<$Function<$ItemStack, $Component>>;
        constructor();
    }
    export class $Attributes$Screen {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static OPEN_MESSAGE: $Attribute<$Function<$MenuType<never>, $Component>>;
        constructor();
    }
    export class $ASimpleRestrictionTypes {
        static ITEM: $ASimpleRestrictionType;
        static TAME: $ASimpleRestrictionType;
        static SIMPLE_RESTRICTION_TYPES: $DeferredRegister<$ASimpleRestrictionType>;
        static MOD: $ASimpleRestrictionType;
        static ORE: $ASimpleRestrictionType;
        static DIMENSION: $ASimpleRestrictionType;
        static ARMOR: $ASimpleRestrictionType;
        static STRUCTURE: $ASimpleRestrictionType;
        static RECIPE: $ASimpleRestrictionType;
        static GUI: $ASimpleRestrictionType;
        static MOUNT: $ASimpleRestrictionType;
        constructor();
    }
    export class $Attributes$Mob {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static JADE_MESSAGE: $Attribute<$Supplier<$Component>>;
        static ATTACK_MESSAGE: $Attribute<$Supplier<$Component>>;
        static INTERACTION_MESSAGE: $Attribute<$Supplier<$Component>>;
        constructor();
    }
    export class $AModel<T> extends $Record {
        modelObject(): T;
        constructor(modelObject: T);
    }
    /**
     * Values that may be interpreted as {@link $AModel}.
     */
    export type $AModel_<T> = { modelObject?: any,  } | [modelObject?: any, ];
    export class $Attributes$Dimension {
        static ATTRIBUTES: $DeferredRegister<$Attribute<never>>;
        static LEAVE_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static EXPIRED_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        static ENTER_MESSAGE: $Attribute<$Function<$ResourceLocation, $Component>>;
        constructor();
    }
    export class $StageAttributeTypes {
        static TICK_EVENT: $AttributeType<$Consumer<$TickEvent>>;
        static GRANTED_EVENT: $AttributeType<$Consumer<$GrantedEvent>>;
        static EXPIRED_EVENT: $AttributeType<$Consumer<$ExpiredEvent>>;
        constructor();
    }
}
