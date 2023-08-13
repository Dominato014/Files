const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

module.exports = function fuckOff(controller) {
    const myAss = controller.resolveContract('82f55837-e26c-41bf-bc6e-fa97b7981fbc');
    
    for (const deez of myAss.Data.Objectives){
        if(deez.Id == "369dd2f7-acfa-4c51-b03d-dbbb4bb863ac"){
            deez.Category = 'secondary';
            deez.BriefingName = `$formatstring {$loc UI_DIALOG_OPTIONAL} {$loc UI_CONTRACT_SKUNK_OBJ_CLUES_TITLE}`
            deez.HUDTemplate.display = `$formatstring {$loc UI_DIALOG_OPTIONAL} {$loc UI_CONTRACT_SKUNK_OBJ_CLUES_TITLE}`
            controller.addMission(myAss);
            log(LogLevel.INFO, "[OPTIONAL] SACK Koeman with a SACK")
        }
    }
}