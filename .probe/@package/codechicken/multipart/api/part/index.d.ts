import { $Level, $Explosion } from "@package/net/minecraft/world/level";
import { $PartRayTraceResult } from "@package/codechicken/multipart/util";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Cuboid6, $Vector3 } from "@package/codechicken/lib/vec";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $CapabilityCache } from "@package/codechicken/lib/capability";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $MultipartType } from "@package/codechicken/multipart/api";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $Iterable } from "@package/java/lang";
import { $TileMultipart } from "@package/codechicken/multipart/block";

declare module "@package/codechicken/multipart/api/part" {
    export class $BaseMultipart implements $MultiPart {
        bind(arg0: $TileMultipart): void;
        tile(): $TileMultipart;
        hasTile(): boolean;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        pos(): $BlockPos;
        level(): $Level;
        getShape(arg0: $CollisionContext): $VoxelShape;
        getStrength(arg0: $Player, arg1: $PartRayTraceResult): number;
        onWorldJoin(): void;
        readUpdate(arg0: $MCDataInput): void;
        getExplosionResistance(arg0: $Explosion): number;
        getBlockSupportShape(): $VoxelShape;
        click(arg0: $Player, arg1: $PartRayTraceResult, arg2: $ItemStack_): void;
        onRemoved(): void;
        readDesc(arg0: $MCDataInput): void;
        hasLevel(): boolean;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $PartRayTraceResult, arg3: $InteractionHand_): $ItemInteractionResult;
        useWithoutItem(arg0: $Player, arg1: $PartRayTraceResult): $InteractionResult;
        getVisualShape(arg0: $CollisionContext): $VoxelShape;
        addHitEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        addDestroyEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        addLandingEffects(arg0: $PartRayTraceResult, arg1: $Vector3, arg2: number): void;
        getLightEmission(): number;
        scheduleTick(arg0: number): void;
        getModelData(): $ModelData;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        addRunningEffects(arg0: $PartRayTraceResult, arg1: $Entity): void;
        getDrops(): $Iterable<$ItemStack>;
        sendUpdate(arg0: $Consumer_<$MCDataOutput>): void;
        getInteractionShape(): $VoxelShape;
        onChunkLoad(arg0: $LevelChunk): void;
        onChunkUnload(): void;
        onEntityCollision(arg0: $Entity): void;
        onNeighborBlockChanged(arg0: $BlockPos_): void;
        getRenderOcclusionShape(): $VoxelShape;
        invalidateConvertedTile(): void;
        getRenderBounds(): $Cuboid6;
        onConverted(): void;
        getPlacementSound(arg0: $UseOnContext): $SoundType;
        scheduledTick(): void;
        onAdded(): void;
        harvest(arg0: $Player, arg1: $PartRayTraceResult): void;
        onMoved(): void;
        preRemove(): void;
        writeDesc(arg0: $MCDataOutput): void;
        occlusionTest(arg0: $MultiPart): boolean;
        onEntityStanding(arg0: $Entity): void;
        onPartChanged(arg0: $MultiPart): void;
        onWorldSeparate(): void;
        capCache(): $CapabilityCache;
        getCloneStack(arg0: $PartRayTraceResult, arg1: $Player): $ItemStack;
        /**
         * @deprecated
         */
        getCloneStack(arg0: $PartRayTraceResult): $ItemStack;
        constructor();
        get blockSupportShape(): $VoxelShape;
        get lightEmission(): number;
        get modelData(): $ModelData;
        get drops(): $Iterable<$ItemStack>;
        get interactionShape(): $VoxelShape;
        get renderOcclusionShape(): $VoxelShape;
        get renderBounds(): $Cuboid6;
    }
    export class $MultiPart {
    }
    export interface $MultiPart {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getType(): $MultipartType<never>;
        pos(): $BlockPos;
        level(): $Level;
        getShape(arg0: $CollisionContext): $VoxelShape;
        getStrength(arg0: $Player, arg1: $PartRayTraceResult): number;
        onWorldJoin(): void;
        readUpdate(arg0: $MCDataInput): void;
        getExplosionResistance(arg0: $Explosion): number;
        getBlockSupportShape(): $VoxelShape;
        click(arg0: $Player, arg1: $PartRayTraceResult, arg2: $ItemStack_): void;
        onRemoved(): void;
        readDesc(arg0: $MCDataInput): void;
        hasLevel(): boolean;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $PartRayTraceResult, arg3: $InteractionHand_): $ItemInteractionResult;
        useWithoutItem(arg0: $Player, arg1: $PartRayTraceResult): $InteractionResult;
        getVisualShape(arg0: $CollisionContext): $VoxelShape;
        addHitEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        addDestroyEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        addLandingEffects(arg0: $PartRayTraceResult, arg1: $Vector3, arg2: number): void;
        tile(): $TileMultipart;
        getLightEmission(): number;
        scheduleTick(arg0: number): void;
        getModelData(): $ModelData;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        addRunningEffects(arg0: $PartRayTraceResult, arg1: $Entity): void;
        getDrops(): $Iterable<$ItemStack>;
        sendUpdate(arg0: $Consumer_<$MCDataOutput>): void;
        getInteractionShape(): $VoxelShape;
        onChunkLoad(arg0: $LevelChunk): void;
        onChunkUnload(): void;
        onEntityCollision(arg0: $Entity): void;
        onNeighborBlockChanged(arg0: $BlockPos_): void;
        getRenderOcclusionShape(): $VoxelShape;
        invalidateConvertedTile(): void;
        getRenderBounds(): $Cuboid6;
        onConverted(): void;
        getPlacementSound(arg0: $UseOnContext): $SoundType;
        scheduledTick(): void;
        onAdded(): void;
        hasTile(): boolean;
        harvest(arg0: $Player, arg1: $PartRayTraceResult): void;
        onMoved(): void;
        preRemove(): void;
        writeDesc(arg0: $MCDataOutput): void;
        occlusionTest(arg0: $MultiPart): boolean;
        onEntityStanding(arg0: $Entity): void;
        onPartChanged(arg0: $MultiPart): void;
        onWorldSeparate(): void;
        capCache(): $CapabilityCache;
        getCloneStack(arg0: $PartRayTraceResult, arg1: $Player): $ItemStack;
        /**
         * @deprecated
         */
        getCloneStack(arg0: $PartRayTraceResult): $ItemStack;
        get type(): $MultipartType<never>;
        get blockSupportShape(): $VoxelShape;
        get lightEmission(): number;
        get modelData(): $ModelData;
        get drops(): $Iterable<$ItemStack>;
        get interactionShape(): $VoxelShape;
        get renderOcclusionShape(): $VoxelShape;
        get renderBounds(): $Cuboid6;
    }
}
