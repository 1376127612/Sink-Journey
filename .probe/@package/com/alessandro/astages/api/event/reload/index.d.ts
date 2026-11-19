import { $Event } from "@package/net/neoforged/bus/api";
import { $Enum } from "@package/java/lang";

declare module "@package/com/alessandro/astages/api/event/reload" {
    export class $ReloadScriptEvent extends $Event {
        getScriptType(): $ReloadScriptEvent$EventScriptType;
        constructor(scriptType: $ReloadScriptEvent$EventScriptType_);
        get scriptType(): $ReloadScriptEvent$EventScriptType;
    }
    export class $ReloadScriptEvent$AfterScriptsLoaded extends $ReloadScriptEvent {
        constructor(scriptType: $ReloadScriptEvent$EventScriptType_);
    }
    export class $ReloadScriptEvent$BeforeScriptsLoaded extends $ReloadScriptEvent {
        constructor(scriptType: $ReloadScriptEvent$EventScriptType_);
    }
    export class $ReloadScriptEvent$EventScriptType extends $Enum<$ReloadScriptEvent$EventScriptType> {
        static values(): $ReloadScriptEvent$EventScriptType[];
        static valueOf(name: string): $ReloadScriptEvent$EventScriptType;
        static SERVER: $ReloadScriptEvent$EventScriptType;
        static STARTUP: $ReloadScriptEvent$EventScriptType;
        static CLIENT: $ReloadScriptEvent$EventScriptType;
    }
    /**
     * Values that may be interpreted as {@link $ReloadScriptEvent$EventScriptType}.
     */
    export type $ReloadScriptEvent$EventScriptType_ = "client" | "server" | "startup";
}
