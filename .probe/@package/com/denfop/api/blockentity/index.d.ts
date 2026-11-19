import { $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ItemStack, $CreativeModeTab, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $List, $Set } from "@package/java/util";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Class } from "@package/java/lang";
import { $HarvestTool, $DefaultDrop } from "@package/com/denfop/blocks/state";
import { $BlockEntityType_, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/blockentity" {
    export class $Wrenchable {
    }
    export interface $Wrenchable {
        wrenchBreak(arg0: $Level_, arg1: $BlockPos_): void;
        wrenchCanRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): boolean;
        getWrenchDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Player, arg5: number): $List<$ItemStack>;
        setFacing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
        getFacing(arg0: $Level_, arg1: $BlockPos_): $Direction;
    }
    export class $MultiBlockEntity {
        static CABLE: $MapColor;
    }
    export interface $MultiBlockEntity extends $ISubEnum {
        getMaterial(): $MapColor;
        getUniqueName(): string;
        getDummyTe(): $BlockEntityBase;
        getSupportedFacings(): $Set<$Direction>;
        allowWrenchRotating(): boolean;
        buildDummies(): void;
        setDefaultState(arg0: $BlockState_): void;
        hasUniqueName(): boolean;
        getHarvestTool(): $HarvestTool;
        hasOtherVersion(): boolean;
        getHardness(): number;
        getDefaultDrop(): $DefaultDrop;
        getMultiModels(arg0: $MultiBlockEntity): string[];
        getOtherVersion(arg0: $ItemStack_): $List<$ItemStack>;
        getIDBlock(): number;
        ordinal(): number;
        setType(arg0: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>): void;
        hasItem(): boolean;
        getCreativeTab(): $CreativeModeTab;
        getBlockType(): $BlockEntityType<$BlockEntityBase>;
        setIdBlock(arg0: number): void;
        getTeClass(): $Class<$BlockEntityBase>;
        hasActive(): boolean;
        get material(): $MapColor;
        get uniqueName(): string;
        get dummyTe(): $BlockEntityBase;
        get supportedFacings(): $Set<$Direction>;
        set defaultState(value: $BlockState_);
        get harvestTool(): $HarvestTool;
        get hardness(): number;
        get defaultDrop(): $DefaultDrop;
        get IDBlock(): number;
        set type(value: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>);
        get creativeTab(): $CreativeModeTab;
        get blockType(): $BlockEntityType<$BlockEntityBase>;
        set idBlock(value: number);
        get teClass(): $Class<$BlockEntityBase>;
    }
}
