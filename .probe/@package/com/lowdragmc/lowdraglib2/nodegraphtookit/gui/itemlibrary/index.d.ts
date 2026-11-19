import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $GraphElementModel, $SpawnFlags_, $SpawnFlags } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $AbstractNodeModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Record, $Class } from "@package/java/lang";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $UUID_, $UUID } from "@package/java/util";
import { $Vector2f } from "@package/org/joml";
import { $ILibraryItem } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/itemlibrary" {
    export class $ItemLibraryItem implements $ILibraryItem {
        getIcon(): $IGuiTexture;
        setIcon(arg0: $IGuiTexture_): $ItemLibraryItem;
        setDisplayName(arg0: $Component_): $ItemLibraryItem;
        getPath(): string;
        getDisplayName(): $Component;
        getData(): $IItemLibraryData;
        setData(arg0: $IItemLibraryData): $ItemLibraryItem;
        setPath(arg0: string): $ItemLibraryItem;
        setSearchableName(arg0: string): $ItemLibraryItem;
        getSearchableName(): string;
        constructor();
    }
    export class $NodeModelLibraryItem extends $ItemLibraryItem {
        createNode(arg0: $GraphNodeCreationData_): $GraphElementModel;
        constructor(arg0: string, arg1: $Function_<$GraphNodeCreationData, $GraphElementModel>);
    }
    export class $GraphNodeCreationData extends $Record {
        createConstantNode(arg0: string, arg1: $TypeHandle): $AbstractNodeModel;
        static ofOrphan(arg0: $GraphModel): $GraphNodeCreationData;
        graphModel(): $GraphModel;
        spawnFlags(): $SpawnFlags;
        position(): $Vector2f;
        uuid(): $UUID;
        createNode(arg0: $Class<never>, arg1: string, arg2: $Consumer_<$AbstractNodeModel>): $AbstractNodeModel;
        constructor(graphModel: $GraphModel, position: $Vector2f, spawnFlags: $SpawnFlags_, uuid: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $GraphNodeCreationData}.
     */
    export type $GraphNodeCreationData_ = { spawnFlags?: $SpawnFlags_, graphModel?: $GraphModel, position?: $Vector2f, uuid?: $UUID_,  } | [spawnFlags?: $SpawnFlags_, graphModel?: $GraphModel, position?: $Vector2f, uuid?: $UUID_, ];
}
