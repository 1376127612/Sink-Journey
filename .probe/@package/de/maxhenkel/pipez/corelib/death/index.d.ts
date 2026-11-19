import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Collection_, $UUID } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/pipez/corelib/death" {
    export class $Death {
        getPlayerUUID(): $UUID;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getExperience(): number;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getAllItems(): $NonNullList<$ItemStack>;
        getPlayerName(): string;
        static fromPlayer(arg0: $Player): $Death;
        getPosZ(): number;
        getId(): $UUID;
        getTimestamp(): number;
        getDimension(): string;
        getModel(): number;
        getBlockPos(): $BlockPos;
        getEquipment(): $NonNullList<$ItemStack>;
        getPosX(): number;
        getPosY(): number;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        get playerUUID(): $UUID;
        get experience(): number;
        get allItems(): $NonNullList<$ItemStack>;
        get playerName(): string;
        get posZ(): number;
        get id(): $UUID;
        get timestamp(): number;
        get dimension(): string;
        get model(): number;
        get blockPos(): $BlockPos;
        get equipment(): $NonNullList<$ItemStack>;
        get posX(): number;
        get posY(): number;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
    }
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        removeDrops(): void;
        storeDeath(): void;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
}
