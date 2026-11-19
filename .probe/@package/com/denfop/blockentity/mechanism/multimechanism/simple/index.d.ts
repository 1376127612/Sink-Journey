import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockEntityMultiMachine } from "@package/com/denfop/blockentity/base";
import { $Inventory, $InventoryDischarge } from "@package/com/denfop/inventory";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $CoolComponent, $Energy, $ProcessMultiComponent, $ComponentBaseEnergy, $SoilPollutionComponent, $HeatComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $EnumSolarPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/multimechanism/simple" {
    export class $BlockEntityGearMachine extends $BlockEntityMultiMachine {
        static addrecipe(arg0: string, arg1: string): void;
        static itemNames7(): $List<string>;
        static itemNames1(): $List<string>;
        static itemNames(): $List<string>;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        customPersistentData: $CompoundTag;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static LOGGER: $Logger;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
