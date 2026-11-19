import { $BigDecimal, $BigInteger } from "@package/java/math";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";
import { $DataValue as $DataValue$1, $DataStorage as $DataStorage$1, $DataStorage$Transaction as $DataStorage$Transaction$1 } from "@package/cn/howxu/mmcr/api/data";

declare module "@package/cn/howxu/mmcr/api/data/view" {
    export class $DataStorage$Transaction {
        context(): $DataStorage$Transaction$1;
        static view(context: $DataStorage$Transaction$1): $DataStorage$Transaction;
        static view(context: $Object): $DataStorage$Transaction;
    }
    export class $DataValue {
        asBoolean(): (boolean) | undefined;
        asByte(): (number) | undefined;
        asShort(): (number) | undefined;
        asLong(): (number) | undefined;
        asFloat(): (number) | undefined;
        static toInternal(value: $DataValue): $DataValue$1;
        asBigDecimal(): ($BigDecimal) | undefined;
        bigDecimalValue(): $BigDecimal;
        static fromInternal(value: $DataValue$1): $DataValue;
        type(): $DataValueType;
        value(): $Object;
        booleanValue(): boolean;
        byteValue(): number;
        shortValue(): number;
        intValue(): number;
        longValue(): number;
        floatValue(): number;
        doubleValue(): number;
        static map(values: $Map_<string, $DataValue>): $DataValue;
        static of(value: number): $DataValue;
        static of(value: $BigInteger): $DataValue;
        static of(value: string): $DataValue;
        static of(value: number): $DataValue;
        static of(value: number): $DataValue;
        static of(value: number): $DataValue;
        static of(value: number): $DataValue;
        static of(value: $BigDecimal): $DataValue;
        static of(value: number): $DataValue;
        static of(value: boolean): $DataValue;
        static list(values: $List_<$DataValue>): $DataValue;
        static from(value: $Object): $DataValue;
        asList(): ($List<$DataValue>) | undefined;
        stringValue(): string;
        asBigInteger(): ($BigInteger) | undefined;
        asMap(): ($Map<string, $DataValue>) | undefined;
        asInt(): (number) | undefined;
        asString(): (string) | undefined;
        bigIntegerValue(): $BigInteger;
        asDouble(): (number) | undefined;
    }
    export class $DataValueType extends $Enum<$DataValueType> {
        static values(): $DataValueType[];
        static valueOf(name: string): $DataValueType;
        static FLOAT: $DataValueType;
        static BYTE: $DataValueType;
        static BIG_DECIMAL: $DataValueType;
        static STRING: $DataValueType;
        static DOUBLE: $DataValueType;
        static BIG_INTEGER: $DataValueType;
        static LIST: $DataValueType;
        static MAP: $DataValueType;
        static BOOLEAN: $DataValueType;
        static INT: $DataValueType;
        static SHORT: $DataValueType;
        static LONG: $DataValueType;
    }
    /**
     * Values that may be interpreted as {@link $DataValueType}.
     */
    export type $DataValueType_ = "boolean" | "string" | "byte" | "short" | "int" | "long" | "float" | "double" | "big_integer" | "big_decimal" | "list" | "map";
    export class $DataStorage {
        toInternal(): $DataStorage$1;
        bridgeValue(): $Object;
        remove(key: string): ($DataValue) | undefined;
        get(key: string): ($DataValue) | undefined;
        values(): $Map<string, $DataValue>;
        contains(key: string): boolean;
        set(key: string, value: $Object, transaction: $DataStorage$Transaction): boolean;
        set(key: string, value: $DataValue, transaction: $DataStorage$Transaction): boolean;
        set(key: string, value: $DataValue): void;
        set(key: string, value: $Object): void;
        static view(storage: $DataStorage$1): $DataStorage;
        static view(storage: $Object): $DataStorage;
    }
}
