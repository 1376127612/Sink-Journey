import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ICoolAcceptor, $ICoolTile, $ICoolEmitter } from "@package/com/denfop/api/otherenergies/cool";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $BufferEnergy, $CoolComponent } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/cold" {
    export class $EnergyNetDelegate implements $ICoolTile {
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        getPos(): $BlockPos;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getCoolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        setHashCodeSource(arg0: number): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        getCoolTiles(): $Map<$Direction, $ICoolTile>;
        acceptsCoolFrom(arg0: $ICoolEmitter, arg1: $Direction_): boolean;
        AddCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        emitsCoolTo(arg0: $ICoolAcceptor, arg1: $Direction_): boolean;
        RemoveCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        getSourceEnergy(): number;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $ICoolTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $CoolComponent);
        get pos(): $BlockPos;
        get idNetwork(): number;
        get coolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        get coolTiles(): $Map<$Direction, $ICoolTile>;
        get sourceEnergy(): number;
        set id(value: number);
        get tile(): $BlockEntity;
    }
}
