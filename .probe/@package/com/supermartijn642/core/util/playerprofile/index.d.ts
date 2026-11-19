import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/com/supermartijn642/core/util/playerprofile" {
    export class $PlayerProfileCache$Skin {
    }
    export interface $PlayerProfileCache$Skin {
        modelType(): $PlayerProfileCache$Skin$ModelType;
        cape(): $ResourceLocation;
        body(): $ResourceLocation;
        elytra(): $ResourceLocation;
    }
    export class $PlayerProfileCache$Skin$ModelType extends $Enum<$PlayerProfileCache$Skin$ModelType> {
        static values(): $PlayerProfileCache$Skin$ModelType[];
        static valueOf(name: string): $PlayerProfileCache$Skin$ModelType;
        static SLIM: $PlayerProfileCache$Skin$ModelType;
        static WIDE: $PlayerProfileCache$Skin$ModelType;
    }
    /**
     * Values that may be interpreted as {@link $PlayerProfileCache$Skin$ModelType}.
     */
    export type $PlayerProfileCache$Skin$ModelType_ = "slim" | "wide";
}
