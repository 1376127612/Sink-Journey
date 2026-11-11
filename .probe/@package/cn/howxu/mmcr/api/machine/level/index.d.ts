import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ModifierDefinition_, $ModifierDefinition } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BlockPredicate, $BlockPredicate_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/machine/level" {
    export class $LevelType extends $Record {
        id(): $ResourceLocation;
        displayName(): $Component;
        constructor(id: $ResourceLocation_, displayName: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $LevelType}.
     */
    export type $LevelType_ = { id?: $ResourceLocation_, displayName?: $Component_,  } | [id?: $ResourceLocation_, displayName?: $Component_, ];
    export class $MachineLevel extends $Record {
        priority(): number;
        id(): $ResourceLocation;
        modifier(): $ModifierDefinition;
        typeId(): $ResourceLocation;
        representative(): $ItemStack;
        statePredicate(): $BlockPredicate;
        constructor(id: $ResourceLocation_, typeId: $ResourceLocation_, priority: number, statePredicate: $BlockPredicate_, representative: $ItemStack_, modifier: $ModifierDefinition_);
    }
    /**
     * Values that may be interpreted as {@link $MachineLevel}.
     */
    export type $MachineLevel_ = { priority?: number, modifier?: $ModifierDefinition_, id?: $ResourceLocation_, statePredicate?: $BlockPredicate_, representative?: $ItemStack_, typeId?: $ResourceLocation_,  } | [priority?: number, modifier?: $ModifierDefinition_, id?: $ResourceLocation_, statePredicate?: $BlockPredicate_, representative?: $ItemStack_, typeId?: $ResourceLocation_, ];
    export class $LevelSlot extends $Record {
        typeId(): $ResourceLocation;
        constructor(typeId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LevelSlot}.
     */
    export type $LevelSlot_ = { typeId?: $ResourceLocation_,  } | [typeId?: $ResourceLocation_, ];
}
