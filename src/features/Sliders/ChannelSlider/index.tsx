import Button from 'src/components/ui/Button'
import { channelSliderItems } from 'src/features/Sliders/ChannelSlider/helpers.ts'
import { useGenericSlider } from 'src/hooks/useGenericSlider'

const ChannelSlider = () => {
  const { activeIndex, containerRef, scrollToIndex } = useGenericSlider()

  return (
    <div className="relative flex items-center w-full mb-4">
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto touch-pan-x scroll-smooth no-scrollbar gap-2 p-2 overscroll-contain"
      >
        {channelSliderItems.map((item, index) => (
          <Button
            key={item.id}
            onClick={() => scrollToIndex(index)}
            className={`flex items-center justify-center relative flex-shrink-0 px-6 py-2 rounded-full transition-all duration-300 border 
            ${
              index === activeIndex
                ? 'bg-[#AE8A64] border-[#AE8A64]'
                : 'bg-transparent border-[#AE8A64]'
            }`}
          >
            <span className="text-[12px] font-medium uppercase">
              {item.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ChannelSlider
