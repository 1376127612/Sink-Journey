import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ITerminalStorageTabCommon$IVariableInventory, $TerminalClickType_, $ITerminalStorageTabCommon, $ITerminalStorageTabServer, $ITerminalStorageTabCommon$ISlotPositionCallback } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $IVariable, $ValueDeseralizationContext_ } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $IVariableFacade$IValidator } from "@package/org/cyclops/integrateddynamics/api/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IIngredientComponentStorageObservable$StorageChangeEvent, $IIngredientComponentStorageObservable$IIndexChangeObserver } from "@package/org/cyclops/integrateddynamics/api/ingredient";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $ContainerTerminalStorageBase } from "@package/org/cyclops/integratedterminals/inventory/container";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IPositionedAddonsNetworkIngredients, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ValueTypeOperator$ValueOperator } from "@package/org/cyclops/integrateddynamics/core/evaluate/variable";
export * as crafting from "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting";

declare module "@package/org/cyclops/integratedterminals/core/terminalstorage" {
    export class $TerminalStorageTabIngredientComponentCommon<T, M> implements $ITerminalStorageTabCommon, $IVariableFacade$IValidator {
        addError(arg0: $MutableComponent_): void;
        getGlobalErrors(): $List<$Component>;
        loadSlots(arg0: $AbstractContainerMenu, arg1: number, arg2: $Player, arg3: ($ITerminalStorageTabCommon$IVariableInventory) | undefined, arg4: $ValueDeseralizationContext_): $List<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback>>;
        setLocalErrors(arg0: number, arg1: $List_<$MutableComponent_>): void;
        getName(): $ResourceLocation;
        onUpdate(arg0: $AbstractContainerMenu, arg1: $Player, arg2: ($ITerminalStorageTabCommon$IVariableInventory) | undefined): void;
        hasErrors(): boolean;
        clearGlobalErrors(): void;
        getLocalErrors(arg0: number): $List<$Component>;
        getVariableSlotNumberStart(): number;
        getVariableSlotNumberEnd(): number;
        handleQuickMove(arg0: $ContainerTerminalStorageBase<never>, arg1: $Player, arg2: number): ($ItemStack) | undefined;
        constructor(arg0: $ContainerTerminalStorageBase<any>, arg1: $ResourceLocation_, arg2: $IngredientComponent_<T, M>);
        get globalErrors(): $List<$Component>;
        get name(): $ResourceLocation;
        get variableSlotNumberStart(): number;
        get variableSlotNumberEnd(): number;
    }
    export class $TerminalStorageTabIngredientComponentServer<T, M> implements $ITerminalStorageTabServer, $IIngredientComponentStorageObservable$IIndexChangeObserver<T, M> {
        deInit(): void;
        handleStorageSlotClick(arg0: $AbstractContainerMenu, arg1: $ServerPlayer, arg2: $TerminalClickType_, arg3: number, arg4: T, arg5: number, arg6: number, arg7: T, arg8: boolean, arg9: $Map_<number, $ItemStack_>, arg10: number): void;
        updateActive(arg0: number): void;
        getName(): $ResourceLocation;
        init(): void;
        updateFilter(arg0: $List_<$IVariable<$ValueTypeOperator$ValueOperator>>, arg1: $TerminalStorageTabIngredientComponentCommon<never, never>): void;
        onChange(arg0: $IIngredientComponentStorageObservable$StorageChangeEvent<T, M>): void;
        getIngredientNetwork(): $IPositionedAddonsNetworkIngredients<T, M>;
        getNetwork(): $INetwork;
        constructor(arg0: $ResourceLocation_, arg1: $INetwork, arg2: $IngredientComponent_<T, M>, arg3: $IPositionedAddonsNetworkIngredients<T, M>, arg4: $ServerPlayer);
        get name(): $ResourceLocation;
        get ingredientNetwork(): $IPositionedAddonsNetworkIngredients<T, M>;
        get network(): $INetwork;
    }
}
