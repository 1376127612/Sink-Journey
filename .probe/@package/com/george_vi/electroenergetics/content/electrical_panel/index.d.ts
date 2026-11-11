import { $Level } from "@package/net/minecraft/world/level";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $PanelAttachment } from "@package/com/george_vi/electroenergetics/content/electrical_panel/attachments";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Map, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InWorldNode } from "@package/com/george_vi/electroenergetics/foundation/nodes";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as attachments from "@package/com/george_vi/electroenergetics/content/electrical_panel/attachments";

declare module "@package/com/george_vi/electroenergetics/content/electrical_panel" {
    export class $PanelAttachmentMode extends $Enum<$PanelAttachmentMode> {
        getSlot(arg0: $Direction_, arg1: $Vec3_, arg2: $PanelAttachment[]): $ElectricalPanelSlot;
        static values(): $PanelAttachmentMode[];
        static valueOf(arg0: string): $PanelAttachmentMode;
        getNodesFor(arg0: $BlockPos_, arg1: $ElectricalPanelSlot_): $InWorldNode[];
        static THIRD: $PanelAttachmentMode;
        static FULL_SINGLE: $PanelAttachmentMode;
        static HALF_OR_THIRD_OR_SMOL: $PanelAttachmentMode;
        static FULL_NONE: $PanelAttachmentMode;
        static FULL_TRIPLE: $PanelAttachmentMode;
        static HALF_OR_THIRD_NONE: $PanelAttachmentMode;
        static FULL_OR_HALF_NONE: $PanelAttachmentMode;
        static FULL_DOUBLE: $PanelAttachmentMode;
        static HALF: $PanelAttachmentMode;
        static HALF_ONLY_HORIZONTAL: $PanelAttachmentMode;
        static FULL_QUAD: $PanelAttachmentMode;
        static HALF_NONE: $PanelAttachmentMode;
        nodes: number;
        possibleSlots: $ElectricalPanelSlot[];
        static HALF_ONLY_VERTICAL: $PanelAttachmentMode;
        static QUARTER_NONE: $PanelAttachmentMode;
        static FULL_OR_HALF: $PanelAttachmentMode;
        static HALF_OR_THIRD: $PanelAttachmentMode;
        static HALF_OR_THIRD_OR_SMOL_NONE: $PanelAttachmentMode;
    }
    /**
     * Values that may be interpreted as {@link $PanelAttachmentMode}.
     */
    export type $PanelAttachmentMode_ = "full_none" | "full_single" | "full_double" | "full_triple" | "full_quad" | "quarter_none" | "half_none" | "half" | "full_or_half_none" | "full_or_half" | "half_or_third" | "half_or_third_none" | "half_or_third_or_smol_none" | "half_or_third_or_smol" | "half_only_horizontal" | "half_only_vertical" | "third";
    export class $ElectricalPanelSlot extends $Enum<$ElectricalPanelSlot> implements $StringRepresentable {
        static values(): $ElectricalPanelSlot[];
        static valueOf(arg0: string): $ElectricalPanelSlot;
        getSerializedName(): string;
        static byId(arg0: string): $ElectricalPanelSlot;
        isSixth(): boolean;
        getRemappedEnumConstantName(): string;
        static QUARTER_CENTER: $ElectricalPanelSlot;
        static THIRD_RIGHT: $ElectricalPanelSlot;
        static HALF_LEFT: $ElectricalPanelSlot;
        static FULL_SLOT: $ElectricalPanelSlot;
        static THIRD_LEFT: $ElectricalPanelSlot;
        isHorizontal: boolean;
        static HALF_LOWER: $ElectricalPanelSlot;
        nodeSize: number;
        static QUARTER_LEFT_UPPER: $ElectricalPanelSlot;
        static QUARTER_RIGHT_UPPER: $ElectricalPanelSlot;
        static THIRD_LEFT_BOTTOM: $ElectricalPanelSlot;
        leftOffset: number;
        static THIRD_LEFT_TOP: $ElectricalPanelSlot;
        fullWidth: number;
        shape: $AABB;
        static HALF_RIGHT: $ElectricalPanelSlot;
        center: $Vec3;
        static THIRD_CENTERED: $ElectricalPanelSlot;
        static THIRD_RIGHT_TOP: $ElectricalPanelSlot;
        static THIRD_CENTERED_BOTTOM: $ElectricalPanelSlot;
        topOffset: number;
        static HALF_UPPER: $ElectricalPanelSlot;
        static QUARTER_LEFT_LOWER: $ElectricalPanelSlot;
        static QUARTER_RIGHT_LOWER: $ElectricalPanelSlot;
        static THIRD_RIGHT_BOTTOM: $ElectricalPanelSlot;
        static THIRD_CENTERED_TOP: $ElectricalPanelSlot;
        get serializedName(): string;
        get sixth(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ElectricalPanelSlot}.
     */
    export type $ElectricalPanelSlot_ = "full_slot" | "half_upper" | "half_lower" | "half_left" | "half_right" | "third_left" | "third_centered" | "third_right" | "third_left_top" | "third_centered_top" | "third_right_top" | "third_left_bottom" | "third_centered_bottom" | "third_right_bottom" | "quarter_center" | "quarter_left_upper" | "quarter_left_lower" | "quarter_right_upper" | "quarter_right_lower";
    export class $ElectricalPanelBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $SpecialBlockEntityItemRequirement {
        getHoveringAttachmentIndex(arg0: $Vec3_): $ElectricalPanelSlot;
        getAttachments(): $PanelAttachment[];
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        setAttachments(arg0: $PanelAttachment[]): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getNodePositions(): $Map<number, $Vec3>;
        attachmentUpdate(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get nodePositions(): $Map<number, $Vec3>;
    }
}
