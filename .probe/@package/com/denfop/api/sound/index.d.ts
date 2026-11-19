import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/sound" {
    export class $EnumTypeAudio extends $Enum<$EnumTypeAudio> {
        static values(): $EnumTypeAudio[];
        static valueOf(arg0: string): $EnumTypeAudio;
        static VALUES: $EnumTypeAudio[];
        static INTERRUPTION: $EnumTypeAudio;
        static OFF: $EnumTypeAudio;
        static ON: $EnumTypeAudio;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeAudio}.
     */
    export type $EnumTypeAudio_ = "on" | "interruption" | "off";
    export class $AudioFixer {
    }
    export interface $AudioFixer {
        getTypeAudio(): $EnumTypeAudio;
        initiate(arg0: number): void;
        getEnable(): boolean;
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        get typeAudio(): $EnumTypeAudio;
        get enable(): boolean;
        set type(value: $EnumTypeAudio_);
        get sound(): $SoundEvent;
    }
}
