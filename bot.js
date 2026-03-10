const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Gamerboy21rip.aternos.me',
  port: 53905,
  username: 'Technoblade'
})

bot.on('spawn', () => {
  console.log('Bot joined server')
})
