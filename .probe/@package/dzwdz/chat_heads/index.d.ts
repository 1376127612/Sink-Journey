import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Record } from "@package/java/lang";
export * as mixininterface from "@package/dzwdz/chat_heads/mixininterface";

declare module "@package/dzwdz/chat_heads" {
    export class $HeadData extends $Record {
        codePointIndex(): number;
        static of(playerInfo: $PlayerInfo): $HeadData;
        hasHeadPosition(): boolean;
        playerInfo(): $PlayerInfo;
        static EMPTY: $HeadData;
        constructor(playerInfo: $PlayerInfo, codePointIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $HeadData}.
     */
    export type $HeadData_ = { codePointIndex?: number, playerInfo?: $PlayerInfo,  } | [codePointIndex?: number, playerInfo?: $PlayerInfo, ];
}
