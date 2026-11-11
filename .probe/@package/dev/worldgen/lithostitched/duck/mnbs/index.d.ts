import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterList, $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/dev/worldgen/lithostitched/duck/mnbs" {
    export class $MNBSDuck {
    }
    export interface $MNBSDuck {
        lithostitched$setEntries(arg0: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
        lithostitched$getEntries(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
    }
    export class $MNBSPLDuck {
    }
    export interface $MNBSPLDuck {
        lithostitched$getMigrationBiome(): ($Holder<$Biome>) | undefined;
        lithostitched$setMigrationBiome(arg0: ($Holder_<$Biome>) | undefined): void;
        lithostitched$setParameters(arg0: $Climate$ParameterList<$Holder_<$Biome>>): void;
    }
}
