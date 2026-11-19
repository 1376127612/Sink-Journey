import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        showCapacityWithAnnotation(): boolean;
        hideStressImpact(): boolean;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        getTextColor(): $ChatFormatting;
        getSpeedValue(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getParticleSpeed(): number;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get textColor(): $ChatFormatting;
        get speedValue(): number;
        get particleSpeed(): number;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation {
        hasNetwork(): boolean;
        hasSource(): boolean;
        setNetwork(arg0: number): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        isOverStressed(): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        warnOfMovement(): void;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        calculateAddedStressCapacity(): number;
        isSpeedRequirementFulfilled(): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        setSource(arg0: $BlockPos_): void;
        setSpeed(arg0: number): void;
        isSource(): boolean;
        removeSource(): void;
        detachKinetics(): void;
        onSpeedChanged(arg0: number): void;
        getGeneratedSpeed(): number;
        attachKinetics(): void;
        needsSpeedUpdate(): boolean;
        getFlickerScore(): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        tickAudio(): void;
        clearKineticInformation(): void;
        calculateStressApplied(): number;
        getTheoreticalSpeed(): number;
        getSpeed(): number;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        static LOGGER: $Logger;
        preventSpeedUpdate: number;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get overStressed(): boolean;
        get speedRequirementFulfilled(): boolean;
        get orCreateNetwork(): $KineticNetwork;
        get generatedSpeed(): number;
        get flickerScore(): number;
        get theoreticalSpeed(): number;
    }
}
