let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sc yg bot gunakan_* 
*📮: SC NO ENC! Harap tidak dijual belikan*
_*Anu Banh DiYT*_
`.trim()
conn.send2ButtonImg(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), ext, '©AzzBotz', 'MENU', '.menu', 'OWNER', '.owner2', m)

}
handler.customPrefix = /^(sclain|.sclain|scriptlain|.scriptlain)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
