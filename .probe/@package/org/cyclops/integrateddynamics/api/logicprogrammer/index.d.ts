import { $IGuiInputElement, $ISubGuiBox, $IGuiInputElementValueType } from "@package/org/cyclops/integrateddynamics/api/client/gui/subgui";
import { $Container } from "@package/net/minecraft/world";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IVariableFacade } from "@package/org/cyclops/integrateddynamics/api/item";
import { $Slot, $AbstractContainerMenu, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/org/cyclops/integrateddynamics/api/logicprogrammer" {
    export class $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<any, any, any>> {
    }
    export interface $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<any, any, any>> {
        getName(arg0: E): $ResourceLocation;
        getByName(arg0: $ResourceLocation_): E;
        createElements(): $List<E>;
        getUniqueName(): $ResourceLocation;
        get uniqueName(): $ResourceLocation;
    }
    export class $IConfigRenderPattern {
        static SUFFIX_1: $IConfigRenderPattern;
        static NONE_CANVAS_WIDE: $IConfigRenderPattern;
        static INFIX_VERYLONG: $IConfigRenderPattern;
        static INFIX_2_VERYLONG: $IConfigRenderPattern;
        static INFIX_LONG: $IConfigRenderPattern;
        static PREFIX_3_LONG: $IConfigRenderPattern;
        static SINGLE_SLOT: $IConfigRenderPattern;
        static PREFIX_2_LONG: $IConfigRenderPattern;
        static PREFIX_1_VERYLONG: $IConfigRenderPattern;
        static INFIX_2_LONG: $IConfigRenderPattern;
        static SUFFIX_1_LONG: $IConfigRenderPattern;
        static INFIX_2_LATE: $IConfigRenderPattern;
        static RECIPE: $IConfigRenderPattern;
        static INFIX: $IConfigRenderPattern;
        static INFIX_3: $IConfigRenderPattern;
        static NONE: $IConfigRenderPattern;
        static PREFIX_1: $IConfigRenderPattern;
        static PREFIX_2: $IConfigRenderPattern;
        static PREFIX_1_LONG: $IConfigRenderPattern;
        static INFIX_2: $IConfigRenderPattern;
        static PREFIX_3: $IConfigRenderPattern;
        static NONE_CANVAS: $IConfigRenderPattern;
    }
    export interface $IConfigRenderPattern {
        getWidth(): number;
        getHeight(): number;
        getSymbolPosition(): $Pair<number, number>;
        getSlotPositions(): $Pair<number, number>[];
        get width(): number;
        get height(): number;
        get symbolPosition(): $Pair<number, number>;
        get slotPositions(): $Pair<number, number>[];
    }
    export class $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $ILogicProgrammerElement<S, G, C> {
        getValue(): $IValue;
        setValue(arg0: $IValue): void;
        getValueType(): $IValueType<never>;
        createInnerGuiElement<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<never, G2, C2>;
        get valueType(): $IValueType<never>;
    }
    export class $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
        static createSlotDefault(arg0: $ILogicProgrammerElement<any, any, any>, arg1: $Container, arg2: number, arg3: number, arg4: number): $Slot;
    }
    export interface $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<S, G, C> {
        getType(): $ILogicProgrammerElementType<any>;
        matchesOutput(arg0: $IValueType<never>): boolean;
        canWriteElementPre(): boolean;
        onInputSlotUpdated(arg0: $Player, arg1: number, arg2: $ItemStack_): void;
        getMatchString(): string;
        setValueInGui(arg0: S): void;
        getItemStackSizeLimit(): number;
        setValueInContainer(arg0: C): void;
        canCurrentlyReadFromOtherItem(): boolean;
        setFocused(arg0: S, arg1: boolean): void;
        isFocused(arg0: S): boolean;
        isFor(arg0: $IVariableFacade): boolean;
        createSlot(arg0: $Container, arg1: number, arg2: number, arg3: number): $Slot;
        loadElement(arg0: $IVariableFacade): void;
        slotClick(arg0: number, arg1: $Slot, arg2: number, arg3: $ClickType_, arg4: $Player): boolean;
        writeElement(arg0: $Player, arg1: $ItemStack_): $ItemStack;
        matchesInput(arg0: $IValueType<never>): boolean;
        isItemValidForSlot(arg0: number, arg1: $ItemStack_): boolean;
        get type(): $ILogicProgrammerElementType<any>;
        get matchString(): string;
        set valueInGui(value: S);
        get itemStackSizeLimit(): number;
        set valueInContainer(value: C);
    }
}
