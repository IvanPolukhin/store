import { menuItems } from './helpers'

import Title from 'src/components/ui/Title'

import MenuCard from 'src/features/Menu/MenuCard'
import BlurredContainer from 'src/components/ui/BlurredContainer'

const Menu = () => {
  return (
    <div className="relative z-10">
      <div
        className="relative select-none"
        style={{ height: '25vh', minHeight: '150px' }}
      >
        <div className="absolute xs:left-[0vw] xs:top-[12vh] xs:w-[110px] sm:left-[0vw] sm:top-[10vh] sm:w-[130px] md:left-[0vw] md:top-[10vh] md:w-[140px] z-[1]">
          <img
            src="/assets/img/MenuPNG/BgTelegram.png"
            alt="Telegram"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
        <div className="absolute xs:right-[2vw] xs:top-[4vh] xs:w-[85px] sm:right-[6vw] sm:top-[4vh] sm:w-[105px] md:right-[13vw] md:top-[4vh] md:w-[90px] z-[1]">
          <img
            src="/assets/img/MenuPNG/BgSecondTelegram.png"
            alt="Telegram"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
        <div className="absolute xs:left-1/2 xs:top-[2vh] xs:w-[255px] xs:-translate-x-1/2 sm:left-1/2 sm:top-[0vh] sm:w-[320px] sm:-translate-x-1/2 md:left-1/2 md:top-[4vh] md:w-[280px] md:-translate-x-1/2 z-[2]">
          <img
            src="/assets/img/MenuPNG/BgGoldenInstagram.png"
            alt="Instagram"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
        <div className="absolute xs:right-[0vw] xs:top-[17vh] xs:w-[100px] sm:right-[5vw] sm:top-[16vh] sm:w-[120px] md:right-[12vw] md:top-[16vh] md:w-[120px] z-[1]">
          <img
            src="/assets/img/MenuPNG/BgMiniInstagram.png"
            alt="Instagram"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
      </div>
      <BlurredContainer>
        <Title title="Основное меню" subtitle="TRAFFIC MEDIA" />
        <div className="flex flex-col items-center justify-center gap-[1vh]">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              path={item.path}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </BlurredContainer>
    </div>
  )
}

export default Menu
