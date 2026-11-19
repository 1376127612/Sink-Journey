import { $DataResult } from "@package/com/mojang/serialization";
import { $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $GraphElement } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $Field, $Type } from "@package/java/lang/reflect";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $Enum, $Class, $Object, $Iterable } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $ReorderType_ } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/utils";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Graph } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";
import { $WireModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/wire";
import { $Tooltips_, $Tooltips } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $GraphElementModel, $ModelState_, $DeclarationModel, $IHasName, $IHasDisplayName, $IGraphElementUIModel, $SpawnFlags, $INodeWithOptions, $ModelState, $IMovable, $SpawnFlags_, $IHasContextualMenuItems, $IHasElementColor } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $IFieldConstantConfigurable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api";
import { $VariableDeclarationModelBase } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/variable";
import { $ITypeConfigurable, $ITypeConfigurable_, $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $PortCapacity_, $PortInfos, $PortType, $PortOrientation, $PortOrientation_, $PortDirection, $PortType_, $PortCapacity, $PortDirection_, $PortModelOptions_, $PortModelOptions, $PortConnectorUI, $IPort } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/port";
import { $INodeOption, $OptionVisibility, $BlockNode, $IResizeWidth, $OptionVisibility_ } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node";
import { $BlockNodeElement } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/node";
import { $Constant } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant";
import { $Vector2f } from "@package/org/joml";
export * as definition from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node/definition";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node" {
    export class $PortNodeModel extends $AbstractNodeModel {
        getPorts(): $Collection<$PortModel>;
        getPorts(arg0: $PortDirection_, arg1: $PortType_): $List<$PortModel>;
        onDisconnection(arg0: $PortModel, arg1: $PortModel): void;
        removeUnusedMissingPort(arg0: $PortModel): boolean;
        onConnection(arg0: $PortModel, arg1: $PortModel): void;
        getPortWireOffset(): number;
        onPortUniqueNameChanged(arg0: $PortModel, arg1: string, arg2: string): void;
        getPortFitToConnectTo(arg0: $PortModel): $PortModel;
        constructor();
        get portWireOffset(): number;
    }
    export class $BlockNodeModel extends $NodeModel {
        getContextNodeModel(): $ContextNodeModel;
        setContextNodeModel(arg0: $ContextNodeModel): void;
        getBlockNode(): $BlockNode;
        createElementUI(): $BlockNodeElement;
        getIndex(): number;
        static TYPE_CONFLICT_SUFFIX: string;
        get blockNode(): $BlockNode;
        get index(): number;
    }
    export class $NodePreviewModel extends $GraphElementModel implements $IGraphElementUIModel {
        isExpanded(): boolean;
        setExpanded(arg0: boolean): void;
        createElementUI(): $GraphElement<never>;
        onCreateNodePreview(arg0: $AbstractNodeModel): void;
        onDuplicateNodePreview(arg0: $NodePreviewModel): void;
        getParentNode(): $AbstractNodeModel;
        setParentNode(arg0: $AbstractNodeModel): void;
        asModel(): $GraphElementModel;
        constructor();
    }
    export class $InputOutputPortsNodeModel extends $PortNodeModel {
        getInputsById(): $Map<string, $PortModel>;
        getOutputsById(): $Map<string, $PortModel>;
        getInputPorts(): $Collection<$PortModel>;
        getOutputPorts(): $Collection<$PortModel>;
        getInputsByDisplayOrder(): $List<$PortModel>;
        getOutputsByDisplayOrder(): $List<$PortModel>;
        getNodeOptionById(arg0: string): $INodeOption;
        getNodeOptions(): $List<$NodeOption>;
        getVisibleInputsByDisplayOrder(): $List<$PortModel>;
        getVisibleOutputsByDisplayOrder(): $List<$PortModel>;
        clearNodeOptions(): void;
        getPortsFitToConnectTo(arg0: $PortModel): $List<$PortModel>;
        constructor();
        get inputsById(): $Map<string, $PortModel>;
        get outputsById(): $Map<string, $PortModel>;
        get inputPorts(): $Collection<$PortModel>;
        get outputPorts(): $Collection<$PortModel>;
        get inputsByDisplayOrder(): $List<$PortModel>;
        get outputsByDisplayOrder(): $List<$PortModel>;
        get nodeOptions(): $List<$NodeOption>;
        get visibleInputsByDisplayOrder(): $List<$PortModel>;
        get visibleOutputsByDisplayOrder(): $List<$PortModel>;
    }
    export class $SubgraphNodeModel$Kind extends $Enum<$SubgraphNodeModel$Kind> {
        static values(): $SubgraphNodeModel$Kind[];
        static valueOf(arg0: string): $SubgraphNodeModel$Kind;
        static EXTERNAL: $SubgraphNodeModel$Kind;
        static LOCAL: $SubgraphNodeModel$Kind;
    }
    /**
     * Values that may be interpreted as {@link $SubgraphNodeModel$Kind}.
     */
    export type $SubgraphNodeModel$Kind_ = "local" | "external";
    export class $OrderedPorts implements $Iterable<$PortModel> {
        getDictionary(): $Map<string, $PortModel>;
        insertRange(arg0: number, arg1: $List_<$PortModel>): void;
        changePortName(arg0: $PortModel, arg1: string): boolean;
        remove(arg0: $PortModel): boolean;
        remove(arg0: string): boolean;
        size(): number;
        get(arg0: string): $PortModel;
        get(arg0: number): $PortModel;
        values(): $List<$PortModel>;
        isEmpty(): boolean;
        add(arg0: $PortModel): void;
        iterator(): $Iterator<$PortModel>;
        entrySet(): $Set<$Map$Entry<string, $PortModel>>;
        containsKey(arg0: string): boolean;
        keys(): $Set<string>;
        tryGet(arg0: string): ($PortModel) | undefined;
        swapPortsOrder(arg0: $PortModel, arg1: $PortModel): void;
        spliterator(): $Spliterator<$PortModel>;
        forEach(arg0: $Consumer_<$PortModel>): void;
        constructor(arg0: number);
        constructor();
        [Symbol.iterator](): Iterator<$PortModel>
        get dictionary(): $Map<string, $PortModel>;
        get empty(): boolean;
    }
    export class $AbstractNodeModel extends $GraphElementModel implements $IHasName, $IHasDisplayName, $IMovable, $IHasElementColor, $IHasContextualMenuItems, $IGraphElementUIModel, $IResizeWidth {
        setTitle(arg0: $Component_): void;
        getDefaultColor(): number;
        isNodePreviewExpandedByDefault(): boolean;
        getSpawnFlags(): $SpawnFlags;
        getConnectedWires(): $List<$WireModel>;
        isAllowSelfConnect(): boolean;
        syncNodePreview(): void;
        onCreateNode(): void;
        onDeleteNode(): void;
        setSpawnFlags(arg0: $SpawnFlags_): void;
        resetColor(): void;
        getNodeIcon(): $IGuiTexture;
        getNodeWidth(): number;
        hasNodePreview(): boolean;
        setPreviewExpanded(arg0: boolean): void;
        getElementColor(): number;
        isPreviewExpanded(): boolean;
        setCollapsed(arg0: boolean): void;
        hasUserColor(): boolean;
        isCollapsed(): boolean;
        onDuplicateNode(arg0: $AbstractNodeModel): void;
        createElementUI(): $GraphElement<never>;
        getNodePreviewModel(): $NodePreviewModel;
        getName(): string;
        setName(arg0: string): void;
        getState(): $ModelState;
        isDestroyed(): boolean;
        setState(arg0: $ModelState_): void;
        move(arg0: $Vector2f): void;
        setColor(arg0: number): void;
        getPosition(): $Vector2f;
        getTitle(): $Component;
        setPosition(arg0: $Vector2f): void;
        setMinWidth(arg0: number): void;
        getMinWidth(): number;
        getTooltip(): $Component;
        setTooltip(arg0: $Component_): void;
        asModel(): $GraphElementModel;
        get defaultColor(): number;
        get nodePreviewExpandedByDefault(): boolean;
        get connectedWires(): $List<$WireModel>;
        get allowSelfConnect(): boolean;
        get nodeIcon(): $IGuiTexture;
        get nodeWidth(): number;
        get elementColor(): number;
        get nodePreviewModel(): $NodePreviewModel;
        get destroyed(): boolean;
        set color(value: number);
    }
    export class $NodeModel extends $InputOutputPortsNodeModel implements $INodeWithOptions {
        defineNode(): void;
        addMissingPort(arg0: $PortDirection_, arg1: string, arg2: $PortOrientation_): $PortModel;
        getInputConstantsById(): $Map<string, $Constant>;
        getOrCreateTypeConflictPlaceholder(arg0: $PortDirection_, arg1: string): $PortModel;
        isCurrentlyDefiningNode(): boolean;
        addOutputPort(arg0: string, arg1: $TypeHandle, arg2: $PortType_, arg3: $PortOrientation_, arg4: $PortModelOptions_): $PortModel;
        addInputPort(arg0: string, arg1: $TypeHandle, arg2: $PortType_, arg3: $PortOrientation_, arg4: $PortModelOptions_, arg5: $Consumer_<$Constant>, arg6: $Consumer_<$Object>): $PortModel;
        isNodeOptionConstantsMigrated(): boolean;
        getInputPortInfos(): $PortInfos;
        getReusablePort(arg0: $OrderedPorts, arg1: $PortDirection_, arg2: string, arg3: $PortType_, arg4: $TypeHandle, arg5: $PortModel): $PortModel;
        addInputSubPort(arg0: $PortModel, arg1: string, arg2: $TypeHandle, arg3: $Supplier_<$Object>, arg4: $Consumer_<$Object>, arg5: $PortModelOptions_): $PortModel;
        getOutputPortInfos(): $PortInfos;
        /**
         * @deprecated
         */
        addNodeOption(arg0: string, arg1: $TypeHandle, arg2: $Tooltips_, arg3: boolean, arg4: number, arg5: $Consumer_<$Constant>, arg6: $Consumer_<$Object>): $NodeOption;
        addNodeOption(arg0: string, arg1: $TypeHandle, arg2: $Tooltips_, arg3: $OptionVisibility_, arg4: number, arg5: $Consumer_<$Constant>, arg6: $Consumer_<$Object>): $NodeOption;
        getPortInfos(arg0: $PortDirection_): $PortInfos;
        addNoConnectorInputPort(arg0: string, arg1: $TypeHandle, arg2: $PortType_, arg3: $PortOrientation_, arg4: $PortModelOptions_, arg5: $Consumer_<$Constant>, arg6: $Consumer_<$Object>): $PortModel;
        addSubPort(arg0: $PortModel, arg1: string, arg2: $TypeHandle, arg3: $PortModelOptions_): $PortModel;
        clearPorts(): void;
        changeMode(arg0: number): void;
        getOptionCount(): number;
        static TYPE_CONFLICT_SUFFIX: string;
        get inputConstantsById(): $Map<string, $Constant>;
        get currentlyDefiningNode(): boolean;
        get nodeOptionConstantsMigrated(): boolean;
        get inputPortInfos(): $PortInfos;
        get outputPortInfos(): $PortInfos;
        get optionCount(): number;
    }
    export class $SubgraphNodeModel extends $NodeModel {
        getExternalPath(): $IResourcePath;
        getSubgraphModel(): $GraphModel;
        getLocalGraphId(): $UUID;
        rebindLocalGraphId(arg0: $UUID_): void;
        setLocalSubgraph(arg0: $GraphModel): void;
        invalidateResolvedSubgraph(): void;
        isReferencingLocalSubgraph(): boolean;
        getSubgraph(): $Graph;
        setExternalSubgraph(arg0: $IResourcePath): void;
        getKind(): $SubgraphNodeModel$Kind;
        static TYPE_CONFLICT_SUFFIX: string;
        constructor();
        get externalPath(): $IResourcePath;
        get subgraphModel(): $GraphModel;
        get localGraphId(): $UUID;
        set localSubgraph(value: $GraphModel);
        get referencingLocalSubgraph(): boolean;
        get subgraph(): $Graph;
        set externalSubgraph(value: $IResourcePath);
        get kind(): $SubgraphNodeModel$Kind;
    }
    export class $VariableNodeModel extends $NodeModel implements $ISingleInputPortNodeModel, $ISingleOutputPortNodeModel, $IHasDeclarationModel {
        getDataType(): $TypeHandle;
        getInputPort(): $PortModel;
        getOutputPort(): $PortModel;
        getDeclarationModel(): $DeclarationModel;
        getDeclarationModelUid(): $UUID;
        setDeclarationModel(arg0: $DeclarationModel): void;
        setVariableDeclarationModel(arg0: $VariableDeclarationModelBase): void;
        updateTypeFromDeclaration(): void;
        getVariableDeclarationModel(): $VariableDeclarationModelBase;
        static MAIN_PORT_ID: string;
        static TYPE_CONFLICT_SUFFIX: string;
        constructor();
        get dataType(): $TypeHandle;
        get inputPort(): $PortModel;
        get outputPort(): $PortModel;
        get declarationModelUid(): $UUID;
    }
    export class $WirePortalModel extends $NodeModel implements $IHasDeclarationModel {
        getPortType(): $PortType;
        getModelUid(): $UUID;
        getDeclarationModel(): $DeclarationModel;
        setPortDataTypeHandle(arg0: $TypeHandle): void;
        setDeclarationModel(arg0: $DeclarationModel): void;
        canCreateOppositePortal(): boolean;
        getPortDataTypeHandle(): $TypeHandle;
        canHaveAnotherPortalWithSameDirectionAndDeclaration(): boolean;
        getEvaluationOrder(): number;
        canRevertToWire(): boolean;
        static TYPE_CONFLICT_SUFFIX: string;
        get portType(): $PortType;
        get modelUid(): $UUID;
        get evaluationOrder(): number;
    }
    export class $ConstantNodeModel extends $NodeModel implements $ISingleOutputPortNodeModel {
        setConstantValue(arg0: $Object): void;
        getOutputPort(): $PortModel;
        getType(): $Type;
        getConstant(): $Constant;
        setConstant(arg0: $Constant): void;
        static OUTPUT_PORT_ID: string;
        static TYPE_CONFLICT_SUFFIX: string;
        constructor();
        set constantValue(value: $Object);
        get outputPort(): $PortModel;
        get type(): $Type;
    }
    export class $ContextNodeModel extends $NodeModel {
        removeBlock(arg0: number): $BlockNodeModel;
        removeBlock(arg0: $BlockNodeModel): boolean;
        getBlockCount(): number;
        acceptsBlock(arg0: $BlockNodeModel): boolean;
        moveBlock(arg0: number, arg1: number): void;
        insertBlock(arg0: $BlockNodeModel, arg1: number): void;
        indexOf(arg0: $BlockNodeModel): number;
        getBlocks(): $List<$BlockNodeModel>;
        getSupportBlockClasses(): $List<$Class<$BlockNode>>;
        static TYPE_CONFLICT_SUFFIX: string;
        get blockCount(): number;
        get blocks(): $List<$BlockNodeModel>;
        get supportBlockClasses(): $List<$Class<$BlockNode>>;
    }
    export class $ISingleInputPortNodeModel {
    }
    export interface $ISingleInputPortNodeModel {
        getInputPort(): $PortModel;
        get inputPort(): $PortModel;
    }
    /**
     * Values that may be interpreted as {@link $ISingleInputPortNodeModel}.
     */
    export type $ISingleInputPortNodeModel_ = (() => $PortModel);
    export class $NodeOption implements $INodeOption {
        getDataType(): $Type;
        /**
         * @deprecated
         */
        isShowInInspectorOnly(): boolean;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        getPortModel(): $PortModel;
        getId(): string;
        getDisplayName(): $Component;
        getVisibility(): $OptionVisibility;
        getOrder(): number;
        static PORT_ID_PREFIX: string;
        portModel: $PortModel;
        visibility: $OptionVisibility;
        id: string;
        /**
         * @deprecated
         */
        showInInspectorOnly: boolean;
        order: number;
        constructor(arg0: string, arg1: $PortModel, arg2: $OptionVisibility_, arg3: number);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: $PortModel, arg2: boolean, arg3: number);
        get dataType(): $Type;
        get displayName(): $Component;
    }
    export class $PortModel extends $GraphElementModel implements $IPort, $IHasDisplayName, $IHasContextualMenuItems, $IFieldConstantConfigurable {
        setTitle(arg0: $Component_): void;
        getUniqueName(): string;
        getOrientation(): $PortOrientation;
        setOrientation(arg0: $PortOrientation_): void;
        getDataType(): $Type;
        getValueField(): $Field;
        isExpandable(): boolean;
        getTooltips(): $Tooltips;
        getCustomTooltips(): $Tooltips;
        getValueOwer(): $Object;
        isExpanded(): boolean;
        getPortId(): string;
        getConnectedWires(): $List<$WireModel>;
        getPortType(): $PortType;
        getNodeModel(): $PortNodeModel;
        getPortDataType(): $Type;
        getDataTypeHandle(): $TypeHandle;
        canConnectPort(arg0: $PortModel): boolean;
        getPortCapacity(): $PortCapacity;
        getConnectedPorts(): $List<$PortModel>;
        getConnectedPorts(arg0: $List_<$IPort>): void;
        onDisconnection(arg0: $PortModel): void;
        setDataTypeHandle(arg0: $TypeHandle): void;
        reorderWire(arg0: $WireModel, arg1: $ReorderType_): void;
        getSubPorts(): $List<$PortModel>;
        isDescendantOf(arg0: $PortModel): boolean;
        hasReorderableWires(): boolean;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        createEmbeddedValueIfNeeded(): boolean;
        getParentPort(): $PortModel;
        setTooltips(arg0: $Tooltips_): void;
        setPortCapacity(arg0: $PortCapacity_): void;
        setPortType(arg0: $PortType_): void;
        onConnection(arg0: $PortModel): void;
        setExpandable(arg0: boolean): void;
        clearSubPorts(): void;
        setExpanded(arg0: boolean): void;
        isConnectedTo(arg0: $PortModel): boolean;
        areAncestorsExpanded(): boolean;
        addSubPort(arg0: $PortModel): void;
        getName(): string;
        isAutomatic(): boolean;
        getDisplayName(): $Component;
        isConnected(): boolean;
        getOptions(): $PortModelOptions;
        getTitle(): $Component;
        getDirection(): $PortDirection;
        onValueChanged(): void;
        setOptions(arg0: $PortModelOptions_): void;
        setDirection(arg0: $PortDirection_): void;
        equivalent(arg0: $PortModel): boolean;
        updateDataTypeHandler(): void;
        setCustomTypeConfigurable(arg0: $ITypeConfigurable_): void;
        setConfiguratorEnabled(arg0: boolean): void;
        getConfigurableConstant(): $Constant;
        getCustomTypeConfigurable(): $ITypeConfigurable;
        isConfiguratorEnabled(): boolean;
        getFirstConnectedPort(): $IPort;
        setPortId(arg0: string): void;
        getConnectorUI(): $PortConnectorUI;
        getEmbeddedValue(): $Constant;
        setValueField(arg0: $Field): void;
        isPolymorphic(): boolean;
        setValueOwer(arg0: $Object): void;
        setNodeModel(arg0: $PortNodeModel): void;
        getDefaultTooltips(): $Tooltips;
        getWireOrder(arg0: $WireModel): number;
        notifyValueChanged(): void;
        getDefaultValue<T>(): T;
        getValue<T>(): T;
        setValue(arg0: $Object): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        isShowInInspectorOnly(): boolean;
        forceUpdate(): boolean;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor(arg0: $PortNodeModel, arg1: $PortDirection_, arg2: $PortOrientation_, arg3: string, arg4: $PortType_, arg5: $TypeHandle, arg6: $PortModelOptions_, arg7: $PortModel);
        get uniqueName(): string;
        get dataType(): $Type;
        get customTooltips(): $Tooltips;
        get connectedWires(): $List<$WireModel>;
        get portDataType(): $Type;
        get subPorts(): $List<$PortModel>;
        get parentPort(): $PortModel;
        get name(): string;
        get automatic(): boolean;
        get displayName(): $Component;
        get connected(): boolean;
        get configurableConstant(): $Constant;
        get firstConnectedPort(): $IPort;
        get connectorUI(): $PortConnectorUI;
        get embeddedValue(): $Constant;
        get polymorphic(): boolean;
        get defaultTooltips(): $Tooltips;
        get defaultValue(): T;
        get showInInspectorOnly(): boolean;
        get configurableName(): string;
    }
    export class $ISingleOutputPortNodeModel {
    }
    export interface $ISingleOutputPortNodeModel {
        getOutputPort(): $PortModel;
        get outputPort(): $PortModel;
    }
    /**
     * Values that may be interpreted as {@link $ISingleOutputPortNodeModel}.
     */
    export type $ISingleOutputPortNodeModel_ = (() => $PortModel);
    export class $IHasDeclarationModel {
    }
    export interface $IHasDeclarationModel {
        getDeclarationModel(): $DeclarationModel;
        setDeclarationModel(arg0: $DeclarationModel): void;
    }
}
