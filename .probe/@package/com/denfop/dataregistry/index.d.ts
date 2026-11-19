import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $ItemBlockTileEntity } from "@package/com/denfop/blocks/blockitem";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Class } from "@package/java/lang";
import { $TileBlockCreator, $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List } from "@package/java/util";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/dataregistry" {
    export class $DataBlockEntity<T extends $Enum<T>> {
        getElementFromID(arg0: number): T;
        getStateFromMeta(arg0: number): $BlockState;
        getMetaFromItemStack(arg0: $ItemStack_): number;
        contains(arg0: $ItemStack_): boolean;
        getState(arg0: T): $BlockState;
        create(arg0: $Class<$BlockEntityBase>, ...arg1: $DeferredHolder<$Block_, $BlockTileEntity<T>>[]): $BlockEntityType<$BlockEntityBase>;
        getObject(arg0: number): $DeferredHolder<$Block, $BlockTileEntity<T>>;
        getItem(arg0: number): $ItemBlockTileEntity<T>;
        getItem(arg0: $ItemStack_): $ItemBlockTileEntity<T>;
        getItem(): $ItemBlockTileEntity<T>;
        getItem(arg0: T): $ItemBlockTileEntity<T>;
        getItemStack(arg0: T): $ItemStack;
        getItemStack(arg0: T, arg1: number): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getItemStack(arg0: number, arg1: number): $ItemStack;
        getBlockState(arg0: number): $BlockState;
        getBlock(): $BlockTileEntity<T>;
        getBlock(arg0: T): $BlockTileEntity<T>;
        getBlock(arg0: $MultiBlockEntity): $BlockTileEntity<T>;
        getBlock(arg0: number): $BlockTileEntity<T>;
        getDefaultState(): $BlockState;
        static instance: $TileBlockCreator;
        static objectsBlock1: $List<$DeferredHolder<$Block, $BlockTileEntity<any>>>;
        static objects: $List<$DeferredHolder<$Item, never>>;
        index: number;
        constructor(arg0: $Class<T>, arg1: string, arg2: $DeferredRegister<$Block_>, arg3: $DeferredRegister<$BlockEntityType_<never>>, arg4: $DeferredRegister<$Item_>);
        constructor(arg0: $Class<T>);
        get defaultState(): $BlockState;
    }
}
