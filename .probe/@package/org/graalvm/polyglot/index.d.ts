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
        close(cancelIfExecuting: boolean): void;
        close(): void;
        static create(): $Engine;
        static create(...permittedLanguages: string[]): $Engine;
        getVersion(): string;
        static newBuilder(): $Engine$Builder;
        static newBuilder(...permittedLanguages: string[]): $Engine$Builder;
        getImplementationName(): string;
        getOptions(): $OptionDescriptors;
        static supportsCompilation(): boolean;
        static findHome(): $Path;
        storeCache(targetFile: $Path_, cancelledWord: $WordPointer): boolean;
        storeCache(targetFile: $Path_): boolean;
        getLanguages(): $Map<string, $Language>;
        getInstruments(): $Map<string, $Instrument>;
        getCachedSources(): $Set<$Source>;
        static copyResources(targetFolder: $Path_, ...components: string[]): boolean;
        persistCache(callback: $Engine$CancellationCallback_): $ByteBuffer;
        get version(): string;
        get implementationName(): string;
        get options(): $OptionDescriptors;
        get languages(): $Map<string, $Language>;
        get instruments(): $Map<string, $Instrument>;
        get cachedSources(): $Set<$Source>;
    }
    export class $SandboxPolicy extends $Enum<$SandboxPolicy> {
        static values(): $SandboxPolicy[];
        static valueOf(name: string): $SandboxPolicy;
        isStricterOrEqual(other: $SandboxPolicy_): boolean;
        isStricterThan(other: $SandboxPolicy_): boolean;
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
        pin(): void;
        throwException(): $RuntimeException;
        newInstance(...arg0: $Object[]): $Value;
        getContext(): $Context;
        execute(...arg0: $Object[]): $Value;
        getIterator(): $Value;
        isNull(): boolean;
        as<T>(targetType: $Class<T>): T;
        as<T>(targetType: $TypeLiteral<T>): T;
        canExecute(): boolean;
        readBuffer(byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
        getBufferSize(): number;
        isString(): boolean;
        isBoolean(): boolean;
        isNumber(): boolean;
        asString(): string;
        asInt(): number;
        asDouble(): number;
        fitsInLong(): boolean;
        asBigInteger(): $BigInteger;
        isTime(): boolean;
        isDate(): boolean;
        getMember(identifier: string): $Value;
        fitsInInt(): boolean;
        asByte(): number;
        asShort(): number;
        asFloat(): number;
        asLong(): number;
        removeMember(identifier: string): boolean;
        hasMember(identifier: string): boolean;
        asBoolean(): boolean;
        getArraySize(): number;
        getStaticScope(): $Value;
        getArrayElement(index: number): $Value;
        setArrayElement(index: number, value: $Object): void;
        getHashSize(): number;
        canInvokeMember(identifier: string): boolean;
        getHashKeysIterator(): $Value;
        getMetaQualifiedName(): string;
        hasIteratorNextElement(): boolean;
        getIteratorNextElement(): $Value;
        getHashValuesIterator(): $Value;
        getHashValueOrDefault(key: $Object, defaultValue: $Object): $Value;
        static asValue(o: $Object): $Value;
        isTimeZone(): boolean;
        isIterator(): boolean;
        fitsInByte(): boolean;
        isDuration(): boolean;
        hasMembers(): boolean;
        getHashEntriesIterator(): $Value;
        static fromByteBasedString(bytes: number[], offset: number, length: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        static fromByteBasedString(bytes: number[], encoding: $Value$StringEncoding): $Value;
        invokeMember(identifier: string, ...arg1: $Object[]): $Value;
        putMember(identifier: string, value: $Object): void;
        asDuration(): $Duration;
        asInstant(): $Instant;
        asDate(): $LocalDate;
        asTimeZone(): $ZoneId;
        asTime(): $LocalTime;
        isInstant(): boolean;
        putHashEntry(key: $Object, value: $Object): void;
        hasHashEntry(key: $Object): boolean;
        getHashValue(key: $Object): $Value;
        removeHashEntry(key: $Object): boolean;
        getMetaObject(): $Value;
        getMemberKeys(): $Set<string>;
        static fromNativeString(basePointer: number, byteLength: number, encoding: $Value$StringEncoding): $Value;
        static fromNativeString(basePointer: number, byteOffset: number, byteLength: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        isException(): boolean;
        writeBufferShort(order: $ByteOrder, byteOffset: number, value: number): void;
        readBufferLong(order: $ByteOrder, byteOffset: number): number;
        hasMetaParents(): boolean;
        writeBufferByte(byteOffset: number, value: number): void;
        writeBufferDouble(order: $ByteOrder, byteOffset: number, value: number): void;
        fitsInBigInteger(): boolean;
        readBufferInt(order: $ByteOrder, byteOffset: number): number;
        asNativePointer(): number;
        isMetaInstance(instance: $Object): boolean;
        writeBufferLong(order: $ByteOrder, byteOffset: number, value: number): void;
        isBufferWritable(): boolean;
        executeVoid(...arg0: $Object[]): void;
        hasHashEntries(): boolean;
        asStringBytes(encoding: $Value$StringEncoding): number[];
        isMetaObject(): boolean;
        readBufferByte(byteOffset: number): number;
        hasBufferElements(): boolean;
        asHostObject<T>(): T;
        readBufferShort(order: $ByteOrder, byteOffset: number): number;
        isProxyObject(): boolean;
        readBufferFloat(order: $ByteOrder, byteOffset: number): number;
        hasStaticScope(): boolean;
        getMetaSimpleName(): string;
        canInstantiate(): boolean;
        removeArrayElement(index: number): boolean;
        fitsInDouble(): boolean;
        isHostObject(): boolean;
        getMetaParents(): $Value;
        writeBufferInt(order: $ByteOrder, byteOffset: number, value: number): void;
        writeBufferFloat(order: $ByteOrder, byteOffset: number, value: number): void;
        fitsInFloat(): boolean;
        hasIterator(): boolean;
        readBufferDouble(order: $ByteOrder, byteOffset: number): number;
        isNativePointer(): boolean;
        asProxyObject<T extends $Proxy>(): T;
        fitsInShort(): boolean;
        hasArrayElements(): boolean;
        getSourceLocation(): $SourceSection;
        get context(): $Context;
        get null(): boolean;
        get bufferSize(): number;
        get string(): boolean;
        get boolean(): boolean;
        get number(): boolean;
        get time(): boolean;
        get date(): boolean;
        get arraySize(): number;
        get staticScope(): $Value;
        get hashSize(): number;
        get hashKeysIterator(): $Value;
        get metaQualifiedName(): string;
        get iteratorNextElement(): $Value;
        get hashValuesIterator(): $Value;
        get timeZone(): boolean;
        get duration(): boolean;
        get hashEntriesIterator(): $Value;
        get instant(): boolean;
        get memberKeys(): $Set<string>;
        get exception(): boolean;
        get bufferWritable(): boolean;
        get proxyObject(): boolean;
        get metaSimpleName(): string;
        get hostObject(): boolean;
        get metaParents(): $Value;
        get nativePointer(): boolean;
        get sourceLocation(): $SourceSection;
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
        build(): $ResourceLimits;
        onLimit(onLimit: $Consumer_<$ResourceLimitEvent>): $ResourceLimits$Builder;
        statementLimit(limit: number, sourceFilter: $Predicate_<$Source>): $ResourceLimits$Builder;
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
        interrupt(timeout: $Duration_): void;
        enter(): void;
        initialize(languageId: string): boolean;
        close(cancelIfExecuting: boolean): void;
        close(): void;
        parse(source: $Source): $Value;
        parse(languageId: string, source: $CharSequence): $Value;
        static create(...permittedLanguages: string[]): $Context;
        static newBuilder(...permittedLanguages: string[]): $Context$Builder;
        "eval"(languageId: string, source: $CharSequence): $Value;
        "eval"(source: $Source): $Value;
        getBindings(languageId: string): $Value;
        getEngine(): $Engine;
        static getCurrent(): $Context;
        leave(): void;
        getPolyglotBindings(): $Value;
        resetLimits(): void;
        safepoint(): void;
        asValue(hostValue: $Object): $Value;
        get engine(): $Engine;
        static get current(): $Context;
        get polyglotBindings(): $Value;
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
        getName(): string;
        lookup<T>(type: $Class<T>): T;
        getId(): string;
        getVersion(): string;
        getOptions(): $OptionDescriptors;
        getWebsite(): string;
        getSourceOptions(): $OptionDescriptors;
        get name(): string;
        get id(): string;
        get version(): string;
        get options(): $OptionDescriptors;
        get website(): string;
        get sourceOptions(): $OptionDescriptors;
    }
    export class $Source {
        getName(): string;
        getLength(): number;
        getBytes(): $ByteSequence;
        /**
         * @deprecated
         */
        getInputStream(): $InputStream;
        getPath(): string;
        static create(language: string, source: $CharSequence): $Source;
        getLineNumber(offset: number): number;
        getLanguage(): string;
        static newBuilder(language: string, bytes: $ByteSequence, name: string): $Source$Builder;
        static newBuilder(language: string, characters: $CharSequence, name: string): $Source$Builder;
        static newBuilder(language: string, source: $Reader, name: string): $Source$Builder;
        static newBuilder(language: string, url: $URL): $Source$Builder;
        static newBuilder(language: string, file: $File_): $Source$Builder;
        getURL(): $URL;
        getURI(): $URI;
        getReader(): $Reader;
        getColumnNumber(offset: number): number;
        static findLanguage(url: $URL): string;
        static findLanguage(mimeType: string): string;
        static findLanguage(file: $File_): string;
        isInternal(): boolean;
        getLineCount(): number;
        hasBytes(): boolean;
        getCharacters(lineNumber: number): $CharSequence;
        getCharacters(): $CharSequence;
        hasCharacters(): boolean;
        getLineStartOffset(lineNumber: number): number;
        isInteractive(): boolean;
        getLineLength(lineNumber: number): number;
        getMimeType(): string;
        static findMimeType(file: $File_): string;
        static findMimeType(url: $URL): string;
        get name(): string;
        get length(): number;
        get bytes(): $ByteSequence;
        get inputStream(): $InputStream;
        get path(): string;
        get language(): string;
        get URL(): $URL;
        get URI(): $URI;
        get reader(): $Reader;
        get internal(): boolean;
        get lineCount(): number;
        get interactive(): boolean;
        get mimeType(): string;
    }
    export class $PolyglotException extends $RuntimeException {
        isInterrupted(): boolean;
        isCancelled(): boolean;
        getGuestObject(): $Value;
        isResourceExhausted(): boolean;
        getPolyglotStackTrace(): $Iterable<$PolyglotException$StackFrame>;
        isExit(): boolean;
        getExitStatus(): number;
        isGuestException(): boolean;
        isInternalError(): boolean;
        isIncompleteSource(): boolean;
        isHostException(): boolean;
        isSyntaxError(): boolean;
        asHostException(): $Throwable;
        getSourceLocation(): $SourceSection;
        get interrupted(): boolean;
        get cancelled(): boolean;
        get guestObject(): $Value;
        get resourceExhausted(): boolean;
        get polyglotStackTrace(): $Iterable<$PolyglotException$StackFrame>;
        get exit(): boolean;
        get exitStatus(): number;
        get guestException(): boolean;
        get internalError(): boolean;
        get incompleteSource(): boolean;
        get hostException(): boolean;
        get syntaxError(): boolean;
        get sourceLocation(): $SourceSection;
    }
    export class $ResourceLimits {
        static newBuilder(): $ResourceLimits$Builder;
    }
    export class $Source$Builder {
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
        mimeType(mimeType: string): $Source$Builder;
        buildLiteral(): $Source;
        interactive(interactive: boolean): $Source$Builder;
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
        getSource(): $Source;
        getCharIndex(): number;
        /**
         * @deprecated
         */
        getCode(): $CharSequence;
        isAvailable(): boolean;
        hasLines(): boolean;
        hasColumns(): boolean;
        getEndLine(): number;
        hasCharIndex(): boolean;
        getStartLine(): number;
        getStartColumn(): number;
        getEndColumn(): number;
        getCharLength(): number;
        getCharEndIndex(): number;
        getCharacters(): $CharSequence;
        get source(): $Source;
        get charIndex(): number;
        get code(): $CharSequence;
        get available(): boolean;
        get endLine(): number;
        get startLine(): number;
        get startColumn(): number;
        get endColumn(): number;
        get charLength(): number;
        get charEndIndex(): number;
        get characters(): $CharSequence;
    }
    export class $Engine$Builder {
        options(options: $Map_<string, string>): $Engine$Builder;
        out(out: $OutputStream): $Engine$Builder;
        err(err: $OutputStream): $Engine$Builder;
        "in"(arg0: $InputStream): $Engine$Builder;
        option(key: string, value: string): $Engine$Builder;
        build(): $Engine;
        exceptionHandler(handler: $Consumer_<$PolyglotException>): $Engine$Builder;
        allowExperimentalOptions(enabled: boolean): $Engine$Builder;
        spawnIsolate(value: boolean): $Engine$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Engine$Builder;
        logHandler(logHandler: $Handler): $Engine$Builder;
        logHandler(logOut: $OutputStream): $Engine$Builder;
        sandbox(policy: $SandboxPolicy_): $Engine$Builder;
        useSystemProperties(enabled: boolean): $Engine$Builder;
    }
    export class $Language {
        getName(): string;
        getId(): string;
        getVersion(): string;
        getImplementationName(): string;
        getOptions(): $OptionDescriptors;
        getMimeTypes(): $Set<string>;
        getWebsite(): string;
        getSourceOptions(): $OptionDescriptors;
        isInteractive(): boolean;
        getDefaultMimeType(): string;
        get name(): string;
        get id(): string;
        get version(): string;
        get implementationName(): string;
        get options(): $OptionDescriptors;
        get mimeTypes(): $Set<string>;
        get website(): string;
        get sourceOptions(): $OptionDescriptors;
        get interactive(): boolean;
        get defaultMimeType(): string;
    }
    export class $HostAccess$Builder {
        build(): $HostAccess;
        denyAccess(clazz: $Class<never>): $HostAccess$Builder;
        denyAccess(clazz: $Class<never>, includeSubclasses: boolean): $HostAccess$Builder;
        disableMethodScoping(e: $Executable): $HostAccess$Builder;
        allowAccessAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        allowAllImplementations(allow: boolean): $HostAccess$Builder;
        allowAccessInheritance(inheritAccess: boolean): $HostAccess$Builder;
        allowMutableTargetMappings(...mapping: $HostAccess$MutableTargetMapping_[]): $HostAccess$Builder;
        allowIteratorAccess(iteratorAccess: boolean): $HostAccess$Builder;
        allowIterableAccess(iterableAccess: boolean): $HostAccess$Builder;
        allowImplementationsAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        allowAllClassImplementations(allow: boolean): $HostAccess$Builder;
        disableMethodScopingAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        allowBigIntegerNumberAccess(bigIntegerNumberAccess: boolean): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>, precedence: $HostAccess$TargetMappingPrecedence_): $HostAccess$Builder;
        useModuleLookup(lookup: $MethodHandles$Lookup): $HostAccess$Builder;
        allowAccess(element: $Field): $HostAccess$Builder;
        allowAccess(element: $Executable): $HostAccess$Builder;
        allowBufferAccess(bufferAccess: boolean): $HostAccess$Builder;
        allowListAccess(listAccess: boolean): $HostAccess$Builder;
        allowMapAccess(mapAccess: boolean): $HostAccess$Builder;
        methodScoping(scopingDefault: boolean): $HostAccess$Builder;
        allowArrayAccess(arrayAccess: boolean): $HostAccess$Builder;
        allowPublicAccess(allow: boolean): $HostAccess$Builder;
        allowImplementations(type: $Class<never>): $HostAccess$Builder;
    }
    export class $TypeLiteral<T> {
        getType(): $Type;
        getRawType(): $Class<T>;
        get type(): $Type;
        get rawType(): $Class<T>;
    }
    export class $PolyglotException$StackFrame {
        getLanguage(): $Language;
        getRootName(): string;
        getBytecodeIndex(): number;
        getSourceLocation(): $SourceSection;
        toHostFrame(): $StackTraceElement;
        isGuestFrame(): boolean;
        isHostFrame(): boolean;
        get language(): $Language;
        get rootName(): string;
        get bytecodeIndex(): number;
        get sourceLocation(): $SourceSection;
        get guestFrame(): boolean;
        get hostFrame(): boolean;
    }
    export class $Context$Builder {
        options(options: $Map_<string, string>): $Context$Builder;
        apply(action: $Consumer_<$Context$Builder>): $Context$Builder;
        out(out: $OutputStream): $Context$Builder;
        err(err: $OutputStream): $Context$Builder;
        "in"(arg0: $InputStream): $Context$Builder;
        "arguments"(language: string, args: string[]): $Context$Builder;
        option(key: string, value: string): $Context$Builder;
        build(): $Context;
        environment(name: string, value: string): $Context$Builder;
        environment(env: $Map_<string, string>): $Context$Builder;
        /**
         * @deprecated
         */
        fileSystem(fileSystem: $FileSystem): $Context$Builder;
        engine(engine: $Engine): $Context$Builder;
        timeZone(zone: $ZoneId): $Context$Builder;
        resourceLimits(limits: $ResourceLimits): $Context$Builder;
        exceptionHandler(handler: $Consumer_<$PolyglotException>): $Context$Builder;
        allowEnvironmentAccess(accessPolicy: $EnvironmentAccess): $Context$Builder;
        allowExperimentalOptions(enabled: boolean): $Context$Builder;
        allowInnerContextOptions(enabled: boolean): $Context$Builder;
        allowHostClassLookup(classFilter: $Predicate_<string>): $Context$Builder;
        allowHostClassLoading(enabled: boolean): $Context$Builder;
        allowPolyglotAccess(accessPolicy: $PolyglotAccess): $Context$Builder;
        currentWorkingDirectory(workingDirectory: $Path_): $Context$Builder;
        extendHostAccess(defaultInitialValue: $HostAccess, setup: $Consumer_<$HostAccess$Builder>): $Context$Builder;
        useSystemExit(enabled: boolean): $Context$Builder;
        allowCreateThread(enabled: boolean): $Context$Builder;
        spawnIsolate(value: boolean): $Context$Builder;
        processHandler(handler: $ProcessHandler_): $Context$Builder;
        allowValueSharing(enabled: boolean): $Context$Builder;
        allowCreateProcess(enabled: boolean): $Context$Builder;
        /**
         * @deprecated
         */
        allowHostAccess(enabled: boolean): $Context$Builder;
        allowHostAccess(config: $HostAccess): $Context$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Context$Builder;
        allowNativeAccess(enabled: boolean): $Context$Builder;
        hostClassLoader(classLoader: $ClassLoader): $Context$Builder;
        /**
         * @deprecated
         */
        hostClassFilter(classFilter: $Predicate_<string>): $Context$Builder;
        allowAllAccess(enabled: boolean): $Context$Builder;
        logHandler(logHandler: $Handler): $Context$Builder;
        logHandler(logOut: $OutputStream): $Context$Builder;
        sandbox(policy: $SandboxPolicy_): $Context$Builder;
        /**
         * @deprecated
         */
        allowIO(enabled: boolean): $Context$Builder;
        allowIO(ioAccess: $IOAccess): $Context$Builder;
        extendIO(defaultInitialValue: $IOAccess, setup: $Consumer_<$IOAccess$Builder>): $Context$Builder;
    }
    export class $PolyglotAccess$Builder {
        build(): $PolyglotAccess;
        allowBindingsAccess(language: string): $PolyglotAccess$Builder;
        allowEval(from: string, to: string): $PolyglotAccess$Builder;
        allowEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyBindingsAccess(language: string): $PolyglotAccess$Builder;
        denyEval(from: string, to: string): $PolyglotAccess$Builder;
    }
    export class $PolyglotAccess {
        static newBuilder(): $PolyglotAccess$Builder;
        static ALL: $PolyglotAccess;
        static NONE: $PolyglotAccess;
    }
    export class $AbstractValue {
    }
}
