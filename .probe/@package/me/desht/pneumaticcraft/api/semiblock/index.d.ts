import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/me/desht/pneumaticcraft/api/semiblock" {
    export class $SemiblockEvent extends $Event {
        getSide(): $Direction;
        getPos(): $BlockPos;
        getWorld(): $Level;
        getSemiblock(): $ISemiBlock;
        get side(): $Direction;
        get pos(): $BlockPos;
        get world(): $Level;
        get semiblock(): $ISemiBlock;
    }
    export class $ISemiBlock {
        static byTrackingId(arg0: $Level_, arg1: number): $ISemiBlock;
    }
    export interface $ISemiBlock {
        isValid(): boolean;
        tick(): void;
        getBlockPos(): $BlockPos;
        getColor(): number;
        getWorld(): $Level;
        serializeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getDrops(): $NonNullList<$ItemStack>;
        addTooltip(arg0: $Consumer_<$Component>, arg1: $Player, arg2: $CompoundTag_, arg3: boolean): void;
        canPlace(arg0: $Direction_): boolean;
        onPlaced(arg0: $Player, arg1: $ItemStack_, arg2: $Direction_): void;
        canCoexist(arg0: $ISemiBlock): boolean;
        writeToBuf(arg0: $RegistryFriendlyByteBuf): void;
        killedByEntity(arg0: $Entity): void;
        getSemiblockCapability<T>(arg0: $EntityCapability<T, void>): (T) | undefined;
        getSemiblockCapability<T>(arg0: $EntityCapability<T, $Direction_>, arg1: $Direction_): (T) | undefined;
        getCachedTileEntity(): $BlockEntity;
        getSemiblockDisplayName(): $Component;
        onRightClickWithConfigurator(arg0: $Player, arg1: $Direction_): boolean;
        getSemiblockId(): $ResourceLocation;
        getTrackingId(): number;
        readFromBuf(arg0: $RegistryFriendlyByteBuf): void;
        get valid(): boolean;
        get blockPos(): $BlockPos;
        get color(): number;
        get world(): $Level;
        get drops(): $NonNullList<$ItemStack>;
        get cachedTileEntity(): $BlockEntity;
        get semiblockDisplayName(): $Component;
        get semiblockId(): $ResourceLocation;
        get trackingId(): number;
    }
    export class $SemiblockEvent$PlaceEvent extends $SemiblockEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $ISemiBlock);
    }
    export class $SemiblockEvent$BreakEvent extends $SemiblockEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $ISemiBlock);
    }
}
