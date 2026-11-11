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
        onSet(arg0: $PartHelpers$PartStateHolder<never, never>): void;
        updateRedstoneInfo(arg0: $Direction_, arg1: boolean): void;
        getRedstoneLevels(): $EnumFacingMap<number>;
        updateLightInfo(): void;
        getRedstoneStrong(): $EnumFacingMap<boolean>;
        getRedstoneInputs(): $EnumFacingMap<boolean>;
        canStopTicking(): boolean;
        setFacadeBlockTag(arg0: $CompoundTag_): void;
        getFacadeBlockTag(): $CompoundTag;
        getForceDisconnected(): $EnumFacingMap<boolean>;
        setForceDisconnected(arg0: $EnumFacingMap<boolean>): void;
        getLastRedstonePulses(): $EnumFacingMap<number>;
        updateScheduledPulses(): void;
        setForceLightCheckAtClient(arg0: boolean): void;
        getScheduledPulseRemaining(): $EnumFacingMap<number>;
        getConnectionState(): $ModelData;
        getNetwork(): $INetwork;
        isTicking(): boolean;
        getCable(): $CableTileMultipartTicking;
        getConnected(): $EnumFacingMap<boolean>;
        getNetworkCarrier(): $INetworkCarrier;
        getPartContainer(): $PartContainerTileMultipartTicking;
        static registerMultipartTickingCapabilities(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>): void;
        getCableFakeable(): $ICableFakeable;
        getLightLevels(): $EnumFacingMap<number>;
        static registerPartCapabilityAsBlockCapability<T>(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>, arg2: $BlockCapability<T, $Direction_>, arg3: $PartCapability<T>): void;
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
        get redstoneLevels(): $EnumFacingMap<number>;
        get redstoneStrong(): $EnumFacingMap<boolean>;
        get redstoneInputs(): $EnumFacingMap<boolean>;
        get lastRedstonePulses(): $EnumFacingMap<number>;
        set forceLightCheckAtClient(value: boolean);
        get scheduledPulseRemaining(): $EnumFacingMap<number>;
        get connectionState(): $ModelData;
        get network(): $INetwork;
        get ticking(): boolean;
        get cable(): $CableTileMultipartTicking;
        get connected(): $EnumFacingMap<boolean>;
        get networkCarrier(): $INetworkCarrier;
        get partContainer(): $PartContainerTileMultipartTicking;
        get cableFakeable(): $ICableFakeable;
        get lightLevels(): $EnumFacingMap<number>;
    }
}
