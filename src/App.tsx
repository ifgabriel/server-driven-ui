import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './components-ui'
import { client } from './lib/hygraph-client'
import { Main, ProductDetail } from './pages'

const Title = () => {
  const { pathname } = useLocation()

  const productSlug = pathname
    .substring(pathname.lastIndexOf('/') + 1)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, match => match.toUpperCase());

  return (
    <title>Ducks Sport {productSlug && `| ${productSlug}`}</title>
  )
}

const App = () => (
  <ApolloProvider client={client}>
    <main className="bg-slate-100/70 font-sans text-gray-400 gap-20 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <BrowserRouter>
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:slug" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  </ApolloProvider>
)

export default App
