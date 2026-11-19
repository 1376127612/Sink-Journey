import { $InputStream } from "@package/java/io";
import { $ProgramTypeAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $Map } from "@package/java/util";
import { $AutoCloseable, $CharSequence, $Enum } from "@package/java/lang";
import { $FloatBuffer, $IntBuffer } from "@package/java/nio";
import { $ProgramTypeAccessor as $ProgramTypeAccessor$1 } from "@package/net/irisshaders/iris/mixin";
import { $Matrix4f, $Vector4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/shaders" {
    export class $EffectProgram extends $Program {
        attachToEffect(effect: $Effect): void;
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string): $EffectProgram;
    }
    export class $Uniform extends $AbstractUniform implements $AutoCloseable {
        getName(): string;
        getLocation(): number;
        set(index: number, value: number): void;
        getCount(): number;
        close(): void;
        getType(): number;
        static uploadInteger(x: number, y: number): void;
        static getTypeFromString(typeName: string): number;
        getFloatBuffer(): $FloatBuffer;
        getIntBuffer(): $IntBuffer;
        setLocation(x: number): void;
        upload(): void;
        static glGetUniformLocation(program: number, name: $CharSequence): number;
        static glGetAttribLocation(program: number, name: $CharSequence): number;
        static glBindAttribLocation(program: number, index: number, name: $CharSequence): void;
        static UT_INT4: number;
        static UT_INT3: number;
        static UT_MAT4: number;
        static UT_FLOAT2: number;
        static UT_MAT3: number;
        static UT_FLOAT3: number;
        static UT_MAT2: number;
        static UT_INT2: number;
        static UT_INT1: number;
        static UT_FLOAT1: number;
        static UT_FLOAT4: number;
        constructor(name: string, type: number, count: number, parent: $Shader);
        get name(): string;
        get count(): number;
        get type(): number;
        get floatBuffer(): $FloatBuffer;
        get intBuffer(): $IntBuffer;
    }
    export class $FogShape extends $Enum<$FogShape> {
        static values(): $FogShape[];
        static valueOf(arg0: string): $FogShape;
        getIndex(): number;
        static CYLINDER: $FogShape;
        static SPHERE: $FogShape;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $FogShape}.
     */
    export type $FogShape_ = "sphere" | "cylinder";
    export class $ProgramManager {
        static createProgram(): number;
        static releaseProgram(shader: $Shader): void;
        static linkShader(shader: $Shader): void;
        static glUseProgram(program: number): void;
        constructor();
    }
    export class $AbstractUniform {
        setMat2x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat2x2(x: number, y: number, z: number, w: number): void;
        setMat2x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat4x3(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat4x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): void;
        setMat3x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
        setMat3x2(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat3x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat4x2(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        set(vector: $Vector4f): void;
        set(matrix: $Matrix3f): void;
        set(matrix: $Matrix4f): void;
        set(x: number): void;
        set(x: number): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number, z: number): void;
        set(x: number, y: number): void;
        set(vector: $Vector3f): void;
        set(valueArray: number[]): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number): void;
        set(x: number, y: number, z: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        constructor();
    }
    export class $Effect {
    }
    export interface $Effect extends $Shader {
    }
    export class $Program$Type extends $Enum<$Program$Type> implements $ProgramTypeAccessor$1, $ProgramTypeAccessor {
        getPrograms(): $Map<string, $Program>;
        getName(): string;
        static values(): $Program$Type[];
        static valueOf(arg0: string): $Program$Type;
        getExtension(): string;
        getGlType(): number;
        static createProgramType$ldlib2_$md$e03d8d$1(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        static createProgramType$iris_$md$e03d8d$0(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        static VERTEX: $Program$Type;
        static FRAGMENT: $Program$Type;
        get programs(): $Map<string, $Program>;
        get extension(): string;
        get glType(): number;
    }
    /**
     * Values that may be interpreted as {@link $Program$Type}.
     */
    export type $Program$Type_ = "vertex" | "fragment" | "geometry" | "tess_control" | "tess_eval" | "geometry";
    export class $Program {
        getName(): string;
        getId(): number;
        close(): void;
        attachToShader(shader: $Shader): void;
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string, preprocessor: $GlslPreprocessor): $Program;
        constructor(type: $Program$Type_, id: number, name: string);
        get name(): string;
        get id(): number;
    }
    export class $Shader {
    }
    export interface $Shader {
        markDirty(): void;
        getId(): number;
        getFragmentProgram(): $Program;
        getVertexProgram(): $Program;
        attachToProgram(): void;
        get id(): number;
        get fragmentProgram(): $Program;
        get vertexProgram(): $Program;
    }
    export class $BlendMode {
        static stringToBlendFunc(factorName: string): number;
        static stringToBlendFactor(factorName: string): number;
        apply(): void;
        isOpaque(): boolean;
        constructor(srcColorFactor: number, dstColorFactor: number, srcAlphaFactor: number, dstAlphaFactor: number, blendFunc: number);
        constructor();
        constructor(srcFactor: number, dstFactor: number, blendFunc: number);
        get opaque(): boolean;
    }
}
