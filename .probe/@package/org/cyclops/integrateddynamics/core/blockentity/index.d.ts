import { $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PartHelpers$IPartStateHolderCallback, $PartHelpers$PartStateHolder } from "@package/org/cyclops/integrateddynamics/core/helper";
import { $PartContainerTileMultipartTicking } from "@package/org/cyclops/integrateddynamics/capability/partcontainer";
import { $CableTileMultipartTicking } from "@package/org/cyclops/integrateddynamics/capability/cable";
import { $PartCapability } from "@package/org/cyclops/integrateddynamics/api/part";
import { $CyclopsBlockEntity } from "@package/org/cyclops/cyclopscore/blockentity";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $INetworkCarrier, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $EnumFacingMap } from "@package/org/cyclops/cyclopscore/datastructure";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $ICableFakeable } from "@package/org/cyclops/integrateddynamics/api/block/cable";

declare module "@package/org/cyclops/integrateddynamics/core/blockentity" {
    export class $BlockEntityMultipartTicking extends $CyclopsBlockEntity implements $PartHelpers$IPartStateHolderCallback {
        isTicking(): boolean;
        getConnected(): $EnumFacingMap<boolean>;
        getNetworkCarrier(): $INetworkCarrier;
        static registerMultipartTickingCapabilities(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>): void;
        getCable(): $CableTileMultipartTicking;
        getCableFakeable(): $ICableFakeable;
        getLightLevels(): $EnumFacingMap<number>;
        getPartContainer(): $PartContainerTileMultipartTicking;
        getScheduledPulseRemaining(): $EnumFacingMap<number>;
        setForceLightCheckAtClient(arg0: boolean): void;
        setForceDisconnected(arg0: $EnumFacingMap<boolean>): void;
        updateScheduledPulses(): void;
        getLastRedstonePulses(): $EnumFacingMap<number>;
        getForceDisconnected(): $EnumFacingMap<boolean>;
        onSet(arg0: $PartHelpers$PartStateHolder<never, never>): void;
        static registerPartCapabilityAsBlockCapability<T>(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>, arg2: $BlockCapability<T, $Direction_>, arg3: $PartCapability<T>): void;
        getRedstoneInputs(): $EnumFacingMap<boolean>;
        canStopTicking(): boolean;
        getRedstoneLevels(): $EnumFacingMap<number>;
        updateRedstoneInfo(arg0: $Direction_, arg1: boolean): void;
        getFacadeBlockTag(): $CompoundTag;
        updateLightInfo(): void;
        getRedstoneStrong(): $EnumFacingMap<boolean>;
        setFacadeBlockTag(arg0: $CompoundTag_): void;
        getConnectionState(): $ModelData;
        getNetwork(): $INetwork;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get ticking(): boolean;
        get connected(): $EnumFacingMap<boolean>;
        get networkCarrier(): $INetworkCarrier;
        get cable(): $CableTileMultipartTicking;
        get cableFakeable(): $ICableFakeable;
        get lightLevels(): $EnumFacingMap<number>;
        get partContainer(): $PartContainerTileMultipartTicking;
        get scheduledPulseRemaining(): $EnumFacingMap<number>;
        set forceLightCheckAtClient(value: boolean);
        get lastRedstonePulses(): $EnumFacingMap<number>;
        get redstoneInputs(): $EnumFacingMap<boolean>;
        get redstoneLevels(): $EnumFacingMap<number>;
        get redstoneStrong(): $EnumFacingMap<boolean>;
        get connectionState(): $ModelData;
        get network(): $INetwork;
    }
}
