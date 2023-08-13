/*-------------------------------------------------------------
 * Ultimate Items plugin - by ThePickledPickle
 *
 * Credits:
 *   - credit to Anthony Fuller for structure & general layout
 *
 * @licence https://www.mozilla.org/en-US/MPL/2.0 */


const randomUUID = require("crypto").randomUUID;
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const NPC_Guns = [
    {
        id: "FIREARMS_HERO_GEAR_PISTOL_SIEKER_GEAR",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "351c144c-8687-426a-a6f0-c4abd7021062"
    },
    {
        id: "FIREARMS_HERO_GEAR_PISTOL_TRACKER_GEAR",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "40fbee02-42b4-4b91-9e3e-bc6cc21974dc"
    },
    {
        id: "FIREARMS_HERO_GEAR_PISTOL_TRACKER",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "40fbee02-42b4-4b91-9e3e-bc6cc21974dc"
    },
    {
        id: "FIREARMS_HERO_GEAR_PISTOL_SIEKER_GEARONE",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "351c144c-8687-426a-a6f0-c4abd7021062"
    },
    {
        id: "FIREARMS_HERO_POISON_DARTGUN_BLIND",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "adced1ef-ecb5-4d46-ab73-d955d4b1fa1d"
    },
    {
        id: "FIREARMS_HERO_GEAR_TOOLS_CUSTOM_CASELESS",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "e55c71d6-cbf6-41b8-8838-2d1be1d07e1c"
    },
	{
        id: "FIREARMS_HERO_GEAR_PISTOL_CUREGUN_GEAR",
        type: "gear",
		subtype: "tool",
		loadoutslot: "gear",
        repoid: "c2b2a4f4-2b69-49ba-803d-c4a1a14694fd",
    }
];
module.exports = function UltimateItemsPlugin(controller) {
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
				IsHitmanSuit: item.ishitmansuit || false,
                LoadoutSlot: item.loadoutslot,
                RepositoryId: item.repoid
            },
            Rarity: "common"
        });
    });
    log(LogLevel.INFO, "[GG] Items Duplicated");
};
