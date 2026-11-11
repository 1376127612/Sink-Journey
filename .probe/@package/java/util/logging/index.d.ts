import { $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $ResourceBundle } from "@package/java/util";
import { $Object, $Throwable, $Exception } from "@package/java/lang";

declare module "@package/java/util/logging" {
    export class $LogRecord implements $Serializable {
        getParameters(): $Object[];
        getMessage(): string;
        getSequenceNumber(): number;
        setSequenceNumber(arg0: number): void;
        setInstant(arg0: $Instant): void;
        getInstant(): $Instant;
        setMessage(arg0: string): void;
        setThrown(arg0: $Throwable): void;
        getMillis(): number;
        getThrown(): $Throwable;
        setLevel(arg0: $Level): void;
        getLevel(): $Level;
        /**
         * @deprecated
         */
        setMillis(arg0: number): void;
        setLoggerName(arg0: string): void;
        getLoggerName(): string;
        getResourceBundle(): $ResourceBundle;
        getResourceBundleName(): string;
        setResourceBundleName(arg0: string): void;
        setResourceBundle(arg0: $ResourceBundle): void;
        setParameters(arg0: $Object[]): void;
        setSourceClassName(arg0: string): void;
        setSourceMethodName(arg0: string): void;
        /**
         * @deprecated
         */
        getThreadID(): number;
        /**
         * @deprecated
         */
        setThreadID(arg0: number): void;
        getLongThreadID(): number;
        setLongThreadID(arg0: number): $LogRecord;
        getSourceClassName(): string;
        getSourceMethodName(): string;
        constructor(arg0: $Level, arg1: string);
    }
    export class $Level implements $Serializable {
        getName(): string;
        intValue(): number;
        static parse(arg0: string): $Level;
        getLocalizedName(): string;
        getResourceBundleName(): string;
        static CONFIG: $Level;
        static ALL: $Level;
        static SEVERE: $Level;
        static FINER: $Level;
        static FINEST: $Level;
        static FINE: $Level;
        static INFO: $Level;
        static WARNING: $Level;
        static OFF: $Level;
        get name(): string;
        get localizedName(): string;
        get resourceBundleName(): string;
    }
    export class $Handler {
        flush(): void;
        close(): void;
        getEncoding(): string;
        publish(arg0: $LogRecord): void;
        getFilter(): $Filter;
        setFormatter(arg0: $Formatter): void;
        getFormatter(): $Formatter;
        setErrorManager(arg0: $ErrorManager): void;
        getErrorManager(): $ErrorManager;
        isLoggable(arg0: $LogRecord): boolean;
        setFilter(arg0: $Filter_): void;
        setLevel(arg0: $Level): void;
        getLevel(): $Level;
        setEncoding(arg0: string): void;
    }
    export class $Filter {
    }
    export interface $Filter {
        isLoggable(arg0: $LogRecord): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Filter}.
     */
    export type $Filter_ = ((arg0: $LogRecord) => boolean);
    export class $Formatter {
        format(arg0: $LogRecord): string;
        formatMessage(arg0: $LogRecord): string;
        getHead(arg0: $Handler): string;
        getTail(arg0: $Handler): string;
    }
    export class $ErrorManager {
        error(arg0: string, arg1: $Exception, arg2: number): void;
        static GENERIC_FAILURE: number;
        static CLOSE_FAILURE: number;
        static OPEN_FAILURE: number;
        static FORMAT_FAILURE: number;
        static FLUSH_FAILURE: number;
        static WRITE_FAILURE: number;
        constructor();
    }
}
