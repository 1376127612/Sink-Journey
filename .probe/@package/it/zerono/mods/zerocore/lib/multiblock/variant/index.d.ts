import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";

declare module "@package/it/zerono/mods/zerocore/lib/multiblock/variant" {
    export class $IMultiblockVariant {
    }
    export interface $IMultiblockVariant {
        getName(): string;
        getId(): number;
        getTranslationKey(): string;
        getDefaultBlockProperties(): $BlockBehaviour$Properties;
        getBlockProperties(): $BlockBehaviour$Properties;
        get name(): string;
        get id(): number;
        get translationKey(): string;
        get defaultBlockProperties(): $BlockBehaviour$Properties;
        get blockProperties(): $BlockBehaviour$Properties;
    }
}
