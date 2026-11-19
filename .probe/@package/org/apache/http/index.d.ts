import { $OutputStream, $InputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isChunked(): boolean;
        isStreaming(): boolean;
        isRepeatable(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContent(): $InputStream;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        writeTo(arg0: $OutputStream): void;
        getContentLength(): number;
        get chunked(): boolean;
        get streaming(): boolean;
        get repeatable(): boolean;
        get content(): $InputStream;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get contentLength(): number;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameterByName(arg0: string): $NameValuePair;
        getParameters(): $NameValuePair[];
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameter(arg0: number): $NameValuePair;
        get parameters(): $NameValuePair[];
        get name(): string;
        get value(): string;
        get parameterCount(): number;
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
