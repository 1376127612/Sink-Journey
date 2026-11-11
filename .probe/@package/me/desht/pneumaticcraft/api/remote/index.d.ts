import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $UUID_, $Set_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/pneumaticcraft/api/remote" {
    export class $IRemoteWidget {
        static getTranslationKey(arg0: $RemoteWidgetType_<never>): string;
        static getTooltipTranslationKey(arg0: $RemoteWidgetType_<never>): string;
        static CODEC: $Codec<$IRemoteWidget>;
        static TRAY_WIDGET_X: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IRemoteWidget>;
    }
    export interface $IRemoteWidget {
        isEnabled(arg0: $Player): boolean;
        getType(): $RemoteWidgetType<$IRemoteWidget>;
        copy(): $IRemoteWidget;
        getTranslationKey(): string;
        copyToPos(arg0: number, arg1: number): $IRemoteWidget;
        hasConfigurableText(): boolean;
        baseSettings(): $BaseSettings;
        widgetSettings(): $WidgetSettings;
        discoverVariables(arg0: $Set_<string>, arg1: $UUID_): void;
        get type(): $RemoteWidgetType<$IRemoteWidget>;
    }
    export class $RemoteWidgetType<R extends $IRemoteWidget> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        codec(): $MapCodec<R>;
        constructor(arg0: $MapCodec_<R>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, R>);
    }
    /**
     * Values that may be interpreted as {@link $RemoteWidgetType}.
     */
    export type $RemoteWidgetType_<R> = RegistryTypes.PneumaticcraftRemoteWidgets;
    export class $WidgetSettings extends $Record {
        x(): number;
        copy(): $WidgetSettings;
        resize(arg0: number, arg1: number): $WidgetSettings;
        y(): number;
        width(): number;
        title(): $Component;
        height(): number;
        tooltip(): $Component;
        copyToPos(arg0: number, arg1: number): $WidgetSettings;
        withText(arg0: $Component_, arg1: $Component_): $WidgetSettings;
        static CODEC: $Codec<$WidgetSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WidgetSettings>;
        constructor(x: number, y: number, width: number, height: number, title: $Component_, tooltip: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSettings}.
     */
    export type $WidgetSettings_ = { x?: number, height?: number, width?: number, tooltip?: $Component_, title?: $Component_, y?: number,  } | [x?: number, height?: number, width?: number, tooltip?: $Component_, title?: $Component_, y?: number, ];
    export class $BaseSettings extends $Record {
        withEnablingValue(arg0: $BlockPos_): $BaseSettings;
        withVariable(arg0: string): $BaseSettings;
        enablingValue(): $BlockPos;
        enableVariable(): string;
        static CODEC: $Codec<$BaseSettings>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BaseSettings>;
        static DEFAULT: $BaseSettings;
        constructor(enableVariable: string, enablingValue: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $BaseSettings}.
     */
    export type $BaseSettings_ = { enableVariable?: string, enablingValue?: $BlockPos_,  } | [enableVariable?: string, enablingValue?: $BlockPos_, ];
    export interface $RemoteWidgetType<R> extends RegistryMarked<RegistryTypes.PneumaticcraftRemoteWidgetsTag, RegistryTypes.PneumaticcraftRemoteWidgets> {}
}
