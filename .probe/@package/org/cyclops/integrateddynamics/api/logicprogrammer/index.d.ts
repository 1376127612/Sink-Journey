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
        getUniqueName(): $ResourceLocation;
        createElements(): $List<E>;
        getName(arg0: E): $ResourceLocation;
        getByName(arg0: $ResourceLocation_): E;
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
        getHeight(): number;
        getSlotPositions(): $Pair<number, number>[];
        getSymbolPosition(): $Pair<number, number>;
        getWidth(): number;
        get height(): number;
        get slotPositions(): $Pair<number, number>[];
        get symbolPosition(): $Pair<number, number>;
        get width(): number;
    }
    export class $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $ILogicProgrammerElement<S, G, C> {
        getValueType(): $IValueType<never>;
        createInnerGuiElement<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<never, G2, C2>;
        getValue(): $IValue;
        setValue(arg0: $IValue): void;
        get valueType(): $IValueType<never>;
    }
    export class $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
        static createSlotDefault(arg0: $ILogicProgrammerElement<any, any, any>, arg1: $Container, arg2: number, arg3: number, arg4: number): $Slot;
    }
    export interface $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<S, G, C> {
        isFor(arg0: $IVariableFacade): boolean;
        matchesInput(arg0: $IValueType<never>): boolean;
        writeElement(arg0: $Player, arg1: $ItemStack_): $ItemStack;
        createSlot(arg0: $Container, arg1: number, arg2: number, arg3: number): $Slot;
        slotClick(arg0: number, arg1: $Slot, arg2: number, arg3: $ClickType_, arg4: $Player): boolean;
        setValueInContainer(arg0: C): void;
        getItemStackSizeLimit(): number;
        setValueInGui(arg0: S): void;
        isItemValidForSlot(arg0: number, arg1: $ItemStack_): boolean;
        matchesOutput(arg0: $IValueType<never>): boolean;
        loadElement(arg0: $IVariableFacade): void;
        canWriteElementPre(): boolean;
        getMatchString(): string;
        onInputSlotUpdated(arg0: $Player, arg1: number, arg2: $ItemStack_): void;
        canCurrentlyReadFromOtherItem(): boolean;
        getType(): $ILogicProgrammerElementType<any>;
        isFocused(arg0: S): boolean;
        setFocused(arg0: S, arg1: boolean): void;
        set valueInContainer(value: C);
        get itemStackSizeLimit(): number;
        set valueInGui(value: S);
        get matchString(): string;
        get type(): $ILogicProgrammerElementType<any>;
    }
}
