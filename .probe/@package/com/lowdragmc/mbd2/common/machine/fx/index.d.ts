import { $MachineFXConfig } from "@package/com/lowdragmc/mbd2/common/machine/definition/config/fx";
import { $List } from "@package/java/util";

declare module "@package/com/lowdragmc/mbd2/common/machine/fx" {
    export class $IMachineFXManager {
        static NOOP: $IMachineFXManager;
    }
    export interface $IMachineFXManager {
        isPlaying(arg0: string): boolean;
        stopAll(arg0: boolean): void;
        stopAllWithPrefix(arg0: string, arg1: boolean): void;
        stop(arg0: string, arg1: boolean): void;
        play(arg0: $MachineFXConfig, arg1: string): void;
        setPreviewSeed(arg0: number): void;
        resetPreviewRandom(): void;
        playingIdentifiers(): $List<string>;
        set previewSeed(value: number);
    }
}
