import { $Conduit, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $FacadeType } from "@package/com/enderio/enderio/api/conduits/facade";
import { $Consumer_ } from "@package/java/util/function";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $Holder_, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $ConnectionStatus } from "@package/com/enderio/enderio/api/conduits/connection";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";

declare module "@package/com/enderio/enderio/api/conduits/bundle" {
    export class $ConduitBundle {
    }
    export interface $ConduitBundle {
        hasFacade(): boolean;
        getFacadeBlock(): $Block;
        getConduits(): $List<$Holder<$Conduit<never, never>>>;
        getConnectionConfig<T extends $ConnectionConfig>(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfigType_<T>): T;
        getConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionConfig;
        setConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfig): void;
        addConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $Player): $AddConduitResult;
        hasCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): $Holder<$Conduit<never, never>>;
        getConnectionStatus(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionStatus;
        getConnectionInventory(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $IItemHandlerModifiable;
        getConduitExtraGuiData(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $CompoundTag;
        getConduitExtraWorldData(arg0: $Holder_<$Conduit<never, never>>): $CompoundTag;
        getConnectedConduits(arg0: $Direction_): $List<$Holder<$Conduit<never, never>>>;
        getFacadeProvider(): $ItemStack;
        getConduitByType(arg0: $ConduitType_<never, never>): $Holder<$Conduit<never, never>>;
        canAddConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        removeConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Consumer_<$ItemStack>): void;
        setFacadeProvider(arg0: $ItemStack_): void;
        hasConduitOfType(arg0: $ConduitType_<never, never>): boolean;
        hasConduitStrict(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getFacadeType(): $FacadeType;
        tryConnectTo(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: boolean): boolean;
        getConduitNode(arg0: $Holder_<$Conduit<never, never>>): $ConduitNode;
        isEmpty(): boolean;
        isFull(): boolean;
        get facadeBlock(): $Block;
        get conduits(): $List<$Holder<$Conduit<never, never>>>;
        get facadeType(): $FacadeType;
        get empty(): boolean;
        get full(): boolean;
    }
    /**
     * @deprecated
     */
    export class $SlotType extends $Enum<$SlotType> {
        static values(): $SlotType[];
        static valueOf(arg0: string): $SlotType;
        getX(): number;
        getY(): number;
        static FILTER_INSERT: $SlotType;
        static FILTER_EXTRACT: $SlotType;
        static UPGRADE_EXTRACT: $SlotType;
        static Y_POSITION: number;
        get x(): number;
        get y(): number;
    }
    /**
     * Values that may be interpreted as {@link $SlotType}.
     */
    export type $SlotType_ = "filter_extract" | "filter_insert" | "upgrade_extract";
    export class $AddConduitResult {
    }
    export interface $AddConduitResult {
        hasChanged(): boolean;
    }
}
