import { $ItemLike } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ElementType, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $List_ } from "@package/java/util";
import { $IElementStorage } from "@package/sirttas/elementalcraft/api/element/storage";

declare module "@package/sirttas/elementalcraft/jewel" {
    export class $Jewel implements $IElementTypeProvider, $ItemLike {
        getKey(): $ResourceLocation;
        isActive(arg0: $Entity, arg1: $IElementStorage | null): boolean;
        getElementType(): $ElementType;
        getDisplayName(): $Component;
        consume(arg0: $Entity, arg1: $IElementStorage | null): void;
        consume(arg0: $Entity): void;
        getDescriptionId(): string;
        appendHoverText(arg0: $List_<$Component_>): void;
        asItem(): $Item;
        isTicking(): boolean;
        getConsumption(): number;
        getModelName(): $ResourceLocation;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        get key(): $ResourceLocation;
        get elementType(): $ElementType;
        get displayName(): $Component;
        get descriptionId(): string;
        get ticking(): boolean;
        get consumption(): number;
        get modelName(): $ResourceLocation;
        get elementTypeSupplier(): $Supplier<$ElementType>;
    }
    /**
     * Values that may be interpreted as {@link $Jewel}.
     */
    export type $Jewel_ = RegistryTypes.ElementalcraftJewel;
    export interface $Jewel extends RegistryMarked<RegistryTypes.ElementalcraftJewelTag, RegistryTypes.ElementalcraftJewel> {}
}
