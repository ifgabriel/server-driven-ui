import { RemoteProduct } from '../data'
import { gql, useQuery } from '../lib/hygraph-client'

const GET_PRODUCTS_QUERY = gql`
  query GET_PRODUCTS($name: String, $gender: String, $subCategory: String) {
    products(
      where: {
        name_contains: $name
        gender: { name_contains: $gender }
        subCategory: { name_contains: $subCategory }
      }
    ) {
      id
      name
      slug
      brand {
        id
        name
      }
      price
      gender {
        id
        name
      }
      description
      images {
        id
        url
      }
    }
  }
`

type FetchProducts = {
  name?: string
  gender?: string
  subCategory?: string
}

const defaultFilter: FetchProducts = {
  name: '',
  gender: '',
  subCategory: '',
}

const useFetchProducts = (params?: FetchProducts) => {
  const variables = { ...defaultFilter, ...params }

  return useQuery<{ products: RemoteProduct[] }>(GET_PRODUCTS_QUERY, {
    variables,
  })
}

export default useFetchProducts
