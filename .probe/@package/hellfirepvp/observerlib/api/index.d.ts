import { $ChunkPos, $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockChangeSet } from "@package/hellfirepvp/observerlib/api/block";
import { $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Collection } from "@package/java/util";
import { $AABB_ } from "@package/net/minecraft/world/phys";
export * as util from "@package/hellfirepvp/observerlib/api/util";
export * as structure from "@package/hellfirepvp/observerlib/api/structure";
export * as block from "@package/hellfirepvp/observerlib/api/block";

declare module "@package/hellfirepvp/observerlib/api" {
    export class $ObserverProvider<T extends $ChangeObserver<T>> {
        codec(): $MapCodec<T>;
        newObserver(): T;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ObserverProvider}.
     */
    export type $ObserverProvider_<T> = RegistryTypes.ObserverlibObserverProviders;
    export interface $ObserverProvider<T> extends RegistryMarked<RegistryTypes.ObserverlibObserverProvidersTag, RegistryTypes.ObserverlibObserverProviders> {}
    export class $ChangeSubscriber<T extends $ChangeObserver<T>> {
    }
    export interface $ChangeSubscriber<T extends $ChangeObserver<T>> {
        isValid(arg0: $Level_): boolean;
        getCurrentChangeSet(): $BlockChangeSet;
        getObserver(): T;
        get currentChangeSet(): $BlockChangeSet;
        get observer(): T;
    }
    export class $ChangeObserver<T extends $ChangeObserver<T>> {
        initialize(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getProvider(): $ObserverProvider<T>;
        notifyChange(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockChangeSet): boolean;
        getObservableArea(): $ObservableArea;
        static CODEC: $Codec<$ChangeObserver<never>>;
        constructor();
        get provider(): $ObserverProvider<T>;
        get observableArea(): $ObservableArea;
    }
    export class $ObservableArea {
    }
    export interface $ObservableArea {
        calculateAffectedChunks(arg0: $Vec3i, arg1: $Vec3i): $Collection<$ChunkPos>;
        calculateAffectedChunks(arg0: $AABB_, arg1: $Vec3i): $Collection<$ChunkPos>;
        observes(arg0: $Vec3i): boolean;
        getAffectedChunks(arg0: $Vec3i): $Collection<$ChunkPos>;
    }
}
