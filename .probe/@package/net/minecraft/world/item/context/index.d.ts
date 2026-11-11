import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirection(): $Direction;
        canPlace(): boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        hitResult: $BlockHitResult;
        direction: $Direction;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getRotation(): number;
        getLevel(): $Level;
        getClickLocation(): $Vec3;
        getItemInHand(): $ItemStack;
        isSecondaryUseActive(): boolean;
        isInside(): boolean;
        getPlayer(): $Player;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getHand(): $InteractionHand;
        getHorizontalDirection(): $Direction;
        getHitResult(): $BlockHitResult;
        create$getHitResult(): $BlockHitResult;
        hitResult: $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get rotation(): number;
        get level(): $Level;
        get clickLocation(): $Vec3;
        get itemInHand(): $ItemStack;
        get secondaryUseActive(): boolean;
        get inside(): boolean;
        get player(): $Player;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get hand(): $InteractionHand;
        get horizontalDirection(): $Direction;
    }
}
