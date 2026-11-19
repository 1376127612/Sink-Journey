import { $Reader, $InputStream, $OutputStream, $File_ } from "@package/java/io";
import { $OptionDescriptors } from "@package/org/graalvm/options";
import { $Annotation } from "@package/java/lang/annotation";
import { $Handler } from "@package/java/util/logging";
import { $Map_, $Map, $Set } from "@package/java/util";
import { $ByteBuffer, $ByteOrder } from "@package/java/nio";
import { $LocalDate, $Instant, $LocalTime, $Duration, $Duration_, $ZoneId } from "@package/java/time";
import { $BigInteger } from "@package/java/math";
import { $IOAccess$Builder, $ByteSequence, $MessageTransport_, $FileSystem, $IOAccess, $ProcessHandler_ } from "@package/org/graalvm/polyglot/io";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $URI, $URL } from "@package/java/net";
import { $WordPointer } from "@package/org/graalvm/nativeimage/c/type";
import { $Field, $Executable, $Type } from "@package/java/lang/reflect";
import { $MethodHandles$Lookup } from "@package/java/lang/invoke";
import { $Proxy } from "@package/org/graalvm/polyglot/proxy";
import { $Charset } from "@package/java/nio/charset";
import { $StackTraceElement, $ClassLoader, $Throwable, $CharSequence, $Enum, $RuntimeException, $AutoCloseable, $Class, $Object, $Iterable } from "@package/java/lang";
export * as io from "@package/org/graalvm/polyglot/io";
export * as proxy from "@package/org/graalvm/polyglot/proxy";

