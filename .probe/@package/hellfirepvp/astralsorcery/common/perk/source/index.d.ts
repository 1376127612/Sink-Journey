import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection_, $Collection } from "@package/java/util";
import { $LogicalSide_, $LogicalSide } from "@package/net/neoforged/fml";
import { $PerkAttributeModifier_, $PerkAttributeModifier } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/perk/source" {
    export class $AttributeModifierProvider {
    }
    export interface $AttributeModifierProvider {
        getModifiers(arg0: $Player, arg1: $LogicalSide_, arg2: boolean): $Collection<$PerkAttributeModifier>;
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifierProvider}.
     */
    export type $AttributeModifierProvider_ = ((arg0: $Player, arg1: $LogicalSide, arg2: boolean) => $Collection_<$PerkAttributeModifier_>);
    export class $ModifierSource {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ModifierSource>;
    }
    export interface $ModifierSource {
        isEqual(arg0: $ModifierSource): boolean;
        onApply(arg0: $Player, arg1: $LogicalSide_): void;
        onRemove(arg0: $Player, arg1: $LogicalSide_): void;
        getSourceProvider(): $ModifierSourceProvider<never>;
        canApplySource(arg0: $Player, arg1: $LogicalSide_): boolean;
        get sourceProvider(): $ModifierSourceProvider<never>;
    }
    export class $ModifierSourceProvider<T extends $ModifierSource> {
        getModifierSourceSyncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor();
        get modifierSourceSyncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $ModifierSourceProvider}.
     */
    export type $ModifierSourceProvider_<T> = RegistryTypes.AstralsorceryPerkModifierSources;
    export interface $ModifierSourceProvider<T> extends RegistryMarked<RegistryTypes.AstralsorceryPerkModifierSourcesTag, RegistryTypes.AstralsorceryPerkModifierSources> {}
}
