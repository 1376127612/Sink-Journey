import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_ } from "@package/java/util/function";
import { $ARestriction } from "@package/com/alessandro/astages/api/restriction";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Set } from "@package/java/util";
import { $AMarkable, $AChangeable } from "@package/com/alessandro/astages/api/feature";

declare module "@package/com/alessandro/astages/engine/server/restriction/item" {
    export class $ABaseItemRestriction<R extends $ARestriction<R, U, $ItemStack>, U> extends $ARestriction<R, U, $ItemStack> implements $AChangeable, $AMarkable {
        markAsDirty(): void;
        setChanged(): void;
        isRestricted(object: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        showInJEI(): R;
        allowEquip(): R;
        useMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        hiddenName(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        showName(): R;
        associateLootRestriction(): $ABaseItemRestriction<never, never>;
        associateLootRestriction(id: string): $ABaseItemRestriction<never, never>;
        allowContainerStorage(): R;
        globalHiddenMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        setCanItemBeLeftClicked(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setJadeBlockMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        showRecipeViewerName(): R;
        recipeViewerMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        setCanBeStoredInContainers(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setCanInteractWithBlock(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setCanBeStoredInInventory(value: boolean): $ABaseItemRestriction<R, U>;
        disableBlockInteraction(): R;
        /**
         * @deprecated
         */
        setCanItemBeRightClicked(value: boolean): $ABaseItemRestriction<R, U>;
        allowInventoryStorage(): R;
        /**
         * @deprecated
         */
        setPickUpDelay(value: number): $ABaseItemRestriction<R, U>;
        pickupDelay(value: number): R;
        /**
         * @deprecated
         */
        setHideTooltip(ignoredValue: boolean): $ABaseItemRestriction<R, U>;
        globalShowName(): R;
        /**
         * @deprecated
         */
        setCanBePlaced(value: boolean): $ABaseItemRestriction<R, U>;
        showInRecipeViewer(): R;
        showJadeItemName(): R;
        allowLeftClick(): R;
        pickupMessage(message: $Function_<$ItemStack, $Component>): R;
        showTooltipName(): R;
        showActionBarName(): R;
        /**
         * @deprecated
         */
        setCanPickedUp(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setRenderItemName(ignoredValue: boolean): $ABaseItemRestriction<R, U>;
        allowPickup(): R;
        /**
         * @deprecated
         */
        setCanBeEquipped(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setHideInJEI(ignoredValue: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setPickupMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        attackMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        setUsageMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setAttackMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        jadeItemMessage(message: $Function_<$ItemStack, $Component>): R;
        allowPlacement(): R;
        allowAttack(): R;
        dropMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        setHiddenName(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setMineMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setJadeItemMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        placeMessage(message: $Function_<$ItemStack, $Component>): R;
        allowMining(): R;
        actionBarMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        setCanBeDig(value: boolean): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setDropMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        /**
         * @deprecated
         */
        setPlaceMessage(message: $Function_<$ItemStack, $Component>): $ABaseItemRestriction<R, U>;
        tooltipMessage(message: $Function_<$ItemStack, $Component>): R;
        jadeBlockMessage(message: $Function_<$ItemStack, $Component>): R;
        showJadeBlockName(): R;
        allowRightClick(): R;
        breakMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        mineMessage(message: $Function_<$ItemStack, $Component>): R;
        /**
         * @deprecated
         */
        showTooltip(): R;
        /**
         * @deprecated
         */
        setCanAttack(value: boolean): $ABaseItemRestriction<R, U>;
        constructor(id: string, stage: string);
        set canItemBeLeftClicked(value: boolean);
        set canBeStoredInContainers(value: boolean);
        set canInteractWithBlock(value: boolean);
        set canBeStoredInInventory(value: boolean);
        set canItemBeRightClicked(value: boolean);
        set pickUpDelay(value: number);
        set hideTooltip(value: boolean);
        set canBePlaced(value: boolean);
        set canPickedUp(value: boolean);
        set renderItemName(value: boolean);
        set canBeEquipped(value: boolean);
        set hideInJEI(value: boolean);
        set usageMessage(value: $Function_<$ItemStack, $Component>);
        set canBeDig(value: boolean);
        set canAttack(value: boolean);
    }
    export class $AItemTagRestriction extends $ABaseItemRestriction<$AItemTagRestriction, $TagKey<$Item>> {
        associateLootRestriction(id: string): $AItemTagRestriction;
        ignoreItems(...items: $Item_[]): $AItemTagRestriction;
        getIgnoredItems(): $Set<$Item>;
        getTag(): $TagKey<$Item>;
        restrict(tag: $TagKey_<$Item>): $AItemTagRestriction;
        constructor(id: string, stage: string);
        get ignoredItems(): $Set<$Item>;
        get tag(): $TagKey<$Item>;
    }
    export class $AItemRestriction extends $ABaseItemRestriction<$AItemRestriction, $Item> {
        getItems(): $List<$Item>;
        associateLootRestriction(id: string): $AItemRestriction;
        setArmorAttributes(): $AItemRestriction;
        restrict(item: $Item_): $AItemRestriction;
        constructor(id: string, stage: string);
        get items(): $List<$Item>;
    }
    export class $AItemModRestriction extends $ABaseItemRestriction<$AItemModRestriction, string> {
        ignoreTags(...tags: $TagKey_<$Item>[]): $AItemModRestriction;
        associateLootRestriction(id: string): $AItemModRestriction;
        getModIds(): $Set<string>;
        ignoreItems(...items: $Item_[]): $AItemModRestriction;
        getIgnoredItems(): $Set<$Item>;
        getIgnoredTags(): $Set<$TagKey<$Item>>;
        restrict(modId: string): $AItemModRestriction;
        constructor(id: string, stage: string);
        get modIds(): $Set<string>;
        get ignoredItems(): $Set<$Item>;
        get ignoredTags(): $Set<$TagKey<$Item>>;
    }
    export class $AItemPredicateRestriction extends $ABaseItemRestriction<$AItemPredicateRestriction, $ResourceLocation> {
        getModelId(): $ResourceLocation;
        restrict(modelId: $ResourceLocation_): $AItemPredicateRestriction;
        constructor(id: string, stage: string);
        get modelId(): $ResourceLocation;
    }
}
