import { $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $ResourceBundle } from "@package/java/util";
import { $Object, $Throwable, $Exception } from "@package/java/lang";

declare module "@package/java/util/logging" {
    export class $LogRecord implements $Serializable {
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
        getParameters(): $Object[];
        getMessage(): string;
        getInstant(): $Instant;
        getResourceBundle(): $ResourceBundle;
        setInstant(arg0: $Instant): void;
        getResourceBundleName(): string;
        setResourceBundleName(arg0: string): void;
        setResourceBundle(arg0: $ResourceBundle): void;
        setParameters(arg0: $Object[]): void;
        setSourceClassName(arg0: string): void;
        setSourceMethodName(arg0: string): void;
        getSourceClassName(): string;
        getSourceMethodName(): string;
        setLevel(arg0: $Level): void;
        getLevel(): $Level;
        getThrown(): $Throwable;
        setMessage(arg0: string): void;
        setThrown(arg0: $Throwable): void;
        /**
         * @deprecated
         */
        setMillis(arg0: number): void;
        getLoggerName(): string;
        setLoggerName(arg0: string): void;
        getMillis(): number;
        getSequenceNumber(): number;
        setSequenceNumber(arg0: number): void;
        constructor(arg0: $Level, arg1: string);
    }
    export class $Level implements $Serializable {
        getName(): string;
        intValue(): number;
        static parse(arg0: string): $Level;
        getResourceBundleName(): string;
        getLocalizedName(): string;
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
        get resourceBundleName(): string;
        get localizedName(): string;
    }
    export class $Handler {
        flush(): void;
        close(): void;
        getEncoding(): string;
        publish(arg0: $LogRecord): void;
        getFilter(): $Filter;
        isLoggable(arg0: $LogRecord): boolean;
        setEncoding(arg0: string): void;
        setLevel(arg0: $Level): void;
        getLevel(): $Level;
        setFilter(arg0: $Filter_): void;
        setFormatter(arg0: $Formatter): void;
        getFormatter(): $Formatter;
        setErrorManager(arg0: $ErrorManager): void;
        getErrorManager(): $ErrorManager;
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
        getHead(arg0: $Handler): string;
        getTail(arg0: $Handler): string;
        formatMessage(arg0: $LogRecord): string;
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
