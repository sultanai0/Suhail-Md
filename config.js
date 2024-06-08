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
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_12_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqeGlFQUozcnoyalpJcDVLNFRJNnNoSDBOYTg2RUFmRVNScjBoR2xCSzB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA4Mzg1Mjc4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkE0MjMzRDk0N0QwQTM4OUVFMDU0OEJGNTY3QUJCOENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODg4MzYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgzODUyNzg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQ0QxNzU0MEI4RTk2RjgwQjQ0MUI3QjQwMTM2MzFENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc4ODgzNjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLVlKWWpQQUZTRnllZERkTy0zcjBmZ1wiLFxuICBcInBob25lSWRcIjogXCIxMzQ0MWMzNi1lNDc3LTQ1ZGEtYjNiOS0zMDBkYzUyOTAwNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxMixcbiAgICAgIDExNyxcbiAgICAgIDkzLFxuICAgICAgMTQ1LFxuICAgICAgMTE1LFxuICAgICAgNjQsXG4gICAgICAxMTIsXG4gICAgICAxNTksXG4gICAgICAyNDUsXG4gICAgICAyNSxcbiAgICAgIDIxMCxcbiAgICAgIDI0OSxcbiAgICAgIDE3NSxcbiAgICAgIDUyLFxuICAgICAgMTAyLFxuICAgICAgMzUsXG4gICAgICA3MyxcbiAgICAgIDE3MSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjIwLFxuICAgICAgMTM5LFxuICAgICAgMjI1LFxuICAgICAgMTk3LFxuICAgICAgMTM5LFxuICAgICAgMTYxLFxuICAgICAgMTI0LFxuICAgICAgMTY4LFxuICAgICAgOTksXG4gICAgICAyMTUsXG4gICAgICA4OCxcbiAgICAgIDEwLFxuICAgICAgMTk0LFxuICAgICAgMjUzLFxuICAgICAgMTU4LFxuICAgICAgMTIzLFxuICAgICAgMTgxLFxuICAgICAgMSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpIWDFHM1lCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODM4NTI3ODg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNclwiLFxuICAgIFwibGlkXCI6IFwiMjQzMzU3MDQxODI4MTU6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5NMEk0REVPTEtrN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEdUpCUjN3Ui9PRGsyS1RsTnc4UTdTL3ZKNDVrUGIwSWZvSHk2Y1hWUW0wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFKcEk2cWZQZkJwNWd0Y201MFRjeW1jTHk5RW1PNHJtYmlJdlRrbWFKcGdpV3JrMkJZUVpTUnI2QUcyUEJoZlhUdlJtRFRwWGFHSFdOcERCT3FlL0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNrazgwV0VIcGtWRUNzS3h0VjkzNXF5cXNDcXZVK0Y1UDJMeDFldWFNUFNkOTRSTDF3cE5xMko2ekg5K0dhQXVWbldaWEd0eXk3WlZOUEdRSFQwYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA4Mzg1Mjc4ODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODg4MzU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2VuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJReHZDbDlCTjNNQS9yRVVhMXUxaGNLeEZ6ZEdwQklEOU5TdjdOclBFWEhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNTk4Njk1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODg4MzYwODgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x SULTAN",


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
