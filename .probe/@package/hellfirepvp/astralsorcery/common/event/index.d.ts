import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ResearchFlag, $ResearchTier_, $ResearchTier, $ResearchFlag_, $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $AttributeInstance, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $TileLumenArray, $TileLumenCrystallizer } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder } from "@package/net/minecraft/core";
import { $AltarCraftingInput, $ActiveAltarRecipe, $AltarRecipe } from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $InfusionRecipe, $ActiveInfusionRecipe, $InfusionRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe/infusion";
import { $Lumen, $LumenStack, $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Enum } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AttunementRecipe, $AttunementRecipe$Active } from "@package/hellfirepvp/astralsorcery/common/recipe/attunement";
import { $LiquidStarlightRecipeInput, $LiquidStarlightRecipe } from "@package/hellfirepvp/astralsorcery/common/recipe/liquid";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PerkAttributeType, $PerkAttributeType_ } from "@package/hellfirepvp/astralsorcery/common/perk/type/base";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $CrystalAttributesComponent } from "@package/hellfirepvp/astralsorcery/common/component";
import { $FocalTransmutationRecipe, $ActiveFocalTransmutationRecipe, $FocalTransmutationCraftingInput } from "@package/hellfirepvp/astralsorcery/common/recipe/focal/place";
import { $LumenGenerationRecipe, $LumenCrystallizationRecipe } from "@package/hellfirepvp/astralsorcery/common/recipe/lumen";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $FocalCombineCraftingInput, $FocalCombineRecipe, $ActiveFocalCombineRecipe } from "@package/hellfirepvp/astralsorcery/common/recipe/focal/drop";
import { $CombinedEnchantmentModifiers, $CombinedEnchantmentModifiers$Mutable } from "@package/hellfirepvp/astralsorcery/common/enchantment";

