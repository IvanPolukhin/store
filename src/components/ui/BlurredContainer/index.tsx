import { BlurredContainerProps } from 'src/components/ui/BlurredContainer/types.ts'

const BlurredContainer = ({
  children,
  className = '',
}: BlurredContainerProps) => {
  return (
    <div
      className={`relative z-30 mt-[-2vh] rounded-t-[14vmin] p-[3vh_5%] min-h-[77vh] ${className}`}
      style={{
        backdropFilter: 'blur(15px)',
        backgroundColor: 'rgba(20, 20, 20, 0.4)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  )
}

export default BlurredContainer
