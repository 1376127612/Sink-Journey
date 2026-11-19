import { $GraphElement } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_, $Enum, $Runnable } from "@package/java/lang";
import { $UUID, $List, $UUID_, $Collection_, $List_ } from "@package/java/util";
import { $INodeOption } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node";
import { $Vector2f } from "@package/org/joml";
export * as graph from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
export * as wire from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/wire";
export * as node from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
export * as group from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/group";
export * as wiget from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/wiget";
export * as variable from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/variable";
export * as constant from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model" {
    export class $Model implements $IPersistedSerializable {
        setUid(arg0: $UUID_): void;
        getUid(): $UUID;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        constructor();
        constructor(arg0: $UUID_);
    }
    export class $ContextualMenuItem {
        withAction(arg0: $Runnable_): $ContextualMenuItem;
        getName(): string;
        execute(): void;
        getPriority(): number;
        getAction(): $Runnable;
        constructor(arg0: string, arg1: number);
        constructor(arg0: $ContextualMenuItem, arg1: number);
        constructor(arg0: string, arg1: number, arg2: $Runnable_);
        get name(): string;
        get priority(): number;
        get action(): $Runnable;
    }
    export class $IPlaceHolder {
    }
    export interface $IPlaceHolder {
        getUid(): $UUID;
        get uid(): $UUID;
    }
    /**
     * Values that may be interpreted as {@link $IPlaceHolder}.
     */
    export type $IPlaceHolder_ = (() => $UUID_);
    export class $IHasName {
    }
    export interface $IHasName {
        getName(): string;
        setName(arg0: string): void;
    }
    export class $GraphElementModel extends $Model implements $IGraphElementModelHolder, $IHasContextualMenuItems {
        isSelectable(): boolean;
        setCapability(arg0: $Capabilities, arg1: boolean): void;
        isColorable(): boolean;
        clearCapabilities(): void;
        isDroppable(): boolean;
        isAscendable(): boolean;
        isCollapsible(): boolean;
        isDisableable(): boolean;
        isResizable(): boolean;
        isRenamable(): boolean;
        isCopiable(): boolean;
        getDependentModels(): $Stream<$GraphElementModel>;
        needsContainer(): boolean;
        setGraphModel(arg0: $GraphModel): void;
        getGraphModel(): $GraphModel;
        isDeletable(): boolean;
        isMovable(): boolean;
        getGraphElementModel(): $GraphElementModel;
        getContextualMenuItems(): $List<$ContextualMenuItem>;
        getCapabilities(): $List<$Capabilities>;
        getContainer(): $IGraphElementContainer;
        hasCapability(arg0: $Capabilities): boolean;
        constructor();
        get selectable(): boolean;
        get colorable(): boolean;
        get droppable(): boolean;
        get ascendable(): boolean;
        get collapsible(): boolean;
        get disableable(): boolean;
        get resizable(): boolean;
        get renamable(): boolean;
        get copiable(): boolean;
        get dependentModels(): $Stream<$GraphElementModel>;
        get deletable(): boolean;
        get movable(): boolean;
        get graphElementModel(): $GraphElementModel;
        get contextualMenuItems(): $List<$ContextualMenuItem>;
        get capabilities(): $List<$Capabilities>;
        get container(): $IGraphElementContainer;
    }
    export class $IHasContextualMenuItems {
    }
    export interface $IHasContextualMenuItems {
        getContextualMenuItems(): $List<$ContextualMenuItem>;
        get contextualMenuItems(): $List<$ContextualMenuItem>;
    }
    /**
     * Values that may be interpreted as {@link $IHasContextualMenuItems}.
     */
    export type $IHasContextualMenuItems_ = (() => $List_<$ContextualMenuItem>);
    export class $IGraphElementContainer {
    }
    export interface $IGraphElementContainer {
        repair(): boolean;
        getGraphElementModels(): $List<$GraphElementModel>;
        removeContainerElements(arg0: $Collection_<$GraphElementModel>): void;
        get graphElementModels(): $List<$GraphElementModel>;
    }
    export class $IMovable {
    }
    export interface $IMovable {
        move(arg0: $Vector2f): void;
        getPosition(): $Vector2f;
        setPosition(arg0: $Vector2f): void;
    }
    export class $IGraphElementUIModel {
    }
    export interface $IGraphElementUIModel {
        createElementUI(): $GraphElement<never>;
        asModel(): $GraphElementModel;
    }
    /**
     * Values that may be interpreted as {@link $IGraphElementUIModel}.
     */
    export type $IGraphElementUIModel_ = (() => $GraphElement<never>);
    export class $SpawnFlags extends $Enum<$SpawnFlags> {
        isOrphan(): boolean;
        static values(): $SpawnFlags[];
        static valueOf(arg0: string): $SpawnFlags;
        static RESERVED1: $SpawnFlags;
        static RESERVED0: $SpawnFlags;
        static NONE: $SpawnFlags;
        bit: number;
        static DEFAULT: $SpawnFlags;
        static ORPHAN: $SpawnFlags;
        get orphan(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnFlags}.
     */
    export type $SpawnFlags_ = "none" | "reserved0" | "reserved1" | "orphan" | "default";
    export class $IHasElementColor {
    }
    export interface $IHasElementColor {
        getDefaultColor(): number;
        resetColor(): void;
        getElementColor(): number;
        hasUserColor(): boolean;
        setColor(arg0: number): void;
        get defaultColor(): number;
        get elementColor(): number;
        set color(value: number);
    }
    export class $DeclarationModel extends $GraphElementModel implements $IHasName {
        getName(): string;
        setName(arg0: string): void;
        name: string;
        constructor();
    }
    export class $PlaceholderData {
        setGroupName(arg0: string): void;
        getPosition(): $Vector2f;
        setPosition(arg0: $Vector2f): void;
        getGroupName(): string;
        constructor();
    }
    export class $Capabilities {
        getId(): string;
        static DELETABLE: $Capabilities;
        static COLLAPSIBLE: $Capabilities;
        static DISABLEABLE: $Capabilities;
        static MOVABLE: $Capabilities;
        static RENAMABLE: $Capabilities;
        static DROPPABLE: $Capabilities;
        static SELECTABLE: $Capabilities;
        static RESIZABLE: $Capabilities;
        static COLORABLE: $Capabilities;
        static ASCENDABLE: $Capabilities;
        static NEEDS_CONTAINER: $Capabilities;
        static COPIABLE: $Capabilities;
        get id(): string;
    }
    export class $ModelState extends $Enum<$ModelState> {
        static values(): $ModelState[];
        static valueOf(arg0: string): $ModelState;
        static DISABLED: $ModelState;
        static ENABLED: $ModelState;
    }
    /**
     * Values that may be interpreted as {@link $ModelState}.
     */
    export type $ModelState_ = "enabled" | "disabled";
    export class $INodeWithOptions {
    }
    export interface $INodeWithOptions {
        getOptionCount(): number;
        getNodeOptionById(arg0: string): $INodeOption;
        getNodeOptions(): $List<$INodeOption>;
        get optionCount(): number;
        get nodeOptions(): $List<$INodeOption>;
    }
    export class $IGraphElementModelHolder {
    }
    export interface $IGraphElementModelHolder {
        getGraphElementModel(): $GraphElementModel;
        get graphElementModel(): $GraphElementModel;
    }
    /**
     * Values that may be interpreted as {@link $IGraphElementModelHolder}.
     */
    export type $IGraphElementModelHolder_ = (() => $GraphElementModel);
    export class $ChangeHintList {
        isSupersetOf(arg0: $ChangeHintList): boolean;
        getHints(): $List<$ChangeHint>;
        static add(arg0: $ChangeHintList, arg1: $ChangeHint_): $ChangeHintList;
        static addRange(arg0: $ChangeHintList, arg1: $ChangeHintList): $ChangeHintList;
        hasChange(arg0: $ChangeHint_): boolean;
        hasAnyChange(arg0: $List_<$ChangeHint_>): boolean;
        hasAnyChange(arg0: $ChangeHint_, arg1: $ChangeHint_): boolean;
        static toSharedList(arg0: $ChangeHint_): $ChangeHintList;
        static UNSPECIFIED: $ChangeHintList;
        static DATA: $ChangeHintList;
        static LAYOUT: $ChangeHintList;
        static GROUPING: $ChangeHintList;
        static STYLE: $ChangeHintList;
        static GRAPH_TOPOLOGY: $ChangeHintList;
        get hints(): $List<$ChangeHint>;
    }
    export class $IHasDisplayName {
    }
    export interface $IHasDisplayName {
        setTitle(arg0: $Component_): void;
        getTitle(): $Component;
    }
    export class $ChangeHint extends $Enum<$ChangeHint> {
        static values(): $ChangeHint[];
        static valueOf(arg0: string): $ChangeHint;
        static UNSPECIFIED: $ChangeHint;
        static DATA: $ChangeHint;
        static LAYOUT: $ChangeHint;
        static GROUPING: $ChangeHint;
        static STYLE: $ChangeHint;
        static GRAPH_TOPOLOGY: $ChangeHint;
        mask: number;
    }
    /**
     * Values that may be interpreted as {@link $ChangeHint}.
     */
    export type $ChangeHint_ = "unspecified" | "data" | "layout" | "style" | "graph_topology" | "grouping";
}
