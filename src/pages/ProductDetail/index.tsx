import { ChevronLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ExceptionState, Skeleton } from '../../components-ui'
import useFetchProduct from '../../services/useFetchProduct'
import { formatCurrency, handleRenderState } from '../../utils'

const ProductDetail = () => {
  const { slug } = useParams()
  const { data, loading, called } = useFetchProduct(slug!)
  const [currentImage, setCurrentImage] = useState(data?.product.images?.[0].url)
  const navigate = useNavigate()

  return (
    <section className="container mx-auto">
      {
        {
          view: !!data && (
            <section className="px-4">
              <button onClick={() => navigate(-1)} className="mb-8 flex gap-1 text-zinc-950 hover:text-orange-500">
                <ChevronLeftIcon />
                Voltar
              </button>
              <div className="flex gap-8 flex-wrap">
                <div className="flex sm:flex-row md:flex-col gap-5 overflow-auto">
                  {data.product.images?.map((image, index) => (
                    <img
                      alt={`imagem detalhada de ${data.product.name}`}
                      onClick={() => setCurrentImage(image.url)}
                      key={`image-detail-product-${index}`}
                      src={image.url}
                      className="rounded w-28 h-28 object-cover bg-white p-3"
                    />
                  ))}
                </div>
                <div>
                  <img
                    alt={data.product.name}
                    src={currentImage ?? data.product.images?.[0].url}
                    className="max-w-auto sm:max-w-md rounded-md object-contain bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-950 text-4xl font-medium">
                    {data.product.name}
                  </span>
                  <span className="text-zinc-500 text-3xl font-medium uppercase">
                    {data.product.brand.name}
                  </span>
                  <div className="mt-8">
                    <p className="text-3xl text-zinc-950">
                      {formatCurrency(data.product.price)}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-100 border-0" />
              <div>
                <div>
                  <h3 className="text-zinc-950 text-xl font-bold mb-4">Descrição</h3>
                  <span className="text-zinc-950">
                    {data.product.description}
                  </span>
                </div>
              </div>
            </section>
          ),
          empty: '',
          loading: (
            <section className="pt-14">
              <div className="flex gap-8 flex-wrap">
                <div className="flex sm:flex-row md:flex-col gap-5 overflow-auto">
                  <Skeleton width="74px" height="74px" />
                  <Skeleton width="74px" height="74px" />
                  <Skeleton width="74px" height="74px" />
                  <Skeleton width="74px" height="74px" />
                  <Skeleton width="74px" height="74px" />
                </div>
                <Skeleton width="448px" height="448px" />
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-950 text-6xl font-medium">
                    <Skeleton width="500px" height="56px" />
                  </span>
                  <span className="text-zinc-500 text-3xl font-medium uppercase">
                    <Skeleton width="220px" height="32px" />
                  </span>
                  <div className="mt-8">
                    <Skeleton width="220px" height="50px" />
                  </div>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-100 border-0" />
              <div>
                <Skeleton width="100%" height="350px" />
              </div>
            </section>
          ),
          error: (
            <ExceptionState
              title="Opps! Infelizmente tivemos um problema"
              description="Tente novamente mais tarde"
              type="error"
            />
          ),
        }[handleRenderState(called, loading, data)]
      }
    </section>
  )
}

export default ProductDetail
