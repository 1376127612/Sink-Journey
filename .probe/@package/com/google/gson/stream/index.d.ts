import { $Writer, $Reader, $Flushable, $Closeable } from "@package/java/io";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/com/google/gson/stream" {
    export class $JsonToken extends $Enum<$JsonToken> {
        static values(): $JsonToken[];
        static valueOf(arg0: string): $JsonToken;
        static NUMBER: $JsonToken;
        static NULL: $JsonToken;
        static END_DOCUMENT: $JsonToken;
        static BEGIN_OBJECT: $JsonToken;
        static END_ARRAY: $JsonToken;
        static STRING: $JsonToken;
        static END_OBJECT: $JsonToken;
        static BEGIN_ARRAY: $JsonToken;
        static BOOLEAN: $JsonToken;
        static NAME: $JsonToken;
    }
    /**
     * Values that may be interpreted as {@link $JsonToken}.
     */
    export type $JsonToken_ = "begin_array" | "end_array" | "begin_object" | "end_object" | "name" | "string" | "number" | "boolean" | "null" | "end_document";
    export class $JsonWriter implements $Closeable, $Flushable {
        name(arg0: string): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: string): $JsonWriter;
        value(arg0: $Number): $JsonWriter;
        flush(): void;
        close(): void;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        setIndent(arg0: string): void;
        beginObject(): $JsonWriter;
        setSerializeNulls(arg0: boolean): void;
        setHtmlSafe(arg0: boolean): void;
        getSerializeNulls(): boolean;
        nullValue(): $JsonWriter;
        beginArray(): $JsonWriter;
        endObject(): $JsonWriter;
        endArray(): $JsonWriter;
        jsonValue(arg0: string): $JsonWriter;
        isHtmlSafe(): boolean;
        constructor(arg0: $Writer);
        set indent(value: string);
    }
    export class $JsonReader implements $Closeable {
        hasNext(): boolean;
        close(): void;
        getPath(): string;
        peek(): $JsonToken;
        nextDouble(): number;
        nextInt(): number;
        nextBoolean(): boolean;
        nextLong(): number;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        beginObject(): void;
        getPreviousPath(): string;
        nextNull(): void;
        beginArray(): void;
        nextName(): string;
        nextString(): string;
        endObject(): void;
        skipValue(): void;
        endArray(): void;
        constructor(arg0: $Reader);
        get path(): string;
        get previousPath(): string;
    }
}
