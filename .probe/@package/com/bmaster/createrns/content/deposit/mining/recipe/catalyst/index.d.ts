import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $RegistryAccess, $Registry, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $List, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";

declare module "@package/com/bmaster/createrns/content/deposit/mining/recipe/catalyst" {
    export class $AttachmentCatalystRequirement extends $CatalystRequirement {
        static CODEC: $Codec<$CatalystRequirement>;
        attachment: $HolderSet<$Block>;
        static MAP_CODEC: $MapCodec<$AttachmentCatalystRequirement>;
        count: number;
        constructor(arg0: $HolderSet_<$Block>, arg1: number);
    }
    export class $CatalystRequirementType<T extends $CatalystRequirement> {
        name(): string;
        mapCodec(): $MapCodec<T>;
        static ATTACHMENT: $CatalystRequirementType<$AttachmentCatalystRequirement>;
        static CODEC: $Codec<$CatalystRequirementType<never>>;
        static FLUID: $CatalystRequirementType<$FluidCatalystRequirement>;
    }
    export class $FluidCatalystRequirement extends $CatalystRequirement {
        static CODEC: $Codec<$CatalystRequirement>;
        static MAP_CODEC: $MapCodec<$FluidCatalystRequirement>;
        fluidStack: $FluidStack;
        constructor(arg0: $FluidStack_);
    }
    export class $Catalyst {
        constructor();
    }
    export class $CatalystRequirement {
        type(): $CatalystRequirementType<never>;
        isSatisfiedBy(arg0: $Collection_<$Catalyst>): boolean;
        useCatalysts(arg0: $Collection_<$Catalyst>, arg1: boolean): boolean;
        relevantCatalystTypes(): $Set<$Class<$Catalyst>>;
        static CODEC: $Codec<$CatalystRequirement>;
        constructor();
    }
    export interface $CatalystRequirementSet extends RegistryMarked<RegistryTypes.CreateRnsCatalystTag, RegistryTypes.CreateRnsCatalyst> {}
    export class $CatalystRequirementSet {
        static get(arg0: $RegistryAccess, arg1: $ResourceLocation_): $Holder<$CatalystRequirementSet>;
        static id(arg0: $Holder_<$CatalystRequirementSet>): $ResourceLocation;
        static getDescriptionComponent(arg0: $Holder_<$CatalystRequirementSet>): $MutableComponent;
        useCatalysts(arg0: $List_<$Catalyst>, arg1: boolean): boolean;
        static getNameComponent(arg0: $Holder_<$CatalystRequirementSet>): $MutableComponent;
        static getNameComponent(arg0: $Collection_<$Holder_<$CatalystRequirementSet>>, arg1: $Holder_<$CatalystRequirementSet>): $MutableComponent;
        isSatisfiableOrOptional(arg0: $Set_<$Catalyst>): boolean;
        getRelevantCatalysts(arg0: $Set_<$Catalyst>): $Set<$Catalyst>;
        representativeItems: $List<$Item>;
        requirements: $List<$CatalystRequirement>;
        static CODEC: $Codec<$CatalystRequirementSet>;
        chanceMult: number;
        hideIfPresentIds: $List<$ResourceLocation>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$CatalystRequirementSet>>;
        sound: $SoundEvent;
        optional: boolean;
        displayPriority: number;
        hideIfPresent: $List<$Holder<$CatalystRequirementSet>>;
        constructor(arg0: number, arg1: boolean, arg2: number, arg3: $List_<$Item_>, arg4: $List_<$Holder_<$CatalystRequirementSet>>, arg5: ($Holder_<$SoundEvent>) | undefined, arg6: $List_<$CatalystRequirement>);
    }
    /**
     * Values that may be interpreted as {@link $CatalystRequirementSet}.
     */
    export type $CatalystRequirementSet_ = RegistryTypes.CreateRnsCatalyst;
}
