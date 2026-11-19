import { $Codec } from "@package/com/mojang/serialization";
import { $ApothSpawnerTile } from "@package/dev/shadowsoffire/apothic_spawners/block";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $MutableComponent, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/dev/shadowsoffire/apothic_spawners/stats" {
    export interface $SpawnerStat<T> extends RegistryMarked<RegistryTypes.ApothicSpawnersSpawnerStatTag, RegistryTypes.ApothicSpawnersSpawnerStat> {}
    export class $SpawnerStat<T> {
        static createTooltip(arg0: $SpawnerStat_<never>, arg1: $MutableComponent_): $Component;
        static createTooltip(arg0: $SpawnerStat_<never>, arg1: string): $Component;
    }
    export interface $SpawnerStat<T> {
        formatValue(arg0: T): string;
        getValueCodec(): $Codec<T>;
        name(): $MutableComponent;
        getValue(arg0: $ApothSpawnerTile): T;
        getId(): $ResourceLocation;
        setValue(arg0: $ApothSpawnerTile, arg1: T): void;
        desc(): $MutableComponent;
        applyModifier(arg0: $ApothSpawnerTile, arg1: T, arg2: (T) | undefined, arg3: (T) | undefined): boolean;
        getTooltip(arg0: $ApothSpawnerTile): $Component;
        get valueCodec(): $Codec<T>;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SpawnerStat}.
     */
    export type $SpawnerStat_<T> = RegistryTypes.ApothicSpawnersSpawnerStat;
}
