import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Map } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/entity" {
    export class $AccessFallingBlockEntity {
    }
    export interface $AccessFallingBlockEntity {
        crafttweaker$setBlockState(arg0: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessFallingBlockEntity}.
     */
    export type $AccessFallingBlockEntity_ = ((arg0: $BlockState) => void);
    export class $AccessLightningBolt {
    }
    export interface $AccessLightningBolt {
        crafttweaker$isVisualOnly(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessLightningBolt}.
     */
    export type $AccessLightningBolt_ = (() => boolean);
    export class $AccessFakePlayerFactory {
        static crafttweaker$getMINECRAFT(): $GameProfile;
        static crafttweaker$getFakePlayers(): $Map<$GameProfile, $FakePlayer>;
    }
    export interface $AccessFakePlayerFactory {
    }
}
