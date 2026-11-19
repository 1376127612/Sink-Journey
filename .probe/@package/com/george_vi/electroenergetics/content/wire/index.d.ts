import { $Level_ } from "@package/net/minecraft/world/level";
import { $LevelRenderer, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $InWorldNodeConnection } from "@package/com/george_vi/electroenergetics/foundation/nodes";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WireData, $InfrastructureSavedData, $InWorldNodeData } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as interaction from "@package/com/george_vi/electroenergetics/content/wire/interaction";

declare module "@package/com/george_vi/electroenergetics/content/wire" {
    export class $WireSync {
        static getViewDistance(): number;
        handleWireRepositioned(arg0: $InWorldNodeConnection, arg1: $WireData): void;
        handlePlayerEnterNewSection(arg0: $ServerPlayer, arg1: number): void;
        unloadForPlayer(arg0: $ServerPlayer): void;
        handleWireAdded(arg0: $InWorldNodeConnection, arg1: $WireData): void;
        handleNodeLabelRename(arg0: $InWorldNodeData): void;
        handleCatenaryAdded(arg0: $BlockPos_, arg1: $BlockPos_): void;
        handleNodeMoved(arg0: $InWorldNodeData): void;
        handleWireRemoved(arg0: $InWorldNodeConnection): void;
        handleNodeCreate(arg0: $InWorldNodeData): void;
        handleNodeRemove(arg0: $InWorldNodeData): void;
        handleCatenaryRemoved(arg0: $BlockPos_, arg1: $BlockPos_): void;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel);
        static get viewDistance(): number;
    }
    export interface $WireAttachmentType extends RegistryMarked<RegistryTypes.ElectroenergeticsWireAttachmentTypeTag, RegistryTypes.ElectroenergeticsWireAttachmentType> {}
    export class $WireAttachmentType {
        getHeight(arg0: $WireAttachment): number;
        getItemRequirements(arg0: $WireAttachment): $List<$ItemStack>;
        renderChain(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number): void;
        getWidth(arg0: $WireAttachment): number;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $LevelRenderer, arg3: $WireAttachment, arg4: $Vec3_, arg5: number, arg6: number): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $WireAttachment, arg3: $Vec3_, arg4: number, arg5: number): void;
        getDrops(arg0: $WireAttachment, arg1: $Level_): $List<$ItemStack>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $WireAttachmentType}.
     */
    export type $WireAttachmentType_ = RegistryTypes.ElectroenergeticsWireAttachmentType;
    export class $WireAttachment {
        getItemRequirement(): $List<$ItemStack>;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $WireAttachment;
        getWidth(): number;
        getDrops(arg0: $Level_): $List<$ItemStack>;
        data: $CompoundTag;
        type: $WireAttachmentType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WireAttachment>;
        constructor(arg0: $WireAttachmentType_);
        get itemRequirement(): $List<$ItemStack>;
        get width(): number;
    }
}
