import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $RootsTileCrafting } from "@package/mysticmods/roots/api/recipe/crafting";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $PedestalBlockEntity } from "@package/mysticmods/roots/blockentity";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BaseBlockEntity } from "@package/mysticmods/roots/blockentity/template";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as pyre from "@package/mysticmods/roots/recipe/pyre";

declare module "@package/mysticmods/roots/recipe" {
    export class $PedestalInventoryWrapper extends $CombinedInvWrapper {
        constructor(arg0: $List_<$Pair<$BlockPos_, $PedestalBlockEntity>>);
    }
    export class $TaggedPedestalCrafting<T extends $BaseBlockEntity> extends $RootsTileCrafting<$PedestalInventoryWrapper, T> {
        popItems(): $List<$ItemStack>;
        getItemsAndPositions(): $List<$TaggedPedestalCrafting$ItemPosition>;
        popAndAnimateItems(): $List<$ItemStack>;
        getIncludeTag(): $TagKey<$Block>;
        getExcludeTag(): $TagKey<$Block>;
        constructor(arg0: $TagKey_<$Block>, arg1: $TagKey_<$Block>, arg2: T, arg3: $Player, arg4: boolean);
        get itemsAndPositions(): $List<$TaggedPedestalCrafting$ItemPosition>;
        get includeTag(): $TagKey<$Block>;
        get excludeTag(): $TagKey<$Block>;
    }
    export class $TaggedPedestalCrafting$ItemPosition extends $Record {
        position(): $BlockPos;
        item(): $ItemStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TaggedPedestalCrafting$ItemPosition>;
        constructor(position: $BlockPos_, item: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $TaggedPedestalCrafting$ItemPosition}.
     */
    export type $TaggedPedestalCrafting$ItemPosition_ = { position?: $BlockPos_, item?: $ItemStack_,  } | [position?: $BlockPos_, item?: $ItemStack_, ];
}
