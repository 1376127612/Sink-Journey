import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/mysticmods/roots/util" {
    export class $IVehicleMoveAccessor {
    }
    export interface $IVehicleMoveAccessor {
        roots$setClientVehicleIsFloating(arg0: boolean): void;
        roots$handleTeleportVehicle(arg0: number, arg1: number, arg2: number, arg3: $Entity): void;
        roots$ignoreVehiclePackets(arg0: number): void;
        roots$setVehicleFirstGood(arg0: number, arg1: number, arg2: number): void;
        roots$setLastVehicle(arg0: $Entity): void;
        roots$setVehicleLastGood(arg0: number, arg1: number, arg2: number): void;
    }
    export class $PositionCache {
        getPositions(): $List<$BlockPos>;
        isInside(arg0: $Vec3i): boolean;
        getAABB(): $AABB;
        random(arg0: $BiPredicate_<$Level, $BlockPos>, arg1: $RandomSource): $BlockPos;
        random(arg0: $RandomSource): $BlockPos;
        iterate(arg0: $RandomSource): $Iterable<$BlockPos>;
        iterate(arg0: $BiPredicate_<$Level, $BlockPos>, arg1: $RandomSource): $Iterable<$BlockPos>;
        getPosition(): $BlockPos;
        initCache(arg0: $Level_, arg1: $List_<$BiPredicate_<$Level, $BlockPos>>): void;
        getBoundingBox(): $BoundingBox;
        constructor(arg0: $BlockPos_, arg1: $BoundingBox, arg2: $List_<$BlockPos_>);
        constructor(arg0: $BlockPos_, arg1: $BoundingBox);
        get positions(): $List<$BlockPos>;
        get AABB(): $AABB;
        get position(): $BlockPos;
        get boundingBox(): $BoundingBox;
    }
}
