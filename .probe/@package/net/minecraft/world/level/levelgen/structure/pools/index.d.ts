import { $StructureTemplatePoolAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $StructurePoolAccess } from "@package/dev/worldgen/lithostitched/duck";
import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $StructureTemplatePoolAccessor, $SinglePoolElementAccessor, $ListPoolElementAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$1 } from "@package/com/denfop/mixin/access";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $StructureManager } from "@package/net/minecraft/world/level";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $StructureTemplateManager, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        getSize(structureTemplateManager: $StructureTemplateManager, rotation: $Rotation_): $Vec3i;
        static list(elements: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(id: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(feature: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        static legacy(id: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        place(structureTemplateManager: $StructureTemplateManager, level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, offset: $BlockPos_, pos: $BlockPos_, rotation: $Rotation_, box: $BoundingBox, random: $RandomSource, liquidSettings: $LiquidSettings_, keepJigsaws: boolean): boolean;
        getBoundingBox(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_): $BoundingBox;
        handleDataMarker(level: $LevelAccessor, blockInfo: $StructureTemplate$StructureBlockInfo_, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource, box: $BoundingBox): void;
        getGroundLevelDelta(): number;
        getProjection(): $StructureTemplatePool$Projection;
        setProjection(projection: $StructureTemplatePool$Projection_): $StructurePoolElement;
        getShuffledJigsawBlocks(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        static CODEC: $Codec<$StructurePoolElement>;
        get type(): $StructurePoolElementType<never>;
        get groundLevelDelta(): number;
    }
    export class $JigsawPlacement$Placer {
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $JigsawPlacement$PieceState}.
     */
    export type $JigsawPlacement$PieceState_ = { depth?: number, free?: $MutableObject<$VoxelShape>, piece?: $PoolElementStructurePiece,  } | [depth?: number, free?: $MutableObject<$VoxelShape>, piece?: $PoolElementStructurePiece, ];
    export class $JigsawPlacement {
        static generateJigsaw(level: $ServerLevel, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: $ResourceLocation_, maxDepth: number, pos: $BlockPos_, keepJigsaws: boolean): boolean;
        static addPieces(context: $Structure$GenerationContext_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, pos: $BlockPos_, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, aliasLookup: $PoolAliasLookup_, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor {
        getDataMarkers(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, relativePosition: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        getProcessors(): $Holder<$StructureProcessorList>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        setProcessors(arg0: $Holder_<$StructureProcessorList>): void;
        static CODEC: $MapCodec<$SinglePoolElement>;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor {
        lithostitched$getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        constructor(elements: $List_<$StructurePoolElement>, projection: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$FeaturePoolElement>;
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(name: string, codec: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        bottom(): number;
        top(): number;
        hasEqualTopAndBottom(): boolean;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(padding: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { bottom?: number, top?: number,  } | [bottom?: number, top?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
    }
    export interface $StructurePoolElementType<P> extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction {
        getSourceX(): number;
        getSourceZ(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        getSourceGroundY(): number;
        static deserialize<T>(dynamic: $Dynamic<T>): $JigsawJunction;
        serialize<T>(ops: $DynamicOps<T>): $Dynamic<T>;
        getDeltaY(): number;
        constructor(sourceX: number, sourceGroundY: number, sourceZ: number, deltaY: number, destProjection: $StructureTemplatePool$Projection_);
        get sourceX(): number;
        get sourceZ(): number;
        get destProjection(): $StructureTemplatePool$Projection;
        get sourceGroundY(): number;
        get deltaY(): number;
    }
    export class $StructureTemplatePool implements $StructureTemplatePoolAccessor$1, $StructureTemplatePoolAccessor, $StructurePoolAccess, $StructureTemplatePoolAccess {
        size(): number;
        getMaxSize(structureTemplateManager: $StructureTemplateManager): number;
        getFallback(): $Holder<$StructureTemplatePool>;
        getRandomTemplate(random: $RandomSource): $StructurePoolElement;
        getShuffledTemplates(random: $RandomSource): $List<$StructurePoolElement>;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setVanillaTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        rawTemplates: $List<$Pair<$StructurePoolElement, number>>;
        templates: $ObjectArrayList<$StructurePoolElement>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplates: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplateFactories: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, projection: $StructureTemplatePool$Projection_);
        get fallback(): $Holder<$StructureTemplatePool>;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(name: string): $StructureTemplatePool$Projection;
        static byName(name: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get processors(): $ImmutableList<$StructureProcessor>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
