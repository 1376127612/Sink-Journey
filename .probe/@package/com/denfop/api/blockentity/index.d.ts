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
        wrenchCanRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): boolean;
        wrenchBreak(arg0: $Level_, arg1: $BlockPos_): void;
        getWrenchDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Player, arg5: number): $List<$ItemStack>;
        getFacing(arg0: $Level_, arg1: $BlockPos_): $Direction;
        setFacing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
    }
    export class $MultiBlockEntity {
        static CABLE: $MapColor;
    }
    export interface $MultiBlockEntity extends $ISubEnum {
        ordinal(): number;
        setIdBlock(arg0: number): void;
        setType(arg0: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>): void;
        getIDBlock(): number;
        hasItem(): boolean;
        getCreativeTab(): $CreativeModeTab;
        getUniqueName(): string;
        getBlockType(): $BlockEntityType<$BlockEntityBase>;
        getDummyTe(): $BlockEntityBase;
        getTeClass(): $Class<$BlockEntityBase>;
        getMaterial(): $MapColor;
        hasUniqueName(): boolean;
        getDefaultDrop(): $DefaultDrop;
        getHardness(): number;
        hasOtherVersion(): boolean;
        setDefaultState(arg0: $BlockState_): void;
        getHarvestTool(): $HarvestTool;
        getOtherVersion(arg0: $ItemStack_): $List<$ItemStack>;
        getMultiModels(arg0: $MultiBlockEntity): string[];
        hasActive(): boolean;
        buildDummies(): void;
        allowWrenchRotating(): boolean;
        getSupportedFacings(): $Set<$Direction>;
        set idBlock(value: number);
        set type(value: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>);
        get IDBlock(): number;
        get creativeTab(): $CreativeModeTab;
        get uniqueName(): string;
        get blockType(): $BlockEntityType<$BlockEntityBase>;
        get dummyTe(): $BlockEntityBase;
        get teClass(): $Class<$BlockEntityBase>;
        get material(): $MapColor;
        get defaultDrop(): $DefaultDrop;
        get hardness(): number;
        set defaultState(value: $BlockState_);
        get harvestTool(): $HarvestTool;
        get supportedFacings(): $Set<$Direction>;
    }
}
