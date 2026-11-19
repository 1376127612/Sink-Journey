import { $EntityType_, $EquipmentSlot_, $EntityType, $Entity, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $List, $Set } from "@package/java/util";
import { $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $TriPredicate_, $TriPredicate } from "@package/net/neoforged/neoforge/common/util";
import { $ARestriction } from "@package/com/alessandro/astages/api/restriction";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ATime } from "@package/com/alessandro/astages/api/time";
import { $MenuType_, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Attribute_ } from "@package/com/alessandro/astages/api/store";
import { $AFilter_ } from "@package/com/alessandro/astages/api/constant";
import { $EquipmentWrapper, $EnchantWrapper_, $EnchantWrapper, $OreWrapper, $CropWrapper_, $OreWrapper_, $CropWrapper } from "@package/com/alessandro/astages/api/wrapper";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AChangeable, $AMarkable } from "@package/com/alessandro/astages/api/feature";
import { $ALootPayload } from "@package/com/alessandro/astages/api/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageType_ } from "@package/net/minecraft/world/damagesource";
export * as recipe from "@package/com/alessandro/astages/engine/server/restriction/recipe";
export * as item from "@package/com/alessandro/astages/engine/server/restriction/item";

declare module "@package/com/alessandro/astages/engine/server/restriction" {
    export class $AOreRestriction extends $ARestriction<$AOreRestriction, $OreWrapper, $BlockState> implements $AChangeable, $AMarkable {
        markAsDirty(): void;
        setChanged(): void;
        isRestricted(original: $BlockState_): boolean;
        /**
         * @deprecated
         */
        setAffectsPlayerActions(value: boolean): $AOreRestriction;
        matchAllBlockStates(): $AOreRestriction;
        /**
         * @deprecated
         */
        setStageAllBlockStates(value: boolean): $AOreRestriction;
        affectPlayerActions(): $AOreRestriction;
        set<T>(attribute: $Attribute_<T>, value: T): $AOreRestriction;
        getReplacement(): $BlockState;
        getOriginal(): $BlockState;
        restrict(wrapper: $OreWrapper_): $AOreRestriction;
        constructor(id: string, stage: string);
        set affectsPlayerActions(value: boolean);
        set stageAllBlockStates(value: boolean);
        get replacement(): $BlockState;
        get original(): $BlockState;
    }
    export class $AMobRestriction extends $ARestriction<$AMobRestriction, $EntityType<never>, $EntityType<never>> {
        isRestricted(mob: $EntityType_<never>): boolean;
        /**
         * @deprecated
         */
        spawnReplacementWithEquipment(value: boolean): $AMobRestriction;
        associateLootRestriction(id: string): $AMobRestriction;
        associateLootRestriction(): $AMobRestriction;
        disableRightClick(): $AMobRestriction;
        /**
         * @deprecated
         */
        setMinLightLevel(value: number): $AMobRestriction;
        /**
         * @deprecated
         */
        setEquipment(slot: $EquipmentSlot_, stack: $ItemStack_): $AMobRestriction;
        spawnWithEquipment(): $AMobRestriction;
        disableAttack(): $AMobRestriction;
        /**
         * @deprecated
         */
        setReplacing(value: $EntityType_<never>): $AMobRestriction;
        minLightLevel(value: number): $AMobRestriction;
        /**
         * @deprecated
         */
        jadeMessage(message: $Supplier_<$Component>): $AMobRestriction;
        /**
         * @deprecated
         */
        setMaxLightLevel(value: number): $AMobRestriction;
        /**
         * @deprecated
         */
        setJadeMobMessage(message: $Supplier_<$Component>): $AMobRestriction;
        restrictSpawnType(...types: $MobSpawnType_[]): $AMobRestriction;
        /**
         * @deprecated
         */
        setCanBeAttacked(value: boolean): $AMobRestriction;
        restrictBiomeSpawn(...biomes: $ResourceLocation_[]): $AMobRestriction;
        jadeMobMessage(message: $Supplier_<$Component>): $AMobRestriction;
        getIgnoredBiomes(): $Set<$ResourceLocation>;
        interactionMessage(message: $Supplier_<$Component>): $AMobRestriction;
        /**
         * @deprecated
         */
        setDisableSpawner(ignoredValue: boolean): $AMobRestriction;
        maxLightLevel(value: number): $AMobRestriction;
        getEquipments(): $Set<$EquipmentWrapper>;
        ignoredBiomes(...biomes: $ResourceLocation_[]): $AMobRestriction;
        getMobs(): $Set<$EntityType<never>>;
        /**
         * @deprecated
         */
        setDimension(value: $ResourceLocation_): $AMobRestriction;
        attackMessage(message: $Supplier_<$Component>): $AMobRestriction;
        /**
         * @deprecated
         */
        setAttackMessage(message: $Supplier_<$Component>): $AMobRestriction;
        getDisabledSpawnTypes(): $Set<$MobSpawnType>;
        restrictDimensionSpawn(...dimensions: $ResourceLocation_[]): $AMobRestriction;
        /**
         * @deprecated
         */
        setInteractionMessage(message: $Supplier_<$Component>): $AMobRestriction;
        getRestrictedBiomes(): $Set<$ResourceLocation>;
        /**
         * @deprecated
         */
        setCanBeRightClicked(value: boolean): $AMobRestriction;
        getRestrictedDimensions(): $Set<$ResourceLocation>;
        /**
         * @deprecated
         */
        setEnableMobSpawning(value: boolean): $AMobRestriction;
        disableOverallSpawning(): $AMobRestriction;
        replaceWith(value: $EntityType_<never>): $AMobRestriction;
        equipment(slot: $EquipmentSlot_, stack: $ItemStack_): $AMobRestriction;
        restrict(mob: $EntityType_<never>): $AMobRestriction;
        constructor(id: string, stage: string);
        set replacing(value: $EntityType_<never>);
        set canBeAttacked(value: boolean);
        set disableSpawner(value: boolean);
        get equipments(): $Set<$EquipmentWrapper>;
        get mobs(): $Set<$EntityType<never>>;
        set dimension(value: $ResourceLocation_);
        get disabledSpawnTypes(): $Set<$MobSpawnType>;
        get restrictedBiomes(): $Set<$ResourceLocation>;
        set canBeRightClicked(value: boolean);
        get restrictedDimensions(): $Set<$ResourceLocation>;
        set enableMobSpawning(value: boolean);
    }
    export class $ALootRestriction extends $ARestriction<$ALootRestriction, void, $ItemStack> {
        isRestricted(stack: $ItemStack_, payload: $ALootPayload): boolean;
        isRestricted(stack: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        setEntityFilter(filter: $AFilter_): $ALootRestriction;
        /**
         * @deprecated
         */
        applyForEveryLootTableAndDrop(value: boolean): $ALootRestriction;
        ignoredTags(...tags: $TagKey_<$Item>[]): $ALootRestriction;
        restrictMods(...modIds: string[]): $ALootRestriction;
        applyEverywhere(): $ALootRestriction;
        restrictItems(...items: $Item_[]): $ALootRestriction;
        ignoredItems(...items: $Item_[]): $ALootRestriction;
        restrictTags(...tags: $TagKey_<$Item>[]): $ALootRestriction;
        restrictBlockStates(...blockStates: $BlockState_[]): $ALootRestriction;
        restrictForDamageTypes(...damageTypes: $DamageType_[]): $ALootRestriction;
        restrictForLootTables(...lootTables: $ResourceLocation_[]): $ALootRestriction;
        restrictForEntities(...entityTypes: $EntityType_<never>[]): $ALootRestriction;
        restrictBlocks(...blocks: $Block_[]): $ALootRestriction;
        lootTableFilter(filter: $AFilter_): $ALootRestriction;
        getReplacer(): $Function<$ItemStack, $ItemStack>;
        /**
         * @deprecated
         */
        setReplacer(replacer: $Function_<$ItemStack, $ItemStack>): $ALootRestriction;
        damageTypeFilter(filter: $AFilter_): $ALootRestriction;
        /**
         * @deprecated
         */
        setLootTableFilter(filter: $AFilter_): $ALootRestriction;
        ignoredBlockStates(...blockStates: $BlockState_[]): $ALootRestriction;
        replacer(replacer: $Function_<$ItemStack, $ItemStack>): $ALootRestriction;
        entityFilter(filter: $AFilter_): $ALootRestriction;
        restrict(unused: void): $ALootRestriction;
        static IDENTIFIER: string;
        constructor(id: string, stage: string);
    }
    export class $AStructureRestriction extends $ARestriction<$AStructureRestriction, $ResourceLocation, $ResourceLocation> {
        enterMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        explosionsAffectEntities(): $AStructureRestriction;
        allowBreakableStates(...states: $BlockState_[]): $AStructureRestriction;
        allowPlaceableStates(...states: $BlockState_[]): $AStructureRestriction;
        allowInteractableStates(...states: $BlockState_[]): $AStructureRestriction;
        allowPlaceableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        setCanAttackEntities(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        setCanBlockBeBroken(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedPlaceableStates(...states: $BlockState_[]): $AStructureRestriction;
        allowBreakableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        allowInteractableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        setCanBlockBePlaced(value: boolean): $AStructureRestriction;
        allowTargetableEntities(...entities: $EntityType_<never>[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedBreakableStates(...states: $BlockState_[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedBreakableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        isBlockInteractable(state: $BlockState_): boolean;
        explosionsAffectBlocks(): $AStructureRestriction;
        isRestricted(structure: $ResourceLocation_): boolean;
        /**
         * @deprecated
         */
        addAllowedTargetableEntities(...entities: $EntityType_<never>[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedInteractableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        /**
         * @deprecated
         */
        setMakeExplosionsAffectEntities(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        setMakeExplosionsAffectBlocks(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedInteractableStates(...states: $BlockState_[]): $AStructureRestriction;
        denyEnter(): $AStructureRestriction;
        /**
         * @deprecated
         */
        addAllowedPlaceableBlocks(...blocks: $Block_[]): $AStructureRestriction;
        isEntityTargetable(entityType: $EntityType_<never>): boolean;
        attackMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        /**
         * @deprecated
         */
        setAttackMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        allowPlacement(): $AStructureRestriction;
        allowAttack(): $AStructureRestriction;
        placeMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        /**
         * @deprecated
         */
        setPlaceMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        breakMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        interactMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        /**
         * @deprecated
         */
        setCanEnter(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        setInteractMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        isBlockPlaceable(state: $BlockState_): boolean;
        allowBreaking(): $AStructureRestriction;
        /**
         * @deprecated
         */
        setEnterMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        /**
         * @deprecated
         */
        setCanInteract(value: boolean): $AStructureRestriction;
        /**
         * @deprecated
         */
        setBreakMessage(message: $Function_<$ResourceLocation, $Component>): $AStructureRestriction;
        isBlockBreakable(state: $BlockState_): boolean;
        allowInteractions(): $AStructureRestriction;
        getStructures(): $Set<$ResourceLocation>;
        restrict(structure: $ResourceLocation_): $AStructureRestriction;
        constructor(id: string, stage: string);
        set canAttackEntities(value: boolean);
        set canBlockBeBroken(value: boolean);
        set canBlockBePlaced(value: boolean);
        set makeExplosionsAffectEntities(value: boolean);
        set makeExplosionsAffectBlocks(value: boolean);
        set canEnter(value: boolean);
        set canInteract(value: boolean);
        get structures(): $Set<$ResourceLocation>;
    }
    export class $AScreenRestriction extends $ARestriction<$AScreenRestriction, $MenuType<never>, $AbstractContainerMenu> {
        getMenus(): $List<$MenuType<never>>;
        /**
         * @deprecated
         */
        setChecker(checker: $TriPredicate_<$BlockState, $BlockEntity, $AbstractContainerMenu>): $AScreenRestriction;
        isRestricted(menu: $AbstractContainerMenu, state: $BlockState_, entity: $BlockEntity): boolean;
        isRestricted(menu: $AbstractContainerMenu): boolean;
        /**
         * @deprecated
         */
        setOpenMessage(message: $Function_<$MenuType<never>, $Component>): $AScreenRestriction;
        openMessage(message: $Function_<$MenuType<never>, $Component>): $AScreenRestriction;
        getChecker(): $TriPredicate<$BlockState, $BlockEntity, $AbstractContainerMenu>;
        checker(checker: $TriPredicate_<$BlockState, $BlockEntity, $AbstractContainerMenu>): $AScreenRestriction;
        restrict(menu: $MenuType_<never>): $AScreenRestriction;
        constructor(id: string, stage: string);
        get menus(): $List<$MenuType<never>>;
    }
    export class $AEnchantRestriction extends $ARestriction<$AEnchantRestriction, $Enchantment, $EnchantWrapper> {
        isRestricted(wrapper: $EnchantWrapper_): boolean;
        /**
         * @deprecated
         */
        setCanBeStoredInInventory(value: boolean): $AEnchantRestriction;
        allowInventoryStorage(): $AEnchantRestriction;
        /**
         * @deprecated
         */
        setCanBeUsedInEnchantingTable(value: boolean): $AEnchantRestriction;
        allowAnvil(): $AEnchantRestriction;
        /**
         * @deprecated
         */
        setCanBeUsedInAnvil(value: boolean): $AEnchantRestriction;
        allowEnchantingTable(): $AEnchantRestriction;
        restrict(enchantment: $Enchantment_): $AEnchantRestriction;
        constructor(id: string, stage: string);
        set canBeStoredInInventory(value: boolean);
        set canBeUsedInEnchantingTable(value: boolean);
        set canBeUsedInAnvil(value: boolean);
    }
    export class $ARegionRestriction$Type extends $Enum<$ARegionRestriction$Type> {
        static values(): $ARegionRestriction$Type[];
        static valueOf(name: string): $ARegionRestriction$Type;
        static SPHERE: $ARegionRestriction$Type;
        static CUBE: $ARegionRestriction$Type;
    }
    /**
     * Values that may be interpreted as {@link $ARegionRestriction$Type}.
     */
    export type $ARegionRestriction$Type_ = "sphere" | "cube";
    export class $ACropRestriction extends $ARestriction<$ACropRestriction, $Block, $CropWrapper> {
        isRestricted(wrapper: $CropWrapper_): boolean;
        restrict(crop: $Block_): $ACropRestriction;
        constructor(id: string, stage: string);
    }
    export class $ADimensionRestriction extends $ARestriction<$ADimensionRestriction, $ResourceLocation, $ResourceLocation> {
        static getNbtAccessForRestrictionId(restrictionId: string): string;
        /**
         * @deprecated
         */
        setMaxStayTimer(timer: $ATime): $ADimensionRestriction;
        timerFormatting(value: $ChatFormatting_): $ADimensionRestriction;
        getMaxStayTimer(): number;
        getNbtAccess(): string;
        leaveMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        expiredMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        /**
         * @deprecated
         */
        setTimerFormatting(value: $ChatFormatting_): $ADimensionRestriction;
        enterMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        allowBidirectional(): $ADimensionRestriction;
        /**
         * @deprecated
         */
        setBidirectional(value: boolean): $ADimensionRestriction;
        maxStayTime(timer: $ATime): $ADimensionRestriction;
        /**
         * @deprecated
         */
        setMaxAccess(value: number): $ADimensionRestriction;
        isRestricted(dimension: $ResourceLocation_): boolean;
        getNbtId(): string;
        maxAccess(value: number): $ADimensionRestriction;
        /**
         * @deprecated
         */
        setLeaveDimensionMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        static getNbtIdForRestrictionId(restrictionId: string): string;
        /**
         * @deprecated
         */
        setExpiredDimensionMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        /**
         * @deprecated
         */
        setDimensionMessage(message: $Function_<$ResourceLocation, $Component>): $ADimensionRestriction;
        getDimensions(): $List<$ResourceLocation>;
        restrict(dimension: $ResourceLocation_): $ADimensionRestriction;
        constructor(id: string, stage: string);
        get nbtAccess(): string;
        set bidirectional(value: boolean);
        get nbtId(): string;
        set leaveDimensionMessage(value: $Function_<$ResourceLocation, $Component>);
        set expiredDimensionMessage(value: $Function_<$ResourceLocation, $Component>);
        set dimensionMessage(value: $Function_<$ResourceLocation, $Component>);
        get dimensions(): $List<$ResourceLocation>;
    }
    export class $ARegionRestriction extends $ARestriction<$ARegionRestriction, void, $BlockPos> {
        explosionsAffectEntities(): $ARegionRestriction;
        explosionsAffectBlocks(): $ARegionRestriction;
        isRestricted(blockPos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        setMakeExplosionsAffectEntities(value: boolean): $ARegionRestriction;
        /**
         * @deprecated
         */
        setMakeExplosionsAffectBlocks(value: boolean): $ARegionRestriction;
        setDimension(dimension: $ResourceLocation_): $ARegionRestriction;
        getDisabledCommands(): $List<string>;
        /**
         * @deprecated
         */
        setEnableMobSpawning(value: boolean): $ARegionRestriction;
        interactMessage(message: $Supplier_<$Component>): $ARegionRestriction;
        /**
         * @deprecated
         */
        setInteractMessage(message: $Supplier_<$Component>): $ARegionRestriction;
        /**
         * @deprecated
         */
        setCanInteract(value: boolean): $ARegionRestriction;
        allowInteractions(): $ARegionRestriction;
        allowMobSpawning(): $ARegionRestriction;
        commandMessage(message: $Function_<string, $Component>): $ARegionRestriction;
        denyCommands(...commands: string[]): $ARegionRestriction;
        denyCommands(): $ARegionRestriction;
        /**
         * @deprecated
         */
        setCommandMessage(message: $Function_<string, $Component>): $ARegionRestriction;
        /**
         * @deprecated
         */
        setPerformCommands(value: boolean): $ARegionRestriction;
        /**
         * @deprecated
         */
        addDisabledCommands(...commands: string[]): $ARegionRestriction;
        restrict(unused: void): $ARegionRestriction;
        setArea(type: $ARegionRestriction$Type_, center: $BlockPos_, radius: number): $ARegionRestriction;
        setArea(type: $ARegionRestriction$Type_, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $ARegionRestriction;
        setArea(type: $ARegionRestriction$Type_, center: $BlockPos_, deltaX: number, deltaY: number, deltaZ: number): $ARegionRestriction;
        setArea(type: $ARegionRestriction$Type_, from: $BlockPos_, to: $BlockPos_): $ARegionRestriction;
        constructor(id: string, stage: string);
        set makeExplosionsAffectEntities(value: boolean);
        set makeExplosionsAffectBlocks(value: boolean);
        set dimension(value: $ResourceLocation_);
        get disabledCommands(): $List<string>;
        set enableMobSpawning(value: boolean);
        set canInteract(value: boolean);
        set performCommands(value: boolean);
    }
    export class $APetRestriction extends $ARestriction<$APetRestriction, $EntityType<never>, $EntityType<never>> {
        isRestricted(pet: $EntityType_<never>): boolean;
        /**
         * @deprecated
         */
        setTamable(value: boolean): $APetRestriction;
        getPets(): $List<$EntityType<never>>;
        breedMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        /**
         * @deprecated
         */
        setBreedable(value: boolean): $APetRestriction;
        /**
         * @deprecated
         */
        setBreedMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        /**
         * @deprecated
         */
        setMountMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        mountMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        /**
         * @deprecated
         */
        setMountable(value: boolean): $APetRestriction;
        allowBreeding(): $APetRestriction;
        allowTaming(): $APetRestriction;
        tameMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        /**
         * @deprecated
         */
        setTameMessage(message: $Function_<$Entity, $Component>): $APetRestriction;
        allowMounting(): $APetRestriction;
        restrict(pet: $EntityType_<never>): $APetRestriction;
        constructor(id: string, stage: string);
        set tamable(value: boolean);
        get pets(): $List<$EntityType<never>>;
        set breedable(value: boolean);
        set mountable(value: boolean);
    }
    export class $AEffectRestriction extends $ARestriction<$AEffectRestriction, $MobEffect, $MobEffect> {
        isRestricted(effect: $MobEffect_): boolean;
        restrict(effect: $MobEffect_): $AEffectRestriction;
        constructor(id: string, stage: string);
    }
}
