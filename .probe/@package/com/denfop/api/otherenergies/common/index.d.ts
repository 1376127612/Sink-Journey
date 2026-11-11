import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/otherenergies/common" {
    export class $ITile {
    }
    export interface $ITile {
        setId(arg0: number): void;
        getValidReceivers(arg0: $EnergyType_): $List<$InfoTile<$ITile>>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getPos(): $BlockPos;
        getTile(): $BlockEntity;
        getTiles(arg0: $EnergyType_): $Map<$Direction, $ITile>;
        AddTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        RemoveTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        set id(value: number);
        get idNetwork(): number;
        get pos(): $BlockPos;
        get tile(): $BlockEntity;
    }
    export class $EnumTypeEvent extends $Enum<$EnumTypeEvent> {
        static values(): $EnumTypeEvent[];
        static valueOf(arg0: string): $EnumTypeEvent;
        static LOAD: $EnumTypeEvent;
        static UNLOAD: $EnumTypeEvent;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeEvent}.
     */
    export type $EnumTypeEvent_ = "load" | "unload";
    export class $EnergyEvent extends $LevelEvent {
        getEvent(): $EnumTypeEvent;
        getTile(): $ITile;
        getEnergyType(): $EnergyType;
        constructor(arg0: $Level_, arg1: $EnumTypeEvent_, arg2: $EnergyType_, arg3: $ITile);
        get event(): $EnumTypeEvent;
        get tile(): $ITile;
        get energyType(): $EnergyType;
    }
    export class $InfoTile<T> {
        tileEntity: T;
        direction: $Direction;
        constructor(arg0: T, arg1: $Direction_);
    }
    export class $EnergyType extends $Enum<$EnergyType> {
        static values(): $EnergyType[];
        static valueOf(arg0: string): $EnergyType;
        getPrefix(): string;
        isAuto_mode(): boolean;
        isDraw(): boolean;
        static STORAGE: $EnergyType;
        static NIGHT: $EnergyType;
        static QUANTUM: $EnergyType;
        static SOLARIUM: $EnergyType;
        static STEAM: $EnergyType;
        static BIOFUEL: $EnergyType;
        static AMPERE: $EnergyType;
        static EXPERIENCE: $EnergyType;
        static POSITRONS: $EnergyType;
        static RADIATION: $EnergyType;
        get prefix(): string;
        get auto_mode(): boolean;
        get draw(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnergyType}.
     */
    export type $EnergyType_ = "solarium" | "night" | "quantum" | "experience" | "positrons" | "radiation" | "steam" | "biofuel" | "ampere" | "storage";
}
