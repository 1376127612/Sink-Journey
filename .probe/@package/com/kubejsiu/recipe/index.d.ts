
declare module "@package/com/kubejsiu/recipe" {
    export class $IURecipeBridge {
        static listRecipes(arg0: string): string[];
        static removeByInput(arg0: string, arg1: string, arg2: number): boolean;
        static reloadRecipes(arg0: string): boolean;
        static countRecipes(arg0: string): number;
        static listMachines(): string[];
        static describeMachine(arg0: string): string;
        static dumpMachines(): number;
        static addCentrifugeRecipe(arg0: string, arg1: number, arg2: string, arg3: number): boolean;
        static addMultiRecipe(arg0: string, arg1: string[], arg2: number[], arg3: string, arg4: number): boolean;
        static addMultiRecipe(arg0: string, arg1: string[], arg2: number[], arg3: string, arg4: number, arg5: number): boolean;
        static addMultiRecipe(arg0: string, arg1: string[], arg2: number[], arg3: string, arg4: number, arg5: number, arg6: number): boolean;
        static clearMachine(arg0: string): number;
        static addFluidRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): boolean;
        static addItemRecipeTag(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): number;
        static removeFluidRecipe(arg0: string): boolean;
        static addRecipeEx(arg0: string, arg1: string[], arg2: number[], arg3: string, arg4: number, arg5: string[], arg6: number[], arg7: string, arg8: number, arg9: string): number;
        static addMachineRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number, arg5: number): boolean;
        static addSeedBagRecipe(arg0: string, arg1: number): boolean;
        static replaceFluidRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): boolean;
        static replaceItemRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): boolean;
        static removeByOutput(arg0: string, arg1: string, arg2: number): boolean;
        static addFluidItemRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number, arg5: string, arg6: number): boolean;
        static addItemRecipe(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): boolean;
        static isReady(): boolean;
        static get ready(): boolean;
    }
}
