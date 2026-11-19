import { $GraphView } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractNodeModel, $BlockNodeModel, $NodePreviewModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/node" {
    export class $NodePreviewContext extends $Record {
        nodeModel(): $AbstractNodeModel;
        previewModel(): $NodePreviewModel;
        graphView(): $GraphView;
        container(): $UIElement;
        element(): $NodePreviewElement;
        rebuild(): void;
        constructor(container: $UIElement, nodeModel: $AbstractNodeModel, previewModel: $NodePreviewModel, graphView: $GraphView, element: $NodePreviewElement);
    }
    /**
     * Values that may be interpreted as {@link $NodePreviewContext}.
     */
    export type $NodePreviewContext_ = { element?: $NodePreviewElement, nodeModel?: $AbstractNodeModel, graphView?: $GraphView, previewModel?: $NodePreviewModel, container?: $UIElement,  } | [element?: $NodePreviewElement, nodeModel?: $AbstractNodeModel, graphView?: $GraphView, previewModel?: $NodePreviewModel, container?: $UIElement, ];
    export class $BlockNodeElement extends $CollapsibleInOutNodeElement {
        getModel(): $BlockNodeModel;
        static NODE_LAYER: string;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static COLLAPSED_CLASS: string;
        constructor(arg0: $BlockNodeModel);
        get model(): $BlockNodeModel;
    }
}
