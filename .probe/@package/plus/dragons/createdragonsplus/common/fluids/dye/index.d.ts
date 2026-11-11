import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $DyeColor_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Collection } from "@package/java/util";

declare module "@package/plus/dragons/createdragonsplus/common/fluids/dye" {
    export class $DyeVariant extends $Record {
        id(): $ResourceLocation;
        color(): number;
        displayName(): string;
        isAvailable(): boolean;
        requiredModId(): string;
        serializedName(): string;
        isVanilla(): boolean;
        fluidName(): string;
        dyeItemTag(): $TagKey<$Item>;
        dyeItemId(): $ResourceLocation;
        vanillaColor(): $DyeColor;
        dyeItemStack(): $ItemStack;
        concreteBlockId(): $ResourceLocation;
        fanProcessingName(): string;
        constructor(id: $ResourceLocation_, serializedName: string, displayName: string, color: number, dyeItemTag: $TagKey_<$Item>, dyeItemId: $ResourceLocation_, concreteBlockId: $ResourceLocation_, vanillaColor: $DyeColor_, requiredModId: string);
        get available(): boolean;
        get vanilla(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DyeVariant}.
     */
    export type $DyeVariant_ = { vanillaColor?: $DyeColor_, serializedName?: string, concreteBlockId?: $ResourceLocation_, dyeItemId?: $ResourceLocation_, requiredModId?: string, displayName?: string, dyeItemTag?: $TagKey_<$Item>, id?: $ResourceLocation_, color?: number,  } | [vanillaColor?: $DyeColor_, serializedName?: string, concreteBlockId?: $ResourceLocation_, dyeItemId?: $ResourceLocation_, requiredModId?: string, displayName?: string, dyeItemTag?: $TagKey_<$Item>, id?: $ResourceLocation_, color?: number, ];
    export class $DyeVariantRegistry$Builder {
        add(arg0: $DyeVariant_): void;
        build(): $Collection<$DyeVariant>;
        constructor();
    }
    export class $RegisterDyeVariantsEvent extends $Event {
        register(arg0: $DyeVariant_): void;
        constructor(arg0: $DyeVariantRegistry$Builder);
    }
}
