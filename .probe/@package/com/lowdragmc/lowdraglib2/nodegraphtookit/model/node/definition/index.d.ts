import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $PortModel, $NodeModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $Type } from "@package/java/lang/reflect";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $PortModelOptions_, $IOutputPortBuilder, $IInputPortBuilder } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/port";
import { $IOptionBuilder } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node/definition" {
    export class $IPortDefinitionContext {
    }
    export interface $IPortDefinitionContext {
        addOutputPort(arg0: string, arg1: $Type): $IOutputPortBuilder<never>;
        addOutputPort(arg0: string, arg1: $TypeHandle): $IOutputPortBuilder<never>;
        addInputPort(arg0: string, arg1: $Type): $IInputPortBuilder<never>;
        addInputPort(arg0: string, arg1: $TypeHandle): $IInputPortBuilder<never>;
    }
    export class $IOptionDefinitionContext {
    }
    export interface $IOptionDefinitionContext {
        addOption(arg0: string, arg1: $TypeHandle): $IOptionBuilder<never>;
        addOption(arg0: string, arg1: $Type): $IOptionBuilder<never>;
    }
    /**
     * Values that may be interpreted as {@link $IOptionDefinitionContext}.
     */
    export type $IOptionDefinitionContext_ = ((arg0: string, arg1: $TypeHandle) => $IOptionBuilder<never>);
    export class $SubPortDefinitionScope<T extends $NodeModel> {
        refreshMustSpecifySubPorts(): void;
        isMustSpecifySubPorts(): boolean;
        addInputSubPort(arg0: string, arg1: $TypeHandle, arg2: $Supplier_<$Object>, arg3: $Consumer_<$Object>, arg4: $PortModelOptions_): $PortModel;
        addSubPort(arg0: string, arg1: $TypeHandle, arg2: $PortModelOptions_): $PortModel;
        parentPort: $PortModel;
        nodeModel: T;
        addedPorts: $List<$PortModel>;
        constructor(arg0: T);
        get mustSpecifySubPorts(): boolean;
    }
}
