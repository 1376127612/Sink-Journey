import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $INetwork, $IPartNetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EnumFacingMap, $DimPos } from "@package/org/cyclops/cyclopscore/datastructure";
import { $PartHelpers$PartStateHolder } from "@package/org/cyclops/integrateddynamics/core/helper";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map_, $Map } from "@package/java/util";
import { $IPartContainer, $IPartType, $IPartState, $PartCapability, $PartTarget } from "@package/org/cyclops/integrateddynamics/api/part";
import { $BlockEntityMultipartTicking } from "@package/org/cyclops/integrateddynamics/core/blockentity";

declare module "@package/org/cyclops/integrateddynamics/capability/partcontainer" {
    export class $PartContainerTileMultipartTicking extends $PartContainerDefault {
        constructor(arg0: $BlockEntityMultipartTicking);
    }
    export class $PartContainerDefault implements $IPartContainer {
        hasParts(): boolean;
        setPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>, arg2: $IPartState<P>): void;
        update(): void;
        hasPart(arg0: $Direction_): boolean;
        setPartState(arg0: $Direction_, arg1: $IPartState<any>): void;
        getCapability<T>(arg0: $PartCapability<T>, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): (T) | undefined;
        getPosition(): $DimPos;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getParts(): $Map<$Direction, $IPartType<never, never>>;
        getPart(arg0: $Direction_): $IPartType<any, any>;
        canAddPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>): boolean;
        removePart(arg0: $Direction_, arg1: $Player, arg2: boolean, arg3: boolean): $IPartType<any, any>;
        getPartState(arg0: $Direction_): $IPartState<any>;
        getPartData(): $EnumFacingMap<$PartHelpers$PartStateHolder<never, never>>;
        silentResetPartData(): void;
        setPartData(arg0: $Map_<$Direction_, $PartHelpers$PartStateHolder<never, never>>): void;
        constructor();
        get position(): $DimPos;
        get parts(): $Map<$Direction, $IPartType<never, never>>;
    }
}
