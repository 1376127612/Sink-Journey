import { $Annotation } from "@package/java/lang/annotation";
import { $DataResult } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Graph } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";
import { $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $RegistrationEnvironment } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Collection } from "@package/java/util";
import { $IFieldConstantConfigurable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api";
import { $NodeModel, $AbstractNodeModel, $BlockNodeModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Type } from "@package/java/lang/reflect";
import { $IOptionDefinitionContext_, $IPortDefinitionContext } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node/definition";
import { $IPort } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/port";
import { $Enum, $Class } from "@package/java/lang";
import { $NodePreviewContext_ } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/node";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node" {
    export class $BlockNode extends $Node implements $IBlockNode {
        getBlockNodeModel(): $BlockNodeModel;
        getContextNode(): $IContextNode;
        getIndex(): number;
        constructor();
        get blockNodeModel(): $BlockNodeModel;
        get contextNode(): $IContextNode;
        get index(): number;
    }
    export class $IConstantNode {
    }
    export interface $IConstantNode extends $INode, $IFieldConstantConfigurable {
        getDataType(): $Type;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        onValueChanged(): void;
        get dataType(): $Type;
    }
    export class $OptionVisibility extends $Enum<$OptionVisibility> {
        static values(): $OptionVisibility[];
        static valueOf(arg0: string): $OptionVisibility;
        showInNode(): boolean;
        showInInspector(): boolean;
        static NODE_ONLY: $OptionVisibility;
        static NODE_AND_INSPECTOR: $OptionVisibility;
        static INSPECTOR_ONLY: $OptionVisibility;
    }
    /**
     * Values that may be interpreted as {@link $OptionVisibility}.
     */
    export type $OptionVisibility_ = "node_and_inspector" | "inspector_only" | "node_only";
    export class $IResizeWidth {
    }
    export interface $IResizeWidth {
        setMinWidth(arg0: number): void;
        getMinWidth(): number;
    }
    export class $NodeAttribute implements $Annotation {
        modID(): string;
        graphTypes(): $Class<$Graph>[];
        name(): string;
        priority(): number;
        group(): string;
        environment(): $RegistrationEnvironment;
    }
    export class $INode {
    }
    export interface $INode {
        getInputPorts(): $Collection<$IPort>;
        getNodeModel(): $AbstractNodeModel;
        getOutputPorts(): $Collection<$IPort>;
        getInputPort(arg0: number): $IPort;
        getOutputPort(arg0: number): $IPort;
        getNodeOptionById(arg0: string): $INodeOption;
        getOutputPortById(arg0: string): $IPort;
        getInputPortById(arg0: string): $IPort;
        getNodeOptions(): $Collection<$INodeOption>;
        get inputPorts(): $Collection<$IPort>;
        get nodeModel(): $AbstractNodeModel;
        get outputPorts(): $Collection<$IPort>;
        get nodeOptions(): $Collection<$INodeOption>;
    }
    /**
     * Values that may be interpreted as {@link $INode}.
     */
    export type $INode_ = (() => $AbstractNodeModel);
    export class $Node implements $INode {
        isNodePreviewExpandedByDefault(): boolean;
        defineNode(): void;
        getNodeModel(): $AbstractNodeModel;
        createDescriptionUI(): $UIElement;
        onUpdateNodePreview(arg0: $NodePreviewContext_): void;
        getNodeIcon(): $IGuiTexture;
        getNodeWidth(): number;
        onDefinePorts(arg0: $IPortDefinitionContext): void;
        onBuildNodePreview(arg0: $NodePreviewContext_): void;
        onDefineOptions(arg0: $IOptionDefinitionContext_): void;
        hasNodePreview(): boolean;
        getDisplayName(): $Component;
        setImplementation(arg0: $NodeModel): void;
        getInputPorts(): $Collection<$IPort>;
        getOutputPorts(): $Collection<$IPort>;
        getInputPort(arg0: number): $IPort;
        getOutputPort(arg0: number): $IPort;
        getNodeOptionById(arg0: string): $INodeOption;
        getOutputPortById(arg0: string): $IPort;
        getInputPortById(arg0: string): $IPort;
        getNodeOptions(): $Collection<$INodeOption>;
        constructor();
        get nodePreviewExpandedByDefault(): boolean;
        get nodeModel(): $AbstractNodeModel;
        get nodeIcon(): $IGuiTexture;
        get nodeWidth(): number;
        get displayName(): $Component;
        set implementation(value: $NodeModel);
        get inputPorts(): $Collection<$IPort>;
        get outputPorts(): $Collection<$IPort>;
        get nodeOptions(): $Collection<$INodeOption>;
    }
    export class $INodeOption {
    }
    export interface $INodeOption {
        getDataType(): $Type;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        getId(): string;
        getDisplayName(): $Component;
        get dataType(): $Type;
        get id(): string;
        get displayName(): $Component;
    }
}
