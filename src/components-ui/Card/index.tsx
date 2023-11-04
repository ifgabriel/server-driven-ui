import { RemoteProduct } from '../../data'
import { formatCurrency } from '../../utils'

interface ComponentProps extends RemoteProduct {
  onPress: ({ slug }: Record<string, string>) => void
}

const Card = ({ images, slug, name, brand, price, onPress }: ComponentProps) => (
  <button
    onClick={() => onPress?.({ slug })}
    className="m-w-[224px] text-left gap-2"
  >
    <div className="p-4 bg-white rounded-3xl overflow-hidden">
      <img src={images[0].url} alt={name} className='hover:scale-110 duration-300' />
    </div>
    <div className="flex flex-col justify-between py-4 px-2 min-h-[164px]">
      <div>
        <p className="text-zinc-950 text-lg font-medium ">{name}</p>
        <p className="text-zinc-700">{brand.name}</p>
      </div>
      <div>
        <p className="text-zinc-950 text-xl ">{formatCurrency(price)}</p>
      </div>
    </div>
  </button>
)

export default Card
