import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IHeatEmitter, $IHeatTile, $IHeatAcceptor } from "@package/com/denfop/api/otherenergies/heat";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $BufferEnergy, $HeatComponent } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/heat" {
    export class $EnergyNetDelegate implements $IHeatTile {
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        getPos(): $BlockPos;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getHeatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        setHashCodeSource(arg0: number): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        RemoveHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        acceptsHeatFrom(arg0: $IHeatEmitter, arg1: $Direction_): boolean;
        getHeatTiles(): $Map<$Direction, $IHeatTile>;
        AddHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        getSourceEnergy(): number;
        emitHeatTo(arg0: $IHeatAcceptor, arg1: $Direction_): boolean;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IHeatTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $HeatComponent);
        get pos(): $BlockPos;
        get idNetwork(): number;
        get heatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        get heatTiles(): $Map<$Direction, $IHeatTile>;
        get sourceEnergy(): number;
        set id(value: number);
        get tile(): $BlockEntity;
    }
}
