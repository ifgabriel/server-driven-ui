import { RemoteProduct } from '../data'
import { gql, useQuery } from '../lib/hygraph-client'

const GET_PRODUCT_QUERY = gql`
  query GET_PRODUCT_BY_ID($slug: String) {
    product(where: { slug: $slug }) {
      id
      name
      price
      slug
      description
      brand {
        id
        name
      }
      images {
        id
        url
      }
    }
  }
`

const useFetchProduct = (slug: RemoteProduct['slug']) =>
  useQuery<{ product: RemoteProduct }>(GET_PRODUCT_QUERY, { variables: { slug } })

export default useFetchProduct
