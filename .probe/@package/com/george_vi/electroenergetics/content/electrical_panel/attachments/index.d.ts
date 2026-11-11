import { $ItemLike, $Level, $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $ElectricalPanelSlot_, $PanelAttachmentMode, $ElectricalPanelSlot, $PanelAttachmentMode_, $ElectricalPanelBlockEntity } from "@package/com/george_vi/electroenergetics/content/electrical_panel";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $InWorldNode } from "@package/com/george_vi/electroenergetics/foundation/nodes";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SimulationResults, $BridgeCollector } from "@package/com/george_vi/electroenergetics/simulation";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/george_vi/electroenergetics/content/electrical_panel/attachments" {
    export interface $PanelAttachmentType extends RegistryMarked<RegistryTypes.ElectroenergeticsPanelAttachmentTypeTag, RegistryTypes.ElectroenergeticsPanelAttachmentType> {}
    export class $PanelAttachmentType$PanelAttachmentFactory {
    }
    export interface $PanelAttachmentType$PanelAttachmentFactory {
        create(arg0: $PanelAttachmentType_): $PanelAttachment;
    }
    /**
     * Values that may be interpreted as {@link $PanelAttachmentType$PanelAttachmentFactory}.
     */
    export type $PanelAttachmentType$PanelAttachmentFactory_ = ((arg0: $PanelAttachmentType) => $PanelAttachment);
    export class $PanelAttachment {
        transformPose(arg0: $PoseStack, arg1: $ElectricalPanelBlockEntity): void;
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: boolean, arg2: $HolderLookup$Provider): void;
        read(arg0: $CompoundTag_, arg1: boolean, arg2: $HolderLookup$Provider): void;
        render(arg0: $ElectricalPanelBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        onInserted(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $BlockHitResult): void;
        defaultDroppedStack(): $ItemStack;
        preTick(arg0: $BridgeCollector): void;
        postTick(arg0: $SimulationResults): void;
        onRemoved(arg0: $Player): void;
        tickClient(arg0: $ElectricalPanelBlockEntity): void;
        addToTooltip(arg0: $ElectricalPanelBlockEntity, arg1: $List_<$Component_>, arg2: boolean): boolean;
        getDrops(): $List<$ItemStack>;
        getCenter(): $Vec3;
        sendData(): void;
        addToGoggleTooltip(arg0: $ElectricalPanelBlockEntity, arg1: $List_<$Component_>, arg2: boolean): boolean;
        getNodeSize(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): number;
        getNodeLabel(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $MutableComponent;
        onInteract(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $BlockHitResult): $ItemInteractionResult;
        renderLabel(arg0: $ElectricalPanelBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        nodes: $InWorldNode[];
        panelFacing: $Direction;
        pos: $BlockPos;
        level: $Level;
        slot: $ElectricalPanelSlot;
        label: string;
        type: $PanelAttachmentType;
        constructor(arg0: $PanelAttachmentType_);
        get drops(): $List<$ItemStack>;
        get center(): $Vec3;
    }
    export class $PanelAttachmentType {
        createNew(arg0: $BlockPos_, arg1: $InWorldNode[], arg2: $Level_, arg3: $ElectricalPanelSlot_, arg4: $Direction_, arg5: $HolderLookup$Provider): $PanelAttachment;
        static getForItem(arg0: $ItemStack_): $PanelAttachmentType;
        mode: $PanelAttachmentMode;
        item: $ItemLike;
        constructor(arg0: $PanelAttachmentType$PanelAttachmentFactory_, arg1: $ItemLike_, arg2: $PanelAttachmentMode_);
    }
    /**
     * Values that may be interpreted as {@link $PanelAttachmentType}.
     */
    export type $PanelAttachmentType_ = RegistryTypes.ElectroenergeticsPanelAttachmentType;
}
