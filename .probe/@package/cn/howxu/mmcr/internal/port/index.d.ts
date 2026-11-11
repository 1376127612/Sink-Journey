import { $CapabilityType_ } from "@package/cn/howxu/mmcr/api/capability";
import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $PortDefinition } from "@package/cn/howxu/mmcr/api/port";
import { $IOPortBlockEntity } from "@package/cn/howxu/mmcr/internal/tile";
import { $List, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $CapabilityBinding_, $CapabilityBinding } from "@package/cn/howxu/mmcr/api/capability/type";
import { $BlockEntityType, $BlockEntityType$BlockEntitySupplier, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/cn/howxu/mmcr/internal/port" {
    export class $EnergyHatchSize extends $Enum<$EnergyHatchSize> {
        static values(): $EnergyHatchSize[];
        static valueOf(name: string): $EnergyHatchSize;
        id(): string;
        capacity(): number;
        transfer(): number;
        static BIG: $EnergyHatchSize;
        static SMALL: $EnergyHatchSize;
        static LUDICROUS: $EnergyHatchSize;
        static TINY: $EnergyHatchSize;
        static REINFORCED: $EnergyHatchSize;
        static HUGE: $EnergyHatchSize;
        static ULTIMATE: $EnergyHatchSize;
        static NORMAL: $EnergyHatchSize;
    }
    /**
     * Values that may be interpreted as {@link $EnergyHatchSize}.
     */
    export type $EnergyHatchSize_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "ultimate";
    export class $ItemBusSize extends $Enum<$ItemBusSize> {
        static values(): $ItemBusSize[];
        static valueOf(name: string): $ItemBusSize;
        id(): string;
        slots(): number;
        static BIG: $ItemBusSize;
        static SMALL: $ItemBusSize;
        static LUDICROUS: $ItemBusSize;
        static TINY: $ItemBusSize;
        static REINFORCED: $ItemBusSize;
        static HUGE: $ItemBusSize;
        static NORMAL: $ItemBusSize;
    }
    /**
     * Values that may be interpreted as {@link $ItemBusSize}.
     */
    export type $ItemBusSize_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous";
    export class $ExtendedEnergyHatchSize extends $Enum<$ExtendedEnergyHatchSize> {
        static values(): $ExtendedEnergyHatchSize[];
        static valueOf(name: string): $ExtendedEnergyHatchSize;
        id(): string;
        capacity(): number;
        transfer(): number;
        static REINFORCED: $ExtendedEnergyHatchSize;
        static ULTIMATE: $ExtendedEnergyHatchSize;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedEnergyHatchSize}.
     */
    export type $ExtendedEnergyHatchSize_ = "reinforced" | "ultimate";
    export class $ExtendedItemBusSize extends $Enum<$ExtendedItemBusSize> {
        static values(): $ExtendedItemBusSize[];
        static valueOf(name: string): $ExtendedItemBusSize;
        id(): string;
        slots(): number;
        static REINFORCED: $ExtendedItemBusSize;
        static ULTIMATE: $ExtendedItemBusSize;
        static BASIC: $ExtendedItemBusSize;
        static ADVANCED: $ExtendedItemBusSize;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedItemBusSize}.
     */
    export type $ExtendedItemBusSize_ = "basic" | "advanced" | "reinforced" | "ultimate";
    export class $CombinedPortSize extends $Enum<$CombinedPortSize> {
        static values(): $CombinedPortSize[];
        static valueOf(name: string): $CombinedPortSize;
        id(): string;
        itemTypes(): number;
        fluidTypes(): number;
        itemTier(): number;
        fluidTier(): number;
        static REINFORCED: $CombinedPortSize;
        static ULTIMATE: $CombinedPortSize;
        static BASIC: $CombinedPortSize;
        static ADVANCED: $CombinedPortSize;
    }
    /**
     * Values that may be interpreted as {@link $CombinedPortSize}.
     */
    export type $CombinedPortSize_ = "basic" | "advanced" | "reinforced" | "ultimate";
    export class $FluidHatchSize extends $Enum<$FluidHatchSize> {
        static values(): $FluidHatchSize[];
        static valueOf(name: string): $FluidHatchSize;
        id(): string;
        capacity(): number;
        static BIG: $FluidHatchSize;
        static VACUUM: $FluidHatchSize;
        static SMALL: $FluidHatchSize;
        static LUDICROUS: $FluidHatchSize;
        static TINY: $FluidHatchSize;
        static REINFORCED: $FluidHatchSize;
        static HUGE: $FluidHatchSize;
        static NORMAL: $FluidHatchSize;
    }
    /**
     * Values that may be interpreted as {@link $FluidHatchSize}.
     */
    export type $FluidHatchSize_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "vacuum";
    export class $ExtendedCombinedPortSize extends $Enum<$ExtendedCombinedPortSize> {
        static values(): $ExtendedCombinedPortSize[];
        static valueOf(name: string): $ExtendedCombinedPortSize;
        id(): string;
        itemTypes(): number;
        fluidTypes(): number;
        itemTier(): number;
        fluidTier(): number;
        static REINFORCED: $ExtendedCombinedPortSize;
        static ULTIMATE: $ExtendedCombinedPortSize;
        static ADVANCED: $ExtendedCombinedPortSize;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedCombinedPortSize}.
     */
    export type $ExtendedCombinedPortSize_ = "advanced" | "reinforced" | "ultimate";
    export class $PortFamilyDescriptor extends $Record {
        matches(binding: $CapabilityBinding_): boolean;
        familyId(): $ResourceLocation;
        ioType(): $IOType;
        detectionTier(): number;
        countAliases(): $List<string>;
        constructor(familyId: $ResourceLocation_, ioType: $IOType_, detectionTier: number, countAliases: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $PortFamilyDescriptor}.
     */
    export type $PortFamilyDescriptor_ = { familyId?: $ResourceLocation_, countAliases?: $List_<string>, detectionTier?: number, ioType?: $IOType_,  } | [familyId?: $ResourceLocation_, countAliases?: $List_<string>, detectionTier?: number, ioType?: $IOType_, ];
    export class $ExtendedFluidHatchSize extends $Enum<$ExtendedFluidHatchSize> {
        static values(): $ExtendedFluidHatchSize[];
        static valueOf(name: string): $ExtendedFluidHatchSize;
        id(): string;
        slots(): number;
        static REINFORCED: $ExtendedFluidHatchSize;
        static ULTIMATE: $ExtendedFluidHatchSize;
        static BASIC: $ExtendedFluidHatchSize;
        static ADVANCED: $ExtendedFluidHatchSize;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedFluidHatchSize}.
     */
    export type $ExtendedFluidHatchSize_ = "basic" | "advanced" | "reinforced" | "ultimate";
    export class $IOPortKind {
        static binding(type: $CapabilityType_, ioType: $IOType_, families: $List_<$PortFamilyDescriptor_>): $CapabilityBinding;
    }
    export interface $IOPortKind {
        id(): string;
        bindings(): $List<$CapabilityBinding>;
        tick(be: $IOPortBlockEntity): void;
        modDependencies(): $List<string>;
        outputPriority(): number;
        ioType(): $IOType;
        definition(): $PortDefinition;
        families(): $List<$PortFamilyDescriptor>;
        energyHatchSize(): ($EnergyHatchSize) | undefined;
        itemBusSize(): ($ItemBusSize) | undefined;
        fluidHatchSize(): ($FluidHatchSize) | undefined;
        combinedPortSize(): ($CombinedPortSize) | undefined;
        createBlock(properties: $BlockBehaviour$Properties, type: $Supplier_<$BlockEntityType<never>>): $Block;
        extendedFluidHatchSize(): ($ExtendedFluidHatchSize) | undefined;
        extendedItemBusSize(): ($ExtendedItemBusSize) | undefined;
        extendedCombinedPortSize(): ($ExtendedCombinedPortSize) | undefined;
        extendedEnergyHatchSize(): ($ExtendedEnergyHatchSize) | undefined;
        entityFactory(): $BlockEntityType$BlockEntitySupplier<$BlockEntity>;
    }
    export class $MachinePort {
    }
    export interface $MachinePort {
        kind(): $IOPortKind;
        onMachineFormed(controllerPos: $BlockPos_): void;
        onMachineUnformed(controllerPos: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $MachinePort}.
     */
    export type $MachinePort_ = (() => $IOPortKind);
}
