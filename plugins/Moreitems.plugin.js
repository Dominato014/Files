/*-------------------------------------------------------------
 * Ultimate Weapons plugin - by ThePickledPickle
 *
 * Credits:
 *   - credit to Anthony Fuller for structure & general layout
 *
 * @licence https://www.mozilla.org/en-US/MPL/2.0 */


const randomUUID = require("crypto").randomUUID;
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const NPC_Guns = [
    {
        id: "FIREARMS_HERO_PISTOL_CUREGUN_KALMERIII",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "c2b2a4f4-2b69-49ba-803d-c4a1a14694fd"
    },
    {
        id: "FIREARMS_HERO_POISON_LETHAL_GUM",
        type: "gear",
        subtype: "poison",
        loadoutslot: "gear",
        repoid: "f38acb83-cb09-47d1-8ed8-db4d757c33dd"
    },
    {
        id: "FIREARMS_HERO_POISON_EMETICBOMB",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "e768b961-e812-4b7d-9d42-f7c655a0772a"
    },
    {
        id: "FIREARMS_HERO_DISTRACTION_WATCH",
        type: "gear",
        subtype: "distraction",
        loadoutslot: "gear",
        repoid: "59b5731d-2de8-4175-9be0-92fbc2c3e603"
    },
    {
        id: "FIREARMS_HERO_POISON_SEDATIVE_GUM",
        type: "gear",
        subtype: "poison",
        loadoutslot: "gear",
        repoid: "ddaf38de-2ad3-467d-bdd0-2f6b13cd3f51"
    },
    {
        id: "FIREARMS_HERO_POISON_EMETIC_GUM",
        type: "gear",
        subtype: "poison",
        loadoutslot: "gear",
        repoid: "7ff066ff-2586-4167-856f-37153549bfa9"
    },
    {
        id: "FIREARMS_HERO_CARBOMB",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "53284129-c50a-47a7-9efa-caa3b7503826"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_BATTERY",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "ee25fc91-e42e-4044-99b4-b3c4206d250d"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_OCTANE",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "c82fefa7-febe-46c8-90ec-c945fbef0cb4"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_MILITARY_REMOTEBOMB",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "7c691c03-7c6b-4eb4-9a68-898efe5eedaa"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_FLARE",
        type: "gear",
        subtype: "distraction",
        loadoutslot: "gear",
        repoid: "7d71bc88e-f8f4-4b86-8da6-ecc16d20fbf5"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_FLARE",
        type: "gear",
        subtype: "distraction",
        loadoutslot: "gear",
        repoid: "7d71bc88e-f8f4-4b86-8da6-ecc16d20fbf5"
    },
    {
        id: "FIREARMS_HERO_EXPLOSIVE_WRATH_PXOIMITY_FLASH",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "637a7b20-39b1-48c6-9908-8fb628488262"
    },
    {
        id: "FIREARMS_HERO_SEDATIVE_PROXIMITY_AUDIO",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "09c37e1a-c2b3-4dba-9e26-50fac96d3f65"
    },
    {
        id: "",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
		count: 20,
        repoid: "67559fbc-0877-4b82-9b05-6fe0cf6d7b1c"
    },
    {
        id: "FIREARMS_HERO_GEAR_CASE_GOLD",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
		iscontainer: true,
        repoid: "d5f7e973-fbd8-477e-a34e-37985bedd831"
    }
];
module.exports = function UltimateWeaponsPlugin(controller) {
    const unlockables = controller.configManager.configs.allunlockables;
    NPC_Guns.forEach(function (item) {
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
                RepositoryId: item.repoid
            },
            Rarity: "common"
        });
    });
log(LogLevel.INFO, "[MoreItemsDomEdition] Items added!");
};
