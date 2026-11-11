import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemBehavior, $ItemPredicate, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        getType(): string;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        getServer(): $MinecraftServer;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        getScriptType(): $ScriptType;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        getLevel(): $Level;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        setNbt(nbt: $CompoundTag_): void;
        setZ(z: number): void;
        setY(y: number): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        spawn(): void;
        setX(x: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setRotation(yaw: number, pitch: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setMotionX(x: number): void;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        setMotionY(y: number): void;
        setMotionZ(z: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        getMotionY(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        getMotionZ(): number;
        getMotionX(): number;
        get waterCreature(): boolean;
        get peacefulCreature(): boolean;
        get ambientCreature(): boolean;
        get name(): $Component;
        get displayName(): $Component;
        get type(): string;
        get teamName(): string;
        get server(): $MinecraftServer;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get living(): boolean;
        get profile(): $GameProfile;
        get level(): $Level;
        get username(): string;
        get player(): boolean;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        set z(value: number);
        set y(value: number);
        set x(value: number);
        get self(): boolean;
        get facing(): $Direction;
        get teamId(): string;
        get passengers(): $EntityArrayList;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$isEmpty(): boolean;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getAmount(): number;
        kjs$getFluid(): $Fluid;
        kjs$getId(): string;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        self(): $EntityGetter;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        getIdLocation(): $ResourceLocation;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        getRegistry(): $Registry<T>;
        asHolder(): $Holder<T>;
        getId(): string;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        get key(): $ResourceKey<T>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<T>>;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
        get registry(): $Registry<T>;
        get id(): string;
        get mod(): string;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getEntities(): $EntityArrayList;
        getPlayers(): $EntityArrayList;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get players(): $EntityArrayList;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setIcon(icon: $ItemStack_): void;
        kjs$setDisplayName(component: $Component_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        get item(): $ItemStack;
        get frame(): boolean;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getBlock(): $Block;
        getId(): string;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get block(): $Block;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setTotalMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setChestArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getMainHandItem(): $ItemStack;
        getTotalMovementSpeed(): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getReachDistance(): number;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        setHeadArmorItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        setMainHandItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        setLegsArmorItem(item: $ItemStack_): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setMovementSpeedAddition(speed: number): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        rayTrace(): $KubeRayTraceResult;
        isLiving(): this is $LivingEntity;
        isUndead(): boolean;
        setOffHandItem(item: $ItemStack_): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        get totalMovementSpeed(): number;
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        set movementSpeedAddition(value: number);
        get living(): boolean;
        get undead(): boolean;
        set maxHealth(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $ServerLevel;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getOverworld(): $ServerLevel;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getType(): $ResourceLocation;
        getMod(): string;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        self(): $Level;
        tell(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getSide(): $ScriptType;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        setTime(time: number): void;
        isOverworld(): boolean;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get side(): $ScriptType;
        get dimension(): $ResourceLocation;
        set time(value: number);
        get overworld(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        get(): number[];
        target(): number;
        original(): $BufferedImage;
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { target?: number, original?: $BufferedImage,  } | [target?: number, original?: $BufferedImage, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getMinecraft(): $Minecraft;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        notify(notification: $NotificationToastData_): void;
        set activePostShader(value: $ResourceLocation_);
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get minecraft(): $Minecraft;
        get self(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        kjs$asIngredient(): $Ingredient;
        getItems(): $Stream<$ItemStack>;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$getStackArray(): $ItemStack[];
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        isEmpty(): boolean;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getAmount(): number;
        getFluid(): $Fluid;
        get empty(): boolean;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get amount(): number;
        get fluid(): $Fluid;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$getInt(rule: string): number;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        setStatusMessage(message: $Component_): void;
        getSaturation(): number;
        addExhaustion(exhaustion: number): void;
        addFood(hunger: number, saturation: number): void;
        setXpLevel(levels: number): void;
        getXpLevel(): number;
        isMiningBlock(): boolean;
        setSaturation(saturation: number): void;
        giveInHand(item: $ItemStack_): void;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        setFoodLevel(foodLevel: number): void;
        addXPLevels(levels: number): void;
        getMouseItem(): $ItemStack;
        getStats(): $PlayerStatsJS;
        setMouseItem(item: $ItemStack_): void;
        getFoodLevel(): number;
        addItemCooldown(item: $Item_, ticks: number): void;
        sendInventoryUpdate(): void;
        getSelectedSlot(): number;
        boostElytraFlight(): void;
        getCraftingGrid(): $InventoryKJS;
        getOpenInventory(): $AbstractContainerMenu;
        setSelectedSlot(index: number): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        spawn(): void;
        getXp(): number;
        give(item: $ItemStack_): void;
        setXp(xp: number): void;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        addXP(xp: number): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        set statusMessage(value: $Component_);
        get miningBlock(): boolean;
        get stages(): $Stages;
        get inventory(): $InventoryKJS;
        get stats(): $PlayerStatsJS;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get profile(): $GameProfile;
        get username(): string;
        get player(): boolean;
        get fake(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toNestedJson(): $JsonElement;
        toFlatJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        self(): $RecipeHolder<never>;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        getTitle(): $Component;
        self(): $AdvancementNode;
        getId(): $ResourceLocation;
        getDescription(): $Component;
        hasDisplay(): boolean;
        getChildren(): $Set<$AdvancementNode>;
        getParent(): $AdvancementNode;
        getDisplay(): $DisplayInfo;
        addChild(a: $AdvancementNode): void;
        getDisplayText(): $Component;
        get title(): $Component;
        get id(): $ResourceLocation;
        get description(): $Component;
        get children(): $Set<$AdvancementNode>;
        get parent(): $AdvancementNode;
        get display(): $DisplayInfo;
        get displayText(): $Component;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        isEmpty(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setBlockBuilder(b: $BlockBuilder): void;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        setNameKey(key: string): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlockStates(): $List<$BlockState>;
        getBlock(): $Block;
        set blockBuilder(value: $BlockBuilder);
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        set lightEmission(value: number);
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
        get block(): $Block;
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        setMouseItem(item: $ItemStack_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setSelectedSlot(index: number): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        captureInventory(autoRestore: boolean): $Container;
        unlockAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        notify(builder: $NotificationToastData_): void;
        set activePostShader(value: $ResourceLocation_);
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set mouseItem(value: $ItemStack_);
        set selectedSlot(value: number);
        get serverPlayer(): boolean;
        get op(): boolean;
        set creativeMode(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getKey(): $ResourceKey<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        toString(): string;
        getWebIconURL(size: number): $RelativeURL;
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        set lightEmission(value: number);
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get id(): string;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $ClientLevel;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setExplosionResistance(v: number): void;
        setIsRandomlyTicking(v: boolean): void;
        setHasCollision(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setSoundType(v: $SoundType_): void;
        setFriction(v: number): void;
        setJumpFactor(v: number): void;
        setSpeedFactor(v: number): void;
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
        set hasCollision(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set soundType(value: $SoundType_);
        set friction(value: number);
        set jumpFactor(value: number);
        set speedFactor(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getItemBehavior(): $ItemBehavior;
        setItemBehavior(b: $ItemBehavior): void;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        getItem(): $Item;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        setCanRepair(repairable: boolean): void;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        get item(): $Item;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        set canRepair(value: boolean);
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        hasStyle(): boolean;
        insertion(s: string): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        darkPurple(): $MutableComponent;
        hasSiblings(): boolean;
        clickCopy(text: string): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        darkGreen(): $MutableComponent;
        darkAqua(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        isEmpty(): boolean;
        underlined(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkGray(): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        noColor(): $MutableComponent;
        darkBlue(): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        /**
         * @deprecated
         */
        component(): $Component;
        lightPurple(): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        self(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        gold(): $MutableComponent;
        aqua(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        yellow(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gray(): $MutableComponent;
        blue(): $MutableComponent;
        black(): $MutableComponent;
        green(): $MutableComponent;
        red(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        white(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setCurrentScreen(gui: $Screen): void;
        getCurrentWorldName(): string;
        setActivePostShader(id: $ResourceLocation_): void;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getKeyBindPressedTicks(id: string): number;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getTitle(): string;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        self(): $Minecraft;
        tell(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isKeyBindDown(id: string): boolean;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        isCtrlDown(): boolean;
        getName(): $Component;
        isShiftDown(): boolean;
        isAltDown(): boolean;
        setTitle(t: string): void;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get ctrlDown(): boolean;
        get name(): $Component;
        get shiftDown(): boolean;
        get altDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getWidth(): number;
        getHeight(): number;
        asContainer(): $Container;
        setChanged(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        isWildcard(): boolean;
        self(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asIngredient(): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        withCount(count: number): $SizedIngredient;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        getDisplayStacks(): $ItemStackSet;
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get displayStacks(): $ItemStackSet;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        setDefaultPickUpDelay(): void;
        setNoPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(ticks: number): void;
        setInfinitePickUpDelay(): void;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        isItem(): this is $ItemEntity;
        getLifespan(): number;
        setNoDespawn(): void;
        setLifespan(lifespan: number): void;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        getTypeData(): $Map<string, $Object>;
        getIdLocation(): $ResourceLocation;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        asHolder(): $Holder<$Item>;
        asIngredient(): $Ingredient;
        getBlock(): $Block;
        getId(): string;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        areItemsEqual(other: $ItemStack_): boolean;
        withCount(c: number): this;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        withLore(lines: $Component_[]): this;
        toItemString(): string;
        withCustomName(name: $Component_): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        getMod(): string;
        getComponentString(): string;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getHarvestSpeed(block: $LevelBlock): number;
        getHarvestSpeed(): number;
        getEnchantments(): $ItemEnchantments;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        areComponentsEqual(other: $ItemStack_): boolean;
        toStringJS(): string;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get key(): $ResourceKey<$Item>;
        get typeData(): $Map<string, $Object>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        get block(): $Block;
        get id(): string;
        get mod(): string;
        get componentString(): string;
        get enchantments(): $ItemEnchantments;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
