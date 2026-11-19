import { $GeodeOreDefinition } from "@package/de/dafuqs/spectrum/data_loaders";
import { $PackagePortTargetType } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $SimulatedDeviceType, $DeviceFeatureType } from "@package/com/george_vi/electroenergetics/devices/device";
import { $ElysiumBrewingRecipe } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/brewing_recipe";
import { $ModifierSourceProvider } from "@package/hellfirepvp/astralsorcery/common/perk/source";
import { $PerkAttributeModifier } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";
import { $ItemPredicate_, $ItemCraftedKubeEvent, $ItemDroppedKubeEvent, $ItemDestroyedKubeEvent, $ItemPickedUpKubeEvent, $ItemSmeltedKubeEvent, $ItemEntityInteractedKubeEvent, $ItemClickedKubeEvent, $ModifyItemTooltipsKubeEvent, $FoodEatenKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $AEKeyType } from "@package/appeng/api/stacks";
import { $HeightProviderType } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $MMCRServerEventJS } from "@package/cn/howxu/mmcr/compat/kubejs";
import { $Chemical } from "@package/mekanism/api/chemical";
import { $WireType } from "@package/com/george_vi/electroenergetics/simulation";
import { $Herb } from "@package/mysticmods/roots/api/herb";
import { $PantographType } from "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph";
import { $ConnectionConfigType } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $StructurePlacementType } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
import { PaintingVariant, JukeboxSong } from "@side-only/server/events/registry";
import { $WorldEffect } from "@package/de/dafuqs/spectrum/api/recipe";
import { $StructureMarkerReplacement$Type } from "@package/hellfirepvp/astralsorcery/common/worldgen/structure/marker";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $BlockStateProviderType } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ObserverProvider } from "@package/hellfirepvp/observerlib/api";
import { $PlacedFeature, $PlacementModifierType } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ConfigurableBlockEntityPropertiesType } from "@package/sirttas/elementalcraft/block/entity/properties";
import { $AssignedSurfaceRule } from "@package/org/betterx/wover/surface/api";
import { $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $WireAttachmentType } from "@package/com/george_vi/electroenergetics/content/wire";
import { $PerkType, $PerkDataType } from "@package/hellfirepvp/astralsorcery/common/perk/tree";
import { $RecipeFunction$Type } from "@package/dan200/computercraft/shared/recipe/function";
import { $FastNoiseConfig } from "@package/dev/worldgen/lithostitched/api/worldgen/densityfunction/fastnoise";
import { $GameEvent, $PositionSourceType } from "@package/net/minecraft/world/level/gameevent";
import { $KindlingVariant, $LizardHornVariant, $LizardFrillVariant } from "@package/de/dafuqs/spectrum/entity/variants";
import { $RootPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $SyncData$Type } from "@package/hellfirepvp/astralsorcery/common/data/sync";
import { $FluidIngredient_, $FluidIngredientType } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $DataSyncSerializer } from "@package/earth/terrarium/common_storage_lib/data/sync";
import { $TurtleOverlay } from "@package/dan200/computercraft/shared/turtle";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $ECOCellType } from "@package/cn/dancingsnow/neoecoae/api/storage";
import { $BlockEntityTickKubeEvent } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SpawnerStat } from "@package/dev/shadowsoffire/apothic_spawners/stats";
import { $WorldEventType } from "@package/team/lodestar/lodestone/systems/worldevent";
import { $TagWrapper, $TagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $TemplateList } from "@package/dev/worldgen/lithostitched/worldgen/modifier/template";
import { $ProgWidgetType } from "@package/me/desht/pneumaticcraft/api/drone";
import { $EntitySpawnedKubeEvent, $AfterLivingEntityHurtKubeEvent, $LivingEntityDeathKubeEvent, $CheckLivingEntitySpawnKubeEvent, $LivingEntityDropsKubeEvent, $BeforeLivingEntityHurtKubeEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";
import { $LootNbtProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $LootCategory } from "@package/dev/shadowsoffire/apotheosis/loot";
import { $ConduitNetworkContextType } from "@package/com/enderio/enderio/api/conduits/network";
import { $Spell as $Spell$1 } from "@package/sirttas/elementalcraft/spell";
import { $AddEntriesKubeEvent, $RegisterSubtypesKubeEvent, $RemoveEntriesKubeEvent, $AddInformationKubeEvent, $RemoveRecipesKubeEvent, $GroupEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $BiomeData } from "@package/org/betterx/wover/biome/api/data";
import { $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $PastelUpgradeSignature } from "@package/de/dafuqs/spectrum/api/pastel_network";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
import { $Conduit, $ConduitType } from "@package/com/enderio/enderio/api/conduits";
import { $StructureTemplatePool, $StructurePoolElementType } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $ExplosionKubeEvent$Before, $SimpleLevelKubeEvent, $ExplosionKubeEvent$After } from "@package/dev/latvian/mods/kubejs/level";
import { $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $WireInteractionBehaviour } from "@package/com/george_vi/electroenergetics/content/wire/interaction";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $WorldPresetInfo } from "@package/org/betterx/wover/preset/api";
import { $Feature, $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $TrimPattern, $TrimMaterial } from "@package/net/minecraft/world/item/armortrim";
import { $ModuleData } from "@package/mekanism/api/gear";
import { $IPlayerConditionType, $ILevelConditionType } from "@package/mysticmods/roots/api/condition";
import { $LootScoreProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/score";
import { $PanelAttachmentType } from "@package/com/george_vi/electroenergetics/content/electrical_panel/attachments";
import { $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";
import { $PerkAttributeConverter } from "@package/hellfirepvp/astralsorcery/common/perk/convert";
import { $HolderTarget$Type } from "@package/dev/worldgen/lithostitched/api/worldgen/modifier/target";
import { $CompostableRecipesKubeEvent, $ModifyCraftingItemKubeEvent, $AfterRecipesLoadedKubeEvent, $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ElectricTrainSoundType } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $KubeJSStageRemovedEvent, $KubeJSStageAddedEvent } from "@package/com/alessandro/astages/infrastructure/integration/kubejs/event";
import { $ITextEditAction } from "@package/ca/teamdman/sfm/client/text_editor/action";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";
import { $UseBehavior } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/use_behaviors";
import { $BaseConstellation } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $FoliagePlacerType } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $CanHarvestFunction, $LightFunction, $CanGrowFunction, $HarvestFunction } from "@package/mysticmods/roots/api/growth";
import { $ChestKubeEvent, $PlayerClonedKubeEvent, $StageChangedEvent, $SimplePlayerKubeEvent, $PlayerAdvancementKubeEvent, $PlayerRespawnedKubeEvent, $PlayerChatReceivedKubeEvent, $InventoryChangedKubeEvent, $InventoryKubeEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $SpellModifier, $RitualModifier } from "@package/mysticmods/roots/api/modifier";
import { $UpgradeType } from "@package/dan200/computercraft/api/upgrades";
import { $EntityEquipmentSlot, $EntitySlotGroup } from "@package/dev/shadowsoffire/apothic_attributes/modifiers";
import { $TravelTargetType, $TravelTargetSerializer } from "@package/com/enderio/enderio/api/travel";
import { $ConduitDataType } from "@package/com/enderio/enderio/api/conduits/network/node/legacy";
import { $Lumen } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $IIngredientTransformerSerializer } from "@package/com/blamejared/crafttweaker/api/ingredient/transformer";
import { $AltarEffect } from "@package/hellfirepvp/astralsorcery/common/recipe/altar/effect";
import { $SoftFluid } from "@package/net/mehvahdjukaar/moonlight/api/fluids";
import { $DensityFunction, $SurfaceRules$RuleSource, $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";
import { $CommandRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/command";
import { $IPureOreRecipeFactoryType } from "@package/sirttas/elementalcraft/api/pureore/factory";
import { $FeatureSizeType } from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
import { $TreeDecoratorType } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $SFMBlockCapabilityProvider } from "@package/ca/teamdman/sfm/common/capability";
import { $BlockDropsKubeEvent, $BlockPlacedKubeEvent, $BlockRightClickedKubeEvent, $BlockPickedKubeEvent, $DetectorBlockKubeEvent, $RandomTickKubeEvent, $FarmlandTrampledKubeEvent, $BlockStoppedFallingKubeEvent, $BlockBrokenKubeEvent, $BlockLeftClickedKubeEvent, $BlockStartedFallingKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $BlockPropertiesTransformer } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/properties_transformer";
import { $RobitSkin } from "@package/mekanism/api/robit";
import { $WorldgenModifier } from "@package/dev/worldgen/lithostitched/api/worldgen/modifier";
import { $NodeDataType } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $LiquidInteractionResult$Type } from "@package/hellfirepvp/astralsorcery/common/recipe/liquid/interaction/result";
import { $LumenBindingEffect$Type } from "@package/hellfirepvp/astralsorcery/common/lumen/binding/effect";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $InkColor } from "@package/de/dafuqs/spectrum/api/ink/color";
import { $KJSBlockUIMenuType$BlockUIEventJS, $KJSPlayerUIMenuType$PlayerUIEventJS, $KJSHeldItemUIMenuType$ItemUIEventJS } from "@package/com/lowdragmc/lowdraglib2/integration/kjs/ui";
import { $BiomeInjector } from "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector";
import { $IIngredientConditionSerializer } from "@package/com/blamejared/crafttweaker/api/ingredient/condition";
import { $WorldTestType } from "@package/mysticmods/roots/api/test/world";
import { $SensorType } from "@package/net/minecraft/world/entity/ai/sensing";
import { $HandMadeToolFilterKubeEvent } from "@package/com/alben/createhandmade/kubejs";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $IPocketUpgrade } from "@package/dan200/computercraft/api/pocket";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Schedule, $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $CrystalProperty } from "@package/hellfirepvp/astralsorcery/common/crystal";
import { $ResonanceProcessor } from "@package/de/dafuqs/spectrum/api/interaction";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $PerkAttributeLimiter$Limit } from "@package/hellfirepvp/astralsorcery/common/perk";
import { $WorldCarver, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureType, $Structure, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GrindingBallModificationEvent, $VatReagentModificationEvent, $ConduitRegistrationEvent } from "@package/com/almostreliable/kubeio/event";
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $PastelPayloadType } from "@package/de/dafuqs/spectrum/blocks/pastel_network/payloads";
import { $ChatType } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $PerkAttributeType } from "@package/hellfirepvp/astralsorcery/common/perk/type/base";
import { $ISFMTextEditorRegistration } from "@package/ca/teamdman/sfm/client/text_editor";
import { $BlockPredicateType } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $PerkRequirement$Type } from "@package/hellfirepvp/astralsorcery/common/perk/tree/requirement";
import { $AltarRecipeOutputModifier$Type } from "@package/hellfirepvp/astralsorcery/common/recipe/altar/output";
import { $Spell } from "@package/mysticmods/roots/api/spell";
import { $SnapshotType } from "@package/mysticmods/roots/api/snapshot";
import { $MBDMachineEvents$MachineUseWithoutItemEventJS, $MBDMachineEvents$MachineRecipeModifyEventBeforeJS, $MBDMachineEvents$MachineOpenUIEventJS, $MBDMachineEvents$MachineOnRecipeFinishEventJS, $MBDMachineEvents$MachineNeighborChangedEventJS, $MBDMachineEvents$MachineRecipeModifyEventAfterJS, $MBDMachineEvents$MachineStructureInvalidEventJS, $MBDMachineEvents$MachineUIEventJS, $MBDMachineEvents$MachineFuelRecipeModifyEventJS, $MBDMachineEvents$MachineOnConsumeInputsAfterWorkingEventJS, $MBDMachineEvents$MachineRemovedEventJS, $MBDMachineEvents$MachineOnRecipeWaitingEventJS, $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS, $MBDMachineEvents$MachineDropsEventJS, $MBDMachineEvents$MachineFuelBurningFinishEventJS, $MBDMachineEvents$MachineRecipeStatusChangedEventJS, $MBDMachineEvents$MachineUseCatalystEventJS, $MBDMachineEvents$MachineOnLoadEventJS, $MBDMachineEvents$MachineTickEventJS, $MBDMachineEvents$MachineAfterRecipeWorkingEventJS, $MBDRecipeTypeEvents$TransferProxyRecipeEventJS, $MBDMachineEvents$MachineStructureFormedEventJS, $MBDMachineEvents$MachineOnRecipeWorkingEventJS, $MBDMachineEvents$MachinePlacedEventJS, $MBDMachineEvents$MachineStateChangedEventJS } from "@package/com/lowdragmc/mbd2/integration/kubejs/events";
import { $PrintingBehaviourProvider } from "@package/plus/dragons/createenchantmentindustry/common/fluids/printer/behaviour";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $IPlayerMatcher$MatcherType } from "@package/me/desht/pneumaticcraft/api/misc";
import { $StatType } from "@package/net/minecraft/stats";
import { $BiomeModification } from "@package/org/betterx/wover/biome/api/modification";
import { $RuleBlockEntityModifierType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity";
import { $LumenBindingUsage$Type } from "@package/hellfirepvp/astralsorcery/common/lumen/binding/usage";
import { $PottableSoil, $PottablePlant } from "@package/org/betterx/wover/pottable/api";
import { $MicroMaterial } from "@package/codechicken/microblock/api";
import { $NormalNoise$NoiseParameters } from "@package/net/minecraft/world/level/levelgen/synth";
import { $LootPoolEntryType } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $PipeUpgradeType } from "@package/sirttas/elementalcraft/block/pipe/upgrade/type";
import { $PropertyType, $PropertySerializer } from "@package/mysticmods/roots/api/property";
import { $Attribute as $Attribute$1 } from "@package/net/minecraft/world/entity/ai/attributes";
import { $PlayerCloneEventJS, $PlayerChangeDimensionEventJS, $EntityEnterChunkEventJS, $EntityTameEventJS, $PlayerRespawnEventJS, $ProxyEventJS } from "@package/pie/ilikepiefoo/events";
import { $NetworkKubeEvent } from "@package/dev/latvian/mods/kubejs/net";
import { $GroveAction } from "@package/mysticmods/roots/api/action";
import { $Ritual } from "@package/mysticmods/roots/api/ritual";
import { $RoomTemplate } from "@package/dev/compactmods/machines/api/room/template";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MultipartType, $PartConverter } from "@package/codechicken/multipart/api";
import { $EctoplasmHaunting, $WispArchaeology, $ApparitionGargoyleStatues, $Antidote, $OnDeathGroundConversion, $ApparitionAggressions } from "@package/net/jadenxgamer/netherexp/core/datadriven";
import { $LootModificationEventJS, $LootTableEventJS } from "@package/com/almostreliable/lootjs/kube";
import { $RecipeMappingRegistry, $RecipeSchemaRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Level } from "@package/net/minecraft/world/level";
import { $Grove } from "@package/mysticmods/roots/api/grove";
import { $BlockSoundTransformer } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block";
import { $ArmInteractionPointType } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $TransmissionNodeProvider } from "@package/hellfirepvp/astralsorcery/common/starlight/api/provider";
import { $PerkAttributeTypeReader$Type } from "@package/hellfirepvp/astralsorcery/common/perk/reader";
import { $ASimpleRestrictionType, $Attribute, $ARestrictionType } from "@package/com/alessandro/astages/api/store";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $HarvestHandler, $HoeHandler } from "@package/me/desht/pneumaticcraft/api/harvesting";
import { $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $StructureModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RemoteWidgetType } from "@package/me/desht/pneumaticcraft/api/remote";
import { $FluidType, $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ITurtleUpgrade } from "@package/dan200/computercraft/api/turtle";
import { $NumberFormatType } from "@package/net/minecraft/network/chat/numbers";
import { $PureOreLoaderType } from "@package/sirttas/elementalcraft/pureore/loader";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { RegistryTypes } from "@special/types";
import { $ResearchNodeCondition$Type } from "@package/hellfirepvp/astralsorcery/common/research/condition";
import { $SpecialRecipeSerializerManager } from "@package/dev/latvian/mods/kubejs/recipe/special";
import { $ItemPropertiesTransformer } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/item/properties_transformer";
import { $EntityTestType } from "@package/mysticmods/roots/api/test/entity";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $BlockPosPredicateType } from "@package/sirttas/dpanvil/api/predicate/block";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $CustomMapData$Type } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $PotatoCannonProjectileType } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $Item, $CreativeModeTab, $JukeboxSong, $ArmorMaterial, $ItemStack_, $Instrument } from "@package/net/minecraft/world/item";
import { $TrunkPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";
import { $Bandlands } from "@package/dev/worldgen/lithostitched/impl/worldgen/bandlands";
import { $EmpowerEvent } from "@package/com/almostreliable/kubeaa/event";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $StructureProcessorList, $StructureProcessorType, $PosRuleTestType, $RuleTestType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ServerKubeEvent, $CommandKubeEvent, $BasicCommandKubeEvent } from "@package/dev/latvian/mods/kubejs/server";
import { $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $GeneratedDataStage_ } from "@package/dev/latvian/mods/kubejs/script/data";
import { $RoomUpgradeComponentType } from "@package/dev/compactmods/machines/api/room/upgrade";
import { $IntProviderType, $FloatProviderType } from "@package/net/minecraft/util/valueproviders";
import { $AreaTypeSerializer } from "@package/me/desht/pneumaticcraft/api/drone/area";
import { $MosaicBiomeEntry } from "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/mosaic";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $LiquidStarlightRecipeOutputModifier$Type } from "@package/hellfirepvp/astralsorcery/common/recipe/liquid/output";
import { $SourceTraitValueProviderType } from "@package/sirttas/elementalcraft/api/source/trait/value";
import { $LootNumberProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $IECOTier } from "@package/cn/dancingsnow/neoecoae/api";
import { $PlantRecollectable } from "@package/com/buuz135/industrial/api/plant";
import { $GemstoneColor } from "@package/de/dafuqs/spectrum/api/item";
import { $TomePage$TomePageType } from "@package/hellfirepvp/astralsorcery/common/research/tome";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $ArtifactType, $ArtifactEffect$Type, $ArtifactCondition$Type } from "@package/hellfirepvp/astralsorcery/common/artifact";
import { $WorldSavedDataType } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $LootItemFunctionType } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Jewel } from "@package/sirttas/elementalcraft/jewel";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $GlassArrowVariant } from "@package/de/dafuqs/spectrum/items/tools";
import { $StrawHandler } from "@package/com/buuz135/industrial/api/straw";
import { $ResourceType } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
import { $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $FocalPointNode$Type } from "@package/hellfirepvp/astralsorcery/common/focal/node";
import { $IProgramLinter } from "@package/ca/teamdman/sfm/common/program/linting";
import { $BannerPattern, $DecoratedPotPattern, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $ToolInfusionEffectType } from "@package/sirttas/elementalcraft/api/infusion/tool/effect";
export * as recipes from "@side-only/server/events/recipes";
export * as registry from "@side-only/server/events/registry";

