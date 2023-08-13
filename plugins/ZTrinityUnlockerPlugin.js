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
        id: "FIREARMS_HERO_PISTOL_ICA19_RED_TRINITY",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "fca954f6-40b1-448d-b4a8-0c543e521cc3"
    },
	 {
        id: "OUTFIT_HERO_LIFESUIT",
        type: "disguise",
        subtype: "classic",
        loadoutslot: "disguise",
        repoid: "20eba87e-bb95-4cfd-8178-1134395d6f6d"
    },
	 {
        id: "OUTFIT_HERO_BIRTHSUIT",
        type: "disguise",
        subtype: "classic",
        loadoutslot: "disguise",
        repoid: "84f84fba-0259-4fe8-9d0f-d272cf07d958"
    },
	 {
        id: "OUTFIT_HERO_DEATHSUIT",
        type: "disguise",
        subtype: "classic",
        loadoutslot: "disguise",
        repoid: "da6cdb95-c3fd-441e-be0d-4098720b21e5"
    },
	{
        id: "FIREARMS_HERO_PISTOL_ICA19_BLACK_TRINITY",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "563e5651-3024-4dc8-9063-93030a670ca3"
    },
	{
        id: "FIREARMS_HERO_PISTOL_TAUNTON",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "8762d292-91ce-4385-9f78-dbf845f8366d"
    },
	{
        id: "GEAR_HERO_CONTAINER_RED_TRINITY",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
		iscontainer: true,
        repoid: "411cfaca-502b-41e3-9a97-311f6644d5a1"
    },
	{
        id: "GEAR_HERO_CONTAINER_WHITE_TRINITY",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
		iscontainer: true,
        repoid: "6a86aea4-77db-4b54-a23a-bb90a398a157"
    },
	{
        id: "GEAR_HERO_CONTAINER_BLACK_TRINITY",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
		iscontainer: true,
        repoid: "d27e9671-c2cb-4d32-b64f-c401140a4de2"
    },
    {
        id: "FIREARMS_HERO_PISTOL_ICA19_WHITE_TRINITY",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "cfa664fc-e583-4ad5-ade5-2f746d8656ca"
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
log(LogLevel.INFO, "[Trinity Unlocker Plugin] Items Unlocked!");
};
