const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923083852788";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_56_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkUrVGNMelRaRVl4VzRQWU1makNybFpIc3JSQjcvUm02NDUxdnM5bVBGMUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgzODUyNzg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OTBFRjYwOTVFQzkxNjVGQ0IzMDkzRjg5RjMxNTEyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc4ODM3OTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwODM4NTI3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc1QUVDRjFFQUVGMDdFMjlFMUNCNDNDQTY3ODRFNEMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzg4Mzc5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqQWZKRTZ2elJ1UzZYZFNlTlI2Tl93XCIsXG4gIFwicGhvbmVJZFwiOiBcImE4OGU2NjNhLTRhMWUtNDdiNC1iNTg5LTAzYTkxMjA0ZGNhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxODIsXG4gICAgICA4MSxcbiAgICAgIDE5LFxuICAgICAgMTMyLFxuICAgICAgMjUyLFxuICAgICAgMjM1LFxuICAgICAgMTIzLFxuICAgICAgMTQ4LFxuICAgICAgMTM0LFxuICAgICAgMTUyLFxuICAgICAgNzcsXG4gICAgICAyMDYsXG4gICAgICAyMDksXG4gICAgICAxMjUsXG4gICAgICAxOCxcbiAgICAgIDE5OCxcbiAgICAgIDczLFxuICAgICAgMjM5LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTM0LFxuICAgICAgMTMzLFxuICAgICAgMTQzLFxuICAgICAgMjUsXG4gICAgICAyMTAsXG4gICAgICA3NSxcbiAgICAgIDE4MCxcbiAgICAgIDEzMyxcbiAgICAgIDk0LFxuICAgICAgMTI5LFxuICAgICAgMTg5LFxuICAgICAgNjgsXG4gICAgICAxMDEsXG4gICAgICA1MixcbiAgICAgIDY4LFxuICAgICAgMzQsXG4gICAgICAyNDEsXG4gICAgICAyMjEsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEJXOVJSNkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4Mzg1Mjc4ODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yXCIsXG4gICAgXCJsaWRcIjogXCIyNDMzNTcwNDE4MjgxNToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJak0wSTRERUltbms3TUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR1SkJSM3dSL09EazJLVGxOdzhRN1Mvdko0NWtQYjBJZm9IeTZjWFZRbTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwici9lV3dFaEFZcmVzTGxBdEFrZEdJS29iSThoVHg5a3U3N2ZLWXVjUGQ5NDVObXpXc1BuczdGZ2JDZ00ybThoYUtTYlI4dld0ckw0VndrVVdtM2RSQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSU9iVWxJdFI0WlhVbHovV2Z0cmpoQXNDNEFJbFBDNnRHeFZEY0dxTjRyN1FHYUd1UEpVSzNsZHpZMElVRHZYNDFXcUdxQWdrVTdPekt2MTZNNjNzQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgzODUyNzg4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4ODM3ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDZWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNlai5qc29uIjogIntcImtleURhdGFcIjpcIkxpd0Yrc0M5ZFhOYTRvOFBSTmUwRCtzZ0dNeVVBTk9tLzZ3VGsrcFQ4cnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM1OTg2OTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc4ODAwMzU0NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
