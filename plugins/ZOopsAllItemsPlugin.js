const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

module.exports = function OopsSomeItems(controller) {
    controller.configManager.configs.allunlockables.push({
        Id: "OOPS_SOME_ITEM",
        Guid: "8846c008-d710-4d69-b5ca-92ce5f00353e",
        Type: "gear",
        Subtype: "distraction",
        RMTPrice: -1,
        GamePrice: -1,
        IsPurchasable: false,
        IsPublished: true,
        IsDroppable: false,
        Capabilities: [],
        Qualities: {},
        Properties: {
            Gameplay: {},
            Quality: 4,
            Rarity: "common",
            LoadoutSlot: "gear",
            RepositoryId: "00bc7fdc-8cce-4cb5-b31a-4d2d8b4156f8",
            RepositoryAssets: controller.configManager.configs.allunlockables.filter(a=>a.Type == "gear" && ["distraction", "explosive", "poison"].includes(a.Subtype) && a.Subtype != "melee").map(a=>a.Properties.RepositoryId).filter(a=>a)
        },
        Rarity: "common"
    });
    log(LogLevel.INFO, "[Oops Some Items] loaded. Choose the RFID Triggered Explosive in Distractions.")
};