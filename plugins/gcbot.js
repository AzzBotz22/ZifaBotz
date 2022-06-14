let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: '🎐› group azzbotz', description: "join kuy", rowId:".azz"},
        {title: '🎀› group azzbotz', description: "join kuy", rowId:".azz2"},
        {title: '🧸› group azzbotz', description: "join kuy", rowId:".azz3"},
        {title: '🔮› group azzbotz', description: "join kuy", rowId:".azz4"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['gcbot']
module.exports = handler
