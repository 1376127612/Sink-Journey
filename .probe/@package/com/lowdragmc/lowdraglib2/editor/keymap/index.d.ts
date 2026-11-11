import { $Function_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Record, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/keymap" {
    export class $KeymapContext {
    }
    export interface $KeymapContext {
        chord(): $KeyChord;
        isFocusWithin(arg0: $Class<never>): boolean;
        isTextInputFocused(): boolean;
        hasProject(): boolean;
        get textInputFocused(): boolean;
    }
    export class $Keymap {
        conflictsWith(arg0: $ResourceLocation_, arg1: $KeyChord_): $List<$EditorAction>;
        static conflictsWith(arg0: $Collection_<$EditorAction_>, arg1: $Function_<$EditorAction, $Keymap$Bindings>, arg2: $ResourceLocation_, arg3: $KeyChord_): $List<$EditorAction>;
        dispatch(arg0: $KeymapContext): $EditorAction;
        candidates(arg0: $KeyChord_): $List<$EditorAction>;
        register(arg0: $EditorAction_): $ISubscription;
        getActions(): $Collection<$EditorAction>;
        unregister(arg0: $ResourceLocation_): void;
        getOverrides(): $Map<$ResourceLocation, $Keymap$Bindings>;
        setBindings(arg0: $ResourceLocation_, arg1: $Keymap$Bindings_): void;
        isOverridden(arg0: $ResourceLocation_): boolean;
        getAction(arg0: $ResourceLocation_): ($EditorAction) | undefined;
        conflicts(): $List<$Keymap$Conflict>;
        registerAll(...arg0: $EditorAction_[]): $ISubscription;
        defaultBindingsOf(arg0: $ResourceLocation_): $Keymap$Bindings;
        shortcutHint(arg0: $ResourceLocation_): $Component;
        setOverrides(arg0: $Map_<$ResourceLocation_, $Keymap$Bindings_>): void;
        resetAllBindings(): void;
        resetBindings(arg0: $ResourceLocation_): void;
        getActionIds(): $List<$ResourceLocation>;
        bindingsOf(arg0: $ResourceLocation_): $Keymap$Bindings;
        menuLabel(arg0: $ResourceLocation_, arg1: string): $Component;
        constructor();
        get actions(): $Collection<$EditorAction>;
        get actionIds(): $List<$ResourceLocation>;
    }
    export class $KeyChord extends $Record {
        modifiers(): number;
        matches(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): boolean;
        static of(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): $KeyChord;
        static key(arg0: number): $KeyChord;
        static parse(arg0: string): ($KeyChord) | undefined;
        static shift(arg0: number): $KeyChord;
        isBound(): boolean;
        serialize(): string;
        static alt(arg0: number): $KeyChord;
        static ctrl(arg0: number): $KeyChord;
        isShiftDown(): boolean;
        keyCode(): number;
        static ctrlShift(arg0: number): $KeyChord;
        static ctrlAlt(arg0: number): $KeyChord;
        isAltDown(): boolean;
        isCtrlDown(): boolean;
        toDisplayString(): string;
        hasNoModifier(): boolean;
        static MOD_CTRL: number;
        static CODEC: $Codec<$KeyChord>;
        static MOD_ALT: number;
        static MOD_MASK: number;
        static UNBOUND: $KeyChord;
        static MOD_SHIFT: number;
        constructor(keyCode: number, modifiers: number);
        get bound(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get ctrlDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $KeyChord}.
     */
    export type $KeyChord_ = { modifiers?: number, keyCode?: number,  } | [modifiers?: number, keyCode?: number, ];
    export class $Keymap$Conflict extends $Record {
        actions(): $List<$EditorAction>;
        chord(): $KeyChord;
        constructor(chord: $KeyChord_, actions: $List_<$EditorAction_>);
    }
    /**
     * Values that may be interpreted as {@link $Keymap$Conflict}.
     */
    export type $Keymap$Conflict_ = { actions?: $List_<$EditorAction_>, chord?: $KeyChord_,  } | [actions?: $List_<$EditorAction_>, chord?: $KeyChord_, ];
    export class $EditorAction extends $Record {
        priority(): number;
        static builder(arg0: $ResourceLocation_): $EditorAction$Builder;
        id(): $ResourceLocation;
        handler(): $EditorAction$Handler;
        displayName(): $Component;
        category(): string;
        when(): $KeyContext;
        static defaultDisplayName(arg0: $ResourceLocation_): $Component;
        defaultSecondary(): $KeyChord;
        defaultPrimary(): $KeyChord;
        constructor(id: $ResourceLocation_, category: string, displayName: $Component_, defaultPrimary: $KeyChord_, defaultSecondary: $KeyChord_, when: $KeyContext, priority: number, handler: $EditorAction$Handler);
    }
    /**
     * Values that may be interpreted as {@link $EditorAction}.
     */
    export type $EditorAction_ = { category?: string, displayName?: $Component_, when?: $KeyContext, id?: $ResourceLocation_, handler?: $EditorAction$Handler, priority?: number, defaultSecondary?: $KeyChord_, defaultPrimary?: $KeyChord_,  } | [category?: string, displayName?: $Component_, when?: $KeyContext, id?: $ResourceLocation_, handler?: $EditorAction$Handler, priority?: number, defaultSecondary?: $KeyChord_, defaultPrimary?: $KeyChord_, ];
    export class $EditorKeymapDispatcher implements $KeymapContext {
        install(): void;
        chord(): $KeyChord;
        getFocusedElement(): $UIElement;
        getEditor(): $Editor;
        isFocusWithin(arg0: $Class<never>): boolean;
        isTextInputFocused(): boolean;
        hasProject(): boolean;
        constructor(arg0: $Editor);
        get focusedElement(): $UIElement;
        get editor(): $Editor;
        get textInputFocused(): boolean;
    }
    export class $Keymap$Bindings extends $Record {
        matches(arg0: $KeyChord_): boolean;
        static of(arg0: $KeyChord_, arg1: $KeyChord_): $Keymap$Bindings;
        primary(): $KeyChord;
        isUnbound(): boolean;
        secondary(): $KeyChord;
        withPrimary(arg0: $KeyChord_): $Keymap$Bindings;
        withSecondary(arg0: $KeyChord_): $Keymap$Bindings;
        static UNBOUND: $Keymap$Bindings;
        constructor(primary: $KeyChord_, secondary: $KeyChord_);
        get unbound(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Keymap$Bindings}.
     */
    export type $Keymap$Bindings_ = { primary?: $KeyChord_, secondary?: $KeyChord_,  } | [primary?: $KeyChord_, secondary?: $KeyChord_, ];
}
