import { $RecipeType_, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";

declare module "@package/com/alessandro/astages/api/wrapper" {
    export class $EnchantWrapper extends $Record {
        level(): number;
        enchantment(): $Enchantment;
        constructor(enchantment: $Enchantment_, level: number);
    }
    /**
     * Values that may be interpreted as {@link $EnchantWrapper}.
     */
    export type $EnchantWrapper_ = { level?: number, enchantment?: $Enchantment_,  } | [level?: number, enchantment?: $Enchantment_, ];
    export class $EquipmentWrapper extends $Record {
        slot(): $EquipmentSlot;
        stack(): $ItemStack;
        constructor(slot: $EquipmentSlot_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentWrapper}.
     */
    export type $EquipmentWrapper_ = { stack?: $ItemStack_, slot?: $EquipmentSlot_,  } | [stack?: $ItemStack_, slot?: $EquipmentSlot_, ];
    export class $OreWrapper extends $Record {
        original(): $BlockState;
        replacement(): $BlockState;
        constructor(original: $BlockState_, replacement: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $OreWrapper}.
     */
    export type $OreWrapper_ = { original?: $BlockState_, replacement?: $BlockState_,  } | [original?: $BlockState_, replacement?: $BlockState_, ];
    export class $RecipeModWrapper extends $Record {
        modId(): string;
        constructor(modId: string);
    }
    /**
     * Values that may be interpreted as {@link $RecipeModWrapper}.
     */
    export type $RecipeModWrapper_ = { modId?: string,  } | [modId?: string, ];
    export class $CropWrapper extends $Record {
        crop(): $BlockState;
        age(): number;
        constructor(crop: $BlockState_, age: number);
    }
    /**
     * Values that may be interpreted as {@link $CropWrapper}.
     */
    export type $CropWrapper_ = { crop?: $BlockState_, age?: number,  } | [crop?: $BlockState_, age?: number, ];
    export class $RecipeWrapper extends $Record {
        type(): $RecipeType<never>;
        recipe(): $ResourceLocation;
        constructor(type: $RecipeType_<never>, recipe: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $RecipeWrapper}.
     */
    export type $RecipeWrapper_ = { type?: $RecipeType_<never>, recipe?: $ResourceLocation_,  } | [type?: $RecipeType_<never>, recipe?: $ResourceLocation_, ];
}
