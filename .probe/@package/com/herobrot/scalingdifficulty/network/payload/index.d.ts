import { $DifficultyZone, $DifficultyZone$Shape_, $DifficultyZone$Shape } from "@package/com/herobrot/scalingdifficulty/zone";
import { $Record } from "@package/java/lang";

declare module "@package/com/herobrot/scalingdifficulty/network/payload" {
    export class $ZoneSyncPayload$ZoneEntry extends $Record {
        radius(): number;
        maxZ(): number;
        maxY(): number;
        minZ(): number;
        minY(): number;
        shortId(): string;
        name(): string;
        contains(arg0: string, arg1: number, arg2: number, arg3: number): boolean;
        static from(arg0: $DifficultyZone): $ZoneSyncPayload$ZoneEntry;
        shape(): $DifficultyZone$Shape;
        getDisplayName(): string;
        dimension(): string;
        factor(): number;
        minX(): number;
        maxX(): number;
        constructor(dimension: string, shape: $DifficultyZone$Shape_, factor: number, name: string | null, shortId: string, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, radius: number);
        get displayName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ZoneSyncPayload$ZoneEntry}.
     */
    export type $ZoneSyncPayload$ZoneEntry_ = { dimension?: string, maxZ?: number, maxY?: number, maxX?: number, shortId?: string, radius?: number, name?: string, factor?: number, shape?: $DifficultyZone$Shape_, minZ?: number, minY?: number, minX?: number,  } | [dimension?: string, maxZ?: number, maxY?: number, maxX?: number, shortId?: string, radius?: number, name?: string, factor?: number, shape?: $DifficultyZone$Shape_, minZ?: number, minY?: number, minX?: number, ];
}
