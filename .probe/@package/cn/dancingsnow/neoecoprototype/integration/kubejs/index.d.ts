import { $Supplier_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $AEKey } from "@package/appeng/api/stacks";
import { $MatrixMaterials$Kind } from "@package/cn/dancingsnow/neoecoprototype/api";

declare module "@package/cn/dancingsnow/neoecoprototype/integration/kubejs" {
    export class $InfiniteMatrixBuilder extends $ItemBuilder {
        /**
         * 设置矩阵大小；无限矩阵应使用 infinite
         */
        size(arg0: string): $InfiniteMatrixBuilder;
        /**
         * 绑定到任意 AEKey（高级用法：魔源这类非物品/流体键；需要自己提供键对象）
         */
        type(arg0: $Supplier_<$AEKey>): $InfiniteMatrixBuilder;
        /**
         * 设置矩阵在物品栏中使用的模型
         */
        inventoryModel(arg0: $ResourceLocation_): $InfiniteMatrixBuilder;
        /**
         * 设置矩阵材质：infinite、item、fluid、chemical 或 other
         */
        material(arg0: string): $InfiniteMatrixBuilder;
        /**
         * 绑定到指定物品：该物品可无限存入与取出（如 minecraft:glass）
         */
        itemType(arg0: $ResourceLocation_): $InfiniteMatrixBuilder;
        /**
         * 绑定到指定流体：该流体可无限存入与取出（如 minecraft:water）
         */
        fluidType(arg0: $ResourceLocation_): $InfiniteMatrixBuilder;
        /**
         * 设置矩阵等级；当前无限矩阵仅支持 l1
         */
        tier(arg0: string): $InfiniteMatrixBuilder;
        /**
         * 设置矩阵在存储矩阵驱动器中的格子模型
         */
        cellModel(arg0: $ResourceLocation_): $InfiniteMatrixBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static DEFAULT_DRIVE_MODEL: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $StorageMatrixBuilder extends $ItemBuilder {
        /**
         * 设置容量：infinite、1k、4k、16k、64k、1m 或 4m
         */
        size(arg0: string): $StorageMatrixBuilder;
        type(arg0: $Supplier_<$AEKey>): $StorageMatrixBuilder;
        /**
         * 设置矩阵类型：item/fluid/chemical，或家族名 pigmee/universal/quantum/small_bulk/infinite/other（后者只换材质，容量请用 size(...)）
         */
        type(arg0: string): $StorageMatrixBuilder;
        /**
         * 设置自定义存储字节数，例如 bytes(256)。它会顶掉先前或之后的 size(...) 档位
         */
        bytes(arg0: number): $StorageMatrixBuilder;
        /**
         * 绑定任意 AEKey（高级用法：魔源这类非物品/流体键），写成 keyType(() => key)；只对 infinite 或 grows(...) 生效，需要自己提供键对象
         */
        keyType(arg0: $Supplier_<$AEKey>): $StorageMatrixBuilder;
        resolvedMaterial(): $MatrixMaterials$Kind;
        /**
         * 设置物品栏模型
         */
        inventoryModel(arg0: $ResourceLocation_): $StorageMatrixBuilder;
        /**
         * 绑定一个化学品资源 ID；需要 Mekanism 与 Applied Mekanistics
         */
        chemicalType(arg0: $ResourceLocation_): $StorageMatrixBuilder;
        /**
         * 设置矩阵材质：item、fluid、chemical、infinite 或 other
         */
        material(arg0: string): $StorageMatrixBuilder;
        /**
         * 绑定一个物品（只有 infinite 档真的绑；有限矩阵按媒介通用，见本文下方说明）
         */
        itemType(arg0: $ResourceLocation_): $StorageMatrixBuilder;
        /**
         * 绑定一个流体（只有 infinite 档真的绑；有限矩阵按媒介通用，见本文下方说明）
         */
        fluidType(arg0: $ResourceLocation_): $StorageMatrixBuilder;
        /**
         * 设置自定义类型数，例如 totalTypes(400)
         */
        totalTypes(arg0: number): $StorageMatrixBuilder;
        /**
         * 设置驱动器内格子模型
         */
        cellModel(arg0: $ResourceLocation_): $StorageMatrixBuilder;
        /**
         * 让它自产：每 ticksPerBatch 世界刻跳一次，每次 perBatch 个；内容就用 itemType/fluidType/chemicalType 指定
         */
        grows(arg0: number, arg1: number): $StorageMatrixBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
