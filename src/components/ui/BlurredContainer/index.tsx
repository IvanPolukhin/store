import { BlurredContainerProps } from 'src/components/ui/BlurredContainer/types.ts'

const BlurredContainer = ({
  children,
  className = '',
}: BlurredContainerProps) => {
  return (
    <div
      className={`
        relative z-30 mt-[-2vh] rounded-t-[14vmin] p-[3vh_5%] min-h-[77vh]
        backdrop-blur-[15px] bg-[rgba(20,20,20,0.4)]
        shadow-[0_4px_30px_rgba(0,0,0,0.2)]
        border border-[rgba(255,255,255,0.05)]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default BlurredContainer
