const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const ngrok = require('ngrok')
const TelegramAPI = require('node-telegram-bot-api')
const cors = require('cors')
const chokidar = require('chokidar')

dotenv.config()
const token = process.env.TELEGRAM_BOT_TOKEN
const isDev = process.env.NODE_ENV === 'development'

if (!token) {
  console.error('Telegram bot token is missing!')
  process.exit(1)
}

const bot = new TelegramAPI(token, { polling: true })
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const startServer = async () => {
  try {
    let webAppUrl = isDev ? 'http://localhost:3000' : await ngrok.connect(3000)
    let reconnectTimeout = null

    console.log(`WebApp URL: ${webAppUrl}`)

    // Функция обновления WebApp URL
    const updateWebAppUrl = async newUrl => {
      webAppUrl = newUrl
      clearTimeout(reconnectTimeout)
      reconnectTimeout = setTimeout(async () => {
        await bot.setMyCommands([
          {
            command: '/start',
            description: 'Start the bot and open web app',
          },
        ])
      }, 1000)
    }

    const watcher = chokidar.watch(path.join(__dirname, 'dist'), {
      ignored: /(^|[\/\\])\../,
      persistent: true,
    })

    watcher.on('change', path => {
      console.log(`File ${path} has been changed`)
      if (isDev) {
        updateWebAppUrl('http://localhost:3000')
      }
    })

    await bot.setMyCommands([
      {
        command: '/start',
        description: 'Start the bot and open web app',
      },
    ])

    const server = app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })

    bot.on('message', async message => {
      const text = message.text
      const chatId = message.chat.id

      if (text === '/start') {
        await bot.sendMessage(
          chatId,
          'Привет! Хотите открыть WebApp? Нажмите кнопку ниже для открытия.',
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Открыть Web App',
                    web_app: {
                      url: webAppUrl,
                    },
                  },
                ],
              ],
            },
          },
        )
      }
    })

    return { server, webAppUrl }
  } catch (error) {
    console.error('Ошибка при запуске сервера:', error)
    process.exit(1)
  }
}

startServer().catch(console.error)
