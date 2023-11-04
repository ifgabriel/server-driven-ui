import { HTMLAttributes } from 'react'
interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  width: string
  height: string
}

const Skeleton = ({ width, height, ...props }: ComponentProps) => (
  <div {...props} className="animate-pulse">
    <div className="bg-slate-200 rounded" style={{ height, width }} />
    <span className="sr-only">Carregando</span>
  </div>
)

export default Skeleton
