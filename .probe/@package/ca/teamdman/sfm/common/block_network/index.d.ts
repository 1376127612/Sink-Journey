import { $ChunkPos, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $SFMBlockCapabilityResult, $SFMBlockCapabilityResult_, $SFMBlockCapabilityKind_ } from "@package/ca/teamdman/sfm/common/capability";
import { $Stream } from "@package/java/util/stream";
import { $TranslatableLogger } from "@package/ca/teamdman/sfm/common/logging";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Unit, $BlockPosMap, $BlockPosIterator, $BlockPosSet, $ChunkPosMap } from "@package/ca/teamdman/sfm/common/util";

declare module "@package/ca/teamdman/sfm/common/block_network" {
    export class $SFMBlockCapabilityCacheForLevel {
        getPositions(): $BlockPosIterator;
        remove(arg0: $BlockPos_, arg1: $SFMBlockCapabilityKind_<never>, arg2: $Direction_): void;
        size(): number;
        clear(): void;
        putAll(arg0: $SFMBlockCapabilityCacheForLevel): void;
        getPositionsRaw(): $LongSet;
        overwriteFromOther(arg0: $BlockPos_, arg1: $SFMBlockCapabilityCacheForLevel): void;
        bustCacheForChunk(arg0: $ChunkPos): void;
        bustCacheForChunk(arg0: $ChunkAccess): void;
        getCapability<CAP>(arg0: $BlockPos_, arg1: $SFMBlockCapabilityKind_<CAP>, arg2: $Direction_): $SFMBlockCapabilityResult<CAP>;
        putCapability<CAP>(arg0: $BlockPos_, arg1: $SFMBlockCapabilityKind_<CAP>, arg2: $Direction_, arg3: $SFMBlockCapabilityResult_<CAP>): void;
        constructor(arg0: $Level_);
        get positions(): $BlockPosIterator;
        get positionsRaw(): $LongSet;
    }
    export class $BlockNetwork<LEVEL, T> {
        memberBlockPositionsByChunk(): $ChunkPosMap<$BlockPosSet>;
        isMember(arg0: $BlockPos_): boolean;
        usesChunk(arg0: number): boolean;
        usesChunk(arg0: $ChunkPos): boolean;
        containsBlockPos(arg0: $BlockPos_): boolean;
        size(): number;
        isEmpty(): boolean;
        members(): $BlockPosMap<T>;
        level(): LEVEL;
        constructor(arg0: LEVEL, arg1: $BlockNetworkMemberFilterMapper_<LEVEL, T>, arg2: $BlockNetworkConstructor_<LEVEL, T, $BlockNetwork<LEVEL, T>>);
        constructor(arg0: LEVEL, arg1: $BlockNetworkMemberFilterMapper_<LEVEL, T>);
        get empty(): boolean;
    }
    export class $BlockNetworkConstructor<LEVEL, T, NETWORK extends $BlockNetwork<LEVEL, T>> {
    }
    export interface $BlockNetworkConstructor<LEVEL, T, NETWORK extends $BlockNetwork<LEVEL, T>> {
        create(arg0: LEVEL, arg1: $BlockNetworkMemberFilterMapper_<LEVEL, T>): NETWORK;
    }
    /**
     * Values that may be interpreted as {@link $BlockNetworkConstructor}.
     */
    export type $BlockNetworkConstructor_<LEVEL, T, NETWORK> = ((arg0: LEVEL, arg1: $BlockNetworkMemberFilterMapper<LEVEL, T>) => NETWORK);
    export class $BlockNetworkMemberFilterMapper<LEVEL, T> {
    }
    export interface $BlockNetworkMemberFilterMapper<LEVEL, T> {
        getNetworkMember(arg0: LEVEL, arg1: $BlockPos_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockNetworkMemberFilterMapper}.
     */
    export type $BlockNetworkMemberFilterMapper_<LEVEL, T> = ((arg0: LEVEL, arg1: $BlockPos) => T);
    export class $CableNetwork extends $BlockNetwork<$Level, $Unit> {
        getCablePositionsRaw(): $LongSet;
        static isCable(arg0: $Level_, arg1: $BlockPos_): boolean;
        static cableMemberFilterMapper(arg0: $Level_, arg1: $BlockPos_): $Unit;
        getLevelCapabilityCache(): $SFMBlockCapabilityCacheForLevel;
        containsCablePosition(arg0: $BlockPos_): boolean;
        getCablePositions(): $BlockPosIterator;
        getLevel(): $Level;
        static discoverCables(arg0: $Level_, arg1: $BlockPos_): $Stream<$BlockPos>;
        getCableCount(): number;
        isAdjacentToCable(arg0: $BlockPos_): boolean;
        getCapabilityProviderPositions(): $BlockPosIterator;
        getCapabilityProviderPositionsRaw(): $LongSet;
        getCapability<CAP>(arg0: $SFMBlockCapabilityKind_<CAP>, arg1: $BlockPos_, arg2: $Direction_, arg3: $TranslatableLogger): $SFMBlockCapabilityResult<CAP>;
        constructor(arg0: $Level_, arg1: $BlockNetworkMemberFilterMapper_<$Level, $Unit>);
        get cablePositionsRaw(): $LongSet;
        get levelCapabilityCache(): $SFMBlockCapabilityCacheForLevel;
        get cablePositions(): $BlockPosIterator;
        get cableCount(): number;
        get capabilityProviderPositions(): $BlockPosIterator;
        get capabilityProviderPositionsRaw(): $LongSet;
    }
}
