import { $TagKey } from "@package/net/minecraft/tags";
import { $Container } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/api/block" {
    export class $FilterConfigurable {
        static writeFilterNbt(arg0: $CompoundTag_, arg1: $List_<$ItemStack_>): void;
        static readFilterNbt(arg0: $CompoundTag_, arg1: $List_<$ItemStack_>): void;
        static getFilterInventoryFromItemsHandler(arg0: number, arg1: $Inventory, arg2: $List_<$ItemStack_>, arg3: $AbstractContainerMenu): $Container;
        static getFilterInventoryFromDataClicker(arg0: $FilterConfigurable$ExtendedData_, arg1: $FilterConfigurable$ShadowSlotClicker_): $Container;
        static getFilterInventoryFromItemsClicker(arg0: $List_<$ItemStack_>, arg1: $FilterConfigurable$ShadowSlotClicker_): $Container;
        static getFilterInventoryFromExtendedData(arg0: number, arg1: $Inventory, arg2: $FilterConfigurable$ExtendedData_, arg3: $AbstractContainerMenu): $Container;
        static invalidateCache(): void;
    }
    export interface $FilterConfigurable {
        setFilterItem(arg0: number, arg1: $ItemStack_): void;
        updateTagFilteringItems(): void;
        setOnlyDenyListTags(arg0: boolean): void;
        acceptsItem(arg0: $Item_): boolean;
        getItemFilters(): $List<$ItemStack>;
        onlyDenyListTags(): boolean;
        getDrawnSlots(): number;
        getFilteredTags(): $Object2BooleanMap<$TagKey<$Item>>;
        getSlotsPerRow(): number;
        addTagFilteringItem(arg0: $ItemStack_): boolean;
        clearFilters(): void;
        getFilterRows(): number;
        hasEmptyFilter(): boolean;
        get itemFilters(): $List<$ItemStack>;
        get drawnSlots(): number;
        get filteredTags(): $Object2BooleanMap<$TagKey<$Item>>;
        get slotsPerRow(): number;
        get filterRows(): number;
    }
    export class $FilterConfigurable$ShadowSlotClicker {
    }
    export interface $FilterConfigurable$ShadowSlotClicker {
        clickShadowSlot(arg0: number, arg1: $Slot, arg2: $ItemStack_): void;
        clickShadowSlot(arg0: number, arg1: number, arg2: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $FilterConfigurable$ShadowSlotClicker}.
     */
    export type $FilterConfigurable$ShadowSlotClicker_ = ((arg0: number, arg1: number, arg2: $ItemStack) => void);
    export class $FilterConfigurable$ExtendedData extends $Record {
        filterItems(): $List<$ItemStack>;
        slotsPerRow(): number;
        drawnSlots(): number;
        rows(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilterConfigurable$ExtendedData>;
        constructor(filterItems: $List_<$ItemStack_>, rows: number, slotsPerRow: number, drawnSlots: number);
    }
    /**
     * Values that may be interpreted as {@link $FilterConfigurable$ExtendedData}.
     */
    export type $FilterConfigurable$ExtendedData_ = { drawnSlots?: number, slotsPerRow?: number, rows?: number, filterItems?: $List_<$ItemStack_>,  } | [drawnSlots?: number, slotsPerRow?: number, rows?: number, filterItems?: $List_<$ItemStack_>, ];
}
