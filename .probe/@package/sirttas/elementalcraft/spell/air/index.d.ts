import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityTeleportEvent } from "@package/net/neoforged/neoforge/event/entity";

declare module "@package/sirttas/elementalcraft/spell/air" {
    export class $EnderStrikeSpell$Event extends $EntityTeleportEvent {
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
    }
    export class $TranslocationSpell$Event extends $EntityTeleportEvent {
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
    }
}
