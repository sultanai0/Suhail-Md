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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWFUL3JrbTA0UERVblJ0WUFyUEhyNEh4YU1YZVMzL2xiY1ZLV0pEKzRudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwODM4NTI3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2QUQxODk3N0I2NDE1RDI1REI4RTVBNDI4MkQzQUEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzg4NzA2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA4Mzg1Mjc4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkM3MkIyNUI4QkY3QzdEMDZBQUM3MkE1QjM0NDAxMDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODg3MDY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNBbndSQldGU1dHNmpKdHhMLVRFMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzM0NWEwZTktYTdlNi00OTlmLWE2MzYtNDUwNTUwMmMzZGJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDkzLFxuICAgICAgMTU4LFxuICAgICAgMTE1LFxuICAgICAgOTcsXG4gICAgICA5MyxcbiAgICAgIDg1LFxuICAgICAgMTExLFxuICAgICAgNjMsXG4gICAgICAxNzYsXG4gICAgICAyMzEsXG4gICAgICAxMjksXG4gICAgICAyNDAsXG4gICAgICAxNzcsXG4gICAgICAyNDIsXG4gICAgICAxNTgsXG4gICAgICAxNyxcbiAgICAgIDExOCxcbiAgICAgIDI0NyxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE2NyxcbiAgICAgIDQ0LFxuICAgICAgMTE4LFxuICAgICAgMjQwLFxuICAgICAgNDQsXG4gICAgICA2MixcbiAgICAgIDcyLFxuICAgICAgMTc5LFxuICAgICAgOTEsXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAxNzIsXG4gICAgICAxNDksXG4gICAgICAxMjUsXG4gICAgICA2NCxcbiAgICAgIDIxLFxuICAgICAgMTgwLFxuICAgICAgMTgsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNERGTTdFTE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4Mzg1Mjc4ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yXCIsXG4gICAgXCJsaWRcIjogXCIyNDMzNTcwNDE4MjgxNToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJak0wSTRERU0vQWs3TUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR1SkJSM3dSL09EazJLVGxOdzhRN1Mvdko0NWtQYjBJZm9IeTZjWFZRbTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkFDdzloVlo1M3J5ZXpNRkgrT0F1QlhVcmpSQmRpc3l3MEpkbjZXZ0FUa3drcGl6RDBTbml6a2RESGVINWF0U2tnV01sZkVGRnI5KzBXWjJ1MzZYQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXVZSmw2dnVOQ2NuMGRKQVk2NTJ5OFVLeVMrV1NQaTgzVjczMVZka2drajl1OGVnNythS21FczMxWS8rUEVxNnJPdzUzT3FVTm14dmZ0S3pKdy9qaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgzODUyNzg4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4ODcwNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDZWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNlai5qc29uIjogIntcImtleURhdGFcIjpcIkxpd0Yrc0M5ZFhOYTRvOFBSTmUwRCtzZ0dNeVVBTk9tLzZ3VGsrcFQ4cnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM1OTg2OTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
