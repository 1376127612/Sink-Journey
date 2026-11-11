import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeType_, $Recipe, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StructureBlockArray } from "@package/hellfirepvp/observerlib/api/util";
import { $List } from "@package/java/util";
import { $ObserverProvider_, $ChangeSubscriber, $ChangeObserver, $ObserverProvider } from "@package/hellfirepvp/observerlib/api";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_, $Consumer_, $Supplier, $Function } from "@package/java/util/function";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $MenuType_, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";

declare module "@package/hellfirepvp/astralsorcery/common/util/data" {
    export class $MenuTypeRegistryObject<T extends $AbstractContainerMenu> extends $Record {
        type(): $MenuType<T>;
        getDisplayName(): $Component;
        menuType(): $DeferredHolder<$MenuType<never>, $MenuType<T>>;
        constructor(menuType: $DeferredHolder<$MenuType_<never>, $MenuType_<T>>);
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeRegistryObject}.
     */
    export type $MenuTypeRegistryObject_<T> = { menuType?: $DeferredHolder<$MenuType_<never>, $MenuType_<$AbstractContainerMenu>>,  } | [menuType?: $DeferredHolder<$MenuType_<never>, $MenuType_<$AbstractContainerMenu>>, ];
    export class $ColorWrapper {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $ColorWrapper;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $ColorWrapper;
        static of(arg0: number, arg1: number, arg2: number): $ColorWrapper;
        static of(arg0: $ChatFormatting_): $ColorWrapper;
        static of(arg0: number, arg1: number, arg2: number): $ColorWrapper;
        copyWithAlpha(arg0: number): $ColorWrapper;
        brighter(): $ColorWrapper;
        darker(): $ColorWrapper;
        static RGBtoHSB(arg0: number, arg1: number, arg2: number): number[];
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getRgba(): number[];
        getAlpha(): number;
        getColor(): number;
        static opaque(arg0: number): $ColorWrapper;
        static ofHSB(arg0: number, arg1: number, arg2: number): $ColorWrapper;
        static transparent(arg0: number): $ColorWrapper;
        copyWithBlue(arg0: number): $ColorWrapper;
        copyWithGreen(arg0: number): $ColorWrapper;
        copyWithRed(arg0: number): $ColorWrapper;
        static WHITE: $ColorWrapper;
        static CODEC: $Codec<$ColorWrapper>;
        static BLACK: $ColorWrapper;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ColorWrapper>;
        get red(): number;
        get green(): number;
        get blue(): number;
        get rgba(): number[];
        get alpha(): number;
        get color(): number;
    }
    export class $IntPoint extends $Record {
        add(arg0: $IntPoint_): $IntPoint;
        add(arg0: number, arg1: number): $IntPoint;
        x(): number;
        y(): number;
        distance(arg0: $IntPoint_): number;
        subtract(arg0: $IntPoint_): $IntPoint;
        subtract(arg0: number, arg1: number): $IntPoint;
        toFloat(): $FloatPoint;
        static CODEC: $Codec<$IntPoint>;
        constructor(x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $IntPoint}.
     */
    export type $IntPoint_ = { y?: number, x?: number,  } | [y?: number, x?: number, ];
    export class $Vector3$RotAxis {
        getVector(): $Vector3;
        static Z_AXIS: $Vector3$RotAxis;
        static X_AXIS: $Vector3$RotAxis;
        static Y_AXIS: $Vector3$RotAxis;
        constructor(arg0: $Vector3);
        get vector(): $Vector3;
    }
    export class $ResolvingRecipeTypeRegistryObject<T extends $Recipe<never>> extends $Record implements $Supplier<$RecipeType<T>> {
        get(): $RecipeType<$RecipeType<T>>;
        getKey(): $ResourceKey<$RecipeType<never>>;
        holder(): $DeferredHolder<$RecipeType<never>, $RecipeType<$RecipeType<T>>>;
        outputMatchProvider(): $Function<$RecipeType<T>, $ItemStack>;
        constructor(holder: $DeferredHolder<$RecipeType_<never>, $RecipeType_<$RecipeType_<T>>>, outputMatchProvider: $Function_<$RecipeType<T>, $ItemStack>);
        get key(): $ResourceKey<$RecipeType<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ResolvingRecipeTypeRegistryObject}.
     */
    export type $ResolvingRecipeTypeRegistryObject_<T> = { outputMatchProvider?: $Function_<$Recipe<never>, $ItemStack>, holder?: $DeferredHolder<$RecipeType_<never>, $RecipeType_<$Recipe<never>>>,  } | [outputMatchProvider?: $Function_<$Recipe<never>, $ItemStack>, holder?: $DeferredHolder<$RecipeType_<never>, $RecipeType_<$Recipe<never>>>, ];
    export class $FloatRectangle extends $Record {
        x(): number;
        contains(arg0: $IntPoint_): boolean;
        contains(arg0: $FloatPoint_): boolean;
        contains(arg0: number, arg1: number): boolean;
        static zero(): $FloatRectangle;
        y(): number;
        width(): number;
        height(): number;
        intersects(arg0: $FloatRectangle_): boolean;
        maxX(): number;
        copyShrink(arg0: number): $FloatRectangle;
        maxY(): number;
        copyInflate(arg0: number): $FloatRectangle;
        static CODEC: $Codec<$FloatRectangle>;
        constructor(arg0: $FloatPoint_, arg1: number, arg2: number);
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $FloatRectangle}.
     */
    export type $FloatRectangle_ = { height?: number, width?: number, y?: number, x?: number,  } | [height?: number, width?: number, y?: number, x?: number, ];
    export class $ObserverRegistryObject extends $Record {
        observer(): $DeferredHolder<$ObserverProvider<never>, $ObserverProvider<never>>;
        createSubscriber(arg0: $Level_, arg1: $BlockPos_): $ChangeSubscriber<never>;
        isProviderFor(arg0: $ChangeObserver<never>): boolean;
        isProviderFor(arg0: $ObserverProvider_<never>): boolean;
        isProviderFor(arg0: $ChangeSubscriber<never>): boolean;
        static extractRequiredStructure(arg0: $ObserverProvider_<never>): ($StructureBlockArray) | undefined;
        static extractRequiredStructures(arg0: $ObserverProvider_<never>): $List<$StructureBlockArray>;
        getObserverName(): $Component;
        constructor(observer: $DeferredHolder<$ObserverProvider_<never>, $ObserverProvider_<never>>);
        get observerName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ObserverRegistryObject}.
     */
    export type $ObserverRegistryObject_ = { observer?: $DeferredHolder<$ObserverProvider_<never>, $ObserverProvider_<never>>,  } | [observer?: $DeferredHolder<$ObserverProvider_<never>, $ObserverProvider_<never>>, ];
    export class $FloatPoint extends $Record {
        add(arg0: $FloatPoint_): $FloatPoint;
        add(arg0: number, arg1: number): $FloatPoint;
        x(): number;
        y(): number;
        distance(arg0: number, arg1: number): number;
        distance(arg0: $FloatPoint_): number;
        multiply(arg0: number): $FloatPoint;
        subtract(arg0: $FloatPoint_): $FloatPoint;
        subtract(arg0: number, arg1: number): $FloatPoint;
        toVector(): $Vector3;
        static CODEC: $Codec<$FloatPoint>;
        constructor(x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $FloatPoint}.
     */
    export type $FloatPoint_ = { y?: number, x?: number,  } | [y?: number, x?: number, ];
    export class $IntRectangle extends $Record {
        offset(): $IntPoint;
        x(): number;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $IntPoint_): boolean;
        contains(arg0: $FloatPoint_): boolean;
        static zero(): $IntRectangle;
        y(): number;
        grow(arg0: number, arg1: number): $IntRectangle;
        width(): number;
        height(): number;
        intersects(arg0: $IntRectangle_): boolean;
        toFloat(): $FloatRectangle;
        center(): $IntPoint;
        translate(arg0: number, arg1: number): $IntRectangle;
        maxX(): number;
        maxY(): number;
        static CODEC: $Codec<$IntRectangle>;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $IntRectangle}.
     */
    export type $IntRectangle_ = { height?: number, width?: number, y?: number, x?: number,  } | [height?: number, width?: number, y?: number, x?: number, ];
    export class $ColumnPos extends $Record {
        static of(arg0: $BlockPos_): $ColumnPos;
        x(): number;
        z(): number;
        distToLowCornerSqr(arg0: number, arg1: number): number;
        distSqr(arg0: $Vec3i): number;
        distSqr(arg0: $Vec3_): number;
        distSqr(arg0: $ColumnPos_): number;
        toBlockPos(arg0: number): $BlockPos;
        toChunkPos(): $ChunkPos;
        static CODEC: $Codec<$ColumnPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ColumnPos>;
        constructor(x: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { z?: number, x?: number,  } | [z?: number, x?: number, ];
    export class $BiDiPair<K, V> {
        getRight(): V;
        getLeft(): K;
        constructor(arg0: K, arg1: V);
        get right(): V;
        get left(): K;
    }
    export class $Vector3 {
        length(): number;
        abs(): $Vector3;
        toBytes(arg0: $ByteBuf): void;
        add(arg0: number, arg1: number, arg2: number): $Vector3;
        add(arg0: $Vector3): $Vector3;
        add(arg0: $Vec3i): $Vector3;
        add(arg0: number, arg1: number, arg2: number): $Vector3;
        add(arg0: $Vec3_): $Vector3;
        static x(arg0: number): $Vector3;
        dot(arg0: $Vector3): number;
        copy(arg0: $Vector3): $Vector3;
        copy(): $Vector3;
        static z(arg0: number): $Vector3;
        zero(): $Vector3;
        static y(arg0: number): $Vector3;
        distance(arg0: $Vec3i): number;
        distance(arg0: $Vector3): number;
        distance(arg0: $Entity): number;
        distance(arg0: $Vec3_): number;
        multiply(arg0: $Vector3): $Vector3;
        multiply(arg0: number): $Vector3;
        multiply(arg0: number): $Vector3;
        multiply(arg0: number): $Vector3;
        static random(arg0: $RandomSource): $Vector3;
        rotate(arg0: number, arg1: $Vector3$RotAxis): $Vector3;
        rotate(arg0: $Quaternionf): $Vector3;
        rotate(arg0: number, arg1: $Vector3): $Vector3;
        normalize(): $Vector3;
        negate(): $Vector3;
        divide(arg0: $Vector3): $Vector3;
        divide(arg0: number): $Vector3;
        subtract(arg0: $Vec3i): $Vector3;
        subtract(arg0: $Vec3_): $Vector3;
        subtract(arg0: $Entity): $Vector3;
        subtract(arg0: number, arg1: number, arg2: number): $Vector3;
        subtract(arg0: $Vector3): $Vector3;
        static getMax(arg0: $AABB_): $Vector3;
        static getMin(arg0: $AABB_): $Vector3;
        getY(): number;
        fNormalize(): $Vector3;
        angle(arg0: $Vector3): number;
        static fromBytes(arg0: $ByteBuf): $Vector3;
        getX(): number;
        getZ(): number;
        static atCenter(arg0: $Entity): $Vector3;
        static atCenter(arg0: $Vec3i): $Vector3;
        static atCenter(arg0: $BlockEntity): $Vector3;
        addY(arg0: number): $Vector3;
        setZ(arg0: number): $Vector3;
        setZ(arg0: number): $Vector3;
        setZ(arg0: number): $Vector3;
        setY(arg0: number): $Vector3;
        setY(arg0: number): $Vector3;
        setY(arg0: number): $Vector3;
        setX(arg0: number): $Vector3;
        setX(arg0: number): $Vector3;
        setX(arg0: number): $Vector3;
        getBlockY(): number;
        getBlockZ(): number;
        getBlockX(): number;
        static fastInvSqrt(arg0: number): number;
        lengthSquared(): number;
        distanceSquared(arg0: $Entity): number;
        distanceSquared(arg0: $Vec3i): number;
        distanceSquared(arg0: $Vector3): number;
        distanceSquared(arg0: $Vec3_): number;
        toBlockPos(): $BlockPos;
        copyInterpolateWith(arg0: $Vector3, arg1: number): $Vector3;
        static directionFromYawPitch(arg0: number, arg1: number): $Vector3;
        addX(arg0: number): $Vector3;
        drawPos(arg0: $Matrix4f, arg1: $VertexConsumer): $VertexConsumer;
        drawPos(arg0: $VertexConsumer): $VertexConsumer;
        addZ(arg0: number): $Vector3;
        toVector3d(): $Vec3;
        toChunkPos(): $ChunkPos;
        isInSphere(arg0: $Vector3, arg1: number): boolean;
        isInAABB(arg0: $Vector3, arg1: $Vector3): boolean;
        static atBottomCenter(arg0: $BlockEntity): $Vector3;
        static atBottomCenter(arg0: $Vec3i): $Vector3;
        xCrossProduct(): $Vector3;
        zCrossProduct(): $Vector3;
        static atEntityEyes(arg0: $Entity): $Vector3;
        static randomInAABB(arg0: $AABB_, arg1: $RandomSource): $Vector3;
        getMidpoint(arg0: $Vector3): $Vector3;
        crossProduct(arg0: $Vector3): $Vector3;
        perpendicular(): $Vector3;
        copyToPolar(): $Vector3;
        yCrossProduct(): $Vector3;
        vectorFromHereTo(arg0: $Vector3): $Vector3;
        vectorFromHereTo(arg0: number, arg1: number, arg2: number): $Vector3;
        static positiveYRandom(arg0: $RandomSource): $Vector3;
        static positiveRandom(arg0: $RandomSource): $Vector3;
        stepAlongVector(arg0: number, arg1: $Consumer_<$Vector3>): void;
        static CODEC: $Codec<$Vector3>;
        static MAP_CODEC: $MapCodec<$Vector3>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Vector3>;
        constructor(arg0: $Vec3i);
        constructor(arg0: $Vec3_);
        constructor(arg0: $Vector3f);
        constructor(arg0: $BlockEntity);
        constructor(arg0: $Entity);
        constructor();
        constructor(arg0: $Vector3);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
    }
}
