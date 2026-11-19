import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Bounded } from "@package/mysticmods/roots/api/blockentity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $PedestalBlockEntity } from "@package/mysticmods/roots/blockentity";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mysticmods/roots/blockentity/template" {
    export class $UseDelegatedBlockEntity extends $BaseBlockEntity {
        use(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult, arg5: $InteractionHand_, arg6: $ItemStack_): $InteractionResult;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BaseBlockEntity extends $BlockEntity implements $Bounded {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        getParticleHolder(): $Object;
        setParticleHolder(arg0: $Object): void;
        getRandom(): $RandomSource;
        getAABB(): $AABB;
        pedestals(arg0: $TagKey_<$Block>, arg1: $TagKey_<$Block>, arg2: boolean): $List<$Pair<$BlockPos, $PedestalBlockEntity>>;
        pedestals(arg0: $TagKey_<$Block>, arg1: $TagKey_<$Block>): $List<$Pair<$BlockPos, $PedestalBlockEntity>>;
        outputAdjacent(arg0: $List_<$ItemStack_>, arg1: $IItemHandler): $List<$ItemStack>;
        outputAdjacent(arg0: $ItemStack_): $ItemStack;
        outputAdjacent(arg0: $List_<$ItemStack_>): $List<$ItemStack>;
        updateViaState(): void;
        static clientTick<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        getBoundingBox(): $BoundingBox;
        getRadiusY(): number;
        isBounded(): boolean;
        getRadiusZ(): number;
        getRadiusX(): number;
        getInsertOffset(): number;
        getDeleteOffset(): number;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get random(): $RandomSource;
        get AABB(): $AABB;
        get boundingBox(): $BoundingBox;
        get radiusY(): number;
        get bounded(): boolean;
        get radiusZ(): number;
        get radiusX(): number;
        get insertOffset(): number;
        get deleteOffset(): number;
    }
}
