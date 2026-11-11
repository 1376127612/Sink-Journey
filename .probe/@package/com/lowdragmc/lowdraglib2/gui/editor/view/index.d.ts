import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $UIElement, $UI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ITreeNode, $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $List, $Set } from "@package/java/util";
import { $ScrollerView, $TreeList } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $IHistoryStack } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";

declare module "@package/com/lowdragmc/lowdraglib2/gui/editor/view" {
    export class $UITreeNode implements $ITreeNode<$UIElement, void> {
        getKey(): $UIElement;
        getParent(): $UITreeNode;
        getContent(): void;
        getChildren(): $List<$UITreeNode>;
        getDimension(): number;
        flatten(): $List<$ITreeNode<$UIElement, void>>;
        getChild(arg0: $UIElement): $ITreeNode<$UIElement, void>;
        isLeaf(): boolean;
        getSiblingIndex(): number;
        isBranch(): boolean;
        parent: $UITreeNode;
        dimension: number;
        key: $UIElement;
        constructor(arg0: $UIElement);
        get content(): void;
        get children(): $List<$UITreeNode>;
        get leaf(): boolean;
        get siblingIndex(): number;
        get branch(): boolean;
    }
    export class $UIHierarchy extends $UIElement {
        getRootNode(): $UITreeNode;
        loadUI(arg0: $UI): void;
        setHistoryStack(arg0: $IHistoryStack): void;
        setOnSelectedChanged(arg0: $Consumer_<$Set<$UITreeNode>>): void;
        removeSelected(): void;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        getSelectedOne(): ($UIElement) | undefined;
        copySelected(): void;
        getSelectedNodes(): $UIElement[];
        pasteToSelected(): void;
        focusNode(arg0: $UITreeNode): void;
        clearUI(): void;
        getUi(): $UI;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        treeList: $TreeList<$UITreeNode>;
        scrollerView: $ScrollerView;
        constructor();
        get rootNode(): $UITreeNode;
        set historyStack(value: $IHistoryStack);
        set onSelectedChanged(value: $Consumer_<$Set<$UITreeNode>>);
        get selectedOne(): ($UIElement) | undefined;
        get selectedNodes(): $UIElement[];
        get ui(): $UI;
    }
}
