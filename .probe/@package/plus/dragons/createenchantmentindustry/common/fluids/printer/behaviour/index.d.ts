import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $PrinterBlockEntity } from "@package/plus/dragons/createenchantmentindustry/common/fluids/printer";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $DataResult } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Record } from "@package/java/lang";

declare module "@package/plus/dragons/createenchantmentindustry/common/fluids/printer/behaviour" {
    export class $PrintingBehaviour$Provider {
    }
    export interface $PrintingBehaviour$Provider {
        create(arg0: $Level_, arg1: $SmartFluidTankBehaviour, arg2: $ItemStack_): ($DataResult<$PrintingBehaviour>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $PrintingBehaviour$Provider}.
     */
    export type $PrintingBehaviour$Provider_ = ((arg0: $Level, arg1: $SmartFluidTankBehaviour, arg2: $ItemStack) => ($DataResult<$PrintingBehaviour>) | undefined);
    export class $PrintingBehaviourProvider extends $Record {
        priority(): number;
        provider(): $PrintingBehaviour$Provider;
        static DEFAULT_PRIORITY: number;
        static BUILTIN_PRIORITY: number;
        constructor(arg0: $PrintingBehaviour$Provider_);
        constructor(priority: number, provider: $PrintingBehaviour$Provider_);
    }
    /**
     * Values that may be interpreted as {@link $PrintingBehaviourProvider}.
     */
    export type $PrintingBehaviourProvider_ = RegistryTypes.CreateEnchantmentIndustryPrintingBehaviour | { provider?: $PrintingBehaviour$Provider_, priority?: number,  } | [provider?: $PrintingBehaviour$Provider_, priority?: number, ];
    export interface $PrintingBehaviourProvider extends RegistryMarked<RegistryTypes.CreateEnchantmentIndustryPrintingBehaviourTag, RegistryTypes.CreateEnchantmentIndustryPrintingBehaviour> {}
    export class $PrintingBehaviour {
        static create(arg0: $Level_, arg1: $SmartFluidTankBehaviour, arg2: $ItemStack_): $DataResult<$PrintingBehaviour>;
        static REGISTRY: $Registry<$PrintingBehaviourProvider>;
    }
    export interface $PrintingBehaviour extends $IHaveGoggleInformation {
        getResult(arg0: $Level_, arg1: $ItemStack_, arg2: $FluidStack_): $ItemStack;
        isValid(): boolean;
        getRequiredItemCount(arg0: $Level_, arg1: $ItemStack_): number;
        getRequiredFluidAmount(arg0: $Level_, arg1: $ItemStack_, arg2: $FluidStack_): number;
        onFinished(arg0: $Level_, arg1: $BlockPos_, arg2: $PrinterBlockEntity): void;
        isSafeNBT(): boolean;
        get valid(): boolean;
        get safeNBT(): boolean;
    }
}
