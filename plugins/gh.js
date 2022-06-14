let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪GITHUB⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_GITHUB OWNER_*
║│➸  *Tidack Punya Github. Github Hanyalah Alat*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪©AzzBotz⳹ ❋ཻུ۪۪⸙ ᴿ᭄ AZZ ×፝֟͜×
`.trim()
conn.sendButton(m.chat, str, `© AzzBotz`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^gh$/i

module.exports = handler
