let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ
*Link Group:*
Link 1 { *BOT WANGSAFF OFC🤖* }
 ~*```https://chat.whatsapp.com/JqzZbqyCvBa6tXzLH1P3hZ*```~ 

Link 2 { *FARHAN BOT OFC🤖* }
 *~*https://chat.whatsapp.com/CU0NIekiHQzCm5H2qUP1Lx~** 



_YO BISA YO RAMEIN✍🏻_

 *@copyright-2022*


✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Haori Groups')).buffer(), ext, '🎮 Riel𝚋𝚘𝚝𝚣 𝙸𝚜 𝚃𝚑𝚎 𝙱𝚎𝚜𝚝', 'Siap Riel', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot1']
handler.tags = ['main']
handler.command = /^(gcbot1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
