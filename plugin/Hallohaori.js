let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Hallohaori.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Kak Riel Kangen Nih* \n *Gimana Kabar Nya? >~<*', 'status@broadcast')
}

handler.customPrefix = /^(Hallo Riel|Hallo Riel|hi riel|Hi Riel)$/i
handler.command = new RegExp

module.exports = handler
