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
        length(): number;
        bytes(): $IntStream;
        subSequence(startIndex: number, endIndex: number): $ByteSequence;
        toByteArray(): number[];
        byteAt(index: number): number;
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
        static newFileSystem(fileSystem: $FileSystem$1): $FileSystem;
        static allowInternalResources(fileSystem: $FileSystem): $FileSystem;
        /**
         * @deprecated
         */
        static allowLanguageHomeAccess(fileSystem: $FileSystem): $FileSystem;
        /**
         * @deprecated
         */
        static allowInternalResourceAccess(fileSystem: $FileSystem): $FileSystem;
        static newReadOnlyFileSystem(fileSystem: $FileSystem): $FileSystem;
        static newDefaultFileSystem(): $FileSystem;
        static newCompositeFileSystem(fallbackFileSystem: $FileSystem, ...delegates: $FileSystem$Selector[]): $FileSystem;
        static newDenyIOFileSystem(): $FileSystem;
    }
    export interface $FileSystem {
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
        getTempDirectory(): $Path;
        isFileStoreReadOnly(path: $Path_): boolean;
        getFileStoreTotalSpace(path: $Path_): number;
        getFileStoreUsableSpace(path: $Path_): number;
        getFileStoreBlockSize(path: $Path_): number;
        setCurrentWorkingDirectory(currentWorkingDirectory: $Path_): void;
        getMimeType(path: $Path_): string;
        getFileStoreUnallocatedSpace(path: $Path_): number;
        get separator(): string;
        get pathSeparator(): string;
        get tempDirectory(): $Path;
        set currentWorkingDirectory(value: $Path_);
    }
    export class $MessageEndpoint {
    }
    export interface $MessageEndpoint {
        sendBinary(data: $ByteBuffer): void;
        sendPing(data: $ByteBuffer): void;
        sendText(text: string): void;
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
        build(): $IOAccess;
        fileSystem(fileSystem: $FileSystem): $IOAccess$Builder;
        allowHostSocketAccess(allow: boolean): $IOAccess$Builder;
        allowHostFileAccess(allow: boolean): $IOAccess$Builder;
    }
    export class $ProcessHandler$ProcessCommand {
        static create(cmd: $List_<string>, cwd: string, environment: $Map_<string, string>, redirectErrorStream: boolean, inputRedirect: $ProcessHandler$Redirect, outputRedirect: $ProcessHandler$Redirect, errorRedirect: $ProcessHandler$Redirect): $ProcessHandler$ProcessCommand;
        getDirectory(): string;
        getEnvironment(): $Map<string, string>;
        getCommand(): $List<string>;
        isRedirectErrorStream(): boolean;
        getInputRedirect(): $ProcessHandler$Redirect;
        getErrorRedirect(): $ProcessHandler$Redirect;
        getOutputRedirect(): $ProcessHandler$Redirect;
        get directory(): string;
        get environment(): $Map<string, string>;
        get command(): $List<string>;
        get redirectErrorStream(): boolean;
        get inputRedirect(): $ProcessHandler$Redirect;
        get errorRedirect(): $ProcessHandler$Redirect;
        get outputRedirect(): $ProcessHandler$Redirect;
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
