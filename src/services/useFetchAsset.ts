import { RemoteAsset } from '../data'
import { gql, useQuery } from '../lib/hygraph-client'

const GET_ASSET = gql`
  query GET_ASSET($id: ID) {
    asset(where: {id: $id}) {
      url
      alt
      to
    }
  }
`

type FetchAsset = {
  id: string
}

const useFetchAsset = (variables?: FetchAsset) => {
  return useQuery<{ asset: RemoteAsset }>(GET_ASSET, {
    variables,
  })
}

export default useFetchAsset
