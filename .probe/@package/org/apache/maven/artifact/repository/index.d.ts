import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        setEnabled(arg0: boolean): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setChecksumPolicy(arg0: string): void;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPassword(): string;
        setPassword(arg0: string): void;
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        getUsername(): string;
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        setUrl(arg0: string): void;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        setId(arg0: string): void;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setBlocked(arg0: boolean): void;
        pathOf(arg0: $Artifact): string;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getProxy(): $Proxy;
        isBlocked(): boolean;
        setProxy(arg0: $Proxy): void;
        getBasedir(): string;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        isProjectAware(): boolean;
        findVersions(arg0: $Artifact): $List<string>;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get basedir(): string;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
    }
}
