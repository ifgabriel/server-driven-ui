import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import { useSearchParams } from 'react-router-dom'
import BeagleService from '../../beagle/beagle-service'
import Navigation from '../Navigation'

const Main = () => {
  const [searchParams] = useSearchParams()

  if (!searchParams.toString())
    return (
      <BeagleProvider value={BeagleService}>
        <BeagleRemoteView route="/home.json" />
      </BeagleProvider>
    )

  return <Navigation />
}

export default Main
