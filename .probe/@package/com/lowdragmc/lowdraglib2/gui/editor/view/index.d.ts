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
        getSiblingIndex(): number;
        flatten(): $List<$ITreeNode<$UIElement, void>>;
        getChild(arg0: $UIElement): $ITreeNode<$UIElement, void>;
        isLeaf(): boolean;
        isBranch(): boolean;
        parent: $UITreeNode;
        dimension: number;
        key: $UIElement;
        constructor(arg0: $UIElement);
        get content(): void;
        get children(): $List<$UITreeNode>;
        get siblingIndex(): number;
        get leaf(): boolean;
        get branch(): boolean;
    }
    export class $UIHierarchy extends $UIElement {
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        removeSelected(): void;
        setOnSelectedChanged(arg0: $Consumer_<$Set<$UITreeNode>>): void;
        setHistoryStack(arg0: $IHistoryStack): void;
        loadUI(arg0: $UI): void;
        getSelectedOne(): ($UIElement) | undefined;
        getRootNode(): $UITreeNode;
        getUi(): $UI;
        clearUI(): void;
        focusNode(arg0: $UITreeNode): void;
        copySelected(): void;
        getSelectedNodes(): $UIElement[];
        pasteToSelected(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        treeList: $TreeList<$UITreeNode>;
        scrollerView: $ScrollerView;
        constructor();
        set onSelectedChanged(value: $Consumer_<$Set<$UITreeNode>>);
        set historyStack(value: $IHistoryStack);
        get selectedOne(): ($UIElement) | undefined;
        get rootNode(): $UITreeNode;
        get ui(): $UI;
        get selectedNodes(): $UIElement[];
    }
}
