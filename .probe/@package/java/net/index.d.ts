import { $Serializable, $InputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $Stream } from "@package/java/util/stream";
import { $Permission } from "@package/java/security";
import { $Enum, $Comparable, $Object, $Class } from "@package/java/lang";
import { $Enumeration, $List, $Map, $Set } from "@package/java/util";
import { $DatagramChannel, $SocketChannel, $ServerSocketChannel } from "@package/java/nio/channels";
export * as http from "@package/java/net/http";

declare module "@package/java/net" {
    export class $ServerSocket implements $Closeable {
        /**
         * @deprecated
         */
        static setSocketFactory(arg0: $SocketImplFactory_): void;
        accept(): $Socket;
        close(): void;
        getChannel(): $ServerSocketChannel;
        bind(arg0: $SocketAddress): void;
        bind(arg0: $SocketAddress, arg1: number): void;
        supportedOptions(): $Set<$SocketOption<never>>;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocket;
        getOption<T>(arg0: $SocketOption<T>): T;
        getSoTimeout(): number;
        setSoTimeout(arg0: number): void;
        setReuseAddress(arg0: boolean): void;
        isClosed(): boolean;
        setReceiveBufferSize(arg0: number): void;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        getReceiveBufferSize(): number;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        getLocalSocketAddress(): $SocketAddress;
        getReuseAddress(): boolean;
        constructor(arg0: number, arg1: number, arg2: $InetAddress);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        static set socketFactory(value: $SocketImplFactory_);
        get channel(): $ServerSocketChannel;
        get closed(): boolean;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get localSocketAddress(): $SocketAddress;
    }
    export class $NetworkInterface {
        getName(): string;
        isVirtual(): boolean;
        getParent(): $NetworkInterface;
        static getByName(arg0: string): $NetworkInterface;
        getIndex(): number;
        static networkInterfaces(): $Stream<$NetworkInterface>;
        inetAddresses(): $Stream<$InetAddress>;
        getDisplayName(): string;
        static getByInetAddress(arg0: $InetAddress): $NetworkInterface;
        getHardwareAddress(): number[];
        getInetAddresses(): $Enumeration<$InetAddress>;
        getInterfaceAddresses(): $List<$InterfaceAddress>;
        getSubInterfaces(): $Enumeration<$NetworkInterface>;
        subInterfaces(): $Stream<$NetworkInterface>;
        static getByIndex(arg0: number): $NetworkInterface;
        isPointToPoint(): boolean;
        supportsMulticast(): boolean;
        getMTU(): number;
        static getNetworkInterfaces(): $Enumeration<$NetworkInterface>;
        isUp(): boolean;
        isLoopback(): boolean;
        get name(): string;
        get virtual(): boolean;
        get parent(): $NetworkInterface;
        get index(): number;
        get displayName(): string;
        get hardwareAddress(): number[];
        get interfaceAddresses(): $List<$InterfaceAddress>;
        get pointToPoint(): boolean;
        get MTU(): number;
        get up(): boolean;
        get loopback(): boolean;
    }
    export class $URLStreamHandlerFactory {
    }
    export interface $URLStreamHandlerFactory {
        createURLStreamHandler(arg0: string): $URLStreamHandler;
    }
    /**
     * Values that may be interpreted as {@link $URLStreamHandlerFactory}.
     */
    export type $URLStreamHandlerFactory_ = ((arg0: string) => $URLStreamHandler);
    export class $InterfaceAddress {
        getAddress(): $InetAddress;
        getBroadcast(): $InetAddress;
        getNetworkPrefixLength(): number;
        get address(): $InetAddress;
        get broadcast(): $InetAddress;
        get networkPrefixLength(): number;
    }
    export class $SocketImplFactory {
    }
    export interface $SocketImplFactory {
        createSocketImpl(): $SocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $SocketImplFactory}.
     */
    export type $SocketImplFactory_ = (() => $SocketImpl);
    export class $URI implements $Comparable<$URI>, $Serializable {
        compareTo(arg0: $URI): number;
        isAbsolute(): boolean;
        resolve(arg0: $URI): $URI;
        resolve(arg0: string): $URI;
        getAuthority(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURL(): $URL;
        static create(arg0: string): $URI;
        getScheme(): string;
        isOpaque(): boolean;
        getRawAuthority(): string;
        getRawFragment(): string;
        getRawQuery(): string;
        getRawPath(): string;
        getHost(): string;
        getPort(): number;
        normalize(): $URI;
        relativize(arg0: $URI): $URI;
        getRawSchemeSpecificPart(): string;
        parseServerAuthority(): $URI;
        getSchemeSpecificPart(): string;
        getRawUserInfo(): string;
        getFragment(): string;
        toASCIIString(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
        get absolute(): boolean;
        get authority(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        get scheme(): string;
        get opaque(): boolean;
        get rawAuthority(): string;
        get rawFragment(): string;
        get rawQuery(): string;
        get rawPath(): string;
        get host(): string;
        get port(): number;
        get rawSchemeSpecificPart(): string;
        get schemeSpecificPart(): string;
        get rawUserInfo(): string;
        get fragment(): string;
    }
    export class $URL implements $Serializable {
        static of(arg0: $URI, arg1: $URLStreamHandler): $URL;
        openStream(): $InputStream;
        getContent(): $Object;
        getContent(arg0: $Class<never>[]): $Object;
        getProtocol(): string;
        getAuthority(): string;
        getFile(): string;
        getRef(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURI(): $URI;
        static setURLStreamHandlerFactory(arg0: $URLStreamHandlerFactory_): void;
        getHost(): string;
        getPort(): number;
        getDefaultPort(): number;
        sameFile(arg0: $URL): boolean;
        toExternalForm(): string;
        openConnection(): $URLConnection;
        openConnection(arg0: $Proxy): $URLConnection;
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string, arg2: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string);
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: $URLStreamHandler);
        get protocol(): string;
        get authority(): string;
        get file(): string;
        get ref(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        static set URLStreamHandlerFactory(value: $URLStreamHandlerFactory_);
        get host(): string;
        get port(): number;
        get defaultPort(): number;
    }
    export class $SocketImpl implements $SocketOptions {
        constructor();
    }
    export class $Proxy {
        type(): $Proxy$Type;
        address(): $SocketAddress;
        static NO_PROXY: $Proxy;
        constructor(arg0: $Proxy$Type_, arg1: $SocketAddress);
    }
    export class $DatagramSocket implements $Closeable {
        setBroadcast(arg0: boolean): void;
        /**
         * @deprecated
         */
        static setDatagramSocketImplFactory(arg0: $DatagramSocketImplFactory_): void;
        connect(arg0: $SocketAddress): void;
        connect(arg0: $InetAddress, arg1: number): void;
        close(): void;
        getPort(): number;
        getChannel(): $DatagramChannel;
        bind(arg0: $SocketAddress): void;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramSocket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        getSendBufferSize(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setSendBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        setReuseAddress(arg0: boolean): void;
        setTrafficClass(arg0: number): void;
        getBroadcast(): boolean;
        isClosed(): boolean;
        setReceiveBufferSize(arg0: number): void;
        getReceiveBufferSize(): number;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        send(arg0: $DatagramPacket): void;
        disconnect(): void;
        receive(arg0: $DatagramPacket): void;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getReuseAddress(): boolean;
        joinGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        leaveGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        constructor(arg0: number, arg1: $InetAddress);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $SocketAddress);
        static set datagramSocketImplFactory(value: $DatagramSocketImplFactory_);
        get port(): number;
        get channel(): $DatagramChannel;
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get closed(): boolean;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
    }
    export class $InetAddress implements $Serializable {
        getHostAddress(): string;
        getHostName(): string;
        getAddress(): number[];
        static getByName(arg0: string): $InetAddress;
        isLinkLocalAddress(): boolean;
        isAnyLocalAddress(): boolean;
        static getLoopbackAddress(): $InetAddress;
        isLoopbackAddress(): boolean;
        isReachable(arg0: $NetworkInterface, arg1: number, arg2: number): boolean;
        isReachable(arg0: number): boolean;
        static getAllByName(arg0: string): $InetAddress[];
        static getByAddress(arg0: number[]): $InetAddress;
        static getByAddress(arg0: string, arg1: number[]): $InetAddress;
        static getLocalHost(): $InetAddress;
        isMulticastAddress(): boolean;
        isSiteLocalAddress(): boolean;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        isMCLinkLocal(): boolean;
        isMCSiteLocal(): boolean;
        isMCOrgLocal(): boolean;
        getCanonicalHostName(): string;
        get hostAddress(): string;
        get hostName(): string;
        get address(): number[];
        get linkLocalAddress(): boolean;
        get anyLocalAddress(): boolean;
        static get localHost(): $InetAddress;
        get multicastAddress(): boolean;
        get siteLocalAddress(): boolean;
        get MCGlobal(): boolean;
        get MCNodeLocal(): boolean;
        get MCLinkLocal(): boolean;
        get MCSiteLocal(): boolean;
        get MCOrgLocal(): boolean;
        get canonicalHostName(): string;
    }
    export class $FileNameMap {
    }
    export interface $FileNameMap {
        getContentTypeFor(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $FileNameMap}.
     */
    export type $FileNameMap_ = ((arg0: string) => string);
    export class $ContentHandlerFactory {
    }
    export interface $ContentHandlerFactory {
        createContentHandler(arg0: string): $ContentHandler;
    }
    /**
     * Values that may be interpreted as {@link $ContentHandlerFactory}.
     */
    export type $ContentHandlerFactory_ = ((arg0: string) => $ContentHandler);
    export class $URLConnection {
        connect(): void;
        getInputStream(): $InputStream;
        getContent(): $Object;
        getContent(arg0: $Class<never>[]): $Object;
        getPermission(): $Permission;
        static guessContentTypeFromName(arg0: string): string;
        setRequestProperty(arg0: string, arg1: string): void;
        addRequestProperty(arg0: string, arg1: string): void;
        getRequestProperty(arg0: string): string;
        getRequestProperties(): $Map<string, $List<string>>;
        getHeaderFieldKey(arg0: number): string;
        getContentType(): string;
        getDefaultUseCaches(): boolean;
        static getDefaultUseCaches(arg0: string): boolean;
        getHeaderFieldLong(arg0: string, arg1: number): number;
        getHeaderFieldDate(arg0: string, arg1: number): number;
        static getFileNameMap(): $FileNameMap;
        static setFileNameMap(arg0: $FileNameMap_): void;
        setConnectTimeout(arg0: number): void;
        getConnectTimeout(): number;
        setReadTimeout(arg0: number): void;
        getReadTimeout(): number;
        getContentEncoding(): string;
        getExpiration(): number;
        getDate(): number;
        getLastModified(): number;
        getHeaderFieldInt(arg0: string, arg1: number): number;
        setDoInput(arg0: boolean): void;
        getDoInput(): boolean;
        setDoOutput(arg0: boolean): void;
        getDoOutput(): boolean;
        setAllowUserInteraction(arg0: boolean): void;
        getAllowUserInteraction(): boolean;
        static setDefaultAllowUserInteraction(arg0: boolean): void;
        static getDefaultAllowUserInteraction(): boolean;
        getUseCaches(): boolean;
        setIfModifiedSince(arg0: number): void;
        getIfModifiedSince(): number;
        setDefaultUseCaches(arg0: boolean): void;
        static setDefaultUseCaches(arg0: string, arg1: boolean): void;
        /**
         * @deprecated
         */
        static setDefaultRequestProperty(arg0: string, arg1: string): void;
        /**
         * @deprecated
         */
        static getDefaultRequestProperty(arg0: string): string;
        static setContentHandlerFactory(arg0: $ContentHandlerFactory_): void;
        getURL(): $URL;
        setUseCaches(arg0: boolean): void;
        getContentLength(): number;
        getContentLengthLong(): number;
        getHeaderFields(): $Map<string, $List<string>>;
        getHeaderField(arg0: string): string;
        getHeaderField(arg0: number): string;
        static guessContentTypeFromStream(arg0: $InputStream): string;
        getOutputStream(): $OutputStream;
        get inputStream(): $InputStream;
        get permission(): $Permission;
        get requestProperties(): $Map<string, $List<string>>;
        get contentType(): string;
        get contentEncoding(): string;
        get expiration(): number;
        get date(): number;
        get lastModified(): number;
        static set contentHandlerFactory(value: $ContentHandlerFactory_);
        get URL(): $URL;
        get contentLength(): number;
        get contentLengthLong(): number;
        get headerFields(): $Map<string, $List<string>>;
        get outputStream(): $OutputStream;
    }
    export class $ProtocolFamily {
    }
    export interface $ProtocolFamily {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolFamily}.
     */
    export type $ProtocolFamily_ = (() => string);
    export class $Authenticator {
        static getDefault(): $Authenticator;
        static setDefault(arg0: $Authenticator): void;
        static requestPasswordAuthentication(arg0: $Authenticator, arg1: string, arg2: $InetAddress, arg3: number, arg4: string, arg5: string, arg6: string, arg7: $URL, arg8: $Authenticator$RequestorType_): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: $InetAddress, arg1: number, arg2: string, arg3: string, arg4: string): $PasswordAuthentication;
        requestPasswordAuthenticationInstance(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        constructor();
    }
    export class $InetSocketAddress extends $SocketAddress {
        isUnresolved(): boolean;
        getHostName(): string;
        getAddress(): $InetAddress;
        getPort(): number;
        getHostString(): string;
        static createUnresolved(arg0: string, arg1: number): $InetSocketAddress;
        constructor(arg0: string, arg1: number);
        constructor(arg0: number);
        constructor(arg0: $InetAddress, arg1: number);
        get unresolved(): boolean;
        get hostName(): string;
        get address(): $InetAddress;
        get port(): number;
        get hostString(): string;
    }
    export class $PasswordAuthentication {
        getUserName(): string;
        getPassword(): string[];
        constructor(arg0: string, arg1: string[]);
        get userName(): string;
        get password(): string[];
    }
    export class $Socket implements $Closeable {
        connect(arg0: $SocketAddress): void;
        connect(arg0: $SocketAddress, arg1: number): void;
        close(): void;
        getInputStream(): $InputStream;
        getPort(): number;
        getChannel(): $SocketChannel;
        bind(arg0: $SocketAddress): void;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $Socket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        shutdownInput(): void;
        shutdownOutput(): void;
        getSoLinger(): number;
        setOOBInline(arg0: boolean): void;
        setSoLinger(arg0: boolean, arg1: number): void;
        setKeepAlive(arg0: boolean): void;
        getSendBufferSize(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setTcpNoDelay(arg0: boolean): void;
        setSendBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        setReuseAddress(arg0: boolean): void;
        setTrafficClass(arg0: number): void;
        getOutputStream(): $OutputStream;
        isClosed(): boolean;
        setReceiveBufferSize(arg0: number): void;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        getReceiveBufferSize(): number;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        isInputShutdown(): boolean;
        isOutputShutdown(): boolean;
        sendUrgentData(arg0: number): void;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getTcpNoDelay(): boolean;
        getOOBInline(): boolean;
        getKeepAlive(): boolean;
        getReuseAddress(): boolean;
        /**
         * @deprecated
         */
        static setSocketImplFactory(arg0: $SocketImplFactory_): void;
        constructor();
        constructor(arg0: $Proxy);
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: string, arg1: number);
        constructor(arg0: $InetAddress, arg1: number, arg2: $InetAddress, arg3: number);
        /**
         * @deprecated
         */
        constructor(arg0: $InetAddress, arg1: number, arg2: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: number, arg2: boolean);
        constructor(arg0: string, arg1: number, arg2: $InetAddress, arg3: number);
        get inputStream(): $InputStream;
        get port(): number;
        get channel(): $SocketChannel;
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get outputStream(): $OutputStream;
        get closed(): boolean;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get inputShutdown(): boolean;
        get outputShutdown(): boolean;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        static set socketImplFactory(value: $SocketImplFactory_);
    }
    export class $HttpURLConnection extends $URLConnection {
        getErrorStream(): $InputStream;
        setRequestMethod(arg0: string): void;
        getResponseCode(): number;
        setAuthenticator(arg0: $Authenticator): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setChunkedStreamingMode(arg0: number): void;
        static setFollowRedirects(arg0: boolean): void;
        static getFollowRedirects(): boolean;
        setInstanceFollowRedirects(arg0: boolean): void;
        getInstanceFollowRedirects(): boolean;
        getRequestMethod(): string;
        getResponseMessage(): string;
        disconnect(): void;
        usingProxy(): boolean;
        static HTTP_SEE_OTHER: number;
        static HTTP_CLIENT_TIMEOUT: number;
        static HTTP_BAD_REQUEST: number;
        static HTTP_ACCEPTED: number;
        static HTTP_NOT_ACCEPTABLE: number;
        static HTTP_PROXY_AUTH: number;
        static HTTP_REQ_TOO_LONG: number;
        static HTTP_RESET: number;
        static HTTP_LENGTH_REQUIRED: number;
        static HTTP_VERSION: number;
        static HTTP_PRECON_FAILED: number;
        static HTTP_GATEWAY_TIMEOUT: number;
        static HTTP_PAYMENT_REQUIRED: number;
        /**
         * @deprecated
         */
        static HTTP_SERVER_ERROR: number;
        static HTTP_NOT_MODIFIED: number;
        static HTTP_BAD_METHOD: number;
        static HTTP_BAD_GATEWAY: number;
        static HTTP_MOVED_PERM: number;
        static HTTP_NO_CONTENT: number;
        static HTTP_ENTITY_TOO_LARGE: number;
        static HTTP_MOVED_TEMP: number;
        static HTTP_NOT_AUTHORITATIVE: number;
        static HTTP_UNAVAILABLE: number;
        static HTTP_USE_PROXY: number;
        static HTTP_INTERNAL_ERROR: number;
        static HTTP_OK: number;
        static HTTP_MULT_CHOICE: number;
        static HTTP_CONFLICT: number;
        static HTTP_CREATED: number;
        static HTTP_UNAUTHORIZED: number;
        static HTTP_FORBIDDEN: number;
        static HTTP_NOT_IMPLEMENTED: number;
        static HTTP_GONE: number;
        static HTTP_UNSUPPORTED_TYPE: number;
        static HTTP_PARTIAL: number;
        static HTTP_NOT_FOUND: number;
        get errorStream(): $InputStream;
        get responseCode(): number;
        set authenticator(value: $Authenticator);
        set chunkedStreamingMode(value: number);
        get responseMessage(): string;
    }
    export class $SocketAddress implements $Serializable {
        constructor();
    }
    export class $URLStreamHandler {
        constructor();
    }
    export class $DatagramPacket {
        setSocketAddress(arg0: $SocketAddress): void;
        getLength(): number;
        setLength(arg0: number): void;
        getAddress(): $InetAddress;
        getPort(): number;
        getOffset(): number;
        getData(): number[];
        getSocketAddress(): $SocketAddress;
        setPort(arg0: number): void;
        setData(arg0: number[], arg1: number, arg2: number): void;
        setData(arg0: number[]): void;
        setAddress(arg0: $InetAddress): void;
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $SocketAddress);
        constructor(arg0: number[], arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: number[], arg1: number, arg2: $SocketAddress);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $InetAddress, arg4: number);
        get offset(): number;
    }
    export class $ContentHandler {
        getContent(arg0: $URLConnection): $Object;
        getContent(arg0: $URLConnection, arg1: $Class<any>[]): $Object;
        constructor();
    }
    export class $DatagramSocketImplFactory {
    }
    export interface $DatagramSocketImplFactory {
        createDatagramSocketImpl(): $DatagramSocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $DatagramSocketImplFactory}.
     */
    export type $DatagramSocketImplFactory_ = (() => $DatagramSocketImpl);
    export class $SocketOption<T> {
    }
    export interface $SocketOption<T> {
        name(): string;
        type(): $Class<T>;
    }
    export class $Proxy$Type extends $Enum<$Proxy$Type> {
        static values(): $Proxy$Type[];
        static valueOf(arg0: string): $Proxy$Type;
        static SOCKS: $Proxy$Type;
        static HTTP: $Proxy$Type;
        static DIRECT: $Proxy$Type;
    }
    /**
     * Values that may be interpreted as {@link $Proxy$Type}.
     */
    export type $Proxy$Type_ = "direct" | "http" | "socks";
    export class $Authenticator$RequestorType extends $Enum<$Authenticator$RequestorType> {
        static values(): $Authenticator$RequestorType[];
        static valueOf(arg0: string): $Authenticator$RequestorType;
        static PROXY: $Authenticator$RequestorType;
        static SERVER: $Authenticator$RequestorType;
    }
    /**
     * Values that may be interpreted as {@link $Authenticator$RequestorType}.
     */
    export type $Authenticator$RequestorType_ = "proxy" | "server";
}
