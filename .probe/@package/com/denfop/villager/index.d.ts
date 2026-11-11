import { $Event } from "@package/net/neoforged/bus/api";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/villager" {
    export class $EventTradeVillager extends $Event {
        getProfession(): $Profession;
        constructor(arg0: $Profession_);
        get profession(): $Profession;
    }
    export class $Profession extends $Enum<$Profession> {
        static values(): $Profession[];
        static valueOf(arg0: string): $Profession;
        static NUCLEAR: $Profession;
        static CHEMIST: $Profession;
        static MECHANIC: $Profession;
        static ENGINEER: $Profession;
        static METALLURG: $Profession;
        static BOTANIST: $Profession;
    }
    /**
     * Values that may be interpreted as {@link $Profession}.
     */
    export type $Profession_ = "engineer" | "mechanic" | "nuclear" | "metallurg" | "chemist" | "botanist";
}
