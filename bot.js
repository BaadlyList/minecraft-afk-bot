const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Gamerboy21rip.aternos.me',
    port: 53905,
    username: 'AFK_Bot',
    auth: 'offline',
    version: false
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })

  bot.on('end', () => {
    console.log('Disconnected... reconnecting')
    setTimeout(createBot, 5000)
  })
}

createBot()