declare module "@package/hellfirepvp/astralsorcery/common/event" {
    export class $CrystalPropertyEvent$Merge$Type extends $Enum<$CrystalPropertyEvent$Merge$Type> implements $IExtensibleEnum {
        static values(): $CrystalPropertyEvent$Merge$Type[];
        static valueOf(arg0: string): $CrystalPropertyEvent$Merge$Type;
        static getExtensionInfo(): $ExtensionInfo;
        static MERGE_CRYSTALS: $CrystalPropertyEvent$Merge$Type;
        static ALTAR_RECIPE_MERGE: $CrystalPropertyEvent$Merge$Type;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $CrystalPropertyEvent$Merge$Type}.
     */
    export type $CrystalPropertyEvent$Merge$Type_ = "merge_crystals" | "altar_recipe_merge";
    export class $RecipeEvent$FocalCombine$End extends $RecipeEvent$FocalCombine {
        constructor(arg0: $ActiveFocalCombineRecipe);
    }
    export class $ResearchEvent$MemorizedFocalPoint extends $ResearchEvent {
        getConstellation(): $BaseConstellation;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $BaseConstellation_);
        get constellation(): $BaseConstellation;
    }
    export class $ResearchEvent$ResearchTierSet extends $ResearchEvent {
        getPrevious(): $ResearchTier;
        getTier(): $ResearchTier;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $ResearchTier_, arg3: $ResearchTier_);
        get previous(): $ResearchTier;
        get tier(): $ResearchTier;
    }
    export class $InventoryChangeEvent extends $PlayerEvent {
        getPlayer(): $ServerPlayer;
        getNewStack(): $ItemStack;
        constructor(arg0: $ServerPlayer, arg1: $ItemStack_);
        get player(): $ServerPlayer;
        get newStack(): $ItemStack;
    }
    export class $RecipeEvent$Altar$End extends $RecipeEvent$Altar {
        constructor(arg0: $AltarRecipe, arg1: $ActiveAltarRecipe);
    }
    export class $CrystalPropertyEvent extends $Event {
        getCrystalStack(): $ItemStack;
        get crystalStack(): $ItemStack;
    }
    export class $RecipeEvent$LiquidStarlight$End extends $RecipeEvent$LiquidStarlight {
        constructor(arg0: $RecipeHolder_<$LiquidStarlightRecipe>);
    }
    export class $AttributeEvent$PostProcessModded extends $Event {
        getValue(): number;
        setValue(arg0: number): void;
        getType(): $PerkAttributeType;
        getPlayer(): $Player;
        getOriginalValue(): number;
        constructor(arg0: number, arg1: $PerkAttributeType_, arg2: $Player);
        get type(): $PerkAttributeType;
        get player(): $Player;
        get originalValue(): number;
    }
    export class $RecipeEvent$Altar$Start extends $RecipeEvent$Altar implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $RecipeHolder_<$AltarRecipe>, arg1: $ActiveAltarRecipe);
    }
    export class $CrystalPropertyEvent$Change extends $CrystalPropertyEvent {
        setResultComponent(arg0: $CrystalAttributesComponent): void;
        getResultComponent(): $CrystalAttributesComponent;
        getType(): $CrystalPropertyEvent$Change$Type;
        getSourceComponent(): $CrystalAttributesComponent;
        getOriginalResultComponent(): $CrystalAttributesComponent;
        constructor(arg0: $ItemStack_, arg1: $CrystalPropertyEvent$Change$Type_, arg2: $CrystalAttributesComponent, arg3: $CrystalAttributesComponent);
        get type(): $CrystalPropertyEvent$Change$Type;
        get sourceComponent(): $CrystalAttributesComponent;
        get originalResultComponent(): $CrystalAttributesComponent;
    }
    export class $ResearchEvent$AttunedConstellationSet extends $ResearchEvent {
        getPrevious(): $BaseConstellation;
        getAttunedTo(): $BaseConstellation;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $BaseConstellation_ | null);
        get previous(): $BaseConstellation;
        get attunedTo(): $BaseConstellation;
    }
    export class $RecipeEvent$Attunement$Start extends $RecipeEvent$Attunement implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $AttunementRecipe<never>, arg1: $AttunementRecipe$Active<never, never>);
    }
    export class $RecipeEvent$FocalTransmutation$End extends $RecipeEvent$FocalTransmutation {
        constructor(arg0: $ActiveFocalTransmutationRecipe);
    }
    export class $RecipeEvent$Attunement$End extends $RecipeEvent$Attunement {
        constructor(arg0: $AttunementRecipe<never>, arg1: $AttunementRecipe$Active<never, never>);
    }
    export class $RecipeEvent$LumenGeneration extends $Event {
        getRecipe(): $LumenGenerationRecipe;
        getGenerated(): $LumenStack;
        getLumenArrayTile(): $TileLumenArray;
        constructor(arg0: $LumenGenerationRecipe, arg1: $TileLumenArray, arg2: $LumenStack);
        get recipe(): $LumenGenerationRecipe;
        get generated(): $LumenStack;
        get lumenArrayTile(): $TileLumenArray;
    }
    export class $RecipeEvent<T extends $CustomRecipe<T, I>, I extends $CustomRecipeInput> extends $Event {
        getRecipe(): $RecipeHolder<T>;
        get recipe(): $RecipeHolder<T>;
    }
    export class $RecipeEvent$LiquidStarlight$Start extends $RecipeEvent$LiquidStarlight implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $RecipeHolder_<$LiquidStarlightRecipe>);
    }
    export class $CrystalPropertyEvent$Merge extends $CrystalPropertyEvent {
        setResultComponent(arg0: $CrystalAttributesComponent): void;
        getResultComponent(): $CrystalAttributesComponent;
        getType(): $CrystalPropertyEvent$Merge$Type;
        getOriginalResultComponent(): $CrystalAttributesComponent;
        getSourceComponents(): $List<$CrystalAttributesComponent>;
        constructor(arg0: $ItemStack_, arg1: $CrystalPropertyEvent$Merge$Type_, arg2: $List_<$CrystalAttributesComponent>, arg3: $CrystalAttributesComponent);
        get type(): $CrystalPropertyEvent$Merge$Type;
        get originalResultComponent(): $CrystalAttributesComponent;
        get sourceComponents(): $List<$CrystalAttributesComponent>;
    }
    export class $RecipeEvent$FocalTransmutation extends $RecipeEvent<$FocalTransmutationRecipe, $FocalTransmutationCraftingInput> {
        getActiveRecipe(): $ActiveFocalTransmutationRecipe;
        get activeRecipe(): $ActiveFocalTransmutationRecipe;
    }
    export class $RecipeEvent$Infusion extends $RecipeEvent<$InfusionRecipe, $InfusionRecipeInput> {
        getActiveRecipe(): $ActiveInfusionRecipe;
        get activeRecipe(): $ActiveInfusionRecipe;
    }
    export class $ProjectileInaccuracyEvent extends $EntityEvent {
        getProjectile(): $Projectile;
        getInaccuracy(): number;
        setInaccuracy(arg0: number): void;
        constructor(arg0: $Projectile, arg1: number);
        get projectile(): $Projectile;
    }
    export class $RecipeEvent$Infusion$Start extends $RecipeEvent$Infusion implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $RecipeHolder_<$InfusionRecipe>, arg1: $ActiveInfusionRecipe);
    }
    export class $RecipeEvent$FocalCombine extends $RecipeEvent<$FocalCombineRecipe, $FocalCombineCraftingInput> {
        getActiveRecipe(): $ActiveFocalCombineRecipe;
        get activeRecipe(): $ActiveFocalCombineRecipe;
    }
    export class $RecipeEvent$Attunement extends $Event {
        getActiveRecipe(): $AttunementRecipe$Active<never, never>;
        getRecipe(): $AttunementRecipe<never>;
        get activeRecipe(): $AttunementRecipe$Active<never, never>;
        get recipe(): $AttunementRecipe<never>;
    }
    export class $ResearchEvent extends $PlayerEvent {
        getPlayer(): $ServerPlayer;
        getProgress(): $PlayerProgress;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress);
        get player(): $ServerPlayer;
        get progress(): $PlayerProgress;
    }
    export class $CrystalPropertyEvent$Split extends $CrystalPropertyEvent {
        getType(): $CrystalPropertyEvent$Split$Type;
        getSourceComponent(): $CrystalAttributesComponent;
        getOriginalResultComponents(): $List<$CrystalAttributesComponent>;
        getResultComponents(): $List<$CrystalAttributesComponent>;
        setResultComponents(arg0: $List_<$CrystalAttributesComponent>): void;
        constructor(arg0: $ItemStack_, arg1: $CrystalPropertyEvent$Split$Type_, arg2: $CrystalAttributesComponent, arg3: $List_<$CrystalAttributesComponent>);
        get type(): $CrystalPropertyEvent$Split$Type;
        get sourceComponent(): $CrystalAttributesComponent;
        get originalResultComponents(): $List<$CrystalAttributesComponent>;
    }
    export class $RecipeEvent$Altar extends $RecipeEvent<$AltarRecipe, $AltarCraftingInput> {
        getActiveRecipe(): $ActiveAltarRecipe;
        get activeRecipe(): $ActiveAltarRecipe;
    }
    export class $ResearchEvent$DiscoveredLumen extends $ResearchEvent {
        getLumen(): $Lumen;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $Lumen_);
        get lumen(): $Lumen;
    }
    export class $RecipeEvent$FocalTransmutation$Start extends $RecipeEvent$FocalTransmutation implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ActiveFocalTransmutationRecipe);
    }
    export class $ItemCooldownEvent extends $PlayerEvent {
        getOriginalCooldown(): number;
        setCooldown(arg0: number): void;
        getCooldown(): number;
        constructor(arg0: $Player, arg1: number);
        get originalCooldown(): number;
    }
    export class $ResearchEvent$MemorizeConstellation extends $ResearchEvent {
        getConstellation(): $BaseConstellation;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $BaseConstellation_);
        get constellation(): $BaseConstellation;
    }
    export class $CrystalPropertyEvent$Change$Type extends $Enum<$CrystalPropertyEvent$Change$Type> implements $IExtensibleEnum {
        static values(): $CrystalPropertyEvent$Change$Type[];
        static valueOf(arg0: string): $CrystalPropertyEvent$Change$Type;
        static getExtensionInfo(): $ExtensionInfo;
        static ENGRAVE_PROPERTY: $CrystalPropertyEvent$Change$Type;
        static GROW_SIZE: $CrystalPropertyEvent$Change$Type;
        static FORM_CRYSTAL_CLUSTER: $CrystalPropertyEvent$Change$Type;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $CrystalPropertyEvent$Change$Type}.
     */
    export type $CrystalPropertyEvent$Change$Type_ = "grow_size" | "form_crystal_cluster" | "engrave_property";
    export class $RecipeEvent$Infusion$End extends $RecipeEvent$Infusion {
        constructor(arg0: $InfusionRecipe, arg1: $ActiveInfusionRecipe);
    }
    export class $AttributeEvent$PostProcessVanilla extends $Event {
        getValue(): number;
        getInstance(): $AttributeInstance;
        setValue(arg0: number): void;
        getAttribute(): $Holder<$Attribute>;
        resolveAttributeType(): ($PerkAttributeType) | undefined;
        getOriginalValue(): number;
        constructor(arg0: $AttributeInstance, arg1: number);
        get instance(): $AttributeInstance;
        get attribute(): $Holder<$Attribute>;
        get originalValue(): number;
    }
    export class $RecipeEvent$FocalCombine$Start extends $RecipeEvent$FocalCombine implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ActiveFocalCombineRecipe);
    }
    export class $RecipeEvent$LiquidStarlight extends $RecipeEvent<$LiquidStarlightRecipe, $LiquidStarlightRecipeInput> {
    }
    export class $ResearchEvent$DiscoverConstellation extends $ResearchEvent {
        getConstellation(): $BaseConstellation;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $BaseConstellation_);
        get constellation(): $BaseConstellation;
    }
    export class $DynamicEnchantmentEvent$Modify extends $PlayerEvent {
        getDynamicEnchantments(): $CombinedEnchantmentModifiers$Mutable;
        constructor(arg0: $Player, arg1: $CombinedEnchantmentModifiers);
        get dynamicEnchantments(): $CombinedEnchantmentModifiers$Mutable;
    }
    export class $ResearchEvent$ResearchFlagSet extends $ResearchEvent {
        getFlag(): $ResearchFlag;
        constructor(arg0: $ServerPlayer, arg1: $PlayerProgress, arg2: $ResearchFlag_);
        get flag(): $ResearchFlag;
    }
    export class $RecipeEvent$LumenCrystallization extends $Event {
        getRecipe(): $LumenCrystallizationRecipe;
        getCrystallizerTile(): $TileLumenCrystallizer;
        getGeneratedCrystalState(): $BlockState;
        constructor(arg0: $LumenCrystallizationRecipe, arg1: $TileLumenCrystallizer, arg2: $BlockState_);
        get recipe(): $LumenCrystallizationRecipe;
        get crystallizerTile(): $TileLumenCrystallizer;
        get generatedCrystalState(): $BlockState;
    }
    export class $DynamicEnchantmentEvent$Add extends $PlayerEvent {
        getDynamicEnchantments(): $CombinedEnchantmentModifiers$Mutable;
        constructor(arg0: $Player);
        get dynamicEnchantments(): $CombinedEnchantmentModifiers$Mutable;
    }
    export class $CrystalPropertyEvent$Split$Type extends $Enum<$CrystalPropertyEvent$Split$Type> implements $IExtensibleEnum {
        static values(): $CrystalPropertyEvent$Split$Type[];
        static valueOf(arg0: string): $CrystalPropertyEvent$Split$Type;
        static getExtensionInfo(): $ExtensionInfo;
        static CHISEL_SPLIT_CRYSTAL: $CrystalPropertyEvent$Split$Type;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $CrystalPropertyEvent$Split$Type}.
     */
    export type $CrystalPropertyEvent$Split$Type_ = "chisel_split_crystal";
}
