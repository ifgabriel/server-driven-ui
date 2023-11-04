import { Link } from 'react-router-dom'
import { RemoteAsset } from '../../data'
import { useFetchAsset } from '../../services'
import { handleRenderState } from '../../utils'
import Skeleton from '../Skeleton'

interface BannerProps {
  imageId: string
}

const Banner = ({ imageId }: BannerProps) => {
  const { data, called, loading } = useFetchAsset({ id: imageId })

  const Image = (image: RemoteAsset) => !!image && (
    <img
      src={image.url}
      alt={image.alt}
      height="300px"
      className="object-cover w-full h-auto my-24 rounded"
    />
  )

  return (
    <>
      {
        {
          view: !!data && (
            <>
              {data.asset?.to ? (
                <Link to={data.asset.to}>
                  <Image url={data.asset.url} alt={data.asset.alt} />
                </Link>
              ) : (
                <Image url={data.asset.url} alt={data.asset.alt} />
              )}
            </>
          ),
          loading: <Skeleton width="auto" height="300px" />,
          error: '',
          empty: '',
        }[handleRenderState(called, loading, data)]
      }
    </>
  )
}

export default Banner
