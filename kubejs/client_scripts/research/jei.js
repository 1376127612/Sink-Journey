// ============================================================
// 溯洄研究阵列 —— JEI 说明
// ============================================================

MMCREvents.client(event => {
    event.addRecipePoolInfo('sinkjourney:mechanical_lab', 'jei.sinkjourney.mechanical_lab.info')
    event.addRecipePoolInfo('sinkjourney:trace_nexus', 'jei.sinkjourney.trace_nexus.info')
    event.addRecipePoolInfo('sinkjourney:trace_compute', 'jei.sinkjourney.trace_compute.info')
    event.addRecipePoolInfo('sinkjourney:trace_cooling', 'jei.sinkjourney.trace_cooling.info')
})

// ---- 原始研究台：自定义 JEI 配方类别 ---------------------------
// 本文件禁止使用 const/let。

var PRT_JEI_ID = 'sinkjourney:primitive_research'
var PRT_JEI_RL = Java.loadClass('net.minecraft.resources.ResourceLocation').parse(PRT_JEI_ID)

JEIAddedEvents.registerCategories(event => {
    var helper = event.data.getJeiHelpers().getGuiHelper()
    event.custom(PRT_JEI_RL, category => {
        category.title(Text.translatable('jei.sinkjourney.primitive_research'))
        category.background(helper.createBlankDrawable(130, 46))
        category.icon(helper.createDrawableItemStack(Item.of('kubejs:primitive_research_table')))
        category.setWidth(130)
        category.setHeight(46)
        category.handleLookup((layout, recipe, focuses) => {
            var kind = String(recipe.getData())
            if (kind === 'blueprint') {
                layout.addInputSlot(10, 14).addItemStack(Item.of('kubejs:research_notes', 4))
                layout.addInputSlot(32, 14).addItemStack(Item.of('minecraft:paper', 1))
                layout.addOutputSlot(92, 14).addItemStack(Item.of('kubejs:blueprint_primitive', 1))
            } else {
                layout.addInputSlot(10, 14).addItemStack(Item.of('minecraft:paper', 1))
                layout.addInputSlot(32, 14).addItemStack(Item.of('minecraft:ink_sac', 1))
                layout.addOutputSlot(92, 14).addItemStack(Item.of('kubejs:research_notes', 2))
            }
        })
    })
})

JEIAddedEvents.registerRecipes(event => {
    event.custom(PRT_JEI_RL)
        .add('notes')
        .add('blueprint')
})

JEIAddedEvents.registerRecipeCatalysts(event => {
    var type = Java.loadClass('pie.ilikepiefoo.compat.jei.events.JEIEventJS')
        .getOrCreateCustomRecipeType(PRT_JEI_RL)
    event.data.addRecipeCatalyst(type, acceptor => {
        acceptor.addItemStack(Item.of('kubejs:primitive_research_table'))
    })
})

// ---- 原始研究台：信息页 ---------------------------------------

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:primitive_research_table', [
        Text.translatable('jei.sinkjourney.primitive_research.info'),
        Text.translatable('jei.sinkjourney.primitive_research.info2'),
        Text.translatable('jei.sinkjourney.primitive_research.info3')
    ])
})
