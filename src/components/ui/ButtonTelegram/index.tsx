import { TelegramIcon } from 'src/icons'

const ButtonTelegram = () => {
  return (
    <a
      href="https://t.me/tgpodbor_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center max-w-[220px] h-[45px] bg-[#039BE5] text-white rounded-full px-4 py-2 text-sm hover:bg-blue-600 transition-colors ml-2"
    >
      <div className="flex-grow text-right pb-1">Написать менеджеру</div>
      <div className="mr-2 ml-2">
        <TelegramIcon />
      </div>
    </a>
  )
}

export default ButtonTelegram
