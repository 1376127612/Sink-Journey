import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectList, $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $EnhancedTerrainAdaptation } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/adaptations";
import { $Rotation, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/beardifier" {
    export class $EnhancedJigsawJunction extends $Record {
        jigsawJunction(): $JigsawJunction;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        constructor(jigsawJunction: $JigsawJunction, pieceTerrainAdaptation: $EnhancedTerrainAdaptation);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedJigsawJunction}.
     */
    export type $EnhancedJigsawJunction_ = { jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation,  } | [jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, ];
    export class $EnhancedBeardifierRigid extends $Record {
        rotation(): $Rotation;
        pieceBoundingBox(): $BoundingBox;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        pieceGroundLevelDelta(): number;
        constructor(pieceBoundingBox: $BoundingBox, pieceTerrainAdaptation: $EnhancedTerrainAdaptation, pieceGroundLevelDelta: number, rotation: $Rotation_);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedBeardifierRigid}.
     */
    export type $EnhancedBeardifierRigid_ = { pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number, rotation?: $Rotation_,  } | [pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number, rotation?: $Rotation_, ];
    export class $EnhancedBeardifierData {
    }
    export interface $EnhancedBeardifierData {
        yungsapi_getEnhancedPieceIterator(): $ObjectListIterator<$EnhancedBeardifierRigid>;
        yungsapi_setEnhancedJunctions(arg0: $ObjectList<$EnhancedJigsawJunction_>): void;
        yungsapi_getEnhancedJunctionIterator(): $ObjectListIterator<$EnhancedJigsawJunction>;
        yungsapi_setNoiseChunk(arg0: $NoiseChunk): void;
        yungsapi_setEnhancedPieces(arg0: $ObjectList<$EnhancedBeardifierRigid_>): void;
        yungsapi_getNoiseChunk(): $NoiseChunk;
    }
}
