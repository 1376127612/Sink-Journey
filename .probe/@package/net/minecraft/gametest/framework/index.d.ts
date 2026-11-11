import { $Annotation } from "@package/java/lang/annotation";
import { $MinecraftServer, $MinecraftServer$ReloadableResources } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $GameTestHelperAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Set_, $List, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $IntPredicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $RuntimeException, $Exception, $Comparable, $Thread, $Throwable, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $File_ } from "@package/java/io";
import { $GameType_, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/gametest/framework" {
    export class $GameTestRunner$Builder {
        existingStructureSpawner(existingStructureSpawner: $StructureGridSpawner): $GameTestRunner$Builder;
        haltOnError(haltOnError: boolean): $GameTestRunner$Builder;
        build(): $GameTestRunner;
        newStructureSpawner(newStructureSpawner: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
        static fromInfo(batches: $Collection_<$GameTestInfo>, level: $ServerLevel): $GameTestRunner$Builder;
        static fromBatches(batches: $Collection_<$GameTestBatch_>, level: $ServerLevel): $GameTestRunner$Builder;
        batcher(batcher: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
    }
    /**
     * Annotate a method with this annotation in order to have it run after the specified `#batch()`.
     */
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static onTestSuccess(testInfo: $GameTestInfo): void;
        static onTestFailed(testInfo: $GameTestInfo): void;
        static finish(): void;
        static replaceWith(testReporter: $TestReporter): void;
        constructor();
    }
    export class $MultipleTestTracker {
        addFailureListener(onFail: $Consumer_<$GameTestInfo>): void;
        addTestToTrack(testInfo: $GameTestInfo): void;
        getDoneCount(): number;
        remove(testInfo: $GameTestInfo): void;
        isDone(): boolean;
        addListener(testListener: $GameTestListener): void;
        getTotalCount(): number;
        getProgressBar(): string;
        hasFailedOptional(): boolean;
        getFailedRequired(): $Collection<$GameTestInfo>;
        hasFailedRequired(): boolean;
        getFailedOptional(): $Collection<$GameTestInfo>;
        getFailedRequiredCount(): number;
        getFailedOptionalCount(): number;
        constructor();
        constructor(testInfos: $Collection_<$GameTestInfo>);
        get doneCount(): number;
        get done(): boolean;
        get totalCount(): number;
        get progressBar(): string;
        get failedRequired(): $Collection<$GameTestInfo>;
        get failedOptional(): $Collection<$GameTestInfo>;
        get failedRequiredCount(): number;
        get failedOptionalCount(): number;
    }
    export class $StructureUtils {
        static clearSpaceForStructure(boundingBox: $BoundingBox, level: $ServerLevel): void;
        static getTransformedFarCorner(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BlockPos;
        static findStructureBlocks(pos: $BlockPos_, radius: number, level: $ServerLevel): $Stream<$BlockPos>;
        static findNearestStructureBlock(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static lookedAtStructureBlockPos(pos: $BlockPos_, entity: $Entity, level: $ServerLevel): $Stream<$BlockPos>;
        static findStructureBlockContainingPos(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static getRotationStepsForRotation(rotation: $Rotation_): number;
        static findStructureByTestFunction(pos: $BlockPos_, radius: number, level: $ServerLevel, testName: string): $Stream<$BlockPos>;
        static createNewEmptyStructureBlock(structureName: string, pos: $BlockPos_, size: $Vec3i, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static removeBarriers(bounds: $AABB_, level: $ServerLevel): void;
        static getStructureOrigin(structureBlockEntity: $StructureBlockEntity): $BlockPos;
        static getRotationForRotationSteps(rotationSteps: number): $Rotation;
        static encaseStructure(bounds: $AABB_, level: $ServerLevel, placeBarriers: boolean): void;
        static getStructureBounds(structureBlockEntity: $StructureBlockEntity): $AABB;
        static addCommandBlockAndButtonToStartTest(structureBlockPos: $BlockPos_, offset: $BlockPos_, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static getStructureBoundingBox(structureBlockEntity: $StructureBlockEntity): $BoundingBox;
        static getStructureBoundingBox(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BoundingBox;
        static prepareTestStructure(gameTestInfo: $GameTestInfo, pos: $BlockPos_, rotation: $Rotation_, level: $ServerLevel): $StructureBlockEntity;
        static DEFAULT_TEST_STRUCTURES_DIR: string;
        static testStructuresDir: string;
        static DEFAULT_Y_SEARCH_RADIUS: number;
        constructor();
    }
    export class $StructureBlockPosFinder {
    }
    export interface $StructureBlockPosFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockPosFinder}.
     */
    export type $StructureBlockPosFinder_ = (() => $Stream<$BlockPos_>);
    export class $GameTestAssertPosException extends $GameTestAssertException {
        getMessageToShowAtBlock(): string;
        getAbsolutePos(): $BlockPos;
        getRelativePos(): $BlockPos;
        constructor(exceptionMessage: string, absolutePos: $BlockPos_, relativePos: $BlockPos_, tick: number);
        get messageToShowAtBlock(): string;
        get absolutePos(): $BlockPos;
        get relativePos(): $BlockPos;
    }
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestBatchSummaryDisplayer}.
     */
    export type $TestCommand$TestBatchSummaryDisplayer_ = { source?: $CommandSourceStack,  } | [source?: $CommandSourceStack, ];
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchStarting(batch: $GameTestBatch_): void;
        testBatchFinished(batch: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        haltOnFailure(): boolean;
        hasTriesLeft(attempts: number, successes: number): boolean;
        numberOfTries(): number;
        unlimitedTries(): boolean;
        static noRetries(): $RetryOptions;
        hasRetries(): boolean;
        constructor(arg0: number, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RetryOptions}.
     */
    export type $RetryOptions_ = { haltOnFailure?: boolean, numberOfTries?: number,  } | [haltOnFailure?: boolean, numberOfTries?: number, ];
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
        findTestFunctions(): $Stream<$TestFunction>;
        source(): $CommandSourceStack;
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        onTestSuccess(testInfo: $GameTestInfo): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        finish(): void;
        save(destination: $File_): void;
        constructor(destination: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        static create(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, testBatches: $Collection_<$TestFunction_>, spawnPos: $BlockPos_): $GameTestServer;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        getTickTimeLogger(): $SampleLogger;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        get tickTimeLogger(): $SampleLogger;
    }
    export class $GameTestRunner$StructureSpawner {
        static NOT_SET: $GameTestRunner$StructureSpawner;
        static IN_PLACE: $GameTestRunner$StructureSpawner;
    }
    export interface $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        batch(): string;
        template(): string;
        required(): boolean;
        rotationSteps(): number;
        templateNamespace(): string;
        attempts(): number;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
        timeoutTicks(): number;
        requiredSuccesses(): number;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        level(): $ServerLevel;
        tracker(): $MultipleTestTracker;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestSummaryDisplayer}.
     */
    export type $TestCommand$TestSummaryDisplayer_ = { tracker?: $MultipleTestTracker, level?: $ServerLevel,  } | [tracker?: $MultipleTestTracker, level?: $ServerLevel, ];
    export class $TestClassNameArgument implements $ArgumentType<string> {
        parse(reader: $StringReader): string;
        static testClassName(): $TestClassNameArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(context: $CommandContext<$CommandSourceStack>, argument: string): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        onTestSuccess(testInfo: $GameTestInfo): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        finish(): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        createMultipleCopies(count: number): $TestFinder$Builder<T>;
        failedTests(context: $CommandContext<$CommandSourceStack>): T;
        failedTests(context: $CommandContext<$CommandSourceStack>, onlyRequired: boolean): T;
        locateByName(context: $CommandContext<$CommandSourceStack>, className: string): T;
        allTestsInClass(context: $CommandContext<$CommandSourceStack>, className: string): T;
        nearest(context: $CommandContext<$CommandSourceStack>): T;
        radius(context: $CommandContext<$CommandSourceStack>, radius: number): T;
        lookedAt(context: $CommandContext<$CommandSourceStack>): T;
        allTests(context: $CommandContext<$CommandSourceStack>): T;
        allNearby(context: $CommandContext<$CommandSourceStack>): T;
        byArgument(context: $CommandContext<$CommandSourceStack>, className: string): T;
        constructor(contextProvider: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        run(gameTestHelper: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        required(): boolean;
        testName(): string;
        rotation(): $Rotation;
        structureName(): string;
        maxAttempts(): number;
        batchName(): string;
        skyAccess(): boolean;
        maxTicks(): number;
        manualOnly(): boolean;
        isFlaky(): boolean;
        setupTicks(): number;
        requiredSuccesses(): number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, rotation: $Rotation_, maxTicks: number, setupTicks: number, arg6: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, maxTicks: number, setupTicks: number, arg5: boolean, required: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TestFunction}.
     */
    export type $TestFunction_ = { setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_, testName?: string, manualOnly?: boolean, maxAttempts?: number,  } | [setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_, testName?: string, manualOnly?: boolean, maxAttempts?: number, ];
    export class $GameTestInfo {
        isDone(): boolean;
        fail(error: $Throwable): void;
        getRotation(): $Rotation;
        isRequired(): boolean;
        getListeners(): $Stream<$GameTestListener>;
        getLevel(): $ServerLevel;
        tick(runner: $GameTestRunner): void;
        getError(): $Throwable;
        addListener(listener: $GameTestListener): void;
        isOptional(): boolean;
        getStructureName(): string;
        placeStructure(): $GameTestInfo;
        getTestFunction(): $TestFunction;
        maxAttempts(): number;
        isFlaky(): boolean;
        hasStarted(): boolean;
        hasFailed(): boolean;
        copyReset(): $GameTestInfo;
        succeed(): void;
        getRunTime(): number;
        setRunAtTickTime(tickTime: number, arg1: $Runnable_): void;
        requiredSuccesses(): number;
        getTimeoutTicks(): number;
        setNorthWestCorner(northWestCorner: $BlockPos_): void;
        retryOptions(): $RetryOptions;
        hasSucceeded(): boolean;
        getTestName(): string;
        startExecution(delay: number): $GameTestInfo;
        getStructureBounds(): $AABB;
        getStructureBlockPos(): $BlockPos;
        getStructureBlockEntity(): $StructureBlockEntity;
        prepareTestStructure(): $GameTestInfo;
        sequences: $Collection<$GameTestSequence>;
        constructor(testFunction: $TestFunction_, rotation: $Rotation_, level: $ServerLevel, retryOptions: $RetryOptions_);
        get done(): boolean;
        get rotation(): $Rotation;
        get required(): boolean;
        get listeners(): $Stream<$GameTestListener>;
        get level(): $ServerLevel;
        get error(): $Throwable;
        get optional(): boolean;
        get structureName(): string;
        get testFunction(): $TestFunction;
        get flaky(): boolean;
        get runTime(): number;
        get timeoutTicks(): number;
        set northWestCorner(value: $BlockPos_);
        get testName(): string;
        get structureBounds(): $AABB;
        get structureBlockPos(): $BlockPos;
        get structureBlockEntity(): $StructureBlockEntity;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        parse(reader: $StringReader): $TestFunction;
        getExamples(): $Collection<string>;
        static testFunctionArgument(): $TestFunctionArgument;
        static suggestTestFunction<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(context: $CommandContext<$CommandSourceStack>, argument: string): $TestFunction;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
        constructor(northTestNorthWestCorner: $BlockPos_, testsPerRow: number, clearOnBatch: boolean);
    }
    export class $TestCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        static getAfterBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getBeforeBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getTestFunctionsForClassName(className: string): $Stream<$TestFunction>;
        static rememberFailedTest(testFunction: $TestFunction_): void;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static forgetFailedTests(): void;
        /**
         * @deprecated
         */
        static register(testMethod: $Method): void;
        /**
         * @deprecated
         */
        static register(testClass: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getAllTestClassNames(): $Collection<string>;
        static isTestClass(className: string): boolean;
        static findTestFunction(testName: string): ($TestFunction) | undefined;
        static getTestFunction(testName: string): $TestFunction;
        constructor();
        static get lastFailedTests(): $Stream<$TestFunction>;
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get allTestClassNames(): $Collection<string>;
    }
    export class $GameTestBatch extends $Record {
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        name(): string;
        gameTestInfos(): $Collection<$GameTestInfo>;
        static DEFAULT_BATCH_NAME: string;
        constructor(name: string, gameTestInfos: $Collection_<$GameTestInfo>, beforeBatchFunction: $Consumer_<$ServerLevel>, afterBatchFunction: $Consumer_<$ServerLevel>);
    }
    /**
     * Values that may be interpreted as {@link $GameTestBatch}.
     */
    export type $GameTestBatch_ = { afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, gameTestInfos?: $Collection_<$GameTestInfo>,  } | [afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, gameTestInfos?: $Collection_<$GameTestInfo>, ];
    export class $GameTestHelper implements $GameTestHelperAccessor {
        assertItemEntityCountIs(item: $Item_, pos: $BlockPos_, expansionAmount: number, arg3: number): void;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        assertBlockEntityData<T extends $BlockEntity>(pos: $BlockPos_, predicate: $Predicate_<T>, exceptionMessage: $Supplier_<string>): void;
        succeedWhenBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhenBlockPresent(block: $Block_, pos: $BlockPos_): void;
        forEveryBlockInStructure(consumer: $Consumer_<$BlockPos>): void;
        killAllEntitiesOfClass(entityClass: $Class<any>): void;
        assertEntityNotTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityProperty<E extends $Entity>(entity: E, predicate: $Predicate_<E>, name: string): void;
        assertEntityProperty<E extends $Entity, T>(entity: E, entityPropertyGetter: $Function_<E, T>, valueName: string, testEntityProperty: T): void;
        assertSameBlockState(testPos: $BlockPos_, comparisonPos: $BlockPos_): void;
        assertRedstoneSignal(pos: $BlockPos_, direction: $Direction_, signalStrengthPredicate: $IntPredicate_, exceptionMessage: $Supplier_<string>): void;
        assertItemEntityNotPresent(item: $Item_): void;
        assertItemEntityNotPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertEntityTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertSameBlockStates(boundingBox: $BoundingBox, pos: $BlockPos_): void;
        succeedWhenEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T): void;
        assertEntityPosition(entity: $Entity, box: $AABB_, exceptionMessage: string): void;
        assertEntityIsHolding<E extends $LivingEntity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: $Supplier_<string>): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: string): void;
        makeMockPlayer(gameType: $GameType_): $Player;
        pulseRedstone(pos: $BlockPos_, delay: number): void;
        succeedOnTickWhen(tick: number, criterion: $Runnable_): void;
        relativeVec(relativeVec3: $Vec3_): $Vec3;
        killAllEntities(): void;
        withLowHealth(entity: $LivingEntity): $LivingEntity;
        assertValueEqual<N>(actual: N, expected: N, valueName: string): void;
        getTestRotation(): $Rotation;
        absoluteVec(relativeVec3: $Vec3_): $Vec3;
        findOneEntity<E extends $Entity>(type: $EntityType_<E>): E;
        assertEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T | null): void;
        findClosestEntity<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): E;
        makeAboutToDrown(entity: $LivingEntity): $LivingEntity;
        getBounds(): $AABB;
        fail(exceptionMessage: string): void;
        fail(exceptionMessage: string, entity: $Entity): void;
        fail(exceptionMessage: string, pos: $BlockPos_): void;
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>): $List<T>;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>, pos: $BlockPos_, radius: number): $List<T>;
        startSequence(): $GameTestSequence;
        assertBlockNotPresent(block: $Block_, x: number, y: number, z: number): void;
        assertBlockNotPresent(block: $Block_, pos: $BlockPos_): void;
        assertItemEntityPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityPresent(item: $Item_): void;
        useBlock(pos: $BlockPos_, player: $Player, result: $BlockHitResult): void;
        useBlock(pos: $BlockPos_, player: $Player): void;
        useBlock(pos: $BlockPos_): void;
        setBlock(pos: $BlockPos_, state: $BlockState_): void;
        setBlock(x: number, y: number, z: number, block: $Block_): void;
        setBlock(pos: $BlockPos_, block: $Block_): void;
        setBlock(x: number, y: number, z: number, state: $BlockState_): void;
        assertTrue(condition: boolean, failureMessage: string): void;
        assertEntityInstancePresent(entity: $Entity, pos: $BlockPos_): void;
        assertEntityInstancePresent(entity: $Entity, x: number, y: number, z: number): void;
        assertAtTickTimeContainerContains(tickTime: number, arg1: $BlockPos_, pos: $Item_): void;
        assertEntityInventoryContains<E extends $Entity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertAtTickTimeContainerEmpty(tickTime: number, arg1: $BlockPos_): void;
        assertLivingEntityHasMobEffect(entity: $LivingEntity, effect: $Holder_<$MobEffect>, amplifier: number): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        placeAt(player: $Player, stack: $ItemStack_, pos: $BlockPos_, direction: $Direction_): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_): T;
        walkTo(mob: $Mob, pos: $BlockPos_, speed: number): $GameTestSequence;
        failIfEver(criterion: $Runnable_): void;
        failIf(criterion: $Runnable_): void;
        succeedIf(criterion: $Runnable_): void;
        onEachTick(criterion: $Runnable_): void;
        setDayTime(time: number): void;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawnItem(item: $Item_, pos: $BlockPos_): $ItemEntity;
        spawnItem(item: $Item_, x: number, y: number, z: number): $ItemEntity;
        spawnItem(item: $Item_, pos: $Vec3_): $ItemEntity;
        moveTo(mob: $Mob, x: number, y: number, z: number): void;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        destroyBlock(pos: $BlockPos_): void;
        randomTick(pos: $BlockPos_): void;
        tickPrecipitation(): void;
        tickPrecipitation(pos: $BlockPos_): void;
        pullLever(pos: $BlockPos_): void;
        pullLever(x: number, y: number, z: number): void;
        relativePos(pos: $BlockPos_): $BlockPos;
        findEntities<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_, radius: number): $List<E>;
        findEntities<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): $List<E>;
        getTick(): number;
        succeed(): void;
        pressButton(x: number, y: number, z: number): void;
        pressButton(pos: $BlockPos_): void;
        setBiome(biome: $ResourceKey_<$Biome>): void;
        setNight(): void;
        assertContainerContains(pos: $BlockPos_, item: $Item_): void;
        assertContainerEmpty(pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_, expansionAmount: number): void;
        assertEntityPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityPresent(type: $EntityType_<never>): void;
        assertEntityNotPresent(type: $EntityType_<never>): void;
        assertEntityNotPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, value: T): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, predicate: $Predicate_<T>, exceptionMessage: string): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, count: number): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, pos: $BlockPos_, count: number, radius: number): void;
        runAfterDelay(delay: number, arg1: $Runnable_): void;
        assertFalse(condition: boolean, failureMessage: string): void;
        absolutePos(pos: $BlockPos_): $BlockPos;
        assertBlockState(pos: $BlockPos_, predicate: $Predicate_<$BlockState>, exceptionMessage: $Supplier_<string>): void;
        assertBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhen(criterion: $Runnable_): void;
        runAtTickTime(delay: number, arg1: $Runnable_): void;
        getTestInfo(): $GameTestInfo;
        getFinalCheckAdded(): boolean;
        setFinalCheckAdded(arg0: boolean): void;
        testInfo: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
        get testRotation(): $Rotation;
        get bounds(): $AABB;
        get level(): $ServerLevel;
        set dayTime(value: number);
        get tick(): number;
        set biome(value: $ResourceKey_<$Biome>);
    }
    export class $LogTestReporter implements $TestReporter {
        onTestSuccess(arg0: $GameTestInfo): void;
        onTestFailed(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    /**
     * Annotate a method with this annotation in order to have it run before the specified `#batch()`.
     */
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestTicker {
        clear(): void;
        add(testInfo: $GameTestInfo): void;
        tick(): void;
        setRunner(runner: $GameTestRunner): void;
        static SINGLETON: $GameTestTicker;
        set runner(value: $GameTestRunner);
    }
    export class $TestFunctionFinder {
    }
    export interface $TestFunctionFinder {
        findTestFunctions(): $Stream<$TestFunction>;
    }
    /**
     * Values that may be interpreted as {@link $TestFunctionFinder}.
     */
    export type $TestFunctionFinder_ = (() => $Stream<$TestFunction_>);
    export class $GameTestSequence {
        thenSucceed(): void;
        thenExecute(task: $Runnable_): $GameTestSequence;
        thenWaitUntil(task: $Runnable_): $GameTestSequence;
        thenWaitUntil(expectedDelay: number, arg1: $Runnable_): $GameTestSequence;
        thenExecuteFor(tick: number, task: $Runnable_): $GameTestSequence;
        thenExecuteAfter(tick: number, task: $Runnable_): $GameTestSequence;
        thenIdle(tick: number): $GameTestSequence;
        thenFail(exception: $Supplier_<$Exception>): void;
        tickAndContinue(tick: number): void;
        tickAndFailIfNotComplete(tick: number): void;
        thenTrigger(): $GameTestSequence$Condition;
        constructor(testInfo: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(maxTests: number): $GameTestRunner$GameTestBatcher;
        static toGameTestInfo(testFunction: $TestFunction_, rotationSteps: number, level: $ServerLevel): $GameTestInfo;
        static fromTestFunction(testFunctions: $Collection_<$TestFunction_>, level: $ServerLevel): $Collection<$GameTestBatch>;
        static toGameTestBatch(gameTestInfos: $Collection_<$GameTestInfo>, functionName: string, index: number): $GameTestBatch;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        start(): void;
        stop(): void;
        addListener(listener: $GameTestBatchListener): void;
        static clearMarkers(serverLevel: $ServerLevel): void;
        getTestInfos(): $List<$GameTestInfo>;
        rerunTest(test: $GameTestInfo): void;
        static DEFAULT_TESTS_PER_ROW: number;
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(infos: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        run(retryOptions: $RetryOptions_, rotationSteps: number): number;
        run(rotationSteps: number): number;
        run(rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_): number;
        run(): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number, testsPerRow: number): number;
        reset(): number;
        clear(): number;
        "export"(): number;
        locate(): number;
        constructor(finder: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        assertTriggeredThisTick(): void;
        constructor(arg0: $GameTestSequence);
    }
}
