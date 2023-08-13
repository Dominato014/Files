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
        id: "FIREARMS_HERO_PISTOL_HACKL_9S_COVERT",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "35efd6dc-0387-4b56-83f0-4e6609bac93f"
    },
    {
        id: "FIREARMS_NPC_SMG02_TACTICAL_SHARED_SKIN01",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "3fd9825d-8aa5-48e0-97a9-ec8f541f871a"
    },
    {
        id: "FIREARMS_NPC_SMG02_TACTICAL_SHARED_SKIN01",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "3fd9825d-8aa5-48e0-97a9-ec8f541f871a"
    },
    {
        id: "firearms_hero_smg_ica_raptor_s3",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "302a5fed-c166-46db-a5cb-5410eb052d29"
    },
    {
        id: "firearms_hero_axe_hatchet",
        type: "gear",
        subtype: "melee",
        loadoutslot: "gear",
        repoid: "a8bc4325-718e-45ba-b0e4-000729c70ce4"
    },
    {
        id: "firearms_heavy_hero_sniper_dragon",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "concealedweapon",
        repoid: "559d8002-9dc5-4da7-ab54-18c8ad20f047"
    },
    {
        id: "firearms_heavy_hero_pride_dragon",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "concealedweapon",
        repoid: "f9d471fc-a3d0-49bd-8e2d-af7fb8cedf6f"
    },
    {
        id: "firearms_heavy_hero_pride_case",
        type: "gear",
        subtype: "container",
        loadoutslot: "gear",
		iscontainer: true,
        repoid: "7ef0c49f-a5dc-421e-abe9-c94fe17ea0f9"
    },
	{
        id: "firearms_hero_pistol_ica19_goldballer_desc",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "6eccc7e1-e31b-42de-8f84-b88d8e0032ea"
    },
	{
        id: "firearms_hero_pistol_ica19_goldballer_desc",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "6eccc7e1-e31b-42de-8f84-b88d8e0032ea"
    },
	{
        id: "firearms_hero_rifle_fullauto_shashka_a33_gold_desc",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "79b48d90-26aa-4b17-9332-599ed8e0bd7f"
    },
	{
        id: "ui_firearms_hero_pistol_tactical_base_desc",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "9e896f52-6339-42d4-9c27-931be526bfa7"
    },
    {
        id: "firearms_hero_smg_hx-7_covert",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "e0de34ce-f8d1-428b-8b37-0dae7398bde3"
    },
    {
        id: "firearms_hero_pistol_hwk_21_white",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "c716ebb8-cc0e-4e60-9335-844a0d7e645d"
    },
    {
        id: "firearms_hero_smg_semiauto_mac_10",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "d75bef38-8a65-45f6-9cd1-ca5e23e2f79a"
    },
    {
        id: "firearms_npc_pistol01_light_shared_skin02",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "2953e9ac-e25b-41ae-afbf-4a47f86c4f54"
    },
	{
        id: "firearms_hero_rifle_fullauto_shashka_u33_s3",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "e3b943d9-9f2c-4d45-a29e-e0dbf31a82bc"
    },
	{
        id: "firearms_hero_smg_fast_base",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "c3fe8e30-5a17-4881-b882-c7f9ff19823c"
    },
	{
        id: "firearms_hero_dak_dti_covert_s3",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "f15f0da5-cffe-4374-8235-0b960bce3652"
    },
    {
        id: "firearms_npc_bartoli_hunting_shotgun_s3",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "785c3c6b-1272-4853-94f0-a41d52f64795"
    },
    {
        id: "FIREARMS_NPC_SMG01_STANDARD",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "e206ed81-0559-4289-9fec-e6a3e9d4ee7c"
    },
    {
        id: "firearms_hero_rifle_fullauto_shashka_a33_covert",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "226c2548-53e0-4703-873c-366e2c38dc5f"
    },
    {
        id: "ui_firearms_npc_rifle_fullauto_base",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "d8aa6eba-0cb7-4ed4-ab99-975f2793d731"
    },
    {
        id: "firearms_npc_dak_dti_s3",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "bbabd2bd-6e21-4b9b-a361-71bc255fc9b9"
    },
    {
        id: "ui_firearms_npc_shotgun_standard_base",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "901a3b51-51a0-4236-bdf2-23d20696b358"
    },
    {
        id: "firearms_npc_rifle01_fullauto_shared_skin03",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "6b93848c-8f1d-42eb-816f-bab61b56d8a5"
    },
    {
        id: "firearms_hero_shotgun_semiauto_beanbag_covert",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "f205ab30-bd46-4ad5-97f1-a728360e7131"
    },
	{
        id: "firearms_hero_shotgun_semiauto_enram_beanbag_mini",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "94939b01-fda2-422e-99cf-c5f3edb2076a"
    },
	{
        id: "firearms_hero_rifle_fullauto_015_su_skin07",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "ce475c6a-439d-49b7-ad54-325a2faae5a5"
    },
    {
        id: "firearms_hero_sniper_heavy_druzhina",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "43d15bea-d282-4a91-b625-8b7ba85c0ad5"
    },
    {
        id: "FIREARMS_HERO_PISTOL_HACKL_9R",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "1cae7d71-55c8-401a-9dfb-cd0909c4f6ee"
    },
	{
        id: "firearms_hero_smg_tactical_base",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "ebc561b5-b368-4583-b5fe-bc961b4ad4e3"
    },
	{
        id: "firearms_hero_smg_semiauto_mac_10_covert",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "concealedweapon",
        repoid: "08366aec-7f5b-4c1e-9f47-00ec2df7d185"
    },
    {
        id: "firearms_npc_shotgun01_standard_shared_skin02",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "7f31d897-a62f-448c-be0d-79d565e2faa7"
    },
    {
        id: "FIREARMS_HERO_PISTOL_HACKL_9S",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "1e11fbea-cd51-48bf-8316-a050772d6135"
    },
    {
        id: "ui_firearms_npc_pistol_light_base",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "55ed7196-2303-4af6-9fa3-45b691134561"
    },
    {
        id: "firearms_hero_smg_ica_raptor_covert_s3",
        type: "weapon",
        subtype: "smg",
        loadoutslot: "carriedweapon",
        repoid: "a494c3c8-9a41-4398-9542-559e6a5dc1cb"
    },
    {
        id: "firearms_hero_pistol_concept5_dti",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "29f10687-7ff4-4d30-a12a-53054afb3558"
    },
	{
        id: "firearms_hero_pistol_hwk_dti",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "396383c3-c42e-4fcf-b505-9d970518dc04"
    },
	{
        id: "firearms_hero_shotgun_semiauto_beanbag",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "507f3f6e-4681-4efa-96f9-58411d7fecf8"
    },
	{
        id: "firearms_npc_rifle01_fullauto_shared_skin02",
        type: "weapon",
        subtype: "assaultrifle",
        loadoutslot: "carriedweapon",
        repoid: "16edb112-58cc-4069-a7dd-ebd258b14044"
    },
	{
        id: "firearms_hero_sniper_sc_copperhead",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "96be452c-a2b5-4827-adb6-ff394d2e9ba0"
    },
    {
        id: "firearms_hero_sniper_sc_viper_arctic",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "b0111e5e-f7ba-47c2-b16e-6b9bde14a0ca"
    },
    {
        id: "firearms_hero_sniper_sc_rude_ruby_arctic",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "d8da0a25-925b-4e5d-a5c2-6fe5154434c7"
    },
    {
        id: "firearms_hero_sniper_sc_viper",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "edcd3a40-cab7-41c5-af1b-461625594298"
    },
    {
        id: "firearms_hero_sniper_sc_rude_ruby",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "58cef3b5-9b24-45c1-bf86-60f9958ae013"
    },
    {
        id: "firearms_hero_sniper_sc_redeemer",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "646ae32f-5978-4fb9-8c9f-93d612c76e23"
    },
    {
        id: "firearms_hero_sniper_sc_ghost",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "5f5e10e1-4c38-4fd0-ac16-8f42526ab232"
    },
    {
        id: "firearms_hero_sniper_sc_druzhina_ica_arctic",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "2f209936-1427-43b6-9812-d6f60b24336f"
    },
	{
        id: "firearms_hero_pistol_magnum_base",
        type: "weapon",
        subtype: "pistol",
        loadoutslot: "concealedweapon",
        repoid: "bbd802e2-7b21-46d8-8f59-9dbb452ff995"
    },
	{
        id: "firearms_hero_shotgun_semiauto_bartoli_12g_sawedoff_golden",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "8598ae82-53ac-43ba-9f43-30140d6ba7ee"
    },
	{
        id: "firearms_hero_shotgun_exotic01",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "eb9495e1-7d68-44ef-9025-a26770158b63"
    },
	{
        id: "firearms_hero_shotgun_semiauto_tabanca_y18",
        type: "weapon",
        subtype: "shotgun",
        loadoutslot: "carriedweapon",
        repoid: "0af419f5-e6d3-488d-b133-6ce0964b0770"
    },
    {
        id: "firearms_hero_sniper_sc_druzhina_ica",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "c8b2d7ab-c952-4ad3-99fe-4627047318b9"
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
                LoadoutSlot: item.loadoutslot,
                RepositoryId: item.repoid
            },
            Rarity: "common"
        });
    });
    log(LogLevel.INFO, "[Ultimate Weapons Plugin] Weapons Granted!");
};
