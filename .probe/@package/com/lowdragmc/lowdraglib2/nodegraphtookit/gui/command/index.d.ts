import { $GraphView } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui/command" {
    export class $IGraphCommand {
    }
    export interface $IGraphCommand {
        execute(arg0: $GraphView, arg1: $GraphModel): void;
    }
    /**
     * Values that may be interpreted as {@link $IGraphCommand}.
     */
    export type $IGraphCommand_ = ((arg0: $GraphView, arg1: $GraphModel) => void);
}
