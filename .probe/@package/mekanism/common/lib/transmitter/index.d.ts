import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent, $ILangEntry, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IIncrementalEnum } from "@package/mekanism/api";
import { $UUID, $List, $Set, $Collection_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BufferedTransmitter, $Transmitter } from "@package/mekanism/common/content/network/transmitter";
import { $IntFunction, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Range3D } from "@package/mekanism/common/lib/math";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Enum, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as acceptor from "@package/mekanism/common/lib/transmitter/acceptor";

declare module "@package/mekanism/common/lib/transmitter" {
    export class $CompatibleTransmitterValidator<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> {
        isNetworkCompatible(net: NETWORK): boolean;
        isTransmitterCompatible(transmitter: $Transmitter<never, never, never>): boolean;
        constructor();
    }
    export class $ConnectionType extends $Enum<$ConnectionType> implements $IIncrementalEnum<$ConnectionType>, $StringRepresentable, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent {
        getTranslationKey(): string;
        getSerializedName(): string;
        byIndex(index: number): $ConnectionType;
        getTextComponent(): $Component;
        static values(): $ConnectionType[];
        static valueOf(name: string): $ConnectionType;
        canAccept(): boolean;
        canSendTo(): boolean;
        getNext(): $ConnectionType;
        getNext(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        adjust(arg0: number): $ConnectionType;
        adjust(arg0: number, arg1: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(): $ConnectionType;
        getRemappedEnumConstantName(): string;
        getTranslatedName(): $Component;
        static PULL: $ConnectionType;
        static BY_ID: $IntFunction<$ConnectionType>;
        static NONE: $ConnectionType;
        static NORMAL: $ConnectionType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConnectionType>;
        static PUSH: $ConnectionType;
        get translationKey(): string;
        get serializedName(): string;
        get textComponent(): $Component;
        get remappedEnumConstantName(): string;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "normal" | "push" | "pull" | "none";
    export class $INetworkDataHandler {
    }
    export interface $INetworkDataHandler {
        getNeededInfo(): $Component;
        getFlowInfo(): $Component;
        getStoredInfo(): $Component;
        getNetworkReaderCapacity(): $Object;
        get neededInfo(): $Component;
        get flowInfo(): $Component;
        get storedInfo(): $Component;
        get networkReaderCapacity(): $Object;
    }
    export class $TransmissionType extends $Enum<$TransmissionType> implements $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
        checkTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        checkTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        getTranslationKey(): string;
        getSerializedName(): string;
        getTransmission(): string;
        getLegacyOrdinal(): number;
        getLangEntry(): $ILangEntry;
        getName(): string;
        static values(): $TransmissionType[];
        static valueOf(name: string): $TransmissionType;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ITEM: $TransmissionType;
        static HEAT: $TransmissionType;
        static ENERGY: $TransmissionType;
        static CODEC: $Codec<$TransmissionType>;
        static FLUID: $TransmissionType;
        static BY_ID: $IntFunction<$TransmissionType>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TransmissionType>;
        static CHEMICAL: $TransmissionType;
        get translationKey(): string;
        get serializedName(): string;
        get transmission(): string;
        get legacyOrdinal(): number;
        get langEntry(): $ILangEntry;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TransmissionType}.
     */
    export type $TransmissionType_ = "energy" | "fluids" | "chemicals" | "items" | "heat";
    export class $DynamicBufferedNetwork$TransferEvent<NETWORK extends $DynamicBufferedNetwork<never, NETWORK, never, never>> extends $Event {
        network: NETWORK;
        constructor(network: NETWORK);
    }
    export class $DynamicNetwork<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $INetworkDataHandler, $IHasTextComponent {
        deregister(): void;
        hasAcceptor(acceptorPos: $BlockPos_): boolean;
        getTransmitters(): $Collection<TRANSMITTER>;
        getAcceptorCount(): number;
        transmittersSize(): number;
        isRemote(): boolean;
        getAcceptorDirections(pos: number): $Set<$Direction>;
        getTransmitter(pos: number): TRANSMITTER;
        getTransmitter(pos: $BlockPos_): TRANSMITTER;
        getCachedAcceptor(acceptorPos: number, side: $Direction_): ACCEPTOR;
        removeTransmitter(transmitter: TRANSMITTER): void;
        acceptorChanged(transmitter: TRANSMITTER, side: $Direction_): void;
        addTransmitter(transmitter: TRANSMITTER): void;
        addNewTransmitters(newTransmitters: $Collection_<TRANSMITTER>, transmitterValidator: $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>): void;
        getTransmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        commit(): void;
        isEmpty(): boolean;
        register(): void;
        invalidate(triggerTransmitter: TRANSMITTER): void;
        getWorld(): $Level;
        getUUID(): $UUID;
        onUpdate(): void;
        getNeededInfo(): $Component;
        getFlowInfo(): $Component;
        getStoredInfo(): $Component;
        getNetworkReaderCapacity(): $Object;
        get transmitters(): $Collection<TRANSMITTER>;
        get acceptorCount(): number;
        get remote(): boolean;
        get transmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get empty(): boolean;
        get world(): $Level;
        get UUID(): $UUID;
        get neededInfo(): $Component;
        get flowInfo(): $Component;
        get storedInfo(): $Component;
        get networkReaderCapacity(): $Object;
    }
    export class $DynamicBufferedNetwork<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER> {
        markDirty(): void;
        getPacketRange(): $Range3D;
        validateSaveShares(triggerTransmitter: TRANSMITTER): void;
        clampBuffer(): void;
        updateCapacity(): void;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        absorbBuffer(transmitter: TRANSMITTER): void;
        getCapacity(): number;
        getBuffer(): BUFFER;
        isCompatibleWith(other: NETWORK): boolean;
        currentScale: number;
        get packetRange(): $Range3D;
        get capacity(): number;
        get buffer(): BUFFER;
    }
}
