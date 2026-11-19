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
        tile(): $TileMultipart;
        hasTile(): boolean;
        bind(arg0: $TileMultipart): void;
        click(arg0: $Player, arg1: $PartRayTraceResult, arg2: $ItemStack_): void;
        onMoved(): void;
        capCache(): $CapabilityCache;
        /**
         * @deprecated
         */
        getCloneStack(arg0: $PartRayTraceResult): $ItemStack;
        getCloneStack(arg0: $PartRayTraceResult, arg1: $Player): $ItemStack;
        addDestroyEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        useWithoutItem(arg0: $Player, arg1: $PartRayTraceResult): $InteractionResult;
        getVisualShape(arg0: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        addRunningEffects(arg0: $PartRayTraceResult, arg1: $Entity): void;
        getPlacementSound(arg0: $UseOnContext): $SoundType;
        scheduledTick(): void;
        onConverted(): void;
        getRenderBounds(): $Cuboid6;
        addHitEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        harvest(arg0: $Player, arg1: $PartRayTraceResult): void;
        preRemove(): void;
        hasLevel(): boolean;
        scheduleTick(arg0: number): void;
        getLightEmission(): number;
        onPartChanged(arg0: $MultiPart): void;
        occlusionTest(arg0: $MultiPart): boolean;
        onEntityStanding(arg0: $Entity): void;
        onWorldSeparate(): void;
        getInteractionShape(): $VoxelShape;
        onChunkUnload(): void;
        onEntityCollision(arg0: $Entity): void;
        onAdded(): void;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        pos(): $BlockPos;
        level(): $Level;
        getShape(arg0: $CollisionContext): $VoxelShape;
        onWorldJoin(): void;
        getExplosionResistance(arg0: $Explosion): number;
        getBlockSupportShape(): $VoxelShape;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $PartRayTraceResult, arg3: $InteractionHand_): $ItemInteractionResult;
        invalidateConvertedTile(): void;
        writeDesc(arg0: $MCDataOutput): void;
        getDrops(): $Iterable<$ItemStack>;
        sendUpdate(arg0: $Consumer_<$MCDataOutput>): void;
        addLandingEffects(arg0: $PartRayTraceResult, arg1: $Vector3, arg2: number): void;
        onChunkLoad(arg0: $LevelChunk): void;
        getModelData(): $ModelData;
        readUpdate(arg0: $MCDataInput): void;
        getStrength(arg0: $Player, arg1: $PartRayTraceResult): number;
        readDesc(arg0: $MCDataInput): void;
        onNeighborBlockChanged(arg0: $BlockPos_): void;
        getRenderOcclusionShape(): $VoxelShape;
        onRemoved(): void;
        constructor();
        get renderBounds(): $Cuboid6;
        get lightEmission(): number;
        get interactionShape(): $VoxelShape;
        get blockSupportShape(): $VoxelShape;
        get drops(): $Iterable<$ItemStack>;
        get modelData(): $ModelData;
        get renderOcclusionShape(): $VoxelShape;
    }
    export class $MultiPart {
    }
    export interface $MultiPart {
        click(arg0: $Player, arg1: $PartRayTraceResult, arg2: $ItemStack_): void;
        onMoved(): void;
        tile(): $TileMultipart;
        capCache(): $CapabilityCache;
        /**
         * @deprecated
         */
        getCloneStack(arg0: $PartRayTraceResult): $ItemStack;
        getCloneStack(arg0: $PartRayTraceResult, arg1: $Player): $ItemStack;
        addDestroyEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        useWithoutItem(arg0: $Player, arg1: $PartRayTraceResult): $InteractionResult;
        getVisualShape(arg0: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        addRunningEffects(arg0: $PartRayTraceResult, arg1: $Entity): void;
        getPlacementSound(arg0: $UseOnContext): $SoundType;
        scheduledTick(): void;
        onConverted(): void;
        getRenderBounds(): $Cuboid6;
        addHitEffects(arg0: $PartRayTraceResult, arg1: $ParticleEngine): void;
        harvest(arg0: $Player, arg1: $PartRayTraceResult): void;
        hasTile(): boolean;
        preRemove(): void;
        hasLevel(): boolean;
        scheduleTick(arg0: number): void;
        getLightEmission(): number;
        onPartChanged(arg0: $MultiPart): void;
        occlusionTest(arg0: $MultiPart): boolean;
        onEntityStanding(arg0: $Entity): void;
        onWorldSeparate(): void;
        getInteractionShape(): $VoxelShape;
        onChunkUnload(): void;
        onEntityCollision(arg0: $Entity): void;
        onAdded(): void;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getType(): $MultipartType<never>;
        pos(): $BlockPos;
        level(): $Level;
        getShape(arg0: $CollisionContext): $VoxelShape;
        onWorldJoin(): void;
        getExplosionResistance(arg0: $Explosion): number;
        getBlockSupportShape(): $VoxelShape;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $PartRayTraceResult, arg3: $InteractionHand_): $ItemInteractionResult;
        invalidateConvertedTile(): void;
        writeDesc(arg0: $MCDataOutput): void;
        getDrops(): $Iterable<$ItemStack>;
        sendUpdate(arg0: $Consumer_<$MCDataOutput>): void;
        addLandingEffects(arg0: $PartRayTraceResult, arg1: $Vector3, arg2: number): void;
        onChunkLoad(arg0: $LevelChunk): void;
        getModelData(): $ModelData;
        readUpdate(arg0: $MCDataInput): void;
        getStrength(arg0: $Player, arg1: $PartRayTraceResult): number;
        readDesc(arg0: $MCDataInput): void;
        onNeighborBlockChanged(arg0: $BlockPos_): void;
        getRenderOcclusionShape(): $VoxelShape;
        onRemoved(): void;
        get renderBounds(): $Cuboid6;
        get lightEmission(): number;
        get interactionShape(): $VoxelShape;
        get type(): $MultipartType<never>;
        get blockSupportShape(): $VoxelShape;
        get drops(): $Iterable<$ItemStack>;
        get modelData(): $ModelData;
        get renderOcclusionShape(): $VoxelShape;
    }
}
