import { $Serializable } from "@package/java/io";
import { $Transferable, $FlavorMap, $DataFlavor } from "@package/java/awt/datatransfer";
import { $InputEvent } from "@package/java/awt/event";
import { $Point, $Cursor, $Component, $Image } from "@package/java/awt";
import { $Object, $Class } from "@package/java/lang";
import { $Iterator, $EventObject, $List, $EventListener, $List_ } from "@package/java/util";

declare module "@package/java/awt/dnd" {
    export class $DropTargetListener {
    }
    export interface $DropTargetListener extends $EventListener {
        drop(arg0: $DropTargetDropEvent): void;
        dragEnter(arg0: $DropTargetDragEvent): void;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
    }
    export class $DragGestureListener {
    }
    export interface $DragGestureListener extends $EventListener {
        dragGestureRecognized(arg0: $DragGestureEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragGestureListener}.
     */
    export type $DragGestureListener_ = ((arg0: $DragGestureEvent) => void);
    export class $DropTarget implements $DropTargetListener, $Serializable {
        setComponent(arg0: $Component): void;
        setDefaultActions(arg0: number): void;
        addDropTargetListener(arg0: $DropTargetListener): void;
        getDropTargetContext(): $DropTargetContext;
        getDefaultActions(): number;
        removeDropTargetListener(arg0: $DropTargetListener): void;
        setFlavorMap(arg0: $FlavorMap): void;
        isActive(): boolean;
        drop(arg0: $DropTargetDropEvent): void;
        getComponent(): $Component;
        removeNotify(): void;
        addNotify(): void;
        dragEnter(arg0: $DropTargetDragEvent): void;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
        getFlavorMap(): $FlavorMap;
        setActive(arg0: boolean): void;
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean, arg4: $FlavorMap);
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener);
        constructor();
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean);
        constructor(arg0: $Component, arg1: $DropTargetListener);
        get dropTargetContext(): $DropTargetContext;
    }
    export class $DragGestureRecognizer implements $Serializable {
        setComponent(arg0: $Component): void;
        getComponent(): $Component;
        addDragGestureListener(arg0: $DragGestureListener_): void;
        getDragSource(): $DragSource;
        getSourceActions(): number;
        setSourceActions(arg0: number): void;
        getTriggerEvent(): $InputEvent;
        resetRecognizer(): void;
        removeDragGestureListener(arg0: $DragGestureListener_): void;
        get dragSource(): $DragSource;
        get triggerEvent(): $InputEvent;
    }
    export class $DropTargetContext implements $Serializable {
        getDropTarget(): $DropTarget;
        getComponent(): $Component;
        dropComplete(arg0: boolean): void;
        get dropTarget(): $DropTarget;
        get component(): $Component;
    }
    export class $DragSource implements $Serializable {
        createDragGestureRecognizer<T extends $DragGestureRecognizer>(arg0: $Class<T>, arg1: $Component, arg2: number, arg3: $DragGestureListener_): T;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener, arg4: $FlavorMap): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener, arg6: $FlavorMap): void;
        getListeners<T extends $EventListener>(arg0: $Class<T>): T[];
        addDragSourceListener(arg0: $DragSourceListener): void;
        addDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        static getDefaultDragSource(): $DragSource;
        static isDragImageSupported(): boolean;
        getFlavorMap(): $FlavorMap;
        createDefaultDragGestureRecognizer(arg0: $Component, arg1: number, arg2: $DragGestureListener_): $DragGestureRecognizer;
        removeDragSourceListener(arg0: $DragSourceListener): void;
        getDragSourceListeners(): $DragSourceListener[];
        removeDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        getDragSourceMotionListeners(): $DragSourceMotionListener[];
        static getDragThreshold(): number;
        static DefaultCopyNoDrop: $Cursor;
        static DefaultMoveNoDrop: $Cursor;
        static DefaultMoveDrop: $Cursor;
        static DefaultLinkDrop: $Cursor;
        static DefaultLinkNoDrop: $Cursor;
        static DefaultCopyDrop: $Cursor;
        constructor();
        static get defaultDragSource(): $DragSource;
        static get dragImageSupported(): boolean;
        get flavorMap(): $FlavorMap;
        get dragSourceListeners(): $DragSourceListener[];
        get dragSourceMotionListeners(): $DragSourceMotionListener[];
        static get dragThreshold(): number;
    }
    export class $DragGestureEvent extends $EventObject {
        startDrag(arg0: $Cursor, arg1: $Transferable, arg2: $DragSourceListener): void;
        startDrag(arg0: $Cursor, arg1: $Image, arg2: $Point, arg3: $Transferable, arg4: $DragSourceListener): void;
        startDrag(arg0: $Cursor, arg1: $Transferable): void;
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<$InputEvent>;
        getComponent(): $Component;
        getDragSource(): $DragSource;
        getTriggerEvent(): $InputEvent;
        getSourceAsDragGestureRecognizer(): $DragGestureRecognizer;
        getDragOrigin(): $Point;
        getDragAction(): number;
        constructor(arg0: $DragGestureRecognizer, arg1: number, arg2: $Point, arg3: $List_<$InputEvent>);
        get component(): $Component;
        get dragSource(): $DragSource;
        get triggerEvent(): $InputEvent;
        get sourceAsDragGestureRecognizer(): $DragGestureRecognizer;
        get dragOrigin(): $Point;
        get dragAction(): number;
    }
    export class $DropTargetEvent extends $EventObject {
        getDropTargetContext(): $DropTargetContext;
        constructor(arg0: $DropTargetContext);
        get dropTargetContext(): $DropTargetContext;
    }
    export class $DropTargetDragEvent extends $DropTargetEvent {
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        getLocation(): $Point;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        getSourceActions(): number;
        acceptDrag(arg0: number): void;
        rejectDrag(): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
        get dropAction(): number;
        get currentDataFlavors(): $DataFlavor[];
        get location(): $Point;
        get transferable(): $Transferable;
        get sourceActions(): number;
        get currentDataFlavorsAsList(): $List<$DataFlavor>;
    }
    export class $DragSourceListener {
    }
    export interface $DragSourceListener extends $EventListener {
        dragEnter(arg0: $DragSourceDragEvent): void;
        dragOver(arg0: $DragSourceDragEvent): void;
        dropActionChanged(arg0: $DragSourceDragEvent): void;
        dragExit(arg0: $DragSourceEvent): void;
        dragDropEnd(arg0: $DragSourceDropEvent): void;
    }
    export class $DragSourceMotionListener {
    }
    export interface $DragSourceMotionListener extends $EventListener {
        dragMouseMoved(arg0: $DragSourceDragEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragSourceMotionListener}.
     */
    export type $DragSourceMotionListener_ = ((arg0: $DragSourceDragEvent) => void);
    export class $DropTargetDropEvent extends $DropTargetEvent {
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        rejectDrop(): void;
        getLocation(): $Point;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        getSourceActions(): number;
        dropComplete(arg0: boolean): void;
        acceptDrop(arg0: number): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        isLocalTransfer(): boolean;
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number, arg4: boolean);
        get dropAction(): number;
        get currentDataFlavors(): $DataFlavor[];
        get location(): $Point;
        get transferable(): $Transferable;
        get sourceActions(): number;
        get currentDataFlavorsAsList(): $List<$DataFlavor>;
        get localTransfer(): boolean;
    }
}
