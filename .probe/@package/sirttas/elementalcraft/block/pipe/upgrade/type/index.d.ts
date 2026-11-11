import { $ItemLike } from "@package/net/minecraft/world/level";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ElementPipeBlockEntity } from "@package/sirttas/elementalcraft/block/pipe";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $PipeUpgrade } from "@package/sirttas/elementalcraft/block/pipe/upgrade";

declare module "@package/sirttas/elementalcraft/block/pipe/upgrade/type" {
    export interface $PipeUpgradeType<T> extends RegistryMarked<RegistryTypes.ElementalcraftPipeUpgradeTypeTag, RegistryTypes.ElementalcraftPipeUpgradeType> {}
    export class $PipeUpgradeType<T extends $PipeUpgrade> implements $ItemLike {
        getKey(): $ResourceLocation;
        create(arg0: $ElementPipeBlockEntity, arg1: $Direction_): T;
        getDescriptionId(): string;
        getModel(): $BakedModel;
        getLootTable(): $ResourceKey<$LootTable>;
        asItem(): $Item;
        factory: $PipeUpgradeType$Factory<T>;
        constructor(arg0: $PipeUpgradeType$Factory_<T>);
        get key(): $ResourceLocation;
        get descriptionId(): string;
        get model(): $BakedModel;
        get lootTable(): $ResourceKey<$LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $PipeUpgradeType}.
     */
    export type $PipeUpgradeType_<T> = RegistryTypes.ElementalcraftPipeUpgradeType;
    export class $PipeUpgradeType$Factory<T extends $PipeUpgrade> {
    }
    export interface $PipeUpgradeType$Factory<T extends $PipeUpgrade> {
        create(arg0: $ElementPipeBlockEntity, arg1: $Direction_): T;
    }
    /**
     * Values that may be interpreted as {@link $PipeUpgradeType$Factory}.
     */
    export type $PipeUpgradeType$Factory_<T> = ((arg0: $ElementPipeBlockEntity, arg1: $Direction) => T);
}
