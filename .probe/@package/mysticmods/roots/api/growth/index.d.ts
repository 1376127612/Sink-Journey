import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/mysticmods/roots/api/growth" {
    export class $CanHarvestFunction {
    }
    export interface $CanHarvestFunction {
        test(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $IntegerProperty, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CanHarvestFunction}.
     */
    export type $CanHarvestFunction_ = RegistryTypes.RootsCanHarvestFunctions | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $IntegerProperty, arg4: number) => boolean);
    export class $HarvestFunction {
    }
    export interface $HarvestFunction {
        harvest(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: $IntegerProperty, arg5: number, arg6: $Item_): void;
    }
    /**
     * Values that may be interpreted as {@link $HarvestFunction}.
     */
    export type $HarvestFunction_ = RegistryTypes.RootsHarvestFunctions | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $LivingEntity, arg4: $IntegerProperty, arg5: number, arg6: $Item) => void);
    export interface $CanGrowFunction extends RegistryMarked<RegistryTypes.RootsCanGrowFunctionsTag, RegistryTypes.RootsCanGrowFunctions> {}
    export interface $CanHarvestFunction extends RegistryMarked<RegistryTypes.RootsCanHarvestFunctionsTag, RegistryTypes.RootsCanHarvestFunctions> {}
    export class $CanGrowFunction {
    }
    export interface $CanGrowFunction {
        test(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $IntegerProperty, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CanGrowFunction}.
     */
    export type $CanGrowFunction_ = RegistryTypes.RootsCanGrowFunctions | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $IntegerProperty, arg4: number) => boolean);
    export class $LightFunction {
    }
    export interface $LightFunction {
        test(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LightFunction}.
     */
    export type $LightFunction_ = RegistryTypes.RootsLightFunctions | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => boolean);
    export interface $LightFunction extends RegistryMarked<RegistryTypes.RootsLightFunctionsTag, RegistryTypes.RootsLightFunctions> {}
    export interface $HarvestFunction extends RegistryMarked<RegistryTypes.RootsHarvestFunctionsTag, RegistryTypes.RootsHarvestFunctions> {}
}
