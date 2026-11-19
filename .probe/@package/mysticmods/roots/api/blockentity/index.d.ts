import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $List } from "@package/java/util";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $NonNullList } from "@package/net/minecraft/core";
import { $RecipeInventory } from "@package/mysticmods/roots/api/recipe/inventory";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockCapabilityCache } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mysticmods/roots/api/blockentity" {
    export class $RefillProvider {
    }
    export interface $RefillProvider {
        tryRefill(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        getRefillRecipe(): $Recipe<never>;
        getRefillInventory(): $RecipeInventory;
        getBlockCapabilityCache(): $BlockCapabilityCache<$IItemHandler, $Direction>;
        setBlockCapabilityCache(arg0: $BlockCapabilityCache<$IItemHandler, $Direction_>): void;
        get refillRecipe(): $Recipe<never>;
        get refillInventory(): $RecipeInventory;
    }
    export class $Bounded {
    }
    export interface $Bounded {
        getRadiusY(): number;
        isBounded(): boolean;
        getAABB(): $AABB;
        getRadiusZ(): number;
        getRadiusX(): number;
        getInsertOffset(): number;
        getDeleteOffset(): number;
        getBoundingBox(): $BoundingBox;
        get radiusY(): number;
        get bounded(): boolean;
        get AABB(): $AABB;
        get radiusZ(): number;
        get radiusX(): number;
        get insertOffset(): number;
        get deleteOffset(): number;
        get boundingBox(): $BoundingBox;
    }
    export class $FakeMenuBlockEntity {
    }
    export interface $FakeMenuBlockEntity extends $MenuProvider {
        shouldShowInsert(): boolean;
        getDisplayName(): $Component;
        get displayName(): $Component;
    }
    export class $InventoryBlockEntity {
    }
    export interface $InventoryBlockEntity {
        getItems(): $NonNullList<$ItemStack>;
        popOne(): $ItemStack;
        getNonEmptyItems(): $List<$ItemStack>;
        getOne(): $ItemStack;
        getInventory(): $ItemStackHandler;
        get items(): $NonNullList<$ItemStack>;
        get nonEmptyItems(): $List<$ItemStack>;
        get one(): $ItemStack;
        get inventory(): $ItemStackHandler;
    }
    /**
     * Values that may be interpreted as {@link $InventoryBlockEntity}.
     */
    export type $InventoryBlockEntity_ = (() => $ItemStackHandler);
    export class $ClearableBlockEntity {
    }
    export interface $ClearableBlockEntity {
        clearContents(): void;
        canClear(): boolean;
    }
    export class $ClientTickBlockEntity {
    }
    export interface $ClientTickBlockEntity {
        clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientTickBlockEntity}.
     */
    export type $ClientTickBlockEntity_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => void);
    export class $ServerTickBlockEntity {
    }
    export interface $ServerTickBlockEntity {
        serverTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerTickBlockEntity}.
     */
    export type $ServerTickBlockEntity_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $BlockState) => void);
    export class $BindableBlockEntity {
    }
    export interface $BindableBlockEntity {
        getBoundPosition(): $BlockPos;
        setBoundPosition(arg0: $BlockPos_): void;
    }
}
