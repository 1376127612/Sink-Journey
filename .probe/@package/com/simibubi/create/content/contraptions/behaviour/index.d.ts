import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $UnaryOperator } from "@package/java/util/function";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $MountedFluidStorage } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockPos } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";

declare module "@package/com/simibubi/create/content/contraptions/behaviour" {
    export class $MovementContext {
        static readNBT(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $CompoundTag_, arg3: $Contraption): $MovementContext;
        getAnimationSpeed(): number;
        getItemStorage(): $MountedItemStorage;
        getFilterFromBE(): $FilterItemStack;
        writeToNBT(arg0: $CompoundTag_): $CompoundTag;
        getFluidStorage(): $MountedFluidStorage;
        localPos: $BlockPos;
        motion: $Vec3;
        data: $CompoundTag;
        contraption: $Contraption;
        rotation: $UnaryOperator<$Vec3>;
        stall: boolean;
        firstMovement: boolean;
        temporaryData: $Object;
        world: $Level;
        blockEntityData: $CompoundTag;
        disabled: boolean;
        position: $Vec3;
        state: $BlockState;
        relativeMotion: $Vec3;
        constructor(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $Contraption);
        get animationSpeed(): number;
        get itemStorage(): $MountedItemStorage;
        get filterFromBE(): $FilterItemStack;
        get fluidStorage(): $MountedFluidStorage;
    }
}
