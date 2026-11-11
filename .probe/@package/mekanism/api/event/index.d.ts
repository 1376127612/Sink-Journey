import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityTeleportEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/mekanism/api/event" {
    export class $MekanismTeleportEvent$Robit extends $MekanismTeleportEvent$GlobalTeleport {
        constructor<ROBIT extends $Entity>(arg0: ROBIT);
    }
    export class $MekanismTeleportEvent$PortableTeleporter extends $MekanismTeleportEvent$Teleporter {
        getPortableTeleporter(): $ItemStack;
        getEntity(): $Player;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $ResourceKey_<$Level>, arg3: $ItemStack_, arg4: number);
        get portableTeleporter(): $ItemStack;
        get entity(): $Player;
    }
    export class $MekanismTeleportEvent extends $EntityTeleportEvent {
    }
    export class $MekanismTeleportEvent$MekaTool extends $MekanismTeleportEvent {
        getEntity(): $Player;
        getTargetBlock(): $BlockHitResult;
        getMekaTool(): $ItemStack;
        constructor(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_, arg5: $BlockHitResult);
        get entity(): $Player;
        get targetBlock(): $BlockHitResult;
        get mekaTool(): $ItemStack;
    }
    export class $MekanismTeleportEvent$GlobalTeleport extends $MekanismTeleportEvent {
        isTransDimensional(): boolean;
        getTargetDimension(): $ResourceKey<$Level>;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>);
        get transDimensional(): boolean;
        get targetDimension(): $ResourceKey<$Level>;
    }
    export class $MekanismTeleportEvent$Teleporter extends $MekanismTeleportEvent$GlobalTeleport {
        getEnergyCost(): number;
        constructor(arg0: $Entity, arg1: $BlockPos_, arg2: $ResourceKey_<$Level>, arg3: number);
        get energyCost(): number;
    }
}
