import { $File_, $File } from "@package/java/io";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Resources } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/project" {
    export class $IProject {
    }
    export interface $IProject extends $INBTSerializable<$CompoundTag> {
        getIcon(): $IGuiTexture;
        getMetadata(): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        initNewProject(): void;
        getProjectType(): $ProjectType;
        getName(): string;
        getResources(): $Resources;
        getVersion(): string;
        getDisplayName(): $Component;
        getSuffix(): string;
        onClosed(arg0: $Editor): void;
        onLoad(arg0: $Editor): void;
        deserializeProject(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeProject(arg0: $HolderLookup$Provider): $CompoundTag;
        get icon(): $IGuiTexture;
        get metadata(): $CompoundTag;
        get projectType(): $ProjectType;
        get name(): string;
        get resources(): $Resources;
        get version(): string;
        get displayName(): $Component;
        get suffix(): string;
    }
    export class $ProjectType {
        getIcon(): $IGuiTexture;
        getIcon(arg0: $File_): $IGuiTexture;
        setIcon(arg0: $IGuiTexture_): $ProjectType;
        static getDefaultIcon(): $IGuiTexture;
        static setDefaultIcon(arg0: $IGuiTexture_): void;
        appendFileMenu(arg0: $Editor, arg1: $File_, arg2: $TreeBuilder$Menu): void;
        getProjectCreator(): $Supplier<$IProject>;
        newEmptyProject(): $IProject;
        openProject(arg0: $Editor, arg1: $File_): void;
        loadProjectFromFile(arg0: $File_): $IProject;
        getDefaultSaveFile(arg0: $IProject, arg1: $File_): $File;
        getRootSavePath(arg0: $IProject, arg1: $File_): $File;
        saveProjectToFile(arg0: $IProject, arg1: $File_): void;
        isProjectDirty(arg0: $IProject, arg1: $File_): boolean;
        getName(): string;
        static of(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>): $ProjectType;
        static of(arg0: string, arg1: string, arg2: $Supplier_<$IProject>): $ProjectType;
        getSuffix(): string;
        icon: $IGuiTexture;
        name: string;
        projectCreator: $Supplier<$IProject>;
        suffix: string;
        constructor(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>);
        constructor(arg0: string, arg1: string, arg2: $Supplier_<$IProject>);
    }
}
