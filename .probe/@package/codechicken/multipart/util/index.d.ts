import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Vector3 } from "@package/codechicken/lib/vec";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Collection_ } from "@package/java/util";
import { $SubHitBlockHitResult } from "@package/codechicken/lib/raytracer";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $MixinFactory$TraitKey, $MixinCompiler } from "@package/codechicken/mixin/api";
import { $MultiPart } from "@package/codechicken/multipart/api/part";
import { $Comparable, $Object, $Class } from "@package/java/lang";
import { $SidedFactory } from "@package/codechicken/mixin";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TileMultipart } from "@package/codechicken/multipart/block";

declare module "@package/codechicken/multipart/util" {
    export class $PartRayTraceResult extends $SubHitBlockHitResult implements $Comparable<$SubHitBlockHitResult> {
        hit: $BlockHitResult;
        hitShape: $VoxelShape;
        distance: number;
        part: $MultiPart;
        subHit: number;
        dist: number;
        hitInfo: $Object;
        /**
         * @deprecated
         */
        constructor(arg0: $MultiPart, arg1: $Vector3, arg2: $Direction_, arg3: $BlockPos_, arg4: boolean, arg5: $Object, arg6: number);
        /**
         * @deprecated
         */
        constructor(arg0: $MultiPart, arg1: $SubHitBlockHitResult);
        constructor(arg0: $VoxelShape, arg1: $MultiPart, arg2: $BlockHitResult, arg3: $Vec3_);
    }
    export class $MultipartGenerator$Factory {
    }
    export interface $MultipartGenerator$Factory {
        newInstance(arg0: $BlockPos_, arg1: $BlockState_): $TileMultipart;
    }
    /**
     * Values that may be interpreted as {@link $MultipartGenerator$Factory}.
     */
    export type $MultipartGenerator$Factory_ = ((arg0: $BlockPos, arg1: $BlockState) => $TileMultipart);
    export class $MultipartGenerator extends $SidedFactory<$TileMultipart, $MultipartGenerator$Factory, $MultiPart> {
        load(arg0: $IEventBus): void;
        generateCompositeTile(arg0: $BlockEntity, arg1: $BlockPos_, arg2: $Collection_<$MultiPart>, arg3: boolean): $TileMultipart;
        registerPassthroughTrait(arg0: $Class<never>): $MixinFactory$TraitKey;
        getTraits(arg0: $Collection_<$MultiPart>, arg1: boolean): $ImmutableSet<$MixinFactory$TraitKey>;
        getTraits(arg0: $MultiPart, arg1: boolean): $ImmutableSet<$MixinFactory$TraitKey>;
        registerPassThroughInterface(arg0: $Class<never>): void;
        registerPassThroughInterface(arg0: $Class<never>, arg1: boolean, arg2: boolean): void;
        static MIXIN_COMPILER: $MixinCompiler;
        static INSTANCE: $MultipartGenerator;
    }
    export class $MultipartPlaceContext extends $BlockPlaceContext {
        applyOffset(): $MultipartPlaceContext;
        getHitDepth(): number;
        canPlacePart(arg0: $MultiPart): boolean;
        isOffset(): boolean;
        hitResult: $BlockHitResult;
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        get hitDepth(): number;
        get offset(): boolean;
    }
}
