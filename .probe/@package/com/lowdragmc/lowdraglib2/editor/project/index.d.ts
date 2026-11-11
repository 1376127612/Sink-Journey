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
        getName(): string;
        getResources(): $Resources;
        getVersion(): string;
        getDisplayName(): $Component;
        onLoad(arg0: $Editor): void;
        getSuffix(): string;
        getIcon(): $IGuiTexture;
        onClosed(arg0: $Editor): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getMetadata(): $CompoundTag;
        getProjectType(): $ProjectType;
        initNewProject(): void;
        deserializeProject(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeProject(arg0: $HolderLookup$Provider): $CompoundTag;
        get name(): string;
        get resources(): $Resources;
        get version(): string;
        get displayName(): $Component;
        get suffix(): string;
        get icon(): $IGuiTexture;
        get metadata(): $CompoundTag;
        get projectType(): $ProjectType;
    }
    export class $ProjectType {
        getName(): string;
        static of(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>): $ProjectType;
        static of(arg0: string, arg1: string, arg2: $Supplier_<$IProject>): $ProjectType;
        getSuffix(): string;
        getIcon(arg0: $File_): $IGuiTexture;
        getIcon(): $IGuiTexture;
        setIcon(arg0: $IGuiTexture_): $ProjectType;
        getRootSavePath(arg0: $IProject, arg1: $File_): $File;
        saveProjectToFile(arg0: $IProject, arg1: $File_): void;
        getDefaultSaveFile(arg0: $IProject, arg1: $File_): $File;
        isProjectDirty(arg0: $IProject, arg1: $File_): boolean;
        appendFileMenu(arg0: $Editor, arg1: $File_, arg2: $TreeBuilder$Menu): void;
        newEmptyProject(): $IProject;
        openProject(arg0: $Editor, arg1: $File_): void;
        static setDefaultIcon(arg0: $IGuiTexture_): void;
        static getDefaultIcon(): $IGuiTexture;
        getProjectCreator(): $Supplier<$IProject>;
        loadProjectFromFile(arg0: $File_): $IProject;
        icon: $IGuiTexture;
        name: string;
        projectCreator: $Supplier<$IProject>;
        suffix: string;
        constructor(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>);
        constructor(arg0: string, arg1: string, arg2: $Supplier_<$IProject>);
    }
}
