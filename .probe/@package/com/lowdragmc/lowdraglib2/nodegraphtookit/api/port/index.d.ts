import { $DataResult } from "@package/com/mojang/serialization";
import { $OrderedPorts, $PortModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $Component } from "@package/net/minecraft/network/chat";
import { $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $Type } from "@package/java/lang/reflect";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/port" {
    export class $PortModelOptions extends $Enum<$PortModelOptions> {
        hasFlag(arg0: $PortModelOptions_): boolean;
        static values(): $PortModelOptions[];
        static valueOf(arg0: string): $PortModelOptions;
        static NO_EMBEDDED_CONSTANT: $PortModelOptions;
        static NODE_OPTION: $PortModelOptions;
        static HIDDEN: $PortModelOptions;
        static NONE: $PortModelOptions;
        mask: number;
    }
    /**
     * Values that may be interpreted as {@link $PortModelOptions}.
     */
    export type $PortModelOptions_ = "none" | "no_embedded_constant" | "hidden" | "node_option";
    export class $PortType extends $Enum<$PortType> {
        static values(): $PortType[];
        static valueOf(arg0: string): $PortType;
        static MISSING_PORT: $PortType;
        static STATE: $PortType;
        static DEFAULT: $PortType;
    }
    /**
     * Values that may be interpreted as {@link $PortType}.
     */
    export type $PortType_ = "default" | "state" | "missing_port";
    export class $IPort {
    }
    export interface $IPort {
        getDataType(): $Type;
        getDataTypeHandle(): $TypeHandle;
        getConnectedPorts(arg0: $List_<$IPort>): void;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        getName(): string;
        getDisplayName(): $Component;
        isConnected(): boolean;
        getDirection(): $PortDirection;
        getFirstConnectedPort(): $IPort;
        get dataType(): $Type;
        get dataTypeHandle(): $TypeHandle;
        get name(): string;
        get displayName(): $Component;
        get connected(): boolean;
        get direction(): $PortDirection;
        get firstConnectedPort(): $IPort;
    }
    export class $PortConnectorUI extends $Record {
        getIcon(arg0: $PortModel): $IGuiTexture;
        getIcon(arg0: boolean): $IGuiTexture;
        connectedIcon(): $IGuiTexture;
        unconnectedIcon(): $IGuiTexture;
        static DEFAULT: $PortConnectorUI;
        static FLOW: $PortConnectorUI;
        constructor(unconnectedIcon: $IGuiTexture_, connectedIcon: $IGuiTexture_);
    }
    /**
     * Values that may be interpreted as {@link $PortConnectorUI}.
     */
    export type $PortConnectorUI_ = { unconnectedIcon?: $IGuiTexture_, connectedIcon?: $IGuiTexture_,  } | [unconnectedIcon?: $IGuiTexture_, connectedIcon?: $IGuiTexture_, ];
    export class $PortDirection extends $Enum<$PortDirection> implements $StringRepresentable {
        getOpposite(): $PortDirection;
        getSerializedName(): string;
        static values(): $PortDirection[];
        static valueOf(arg0: string): $PortDirection;
        getRemappedEnumConstantName(): string;
        static INPUT: $PortDirection;
        static OUTPUT: $PortDirection;
        static NONE: $PortDirection;
        mask: number;
        get opposite(): $PortDirection;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PortDirection}.
     */
    export type $PortDirection_ = "none" | "input" | "output";
    export class $PortOrientation extends $Enum<$PortOrientation> {
        static values(): $PortOrientation[];
        static valueOf(arg0: string): $PortOrientation;
        static Vertical: $PortOrientation;
        static Horizontal: $PortOrientation;
    }
    /**
     * Values that may be interpreted as {@link $PortOrientation}.
     */
    export type $PortOrientation_ = "horizontal" | "vertical";
    export class $PortInfos {
        clear(): void;
        expandedPortsById: $Map<string, $PortModel>;
        previousPorts: $OrderedPorts;
        portsById: $OrderedPorts;
        orderedVisiblePorts: $List<$PortModel>;
        constructor();
    }
    export class $PortCapacity extends $Enum<$PortCapacity> {
        static values(): $PortCapacity[];
        static valueOf(arg0: string): $PortCapacity;
        static SINGLE: $PortCapacity;
        static NONE: $PortCapacity;
        static MULTIPLE: $PortCapacity;
    }
    /**
     * Values that may be interpreted as {@link $PortCapacity}.
     */
    export type $PortCapacity_ = "none" | "multiple" | "single";
}
