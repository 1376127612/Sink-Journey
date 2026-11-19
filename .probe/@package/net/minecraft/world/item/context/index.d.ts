import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        getNearestLookingVerticalDirection(): $Direction;
        canPlace(): boolean;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        handler$gei000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        handler$gei000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$gei000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingDirections(): $Direction[];
        hitResult: $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        hitResult: $BlockHitResult;
        direction: $Direction;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        isInside(): boolean;
        getHorizontalDirection(): $Direction;
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        getLevel(): $Level;
        getRotation(): number;
        getPlayer(): $Player;
        getItemInHand(): $ItemStack;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getClickLocation(): $Vec3;
        isSecondaryUseActive(): boolean;
        create$getHitResult(): $BlockHitResult;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        get inside(): boolean;
        get horizontalDirection(): $Direction;
        get hand(): $InteractionHand;
        get level(): $Level;
        get rotation(): number;
        get player(): $Player;
        get itemInHand(): $ItemStack;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get clickLocation(): $Vec3;
        get secondaryUseActive(): boolean;
    }
}
