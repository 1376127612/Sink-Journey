import { $BlockPos, $BlockPos_, $Vec3i, $HolderSet_, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PositionalRandomFactory, $SurfaceSystem, $SurfaceRules$Condition, $RandomState, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $MansionRoomDuck {
    }
    export interface $MansionRoomDuck extends $RegistryHolder {
        lithostitched$getRandom(arg0: string, arg1: $RandomSource): string;
        lithostitched$floorNumber(): number;
    }
    export class $ContextBiomeAccessor {
    }
    export interface $ContextBiomeAccessor {
        lithostitched$biomeMatches(arg0: $HolderSet_<$Biome>): $SurfaceRules$Condition;
    }
    /**
     * Values that may be interpreted as {@link $ContextBiomeAccessor}.
     */
    export type $ContextBiomeAccessor_ = ((arg0: $HolderSet<$Biome>) => $SurfaceRules$Condition);
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getBandOffsetNoise(): $NormalNoise;
        getNoiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
    }
    export class $RegistryHolder {
    }
    export interface $RegistryHolder {
        getRegistries(): $RegistryAccess;
        setRegistries(arg0: $RegistryAccess): void;
    }
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        compileRawTemplates(): void;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    export class $ReferencePosDuck {
    }
    export interface $ReferencePosDuck {
        lithostitched$getReferencePos(): $BlockPos;
        lithostitched$setReferencePos(arg0: $BlockPos_): void;
    }
    export class $SeedAccessor {
    }
    export interface $SeedAccessor {
        getSeed(): number;
        get seed(): number;
    }
    /**
     * Values that may be interpreted as {@link $SeedAccessor}.
     */
    export type $SeedAccessor_ = (() => number);
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        lithostitched$getRandomState(): $RandomState;
        lithostitched$getNoiseChunk(): $NoiseChunk;
        getPos(): $Vec3i;
        lithostitched$getSystem(): $SurfaceSystem;
        lithostitched$getStoneDepthBelow(): number;
        lithostitched$getY(): number;
        lithostitched$getX(): number;
        lithostitched$getZ(): number;
        lithostitched$getChunk(): $ChunkAccess;
        get pos(): $Vec3i;
    }
}
