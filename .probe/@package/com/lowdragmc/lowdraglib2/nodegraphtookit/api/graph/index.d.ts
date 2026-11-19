import { $IGraphCommand_ } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/command";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VariableKind, $IVariable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/variable";
import { $AutoRegistry$Holder, $AutoRegistry } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $CustomGraphModelImpl } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $List, $Set } from "@package/java/util";
import { $Node, $NodeAttribute, $INode } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph" {
    export class $GraphNodeRegistry {
        getNodeClasses(): $List<$Class<$Node>>;
        get(arg0: string): $AutoRegistry$Holder<$NodeAttribute, $Node, $Class<$Node>>;
        static create(arg0: $ResourceLocation_, arg1: $Class<$Graph>): $GraphNodeRegistry;
        getRegistry(): $AutoRegistry<$NodeAttribute, $Node, $Class<$Node>>;
        get nodeClasses(): $List<$Class<$Node>>;
        get registry(): $AutoRegistry<$NodeAttribute, $Node, $Class<$Node>>;
    }
    export class $GraphLogger {
        log(arg0: $GraphLogger$Level_, arg1: $Component_, arg2: $Object): $GraphLogger;
        log(arg0: $GraphLogger$Level_, arg1: $Component_): $GraphLogger;
        clear(): void;
        isEmpty(): boolean;
        info(arg0: $Component_, arg1: $Object): $GraphLogger;
        info(arg0: $Component_): $GraphLogger;
        error(arg0: $Component_): $GraphLogger;
        error(arg0: $Component_, arg1: $Object): $GraphLogger;
        getEntries(): $List<$GraphLogger$Entry>;
        warning(arg0: $Component_, arg1: $Object): $GraphLogger;
        warning(arg0: $Component_): $GraphLogger;
        getSortedEntries(): $List<$GraphLogger$Entry>;
        constructor();
        get empty(): boolean;
        get entries(): $List<$GraphLogger$Entry>;
        get sortedEntries(): $List<$GraphLogger$Entry>;
    }
    export class $IGraph {
    }
    export interface $IGraph {
        getVariables(): $List<$IVariable>;
        getNodes(): $List<$INode>;
        get variables(): $List<$IVariable>;
        get nodes(): $List<$INode>;
    }
    export class $Graph implements $IGraph {
        getVariables(): $List<$IVariable>;
        getVariable(arg0: number): $IVariable;
        onCommandExecuted(arg0: $IGraphCommand_): void;
        getSupportNodes(): $List<$Class<$Node>>;
        onGraphChanged(arg0: $GraphLogger): void;
        getSupportTypes(): $List<$TypeHandle>;
        canExecuteCommand(arg0: $IGraphCommand_): boolean;
        acceptsSubgraphGraph(arg0: $Graph): boolean;
        getLibrarySupportNodes(): $List<$Class<$Node>>;
        getVariableSupportTypes(): $List<$TypeHandle>;
        getLibrarySupportTypes(): $List<$TypeHandle>;
        getSupportedSubgraphVariableKinds(): $Set<$VariableKind>;
        getNode(arg0: number): $INode;
        getNodes(): $List<$INode>;
        graphModel: $CustomGraphModelImpl;
        constructor();
        get variables(): $List<$IVariable>;
        get supportNodes(): $List<$Class<$Node>>;
        get supportTypes(): $List<$TypeHandle>;
        get librarySupportNodes(): $List<$Class<$Node>>;
        get variableSupportTypes(): $List<$TypeHandle>;
        get librarySupportTypes(): $List<$TypeHandle>;
        get supportedSubgraphVariableKinds(): $Set<$VariableKind>;
        get nodes(): $List<$INode>;
    }
    export class $GraphLogger$Level extends $Enum<$GraphLogger$Level> {
        static values(): $GraphLogger$Level[];
        static valueOf(arg0: string): $GraphLogger$Level;
        static ERROR: $GraphLogger$Level;
        static INFO: $GraphLogger$Level;
        static WARNING: $GraphLogger$Level;
    }
    /**
     * Values that may be interpreted as {@link $GraphLogger$Level}.
     */
    export type $GraphLogger$Level_ = "error" | "warning" | "info";
    export class $GraphLogger$Entry extends $Record {
        context(): $Object;
        message(): $Component;
        level(): $GraphLogger$Level;
        constructor(level: $GraphLogger$Level_, message: $Component_, context: $Object);
    }
    /**
     * Values that may be interpreted as {@link $GraphLogger$Entry}.
     */
    export type $GraphLogger$Entry_ = { level?: $GraphLogger$Level_, message?: $Component_, context?: $Object,  } | [level?: $GraphLogger$Level_, message?: $Component_, context?: $Object, ];
}
