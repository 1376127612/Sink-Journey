
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getLanguage(): string;
        getExtension(): string;
        getDirectory(): string;
        getClassifier(): string;
        isIncludesDependencies(): boolean;
        getPackaging(): string;
        isAddedToClasspath(): boolean;
        get language(): string;
        get extension(): string;
        get directory(): string;
        get classifier(): string;
        get includesDependencies(): boolean;
        get packaging(): string;
        get addedToClasspath(): boolean;
    }
}
