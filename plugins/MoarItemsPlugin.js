/**
 * Moar Items plugin - by Anthony Fuller
 *
 * Credits to:
 *   - scoobywizard for the repository ids for some of the items
 *
 * @licence https://www.mozilla.org/en-US/MPL/2.0
 */

const { randomUUID } = require("crypto")
const { existsSync } = require("fs")
const { join } = require("path")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const items = [
    {
        id: "FIREARMS_HERO_PISTOL_KRUGERMEIER_DARK",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "b2d514ba-86d6-456a-be10-7592a30dcae1",
    },
    {
        id: "FIREARMS_PISTOL_STRIKER_V3",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "6576f6aa-8d77-48f1-a4c7-f57fb5ddcc51",
    },
    {
        id: "FIREARMS_PISTOL_ICA_19_BALLER",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "33e56ea0-e4b5-4de0-bdd1-4ee22198da9b",
    },
    {
        id: "FIREARMS_HERO_PISTOL_ICA19_BLACKLILLY_S3",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "b0f87b4e-a41c-4771-8c74-f56574129679",
    },
    {
        id: "FIREARMS_HERO_RIFLE_SHASKA_A33_BLACK",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "09efc132-d35a-4e4e-b58e-ba802cc91dce",
    },
    {
        id: "PROP_DEVICE_ICA_IMPACT_EXPLOSIVE",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "2a493cf9-7cb1-4aad-b892-17abf8b329f4",
    },
	{
        id: "PROP_DEVICE_ICA_PROPANE",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "a8a0c154-c36f-413e-8f29-b83a1b7a22f0",
    },
    {
        id: "PROP_CONTAINER_SNIPER_CASE",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
        iscontainer: true,
        repoid: "0673481e-48ed-4c4a-bd83-53b6724b79fb",
    },
    {
        id: "PROP_CONTAINER_BRIEFCASE_LEATHER",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
        iscontainer: true,
        repoid: "97152c6c-4410-45ab-9e27-50150ce05f9b",
    },
    {
        id: "PROP_CONTAINER_BRIEFCASE_MILITARY",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
        iscontainer: true,
        repoid: "83e194ed-a937-4680-8eb0-7a939bec1df8",
    },
]

module.exports = function moarItemsPlugin(controller) {
    const unlockables = controller.configManager.configs.allunlockables

    if (existsSync(join(process.cwd(), "UnreleasedItemsPlugin.js"))) {
        log(
            LogLevel.WARN,
            "[Moar Items] UnreleasedItemsPlugin.js has been found! Please uninstall it to use Moar Items."
        )
        return
    }

    items.forEach((item) => {
        unlockables.push({
            Id: item.id,
            Guid: randomUUID(),
            Type: item.type,
            Subtype: item.subtype,
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
                IsContainer: item.iscontainer || false,
                LoadoutSlot: item.loadoutslot,
                RepositoryId: item.repoid,
            },
            Rarity: "common",
        })
    })

    log(LogLevel.INFO, "[Moar Items] Giving items... (Plugin Started)")
}
