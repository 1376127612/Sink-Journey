import { $ShrineProperties } from "@package/sirttas/elementalcraft/block/shrine";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Registry } from "@package/net/minecraft/core";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ElementContainerProperties } from "@package/sirttas/elementalcraft/block/container";
import { $SynthesizerProperties } from "@package/sirttas/elementalcraft/block/synthesizer";
import { $Record } from "@package/java/lang";
import { $CraftingBlockEntityProperties } from "@package/sirttas/elementalcraft/block/entity/crafting";

declare module "@package/sirttas/elementalcraft/block/entity/properties" {
    export class $ConfigurableBlockEntityPropertiesType<T extends $IConfigurableBlockEntityProperties> extends $Record {
        static register(arg0: $IEventBus): void;
        codec(): $MapCodec<T>;
        static SYNTHESIZER: $DeferredHolder<$ConfigurableBlockEntityPropertiesType<never>, $ConfigurableBlockEntityPropertiesType<$SynthesizerProperties>>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$ConfigurableBlockEntityPropertiesType<never>>>;
        static CRAFTING: $DeferredHolder<$ConfigurableBlockEntityPropertiesType<never>, $ConfigurableBlockEntityPropertiesType<$CraftingBlockEntityProperties>>;
        static CONTAINER: $DeferredHolder<$ConfigurableBlockEntityPropertiesType<never>, $ConfigurableBlockEntityPropertiesType<$ElementContainerProperties>>;
        static SHRINE: $DeferredHolder<$ConfigurableBlockEntityPropertiesType<never>, $ConfigurableBlockEntityPropertiesType<$ShrineProperties>>;
        static REGISTRY: $Registry<$ConfigurableBlockEntityPropertiesType<never>>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurableBlockEntityPropertiesType}.
     */
    export type $ConfigurableBlockEntityPropertiesType_<T> = RegistryTypes.ElementalcraftConfigurableBlockEntityPropertiesType | { codec?: $MapCodec_<$IConfigurableBlockEntityProperties_>,  } | [codec?: $MapCodec_<$IConfigurableBlockEntityProperties_>, ];
    export class $IConfigurableBlockEntityProperties {
        static createKey(arg0: string): $ResourceKey<$IConfigurableBlockEntityProperties>;
        static CODEC: $Codec<$IConfigurableBlockEntityProperties>;
    }
    export interface $IConfigurableBlockEntityProperties {
        getType(): $ConfigurableBlockEntityPropertiesType<never>;
        get type(): $ConfigurableBlockEntityPropertiesType<never>;
    }
    /**
     * Values that may be interpreted as {@link $IConfigurableBlockEntityProperties}.
     */
    export type $IConfigurableBlockEntityProperties_ = (() => $ConfigurableBlockEntityPropertiesType_<never>);
    export interface $ConfigurableBlockEntityPropertiesType<T> extends RegistryMarked<RegistryTypes.ElementalcraftConfigurableBlockEntityPropertiesTypeTag, RegistryTypes.ElementalcraftConfigurableBlockEntityPropertiesType> {}
}
