import { $GraphElementModel, $IHasName, $IGraphElementContainer } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $Stream } from "@package/java/util/stream";
import { $VariableDeclarationModelBase } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/variable";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $Collection_, $List, $Map_ } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/group" {
    export class $GroupModel extends $GroupModelBase {
        insertItem(arg0: $IGroupItemModel, arg1: number): void;
        copyFrom(arg0: $GroupModelBase, arg1: $Map_<$VariableDeclarationModelBase, $VariableDeclarationModelBase>): void;
        removeItem(arg0: $IGroupItemModel): void;
        constructor();
    }
    export class $SectionModel extends $GroupModel {
        acceptsDraggedModel(arg0: $IGroupItemModel): boolean;
        constructor();
    }
    export class $GroupModelBase extends $GraphElementModel implements $IGroupItemModel, $IGraphElementContainer, $IHasName {
        getItems(): $List<$IGroupItemModel>;
        repair(): boolean;
        getParentGroup(): $GroupModelBase;
        getGraphElementModels(): $List<$GraphElementModel>;
        removeContainerElements(arg0: $Collection_<$GraphElementModel>): void;
        getSection(): $SectionModel;
        getContainedModels(): $Stream<$GraphElementModel>;
        setParentGroup(arg0: $GroupModelBase): void;
        isInGroup(arg0: $GroupModelBase): boolean;
        constructor();
        get items(): $List<$IGroupItemModel>;
        get graphElementModels(): $List<$GraphElementModel>;
        get section(): $SectionModel;
        get containedModels(): $Stream<$GraphElementModel>;
    }
    export class $IGroupItemModel {
    }
    export interface $IGroupItemModel {
        getParentGroup(): $GroupModelBase;
        isInGroup(arg0: $GroupModelBase): boolean;
        getName(): string;
        getSection(): $SectionModel;
        getGroupItemInTargetGraph(arg0: $GraphModel, arg1: $Map_<$VariableDeclarationModelBase, $VariableDeclarationModelBase>): $IGroupItemModel;
        getContainedModels(): $Stream<$GraphElementModel>;
        setParentGroup(arg0: $GroupModelBase): void;
        get name(): string;
        get section(): $SectionModel;
        get containedModels(): $Stream<$GraphElementModel>;
    }
}
