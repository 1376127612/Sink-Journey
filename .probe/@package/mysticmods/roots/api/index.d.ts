import { $Spell, $Spell_ } from "@package/mysticmods/roots/api/spell";
import { $Ritual, $Ritual_ } from "@package/mysticmods/roots/api/ritual";
export * as recipe from "@package/mysticmods/roots/api/recipe";
export * as action from "@package/mysticmods/roots/api/action";
export * as blockentity from "@package/mysticmods/roots/api/blockentity";
export * as ritual from "@package/mysticmods/roots/api/ritual";
export * as registry from "@package/mysticmods/roots/api/registry";
export * as spell from "@package/mysticmods/roots/api/spell";
export * as condition from "@package/mysticmods/roots/api/condition";
export * as property from "@package/mysticmods/roots/api/property";
export * as modifier from "@package/mysticmods/roots/api/modifier";
export * as attachment from "@package/mysticmods/roots/api/attachment";
export * as herb from "@package/mysticmods/roots/api/herb";
export * as snapshot from "@package/mysticmods/roots/api/snapshot";
export * as growth from "@package/mysticmods/roots/api/growth";
export * as test from "@package/mysticmods/roots/api/test";
export * as grove from "@package/mysticmods/roots/api/grove";

declare module "@package/mysticmods/roots/api" {
    export class $SpellLike {
    }
    export interface $SpellLike {
        asSpell(): $Spell;
    }
    /**
     * Values that may be interpreted as {@link $SpellLike}.
     */
    export type $SpellLike_ = (() => $Spell_);
    export class $RitualLike {
    }
    export interface $RitualLike {
        asRitual(): $Ritual;
    }
    /**
     * Values that may be interpreted as {@link $RitualLike}.
     */
    export type $RitualLike_ = (() => $Ritual_);
}
