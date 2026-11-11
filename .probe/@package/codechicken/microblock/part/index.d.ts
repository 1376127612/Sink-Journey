import { $Registry } from "@package/net/minecraft/core";
import { $MaskedCuboid } from "@package/codechicken/microblock/util";
import { $MCDataInput } from "@package/codechicken/lib/data";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MultipartType } from "@package/codechicken/multipart/api";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $MicroMaterial, $MicroMaterial_ } from "@package/codechicken/microblock/api";
import { $Cuboid6 } from "@package/codechicken/lib/vec";
import { $Iterable } from "@package/java/lang";
import { $BaseMultipart } from "@package/codechicken/multipart/api/part";

declare module "@package/codechicken/microblock/part" {
    export class $MicroblockPart extends $BaseMultipart {
        getSize(): number;
        getBounds(): $Cuboid6;
        getMaterial(): $MicroMaterial;
        setShape(arg0: number, arg1: number): void;
        sendShapeUpdate(): void;
        isTransparent(): boolean;
        getItemFactoryId(): number;
        getRenderCuboids(arg0: boolean): $Iterable<$MaskedCuboid>;
        getMicroFactory(): $MicroblockPartFactory;
        getShapeSlot(): number;
        material: $MicroMaterial;
        shape: number;
        constructor(arg0: $MicroMaterial_);
        get size(): number;
        get bounds(): $Cuboid6;
        get transparent(): boolean;
        get itemFactoryId(): number;
        get microFactory(): $MicroblockPartFactory;
        get shapeSlot(): number;
    }
    export class $MicroblockPartFactory extends $MultipartType<$MicroblockPart> {
        create(arg0: boolean, arg1: $MicroMaterial_): $MicroblockPart;
        createPartClient(arg0: $MCDataInput): $MicroblockPart;
        createPartServer(arg0: $CompoundTag_): $MicroblockPart;
        getResistanceFactor(): number;
        static MULTIPART_TYPES: $ResourceKey<$Registry<$MultipartType<never>>>;
        constructor();
        get resistanceFactor(): number;
    }
}
