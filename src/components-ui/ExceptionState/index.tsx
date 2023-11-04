import { FileWarningIcon, XIcon } from 'lucide-react'

interface ComponentProps {
  title: string
  description: string
  type: 'error' | 'empty'
}

const ExceptionState = ({ title, description, type }: ComponentProps) => (
  <div className="p-10 bg-white rounded flex items-center content-center gap-8">
    <div className='flex items-center content-center rounded bg-slate-100/70 p-4 text-zinc-950 text-4xl'>
      {type === 'error' ? <XIcon size={32} /> : <FileWarningIcon size={32} />}
    </div>
    <div>
      <h2 className="text-xl text-zinc-950 font-bold mb-2">{title}</h2>
      <span className="text-zinc-900 text-lg">{description}</span>
    </div>
  </div>
)

export default ExceptionState
