import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";

declare module "@package/it/zerono/mods/zerocore/lib/multiblock/variant" {
    export class $IMultiblockVariant {
    }
    export interface $IMultiblockVariant {
        getBlockProperties(): $BlockBehaviour$Properties;
        getTranslationKey(): string;
        getDefaultBlockProperties(): $BlockBehaviour$Properties;
        getName(): string;
        getId(): number;
        get blockProperties(): $BlockBehaviour$Properties;
        get translationKey(): string;
        get defaultBlockProperties(): $BlockBehaviour$Properties;
        get name(): string;
        get id(): number;
    }
}