declare module "@package/org/graalvm/polyglot" {
    export class $EnvironmentAccess {
        static INHERIT: $EnvironmentAccess;
        static NONE: $EnvironmentAccess;
    }
    export class $Engine implements $AutoCloseable {
        storeCache(targetFile: $Path_, cancelledWord: $WordPointer): boolean;
        storeCache(targetFile: $Path_): boolean;
        static findHome(): $Path;
        static supportsCompilation(): boolean;
        getLanguages(): $Map<string, $Language>;
        getInstruments(): $Map<string, $Instrument>;
        persistCache(callback: $Engine$CancellationCallback_): $ByteBuffer;
        getCachedSources(): $Set<$Source>;
        static copyResources(targetFolder: $Path_, ...components: string[]): boolean;
        close(cancelIfExecuting: boolean): void;
        close(): void;
        static create(...permittedLanguages: string[]): $Engine;
        static create(): $Engine;
        getVersion(): string;
        static newBuilder(...permittedLanguages: string[]): $Engine$Builder;
        static newBuilder(): $Engine$Builder;
        getOptions(): $OptionDescriptors;
        getImplementationName(): string;
        get languages(): $Map<string, $Language>;
        get instruments(): $Map<string, $Instrument>;
        get cachedSources(): $Set<$Source>;
        get version(): string;
        get options(): $OptionDescriptors;
        get implementationName(): string;
    }
    export class $SandboxPolicy extends $Enum<$SandboxPolicy> {
        isStricterThan(other: $SandboxPolicy_): boolean;
        isStricterOrEqual(other: $SandboxPolicy_): boolean;
        static values(): $SandboxPolicy[];
        static valueOf(name: string): $SandboxPolicy;
        static CONSTRAINED: $SandboxPolicy;
        static TRUSTED: $SandboxPolicy;
        static UNTRUSTED: $SandboxPolicy;
        static ISOLATED: $SandboxPolicy;
    }
    /**
     * Values that may be interpreted as {@link $SandboxPolicy}.
     */
    export type $SandboxPolicy_ = "trusted" | "constrained" | "isolated" | "untrusted";
    export class $Value extends $AbstractValue {
        asBoolean(): boolean;
        asByte(): number;
        asShort(): number;
        asLong(): number;
        asFloat(): number;
        asTimeZone(): $ZoneId;
        asTime(): $LocalTime;
        asInstant(): $Instant;
        asDuration(): $Duration;
        asDate(): $LocalDate;
        putMember(identifier: string, value: $Object): void;
        hasMembers(): boolean;
        isTimeZone(): boolean;
        isDuration(): boolean;
        isIterator(): boolean;
        fitsInByte(): boolean;
        static asValue(o: $Object): $Value;
        getMetaQualifiedName(): string;
        getHashValuesIterator(): $Value;
        getHashKeysIterator(): $Value;
        getIteratorNextElement(): $Value;
        hasIteratorNextElement(): boolean;
        getHashValueOrDefault(key: $Object, defaultValue: $Object): $Value;
        getStaticScope(): $Value;
        static fromNativeString(basePointer: number, byteLength: number, encoding: $Value$StringEncoding): $Value;
        static fromNativeString(basePointer: number, byteOffset: number, byteLength: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        getMemberKeys(): $Set<string>;
        hasHashEntry(key: $Object): boolean;
        getHashSize(): number;
        getHashValue(key: $Object): $Value;
        getMetaObject(): $Value;
        removeHashEntry(key: $Object): boolean;
        putHashEntry(key: $Object, value: $Object): void;
        readBufferByte(byteOffset: number): number;
        writeBufferShort(order: $ByteOrder, byteOffset: number, value: number): void;
        executeVoid(...arg0: $Object[]): void;
        fitsInBigInteger(): boolean;
        writeBufferFloat(order: $ByteOrder, byteOffset: number, value: number): void;
        fitsInFloat(): boolean;
        readBufferShort(order: $ByteOrder, byteOffset: number): number;
        fitsInShort(): boolean;
        isHostObject(): boolean;
        isProxyObject(): boolean;
        writeBufferDouble(order: $ByteOrder, byteOffset: number, value: number): void;
        asHostObject<T>(): T;
        asProxyObject<T extends $Proxy>(): T;
        readBufferDouble(order: $ByteOrder, byteOffset: number): number;
        getSourceLocation(): $SourceSection;
        asNativePointer(): number;
        removeArrayElement(index: number): boolean;
        hasBufferElements(): boolean;
        isBufferWritable(): boolean;
        hasArrayElements(): boolean;
        readBufferInt(order: $ByteOrder, byteOffset: number): number;
        writeBufferInt(order: $ByteOrder, byteOffset: number, value: number): void;
        writeBufferByte(byteOffset: number, value: number): void;
        readBufferFloat(order: $ByteOrder, byteOffset: number): number;
        hasStaticScope(): boolean;
        canInstantiate(): boolean;
        isNativePointer(): boolean;
        readBufferLong(order: $ByteOrder, byteOffset: number): number;
        writeBufferLong(order: $ByteOrder, byteOffset: number, value: number): void;
        fitsInDouble(): boolean;
        getMetaParents(): $Value;
        hasIterator(): boolean;
        isMetaObject(): boolean;
        hasHashEntries(): boolean;
        hasMetaParents(): boolean;
        asStringBytes(encoding: $Value$StringEncoding): number[];
        isException(): boolean;
        getMetaSimpleName(): string;
        isMetaInstance(instance: $Object): boolean;
        canInvokeMember(identifier: string): boolean;
        isInstant(): boolean;
        invokeMember(identifier: string, ...arg1: $Object[]): $Value;
        pin(): void;
        throwException(): $RuntimeException;
        newInstance(...arg0: $Object[]): $Value;
        getContext(): $Context;
        execute(...arg0: $Object[]): $Value;
        getIterator(): $Value;
        isNull(): boolean;
        as<T>(targetType: $TypeLiteral<T>): T;
        as<T>(targetType: $Class<T>): T;
        canExecute(): boolean;
        readBuffer(byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
        asBigInteger(): $BigInteger;
        getMember(identifier: string): $Value;
        asInt(): number;
        asString(): string;
        removeMember(identifier: string): boolean;
        getBufferSize(): number;
        getArrayElement(index: number): $Value;
        isDate(): boolean;
        isTime(): boolean;
        hasMember(identifier: string): boolean;
        fitsInInt(): boolean;
        asDouble(): number;
        isString(): boolean;
        isNumber(): boolean;
        isBoolean(): boolean;
        fitsInLong(): boolean;
        static fromByteBasedString(bytes: number[], offset: number, length: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        static fromByteBasedString(bytes: number[], encoding: $Value$StringEncoding): $Value;
        getHashEntriesIterator(): $Value;
        setArrayElement(index: number, value: $Object): void;
        getArraySize(): number;
        get timeZone(): boolean;
        get duration(): boolean;
        get metaQualifiedName(): string;
        get hashValuesIterator(): $Value;
        get hashKeysIterator(): $Value;
        get iteratorNextElement(): $Value;
        get staticScope(): $Value;
        get memberKeys(): $Set<string>;
        get hashSize(): number;
        get hostObject(): boolean;
        get proxyObject(): boolean;
        get sourceLocation(): $SourceSection;
        get bufferWritable(): boolean;
        get nativePointer(): boolean;
        get metaParents(): $Value;
        get exception(): boolean;
        get metaSimpleName(): string;
        get instant(): boolean;
        get context(): $Context;
        get null(): boolean;
        get bufferSize(): number;
        get date(): boolean;
        get time(): boolean;
        get string(): boolean;
        get number(): boolean;
        get boolean(): boolean;
        get hashEntriesIterator(): $Value;
        get arraySize(): number;
    }
    export class $HostAccess$MutableTargetMapping extends $Enum<$HostAccess$MutableTargetMapping> {
        static values(): $HostAccess$MutableTargetMapping[];
        static valueOf(name: string): $HostAccess$MutableTargetMapping;
        static ITERABLE_TO_JAVA_ITERABLE: $HostAccess$MutableTargetMapping;
        static HASH_TO_JAVA_MAP: $HostAccess$MutableTargetMapping;
        static ITERATOR_TO_JAVA_ITERATOR: $HostAccess$MutableTargetMapping;
        static EXECUTABLE_TO_JAVA_INTERFACE: $HostAccess$MutableTargetMapping;
        static ARRAY_TO_JAVA_LIST: $HostAccess$MutableTargetMapping;
        static MEMBERS_TO_JAVA_MAP: $HostAccess$MutableTargetMapping;
        static MEMBERS_TO_JAVA_INTERFACE: $HostAccess$MutableTargetMapping;
    }
    /**
     * Values that may be interpreted as {@link $HostAccess$MutableTargetMapping}.
     */
    export type $HostAccess$MutableTargetMapping_ = "array_to_java_list" | "iterator_to_java_iterator" | "iterable_to_java_iterable" | "hash_to_java_map" | "members_to_java_map" | "members_to_java_interface" | "executable_to_java_interface";
    export class $ResourceLimits$Builder {
        onLimit(onLimit: $Consumer_<$ResourceLimitEvent>): $ResourceLimits$Builder;
        statementLimit(limit: number, sourceFilter: $Predicate_<$Source>): $ResourceLimits$Builder;
        build(): $ResourceLimits;
    }
    export class $Value$StringEncoding {
        static UTF_16: $Value$StringEncoding;
        static UTF_16_LITTLE_ENDIAN: $Value$StringEncoding;
        static UTF_8: $Value$StringEncoding;
        static UTF_16_BIG_ENDIAN: $Value$StringEncoding;
        static UTF_32_BIG_ENDIAN: $Value$StringEncoding;
        static UTF_32_LITTLE_ENDIAN: $Value$StringEncoding;
        static UTF_32: $Value$StringEncoding;
    }
    export class $Context implements $AutoCloseable {
        resetLimits(): void;
        getPolyglotBindings(): $Value;
        static getCurrent(): $Context;
        asValue(hostValue: $Object): $Value;
        safepoint(): void;
        interrupt(timeout: $Duration_): void;
        enter(): void;
        initialize(languageId: string): boolean;
        close(): void;
        close(cancelIfExecuting: boolean): void;
        parse(source: $Source): $Value;
        parse(languageId: string, source: $CharSequence): $Value;
        static create(...permittedLanguages: string[]): $Context;
        static newBuilder(...permittedLanguages: string[]): $Context$Builder;
        "eval"(languageId: string, source: $CharSequence): $Value;
        "eval"(source: $Source): $Value;
        getBindings(languageId: string): $Value;
        getEngine(): $Engine;
        leave(): void;
        get polyglotBindings(): $Value;
        static get current(): $Context;
        get engine(): $Engine;
    }
    export class $HostAccess$TargetMappingPrecedence extends $Enum<$HostAccess$TargetMappingPrecedence> {
        static values(): $HostAccess$TargetMappingPrecedence[];
        static valueOf(name: string): $HostAccess$TargetMappingPrecedence;
        static LOWEST: $HostAccess$TargetMappingPrecedence;
        static HIGH: $HostAccess$TargetMappingPrecedence;
        static LOW: $HostAccess$TargetMappingPrecedence;
        static HIGHEST: $HostAccess$TargetMappingPrecedence;
    }
    /**
     * Values that may be interpreted as {@link $HostAccess$TargetMappingPrecedence}.
     */
    export type $HostAccess$TargetMappingPrecedence_ = "highest" | "high" | "low" | "lowest";
    export class $HostAccess {
        static newBuilder(): $HostAccess$Builder;
        static newBuilder(conf: $HostAccess): $HostAccess$Builder;
        static ALL: $HostAccess;
        static SCOPED: $HostAccess;
        static CONSTRAINED: $HostAccess;
        static NONE: $HostAccess;
        static UNTRUSTED: $HostAccess;
        static EXPLICIT: $HostAccess;
        static ISOLATED: $HostAccess;
    }
    export class $Instrument {
        getSourceOptions(): $OptionDescriptors;
        getName(): string;
        lookup<T>(type: $Class<T>): T;
        getId(): string;
        getVersion(): string;
        getOptions(): $OptionDescriptors;
        getWebsite(): string;
        get sourceOptions(): $OptionDescriptors;
        get name(): string;
        get id(): string;
        get version(): string;
        get options(): $OptionDescriptors;
        get website(): string;
    }
    export class $Source {
        hasBytes(): boolean;
        getCharacters(lineNumber: number): $CharSequence;
        getCharacters(): $CharSequence;
        hasCharacters(): boolean;
        isInteractive(): boolean;
        getMimeType(): string;
        static findMimeType(url: $URL): string;
        static findMimeType(file: $File_): string;
        getLineStartOffset(lineNumber: number): number;
        getLineLength(lineNumber: number): number;
        getName(): string;
        getLength(): number;
        getBytes(): $ByteSequence;
        static create(language: string, source: $CharSequence): $Source;
        /**
         * @deprecated
         */
        getInputStream(): $InputStream;
        getPath(): string;
        getLineNumber(offset: number): number;
        getLanguage(): string;
        getURL(): $URL;
        static newBuilder(language: string, url: $URL): $Source$Builder;
        static newBuilder(language: string, source: $Reader, name: string): $Source$Builder;
        static newBuilder(language: string, characters: $CharSequence, name: string): $Source$Builder;
        static newBuilder(language: string, bytes: $ByteSequence, name: string): $Source$Builder;
        static newBuilder(language: string, file: $File_): $Source$Builder;
        getURI(): $URI;
        isInternal(): boolean;
        getColumnNumber(offset: number): number;
        static findLanguage(url: $URL): string;
        static findLanguage(file: $File_): string;
        static findLanguage(mimeType: string): string;
        getReader(): $Reader;
        getLineCount(): number;
        get interactive(): boolean;
        get mimeType(): string;
        get name(): string;
        get length(): number;
        get bytes(): $ByteSequence;
        get inputStream(): $InputStream;
        get path(): string;
        get language(): string;
        get URL(): $URL;
        get URI(): $URI;
        get internal(): boolean;
        get reader(): $Reader;
        get lineCount(): number;
    }
    export class $PolyglotException extends $RuntimeException {
        isExit(): boolean;
        getGuestObject(): $Value;
        getSourceLocation(): $SourceSection;
        isHostException(): boolean;
        getExitStatus(): number;
        asHostException(): $Throwable;
        isInternalError(): boolean;
        isGuestException(): boolean;
        isSyntaxError(): boolean;
        isIncompleteSource(): boolean;
        getPolyglotStackTrace(): $Iterable<$PolyglotException$StackFrame>;
        isResourceExhausted(): boolean;
        isInterrupted(): boolean;
        isCancelled(): boolean;
        get exit(): boolean;
        get guestObject(): $Value;
        get sourceLocation(): $SourceSection;
        get hostException(): boolean;
        get exitStatus(): number;
        get internalError(): boolean;
        get guestException(): boolean;
        get syntaxError(): boolean;
        get incompleteSource(): boolean;
        get polyglotStackTrace(): $Iterable<$PolyglotException$StackFrame>;
        get resourceExhausted(): boolean;
        get interrupted(): boolean;
        get cancelled(): boolean;
    }
    export class $ResourceLimits {
        static newBuilder(): $ResourceLimits$Builder;
    }
    export class $Source$Builder {
        mimeType(mimeType: string): $Source$Builder;
        interactive(interactive: boolean): $Source$Builder;
        buildLiteral(): $Source;
        options(options: $Map_<string, string>): $Source$Builder;
        name(newName: string): $Source$Builder;
        encoding(encoding: $Charset): $Source$Builder;
        uri(newUri: $URI): $Source$Builder;
        option(key: string, value: string): $Source$Builder;
        build(): $Source;
        cached(cached: boolean): $Source$Builder;
        content(bytes: $ByteSequence): $Source$Builder;
        content(characters: $CharSequence): $Source$Builder;
        content(code: string): $Source$Builder;
        internal(internal: boolean): $Source$Builder;
    }
    export class $Engine$CancellationCallback {
    }
    export interface $Engine$CancellationCallback {
        shouldCancel(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Engine$CancellationCallback}.
     */
    export type $Engine$CancellationCallback_ = (() => boolean);
    export class $SourceSection {
        getCharacters(): $CharSequence;
        hasColumns(): boolean;
        hasLines(): boolean;
        getEndLine(): number;
        hasCharIndex(): boolean;
        getCharEndIndex(): number;
        getStartLine(): number;
        getStartColumn(): number;
        getCharLength(): number;
        getEndColumn(): number;
        getSource(): $Source;
        isAvailable(): boolean;
        /**
         * @deprecated
         */
        getCode(): $CharSequence;
        getCharIndex(): number;
        get characters(): $CharSequence;
        get endLine(): number;
        get charEndIndex(): number;
        get startLine(): number;
        get startColumn(): number;
        get charLength(): number;
        get endColumn(): number;
        get source(): $Source;
        get available(): boolean;
        get code(): $CharSequence;
        get charIndex(): number;
    }
    export class $Engine$Builder {
        useSystemProperties(enabled: boolean): $Engine$Builder;
        exceptionHandler(handler: $Consumer_<$PolyglotException>): $Engine$Builder;
        allowExperimentalOptions(enabled: boolean): $Engine$Builder;
        spawnIsolate(value: boolean): $Engine$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Engine$Builder;
        options(options: $Map_<string, string>): $Engine$Builder;
        out(out: $OutputStream): $Engine$Builder;
        err(err: $OutputStream): $Engine$Builder;
        "in"(arg0: $InputStream): $Engine$Builder;
        option(key: string, value: string): $Engine$Builder;
        build(): $Engine;
        sandbox(policy: $SandboxPolicy_): $Engine$Builder;
        logHandler(logOut: $OutputStream): $Engine$Builder;
        logHandler(logHandler: $Handler): $Engine$Builder;
    }
    export class $Language {
        isInteractive(): boolean;
        getSourceOptions(): $OptionDescriptors;
        getDefaultMimeType(): string;
        getName(): string;
        getId(): string;
        getVersion(): string;
        getOptions(): $OptionDescriptors;
        getImplementationName(): string;
        getMimeTypes(): $Set<string>;
        getWebsite(): string;
        get interactive(): boolean;
        get sourceOptions(): $OptionDescriptors;
        get defaultMimeType(): string;
        get name(): string;
        get id(): string;
        get version(): string;
        get options(): $OptionDescriptors;
        get implementationName(): string;
        get mimeTypes(): $Set<string>;
        get website(): string;
    }
    export class $HostAccess$Builder {
        methodScoping(scopingDefault: boolean): $HostAccess$Builder;
        allowPublicAccess(allow: boolean): $HostAccess$Builder;
        allowMutableTargetMappings(...mapping: $HostAccess$MutableTargetMapping_[]): $HostAccess$Builder;
        allowAllImplementations(allow: boolean): $HostAccess$Builder;
        allowAccessAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        disableMethodScoping(e: $Executable): $HostAccess$Builder;
        allowBigIntegerNumberAccess(bigIntegerNumberAccess: boolean): $HostAccess$Builder;
        allowImplementationsAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        disableMethodScopingAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        denyAccess(clazz: $Class<never>, includeSubclasses: boolean): $HostAccess$Builder;
        denyAccess(clazz: $Class<never>): $HostAccess$Builder;
        allowIterableAccess(iterableAccess: boolean): $HostAccess$Builder;
        allowAccessInheritance(inheritAccess: boolean): $HostAccess$Builder;
        allowIteratorAccess(iteratorAccess: boolean): $HostAccess$Builder;
        allowImplementations(type: $Class<never>): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>, precedence: $HostAccess$TargetMappingPrecedence_): $HostAccess$Builder;
        allowAccess(element: $Executable): $HostAccess$Builder;
        allowAccess(element: $Field): $HostAccess$Builder;
        useModuleLookup(lookup: $MethodHandles$Lookup): $HostAccess$Builder;
        allowMapAccess(mapAccess: boolean): $HostAccess$Builder;
        allowListAccess(listAccess: boolean): $HostAccess$Builder;
        allowArrayAccess(arrayAccess: boolean): $HostAccess$Builder;
        allowBufferAccess(bufferAccess: boolean): $HostAccess$Builder;
        build(): $HostAccess;
        allowAllClassImplementations(allow: boolean): $HostAccess$Builder;
    }
    export class $TypeLiteral<T> {
        getType(): $Type;
        getRawType(): $Class<T>;
        get type(): $Type;
        get rawType(): $Class<T>;
    }
    export class $PolyglotException$StackFrame {
        getSourceLocation(): $SourceSection;
        getBytecodeIndex(): number;
        getLanguage(): $Language;
        getRootName(): string;
        isHostFrame(): boolean;
        isGuestFrame(): boolean;
        toHostFrame(): $StackTraceElement;
        get sourceLocation(): $SourceSection;
        get bytecodeIndex(): number;
        get language(): $Language;
        get rootName(): string;
        get hostFrame(): boolean;
        get guestFrame(): boolean;
    }
    export class $Context$Builder {
        allowCreateThread(enabled: boolean): $Context$Builder;
        allowAllAccess(enabled: boolean): $Context$Builder;
        allowHostAccess(config: $HostAccess): $Context$Builder;
        /**
         * @deprecated
         */
        allowHostAccess(enabled: boolean): $Context$Builder;
        allowValueSharing(enabled: boolean): $Context$Builder;
        /**
         * @deprecated
         */
        hostClassFilter(classFilter: $Predicate_<string>): $Context$Builder;
        allowNativeAccess(enabled: boolean): $Context$Builder;
        allowHostClassLookup(classFilter: $Predicate_<string>): $Context$Builder;
        allowPolyglotAccess(accessPolicy: $PolyglotAccess): $Context$Builder;
        currentWorkingDirectory(workingDirectory: $Path_): $Context$Builder;
        allowEnvironmentAccess(accessPolicy: $EnvironmentAccess): $Context$Builder;
        exceptionHandler(handler: $Consumer_<$PolyglotException>): $Context$Builder;
        allowHostClassLoading(enabled: boolean): $Context$Builder;
        allowExperimentalOptions(enabled: boolean): $Context$Builder;
        allowInnerContextOptions(enabled: boolean): $Context$Builder;
        allowCreateProcess(enabled: boolean): $Context$Builder;
        hostClassLoader(classLoader: $ClassLoader): $Context$Builder;
        processHandler(handler: $ProcessHandler_): $Context$Builder;
        useSystemExit(enabled: boolean): $Context$Builder;
        spawnIsolate(value: boolean): $Context$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Context$Builder;
        extendHostAccess(defaultInitialValue: $HostAccess, setup: $Consumer_<$HostAccess$Builder>): $Context$Builder;
        options(options: $Map_<string, string>): $Context$Builder;
        apply(action: $Consumer_<$Context$Builder>): $Context$Builder;
        out(out: $OutputStream): $Context$Builder;
        err(err: $OutputStream): $Context$Builder;
        "in"(arg0: $InputStream): $Context$Builder;
        "arguments"(language: string, args: string[]): $Context$Builder;
        option(key: string, value: string): $Context$Builder;
        build(): $Context;
        environment(env: $Map_<string, string>): $Context$Builder;
        environment(name: string, value: string): $Context$Builder;
        /**
         * @deprecated
         */
        fileSystem(fileSystem: $FileSystem): $Context$Builder;
        engine(engine: $Engine): $Context$Builder;
        timeZone(zone: $ZoneId): $Context$Builder;
        resourceLimits(limits: $ResourceLimits): $Context$Builder;
        sandbox(policy: $SandboxPolicy_): $Context$Builder;
        /**
         * @deprecated
         */
        allowIO(enabled: boolean): $Context$Builder;
        allowIO(ioAccess: $IOAccess): $Context$Builder;
        logHandler(logOut: $OutputStream): $Context$Builder;
        logHandler(logHandler: $Handler): $Context$Builder;
        extendIO(defaultInitialValue: $IOAccess, setup: $Consumer_<$IOAccess$Builder>): $Context$Builder;
    }
    export class $PolyglotAccess$Builder {
        allowEval(from: string, to: string): $PolyglotAccess$Builder;
        build(): $PolyglotAccess;
        allowBindingsAccess(language: string): $PolyglotAccess$Builder;
        denyEval(from: string, to: string): $PolyglotAccess$Builder;
        allowEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyBindingsAccess(language: string): $PolyglotAccess$Builder;
    }
    export class $PolyglotAccess {
        static newBuilder(): $PolyglotAccess$Builder;
        static ALL: $PolyglotAccess;
        static NONE: $PolyglotAccess;
    }
    export class $AbstractValue {
    }
}
