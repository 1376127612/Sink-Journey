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
        getMaterial(): $MicroMaterial;
        getMicroFactory(): $MicroblockPartFactory;
        getRenderCuboids(arg0: boolean): $Iterable<$MaskedCuboid>;
        getShapeSlot(): number;
        getItemFactoryId(): number;
        sendShapeUpdate(): void;
        isTransparent(): boolean;
        getSize(): number;
        getBounds(): $Cuboid6;
        setShape(arg0: number, arg1: number): void;
        material: $MicroMaterial;
        shape: number;
        constructor(arg0: $MicroMaterial_);
        get microFactory(): $MicroblockPartFactory;
        get shapeSlot(): number;
        get itemFactoryId(): number;
        get transparent(): boolean;
        get size(): number;
        get bounds(): $Cuboid6;
    }
    export class $MicroblockPartFactory extends $MultipartType<$MicroblockPart> {
        createPartClient(arg0: $MCDataInput): $MicroblockPart;
        createPartServer(arg0: $CompoundTag_): $MicroblockPart;
        create(arg0: boolean, arg1: $MicroMaterial_): $MicroblockPart;
        getResistanceFactor(): number;
        static MULTIPART_TYPES: $ResourceKey<$Registry<$MultipartType<never>>>;
        constructor();
        get resistanceFactor(): number;
    }
}
