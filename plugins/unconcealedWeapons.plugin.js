"use strict";
exports.__esModule = true;
var loggingInterop_1 = require("@peacockproject/core/loggingInterop");
module.exports = function myPlugin(controller) {
    (0, loggingInterop_1.log)(loggingInterop_1.LogLevel.INFO, "[Unconcealed Weapons] Am I evil?");
    var unlockables = controller.configManager.configs.allunlockables;
    for (var i = 0; i < unlockables.length; i++) {
        var item = unlockables[i];
        if (item.Type === "weapon" && item.Properties.LoadoutSlot === "carriedweapon" && item.Subtype != "melee") {
            item.Properties.LoadoutSlot = "concealedweapon"; //turns out "carriedweapon" has no slots on 47's loadout anyway, the briefcase and agency pickups just include everything. i don't even have to clone the value!
        }
    }
};