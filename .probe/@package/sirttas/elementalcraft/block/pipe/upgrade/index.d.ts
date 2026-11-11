import { $ItemLike } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PipeUpgradeCapability } from "@package/sirttas/elementalcraft/block/pipe/upgrade/capability";
import { $IElementTransferPathNode_, $IElementTransferPath } from "@package/sirttas/elementalcraft/api/element/transfer/path";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PipeUpgradeType } from "@package/sirttas/elementalcraft/block/pipe/upgrade/type";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $HolderLookup$Provider, $BlockPos, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ElementType_ } from "@package/sirttas/elementalcraft/api/element";
import { $RenderShape } from "@package/net/minecraft/world/level/block";
import { $ConnectionType_, $ElementPipeBlockEntity } from "@package/sirttas/elementalcraft/block/pipe";
export * as type from "@package/sirttas/elementalcraft/block/pipe/upgrade/type";
export * as capability from "@package/sirttas/elementalcraft/block/pipe/upgrade/capability";

declare module "@package/sirttas/elementalcraft/block/pipe/upgrade" {
    export class $PipeUpgrade extends $AttachmentHolder implements $ItemLike {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getKey(): $ResourceLocation;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getType(): $PipeUpgradeType<never>;
        getShape(): $VoxelShape;
        getCapability<T, C>(arg0: $PipeUpgradeCapability<T, C>, arg1: C): T;
        getPipe(): $ElementPipeBlockEntity;
        getDirection(): $Direction;
        getConnections(arg0: $ElementType_, arg1: $ConnectionType_): $List<$BlockPos>;
        getRenderShape(): $RenderShape;
        onRemoved(): void;
        getWeight(): number;
        asItem(): $Item;
        canTransfer(arg0: $ElementType_, arg1: $ConnectionType_): boolean;
        dropAll(arg0: $Player): void;
        canPlace(arg0: $ConnectionType_): boolean;
        alterPath(arg0: $IElementTransferPath): $IElementTransferPath;
        replaceSection(): boolean;
        replaceExtraction(): boolean;
        onAdded(): void;
        onTransfer(arg0: $ElementType_, arg1: number, arg2: $IElementTransferPathNode_, arg3: $IElementTransferPathNode_): void;
        static ATTACHMENTS_NBT_KEY: string;
        static FOLDER: string;
        get key(): $ResourceLocation;
        get type(): $PipeUpgradeType<never>;
        get shape(): $VoxelShape;
        get pipe(): $ElementPipeBlockEntity;
        get direction(): $Direction;
        get renderShape(): $RenderShape;
        get weight(): number;
    }
}
