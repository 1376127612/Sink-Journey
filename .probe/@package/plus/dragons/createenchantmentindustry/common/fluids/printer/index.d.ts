import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BeltProcessingBehaviour$ProcessingResult, $TransportedItemStackHandlerBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
export * as behaviour from "@package/plus/dragons/createenchantmentindustry/common/fluids/printer/behaviour";

declare module "@package/plus/dragons/createenchantmentindustry/common/fluids/printer" {
    export class $PrinterBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        onItemHeld(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult;
        getFluidHandler(arg0: $Direction_): $IFluidHandler;
        onItemEnters(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        static PROCESSING_TIME: number;
        processingTicks: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
