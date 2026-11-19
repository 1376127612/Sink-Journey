import { $CauldronInteraction$InteractionMap, $CauldronInteraction$InteractionMap_ } from "@package/net/minecraft/core/cauldron";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/block" {
    export class $AccessBlockBehaviour {
    }
    export interface $AccessBlockBehaviour {
        crafttweaker$getExplosionResistance(): number;
        crafttweaker$setExplosionResistance(arg0: number): void;
        crafttweaker$getSpeedFactor(): number;
        crafttweaker$setSpeedFactor(arg0: number): void;
        crafttweaker$getHasCollision(): boolean;
        crafttweaker$setHasCollision(arg0: boolean): void;
        crafttweaker$setFriction(arg0: number): void;
        crafttweaker$getJumpFactor(): number;
        crafttweaker$setJumpFactor(arg0: number): void;
        crafttweaker$getFriction(): number;
    }
    export class $AccessAbstractCauldronBlock {
    }
    export interface $AccessAbstractCauldronBlock {
        crafttweaker$getInteractions(): $CauldronInteraction$InteractionMap;
    }
    /**
     * Values that may be interpreted as {@link $AccessAbstractCauldronBlock}.
     */
    export type $AccessAbstractCauldronBlock_ = (() => $CauldronInteraction$InteractionMap_);
    export class $AccessBlockStateBase {
    }
    export interface $AccessBlockStateBase {
        crafttweaker$setRequiresCorrectToolForDrops(arg0: boolean): void;
        crafttweaker$isUseShapeForLightOcclusion(): boolean;
        crafttweaker$setUseShapeForLightOcclusion(arg0: boolean): void;
        crafttweaker$isRequiresCorrectToolForDrops(): boolean;
        crafttweaker$getDestroySpeed(): number;
        crafttweaker$setLightEmission(arg0: number): void;
        crafttweaker$getLightEmission(): number;
        crafttweaker$setDestroySpeed(arg0: number): void;
        crafttweaker$isCanOcclude(): boolean;
        crafttweaker$setIsAir(arg0: boolean): void;
        crafttweaker$setCanOcclude(arg0: boolean): void;
        crafttweaker$isIsAir(): boolean;
    }
}
