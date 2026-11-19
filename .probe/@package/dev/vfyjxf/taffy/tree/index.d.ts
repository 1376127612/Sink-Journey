import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        contentSize(): $FloatSize;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        size(): $FloatSize;
        bottomMargin(): $CollapsibleMarginSet;
        topMargin(): $CollapsibleMarginSet;
        static hidden(): $LayoutOutput;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        marginsCanCollapseThrough(): boolean;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        firstBaselines(): $FloatPoint;
        static HIDDEN: $LayoutOutput;
        static DEFAULT: $LayoutOutput;
        constructor(size: $FloatSize, contentSize: $FloatSize, firstBaselines: $FloatPoint, topMargin: $CollapsibleMarginSet, bottomMargin: $CollapsibleMarginSet, marginsCanCollapseThrough: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LayoutOutput}.
     */
    export type $LayoutOutput_ = { size?: $FloatSize, contentSize?: $FloatSize, marginsCanCollapseThrough?: boolean, topMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, bottomMargin?: $CollapsibleMarginSet,  } | [size?: $FloatSize, contentSize?: $FloatSize, marginsCanCollapseThrough?: boolean, topMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, bottomMargin?: $CollapsibleMarginSet, ];
    export class $Layout extends $Record {
        contentBoxY(): number;
        contentBoxSize(): $FloatSize;
        scrollHeight(): number;
        scrollWidth(): number;
        contentBoxX(): number;
        scrollbarSize(): $FloatSize;
        static withOrder(arg0: number): $Layout;
        contentSize(): $FloatSize;
        size(): $FloatSize;
        location(): $FloatPoint;
        copy(): $Layout;
        order(): number;
        margin(): $FloatRect;
        padding(): $FloatRect;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        border(): $FloatRect;
        constructor();
        constructor(order: number, location: $FloatPoint, size: $FloatSize, contentSize: $FloatSize, scrollbarSize: $FloatSize, border: $FloatRect, padding: $FloatRect, margin: $FloatRect);
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $Layout}.
     */
    export type $Layout_ = { scrollbarSize?: $FloatSize, location?: $FloatPoint, size?: $FloatSize, padding?: $FloatRect, order?: number, margin?: $FloatRect, border?: $FloatRect, contentSize?: $FloatSize,  } | [scrollbarSize?: $FloatSize, location?: $FloatPoint, size?: $FloatSize, padding?: $FloatRect, order?: number, margin?: $FloatRect, border?: $FloatRect, contentSize?: $FloatSize, ];
    export class $RunMode extends $Enum<$RunMode> {
        static values(): $RunMode[];
        static valueOf(arg0: string): $RunMode;
        static PERFORM_HIDDEN_LAYOUT: $RunMode;
        static COMPUTE_SIZE: $RunMode;
        static PERFORM_LAYOUT: $RunMode;
    }
    /**
     * Values that may be interpreted as {@link $RunMode}.
     */
    export type $RunMode_ = "perform_layout" | "compute_size" | "perform_hidden_layout";
    export class $CollapsibleMarginSet {
        static fromMargin(arg0: number): $CollapsibleMarginSet;
        resolve(): number;
        copy(): $CollapsibleMarginSet;
        static zero(): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        static ZERO: $CollapsibleMarginSet;
    }
    export class $LayoutChangeListener {
    }
    export interface $LayoutChangeListener {
        onLayoutChanged(arg0: $NodeId_, arg1: $Layout_, arg2: $Layout_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutChangeListener}.
     */
    export type $LayoutChangeListener_ = ((arg0: $NodeId, arg1: $Layout, arg2: $Layout) => void);
    export class $NodeId extends $Record {
        value(): number;
        static of(arg0: number): $NodeId;
        getId(): number;
        toIndex(): number;
        constructor(value: number);
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NodeId}.
     */
    export type $NodeId_ = { value?: number,  } | [value?: number, ];
    export class $TaffyTree {
        markDirty(arg0: $NodeId_): void;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        disableRounding(): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        printTree(arg0: $NodeId_): void;
        hasNewLayout(arg0: $NodeId_): boolean;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        acknowledgeLayout(arg0: $NodeId_): void;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        enableRounding(): void;
        roundingEnabled(): boolean;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        totalNodeCount(): number;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        acknowledgeSubtree(arg0: $NodeId_): void;
        needsVisit(arg0: $NodeId_): boolean;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        getLayoutChangeListener(): $LayoutChangeListener;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        remove(arg0: $NodeId_): void;
        clear(): void;
        getParent(arg0: $NodeId_): $NodeId;
        childCount(arg0: $NodeId_): number;
        isDirty(arg0: $NodeId_): boolean;
        getChildren(arg0: $NodeId_): $List<$NodeId>;
        containsNode(arg0: $NodeId_): boolean;
        getLayout(arg0: $NodeId_): $Layout;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        getAllNodes(): $Set<$NodeId>;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        clearCache(arg0: $NodeId_): void;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
