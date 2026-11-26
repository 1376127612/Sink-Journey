// Ad Astra 的铁棍、钢棍已由质棍接管，配方浏览器里不再单列。

RecipeViewerEvents.removeEntries('item', event => {
    ['ad_astra:iron_rod', 'ad_astra:steel_rod'].forEach(id => {
        if (Item.exists(id)) {
            event.remove(id)
        }
    })
})
