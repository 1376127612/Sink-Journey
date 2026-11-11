import { $Level_ } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $SupportOpenPartiesAndClaims } from "@package/xaero/common/mods/pac";
import { $SupportWaystones } from "@package/xaero/hud/compat/mods";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as pac from "@package/xaero/common/mods/pac";

declare module "@package/xaero/common/mods" {
    export class $SupportIris {
        constructor();
    }
    export class $SupportXaeroWorldmap {
    }
    export class $SupportMods {
        checkLater(): void;
        pac(): boolean;
        shouldUseWorldMapCaveChunks(): boolean;
        static checkForMinimapDuplicates(arg0: string): void;
        onClientTick(): void;
        registerClientEvents(): void;
        framedBlocks(): boolean;
        waystones(): boolean;
        worldmap(): boolean;
        shouldUseWorldMapChunks(): boolean;
        onMinimapSessionStarted(arg0: $MinimapSession): void;
        getSupportWaystones(): $SupportWaystones;
        supportIris: $SupportIris;
        iris: boolean;
        xaeroPac: $SupportOpenPartiesAndClaims;
        optifine: boolean;
        ftbTeams: boolean;
        supportFramedBlocks: $SupportFramedBlocks;
        vivecraft: boolean;
        worldmapSupport: $SupportXaeroWorldmap;
        constructor(arg0: $IXaeroMinimap);
        get supportWaystones(): $SupportWaystones;
    }
    export class $SupportFramedBlocks {
        onWorldChange(): void;
        isFrameBlock(arg0: $Level_, arg1: $Registry<$Block_>, arg2: $BlockState_): boolean;
        unpackFramedBlock(arg0: $Level_, arg1: $Registry<$Block_>, arg2: $BlockState_, arg3: $BlockEntity): $BlockState;
        constructor();
    }
}
