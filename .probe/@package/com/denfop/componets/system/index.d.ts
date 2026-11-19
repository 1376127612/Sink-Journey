import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $EnergyType_, $IAcceptor, $ITile, $InfoTile, $IEmitter } from "@package/com/denfop/api/otherenergies/common";
import { $BufferEnergy, $ComponentBaseEnergy } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/system" {
    export class $EnergyNetDelegate implements $ITile {
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        getPos(): $BlockPos;
        getTiles(arg0: $EnergyType_): $Map<$Direction, $ITile>;
        getValidReceivers(arg0: $EnergyType_): $List<$InfoTile<$ITile>>;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        emitsTo(arg0: $IAcceptor, arg1: $Direction_): boolean;
        RemoveTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        AddTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        setHashCodeSource(arg0: number): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        acceptsFrom(arg0: $IEmitter, arg1: $Direction_): boolean;
        getSourceEnergy(): number;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $ITile>;
        sendingSidabled: boolean;
        tick1: number;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $ComponentBaseEnergy);
        get pos(): $BlockPos;
        get idNetwork(): number;
        get sourceEnergy(): number;
        set id(value: number);
        get tile(): $BlockEntity;
    }
}
