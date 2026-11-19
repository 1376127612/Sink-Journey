import { $CollisionGetter, $PathNavigationRegion, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set, $Set_, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $BinaryHeap {
        /**
         * Changes the provided point's total cost if costIn is smaller
         */
        changeCost(point: $Node, cost: number): void;
        remove(node: $Node): void;
        size(): number;
        /**
         * Adds a point to the path
         */
        insert(point: $Node): $Node;
        /**
         * Clears the path
         */
        clear(): void;
        /**
         * Returns `true` if this path contains no points
         */
        isEmpty(): boolean;
        /**
         * Returns and removes the first point in the path
         */
        peek(): $Node;
        /**
         * Returns and removes the first point in the path
         */
        pop(): $Node;
        getHeap(): $Node[];
        constructor();
        get empty(): boolean;
        get heap(): $Node[];
    }
    export class $Path$DebugData extends $Record {
        openSet(): $Node[];
        closedSet(): $Node[];
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { openSet?: $Node[], closedSet?: $Node[], targetNodes?: $Set_<$Target>,  } | [openSet?: $Node[], closedSet?: $Node[], targetNodes?: $Set_<$Target>, ];
    export class $AmphibiousNodeEvaluator extends $WalkNodeEvaluator {
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor(prefersShallowSwimming: boolean);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        static createFromStream(buffer: $FriendlyByteBuf): $Target;
        /**
         * Gets the nearest path point of the path that is constructed
         */
        getBestNode(): $Node;
        updateBest(heuristic: number, node: $Node): void;
        setReached(): void;
        isReached(): boolean;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(node: $Node);
        constructor(x: number, y: number, z: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        getOrCompute(level: $BlockGetter, pos: $BlockPos_): $PathType;
        invalidate(pos: $BlockPos_): void;
        constructor();
    }
    export class $PathfindingContext {
        getPathTypeFromState(x: number, y: number, z: number): $PathType;
        level(): $CollisionGetter;
        getBlockState(pos: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        constructor(level: $CollisionGetter, mob: $Mob);
    }
    export class $PathFinder {
        /**
         * Finds a path to one of the specified positions and post-processes it or returns null if no path could be found within given accuracy
         */
        findPath(region: $PathNavigationRegion, mob: $Mob, targetPositions: $Set_<$BlockPos_>, maxRange: number, accuracy: number, searchDepthMultiplier: number): $Path;
        constructor(nodeEvaluator: $NodeEvaluator, maxVisitedNodes: number);
    }
    export class $NodeEvaluator {
        getNeighbors(outputArray: $Node[], node: $Node): number;
        canFloat(): boolean;
        setCanWalkOverFences(canFloat: boolean): void;
        getPathType(mob: $Mob, pos: $BlockPos_): $PathType;
        getPathType(context: $PathfindingContext, x: number, y: number, z: number): $PathType;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        /**
         * This method is called when all nodes have been processed and PathEntity is created.
         */
        done(): void;
        prepare(level: $PathNavigationRegion, mob: $Mob): void;
        getTarget(x: number, arg1: number, y: number): $Target;
        getStart(): $Node;
        setCanOpenDoors(canFloat: boolean): void;
        setCanFloat(canFloat: boolean): void;
        setCanPassDoors(canFloat: boolean): void;
        static isBurningBlock(state: $BlockState_): boolean;
        getPathTypeOfMob(context: $PathfindingContext, x: number, y: number, z: number, mob: $Mob): $PathType;
        canWalkOverFences(): boolean;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        getMalus(): number;
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $SwimNodeEvaluator extends $NodeEvaluator {
        constructor(allowBreaching: boolean);
    }
    export class $Node {
        static createHash(x: number, y: number, z: number): number;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        inOpenSet(): boolean;
        distanceToSqr(pos: $BlockPos_): number;
        distanceToSqr(point: $Node): number;
        writeToStream(buffer: $FriendlyByteBuf): void;
        cloneAndMove(x: number, y: number, z: number): $Node;
        asBlockPos(): $BlockPos;
        static createFromStream(buffer: $FriendlyByteBuf): $Node;
        distanceTo(point: $Node): number;
        distanceTo(pos: $BlockPos_): number;
        distanceToXZ(point: $Node): number;
        distanceManhattan(pos: $BlockPos_): number;
        distanceManhattan(point: $Node): number;
        asVec3(): $Vec3;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(x: number, y: number, z: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $WalkNodeEvaluator extends $NodeEvaluator {
        static getFloorLevel(level: $BlockGetter, pos: $BlockPos_): number;
        static getPathTypeStatic(context: $PathfindingContext, pos: $BlockPos$MutableBlockPos): $PathType;
        static getPathTypeStatic(mob: $Mob, pos: $BlockPos_): $PathType;
        static getPathTypeFromState(level: $BlockGetter, pos: $BlockPos_): $PathType;
        getPathTypeWithinMobBB(context: $PathfindingContext, x: number, y: number, z: number): $Set<$PathType>;
        static checkNeighbourBlocks(context: $PathfindingContext, x: number, y: number, z: number, pathType: $PathType_): $PathType;
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $Path {
        /**
         * Returns the last `Node` of the Array.
         */
        getEndNode(): $Node;
        /**
         * Returns `true` if the EntityPath are the same. Non instance related equals.
         */
        sameAs(pathentity: $Path | null): boolean;
        getNodePos(index: number): $BlockPos;
        /**
         * Returns `true` if this path has reached the end
         */
        notStarted(): boolean;
        writeToStream(buffer: $FriendlyByteBuf): void;
        /**
         * @return the current `PathEntity` target node as a `Vec3D`
         */
        getNextEntityPos(entity: $Entity): $Vec3;
        truncateNodes(currentPathIndex: number): void;
        /**
         * Returns the last `Node` of the Array.
         */
        getNextNode(): $Node;
        getNextNodePos(): $BlockPos;
        getNextNodeIndex(): number;
        getNodeCount(): number;
        debugData(): $Path$DebugData;
        static createFromStream(buf: $FriendlyByteBuf): $Path;
        /**
         * Returns `true` if this path has reached the end
         */
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        /**
         * Directs this path to the next point in its array
         */
        advance(): void;
        replaceNode(index: number, point: $Node): void;
        /**
         * Returns the `Node` located at the specified index, usually the current one.
         */
        getNode(index: number): $Node;
        /**
         * Returns `true` if this path has reached the end
         */
        canReach(): boolean;
        setDebug(openSet: $Node[], closedSet: $Node[], targetNodes: $Set_<$Target>): void;
        setNextNodeIndex(currentPathIndex: number): void;
        /**
         * Returns the last `Node` of the Array.
         */
        getPreviousNode(): $Node;
        /**
         * Gets the vector of the `Node` associated with the given index.
         */
        getEntityPosAtNode(entity: $Entity, index: number): $Vec3;
        getDistToTarget(): number;
        constructor(nodes: $List_<$Node>, target: $BlockPos_, reached: boolean);
        get endNode(): $Node;
        get nextNode(): $Node;
        get nextNodePos(): $BlockPos;
        get nodeCount(): number;
        get done(): boolean;
        get target(): $BlockPos;
        get previousNode(): $Node;
        get distToTarget(): number;
    }
}
