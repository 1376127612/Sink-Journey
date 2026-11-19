import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_, $List } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/alessandro/astages/internal/legacy" {
    /**
     * @deprecated
     */
    export class $StageGetPlayerEvent extends $PlayerEvent {
        stages: $List<string>;
        constructor(player: $Player, stages: $List_<string>);
    }
}
