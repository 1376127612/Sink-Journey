import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BaseEntityBlock, $Block$BlockStatePairKey, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ThreadLocal } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        codec(): $MapCodec<$PistonBaseBlock>;
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level_, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        handler$dfg000$ftbchunks$onMoveBlocks(level: $Level_, blockPos: $BlockPos_, direction: $Direction_, extending: boolean, cir: $CallbackInfoReturnable<any>, pistonStructureResolver: $PistonStructureResolver): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static TRIGGER_CONTRACT: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static TRIGGER_EXTEND: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static PLATFORM_THICKNESS: number;
        static TRIGGER_DROP: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$MovingPistonBlock>;
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static SHORT: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLATFORM: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver {
        resolve(): boolean;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get toPush(): $List<$BlockPos>;
        get toDestroy(): $List<$BlockPos>;
        get pushDirection(): $Direction;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getDirection(): $Direction;
        getYOff(progress: number): number;
        getZOff(progress: number): number;
        getXOff(progress: number): number;
        getMovedState(): $BlockState;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getProgress(progress: number): number;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getMovementDirection(): $Direction;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getLastTicked(): number;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        static TICK_MOVEMENT: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get direction(): $Direction;
        get movedState(): $BlockState;
        get movementDirection(): $Direction;
        get extending(): boolean;
        get lastTicked(): number;
        get sourcePiston(): boolean;
    }
}
