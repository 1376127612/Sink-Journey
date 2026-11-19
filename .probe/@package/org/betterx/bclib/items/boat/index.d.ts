import { $ListModel } from "@package/net/minecraft/client/model";
import { $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $ModCore } from "@package/org/betterx/wover/core/api";
import { $Stream } from "@package/java/util/stream";
import { $BoatItem, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/org/betterx/bclib/items/boat" {
    export class $CustomBoatTypeOverride {
    }
    export interface $CustomBoatTypeOverride {
        bcl_getCustomType(): $BoatTypeOverride;
        bcl_setCustomType(arg0: $BoatTypeOverride): void;
    }
    export class $BoatTypeOverride {
        getPlanks(): $Block;
        static byId(arg0: number): $BoatTypeOverride;
        createItem(arg0: boolean): $BoatItem;
        createItem(arg0: boolean, arg1: $Item$Properties): $BoatItem;
        getBoatItem(): $BoatItem;
        getChestBoatItem(): $BoatItem;
        setChestBoatItem(arg0: $BoatItem): void;
        getBoatModel(arg0: boolean): $ListModel<$Boat>;
        setBoatItem(arg0: $BoatItem): void;
        createBoatModels(arg0: $EntityRendererProvider$Context): void;
        name(): string;
        static values(): $Stream<$BoatTypeOverride>;
        static create(arg0: $ModCore, arg1: string, arg2: $Block_): $BoatTypeOverride;
        static create(arg0: $ModCore, arg1: string, arg2: $Block_, arg3: boolean): $BoatTypeOverride;
        ordinal(): number;
        static byName(arg0: string): $BoatTypeOverride;
        boatModelName: $ModelLayerLocation;
        chestBoatTexture: $ResourceLocation;
        boatTexture: $ResourceLocation;
        id: $ResourceLocation;
        chestBoatModelName: $ModelLayerLocation;
        isRaft: boolean;
        get planks(): $Block;
    }
}
