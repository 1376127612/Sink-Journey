import { $Predicate_ } from "@package/java/util/function";
import { $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IConfigRenderPattern } from "@package/org/cyclops/integrateddynamics/api/logicprogrammer";

declare module "@package/org/cyclops/integrateddynamics/api/client/gui/subgui" {
    export class $ISubGuiBox {
    }
    export interface $ISubGuiBox extends $ISubGui {
        getHeight(): number;
        getWidth(): number;
        getX(): number;
        getY(): number;
        get height(): number;
        get width(): number;
        get x(): number;
        get y(): number;
    }
    export class $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<S, G, C> {
        setValidator(arg0: $Predicate_<$IValue>): void;
        setValueInGui(arg0: S, arg1: boolean): void;
        getValue(): $IValue;
        setValue(arg0: $IValue): void;
        set validator(value: $Predicate_<$IValue>);
    }
    export class $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
        loadTooltip(arg0: $List_<$Component_>): void;
        getRenderPattern(): $IConfigRenderPattern;
        createSubGui(arg0: number, arg1: number, arg2: number, arg3: number, arg4: G, arg5: C): S;
        getName(): $Component;
        validate(): $Component;
        getSymbol(): string;
        getColor(): number;
        activate(): void;
        deactivate(): void;
        get renderPattern(): $IConfigRenderPattern;
        get name(): $Component;
        get symbol(): string;
        get color(): number;
    }
    export class $ISubGui {
    }
    export interface $ISubGui {
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        drawGuiContainerForegroundLayer(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $TextureManager, arg4: $Font, arg5: number, arg6: number): void;
        init(arg0: number, arg1: number): void;
        renderBg(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $TextureManager, arg4: $Font, arg5: number, arg6: number, arg7: number): void;
        tick(): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
    }
}
