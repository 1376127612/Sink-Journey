import { $List } from "@package/java/util";
import { $CreativeSubTab } from "@package/de/dafuqs/fractal/api";

declare module "@package/de/dafuqs/fractal/interfaces" {
    export class $ICreativeTabParent {
    }
    export interface $ICreativeTabParent {
        fractal$getTextB(): number;
        fractal$getTextG(): number;
        fractal$getTextR(): number;
        fractal$getTabOffset(): number;
        fractal$getSelectedChild(): $CreativeSubTab;
        fractal$setSelectedChild(arg0: $CreativeSubTab): void;
        fractal$getChildren(): $List<$CreativeSubTab>;
    }
    export class $ISubTabLocation {
    }
    export interface $ISubTabLocation {
        fractal$getX2(): number;
        fractal$getX(): number;
        fractal$getH2(): number;
        fractal$getH(): number;
        fractal$getY(): number;
    }
}
