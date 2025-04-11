import { cn } from 'src/utils'

import { ButtonProps } from 'src/components/ui/Button/types.ts'

const Button = ({ children, className, icon, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cn(className)}>
      {icon && (
        <span className="w-5 h-5 outline-none select-none touch-none">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
