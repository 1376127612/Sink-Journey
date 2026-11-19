import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $AItemTagRestriction, $AItemPredicateRestriction, $AItemRestriction, $AItemModRestriction } from "@package/com/alessandro/astages/engine/server/restriction/item";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set, $Set_, $List_ } from "@package/java/util";
import { $Stage, $TemporaryStage } from "@package/com/alessandro/astages/api/stage";
import { $ACropRestriction, $AEffectRestriction, $AMobRestriction, $AStructureRestriction, $ARegionRestriction, $ALootRestriction, $AEnchantRestriction, $ADimensionRestriction, $APetRestriction, $AOreRestriction, $AScreenRestriction, $ARegionRestriction$Type_ } from "@package/com/alessandro/astages/engine/server/restriction";
import { $ACompareCondition_ } from "@package/com/alessandro/astages/api/constant";
import { $ARestrictionType_ } from "@package/com/alessandro/astages/api/store";
import { $AConfigPreset } from "@package/com/alessandro/astages/api/store/config";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ATime } from "@package/com/alessandro/astages/api/time";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ARecipeRestriction, $ARecipeModRestriction } from "@package/com/alessandro/astages/engine/server/restriction/recipe";
import { $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $AModel } from "@package/com/alessandro/astages/engine/store";

declare module "@package/com/alessandro/astages/infrastructure/integration/kubejs/util" {
    export class $KubeJSModelUtils {
        static createPredicateModel(resourceLocation: $ResourceLocation_, predicate: $Predicate_<$ItemStack>): $AModel<$Predicate<$ItemStack>>;
        constructor();
    }
    export class $KubeJSServerUtils {
        static whiteListContainer(containerClass: $Class<never>, slots: $List_<number>): void;
        static addRestrictionForItem(id: string, stage: string, ...items: $Item_[]): $AItemRestriction;
        static customizeTemporaryStage(stageKey: string, initialTime: $ATime): $TemporaryStage;
        static customizeTemporaryStage(stageKey: string, description: string, initialTime: $ATime): $TemporaryStage;
        static addRestrictionForMob(id: string, stage: string, mob: $EntityType_<never>): $AMobRestriction;
        static addRestrictionForTag(id: string, stage: string, tag: $TagKey_<$Item>): $AItemTagRestriction;
        static addRestrictionForStructure(id: string, stage: string, ...structures: $ResourceLocation_[]): $AStructureRestriction;
        static addRestrictionForRecipe(id: string, stage: string, recipeType: $RecipeType_<never>, ...recipeIds: $ResourceLocation_[]): $ARecipeRestriction;
        static customizeStage(stageKey: string): $Stage;
        static customizeStage(stageKey: string, description: string): $Stage;
        static getRestrictionById<T>(type: $ARestrictionType_, id: string): T;
        static createPresetFor<T>(clazz: $Class<T>): $AConfigPreset<T>;
        /**
         * @deprecated
         */
        static serverHasAllStages(stages: $Set_<string>, server: $MinecraftServer): boolean;
        static serverHasAllStages(stages: $Set_<string>): boolean;
        static addStageToPlayer(player: $Player, stage: string, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        /**
         * @deprecated
         */
        static addStageToPlayer(stage: string, player: $Player): void;
        static addStageToPlayer(player: $Player, stage: string): void;
        static playerHasStage(player: $Player, stage: string): boolean;
        /**
         * @deprecated
         */
        static playerHasStage(stage: string, player: $Player): boolean;
        static serverHasStage(stage: string): boolean;
        /**
         * @deprecated
         */
        static serverHasStage(stage: string, server: $MinecraftServer): boolean;
        static addStagesToPlayer(player: $Player, stages: $Set_<string>): void;
        static addStagesToPlayer(player: $Player, stages: $Set_<string>, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static playerHasAllStages(player: $Player, stages: $Set_<string>): boolean;
        /**
         * @deprecated
         */
        static playerHasAllStages(stages: $Set_<string>, player: $Player): boolean;
        /**
         * @deprecated
         */
        static addStageToServer(stage: string, server: $MinecraftServer): void;
        static addStageToServer(stage: string): void;
        static addStageToServer(stage: string, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static addStagesToServer(stages: $Set_<string>): void;
        static addStagesToServer(stages: $Set_<string>, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static addRestrictionForArmor(id: string, stage: string, ...armors: $Item_[]): $AItemRestriction;
        static getStagesFromPlayer(player: $Player): $Set<string>;
        static removeAllStagesFromServer(showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        /**
         * @deprecated
         */
        static removeAllStagesFromServer(server: $MinecraftServer): void;
        static removeAllStagesFromServer(): void;
        static addRestrictionForLoot(id: string, stage: string): $ALootRestriction;
        /**
         * @deprecated
         */
        static serverHasAtLeastOneStage(stages: $Set_<string>, server: $MinecraftServer): boolean;
        static serverHasAtLeastOneStage(stages: $Set_<string>): boolean;
        /**
         * @deprecated
         */
        static removeStageFromPlayer(stage: string, player: $Player): void;
        static removeStageFromPlayer(player: $Player, stage: string): void;
        static removeStageFromPlayer(player: $Player, stage: string, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static removeStageFromServer(stage: string): void;
        static removeStageFromServer(stage: string, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        /**
         * @deprecated
         */
        static removeStageFromServer(stage: string, server: $MinecraftServer): void;
        static addRestrictionForPredicate(id: string, stage: string, modelId: $ResourceLocation_): $AItemPredicateRestriction;
        static addRestrictionForScreen(id: string, stage: string, menu: $MenuType_<never>): $AScreenRestriction;
        static addRestrictionForPet(id: string, stage: string, pet: $EntityType_<never>): $APetRestriction;
        /**
         * @deprecated
         */
        static playerHasAtLeastOneStage(stages: $Set_<string>, player: $Player): boolean;
        static playerHasAtLeastOneStage(player: $Player, stages: $Set_<string>): boolean;
        static addRestrictionForDimension(id: string, stage: string, dimension: $ResourceLocation_): $ADimensionRestriction;
        static getStagesFromServer(): $Set<string>;
        static addRestrictionForRegion(id: string, stage: string, type: $ARegionRestriction$Type_, center: $BlockPos_, deltaX: number, deltaY: number, deltaZ: number): $ARegionRestriction;
        static addRestrictionForRegion(id: string, stage: string, type: $ARegionRestriction$Type_, center: $BlockPos_, radius: number): $ARegionRestriction;
        static addRestrictionForRegion(id: string, stage: string, type: $ARegionRestriction$Type_, from: $BlockPos_, to: $BlockPos_): $ARegionRestriction;
        static addRestrictionForRegion(id: string, stage: string, type: $ARegionRestriction$Type_, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $ARegionRestriction;
        static removeStagesFromServer(stages: $Set_<string>): void;
        static removeStagesFromServer(stages: $Set_<string>, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static addRestrictionForMod(id: string, stage: string, ...modIds: string[]): $AItemModRestriction;
        static addRestrictionForModRecipe(id: string, stage: string, modId: string): $ARecipeModRestriction;
        static addRestrictionForOre(id: string, stage: string, original: $BlockState_, replacement: $BlockState_): $AOreRestriction;
        static addRestrictionForCrop(id: string, stage: string, crop: $Block_, compareCondition: $ACompareCondition_, age: number): $ACropRestriction;
        static addRestrictionForCrop(id: string, stage: string, crop: $Block_): $ACropRestriction;
        static addRestrictionForEffect(id: string, stage: string, effect: $MobEffect_): $AEffectRestriction;
        static removeStagesFromPlayer(player: $Player, stages: $Set_<string>, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static removeStagesFromPlayer(player: $Player, stages: $Set_<string>): void;
        static addRestrictionForEnchant(id: string, stage: string, enchantment: $Enchantment_, compareCondition: $ACompareCondition_, level: number): $AEnchantRestriction;
        static addRestrictionForEnchant(id: string, stage: string, enchantment: $Enchantment_): $AEnchantRestriction;
        static removeAllStagesFromPlayer(player: $Player, showTitle: boolean, displayChatMessage: boolean, displayActionBarMessage: boolean): void;
        static removeAllStagesFromPlayer(player: $Player): void;
        constructor();
        static get stagesFromServer(): $Set<string>;
    }
    export class $KubeJSClientUtils {
        static serverHasAllStages(stages: $Set_<string>): boolean;
        static addStageToPlayer(stage: string): void;
        static playerHasStage(stage: string): boolean;
        static serverHasStage(stage: string): boolean;
        static addStagesToPlayer(stages: $Set_<string>): void;
        static playerHasAllStages(stages: $Set_<string>): boolean;
        static addStageToServer(stage: string): void;
        static addStagesToServer(stages: $Set_<string>): void;
        static getStagesFromPlayer(player: $Player): $Set<string>;
        static removeAllStagesFromServer(): void;
        static serverHasAtLeastOneStage(stages: $Set_<string>): boolean;
        static removeStageFromPlayer(stage: string): void;
        static removeStageFromServer(stage: string): void;
        static playerHasAtLeastOneStage(stages: $Set_<string>): boolean;
        static getStagesFromServer(): $Set<string>;
        static removeStagesFromServer(stages: $Set_<string>): void;
        static removeStagesFromPlayer(stages: $Set_<string>): void;
        static removeAllStagesFromPlayer(player: $Player): void;
        constructor();
        static get stagesFromServer(): $Set<string>;
    }
    export class $KubeJSClientModelUtils {
        static createPredicateModel(resourceLocation: $ResourceLocation_, predicate: $Predicate_<$ItemStack>): $AModel<$Predicate<$ItemStack>>;
        constructor();
    }
}
