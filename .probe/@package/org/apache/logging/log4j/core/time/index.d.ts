import { $StringBuilderFormattable } from "@package/org/apache/logging/log4j/util";

declare module "@package/org/apache/logging/log4j/core/time" {
    export class $Instant {
    }
    export interface $Instant extends $StringBuilderFormattable {
        getEpochSecond(): number;
        getNanoOfSecond(): number;
        getNanoOfMillisecond(): number;
        getEpochMillisecond(): number;
        get epochSecond(): number;
        get nanoOfSecond(): number;
        get nanoOfMillisecond(): number;
        get epochMillisecond(): number;
    }
}
