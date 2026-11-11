import { $ChannelAccess$ChannelHandle, $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/earth/terrarium/adastra/mixins/client" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        invokeDoesMobEffectBlockSky(arg0: $Camera): boolean;
        getTicks(): number;
        getSkyBuffer(): $VertexBuffer;
        get ticks(): number;
        get skyBuffer(): $VertexBuffer;
    }
    export class $SoundManagerAccessor {
    }
    export interface $SoundManagerAccessor {
        getEngine(): $SoundEngine;
        get engine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $SoundManagerAccessor}.
     */
    export type $SoundManagerAccessor_ = (() => $SoundEngine);
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        getSoundChannels(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        get soundChannels(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
    }
    /**
     * Values that may be interpreted as {@link $SoundEngineAccessor}.
     */
    export type $SoundEngineAccessor_ = (() => $Map_<$SoundInstance, $ChannelAccess$ChannelHandle>);
}
