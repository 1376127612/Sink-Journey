import { $Consumer_ } from "@package/java/util/function";
import { $Spell, $Spell_ } from "@package/sirttas/elementalcraft/spell";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/sirttas/elementalcraft/spell/tick" {
    export class $AbstractSpellInstance {
        stop(): void;
        static delay(arg0: $Entity, arg1: $Spell_, arg2: number, arg3: $Runnable_): $AbstractSpellInstance;
        getDuration(): number;
        tick(): void;
        getCaster(): $Entity;
        static effect(arg0: $Entity, arg1: $Spell_, arg2: number, arg3: $Consumer_<$AbstractSpellInstance>): $AbstractSpellInstance;
        getTicks(): number;
        getSpell(): $Spell;
        isFinished(): boolean;
        get duration(): number;
        get caster(): $Entity;
        get ticks(): number;
        get spell(): $Spell;
        get finished(): boolean;
    }
}
