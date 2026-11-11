import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MemoryModificationCounter } from "@package/net/caffeinemc/mods/lithium/common/ai";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $BrainAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $MemoryModificationCounter, $BrainAccessor<any> {
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: (U) | undefined): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: U | null): void;
        isActive(activity: $Activity_): boolean;
        setActiveActivityToFirstValid(activities: $List_<$Activity_>): void;
        setActiveActivityIfPossible(activity: $Activity_): void;
        tick(level: $ServerLevel, entity: $Object): void;
        getSchedule(): $Schedule;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>, memoryType: $MemoryModuleType_<never>): void;
        getMemory<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        clearMemories(): void;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        stopAll(level: $ServerLevel, entity: $Object): void;
        hasMemoryValue(type: $MemoryModuleType_<never>): boolean;
        removeAllBehaviors(): void;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType_<U>, memory: U, timeToLive: number): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        copyWithoutBehaviors(): $Brain<$Object>;
        addActivityWithConditions(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        checkMemory(memoryType: $MemoryModuleType_<never>, memoryStatus: $MemoryStatus_): boolean;
        eraseMemory<U>(type: $MemoryModuleType_<U>): void;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType_<U>): number;
        useDefaultActivity(): void;
        setCoreActivities(newActivities: $Set_<$Activity_>): void;
        setDefaultActivity(activity: $Activity_): void;
        addActivity(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        addActivity(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>): void;
        setSchedule(newSchedule: $Schedule_): void;
        isMemoryValue<U>(memoryType: $MemoryModuleType_<U>, memory: U): boolean;
        getMemoryInternal<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType_<never>>): void;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<any>;
        lithium$getModCount(): number;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<$Object>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<$Object>>>);
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set activeActivityIfPossible(value: $Activity_);
        get activeNonCoreActivity(): ($Activity) | undefined;
        set coreActivities(value: $Set_<$Activity_>);
        set defaultActivity(value: $Activity_);
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get runningBehaviors(): $List<any>;
        get activeActivities(): $Set<$Activity>;
        get sensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
    }
}
