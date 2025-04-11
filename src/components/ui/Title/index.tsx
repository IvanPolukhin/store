import { TitleProps } from 'src/components/ui/Title/types.ts'

const Title = ({ title, subtitle, className = '' }: TitleProps) => {
  return (
    <div className={`text-center mb-[3vh] ${className}`}>
      <h1 className="text-[calc(1rem+1vw)] font-bold uppercase">{title}</h1>
      {subtitle && (
        <p className="text-[calc(0.6rem+0.2vw)] bg-gradient-to-r from-[#8B7B5A] to-[#B28B65] bg-clip-text text-transparent">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
