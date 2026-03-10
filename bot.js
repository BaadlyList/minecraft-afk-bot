const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Gamerboy21rip.aternos.me',
    port: 53905,
    username: 'Technoblade',
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })

  bot.on('end', () => {
    console.log('Disconnected')
  })
}

createBot()
