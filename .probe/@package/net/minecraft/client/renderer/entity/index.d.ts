import { $ItemInHandRenderer, $BlockEntityWithoutLevelRenderer, $MultiBufferSource_, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $LightningBolt, $EntityType_, $Display, $Display$BlockDisplay, $Display$ItemDisplay, $Entity, $GlowSquid, $Display$ItemDisplay$ItemRenderState_, $EntityType, $Display$BlockDisplay$BlockRenderState, $ExperienceOrb, $Display$ItemDisplay$ItemRenderState, $LivingEntity, $Mob, $Display$BlockDisplay$BlockRenderState_, $Display$TextDisplay$TextRenderState, $Display$TextDisplay, $OminousItemSpawner, $Display$TextDisplay$TextRenderState_ } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $ResourceManagerReloadListener, $ResourceManager, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Parrot$Variant_, $Turtle, $Salmon, $Panda, $Fox, $SnowGolem, $Wolf, $Cod, $Chicken, $Pufferfish, $IronGolem, $Ocelot, $Cat, $Squid, $PolarBear, $Sheep, $Cow, $Pig, $Bee, $TropicalFish, $Dolphin, $MushroomCow, $Rabbit, $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $ItemRendererAccessor as $ItemRendererAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $DyeColor_, $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $EntityRendererExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FireworkRocketEntity, $ShulkerBullet, $Arrow, $AbstractArrow, $FishingHook, $WitherSkull, $DragonFireball, $ThrownTrident, $EvokerFangs, $SpectralArrow, $LlamaSpit } from "@package/net/minecraft/world/entity/projectile";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Stray, $Silverfish, $Drowned, $WitherSkeleton, $Zoglin, $Creeper, $Shulker, $CaveSpider, $Endermite, $Spider, $Blaze, $Illusioner, $EnderMan, $AbstractSkeleton, $MagmaCube, $SpellcasterIllager, $Witch, $Bogged, $Vindicator, $Zombie, $ZombieVillager, $Pillager, $Strider, $Guardian, $Ravager, $Phantom, $Vex, $AbstractIllager, $Ghast, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $AbstractMinecart, $MinecartTNT, $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";
import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Map, $List, $List_ } from "@package/java/util";
import { $ItemFrame, $Painting, $LeashFenceKnotEntity, $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse, $Llama, $Horse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $PiglinModel, $ZombieModel, $RavagerModel, $SkeletonModel, $SalmonModel, $GhastModel, $CodModel, $VillagerModel, $TurtleModel, $IronGolemModel, $BlazeModel, $VexModel, $LlamaModel, $TadpoleModel, $SnifferModel, $CatModel, $PolarBearModel, $EndermiteModel, $ZombieVillagerModel, $ArmorStandArmorModel, $CowModel, $FoxModel, $SheepModel, $SnowGolemModel, $DolphinModel, $EntityModel, $ChestedHorseModel, $OcelotModel, $ArmadilloModel, $WolfModel, $ColorableHierarchicalModel, $SquidModel, $ParrotModel, $ChickenModel, $EndermanModel, $DrownedModel, $BatModel, $RabbitModel, $WitherBossModel, $WardenModel, $IllagerModel, $PandaModel, $SlimeModel, $GoatModel, $SpiderModel, $HorseModel, $StriderModel, $FrogModel, $AxolotlModel, $WitchModel, $BeeModel, $CamelModel, $SilverfishModel, $CreeperModel, $LavaSlimeModel, $AllayModel, $ListModel, $PhantomModel, $HumanoidModel, $PigModel, $HoglinModel, $ShulkerModel, $BreezeModel, $GuardianModel } from "@package/net/minecraft/client/model";
import { $EntityRendererInter } from "@package/dev/tr7zw/entityculling/access";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $EntityModelSet, $ModelPart, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $ItemRendererAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $VertexConsumer, $PoseStack$Pose, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";
export * as player from "@package/net/minecraft/client/renderer/entity/player";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $EnderDragonRenderer$DragonModel extends $EntityModel<$EnderDragon> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $EnderDragon, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: $EnderDragon, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        handler$dom002$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        entity: $EnderDragon;
        constructor(root: $ModelPart);
    }
    export class $NoopRenderer<T extends $Entity> extends $EntityRenderer<T> {
        static LEASH_RENDER_STEPS: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $UndeadHorseRenderer extends $AbstractHorseRenderer<$AbstractHorse, $HorseModel<$AbstractHorse>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractHorse): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$AbstractHorse, $HorseModel<$AbstractHorse>>>;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $WolfRenderer extends $MobRenderer<$Wolf, $WolfModel<$Wolf>> {
        render(entity: $Wolf, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Wolf): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Wolf, $WolfModel<$Wolf>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VindicatorRenderer extends $IllagerRenderer<$Vindicator> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Vindicator): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Vindicator, $IllagerModel<$Vindicator>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VillagerRenderer extends $MobRenderer<$Villager, $VillagerModel<$Villager>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Villager): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Villager, $VillagerModel<$Villager>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ThrownTridentRenderer extends $EntityRenderer<$ThrownTrident> {
        render(entity: $ThrownTrident, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ThrownTrident): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        static TRIDENT_LOCATION: $ResourceLocation;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $TntRenderer extends $EntityRenderer<$PrimedTnt> {
        render(entity: $PrimedTnt, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $PrimedTnt): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider$Context {
        getResourceManager(): $ResourceManager;
        getItemRenderer(): $ItemRenderer;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getModelSet(): $EntityModelSet;
        getModelManager(): $ModelManager;
        getFont(): $Font;
        bakeLayer(layer: $ModelLayerLocation): $ModelPart;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, itemInHandRenderer: $ItemInHandRenderer, resourceManager: $ResourceManager, modelSet: $EntityModelSet, font: $Font);
        get resourceManager(): $ResourceManager;
        get itemRenderer(): $ItemRenderer;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get modelSet(): $EntityModelSet;
        get modelManager(): $ModelManager;
        get font(): $Font;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
    }
    export class $TropicalFishRenderer extends $MobRenderer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        render(entity: $TropicalFish, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $TropicalFish): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PigRenderer extends $MobRenderer<$Pig, $PigModel<$Pig>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pig): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Pig, $PigModel<$Pig>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderer<T extends $Entity> implements $EntityRendererExtension, $EntityRendererInter<any> {
        getPackedLightCoords(entity: $Object, partialTicks: number): number;
        render(entity: $Object, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the font renderer from the set render manager
         */
        getFont(): $Font;
        shouldRender(livingEntity: $Object, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        getRenderOffset(entity: $Object, partialTicks: number): $Vec3;
        entityCullingIgnoresCulling(entity: $Entity): boolean;
        shadowRenderNameTag(entity: $Entity, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        shadowShouldShowName(entity: $Entity): boolean;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Object): $ResourceLocation;
        setFusionModelParts(parts: $List_<any>): void;
        entityCullingGetCullingBox(entity: $Entity): $AABB;
        getFusionModelParts(): $List<any>;
        handler$fki000$ad_astra$adastra$shouldRender(arg0: $Entity, arg1: $Frustum, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        static LEASH_RENDER_STEPS: number;
        get font(): $Font;
    }
    export class $PaintingRenderer extends $EntityRenderer<$Painting> {
        render(entity: $Painting, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Painting): $ResourceLocation;
        handler$zea000$sodium_extra$render(painting: $Painting, f: number, g: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, i: number, ci: $CallbackInfo): void;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SquidRenderer<T extends $Squid> extends $MobRenderer<T, $SquidModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $SquidModel<T>>>;
        constructor(context: $EntityRendererProvider$Context, model: $SquidModel<T>);
    }
    export class $OminousItemSpawnerRenderer extends $EntityRenderer<$OminousItemSpawner> {
        render(arg0: $OminousItemSpawner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: $OminousItemSpawner): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
    }
    export class $PolarBearRenderer extends $MobRenderer<$PolarBear, $PolarBearModel<$PolarBear>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $PolarBear): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$PolarBear, $PolarBearModel<$PolarBear>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArmorStandRenderer extends $LivingEntityRenderer<$ArmorStand, $ArmorStandArmorModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ArmorStand): $ResourceLocation;
        static DEFAULT_SKIN_LOCATION: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$ArmorStand, $ArmorStandArmorModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ZombieRenderer extends $AbstractZombieRenderer<$Zombie, $ZombieModel<$Zombie>> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        constructor(context: $EntityRendererProvider$Context);
        constructor(context: $EntityRendererProvider$Context, zombieLayer: $ModelLayerLocation, innerArmor: $ModelLayerLocation, outerArmor: $ModelLayerLocation);
    }
    export class $IllusionerRenderer extends $IllagerRenderer<$Illusioner> {
        render(entity: $Illusioner, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Illusioner): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Illusioner, $IllagerModel<$Illusioner>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RabbitRenderer extends $MobRenderer<$Rabbit, $RabbitModel<$Rabbit>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Rabbit): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Rabbit, $RabbitModel<$Rabbit>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CowRenderer extends $MobRenderer<$Cow, $CowModel<$Cow>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cow): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Cow, $CowModel<$Cow>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DolphinRenderer extends $MobRenderer<$Dolphin, $DolphinModel<$Dolphin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Dolphin): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Dolphin, $DolphinModel<$Dolphin>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WindChargeRenderer extends $EntityRenderer<$AbstractWindCharge> {
        render(entity: $AbstractWindCharge, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractWindCharge): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SheepRenderer extends $MobRenderer<$Sheep, $SheepModel<$Sheep>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Sheep): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Sheep, $SheepModel<$Sheep>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GhastRenderer extends $MobRenderer<$Ghast, $GhastModel<$Ghast>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ghast): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Ghast, $GhastModel<$Ghast>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ShulkerBulletRenderer extends $EntityRenderer<$ShulkerBullet> {
        render(entity: $ShulkerBullet, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ShulkerBullet): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $LightningBoltRenderer extends $EntityRenderer<$LightningBolt> {
        render(entity: $LightningBolt, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LightningBolt): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ThrownItemRenderer<T extends $Entity> extends $EntityRenderer<T> {
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context, scale: number, fullBright: boolean);
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ChestedHorseRenderer<T extends $AbstractChestedHorse> extends $AbstractHorseRenderer<T, $ChestedHorseModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $ChestedHorseModel<T>>>;
        constructor(context: $EntityRendererProvider$Context, scale: number, layer: $ModelLayerLocation);
    }
    export class $LlamaRenderer extends $MobRenderer<$Llama, $LlamaModel<$Llama>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Llama): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Llama, $LlamaModel<$Llama>>>;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $ParrotRenderer extends $MobRenderer<$Parrot, $ParrotModel> {
        static getVariantTexture(variant: $Parrot$Variant_): $ResourceLocation;
        /**
         * Defines what float the third param in setRotationAngles of ModelBase is
         */
        getBob(livingBase: $Parrot, partialTicks: number): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Parrot): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Parrot, $ParrotModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SlimeRenderer extends $MobRenderer<$Slime, $SlimeModel<$Slime>> {
        render(entity: $Slime, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Slime): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Slime, $SlimeModel<$Slime>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GlowSquidRenderer extends $SquidRenderer<$GlowSquid> {
        getTextureLocation(arg0: $GlowSquid): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$GlowSquid, $SquidModel<$GlowSquid>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<$GlowSquid>);
    }
    export class $StrayRenderer extends $SkeletonRenderer<$Stray> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Stray): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Stray, $SkeletonModel<$Stray>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PiglinRenderer extends $HumanoidMobRenderer<$Mob, $PiglinModel<$Mob>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Mob): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Mob, $PiglinModel<$Mob>>>;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation, noRightEar: boolean);
    }
    export class $TippableArrowRenderer extends $ArrowRenderer<$Arrow> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Arrow): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        static TIPPED_ARROW_LOCATION: $ResourceLocation;
        static NORMAL_ARROW_LOCATION: $ResourceLocation;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $HoglinRenderer extends $MobRenderer<$Hoglin, $HoglinModel<$Hoglin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Hoglin): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Hoglin, $HoglinModel<$Hoglin>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CreeperRenderer extends $MobRenderer<$Creeper, $CreeperModel<$Creeper>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Creeper): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Creeper, $CreeperModel<$Creeper>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PufferfishRenderer extends $MobRenderer<$Pufferfish, $EntityModel<$Pufferfish>> {
        render(entity: $Pufferfish, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pufferfish): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Pufferfish, $EntityModel<$Pufferfish>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PandaRenderer extends $MobRenderer<$Panda, $PandaModel<$Panda>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Panda): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Panda, $PandaModel<$Panda>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitchRenderer extends $MobRenderer<$Witch, $WitchModel<$Witch>> {
        render(entity: $Witch, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Witch): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Witch, $WitchModel<$Witch>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AbstractZombieRenderer<T extends $Zombie, M extends $ZombieModel<T>> extends $HumanoidMobRenderer<T, M> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Zombie): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(context: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $PhantomRenderer extends $MobRenderer<$Phantom, $PhantomModel<$Phantom>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Phantom): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Phantom, $PhantomModel<$Phantom>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SalmonRenderer extends $MobRenderer<$Salmon, $SalmonModel<$Salmon>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Salmon): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Salmon, $SalmonModel<$Salmon>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EvokerFangsRenderer extends $EntityRenderer<$EvokerFangs> {
        render(entity: $EvokerFangs, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EvokerFangs): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DragonFireballRenderer extends $EntityRenderer<$DragonFireball> {
        render(entity: $DragonFireball, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $DragonFireball): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EndermanRenderer extends $MobRenderer<$EnderMan, $EndermanModel<$EnderMan>> {
        render(entity: $EnderMan, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        getRenderOffset(entity: $EnderMan, partialTicks: number): $Vec3;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EnderMan): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$EnderMan, $EndermanModel<$EnderMan>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor {
        getPackedLightCoords<E extends $Entity>(entity: E, partialTicks: number): number;
        prepare(level: $Level_, activeRenderInfo: $Camera, entity: $Entity): void;
        /**
         * World sets this RenderManager's worldObj to the world provided
         */
        setLevel(level: $Level_ | null): void;
        render<E extends $Entity>(entity: E, x: number, arg2: number, y: number, arg4: number, z: number, arg6: $PoseStack, rotationYaw: $MultiBufferSource_, partialTicks: number): void;
        getRenderer<T extends $Entity>(entity: T): $EntityRenderer<T>;
        getItemInHandRenderer(): $ItemInHandRenderer;
        setRenderHitBoxes(debugBoundingBox: boolean): void;
        shouldRenderHitBoxes(): boolean;
        distanceToSqr(x: number, arg1: number, y: number): number;
        distanceToSqr(entity: $Entity): number;
        setRenderShadow(debugBoundingBox: boolean): void;
        shouldRender<E extends $Entity>(entity: E, frustum: $Frustum, camX: number, arg3: number, camY: number): boolean;
        overrideCameraOrientation(cameraOrientation: $Quaternionf): void;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        cameraOrientation(): $Quaternionf;
        handler$ddg000$chloride$inject$shouldRender(arg0: $Entity, arg1: $Frustum, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, font: $Font, options: $Options, entityModels: $EntityModelSet);
        set level(value: $Level_ | null);
        get itemInHandRenderer(): $ItemInHandRenderer;
        set renderHitBoxes(value: boolean);
        set renderShadow(value: boolean);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        get name(): string;
    }
    export class $MagmaCubeRenderer extends $MobRenderer<$MagmaCube, $LavaSlimeModel<$MagmaCube>> {
        render(entity: $MagmaCube, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $MagmaCube): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$MagmaCube, $LavaSlimeModel<$MagmaCube>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $TurtleRenderer extends $MobRenderer<$Turtle, $TurtleModel<$Turtle>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Turtle): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Turtle, $TurtleModel<$Turtle>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PillagerRenderer extends $IllagerRenderer<$Pillager> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pillager): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Pillager, $IllagerModel<$Pillager>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$TextDisplayRenderer extends $DisplayRenderer<$Display$TextDisplay, $Display$TextDisplay$TextRenderState> {
        renderInner(textDisplay: $Display$TextDisplay, renderState: $Display$TextDisplay$TextRenderState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, lightmapUV: number, partialTick: number): void;
        static LEASH_RENDER_STEPS: number;
    }
    export class $FrogRenderer extends $MobRenderer<$Frog, $FrogModel<$Frog>> {
        getTextureLocation(arg0: $Frog): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Frog, $FrogModel<$Frog>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZoglinRenderer extends $MobRenderer<$Zoglin, $HoglinModel<$Zoglin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Zoglin): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Zoglin, $HoglinModel<$Zoglin>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$ItemDisplayRenderer extends $DisplayRenderer<$Display$ItemDisplay, $Display$ItemDisplay$ItemRenderState> {
        renderInner(arg0: $Display$ItemDisplay, arg1: $Display$ItemDisplay$ItemRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static LEASH_RENDER_STEPS: number;
    }
    export class $FoxRenderer extends $MobRenderer<$Fox, $FoxModel<$Fox>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Fox): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Fox, $FoxModel<$Fox>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ZombieVillagerRenderer extends $HumanoidMobRenderer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ZombieVillager): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VexRenderer extends $MobRenderer<$Vex, $VexModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Vex): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Vex, $VexModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EndCrystalRenderer extends $EntityRenderer<$EndCrystal> {
        static getY(endCrystal: $EndCrystal, partialTick: number): number;
        render(entity: $EndCrystal, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shouldRender(livingEntity: $EndCrystal, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        static createBodyLayer(): $LayerDefinition;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EndCrystal): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AbstractHorseRenderer<T extends $AbstractHorse, M extends $HorseModel<T>> extends $MobRenderer<T, M> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
        constructor(context: $EntityRendererProvider$Context, model: M, scale: number);
    }
    export class $WanderingTraderRenderer extends $MobRenderer<$WanderingTrader, $VillagerModel<$WanderingTrader>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WanderingTrader): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$WanderingTrader, $VillagerModel<$WanderingTrader>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ExperienceOrbRenderer extends $EntityRenderer<$ExperienceOrb> {
        render(entity: $ExperienceOrb, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ExperienceOrb): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SkeletonRenderer<T extends $AbstractSkeleton> extends $HumanoidMobRenderer<T, $SkeletonModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $SkeletonModel<T>>>;
        constructor(context: $EntityRendererProvider$Context, skeletonLayer: $ModelLayerLocation, innerModelLayer: $ModelLayerLocation, model: $SkeletonModel<T>);
        constructor(context: $EntityRendererProvider$Context, skeletonLayer: $ModelLayerLocation, innerModelLayer: $ModelLayerLocation, outerModelLayer: $ModelLayerLocation);
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GoatRenderer extends $MobRenderer<$Goat, $GoatModel<$Goat>> {
        getTextureLocation(arg0: $Goat): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Goat, $GoatModel<$Goat>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermiteRenderer extends $MobRenderer<$Endermite, $EndermiteModel<$Endermite>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Endermite): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Endermite, $EndermiteModel<$Endermite>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $IllagerRenderer<T extends $AbstractIllager> extends $MobRenderer<T, $IllagerModel<T>> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
    }
    export class $BeeRenderer extends $MobRenderer<$Bee, $BeeModel<$Bee>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Bee): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Bee, $BeeModel<$Bee>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        getModel(): M;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        get model(): M;
    }
    export class $AllayRenderer extends $MobRenderer<$Allay, $AllayModel> {
        getTextureLocation(arg0: $Allay): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Allay, $AllayModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LeashKnotRenderer extends $EntityRenderer<$LeashFenceKnotEntity> {
        render(entity: $LeashFenceKnotEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LeashFenceKnotEntity): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AxolotlRenderer extends $MobRenderer<$Axolotl, $AxolotlModel<$Axolotl>> {
        getTextureLocation(arg0: $Axolotl): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Axolotl, $AxolotlModel<$Axolotl>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpectralArrowRenderer extends $ArrowRenderer<$SpectralArrow> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $SpectralArrow): $ResourceLocation;
        static SPECTRAL_ARROW_LOCATION: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CatRenderer extends $MobRenderer<$Cat, $CatModel<$Cat>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cat): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Cat, $CatModel<$Cat>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SilverfishRenderer extends $MobRenderer<$Silverfish, $SilverfishModel<$Silverfish>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Silverfish): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Silverfish, $SilverfishModel<$Silverfish>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $StriderRenderer extends $MobRenderer<$Strider, $StriderModel<$Strider>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Strider): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Strider, $StriderModel<$Strider>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        addLayer(layer: $RenderLayer<T, M>): boolean;
        getModel(): M;
        static getOverlayCoords(livingEntity: $LivingEntity, u: number): number;
        static isEntityUpsideDown(livingEntity: $LivingEntity): boolean;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
        get model(): M;
    }
    export class $BoatRenderer extends $EntityRenderer<$Boat> {
        render(entity: $Boat, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * @deprecated
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Boat): $ResourceLocation;
        getModelWithLocation(arg0: $Boat): $Pair<$ResourceLocation, $ListModel<$Boat>>;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context, chestBoat: boolean);
    }
    export class $MobRenderer<T extends $Mob, M extends $EntityModel<T>> extends $LivingEntityRenderer<T, M> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
    }
    export class $BreezeRenderer extends $MobRenderer<$Breeze, $BreezeModel<$Breeze>> {
        static enable(model: $BreezeModel<$Breeze>, ...parts: $ModelPart[]): $BreezeModel<$Breeze>;
        render(entity: $Breeze, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Breeze): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Breeze, $BreezeModel<$Breeze>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RavagerRenderer extends $MobRenderer<$Ravager, $RavagerModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ravager): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Ravager, $RavagerModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $IronGolemRenderer extends $MobRenderer<$IronGolem, $IronGolemModel<$IronGolem>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $IronGolem): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $HuskRenderer extends $ZombieRenderer {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GiantMobRenderer extends $MobRenderer<$Giant, $HumanoidModel<$Giant>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Giant): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Giant, $HumanoidModel<$Giant>>>;
        constructor(context: $EntityRendererProvider$Context, scale: number);
    }
    export class $WitherBossRenderer extends $MobRenderer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherBoss): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$WitherBoss, $WitherBossModel<$WitherBoss>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitherSkullRenderer extends $EntityRenderer<$WitherSkull> {
        render(entity: $WitherSkull, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        static createSkullLayer(): $LayerDefinition;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherSkull): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArrowRenderer<T extends $AbstractArrow> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        vertex(pose: $PoseStack$Pose, consumer: $VertexConsumer, x: number, y: number, z: number, u: number, v: number, normalX: number, normalY: number, normalZ: number, packedLight: number): void;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FishingHookRenderer extends $EntityRenderer<$FishingHook> {
        render(entity: $FishingHook, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FishingHook): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FallingBlockRenderer extends $EntityRenderer<$FallingBlockEntity> {
        render(entity: $FallingBlockEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FallingBlockEntity): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ElderGuardianRenderer extends $GuardianRenderer {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        static GUARDIAN_ELDER_LOCATION: $ResourceLocation;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CodRenderer extends $MobRenderer<$Cod, $CodModel<$Cod>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cod): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Cod, $CodModel<$Cod>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SpiderRenderer<T extends $Spider> extends $MobRenderer<T, $SpiderModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $SpiderModel<T>>>;
        constructor(context: $EntityRendererProvider$Context);
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $TadpoleRenderer extends $MobRenderer<$Tadpole, $TadpoleModel<$Tadpole>> {
        getTextureLocation(arg0: $Tadpole): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Tadpole, $TadpoleModel<$Tadpole>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlazeRenderer extends $MobRenderer<$Blaze, $BlazeModel<$Blaze>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Blaze): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Blaze, $BlazeModel<$Blaze>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        handler$zdo000$sodium_extra$render(itemFrame: $ItemFrame, f: number, g: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, i: number, ci: $CallbackInfo): void;
        getRenderOffset(entity: T, partialTicks: number): $Vec3;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer<T extends $Display, S> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTick: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
    }
    export class $HorseRenderer extends $AbstractHorseRenderer<$Horse, $HorseModel<$Horse>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Horse): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Horse, $HorseModel<$Horse>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ShulkerRenderer extends $MobRenderer<$Shulker, $ShulkerModel<$Shulker>> {
        shouldRender(livingEntity: $Shulker, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        getRenderOffset(entity: $Shulker, partialTicks: number): $Vec3;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Shulker): $ResourceLocation;
        static getTextureLocation(color: $DyeColor_ | null): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Shulker, $ShulkerModel<$Shulker>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitherSkeletonRenderer extends $SkeletonRenderer<$WitherSkeleton> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherSkeleton): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$WitherSkeleton, $SkeletonModel<$WitherSkeleton>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CaveSpiderRenderer extends $SpiderRenderer<$CaveSpider> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $CaveSpider): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$CaveSpider, $SpiderModel<$CaveSpider>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $BoggedRenderer extends $SkeletonRenderer<$Bogged> {
        getTextureLocation(arg0: $Bogged): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Bogged, $SkeletonModel<$Bogged>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EnderDragonRenderer extends $EntityRenderer<$EnderDragon> {
        render(entity: $EnderDragon, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        static renderCrystalBeams(x: number, y: number, z: number, partialTick: number, tickCount: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        static createBodyLayer(): $LayerDefinition;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EnderDragon): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        static CRYSTAL_BEAM_LOCATION: $ResourceLocation;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SnifferRenderer extends $MobRenderer<$Sniffer, $SnifferModel<$Sniffer>> {
        getTextureLocation(arg0: $Sniffer): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Sniffer, $SnifferModel<$Sniffer>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MinecartRenderer<T extends $AbstractMinecart> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $TntMinecartRenderer extends $MinecartRenderer<$MinecartTNT> {
        static renderWhiteSolidBlock(blockRenderDispatcher: $BlockRenderDispatcher, state: $BlockState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, whiteOverlay: boolean): void;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $MushroomCowRenderer extends $MobRenderer<$MushroomCow, $CowModel<$MushroomCow>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $MushroomCow): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$MushroomCow, $CowModel<$MushroomCow>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArmadilloRenderer extends $MobRenderer<$Armadillo, $ArmadilloModel> {
        getTextureLocation(arg0: $Armadillo): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Armadillo, $ArmadilloModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HumanoidMobRenderer<T extends $Mob, M extends $HumanoidModel<T>> extends $MobRenderer<T, M> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number, scaleX: number, scaleY: number, scaleZ: number);
    }
    export class $LlamaSpitRenderer extends $EntityRenderer<$LlamaSpit> {
        render(entity: $LlamaSpit, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LlamaSpit): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DrownedRenderer extends $AbstractZombieRenderer<$Drowned, $DrownedModel<$Drowned>> {
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Drowned, $DrownedModel<$Drowned>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderers {
        static register<T extends $Entity>(entityType: $EntityType_<T>, provider: $EntityRendererProvider_<T>): void;
        static validateRegistrations(): boolean;
        static createEntityRenderers(context: $EntityRendererProvider$Context): $Map<$EntityType<never>, $EntityRenderer<never>>;
        static createPlayerRenderers(context: $EntityRendererProvider$Context): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        constructor();
    }
    export class $OcelotRenderer extends $MobRenderer<$Ocelot, $OcelotModel<$Ocelot>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ocelot): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Ocelot, $OcelotModel<$Ocelot>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FireworkEntityRenderer extends $EntityRenderer<$FireworkRocketEntity> {
        render(entity: $FireworkRocketEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FireworkRocketEntity): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor$1, $ItemRendererAccessor {
        static hasAnimatedTexture$sodium_$md$796745$1(stack: $ItemStack_): boolean;
        handler$fla000$codechickenl$onRenderItem(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        handler$bdi000$ldlib2$injectRenderItem(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        handler$zbh000$astralsorcery$getCustomSextantModel(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity, arg3: number, arg4: $CallbackInfoReturnable<any>): void;
        handler$zbh000$astralsorcery$replaceRenderModel(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        render(itemStack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, combinedLight: number, combinedOverlay: number, model: $BakedModel): void;
        renderStatic(stack: $ItemStack_, displayContext: $ItemDisplayContext_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, seed: number): void;
        renderStatic(entity: $LivingEntity | null, itemStack: $ItemStack_, diplayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, combinedLight: number, combinedOverlay: number, seed: number): void;
        static getFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        renderQuadList(poseStack: $PoseStack, buffer: $VertexConsumer, quads: $List_<$BakedQuad>, itemStack: $ItemStack_, combinedLight: number, combinedOverlay: number): void;
        static getArmorFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, hasFoil: boolean): $VertexConsumer;
        getItemModelShaper(): $ItemModelShaper;
        renderModelLists(model: $BakedModel, stack: $ItemStack_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, buffer: $VertexConsumer): void;
        getModel(stack: $ItemStack_, level: $Level_ | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        static getFoilBufferDirect(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        static getCompassFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, pose: $PoseStack$Pose): $VertexConsumer;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, modelManager: $ModelManager, itemColors: $ItemColors, blockEntityRenderer: $BlockEntityWithoutLevelRenderer);
        get itemModelShaper(): $ItemModelShaper;
        get name(): string;
    }
    export class $WardenRenderer extends $MobRenderer<$Warden, $WardenModel<$Warden>> {
        getTextureLocation(arg0: $Warden): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Warden, $WardenModel<$Warden>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnowGolemRenderer extends $MobRenderer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $SnowGolem): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemEntityRenderer extends $EntityRenderer<$ItemEntity> {
        render(entity: $ItemEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ItemEntity): $ResourceLocation;
        static renderMultipleFromCount(itemRenderer: $ItemRenderer, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, model: $BakedModel, isGui3d: boolean, random: $RandomSource): void;
        static renderMultipleFromCount(itemRenderer: $ItemRenderer, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, random: $RandomSource, level: $Level_): void;
        static getSeedForItemStack(stack: $ItemStack_): number;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $BatRenderer extends $MobRenderer<$Bat, $BatModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Bat): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Bat, $BatModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$BlockDisplayRenderer extends $DisplayRenderer<$Display$BlockDisplay, $Display$BlockDisplay$BlockRenderState> {
        renderInner(arg0: $Display$BlockDisplay, arg1: $Display$BlockDisplay$BlockRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static LEASH_RENDER_STEPS: number;
    }
    export class $CamelRenderer extends $MobRenderer<$Camel, $CamelModel<$Camel>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Camel): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Camel, $CamelModel<$Camel>>>;
        constructor(context: $EntityRendererProvider$Context, layerLocation: $ModelLayerLocation);
    }
    export class $GuardianRenderer extends $MobRenderer<$Guardian, $GuardianModel> {
        render(entity: $Guardian, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shouldRender(livingEntity: $Guardian, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Guardian): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EvokerRenderer<T extends $SpellcasterIllager> extends $IllagerRenderer<T> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ChickenRenderer extends $MobRenderer<$Chicken, $ChickenModel<$Chicken>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Chicken): $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$Chicken, $ChickenModel<$Chicken>>>;
        constructor(context: $EntityRendererProvider$Context);
    }
}
