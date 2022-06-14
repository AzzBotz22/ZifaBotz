let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : ᴿ᭄ AZZ ×፝֟͜× 
║│➸ *Umur* : 18+
║│➸ *Kelas* :  1 Esdeh
║│➸ *Status* : Anuu
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_SUMATERA UTARA =}} MEDAN_*
║│➸ *ASAL KOTA* : *_MEDAN_*
║│➸ *ALAMAT RUMAH* : *DISINI kalau disana ya rumah lu*
║│➸ *Gmail* : -
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih manteman_

`.trim()
conn.send3ButtonImg(m.chat, await (await fetch(fla + 'ᴿ᭄ AZZ ×፝֟͜×')).buffer(), ext, '©AzzBotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
