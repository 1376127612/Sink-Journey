import { $Level, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpawnerStat } from "@package/dev/shadowsoffire/apothic_spawners/stats";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $BlockEntityType, $SpawnerBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/shadowsoffire/apothic_spawners/block" {
    export class $ApothSpawnerTile extends $SpawnerBlockEntity {
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getStatsMap(): $Map<$SpawnerStat<never>, $Object>;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        beginInstability(): void;
        hasBeenModified(): boolean;
        isUnstable(): boolean;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        spawner: $BaseSpawner;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get statsMap(): $Map<$SpawnerStat<never>, $Object>;
        get unstable(): boolean;
    }
}
