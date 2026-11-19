import { $AConfigurablePreset, $AConfigPreset } from "@package/com/alessandro/astages/api/store/config";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AttributeStore, $AStore } from "@package/com/alessandro/astages/api/store/container";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AExpirable, $AGrantable, $ATickable } from "@package/com/alessandro/astages/api/stage/implementation";
import { $ATime, $AMutableTime } from "@package/com/alessandro/astages/api/time";
import { $TickEvent, $GrantedEvent, $ExpiredEvent } from "@package/com/alessandro/astages/api/stage/event";
import { $Attribute_ } from "@package/com/alessandro/astages/api/store";
export * as implementation from "@package/com/alessandro/astages/api/stage/implementation";
export * as event from "@package/com/alessandro/astages/api/stage/event";

declare module "@package/com/alessandro/astages/api/stage" {
    export class $BaseStage<S extends $BaseStage<S>> implements $AStore<S>, $AConfigurablePreset<S>, $AGrantable {
        /**
         * @deprecated
         */
        setIcon(stack: $ItemStack_): S;
        icon(stack: $ItemStack_): S;
        serverOnly(): S;
        getStage(): string;
        whenGranted(consumer: $Consumer_<$GrantedEvent>): S;
        playerOnly(): S;
        postGrantedEvent(event: $GrantedEvent): void;
        fadeOut(fadeOut: number): S;
        chatMessageOnAdd(chatMessage: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setAddTitle(addTitle: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setAddTitle(addTitle: $Component_): S;
        /**
         * @deprecated
         */
        setRemoveTitle(removeTitle: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setRemoveTitle(removeTitle: $Component_): S;
        getMessageOrNull<T>(attribute: $Attribute_<$Function_<T, $Component>>, value: T): $Component;
        /**
         * @deprecated
         */
        setAddChatMessage(addChatMessage: $Component_): S;
        /**
         * @deprecated
         */
        setAddChatMessage(addChatMessage: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setServerOnly(serverOnly: boolean): S;
        subTitleOnRemove(subTitle: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setRemoveSubTitle(removeSubTitle: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setRemoveSubTitle(removeSubTitle: $Component_): S;
        /**
         * @deprecated
         */
        setAddSubTitle(addSubTitle: $Component_): S;
        /**
         * @deprecated
         */
        setAddSubTitle(addSubTitle: $Function_<string, $Component>): S;
        titleOnRemove(title: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setPlayerOnly(playerOnly: boolean): S;
        subTitleOnAdd(subTitle: $Function_<string, $Component>): S;
        actionBarMessageOnAdd(actionBarMessage: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setRemoveChatMessage(removeChatMessage: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setRemoveChatMessage(removeChatMessage: $Component_): S;
        chatMessageOnRemove(chatMessage: $Function_<string, $Component>): S;
        actionBarMessageOnRemove(actionBarMessage: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setFadeIn(fadeIn: number): S;
        stay(stay: number): S;
        /**
         * @deprecated
         */
        setStay(stay: number): S;
        titleOnAdd(title: $Function_<string, $Component>): S;
        /**
         * @deprecated
         */
        setFadeOut(fadeOut: number): S;
        get<T>(attribute: $Attribute_<T>): T;
        set<T>(attribute: $Attribute_<T>, value: T): S;
        getDescription(): string;
        allowedAttributes(): $AttributeStore;
        fadeIn(fadeIn: number): S;
        checkAttribute(attribute: $Attribute_<never>): void;
        isValueNull(attribute: $Attribute_<never>): boolean;
        isEnabled(attribute: $Attribute_<boolean>): boolean;
        isDisabled(attribute: $Attribute_<boolean>): boolean;
        withPreset(...presets: $AConfigPreset<S>[]): S;
        constructor(stage: string, description: string);
        constructor(stage: string);
        get stage(): string;
        get description(): string;
    }
    export class $Stage extends $BaseStage<$Stage> {
        constructor(stage: string);
        constructor(stage: string, description: string);
    }
    export class $TemporaryStage extends $BaseStage<$TemporaryStage> implements $ATickable, $AExpirable {
        whenExpired(consumer: $Consumer_<$ExpiredEvent>): $TemporaryStage;
        everyTick(consumer: $Consumer_<$TickEvent>): $TemporaryStage;
        postExpiredEvent(event: $ExpiredEvent): void;
        getActualTimer(): $AMutableTime;
        postTickEvent(event: $TickEvent): void;
        constructor(stage: string, initialTimer: $ATime);
        constructor(stage: string, initialTimer: $AMutableTime);
        constructor(stage: string, description: string, initialTimer: $AMutableTime);
        constructor(stage: string, description: string, initialTimer: $ATime);
        get actualTimer(): $AMutableTime;
    }
}
