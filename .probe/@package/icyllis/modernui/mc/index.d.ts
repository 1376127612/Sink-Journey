import { $UndoOwner, $UndoOperation, $UndoManager } from "@package/icyllis/modernui/core";
import { $EditBox } from "@package/net/minecraft/client/gui/components";
export * as mixin from "@package/icyllis/modernui/mc/mixin";
export * as text from "@package/icyllis/modernui/mc/text";

declare module "@package/icyllis/modernui/mc" {
    export class $EditBoxEditAction extends $UndoOperation<$EditBox> {
        mergeInsertWith(edit: $EditBoxEditAction): boolean;
        constructor(owner: $UndoOwner, cursor: number, oldText: string, start: number, newText: string);
    }
    export class $ScrollController {
        isScrolling(): boolean;
        setStartValue(start: number): void;
        abortAnimation(): void;
        setMaxScroll(max: number): void;
        getCurrValue(): number;
        update(time: number): void;
        getDuration(): number;
        scrollTo(target: number): boolean;
        scrollTo(target: number, duration: number): void;
        scrollBy(delta: number): boolean;
        scrollBy(delta: number, duration: number): void;
        constructor(listener: $ScrollController$IListener_);
        get scrolling(): boolean;
        set startValue(value: number);
        set maxScroll(value: number);
        get currValue(): number;
        get duration(): number;
    }
    export class $ScrollController$IListener {
    }
    export interface $ScrollController$IListener {
        onScrollAmountUpdated(arg0: $ScrollController, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScrollController$IListener}.
     */
    export type $ScrollController$IListener_ = ((arg0: $ScrollController, arg1: number) => void);
    export class $IModernEditBox {
    }
    export interface $IModernEditBox {
        modernUI_MC$getUndoManager(): $UndoManager;
    }
    /**
     * Values that may be interpreted as {@link $IModernEditBox}.
     */
    export type $IModernEditBox_ = (() => $UndoManager);
}
