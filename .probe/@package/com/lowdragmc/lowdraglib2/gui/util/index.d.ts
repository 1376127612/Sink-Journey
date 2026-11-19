import { $File_, $File } from "@package/java/io";
import { $Predicate_, $Consumer_ } from "@package/java/util/function";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/util" {
    export class $FileNode implements $ITreeNode<$File, void> {
        setValid(arg0: $Predicate_<$FileNode>): $FileNode;
        getKey(): $File;
        getParent(): $FileNode;
        getContent(): void;
        isDirectory(): boolean;
        isFile(): boolean;
        invalidate(): void;
        getChildren(): $List<$FileNode>;
        isLeaf(): boolean;
        getDimension(): number;
        getSiblingIndex(): number;
        flatten(): $List<$ITreeNode<$File, void>>;
        getChild(arg0: $File_): $ITreeNode<$File, void>;
        isBranch(): boolean;
        parent: $FileNode;
        dimension: number;
        key: $File;
        constructor(arg0: $File_);
        set valid(value: $Predicate_<$FileNode>);
        get content(): void;
        get directory(): boolean;
        get file(): boolean;
        get children(): $List<$FileNode>;
        get leaf(): boolean;
        get siblingIndex(): number;
        get branch(): boolean;
    }
    export class $TreeNode<T, K> implements $ITreeNode<T, K> {
        setValid(arg0: $Predicate_<$TreeNode<T, K>>): $TreeNode<T, K>;
        areContentsEqual(arg0: K, arg1: K): boolean;
        getOrCreateChild(arg0: T): $TreeNode<T, K>;
        areKeysEqual(arg0: T, arg1: T): boolean;
        getKey(): T;
        getParent(): $TreeNode<T, K>;
        getContent(): K;
        getChildren(): $List<$TreeNode<T, K>>;
        getDimension(): number;
        removeChild(arg0: $TreeNode<T, K>): void;
        removeChild(arg0: T): void;
        createChild(arg0: T): $TreeNode<T, K>;
        addContent(arg0: T, arg1: K): void;
        getSiblingIndex(): number;
        flatten(): $List<$ITreeNode<T, K>>;
        getChild(arg0: T): $ITreeNode<T, K>;
        isLeaf(): boolean;
        isBranch(): boolean;
        parent: $TreeNode<T, K>;
        dimension: number;
        constructor(arg0: T);
        constructor(arg0: $TreeNode<T, K>, arg1: number, arg2: T);
        set valid(value: $Predicate_<$TreeNode<T, K>>);
        get key(): T;
        get content(): K;
        get children(): $List<$TreeNode<T, K>>;
        get siblingIndex(): number;
        get leaf(): boolean;
        get branch(): boolean;
    }
    export class $TreeBuilder<K, V> {
        startBranch(arg0: K): $TreeBuilder<K, V>;
        endBranch(): $TreeBuilder<K, V>;
        diveBranch(arg0: $List_<K>, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        remove(arg0: K): $TreeBuilder<K, V>;
        isEmpty(): boolean;
        static start<K, V>(arg0: K): $TreeBuilder<K, V>;
        peek(): $ITreeNode<K, V>;
        build(): $TreeNode<K, V>;
        content(arg0: V): $TreeBuilder<K, V>;
        branch(arg0: K, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        leaf(arg0: K, arg1: V): $TreeBuilder<K, V>;
        constructor(arg0: K);
        get empty(): boolean;
    }
    export class $TreeBuilder$Menu extends $TreeBuilder<$Tuple<$IGuiTexture, $Component>, $Runnable> {
        static getIcon(arg0: $Tuple<$IGuiTexture_, $Component_>): $IGuiTexture;
        disabledLeaf(arg0: $Component_): $TreeBuilder$Menu;
        disabledLeaf(arg0: string): $TreeBuilder$Menu;
        disabledLeaf(arg0: $IGuiTexture_, arg1: $Component_): $TreeBuilder$Menu;
        static isCrossLine(arg0: $Tuple<$IGuiTexture_, $Component_>): boolean;
        endBranch(): $TreeBuilder$Menu;
        static getName(arg0: $Tuple<$IGuiTexture_, $Component_>): $Component;
        remove(arg0: $Component_): $TreeBuilder$Menu;
        remove(arg0: string): $TreeBuilder$Menu;
        static start(): $TreeBuilder$Menu;
        static handle(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): void;
        branch(arg0: string, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $Component_, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $IGuiTexture_, arg1: string, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        static hoverTextureProvider(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): $IGuiTexture;
        leaf(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $IGuiTexture_, arg1: string, arg2: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $Component_, arg1: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: string, arg1: $Runnable_): $TreeBuilder$Menu;
        static uiProvider(arg0: $Tuple<$IGuiTexture_, $Component_>): $UIElement;
        crossLine(): $TreeBuilder$Menu;
        static DISABLED: $Runnable;
        static CROSS_LINE: $Tuple<$IGuiTexture, $Component>;
    }
    export class $ITickable {
    }
    export interface $ITickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ITickable}.
     */
    export type $ITickable_ = (() => void);
    export class $ITreeNode<KEY, CONTENT> {
    }
    export interface $ITreeNode<KEY, CONTENT> {
        getSiblingIndex(): number;
        getKey(): KEY;
        getParent(): $ITreeNode<KEY, CONTENT>;
        getContent(): CONTENT;
        flatten(): $List<$ITreeNode<KEY, CONTENT>>;
        getChild(arg0: KEY): $ITreeNode<KEY, CONTENT>;
        getChildren(): $List<$ITreeNode<KEY, CONTENT>>;
        isLeaf(): boolean;
        getDimension(): number;
        isBranch(): boolean;
        get siblingIndex(): number;
        get key(): KEY;
        get parent(): $ITreeNode<KEY, CONTENT>;
        get content(): CONTENT;
        get children(): $List<$ITreeNode<KEY, CONTENT>>;
        get leaf(): boolean;
        get dimension(): number;
        get branch(): boolean;
    }
}
