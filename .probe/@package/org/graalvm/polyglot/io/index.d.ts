import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $IntStream } from "@package/java/util/stream";
import { $Path_, $CopyOption, $DirectoryStream$Filter_, $DirectoryStream, $AccessMode_, $LinkOption_, $OpenOption, $FileSystem as $FileSystem$1, $Path } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $FileAttribute } from "@package/java/nio/file/attribute";
import { $Charset } from "@package/java/nio/charset";
import { $Object, $Process } from "@package/java/lang";
import { $List, $Map_, $Map, $Set_, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SeekableByteChannel } from "@package/java/nio/channels";

declare module "@package/org/graalvm/polyglot/io" {
    export class $ByteSequence {
        static create(buffer: number[]): $ByteSequence;
    }
    export interface $ByteSequence {
        byteAt(index: number): number;
        length(): number;
        bytes(): $IntStream;
        subSequence(startIndex: number, endIndex: number): $ByteSequence;
        toByteArray(): number[];
    }
    export class $MessageTransport {
    }
    export interface $MessageTransport {
        open(uri: $URI, peerEndpoint: $MessageEndpoint): $MessageEndpoint;
    }
    /**
     * Values that may be interpreted as {@link $MessageTransport}.
     */
    export type $MessageTransport_ = ((uri: $URI, peerEndpoint: $MessageEndpoint) => $MessageEndpoint);
    export class $IOAccess {
        static newBuilder(prototype: $IOAccess): $IOAccess$Builder;
        static newBuilder(): $IOAccess$Builder;
        static ALL: $IOAccess;
        static NONE: $IOAccess;
    }
    export class $FileSystem {
        static allowInternalResources(fileSystem: $FileSystem): $FileSystem;
        /**
         * @deprecated
         */
        static allowLanguageHomeAccess(fileSystem: $FileSystem): $FileSystem;
        static newFileSystem(fileSystem: $FileSystem$1): $FileSystem;
        /**
         * @deprecated
         */
        static allowInternalResourceAccess(fileSystem: $FileSystem): $FileSystem;
        static newCompositeFileSystem(fallbackFileSystem: $FileSystem, ...delegates: $FileSystem$Selector[]): $FileSystem;
        static newDenyIOFileSystem(): $FileSystem;
        static newDefaultFileSystem(): $FileSystem;
        static newReadOnlyFileSystem(fileSystem: $FileSystem): $FileSystem;
    }
    export interface $FileSystem {
        getFileStoreUnallocatedSpace(path: $Path_): number;
        getMimeType(path: $Path_): string;
        getTempDirectory(): $Path;
        setCurrentWorkingDirectory(currentWorkingDirectory: $Path_): void;
        isFileStoreReadOnly(path: $Path_): boolean;
        getFileStoreUsableSpace(path: $Path_): number;
        getFileStoreBlockSize(path: $Path_): number;
        getFileStoreTotalSpace(path: $Path_): number;
        "delete"(path: $Path_): void;
        checkAccess(path: $Path_, modes: $Set_<$AccessMode_>, ...linkOptions: $LinkOption_[]): void;
        copy(source: $Path_, target: $Path_, ...options: $CopyOption[]): void;
        toRealPath(path: $Path_, ...linkOptions: $LinkOption_[]): $Path;
        getEncoding(path: $Path_): $Charset;
        toAbsolutePath(path: $Path_): $Path;
        readAttributes(path: $Path_, attributes: string, ...options: $LinkOption_[]): $Map<string, $Object>;
        move(source: $Path_, target: $Path_, ...options: $CopyOption[]): void;
        isSameFile(path1: $Path_, path2: $Path_, ...options: $LinkOption_[]): boolean;
        createSymbolicLink(link: $Path_, target: $Path_, ...attrs: $FileAttribute<never>[]): void;
        newByteChannel(path: $Path_, options: $Set_<$OpenOption>, ...attrs: $FileAttribute<never>[]): $SeekableByteChannel;
        newDirectoryStream(dir: $Path_, filter: $DirectoryStream$Filter_<$Path>): $DirectoryStream<$Path>;
        createLink(link: $Path_, existing: $Path_): void;
        readSymbolicLink(link: $Path_): $Path;
        setAttribute(path: $Path_, attribute: string, value: $Object, ...options: $LinkOption_[]): void;
        createDirectory(dir: $Path_, ...attrs: $FileAttribute<never>[]): void;
        getSeparator(): string;
        getPathSeparator(): string;
        parsePath(path: string): $Path;
        parsePath(uri: $URI): $Path;
        get tempDirectory(): $Path;
        set currentWorkingDirectory(value: $Path_);
        get separator(): string;
        get pathSeparator(): string;
    }
    export class $MessageEndpoint {
    }
    export interface $MessageEndpoint {
        sendText(text: string): void;
        sendBinary(data: $ByteBuffer): void;
        sendPing(data: $ByteBuffer): void;
        sendPong(data: $ByteBuffer): void;
        sendClose(): void;
    }
    export class $FileSystem$Selector implements $Predicate<$Path> {
        test(path: $Path_): boolean;
        static of(fileSystem: $FileSystem, predicate: $Predicate_<$Path>): $FileSystem$Selector;
        getFileSystem(): $FileSystem;
        or(arg0: $Predicate_<$Path>): $Predicate<$Path>;
        negate(): $Predicate<$Path>;
        and(arg0: $Predicate_<$Path>): $Predicate<$Path>;
        get fileSystem(): $FileSystem;
    }
    export class $IOAccess$Builder {
        allowHostSocketAccess(allow: boolean): $IOAccess$Builder;
        allowHostFileAccess(allow: boolean): $IOAccess$Builder;
        build(): $IOAccess;
        fileSystem(fileSystem: $FileSystem): $IOAccess$Builder;
    }
    export class $ProcessHandler$ProcessCommand {
        getCommand(): $List<string>;
        static create(cmd: $List_<string>, cwd: string, environment: $Map_<string, string>, redirectErrorStream: boolean, inputRedirect: $ProcessHandler$Redirect, outputRedirect: $ProcessHandler$Redirect, errorRedirect: $ProcessHandler$Redirect): $ProcessHandler$ProcessCommand;
        getEnvironment(): $Map<string, string>;
        isRedirectErrorStream(): boolean;
        getDirectory(): string;
        getErrorRedirect(): $ProcessHandler$Redirect;
        getOutputRedirect(): $ProcessHandler$Redirect;
        getInputRedirect(): $ProcessHandler$Redirect;
        get command(): $List<string>;
        get environment(): $Map<string, string>;
        get redirectErrorStream(): boolean;
        get directory(): string;
        get errorRedirect(): $ProcessHandler$Redirect;
        get outputRedirect(): $ProcessHandler$Redirect;
        get inputRedirect(): $ProcessHandler$Redirect;
    }
    export class $ProcessHandler {
    }
    export interface $ProcessHandler {
        start(command: $ProcessHandler$ProcessCommand): $Process;
    }
    /**
     * Values that may be interpreted as {@link $ProcessHandler}.
     */
    export type $ProcessHandler_ = ((command: $ProcessHandler$ProcessCommand) => $Process);
}