declare module "@side-only/server/events" {
    export class TagEvent<T> extends $TagKubeEvent {
        get(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        removeAll(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        add(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        remove(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        removeAllTagsFrom(...values: RegistryTypes.ResolveObject<T>[]): void;
    }
    export class TagWrapper<T> extends $TagWrapper {
        add(...values: RegistryTypes.ResolveObject<T>[]): T;
        remove(...values: RegistryTypes.ResolveObject<T>[]): T;
        removeAll(): void;
    }
}

export {};

declare global {
    namespace ServerEvents {
        function recipeMappingRegistry(handler: ((event: $RecipeMappingRegistry) => void)): void;
        function recipes(handler: ((event: $RecipesKubeEvent) => void)): void;
        function specialRecipeSerializers(handler: ((event: $SpecialRecipeSerializerManager) => void)): void;
        function compostableRecipes(handler: ((event: $CompostableRecipesKubeEvent) => void)): void;
        function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistry) => void)): void;
        function modifyRecipeResult(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function tick(handler: ((event: $ServerKubeEvent) => void)): void;
        function command(extra: string, handler: ((event: $CommandKubeEvent) => void)): void;
        function command(handler: ((event: $CommandKubeEvent) => void)): void;
        function loaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function commandRegistry(handler: ((event: $CommandRegistryKubeEvent) => void)): void;
        function afterRecipes(handler: ((event: $AfterRecipesLoadedKubeEvent) => void)): void;
        function unloaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function modifyRecipeIngredient(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function basicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
        function generateData(extra: $GeneratedDataStage_, handler: ((event: $KubeDataGenerator) => void)): void;
        function basicPublicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
    }
    namespace ActuallyAdditionsEvents {
        function empower(handler: ((event: $EmpowerEvent) => void)): void;
    }
    namespace ArchEvents {
        function handleServer(extra: string, handler: ((event: $ProxyEventJS) => void)): void;
    }
    namespace BlockEvents {
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(extra: $ResourceKey_<$Block>, handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        function randomTick(extra: $ResourceKey_<$Block>, handler: ((event: $RandomTickKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(extra: $ResourceKey_<$Block>, handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(extra: $ResourceKey_<$Block>, handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        function blockEntityTick(extra: $ResourceKey_<$Block>, handler: ((event: $BlockEntityTickKubeEvent) => void)): void;
    }
    namespace LootJS {
        function lootTables(handler: ((event: $LootTableEventJS) => void)): void;
        function modifiers(handler: ((event: $LootModificationEventJS) => void)): void;
    }
    namespace NetworkEvents {
        /**
         * Invoked when a network packet is received.
         * 
         * Note that the behaviour of this event is depending on the **script type**.
         * 
         * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
         * 
         * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
         */
        function dataReceived(extra: string, handler: ((event: $NetworkKubeEvent) => void)): void;
    }
    namespace EnderIOEvents {
        function conduits(handler: ((event: $ConduitRegistrationEvent) => void)): void;
        function grindingBalls(handler: ((event: $GrindingBallModificationEvent) => void)): void;
        function vatReagents(handler: ((event: $VatReagentModificationEvent) => void)): void;
    }
    namespace mmcr {
        function server(handler: ((event: $MMCRServerEventJS) => void)): void;
    }
    namespace MBDMachineEvents {
        function onUseWithoutItem(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineUseWithoutItemEventJS) => void)): void;
        function onStateChanged(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineStateChangedEventJS) => void)): void;
        function onTick(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineTickEventJS) => void)): void;
        function onUI(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineUIEventJS) => void)): void;
        function onAfterRecipeWorking(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineAfterRecipeWorkingEventJS) => void)): void;
        function onRecipeStatusChanged(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineRecipeStatusChangedEventJS) => void)): void;
        function onConsumeInputsAfterWorking(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOnConsumeInputsAfterWorkingEventJS) => void)): void;
        function onPlaced(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachinePlacedEventJS) => void)): void;
        function onRecipeWorking(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOnRecipeWorkingEventJS) => void)): void;
        function onRecipeWaiting(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOnRecipeWaitingEventJS) => void)): void;
        function onRecipeFinish(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOnRecipeFinishEventJS) => void)): void;
        function onBeforeRecipeModify(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineRecipeModifyEventBeforeJS) => void)): void;
        function onStructureInvalid(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineStructureInvalidEventJS) => void)): void;
        function onNeighborChanged(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineNeighborChangedEventJS) => void)): void;
        function onFuelBurningFinish(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineFuelBurningFinishEventJS) => void)): void;
        function onOpenUI(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOpenUIEventJS) => void)): void;
        function onBeforeRecipeWorking(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS) => void)): void;
        function onFuelRecipeModify(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineFuelRecipeModifyEventJS) => void)): void;
        function onStructureFormed(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineStructureFormedEventJS) => void)): void;
        function onUseCatalyst(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineUseCatalystEventJS) => void)): void;
        function onDrops(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineDropsEventJS) => void)): void;
        function onLoad(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineOnLoadEventJS) => void)): void;
        function onRemoved(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineRemovedEventJS) => void)): void;
        function onAfterRecipeModify(extra: $ResourceLocation_, handler: ((event: $MBDMachineEvents$MachineRecipeModifyEventAfterJS) => void)): void;
    }
    namespace ServerEvents {
        function registry(type: "painting_variant", handler: ((event: PaintingVariant) => void)): void;
        function registry(type: "jukebox_song", handler: ((event: JukeboxSong) => void)): void;
    }
    namespace EntityEvents {
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        function drops(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        function drops(handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
    }
    namespace ServerEvents {
        function tags(type: "mekanism:robit_skin_serializer", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "astages:restriction_types", handler: ((event: TagEvent<$ARestrictionType>) => void)): void;
        function tags(type: "netherexp:ectoplasm_haunting", handler: ((event: TagEvent<$EctoplasmHaunting>) => void)): void;
        function tags(type: "lithostitched:template_list", handler: ((event: TagEvent<$TemplateList>) => void)): void;
        function tags(type: "spectrum:lizard_frill_variant", handler: ((event: TagEvent<$LizardFrillVariant>) => void)): void;
        function tags(type: "astralsorcery:liquid_starlight_output_modifier_types", handler: ((event: TagEvent<$LiquidStarlightRecipeOutputModifier$Type<any>>) => void)): void;
        function tags(type: "decorated_pot_pattern", handler: ((event: TagEvent<$DecoratedPotPattern>) => void)): void;
        function tags(type: "neoforge:biome_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "entity_type", handler: ((event: TagEvent<$EntityType<any>>) => void)): void;
        function tags(type: "enderio:conduit", handler: ((event: TagEvent<$Conduit<any, any>>) => void)): void;
        function tags(type: "computercraft:turtle_overlay", handler: ((event: TagEvent<$TurtleOverlay>) => void)): void;
        function tags(type: "elementalcraft:spell", handler: ((event: TagEvent<$Spell$1>) => void)): void;
        function tags(type: "attribute", handler: ((event: TagEvent<$Attribute$1>) => void)): void;
        function tags(type: "spectrum:kindling_variant", handler: ((event: TagEvent<$KindlingVariant>) => void)): void;
        function tags(type: "astages:attributes", handler: ((event: TagEvent<$Attribute<any>>) => void)): void;
        function tags(type: "electroenergetics:wire_type", handler: ((event: TagEvent<$WireType>) => void)): void;
        function tags(type: "worldgen/foliage_placer_type", handler: ((event: TagEvent<$FoliagePlacerType<any>>) => void)): void;
        function tags(type: "data_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "create:display_source", handler: ((event: TagEvent<$DisplaySource>) => void)): void;
        function tags(type: "lithostitched:biome_injector", handler: ((event: TagEvent<$BiomeInjector>) => void)): void;
        function tags(type: "loot_pool_entry_type", handler: ((event: TagEvent<$LootPoolEntryType>) => void)): void;
        function tags(type: "worldgen/feature_size_type", handler: ((event: TagEvent<$FeatureSizeType<any>>) => void)): void;
        function tags(type: "astralsorcery:lumen_binding_usage_types", handler: ((event: TagEvent<$LumenBindingUsage$Type<any>>) => void)): void;
        function tags(type: "computercraft:pocket_upgrade", handler: ((event: TagEvent<$IPocketUpgrade>) => void)): void;
        function tags(type: "spectrum:ink_color", handler: ((event: TagEvent<$InkColor>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/block_state_provider_type", handler: ((event: TagEvent<$BlockStateProviderType<any>>) => void)): void;
        function tags(type: "worldgen/structure", handler: ((event: TagEvent<$Structure>) => void)): void;
        function tags(type: "elysium_api:item/properties_transformer", handler: ((event: TagEvent<$ItemPropertiesTransformer>) => void)): void;
        function tags(type: "apotheosis:loot_category", handler: ((event: TagEvent<$LootCategory>) => void)): void;
        function tags(type: "worldgen/material_condition", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "trim_pattern", handler: ((event: TagEvent<$TrimPattern>) => void)): void;
        function tags(type: "elementalcraft:tool_infusion_type", handler: ((event: TagEvent<$ToolInfusionEffectType<any>>) => void)): void;
        function tags(type: "enderio:conduit_data_type", handler: ((event: TagEvent<$ConduitDataType<any>>) => void)): void;
        function tags(type: "apothic_spawners:spawner_stat", handler: ((event: TagEvent<$SpawnerStat<any>>) => void)): void;
        function tags(type: "wover:wover/world_preset_info", handler: ((event: TagEvent<$WorldPresetInfo>) => void)): void;
        function tags(type: "map_decoration_type", handler: ((event: TagEvent<$MapDecorationType>) => void)): void;
        function tags(type: "netherexp:on_death_ground_conversion", handler: ((event: TagEvent<$OnDeathGroundConversion>) => void)): void;
        function tags(type: "industrialforegoing:plant_recollectable", handler: ((event: TagEvent<$PlantRecollectable>) => void)): void;
        function tags(type: "worldgen/structure_placement", handler: ((event: TagEvent<$StructurePlacementType<any>>) => void)): void;
        function tags(type: "wover:worldgen/surface_rules", handler: ((event: TagEvent<$AssignedSurfaceRule>) => void)): void;
        function tags(type: "wover:wover/pottable_plant", handler: ((event: TagEvent<$PottablePlant>) => void)): void;
        function tags(type: "electroenergetics:simulated_device_type", handler: ((event: TagEvent<$SimulatedDeviceType<any>>) => void)): void;
        function tags(type: "astages:simple_restriction_types", handler: ((event: TagEvent<$ASimpleRestrictionType>) => void)): void;
        function tags(type: "astralsorcery:perk_types", handler: ((event: TagEvent<$PerkType<any>>) => void)): void;
        function tags(type: "elementalcraft:pure_ore_recipe_factory_type", handler: ((event: TagEvent<$IPureOreRecipeFactoryType<any, any>>) => void)): void;
        function tags(type: "lithostitched:load_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/material_rule", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "cb_multipart:part_converters", handler: ((event: TagEvent<$PartConverter>) => void)): void;
        function tags(type: "enchantment_entity_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "astralsorcery:perk_converters", handler: ((event: TagEvent<$PerkAttributeConverter>) => void)): void;
        function tags(type: "elysium_api:mosaic_biome_entry", handler: ((event: TagEvent<$MosaicBiomeEntry>) => void)): void;
        function tags(type: "wover:worldgen/biome_data", handler: ((event: TagEvent<$BiomeData>) => void)): void;
        function tags(type: "enderio:travel_target_types", handler: ((event: TagEvent<$TravelTargetType<any>>) => void)): void;
        function tags(type: "roots:light_functions", handler: ((event: TagEvent<$LightFunction>) => void)): void;
        function tags(type: "worldgen/density_function_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "neoforge:holder_set_type", handler: ((event: TagEvent<$HolderSetType>) => void)): void;
        function tags(type: "create:fan_processing_type", handler: ((event: TagEvent<$FanProcessingType>) => void)): void;
        function tags(type: "compactmachines:room_upgrades", handler: ((event: TagEvent<$RoomUpgradeComponentType<any>>) => void)): void;
        function tags(type: "sfm:text_editor", handler: ((event: TagEvent<$ISFMTextEditorRegistration>) => void)): void;
        function tags(type: "electroenergetics:electric_train_sound_type", handler: ((event: TagEvent<$ElectricTrainSoundType>) => void)): void;
        function tags(type: "astralsorcery:structure_marker_replacement_types", handler: ((event: TagEvent<$StructureMarkerReplacement$Type<any>>) => void)): void;
        function tags(type: "worldgen/tree_decorator_type", handler: ((event: TagEvent<$TreeDecoratorType<any>>) => void)): void;
        function tags(type: "villager_type", handler: ((event: TagEvent<$VillagerType>) => void)): void;
        function tags(type: "roots:player_conditions", handler: ((event: TagEvent<$IPlayerConditionType<any>>) => void)): void;
        function tags(type: "electroenergetics:wire_interaction_behaviour", handler: ((event: TagEvent<$WireInteractionBehaviour>) => void)): void;
        function tags(type: "roots:rituals", handler: ((event: TagEvent<$Ritual>) => void)): void;
        function tags(type: "mekanism:module", handler: ((event: TagEvent<$ModuleData<any>>) => void)): void;
        function tags(type: "enchantment_effect_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "create:mounted_fluid_storage_type", handler: ((event: TagEvent<$MountedFluidStorageType<any>>) => void)): void;
        function tags(type: "enchantment_provider", handler: ((event: TagEvent<$EnchantmentProvider>) => void)): void;
        function tags(type: "create_enchantment_industry:printing_behaviour", handler: ((event: TagEvent<$PrintingBehaviourProvider>) => void)): void;
        function tags(type: "astralsorcery:artifact_effect_types", handler: ((event: TagEvent<$ArtifactEffect$Type<any>>) => void)): void;
        function tags(type: "moonlight:villager_trades", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "enchantment", handler: ((event: TagEvent<$Enchantment>) => void)): void;
        function tags(type: "loot_number_provider_type", handler: ((event: TagEvent<$LootNumberProviderType>) => void)): void;
        function tags(type: "roots:grove_actions", handler: ((event: TagEvent<$GroveAction>) => void)): void;
        function tags(type: "enderio:travel_target_serializers", handler: ((event: TagEvent<$TravelTargetSerializer<any>>) => void)): void;
        function tags(type: "spectrum:gemstone_color", handler: ((event: TagEvent<$GemstoneColor>) => void)): void;
        function tags(type: "sound_event", handler: ((event: TagEvent<$SoundEvent>) => void)): void;
        function tags(type: "astralsorcery:tome_page_types", handler: ((event: TagEvent<$TomePage$TomePageType<any>>) => void)): void;
        function tags(type: "worldgen/placement_modifier_type", handler: ((event: TagEvent<$PlacementModifierType<any>>) => void)): void;
        function tags(type: "wover:worldgen/biome_modifications", handler: ((event: TagEvent<$BiomeModification>) => void)): void;
        function tags(type: "enderio:conduit_network_context_type", handler: ((event: TagEvent<$ConduitNetworkContextType<any>>) => void)): void;
        function tags(type: "netherexp:apparition/gargoyle_statues", handler: ((event: TagEvent<$ApparitionGargoyleStatues>) => void)): void;
        function tags(type: "astralsorcery:sync_data_types", handler: ((event: TagEvent<$SyncData$Type<any, any, any, any>>) => void)): void;
        function tags(type: "create:potato_projectile/entity_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "roots:level_conditions", handler: ((event: TagEvent<$ILevelConditionType<any>>) => void)): void;
        function tags(type: "astralsorcery:artifact_types", handler: ((event: TagEvent<$ArtifactType>) => void)): void;
        function tags(type: "create:mounted_item_storage_type", handler: ((event: TagEvent<$MountedItemStorageType<any>>) => void)): void;
        function tags(type: "common_storage_lib_data:sync_serializers", handler: ((event: TagEvent<$DataSyncSerializer<any>>) => void)): void;
        function tags(type: "height_provider_type", handler: ((event: TagEvent<$HeightProviderType<any>>) => void)): void;
        function tags(type: "compactmachines:room_templates", handler: ((event: TagEvent<$RoomTemplate>) => void)): void;
        function tags(type: "astralsorcery:perk_data_types", handler: ((event: TagEvent<$PerkDataType<any>>) => void)): void;
        function tags(type: "pneumaticcraft:prog_widgets", handler: ((event: TagEvent<$ProgWidgetType<any>>) => void)): void;
        function tags(type: "roots:spells", handler: ((event: TagEvent<$Spell>) => void)): void;
        function tags(type: "number_format_type", handler: ((event: TagEvent<$NumberFormatType<any>>) => void)): void;
        function tags(type: "villager_profession", handler: ((event: TagEvent<$VillagerProfession>) => void)): void;
        function tags(type: "astralsorcery:perk_attribute_types", handler: ((event: TagEvent<$PerkAttributeType>) => void)): void;
        function tags(type: "enchantment_location_based_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "frog_variant", handler: ((event: TagEvent<$FrogVariant>) => void)): void;
        function tags(type: "elysium_api:block/properties_transformer", handler: ((event: TagEvent<$BlockPropertiesTransformer>) => void)): void;
        function tags(type: "spectrum:glass_arrow_variant", handler: ((event: TagEvent<$GlassArrowVariant>) => void)): void;
        function tags(type: "worldgen/biome_source", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_condition_type", handler: ((event: TagEvent<$LootItemConditionType>) => void)): void;
        function tags(type: "neoforge:structure_modifier", handler: ((event: TagEvent<$StructureModifier>) => void)): void;
        function tags(type: "electroenergetics:pantograph_type", handler: ((event: TagEvent<$PantographType>) => void)): void;
        function tags(type: "worldgen/placed_feature", handler: ((event: TagEvent<$PlacedFeature>) => void)): void;
        function tags(type: "spectrum:pastel_payload_type", handler: ((event: TagEvent<$PastelPayloadType>) => void)): void;
        function tags(type: "sfm:program_linters", handler: ((event: TagEvent<$IProgramLinter>) => void)): void;
        function tags(type: "loot_score_provider_type", handler: ((event: TagEvent<$LootScoreProviderType>) => void)): void;
        function tags(type: "worldgen/trunk_placer_type", handler: ((event: TagEvent<$TrunkPlacerType<any>>) => void)): void;
        function tags(type: "elysium_api:brewing_recipes", handler: ((event: TagEvent<$ElysiumBrewingRecipe>) => void)): void;
        function tags(type: "dpanvil:block_pos_predicate", handler: ((event: TagEvent<$BlockPosPredicateType<any>>) => void)): void;
        function tags(type: "armor_material", handler: ((event: TagEvent<$ArmorMaterial>) => void)): void;
        function tags(type: "electroenergetics:panel_attachment_type", handler: ((event: TagEvent<$PanelAttachmentType>) => void)): void;
        function tags(type: "roots:can_grow_functions", handler: ((event: TagEvent<$CanGrowFunction>) => void)): void;
        function tags(type: "apothic_attributes:entity_equipment_slot", handler: ((event: TagEvent<$EntityEquipmentSlot>) => void)): void;
        function tags(type: "astralsorcery:perk_attribute_type_readers", handler: ((event: TagEvent<$PerkAttributeTypeReader$Type>) => void)): void;
        function tags(type: "neoforge:fluid_ingredient_type", handler: ((event: TagEvent<$FluidIngredientType<any>>) => void)): void;
        function tags(type: "neoforge:ingredient_serializer", handler: ((event: TagEvent<$IngredientType<any>>) => void)): void;
        function tags(type: "particle_type", handler: ((event: TagEvent<$ParticleType<any>>) => void)): void;
        function tags(type: "spectrum:resonance_processor", handler: ((event: TagEvent<$ResonanceProcessor>) => void)): void;
        function tags(type: "stat_type", handler: ((event: TagEvent<$StatType<any>>) => void)): void;
        function tags(type: "lithostitched:holder_target_type", handler: ((event: TagEvent<$HolderTarget$Type>) => void)): void;
        function tags(type: "astralsorcery:altar_output_modifier_types", handler: ((event: TagEvent<$AltarRecipeOutputModifier$Type<any>>) => void)): void;
        function tags(type: "worldgen/world_preset", handler: ((event: TagEvent<$WorldPreset>) => void)): void;
        function tags(type: "pneumaticcraft:harvest_handlers", handler: ((event: TagEvent<$HarvestHandler>) => void)): void;
        function tags(type: "int_provider_type", handler: ((event: TagEvent<$IntProviderType<any>>) => void)): void;
        function tags(type: "worldgen/flat_level_generator_preset", handler: ((event: TagEvent<$FlatLevelGeneratorPreset>) => void)): void;
        function tags(type: "moonlight:custom_map_data_types", handler: ((event: TagEvent<$CustomMapData$Type<any, any>>) => void)): void;
        function tags(type: "enchantment_provider_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "enchantment_value_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "elementalcraft:pure_ore_loader_serializer", handler: ((event: TagEvent<$PureOreLoaderType<any>>) => void)): void;
        function tags(type: "position_source_type", handler: ((event: TagEvent<$PositionSourceType<any>>) => void)): void;
        function tags(type: "astralsorcery:lumen_binding_effect_types", handler: ((event: TagEvent<$LumenBindingEffect$Type<any>>) => void)): void;
        function tags(type: "computercraft:pocket_upgrade_type", handler: ((event: TagEvent<$UpgradeType<any>>) => void)): void;
        function tags(type: "roots:snapshot_types", handler: ((event: TagEvent<$SnapshotType<any>>) => void)): void;
        function tags(type: "astralsorcery:perk_modifier_sources", handler: ((event: TagEvent<$ModifierSourceProvider<any>>) => void)): void;
        function tags(type: "pneumaticcraft:hoe_handlers", handler: ((event: TagEvent<$HoeHandler>) => void)): void;
        function tags(type: "spectrum:world_effect", handler: ((event: TagEvent<$WorldEffect>) => void)): void;
        function tags(type: "neoforge:global_loot_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "ae2:keytypes", handler: ((event: TagEvent<$AEKeyType>) => void)): void;
        function tags(type: "block_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "enchantment_level_based_value_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "memory_module_type", handler: ((event: TagEvent<$MemoryModuleType<any>>) => void)): void;
        function tags(type: "worldgen/chunk_generator", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "mob_effect", handler: ((event: TagEvent<$MobEffect>) => void)): void;
        function tags(type: "worldgen/biome", handler: ((event: TagEvent<$Biome>) => void)): void;
        function tags(type: "moonlight:soft_fluid", handler: ((event: TagEvent<$SoftFluid>) => void)): void;
        function tags(type: "lithostitched:region", handler: ((event: TagEvent<$Region>) => void)): void;
        function tags(type: "command_argument_type", handler: ((event: TagEvent<$ArgumentTypeInfo<any, any>>) => void)): void;
        function tags(type: "electroenergetics:simulated_device_feature_type", handler: ((event: TagEvent<$DeviceFeatureType>) => void)): void;
        function tags(type: "damage_type", handler: ((event: TagEvent<$DamageType>) => void)): void;
        function tags(type: "netherexp:apparition/aggressions", handler: ((event: TagEvent<$ApparitionAggressions>) => void)): void;
        function tags(type: "astralsorcery:perk_attribute_limits", handler: ((event: TagEvent<$PerkAttributeLimiter$Limit>) => void)): void;
        function tags(type: "roots:can_harvest_functions", handler: ((event: TagEvent<$CanHarvestFunction>) => void)): void;
        function tags(type: "astralsorcery:focal_node_types", handler: ((event: TagEvent<$FocalPointNode$Type<any>>) => void)): void;
        function tags(type: "worldgen/structure_piece", handler: ((event: TagEvent<$StructurePieceType>) => void)): void;
        function tags(type: "roots:groves", handler: ((event: TagEvent<$Grove>) => void)): void;
        function tags(type: "enderio:conduit_type", handler: ((event: TagEvent<$ConduitType<any, any>>) => void)): void;
        function tags(type: "worldgen/configured_feature", handler: ((event: TagEvent<$ConfiguredFeature<any, any>>) => void)): void;
        function tags(type: "worldgen/pool_alias_binding", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "game_event", handler: ((event: TagEvent<$GameEvent>) => void)): void;
        function tags(type: "roots:herbs", handler: ((event: TagEvent<$Herb>) => void)): void;
        function tags(type: "instrument", handler: ((event: TagEvent<$Instrument>) => void)): void;
        function tags(type: "roots:harvest_functions", handler: ((event: TagEvent<$HarvestFunction>) => void)): void;
        function tags(type: "worldgen/structure_processor", handler: ((event: TagEvent<$StructureProcessorType<any>>) => void)): void;
        function tags(type: "create:item_attribute_type", handler: ((event: TagEvent<$ItemAttributeType>) => void)): void;
        function tags(type: "apothic_attributes:entity_slot_group", handler: ((event: TagEvent<$EntitySlotGroup>) => void)): void;
        function tags(type: "elementalcraft:jewel", handler: ((event: TagEvent<$Jewel>) => void)): void;
        function tags(type: "create:potato_projectile/block_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "astralsorcery:transmission_nodes", handler: ((event: TagEvent<$TransmissionNodeProvider<any>>) => void)): void;
        function tags(type: "spectrum:pastel_payload", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "rule_block_entity_modifier", handler: ((event: TagEvent<$RuleBlockEntityModifierType<any>>) => void)): void;
        function tags(type: "elementalcraft:pipe_upgrade_type", handler: ((event: TagEvent<$PipeUpgradeType<any>>) => void)): void;
        function tags(type: "pneumaticcraft:remote_widgets", handler: ((event: TagEvent<$RemoteWidgetType<any>>) => void)): void;
        function tags(type: "elysium_api:block/use_behaviors", handler: ((event: TagEvent<$UseBehavior>) => void)): void;
        function tags(type: "trim_material", handler: ((event: TagEvent<$TrimMaterial>) => void)): void;
        function tags(type: "worldgen/root_placer_type", handler: ((event: TagEvent<$RootPlacerType<any>>) => void)): void;
        function tags(type: "jukebox_song", handler: ((event: TagEvent<$JukeboxSong>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config", handler: ((event: TagEvent<$FastNoiseConfig>) => void)): void;
        function tags(type: "astralsorcery:altar_effects", handler: ((event: TagEvent<$AltarEffect>) => void)): void;
        function tags(type: "spectrum:lizard_horn_variant", handler: ((event: TagEvent<$LizardHornVariant>) => void)): void;
        function tags(type: "creative_mode_tab", handler: ((event: TagEvent<$CreativeModeTab>) => void)): void;
        function tags(type: "worldgen/structure_pool_element", handler: ((event: TagEvent<$StructurePoolElementType<any>>) => void)): void;
        function tags(type: "block_predicate_type", handler: ((event: TagEvent<$BlockPredicateType<any>>) => void)): void;
        function tags(type: "dimension_type", handler: ((event: TagEvent<$DimensionType>) => void)): void;
        function tags(type: "cb_microblock:micro_material", handler: ((event: TagEvent<$MicroMaterial>) => void)): void;
        function tags(type: "rule_test", handler: ((event: TagEvent<$RuleTestType<any>>) => void)): void;
        function tags(type: "chunk_status", handler: ((event: TagEvent<$ChunkStatus>) => void)): void;
        function tags(type: "loot_nbt_provider_type", handler: ((event: TagEvent<$LootNbtProviderType>) => void)): void;
        function tags(type: "worldgen/template_pool", handler: ((event: TagEvent<$StructureTemplatePool>) => void)): void;
        function tags(type: "moonlight:map_marker", handler: ((event: TagEvent<$MLMapDecorationType<any, any>>) => void)): void;
        function tags(type: "loot_function_type", handler: ((event: TagEvent<$LootItemFunctionType<any>>) => void)): void;
        function tags(type: "recipe_type", handler: ((event: TagEvent<$RecipeType<any>>) => void)): void;
        function tags(type: "schedule", handler: ((event: TagEvent<$Schedule>) => void)): void;
        function tags(type: "neoforge:biome_modifier", handler: ((event: TagEvent<$BiomeModifier>) => void)): void;
        function tags(type: "netherexp:wisp_archaeology", handler: ((event: TagEvent<$WispArchaeology>) => void)): void;
        function tags(type: "industrialforegoing:straw", handler: ((event: TagEvent<$StrawHandler>) => void)): void;
        function tags(type: "mekanism:chemical", handler: ((event: TagEvent<$Chemical>) => void)): void;
        function tags(type: "worldgen/structure_type", handler: ((event: TagEvent<$StructureType<any>>) => void)): void;
        function tags(type: "astralsorcery:constellations", handler: ((event: TagEvent<$BaseConstellation>) => void)): void;
        function tags(type: "spectrum:geode_ores", handler: ((event: TagEvent<$GeodeOreDefinition>) => void)): void;
        function tags(type: "roots:property_types", handler: ((event: TagEvent<$PropertyType<any>>) => void)): void;
        function tags(type: "mekanism:chemical_ingredient_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "spectrum:resonance_processor_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "entity_sub_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "roots:spell_modifiers", handler: ((event: TagEvent<$SpellModifier>) => void)): void;
        function tags(type: "worldgen/configured_carver", handler: ((event: TagEvent<$ConfiguredWorldCarver<any>>) => void)): void;
        function tags(type: "lithostitched:bandlands_band_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "create:display_target", handler: ((event: TagEvent<$DisplayTarget>) => void)): void;
        function tags(type: "astralsorcery:research_node_condition_types", handler: ((event: TagEvent<$ResearchNodeCondition$Type<any>>) => void)): void;
        function tags(type: "trigger_type", handler: ((event: TagEvent<$CriterionTrigger<any>>) => void)): void;
        function tags(type: "roots:entity_test_types", handler: ((event: TagEvent<$EntityTestType<any>>) => void)): void;
        function tags(type: "astralsorcery:perk_requirement_types", handler: ((event: TagEvent<$PerkRequirement$Type<any>>) => void)): void;
        function tags(type: "worldgen/feature", handler: ((event: TagEvent<$Feature<any>>) => void)): void;
        function tags(type: "cat_variant", handler: ((event: TagEvent<$CatVariant>) => void)): void;
        function tags(type: "dimension", handler: ((event: TagEvent<$Level>) => void)): void;
        function tags(type: "block_entity_type", handler: ((event: TagEvent<$BlockEntityType<any>>) => void)): void;
        function tags(type: "lodestone:world_event_type", handler: ((event: TagEvent<$WorldEventType>) => void)): void;
        function tags(type: "neoecoae:eco_tier", handler: ((event: TagEvent<$IECOTier>) => void)): void;
        function tags(type: "worldgen/multi_noise_biome_source_parameter_list", handler: ((event: TagEvent<$MultiNoiseBiomeSourceParameterList>) => void)): void;
        function tags(type: "pneumaticcraft:player_matchers", handler: ((event: TagEvent<$IPlayerMatcher$MatcherType<any>>) => void)): void;
        function tags(type: "elementalcraft:configurable_block_entity_properties_type", handler: ((event: TagEvent<$ConfigurableBlockEntityPropertiesType<any>>) => void)): void;
        function tags(type: "lithostitched:surface_rule", handler: ((event: TagEvent<$SurfaceRules$RuleSource>) => void)): void;
        function tags(type: "float_provider_type", handler: ((event: TagEvent<$FloatProviderType<any>>) => void)): void;
        function tags(type: "neoforge:entity_data_serializers", handler: ((event: TagEvent<$EntityDataSerializer<any>>) => void)): void;
        function tags(type: "lithostitched:biome_injector_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "chat_type", handler: ((event: TagEvent<$ChatType>) => void)): void;
        function tags(type: "neoforge:fluid_type", handler: ((event: TagEvent<$FluidType>) => void)): void;
        function tags(type: "enderio:conduit_connection_config_type", handler: ((event: TagEvent<$ConnectionConfigType<any>>) => void)): void;
        function tags(type: "worldgen/carver", handler: ((event: TagEvent<$WorldCarver<any>>) => void)): void;
        function tags(type: "elementalcraft:source_trait_value_provider_type", handler: ((event: TagEvent<$SourceTraitValueProviderType<any>>) => void)): void;
        function tags(type: "painting_variant", handler: ((event: TagEvent<$PaintingVariant>) => void)): void;
        function tags(type: "worldgen/processor_list", handler: ((event: TagEvent<$StructureProcessorList>) => void)): void;
        function tags(type: "fluid", handler: ((event: TagEvent<$Fluid>) => void)): void;
        function tags(type: "lithostitched:placement_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "point_of_interest_type", handler: ((event: TagEvent<$PoiType>) => void)): void;
        function tags(type: "create:potato_projectile/type", handler: ((event: TagEvent<$PotatoCannonProjectileType>) => void)): void;
        function tags(type: "elysium_api:block/sound_transformers", handler: ((event: TagEvent<$BlockSoundTransformer>) => void)): void;
        function tags(type: "recipe_serializer", handler: ((event: TagEvent<$RecipeSerializer<any>>) => void)): void;
        function tags(type: "wover:wover/pottable_soil", handler: ((event: TagEvent<$PottableSoil>) => void)): void;
        function tags(type: "crafttweaker:condition_serializer", handler: ((event: TagEvent<$IIngredientConditionSerializer<any>>) => void)): void;
        function tags(type: "lithostitched:processor_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "neoforge:structure_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "electroenergetics:wire_attachment_type", handler: ((event: TagEvent<$WireAttachmentType>) => void)): void;
        function tags(type: "commoncapabilities:ingredientcomponents", handler: ((event: TagEvent<$IngredientComponent<any, any>>) => void)): void;
        function tags(type: "create:package_port_target_type", handler: ((event: TagEvent<$PackagePortTargetType>) => void)): void;
        function tags(type: "sfm:text_editor_action", handler: ((event: TagEvent<$ITextEditAction>) => void)): void;
        function tags(type: "item", handler: ((event: TagEvent<$Item>) => void)): void;
        function tags(type: "worldgen/structure_set", handler: ((event: TagEvent<$StructureSet>) => void)): void;
        function tags(type: "create:arm_interaction_point_type", handler: ((event: TagEvent<$ArmInteractionPointType>) => void)): void;
        function tags(type: "astralsorcery:crystal_properties", handler: ((event: TagEvent<$CrystalProperty>) => void)): void;
        function tags(type: "sfm:resource_type", handler: ((event: TagEvent<$ResourceType<any, any, any>>) => void)): void;
        function tags(type: "banner_pattern", handler: ((event: TagEvent<$BannerPattern>) => void)): void;
        function tags(type: "moonlight:world_saved_data_type", handler: ((event: TagEvent<$WorldSavedDataType<any>>) => void)): void;
        function tags(type: "worldgen/noise", handler: ((event: TagEvent<$NormalNoise$NoiseParameters>) => void)): void;
        function tags(type: "neoforge:attachment_types", handler: ((event: TagEvent<$AttachmentType<any>>) => void)): void;
        function tags(type: "lithostitched:modifier_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "cb_multipart:multipart_types", handler: ((event: TagEvent<$MultipartType<any>>) => void)): void;
        function tags(type: "neoforge:condition_codecs", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "astralsorcery:perk_custom_modifiers", handler: ((event: TagEvent<$PerkAttributeModifier>) => void)): void;
        function tags(type: "wolf_variant", handler: ((event: TagEvent<$WolfVariant>) => void)): void;
        function tags(type: "astralsorcery:lumen", handler: ((event: TagEvent<$Lumen>) => void)): void;
        function tags(type: "roots:property_serializers", handler: ((event: TagEvent<$PropertySerializer<any>>) => void)): void;
        function tags(type: "observerlib:observer_providers", handler: ((event: TagEvent<$ObserverProvider<any>>) => void)): void;
        function tags(type: "neoecoae:cell_type", handler: ((event: TagEvent<$ECOCellType>) => void)): void;
        function tags(type: "worldgen/noise_settings", handler: ((event: TagEvent<$NoiseGeneratorSettings>) => void)): void;
        function tags(type: "roots:ritual_modifiers", handler: ((event: TagEvent<$RitualModifier>) => void)): void;
        function tags(type: "enderio:conduit_node_data_type", handler: ((event: TagEvent<$NodeDataType<any>>) => void)): void;
        function tags(type: "astralsorcery:liquid_interaction_result_types", handler: ((event: TagEvent<$LiquidInteractionResult$Type<any>>) => void)): void;
        function tags(type: "create:contraption_type", handler: ((event: TagEvent<$ContraptionType>) => void)): void;
        function tags(type: "crafttweaker:transformer_serializer", handler: ((event: TagEvent<$IIngredientTransformerSerializer<any>>) => void)): void;
        function tags(type: "lithostitched:bandlands", handler: ((event: TagEvent<$Bandlands>) => void)): void;
        function tags(type: "pneumaticcraft:prog_widget_area_types", handler: ((event: TagEvent<$AreaTypeSerializer<any>>) => void)): void;
        function tags(type: "worldgen/density_function", handler: ((event: TagEvent<$DensityFunction>) => void)): void;
        function tags(type: "spectrum:pastel_upgrade", handler: ((event: TagEvent<$PastelUpgradeSignature>) => void)): void;
        function tags(type: "item_sub_predicate_type", handler: ((event: TagEvent<$ItemSubPredicate$Type<any>>) => void)): void;
        function tags(type: "sfm:capability_provider_mappers", handler: ((event: TagEvent<$SFMBlockCapabilityProvider<any>>) => void)): void;
        function tags(type: "computercraft:turtle_upgrade", handler: ((event: TagEvent<$ITurtleUpgrade>) => void)): void;
        function tags(type: "roots:world_test_types", handler: ((event: TagEvent<$WorldTestType<any>>) => void)): void;
        function tags(type: "mekanism:robit_skin", handler: ((event: TagEvent<$RobitSkin>) => void)): void;
        function tags(type: "activity", handler: ((event: TagEvent<$Activity>) => void)): void;
        function tags(type: "sensor_type", handler: ((event: TagEvent<$SensorType<any>>) => void)): void;
        function tags(type: "block", handler: ((event: TagEvent<$Block>) => void)): void;
        function tags(type: "pos_rule_test", handler: ((event: TagEvent<$PosRuleTestType<any>>) => void)): void;
        function tags(type: "menu", handler: ((event: TagEvent<$MenuType<any>>) => void)): void;
        function tags(type: "computercraft:recipe_function", handler: ((event: TagEvent<$RecipeFunction$Type<any>>) => void)): void;
        function tags(type: "astralsorcery:artifact_condition_types", handler: ((event: TagEvent<$ArtifactCondition$Type<any>>) => void)): void;
        function tags(type: "create:potato_projectile/render_mode", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "netherexp:antidote", handler: ((event: TagEvent<$Antidote>) => void)): void;
        function tags(type: "potion", handler: ((event: TagEvent<$Potion>) => void)): void;
        function tags(type: "computercraft:turtle_upgrade_type", handler: ((event: TagEvent<$UpgradeType<any>>) => void)): void;
        function tags(type: "lithostitched:worldgen_modifier", handler: ((event: TagEvent<$WorldgenModifier>) => void)): void;
    }
    export namespace RecipeViewerEvents {
        function addEntries(extra: "item", handler: ((event: $AddEntriesKubeEvent<$ItemStack_>) => void)): void;
        function addInformation(extra: "item", handler: ((event: $AddInformationKubeEvent<$ItemPredicate_>) => void)): void;
        function groupEntries(extra: "item", handler: ((event: $GroupEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function registerSubtypes(extra: "item", handler: ((event: $RegisterSubtypesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntries(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntriesCompletely(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeRecipes(extra: "item", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
        function addEntries(extra: "fluid", handler: ((event: $AddEntriesKubeEvent<$FluidStack_>) => void)): void;
        function addInformation(extra: "fluid", handler: ((event: $AddInformationKubeEvent<$FluidIngredient_>) => void)): void;
        function groupEntries(extra: "fluid", handler: ((event: $GroupEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function registerSubtypes(extra: "fluid", handler: ((event: $RegisterSubtypesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntries(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntriesCompletely(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeRecipes(extra: "fluid", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
    }
    namespace CommonAddedEvents {
        function entityTame(handler: ((event: $EntityTameEventJS) => void)): void;
        function playerClone(handler: ((event: $PlayerCloneEventJS) => void)): void;
        function entityEnterChunk(handler: ((event: $EntityEnterChunkEventJS) => void)): void;
        function playerRespawn(handler: ((event: $PlayerRespawnEventJS) => void)): void;
        function playerChangeDimension(handler: ((event: $PlayerChangeDimensionEventJS) => void)): void;
    }
    namespace MBDRecipeTypeEvents {
        function onTransferProxyRecipe(extra: $ResourceLocation_, handler: ((event: $MBDRecipeTypeEvents$TransferProxyRecipeEventJS) => void)): void;
    }
    namespace AStageEvents {
        function removed(extra: string, handler: ((event: $KubeJSStageRemovedEvent) => void)): void;
        function removed(handler: ((event: $KubeJSStageRemovedEvent) => void)): void;
        function added(extra: string, handler: ((event: $KubeJSStageAddedEvent) => void)): void;
        function added(handler: ((event: $KubeJSStageAddedEvent) => void)): void;
    }
    namespace LDLib2UI {
        function item(extra: string, handler: ((event: $KJSHeldItemUIMenuType$ItemUIEventJS) => void)): void;
        function block(extra: string, handler: ((event: $KJSBlockUIMenuType$BlockUIEventJS) => void)): void;
        function player(extra: string, handler: ((event: $KJSPlayerUIMenuType$PlayerUIEventJS) => void)): void;
    }
    namespace LevelEvents {
        function loaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function loaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        function saved(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function saved(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$After) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(handler: ((event: $ExplosionKubeEvent$After) => void)): void;
    }
    namespace ItemEvents {
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        function destroyed(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        function destroyed(handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(extra: $ResourceKey_<$Item>, handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        function modifyTooltips(handler: ((event: $ModifyItemTooltipsKubeEvent) => void)): void;
    }
    namespace HandMadeEvents {
        function toolFilter(handler: ((event: $HandMadeToolFilterKubeEvent) => void)): void;
    }
    namespace PlayerEvents {
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedOut(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function tick(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function stageRemoved(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageRemoved(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function respawned(handler: ((event: $PlayerRespawnedKubeEvent) => void)): void;
        function decorateChat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function cloned(handler: ((event: $PlayerClonedKubeEvent) => void)): void;
        function stageAdded(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageAdded(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(extra: $ResourceLocation_, handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        function chat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedIn(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(extra: $ResourceKey_<$Item>, handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(handler: ((event: $InventoryKubeEvent) => void)): void;
    }
}
