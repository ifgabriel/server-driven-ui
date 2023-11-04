export interface RemoteHeader {
  genders: {
    name: string
    slug: string
    categories?: {
      id: string
      name: string
      subCategories?: {
        name: string
        slug: string
      }[]
    }[]
  }[]
}
