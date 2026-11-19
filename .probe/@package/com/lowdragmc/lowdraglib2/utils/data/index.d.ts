import { $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/lowdragmc/lowdraglib2/utils/data" {
    export class $EntityInfo {
        getEntityType(): $EntityType<never>;
        setEntityType(arg0: $EntityType_<never>): void;
        static of(arg0: number): $EntityInfo;
        static of(arg0: number, arg1: $EntityType_<never>, arg2: $CompoundTag_): $EntityInfo;
        static of(arg0: number, arg1: $EntityType_<never>): $EntityInfo;
        getId(): number;
        getTag(): $CompoundTag;
        setTag(arg0: $CompoundTag_): void;
        setId(arg0: number): void;
    }
    export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
        static fromBlock(arg0: $Block_): $BlockInfo;
        setBlockState(arg0: $BlockState_): void;
        setHasBlockEntity(arg0: boolean): void;
        setPostCreate(arg0: $Consumer_<$BlockEntity>): void;
        postEntity(arg0: $BlockEntity): void;
        getBlockState(): $BlockState;
        hasBlockEntity(): boolean;
        setTag(arg0: $CompoundTag_): void;
        setItemStack(arg0: $ItemStack_): void;
        getItemStackForm(arg0: $LevelReader, arg1: $BlockPos_): $ItemStack;
        getItemStackForm(): $ItemStack;
        static fromBlockState(arg0: $BlockState_): $BlockInfo;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        static EMPTY: $BlockInfo;
        constructor();
        constructor(arg0: $Block_);
        constructor(arg0: $BlockState_);
        constructor(arg0: $BlockState_, arg1: boolean);
        constructor(arg0: $BlockState_, arg1: $Consumer_<$BlockEntity>);
        constructor(arg0: $BlockState_, arg1: boolean, arg2: $ItemStack_, arg3: $Consumer_<$BlockEntity>);
        set postCreate(value: $Consumer_<$BlockEntity>);
        set tag(value: $CompoundTag_);
        set itemStack(value: $ItemStack_);
        get configurableName(): string;
    }
    export class $BlockPosFace extends $Record {
        facing(): $Direction;
        pos(): $BlockPos;
        constructor(pos: $BlockPos_, facing: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $BlockPosFace}.
     */
    export type $BlockPosFace_ = { pos?: $BlockPos_, facing?: $Direction_,  } | [pos?: $BlockPos_, facing?: $Direction_, ];
}
