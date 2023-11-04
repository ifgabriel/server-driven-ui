import { RemoteHeader } from '@/data'
import { gql, useQuery } from '../lib/hygraph-client'

const GET_HEADER_QUERY = gql`
  query {
    genders {
      name
      slug
      categories {
        ... on Category {
          name
          subCategories {
            name
            slug
          }
        }
      }
    }
  }
`

const useFetchHeader = () => useQuery<RemoteHeader>(GET_HEADER_QUERY)

export default useFetchHeader
