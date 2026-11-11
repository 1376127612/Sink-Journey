import { $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FakePlayerSpawner } from "@package/com/denfop/blockentity/base";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $ItemBlockCore, $BlockTileEntity } from "@package/com/denfop/blocks";

declare module "@package/com/denfop/blocks/blockitem" {
    export class $ItemBlockTileEntity<T extends $Enum<T>> extends $ItemBlockCore<T> {
        getTeBlock(arg0: $ItemStack_): $MultiBlockEntity;
        placeTeBlock(arg0: $ItemStack_, arg1: $FakePlayerSpawner, arg2: $Level_, arg3: $BlockPos_): boolean;
        identifier: $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockTileEntity<T>, arg1: T, arg2: $ResourceLocation_);
    }
}
