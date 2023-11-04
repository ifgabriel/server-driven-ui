import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import BeagleService from '../../beagle/beagle-service'

const Main = () => (
  <BeagleProvider value={BeagleService} >
    <BeagleRemoteView route="/home.json" />
  </BeagleProvider >
)

export default Main
