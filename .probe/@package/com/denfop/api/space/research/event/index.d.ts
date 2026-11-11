import { $Level_ } from "@package/net/minecraft/world/level";
import { $IResearchTable, $IRocketLaunchPad } from "@package/com/denfop/api/space/research/api";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/space/research/event" {
    export class $RocketPadUnLoadEvent extends $LevelEvent {
        table: $IRocketLaunchPad;
        constructor(arg0: $Level_, arg1: $IRocketLaunchPad);
    }
    export class $ResearchTableLoadEvent extends $LevelEvent {
        table: $IResearchTable;
        constructor(arg0: $Level_, arg1: $IResearchTable);
    }
    export class $ResearchTableUnLoadEvent extends $LevelEvent {
        table: $IResearchTable;
        constructor(arg0: $Level_, arg1: $IResearchTable);
    }
    export class $RocketPadReLoadEvent extends $LevelEvent {
        table: $IRocketLaunchPad;
        constructor(arg0: $Level_, arg1: $IRocketLaunchPad);
    }
    export class $ResearchTableReLoadEvent extends $LevelEvent {
        table: $IResearchTable;
        constructor(arg0: $Level_, arg1: $IResearchTable);
    }
    export class $RocketPadLoadEvent extends $LevelEvent {
        table: $IRocketLaunchPad;
        constructor(arg0: $Level_, arg1: $IRocketLaunchPad);
    }
}
