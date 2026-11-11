import { $SmartModifierSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeFailureMode_, $RecipeFailureMode } from "@package/cn/howxu/mmcr/publicapi/runtime";
import { $Enum } from "@package/java/lang";
import { $List, $Map, $Set } from "@package/java/util";
import { $FailureHandler, $RequestHandler_, $RequestHandler, $NetworkSettings, $FailureHandler_ } from "@package/cn/howxu/mmcr/publicapi/network";
import { $MachineContext, $TickHooks, $RecipeHooks } from "@package/cn/howxu/mmcr/publicapi/behavior";

declare module "@package/cn/howxu/mmcr/publicapi/machine" {
    export class $MachineSpec {
    }
    export interface $MachineSpec {
        factory(): $FactoryOptions$View;
        id(): $ResourceLocation;
        displayNameKey(): string;
        controller(): $ControllerOptions$View;
        role(): $MachineKind;
        maxParallelism(): number;
        requestFailures(): $Map<$ResourceLocation, $FailureHandler>;
        recipePoolIds(): $List<$ResourceLocation>;
        requestProcessors(): $Map<$ResourceLocation, $RequestHandler>;
        parallelizable(): boolean;
        maxParallelAmount(): number;
        failureAction(): $RecipeFailureMode;
        requestFailureIds(): $Set<$ResourceLocation>;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        recipeHooks(): ($MachineSpec$RecipeHooksView) | undefined;
        appearance(): $AppearanceOptions$View;
        recipePoolId(): $ResourceLocation;
        networkInterface(): $NetworkSettings;
        runningSoundId(): $ResourceLocation;
        finishSoundId(): $ResourceLocation;
        allowModifiers(): boolean;
        tickHooks(): ($MachineSpec$TickHooksView) | undefined;
        smartInterfaceModifiers(): $List<$SmartModifierSpec>;
        shareSmartInterfaces(): boolean;
        smartInterfaceTypes(): $Map<string, $SmartInterfaceSpec>;
        allowMultithreading(): boolean;
        requestProcessorIds(): $Set<$ResourceLocation>;
    }
    export class $SmartInterfaces$ValueType extends $Enum<$SmartInterfaces$ValueType> {
        static values(): $SmartInterfaces$ValueType[];
        static valueOf(name: string): $SmartInterfaces$ValueType;
        static byName(name: string): $SmartInterfaces$ValueType;
        static FLOAT: $SmartInterfaces$ValueType;
        static INTEGER: $SmartInterfaces$ValueType;
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaces$ValueType}.
     */
    export type $SmartInterfaces$ValueType_ = "float" | "integer";
    export class $AppearanceOptions {
    }
    export interface $AppearanceOptions {
        build(): $AppearanceOptions$View;
        appearance(id: $ResourceLocation_): $AppearanceOptions;
        machineBasicBlock(id: $ResourceLocation_): $AppearanceOptions;
        controllerIdleOverlayTexture(id: $ResourceLocation_): $AppearanceOptions;
        controllerActiveOverlayTexture(id: $ResourceLocation_): $AppearanceOptions;
        controllerBaseTexture(id: $ResourceLocation_): $AppearanceOptions;
        formedPortBaseTexture(id: $ResourceLocation_): $AppearanceOptions;
    }
    export class $AppearanceOptions$View {
    }
    export interface $AppearanceOptions$View {
        machineBasicBlock(): $ResourceLocation;
        controllerIdleOverlayTexture(): $ResourceLocation;
        controllerActiveOverlayTexture(): $ResourceLocation;
        controllerBaseTexture(): $ResourceLocation;
        formedPortBaseTexture(): $ResourceLocation;
    }
    export class $FactoryOptions$ThreadView {
    }
    export interface $FactoryOptions$ThreadView {
        name(): string;
        recipeIds(): $List<$ResourceLocation>;
    }
    export class $ControllerOptions {
    }
    export interface $ControllerOptions {
        id(id: $ResourceLocation_): $ControllerOptions;
        build(): $ControllerOptions$View;
        topTexture(id: $ResourceLocation_): $ControllerOptions;
        textures(front: $ResourceLocation_, otherFaces: $ResourceLocation_): $ControllerOptions;
        textures(front: $ResourceLocation_, side: $ResourceLocation_, top: $ResourceLocation_, bottom: $ResourceLocation_): $ControllerOptions;
        tooltip(...translationKeys: string[]): $ControllerOptions;
        sideTexture(id: $ResourceLocation_): $ControllerOptions;
        bottomTexture(id: $ResourceLocation_): $ControllerOptions;
        frontTexture(id: $ResourceLocation_): $ControllerOptions;
        requireVerticalFacing(enabled: boolean): $ControllerOptions;
        requireVerticalFacing(): $ControllerOptions;
        allowVerticalFacing(): $ControllerOptions;
        allowVerticalFacing(enabled: boolean): $ControllerOptions;
        fullyRotationallySymmetric(): $ControllerOptions;
        fullyRotationallySymmetric(enabled: boolean): $ControllerOptions;
    }
    export class $MachineKind extends $Enum<$MachineKind> {
        static values(): $MachineKind[];
        static valueOf(name: string): $MachineKind;
        static MODULE: $MachineKind;
        static HOST: $MachineKind;
        static NORMAL: $MachineKind;
    }
    /**
     * Values that may be interpreted as {@link $MachineKind}.
     */
    export type $MachineKind_ = "normal" | "host" | "module";
    export class $SmartInterfaceSpec {
    }
    export interface $SmartInterfaceSpec {
        validatedValue(value: number): number;
        priority(): number;
        type(): string;
        defaultValue(): number;
        valueType(): $SmartInterfaces$ValueType;
        maxValue(): number;
        accepts(value: number): boolean;
        translationKey(): string;
        minValue(): number;
        descriptionKey(): string;
    }
    export class $MachineSpec$RecipeHooksView {
    }
    export interface $MachineSpec$RecipeHooksView {
        hasPostServerTick(): boolean;
        hasIdleStart(): boolean;
        hasPreServerTick(): boolean;
        hasIdleEnd(): boolean;
        hasBeforeStart(): boolean;
        hasRecipeTick(): boolean;
        hasBeforeFinish(): boolean;
    }
    export class $FactoryOptions {
    }
    export interface $FactoryOptions {
        thread(name: string, ...recipeIds: $ResourceLocation_[]): $FactoryOptions;
        build(): $FactoryOptions$View;
        hasFactory(enabled: boolean): $FactoryOptions;
        threadLimit(limit: number): $FactoryOptions;
    }
    export class $FactoryOptions$View {
    }
    export interface $FactoryOptions$View {
        threads(): $List<$FactoryOptions$ThreadView>;
        hasFactory(): boolean;
        threadLimit(): number;
    }
    export class $ControllerOptions$View {
    }
    export interface $ControllerOptions$View {
        id(): $ResourceLocation;
        topTexture(): $ResourceLocation;
        tooltip(): $List<string>;
        sideTexture(): $ResourceLocation;
        bottomTexture(): $ResourceLocation;
        frontTexture(): $ResourceLocation;
        requireVerticalFacing(): boolean;
        allowVerticalFacing(): boolean;
        fullyRotationallySymmetric(): boolean;
    }
    export class $MachineSpec$TickHooksView {
    }
    export interface $MachineSpec$TickHooksView {
        hasServerTick(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MachineSpec$TickHooksView}.
     */
    export type $MachineSpec$TickHooksView_ = (() => boolean);
    export class $MachineDraft {
    }
    export interface $MachineDraft {
        factory(configure: $Consumer_<$FactoryOptions>): $MachineDraft;
        build(): $MachineSpec;
        displayNameKey(key: string): $MachineDraft;
        controller(configure: $Consumer_<$ControllerOptions>): $MachineDraft;
        role(kind: $MachineKind_): $MachineDraft;
        maxParallelism(amount: number): $MachineDraft;
        postServerTick(callback: $Consumer_<$MachineContext>): $MachineDraft;
        preServerTick(callback: $Consumer_<$MachineContext>): $MachineDraft;
        requestFailed(id: $ResourceLocation_, handler: $FailureHandler_): $MachineDraft;
        acceptedModule(id: $ResourceLocation_): $MachineDraft;
        parallelizable(enabled: boolean): $MachineDraft;
        runningSound(id: $ResourceLocation_): $MachineDraft;
        maxParallelAmount(amount: number): $MachineDraft;
        failureAction(mode: $RecipeFailureMode_): $MachineDraft;
        requestProcess(id: $ResourceLocation_, handler: $RequestHandler_): $MachineDraft;
        finishSound(id: $ResourceLocation_): $MachineDraft;
        appearance(configure: $Consumer_<$AppearanceOptions>): $MachineDraft;
        networkInterface(maxCount: number, maxConnections: number): $MachineDraft;
        smartInterface(type: $SmartInterfaceSpec): $MachineDraft;
        allowModifiers(): $MachineDraft;
        allowModifiers(enabled: boolean): $MachineDraft;
        tickBehavior(configure: $Consumer_<$TickHooks>): $MachineDraft;
        recipeBehavior(configure: $Consumer_<$RecipeHooks>): $MachineDraft;
        recipePool(...ids: $ResourceLocation_[]): $MachineDraft;
        shareSmartInterfaces(enabled: boolean): $MachineDraft;
        shareSmartInterfaces(): $MachineDraft;
        allowNetworkMachine(id: $ResourceLocation_): $MachineDraft;
        allowMultithreading(enabled: boolean): $MachineDraft;
        allowMultithreading(): $MachineDraft;
        smartInterfaceModifier(modifier: $SmartModifierSpec): $MachineDraft;
    }
}
