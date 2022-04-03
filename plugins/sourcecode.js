let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
YANG NGERUSAK SC GUA KONTOL LU
ENAK AJA GK MAUUUU
`.trim(), '© AhmadBOT', 'Makasih', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
