StartupEvents.postInit(event => {
    const iu = Java.loadClass('com.kubejsiu.recipe.IURecipeBridge')
    iu.addRecipeEx('fluid_integrator',['industrialupgrade:crafting_elements/crafting_492_element'],[1],'qmd:hydrochloric_acid',100,['industrialupgrade:crafting_elements/crafting_493_element'],[1],'minecraft:water',100,'')
})