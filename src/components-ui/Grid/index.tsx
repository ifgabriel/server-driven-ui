import { ReactElement, cloneElement } from 'react'

import { useSearchParams } from 'react-router-dom'
import { useFetchProducts } from '../../services'
import { handleRenderState } from '../../utils'
import Breadcrumb from '../Breadcrumb'

interface ComponentProps {
  children: ReactElement[]
}

const Grid = ({ children, ...props }: ComponentProps) => {
  const [searchParams] = useSearchParams()

  const { data, called, loading } = useFetchProducts({
    name: searchParams.get('name') ?? '',
    gender: searchParams.get('gender') ?? '',
    subCategory: searchParams.get('subCategory') ?? '',
  })


  const components = children.map((child) => child.props.children[0])
  const renders = components.reduce(
    (acc, current) => ({ ...acc, [current.props.case]: current }),
    {},
  )

  return (
    <section className="container mx-auto px-2">
      <title>SDUI</title>
      <Breadcrumb />
      {
        {
          ...renders,
          loading: Array.from({ length: renders.loading.props.length }).map(
            (_, index) =>
              cloneElement(renders.loading, { key: `loading-card-${index}` }),
          ),
          view:
            data && (
              <section
                className="grid-product"
                {...props}
              >
                {data?.products.map((source) =>
                  cloneElement(renders.view, { ...source, key: source.id }),
                )}
              </section>
            ),
        }[handleRenderState(called, loading, data, !data?.products?.length)]
      }
    </section>
  )
}

export default Grid
