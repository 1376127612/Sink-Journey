import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getGuiGraphics(): $GuiGraphics;
        getSlotIndex(): number;
        getEntry(): $IKeyEntry;
        getRowLeft(): number;
        getX(): number;
        isHovered(): boolean;
        getY(): number;
        getPartialTicks(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get guiGraphics(): $GuiGraphics;
        get slotIndex(): number;
        get entry(): $IKeyEntry;
        get rowLeft(): number;
        get x(): number;
        get hovered(): boolean;
        get y(): number;
        get partialTicks(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getGuiGraphics(): $GuiGraphics;
        getSlotIndex(): number;
        getEntry(): $IKeyEntry;
        getRowLeft(): number;
        getX(): number;
        isHovered(): boolean;
        getY(): number;
        getPartialTicks(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get guiGraphics(): $GuiGraphics;
        get slotIndex(): number;
        get entry(): $IKeyEntry;
        get rowLeft(): number;
        get x(): number;
        get hovered(): boolean;
        get y(): number;
        get partialTicks(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
}
