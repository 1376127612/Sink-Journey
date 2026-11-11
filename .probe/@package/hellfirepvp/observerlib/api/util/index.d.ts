import { $BlockGetter, $LevelReader, $LevelWriter } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $MatchableState } from "@package/hellfirepvp/observerlib/api/block";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Structure, $MatchableStructure } from "@package/hellfirepvp/observerlib/api/structure";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MatchableTile } from "@package/hellfirepvp/observerlib/api/tile";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/hellfirepvp/observerlib/api/util" {
    export class $BlockArray implements $Structure {
        addAll(arg0: $BlockArray): void;
        getContents(): $Map<$BlockPos, $MatchableState>;
        addBlockCube(arg0: $MatchableState, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addBlockCube(arg0: $BlockState_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getMaximumOffset(): $Vec3i;
        getMinimumOffset(): $Vec3i;
        addTileEntity(arg0: $MatchableTile<never>, arg1: $BlockPos_): void;
        addTileEntity(arg0: $MatchableTile<never>, arg1: number, arg2: number, arg3: number): void;
        getTileEntities(): $Map<$BlockPos, $MatchableTile<$BlockEntity>>;
        forAllInCube(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TriConsumer_<number, number, number>): void;
        addBlock(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        addBlock(arg0: $BlockState_, arg1: number, arg2: number, arg3: number): void;
        addBlock(arg0: $Block_, arg1: $BlockPos_): void;
        addBlock(arg0: $MatchableState, arg1: $BlockPos_): void;
        addBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        addBlock(arg0: $MatchableState, arg1: number, arg2: number, arg3: number): void;
        getTileEntityAt(arg0: $BlockPos_): $MatchableTile<$BlockEntity>;
        getBlockStateAt(arg0: $BlockPos_): $MatchableState;
        getStructureSlice(arg0: number): $List<$Tuple<$BlockPos, $MatchableState>>;
        hasTileAt(arg0: $BlockPos_): boolean;
        hasBlockAt(arg0: $BlockPos_): boolean;
        getAsStacks(arg0: $LevelReader, arg1: $Player): $List<$ItemStack>;
        constructor();
        get contents(): $Map<$BlockPos, $MatchableState>;
        get maximumOffset(): $Vec3i;
        get minimumOffset(): $Vec3i;
        get tileEntities(): $Map<$BlockPos, $MatchableTile<$BlockEntity>>;
    }
    export class $StructureBlockArray extends $BlockArray implements $MatchableStructure {
        place<T extends $LevelWriter>(arg0: T, arg1: $BlockPos_, arg2: $Predicate_<$BlockPos>): $Map<$BlockPos, $BlockState>;
        place<T extends $LevelWriter>(arg0: T, arg1: $BlockPos_): $Map<$BlockPos, $BlockState>;
        matches(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        matchesSlice(arg0: $BlockGetter, arg1: $BlockPos_, arg2: number): boolean;
        matchesSingleBlock(arg0: $BlockGetter | null, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity | null): boolean;
        matchesSingleBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        constructor();
    }
}
