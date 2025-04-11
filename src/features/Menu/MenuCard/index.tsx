import useNavigation from 'src/hooks/useNavigation'

import { MenuCardProps } from 'src/features/Menu/MenuCard/types.ts'

import { RoutesPath } from 'src/types'

import { ForwardIcon } from 'src/icons'

const MenuCard = ({ title, path, iconSrc }: MenuCardProps) => {
  const { navigateTo } = useNavigation()

  return (
    <button
      onClick={() => navigateTo(path as RoutesPath)}
      className="w-full h-[10vh] relative flex items-center bg-gray-800 rounded-3xl overflow-hidden"
    >
      <div className="w-2/3 h-full bg-gradient-to-b from-[#424242] to-[#2d2d2d] flex items-center justify-start pl-[6vw]">
        <span
          className="uppercase text-white text-left"
          style={{
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '1.2',
            maxWidth: '50%',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            textAlign: 'left',
            display: 'block',
          }}
        >
          {title}
        </span>
      </div>

      <div className="w-1/3 h-full bg-white flex items-center justify-end pr-[3vw]">
        <div className="absolute top-2 right-2">
          <ForwardIcon />
        </div>
      </div>

      <div className="absolute left-2/3 transform -translate-x-1/2 flex items-center justify-center">
        <div className="xs:w-[111px] xs:h-[92px] sm:w-[135px] sm:h-[100px] md:w-[135px] md:h-[102px] w-[128px] h-[100px] overflow-hidden flex items-center justify-center">
          <img
            src={iconSrc}
            alt={title}
            draggable="false"
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>
    </button>
  )
}

export default MenuCard
