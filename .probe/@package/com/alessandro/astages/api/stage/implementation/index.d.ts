import { $TickEvent, $GrantedEvent, $ExpiredEvent } from "@package/com/alessandro/astages/api/stage/event";

declare module "@package/com/alessandro/astages/api/stage/implementation" {
    export class $AGrantable {
    }
    export interface $AGrantable {
        postGrantedEvent(event: $GrantedEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $AGrantable}.
     */
    export type $AGrantable_ = ((event: $GrantedEvent) => void);
    export class $ATickable {
    }
    export interface $ATickable {
        postTickEvent(event: $TickEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ATickable}.
     */
    export type $ATickable_ = ((event: $TickEvent) => void);
    export class $AExpirable {
    }
    export interface $AExpirable {
        postExpiredEvent(event: $ExpiredEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $AExpirable}.
     */
    export type $AExpirable_ = ((event: $ExpiredEvent) => void);
}
