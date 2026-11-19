import { $BlockPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageType, $DamageType_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/alessandro/astages/api/loot" {
    export class $ALootPayload {
        player(): $Player;
        player(player: $Player): $ALootPayload;
        damageType(damageType: $DamageType_): $ALootPayload;
        damageType(): $DamageType;
        position(): $Vec3;
        position(position: $Vec3_): $ALootPayload;
        static create(): $ALootPayload;
        lootTable(lootTable: $ResourceLocation_): $ALootPayload;
        lootTable(): $ResourceLocation;
        entityType(): $EntityType<never>;
        entityType(entityType: $EntityType_<never>): $ALootPayload;
        blockState(): $BlockState;
        blockState(blockState: $BlockState_): $ALootPayload;
        blockPos(): $BlockPos;
    }
}
