export interface RemoteProduct {
  id: string
  slug: string
  name: string
  brand: {
    id: string,
    name: string,
  },
  gender: string,
  price: number,
  description: string,
  images: {
    id: string,
    url: string,
  }[]
}