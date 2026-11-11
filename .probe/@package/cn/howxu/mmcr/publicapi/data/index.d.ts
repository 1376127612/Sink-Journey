import { $BigDecimal, $BigInteger } from "@package/java/math";
import { $Enum } from "@package/java/lang";
import { $List_, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/data" {
    export class $DataStore$Transaction {
    }
    export interface $DataStore$Transaction {
    }
    export class $DataStore {
    }
    export interface $DataStore {
        remove(key: string): ($DataKey) | undefined;
        get(key: string): ($DataKey) | undefined;
        values(): $Map<string, $DataKey>;
        contains(key: string): boolean;
        set(key: string, value: $DataKey): void;
        set(key: string, value: $DataKey, transaction: $DataStore$Transaction): boolean;
    }
    export class $DataKind extends $Enum<$DataKind> {
        static values(): $DataKind[];
        static valueOf(name: string): $DataKind;
        static FLOAT: $DataKind;
        static BYTE: $DataKind;
        static BIG_DECIMAL: $DataKind;
        static STRING: $DataKind;
        static DOUBLE: $DataKind;
        static BIG_INTEGER: $DataKind;
        static LIST: $DataKind;
        static MAP: $DataKind;
        static BOOLEAN: $DataKind;
        static INT: $DataKind;
        static SHORT: $DataKind;
        static LONG: $DataKind;
    }
    /**
     * Values that may be interpreted as {@link $DataKind}.
     */
    export type $DataKind_ = "boolean" | "string" | "byte" | "short" | "int" | "long" | "float" | "double" | "big_integer" | "big_decimal" | "list" | "map";
    export class $DataKey {
        static map(values: $Map_<string, $DataKey>): $DataKey;
        static of(value: boolean): $DataKey;
        static of(value: string): $DataKey;
        static of(value: number): $DataKey;
        static of(value: number): $DataKey;
        static of(value: number): $DataKey;
        static of(value: number): $DataKey;
        static of(value: number): $DataKey;
        static of(value: $BigDecimal): $DataKey;
        static of(value: $BigInteger): $DataKey;
        static of(value: number): $DataKey;
        static list(values: $List_<$DataKey>): $DataKey;
    }
    export interface $DataKey {
        type(): $DataKind;
        booleanValue(): boolean;
        byteValue(): number;
        shortValue(): number;
        intValue(): number;
        longValue(): number;
        floatValue(): number;
        doubleValue(): number;
        asList(): ($List<$DataKey>) | undefined;
        stringValue(): string;
        asString(): (string) | undefined;
        asInt(): (number) | undefined;
        bigIntegerValue(): $BigInteger;
        asDouble(): (number) | undefined;
        asMap(): ($Map<string, $DataKey>) | undefined;
        asBigInteger(): ($BigInteger) | undefined;
        asByte(): (number) | undefined;
        asShort(): (number) | undefined;
        asFloat(): (number) | undefined;
        asLong(): (number) | undefined;
        asBoolean(): (boolean) | undefined;
        bigDecimalValue(): $BigDecimal;
        asBigDecimal(): ($BigDecimal) | undefined;
    }
}
