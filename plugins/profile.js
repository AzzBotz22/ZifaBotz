let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
  let _pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppe = await conn.getProfilePicture(who)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `

✧──────────[ *PROFILE* ]──────────✧
📇 • *Name:* ${username} ${registered ? '(' + name + ') ': ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • *Link:* https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Age:* ' + age : ''}
${about ? '🗒️ • *About:* ' + about : ''}

🌟 • *Premium:* ${premium ? "🙋" :"🙅"}
📑 • *Registered:* ${registered ? '🙋': '🙅'}
⛔ • *Banned:* 🙅

`.trim()
    let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, await conn.getProfilePicture(m.sender),str, '©️zifabotz', 'MENU', '.menu', 'DONASI', '.donasi', m, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|pp$/i
module.exports = handler
