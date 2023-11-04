type BadgeTypes = 'NEW' | 'RECOMMENDED' | 'EMPHASIS'

interface ComponentProps {
    type: BadgeTypes
}

const texts: Record<BadgeTypes, string> = {
    NEW: 'Novo',
    RECOMMENDED: 'Recomendado',
    EMPHASIS: 'Destaque'
}

const styles: Record<BadgeTypes, string> = {
    NEW: 'bg-emerald-50 text-emerald-950 text-sm font-medium mr-2 px-2.5 py-0.5 rounded',
    RECOMMENDED: 'bg-purple-100 text-purple-950 text-sm font-medium mr-2 px-2.5 py-0.5 rounded',
    EMPHASIS: 'bg-indigo-100 text-indigo-950 text-sm font-medium mr-2 px-2.5 py-0.5 rounded'
}

const Badge = ({ type }: ComponentProps) => (
    <span className={`max-w-fit ${styles[type]}`}>{texts[type]}</span>
)

export default Badge