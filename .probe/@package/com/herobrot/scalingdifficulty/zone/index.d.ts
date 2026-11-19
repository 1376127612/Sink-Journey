import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $UUID } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/herobrot/scalingdifficulty/zone" {
    export class $DifficultyZone$Shape extends $Enum<$DifficultyZone$Shape> {
        static values(): $DifficultyZone$Shape[];
        static valueOf(arg0: string): $DifficultyZone$Shape;
        static SPHERE: $DifficultyZone$Shape;
        static BOX: $DifficultyZone$Shape;
    }
    /**
     * Values that may be interpreted as {@link $DifficultyZone$Shape}.
     */
    export type $DifficultyZone$Shape_ = "box" | "sphere";
    export class $DifficultyZone {
        getFactor(): number;
        getBoxMin(): $BlockPos;
        getBoxMax(): $BlockPos;
        static fromNbt(arg0: $CompoundTag_): $DifficultyZone;
        toNbt(): $CompoundTag;
        getDisplayText(): string;
        getShortId(): string;
        getName(): string;
        contains(arg0: string, arg1: number, arg2: number, arg3: number): boolean;
        getId(): $UUID;
        getShape(): $DifficultyZone$Shape;
        getDimension(): string;
        getRadius(): number;
        getIdString(): string;
        getCenter(): $BlockPos;
        static createBox(arg0: string, arg1: $BlockPos_, arg2: $BlockPos_, arg3: number, arg4: string | null): $DifficultyZone;
        static formatCoords(arg0: number, arg1: number, arg2: number): string;
        static formatCoords(arg0: $BlockPos_): string;
        getDisplayIdentifier(): $MutableComponent;
        describeComponent(arg0: boolean): $MutableComponent;
        static createSphere(arg0: string, arg1: $BlockPos_, arg2: number, arg3: number, arg4: string | null): $DifficultyZone;
        get factor(): number;
        get boxMin(): $BlockPos;
        get boxMax(): $BlockPos;
        get displayText(): string;
        get shortId(): string;
        get name(): string;
        get id(): $UUID;
        get shape(): $DifficultyZone$Shape;
        get dimension(): string;
        get radius(): number;
        get idString(): string;
        get center(): $BlockPos;
        get displayIdentifier(): $MutableComponent;
    }
}
