import { $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $List_ } from "@package/java/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $Direction, $Holder } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block, $GrowingPlantHeadBlock } from "@package/net/minecraft/world/level/block";
import { $TreeGrower } from "@package/net/minecraft/world/level/block/grower";
import { $LootTable, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/mysticmods/roots/mixin/accessor" {
    export class $AccessorMixinLivingEntity {
    }
    export interface $AccessorMixinLivingEntity {
        roots$CallTickEffects(): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLivingEntity}.
     */
    export type $AccessorMixinLivingEntity_ = (() => void);
    export class $AccessorMixinEntity {
    }
    export interface $AccessorMixinEntity {
        roots$ReadAdditionalSaveData(arg0: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinEntity}.
     */
    export type $AccessorMixinEntity_ = ((arg0: $CompoundTag) => void);
    export class $AccessorMixinCropBlock {
    }
    export interface $AccessorMixinCropBlock {
        roots$CallGetAgeProperty(): $IntegerProperty;
        roots$CallGetBaseSeedId(): $ItemLike;
    }
    export class $AccessorMixinZombieVillager {
    }
    export interface $AccessorMixinZombieVillager {
        roots$GetVillagerConversionTime(): number;
        roots$SetVillagerConversionTime(arg0: number): void;
    }
    export class $AccessorMixinNestedLootTable {
    }
    export interface $AccessorMixinNestedLootTable {
        roots$GetContents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinNestedLootTable}.
     */
    export type $AccessorMixinNestedLootTable_ = (() => $Either<$ResourceKey_<$LootTable>, $LootTable>);
    export class $AccessorMixinLootItem {
    }
    export interface $AccessorMixinLootItem {
        roots$GetItem(): $Holder<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLootItem}.
     */
    export type $AccessorMixinLootItem_ = (() => $Holder_<$Item>);
    export class $AccessorMixinAbstractArrow {
    }
    export interface $AccessorMixinAbstractArrow {
        roots$getPickupItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinAbstractArrow}.
     */
    export type $AccessorMixinAbstractArrow_ = (() => $ItemStack_);
    export class $AccessorMixinMob {
    }
    export interface $AccessorMixinMob {
        roots$getEquipmentDropChance(arg0: $EquipmentSlot_): number;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinMob}.
     */
    export type $AccessorMixinMob_ = ((arg0: $EquipmentSlot) => number);
    export class $AccessorMixinGrowingPlantBlock {
    }
    export interface $AccessorMixinGrowingPlantBlock {
        roots$GetGrowthDirection(): $Direction;
        roots$GetHeadBlock(): $GrowingPlantHeadBlock;
        roots$GetBodyBlock(): $Block;
    }
    export class $AccessorMixinSaplingBlock {
    }
    export interface $AccessorMixinSaplingBlock {
        roots$GetTreeGrower(): $TreeGrower;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinSaplingBlock}.
     */
    export type $AccessorMixinSaplingBlock_ = (() => $TreeGrower);
    export class $AccessorMixinLootTable {
    }
    export interface $AccessorMixinLootTable {
        roots$GetPools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLootTable}.
     */
    export type $AccessorMixinLootTable_ = (() => $List_<$LootPool>);
    export class $AccessorMixinOverworldBiomes {
        static roots$GetNormalWaterColor(): number;
    }
    export interface $AccessorMixinOverworldBiomes {
    }
    export class $AccessorMixinTagEntry {
    }
    export interface $AccessorMixinTagEntry {
        roots$GetExpand(): boolean;
        roots$GetTag(): $TagKey<$Item>;
    }
    export class $AccessorMixinLootPool {
    }
    export interface $AccessorMixinLootPool {
        roots$GetConditions(): $List<$LootItemCondition>;
        roots$GetFunctions(): $List<$LootItemFunction>;
        roots$GetEntries(): $List<$LootPoolEntryContainer>;
    }
    export class $AccessorMixinGoat {
        static roots$getDataHasLeftHorn(): $EntityDataAccessor<boolean>;
        static roots$getDataHasRightHorn(): $EntityDataAccessor<boolean>;
        static roots$getDataIsScreamingGoat(): $EntityDataAccessor<boolean>;
    }
    export interface $AccessorMixinGoat {
    }
    export class $AccessorMixinLootPoolSingletonContainer {
    }
    export interface $AccessorMixinLootPoolSingletonContainer {
        roots$GetWeight(): number;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLootPoolSingletonContainer}.
     */
    export type $AccessorMixinLootPoolSingletonContainer_ = (() => number);
    export class $AccessorMixinCompositeEntryBase {
    }
    export interface $AccessorMixinCompositeEntryBase {
        roots$getChildren(): $List<$LootPoolEntryContainer>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinCompositeEntryBase}.
     */
    export type $AccessorMixinCompositeEntryBase_ = (() => $List_<$LootPoolEntryContainer>);
    export class $AccessorMixinBlockLootSubProvider {
    }
    export interface $AccessorMixinBlockLootSubProvider {
        roots$GetNORMAL_LEAVES_STICK_CHANCES(): number[];
        roots$CallDoesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
    }
}
