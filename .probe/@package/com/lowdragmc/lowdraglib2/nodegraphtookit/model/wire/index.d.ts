import { $WireElement, $GraphElement } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $IMovable, $GraphElementModel, $IGraphElementUIModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $AbstractNodeModel, $PortModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Enum, $Record } from "@package/java/lang";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $UUID, $List } from "@package/java/util";
import { $Vector2f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/wire" {
    export class $WireModel extends $GraphElementModel implements $IPortWireIndexModel, $IGraphElementUIModel {
        setPorts(arg0: $PortModel, arg1: $PortModel): void;
        getToPort(): $PortModel;
        getFromPort(): $PortModel;
        static getNodeUidFromTag(arg0: $CompoundTag_, arg1: boolean): $UUID;
        static getPortIdFromTag(arg0: $CompoundTag_, arg1: boolean): string;
        setRouteVia(arg0: $WireReroutePointModel): void;
        getReroutePoints(): $List<$WireReroutePointModel>;
        getRouteVia(): $WireReroutePointModel;
        static getFromPortUidFromTag(arg0: $CompoundTag_): $UUID;
        static getToPortUidFromTag(arg0: $CompoundTag_): $UUID;
        static getRouteViaUidFromTag(arg0: $CompoundTag_): $UUID;
        createElementUI(): $WireElement;
        getPort(arg0: $WireSide_): $PortModel;
        setPort(arg0: $WireSide_, arg1: $PortModel): void;
        setToPort(arg0: $PortModel): void;
        addMissingPorts(): $Pair<$WireModel$AddMissingPortResult, $WireModel$AddMissingPortResult>;
        setFromPort(arg0: $PortModel): void;
        getOtherPort(arg0: $WireSide_): $PortModel;
        getFromPortUid(): $UUID;
        getToPortUid(): $UUID;
        setBubbleText(arg0: $Component_): void;
        getBubbleText(): $Component;
        asModel(): $GraphElementModel;
        constructor();
        get reroutePoints(): $List<$WireReroutePointModel>;
        get fromPortUid(): $UUID;
        get toPortUid(): $UUID;
    }
    export class $WireModel$AddMissingPortResult extends $Record {
        nodeModel(): $AbstractNodeModel;
        result(): $PortMigrationResult;
        constructor(result: $PortMigrationResult, nodeModel: $AbstractNodeModel);
    }
    /**
     * Values that may be interpreted as {@link $WireModel$AddMissingPortResult}.
     */
    export type $WireModel$AddMissingPortResult_ = { result?: $PortMigrationResult, nodeModel?: $AbstractNodeModel,  } | [result?: $PortMigrationResult, nodeModel?: $AbstractNodeModel, ];
    export class $WireSide extends $Enum<$WireSide> {
        getOpposite(): $WireSide;
        static values(): $WireSide[];
        static valueOf(arg0: string): $WireSide;
        static FROM: $WireSide;
        static TO: $WireSide;
        get opposite(): $WireSide;
    }
    /**
     * Values that may be interpreted as {@link $WireSide}.
     */
    export type $WireSide_ = "from" | "to";
    export class $WireReroutePointModel extends $GraphElementModel implements $IMovable, $IGraphElementUIModel {
        setCenter(arg0: $Vector2f): void;
        static chainContains(arg0: $WireReroutePointModel, arg1: $WireReroutePointModel): boolean;
        setUpstream(arg0: $WireReroutePointModel): void;
        getUpstream(): $WireReroutePointModel;
        createElementUI(): $GraphElement<never>;
        move(arg0: $Vector2f): void;
        getPosition(): $Vector2f;
        setPosition(arg0: $Vector2f): void;
        getCenter(): $Vector2f;
        static chainFrom(arg0: $WireReroutePointModel): $List<$WireReroutePointModel>;
        getSourcePort(): $PortModel;
        getInputAnchor(): $Vector2f;
        getOutputAnchor(): $Vector2f;
        static centerToPosition(arg0: $Vector2f): $Vector2f;
        asModel(): $GraphElementModel;
        static DOT_SIZE: number;
        static WIDTH: number;
        static HEIGHT: number;
        static DOT_INSET: number;
        constructor();
        constructor(arg0: $Vector2f);
        get sourcePort(): $PortModel;
        get inputAnchor(): $Vector2f;
        get outputAnchor(): $Vector2f;
    }
    export class $IPortWireIndexModel {
    }
    export interface $IPortWireIndexModel {
        getToPort(): $PortModel;
        getFromPort(): $PortModel;
        get toPort(): $PortModel;
        get fromPort(): $PortModel;
    }
}
