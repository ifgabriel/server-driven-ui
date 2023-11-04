import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

const HYGRAPH_ENDPOINT =
  'https://api-sa-east-1.hygraph.com/v2/clkcppifc4oz501ur9zro6khl/master'

const client = new ApolloClient({
  uri: HYGRAPH_ENDPOINT,
  cache: new InMemoryCache(),
})

export { client, gql, useQuery }

