import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/alessandro/astages/api/event/world" {
    export class $PlayerInventoryChangedEvent extends $PlayerEvent {
        getSlot(): number;
        getItem(): $ItemStack;
        constructor(player: $Player, item: $ItemStack_, slot: number);
        get slot(): number;
        get item(): $ItemStack;
    }
    export class $LivingEntityEatEvent extends $EntityEvent {
        getFood(): $ItemStack;
        getPlayer(): $ServerPlayer;
        constructor(entity: $Entity, food: $ItemStack_);
        get food(): $ItemStack;
        get player(): $ServerPlayer;
    }
    export class $ContainerChangedEvent extends $PlayerEvent {
        getSlot(): number;
        getContainer(): $AbstractContainerMenu;
        constructor(player: $Player, container: $AbstractContainerMenu, slot: number);
        get slot(): number;
        get container(): $AbstractContainerMenu;
    }
    /**
     * @deprecated
     */
    export class $UnpackLootTableEvent extends $Event {
        constructor();
    }
    export class $MobInteractEvent extends $PlayerEvent implements $ICancellableEvent {
        getHand(): $InteractionHand;
        getMobType(): $EntityType<never>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, hand: $InteractionHand_, mobType: $EntityType_<never>);
        get hand(): $InteractionHand;
        get mobType(): $EntityType<never>;
    }
    export class $EntityChangedChunkEvent extends $EntityEvent {
        getNewChunkPos(): $ChunkPos;
        constructor(entity: $Entity, newChunkPos: $ChunkPos);
        get newChunkPos(): $ChunkPos;
    }
}
