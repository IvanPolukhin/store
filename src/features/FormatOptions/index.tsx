import { Checkbox } from '@mui/material'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { FormatOptionsProps } from 'src/features/FormatOptions/types.ts'
import useFormatOptions from 'src/features/FormatOptions/useFormatOptions.ts'

import { ComponentType } from 'src/types'

import Button from 'src/components/ui/Button'

const FormatOptions = ({
  formats,
  selectedFormat,
  onSelect,
  componentType,
  selectedPrice,
}: FormatOptionsProps) => {
  const {
    selected,
    handleSelect,
    handleToggleSelection,
    safeComponentType,
    displayPrice,
  } = useFormatOptions(selectedFormat, onSelect, componentType, selectedPrice)

  return (
    <div className="mt-12">
      <h3 className="text-[14px] mb-2 uppercase font-unbounded">
        {safeComponentType === ComponentType.TELEGRAM_COMPONENT
          ? 'Формат'
          : 'Дополнительные'}
      </h3>

      {safeComponentType === ComponentType.TELEGRAM_COMPONENT ? (
        <div className="flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
          <div className="rounded-2xl shadow-md backdrop-blur-md bg-opacity-30 transition-all duration-300">
            <Menu as="div" className="mt-1 relative">
              <MenuButton className="inline-flex justify-between items-center w-[190px] px-4 py-3 text-lg font-medium text-[#AE8A64] bg-[#222223] rounded-md hover:bg-[#333334] transition-colors">
                {selected.length
                  ? selected.map(f => f.name).join(', ')
                  : 'Выберите формат'}
                <ChevronDownIcon className="ml-2 h-5 w-5 text-[#AE8A64]" />
              </MenuButton>
              <MenuItems className="absolute z-10 mt-1 w-[190px] origin-top-right rounded-md bg-[#222223] shadow-lg ring-1 ring-[#AE8A64] ring-opacity-30 focus:outline-none">
                <div className="py-1">
                  {formats.map(format => (
                    <MenuItem key={format.name}>
                      {({ close }) => (
                        <Button
                          onClick={() => {
                            handleSelect(format)
                            close()
                          }}
                          className={`block w-full px-4 py-2 text-sm text-left ${
                            selected.some(f => f.name === format.name)
                              ? 'bg-[#333334] text-[#AE8A64]'
                              : 'text-[#AE8A64] hover:bg-[#333334] hover:text-[#AE8A64]'
                          } transition-colors`}
                        >
                          {format.name}
                        </Button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="text-right">
            <span className="block font-semibold text-[32px] md:text-[40px]">
              {displayPrice.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4">
            {formats.map(format => (
              <div key={format.name} className="flex items-center">
                <Checkbox
                  checked={selected.some(f => f.name === format.name)}
                  onChange={() => handleToggleSelection(format)}
                  sx={{
                    color: '#AE8A64',
                    '&.Mui-checked': {
                      color: '#AE8A64',
                    },
                  }}
                />
                <span className="text-[#AE8A64] text-lg">{format.name}</span>
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <span className="block font-semibold text-[40px] text-white">
              {displayPrice.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormatOptions
