import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/otherenergies/common" {
    export class $IAcceptor {
    }
    export interface $IAcceptor extends $ITile {
        acceptsFrom(arg0: $IEmitter, arg1: $Direction_): boolean;
    }
    export class $ITile {
    }
    export interface $ITile {
        getPos(): $BlockPos;
        getTiles(arg0: $EnergyType_): $Map<$Direction, $ITile>;
        getValidReceivers(arg0: $EnergyType_): $List<$InfoTile<$ITile>>;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        AddTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        setHashCodeSource(arg0: number): void;
        setId(arg0: number): void;
        getTile(): $BlockEntity;
        get pos(): $BlockPos;
        get idNetwork(): number;
        set id(value: number);
        get tile(): $BlockEntity;
    }
    export class $IEmitter {
    }
    export interface $IEmitter extends $ITile {
        emitsTo(arg0: $IAcceptor, arg1: $Direction_): boolean;
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
        getEnergyType(): $EnergyType;
        getEvent(): $EnumTypeEvent;
        getTile(): $ITile;
        constructor(arg0: $Level_, arg1: $EnumTypeEvent_, arg2: $EnergyType_, arg3: $ITile);
        get energyType(): $EnergyType;
        get event(): $EnumTypeEvent;
        get tile(): $ITile;
    }
    export class $InfoTile<T> {
        tileEntity: T;
        direction: $Direction;
        constructor(arg0: T, arg1: $Direction_);
    }
    export class $EnergyType extends $Enum<$EnergyType> {
        isAuto_mode(): boolean;
        isDraw(): boolean;
        static values(): $EnergyType[];
        static valueOf(arg0: string): $EnergyType;
        getPrefix(): string;
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
        get auto_mode(): boolean;
        get draw(): boolean;
        get prefix(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnergyType}.
     */
    export type $EnergyType_ = "solarium" | "night" | "quantum" | "experience" | "positrons" | "radiation" | "steam" | "biofuel" | "ampere" | "storage";
}
