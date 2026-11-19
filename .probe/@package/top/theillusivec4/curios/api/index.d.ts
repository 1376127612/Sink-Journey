import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";

declare module "@package/top/theillusivec4/curios/api" {
    export class $SlotContext extends $Record {
        cosmetic(): boolean;
        index(): number;
        visible(): boolean;
        identifier(): string;
        entity(): $LivingEntity;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SlotContext}.
     */
    export type $SlotContext_ = { identifier?: string, entity?: $LivingEntity, visible?: boolean, cosmetic?: boolean, index?: number,  } | [identifier?: string, entity?: $LivingEntity, visible?: boolean, cosmetic?: boolean, index?: number, ];
    export class $SlotResult extends $Record {
        slotContext(): $SlotContext;
        stack(): $ItemStack;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotResult}.
     */
    export type $SlotResult_ = { slotContext?: $SlotContext_, stack?: $ItemStack_,  } | [slotContext?: $SlotContext_, stack?: $ItemStack_, ];
}
