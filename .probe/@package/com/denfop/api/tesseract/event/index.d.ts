import { $Level_ } from "@package/net/minecraft/world/level";
import { $Channel, $ITesseract } from "@package/com/denfop/api/tesseract";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/tesseract/event" {
    export class $EventRemoverChannel extends $LevelEvent {
        getChannel(): $Channel;
        constructor(arg0: $Channel, arg1: $Level_);
        get channel(): $Channel;
    }
    export class $EventLoadTesseract extends $LevelEvent {
        getTesseract(): $ITesseract;
        constructor(arg0: $ITesseract, arg1: $Level_);
        get tesseract(): $ITesseract;
    }
    export class $EventUnLoadTesseract extends $LevelEvent {
        getTesseract(): $ITesseract;
        constructor(arg0: $ITesseract, arg1: $Level_);
        get tesseract(): $ITesseract;
    }
    export class $EventAdderChannel extends $LevelEvent {
        getChannel(): $Channel;
        constructor(arg0: $Channel, arg1: $Level_);
        get channel(): $Channel;
    }
}
