let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group �AzzBotz 📮: https://chat.whatsapp.com/G3ydGzHeZ825IU4RjLuToY*
`.trim()
conn.sendButton(m.chat, str, `©AzzBotz`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['azz4']
handler.tags = ['info']
handler.command = /^azz4$/i

module.exports = handler
