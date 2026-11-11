import { $StringBuilderFormattable } from "@package/org/apache/logging/log4j/util";

declare module "@package/org/apache/logging/log4j/core/time" {
    export class $Instant {
    }
    export interface $Instant extends $StringBuilderFormattable {
        getEpochSecond(): number;
        getEpochMillisecond(): number;
        getNanoOfMillisecond(): number;
        getNanoOfSecond(): number;
        get epochSecond(): number;
        get epochMillisecond(): number;
        get nanoOfMillisecond(): number;
        get nanoOfSecond(): number;
    }
}
