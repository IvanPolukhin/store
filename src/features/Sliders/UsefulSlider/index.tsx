import Button from 'src/components/ui/Button'

import { sliderItems } from 'src/features/Sliders/UsefulSlider/helpers.ts'

import { useGenericSlider } from 'src/hooks/useGenericSlider'

const UsefulSlider = () => {
  const { activeIndex, containerRef, scrollToIndex } = useGenericSlider()

  return (
    <div className="relative flex items-center w-full mb-2">
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto touch-pan-x scroll-smooth no-scrollbar"
        style={{
          gap: '0.5rem',
          padding: '0.5rem',
          scrollBehavior: 'smooth',
          overscrollBehavior: 'contain',
        }}
      >
        {sliderItems.map((item, index) => (
          <Button
            key={item.id}
            onClick={() => scrollToIndex(index)}
            className={`relative flex-shrink-0 w-[150px] h-[150px] max-w-[150px] rounded-3xl transition-all duration-300 bg-card-gradient 
            ${index === activeIndex ? 'opacity-100 text-white' : 'opacity-30 text-white/70'}`}
          >
            <span className="absolute bottom-2 left-4 max-w-[80%] text-left font-unbounded font-normal text-[10px] tracking-[0.2em] uppercase">
              {item.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default UsefulSlider
