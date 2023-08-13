/**
 * credits @Atampy26 for guiding and shit
 * code stolen form Moar Items plugin - by Anthony Fuller
 * @licence https://www.mozilla.org/en-US/MPL/2.0
 **/
const randomUUID=require("crypto").randomUUID,{log:log,LogLevel:LogLevel}=require("@peacockproject/core/loggingInterop"),items=[{id:"FIREARMS_HERO_TOOL_MICRO_PROXIMITY_TASER",type:"gear",subtype:"tool",loadoutslot:"gear",repoid:"67559fbc-0877-4b82-9b05-6fe0cf6d7b1c"}];module.exports=function(e){const o=e.configManager.configs.allunlockables;items.forEach((e=>{o.push({Id:e.id,Guid:randomUUID(),Type:e.type,Subtype:e.subtype,RMTPrice:-1,GamePrice:-1,IsPurchasable:!1,IsPublished:!0,IsDroppable:!1,Capabilities:[],Qualities:{},Properties:{Gameplay:{},Quality:14,Rarity:"common",LoadoutSlot:e.loadoutslot,RepositoryId:e.repoid,RepositoryAssets:[e.repoid,e.repoid,e.repoid,e.repoid,e.repoid]},Rarity:"common"})})),log(LogLevel.INFO,"[AWESOME] Microtaseer: Loaded")};