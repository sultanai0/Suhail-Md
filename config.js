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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSW12QVR4RFFzYVB6N3V2RFVlellmQ3phWmI4bHc2N1BFSmVnOUtuMU1LWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX1UyYktGeFBTbXFxWkljTzRwcHBsUVwiLFxuICBcInBob25lSWRcIjogXCJiNTBhZDkzMS1kOTM3LTRkNzItOGFkMy1jY2Q2OTdmZTM2Y2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTU4LFxuICAgICAgMTg5LFxuICAgICAgMjIwLFxuICAgICAgNDEsXG4gICAgICAyNDIsXG4gICAgICAxNTcsXG4gICAgICAzMixcbiAgICAgIDIyNyxcbiAgICAgIDIyNyxcbiAgICAgIDEzOCxcbiAgICAgIDIwNixcbiAgICAgIDQ0LFxuICAgICAgMjAxLFxuICAgICAgMjE4LFxuICAgICAgMTQ5LFxuICAgICAgMjI2LFxuICAgICAgMTE4LFxuICAgICAgNzUsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDE2LFxuICAgICAgMTA1LFxuICAgICAgMjEyLFxuICAgICAgMjU1LFxuICAgICAgMTEyLFxuICAgICAgMTAwLFxuICAgICAgMTQ3LFxuICAgICAgMjQwLFxuICAgICAgMTcyLFxuICAgICAgMjksXG4gICAgICAxNzAsXG4gICAgICA0MSxcbiAgICAgIDM4LFxuICAgICAgMTA0LFxuICAgICAgNzUsXG4gICAgICAxMTksXG4gICAgICA2NCxcbiAgICAgIDUwLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0wzVjk0SENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4Mzg1Mjc4ODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yXCIsXG4gICAgXCJsaWRcIjogXCIyNDMzNTcwNDE4MjgxNToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJck0wSTRERU9ub3RyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR1SkJSM3dSL09EazJLVGxOdzhRN1Mvdko0NWtQYjBJZm9IeTZjWFZRbTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1hpL3FQcUE2eFZ5UHVMQzJ4SWxtQVMyazhZZTB2SjA4R1c2WmJDVkpUSzJqdjc4MzhjdlR0WXovOFZyOE9ENXI1SHFwMksvdUZGQ01udVhrUndFQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTG8vUThZZkozT0dYN0xqR0ViS2RjR25xd2l6eERvOE5SZzYwY2ZUaXpOdlBnWTMvMHFONjArRHkvRmNLVGxQeFNXUTBGNkN4dmFnSFpNdCszbUtJRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgzODUyNzg4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0NjU2NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDZWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNlai5qc29uIjogIntcImtleURhdGFcIjpcIkxpd0Yrc0M5ZFhOYTRvOFBSTmUwRCtzZ0dNeVVBTk9tLzZ3VGsrcFQ4cnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM1OTg2OTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
