import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PathType_, $NodeEvaluator, $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanPassDoors(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        setCanWalkOverFences(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
        set canWalkOverFences(value: boolean);
        set avoidSun(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        setCanFloat(canSwim: boolean): void;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        getMaxDistanceToWaypoint(): number;
        isStableDestination(pos: $BlockPos_): boolean;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        canCutCorner(pathType: $PathType_): boolean;
        getTargetPos(): $BlockPos;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        constructor(mob: $Mob, level: $Level_);
        get done(): boolean;
        get path(): $Path;
        set maxVisitedNodesMultiplier(value: number);
        get stuck(): boolean;
        get maxDistanceToWaypoint(): number;
        get targetPos(): $BlockPos;
        set speedModifier(value: number);
        get inProgress(): boolean;
        get nodeEvaluator(): $NodeEvaluator;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanPassDoors(canOpenDoors: boolean): void;
        setCanOpenDoors(canOpenDoors: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
    }
}
