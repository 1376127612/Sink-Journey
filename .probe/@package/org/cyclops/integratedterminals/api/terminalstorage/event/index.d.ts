import { $ITerminalStorageTabIngredientCraftingHandler } from "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ITerminalStorageTabClient, $ITerminalStorageTabCommon$ISlotPositionCallback_, $ITerminalStorageTabCommon_, $ITerminalButton, $ITerminalStorageTabCommon, $ITerminalStorageTabCommon$ISlotPositionCallback } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $IPrototypedIngredient } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Object } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $ContainerTerminalStorageBase } from "@package/org/cyclops/integratedterminals/inventory/container";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage/event" {
    export class $TerminalStorageTabClientLoadButtonsEvent extends $Event {
        getButtons(): $List<$ITerminalButton<never, never, never>>;
        getContainer(): $ContainerTerminalStorageBase<any>;
        setButtons(arg0: $List_<$ITerminalButton<never, never, never>>): void;
        getClientTab(): $ITerminalStorageTabClient<never>;
        constructor(arg0: $ContainerTerminalStorageBase<any>, arg1: $ITerminalStorageTabClient<never>, arg2: $List_<$ITerminalButton<never, never, never>>);
        get container(): $ContainerTerminalStorageBase<any>;
        get clientTab(): $ITerminalStorageTabClient<never>;
    }
    export class $TerminalCraftingJobFinishedEvent extends $Event {
        getInitiator(): $UUID;
        getCraftingJobId(): $Object;
        getChannel(): number;
        getHandler(): $ITerminalStorageTabIngredientCraftingHandler<never, never>;
        static post(arg0: $ITerminalStorageTabIngredientCraftingHandler<never, never>, arg1: $Object, arg2: number, arg3: boolean, arg4: $UUID_ | null, arg5: $List_<$IPrototypedIngredient<never, never>>): void;
        getOutputs(): $List<$IPrototypedIngredient<never, never>>;
        isRootJob(): boolean;
        constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler<never, never>, arg1: $Object, arg2: number, arg3: boolean, arg4: $UUID_ | null, arg5: $List_<$IPrototypedIngredient<never, never>>);
        get initiator(): $UUID;
        get craftingJobId(): $Object;
        get channel(): number;
        get handler(): $ITerminalStorageTabIngredientCraftingHandler<never, never>;
        get outputs(): $List<$IPrototypedIngredient<never, never>>;
        get rootJob(): boolean;
    }
    export class $TerminalStorageScreenSizeEvent extends $Event {
        getHeight(): number;
        static getWidthHeight(): $Pair<number, number>;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        constructor(arg0: number, arg1: number);
        static get widthHeight(): $Pair<number, number>;
    }
    export class $TerminalStorageTabClientSearchFieldUpdateEvent extends $Event {
        setSearchString(arg0: string): void;
        getClientTab(): $ITerminalStorageTabClient<never>;
        getSearchString(): string;
        constructor(arg0: $ITerminalStorageTabClient<never>, arg1: string);
        get clientTab(): $ITerminalStorageTabClient<never>;
    }
    export class $TerminalStorageTabCommonLoadSlotsEvent extends $Event {
        getCommonTab(): $ITerminalStorageTabCommon;
        setSlots(arg0: $List_<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback_>>): void;
        getSlots(): $List<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback>>;
        getContainer(): $ContainerTerminalStorageBase<any>;
        constructor(arg0: $ITerminalStorageTabCommon_, arg1: $ContainerTerminalStorageBase<any>, arg2: $List_<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback_>>);
        get commonTab(): $ITerminalStorageTabCommon;
        get container(): $ContainerTerminalStorageBase<any>;
    }
}
