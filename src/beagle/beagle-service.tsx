import { createBeagleUIService } from '@zup-it/beagle-react'
import { NavigationController } from '@zup-it/beagle-web'

import {
  Banner,
  Card,
  Container,
  ExceptionState,
  Grid,
  Skeleton,
} from '../components-ui'
import BeagleError from './BeagleError'

const inYourFace: NavigationController = {
  onSuccess: (view, screen) => view.getRenderer().doFullRender(screen),
  onError: (view) =>
    view.getRenderer().doFullRender({ _beagleComponent_: 'custom:error' }),
  onLoading: (view, completeNavigation) => {
    view.getRenderer().doFullRender({
      _beagleComponent_: 'custom:skeleton', 
      "width": "auto",
      "height": "500px"
    })
    completeNavigation()
  },
}

export default createBeagleUIService({
  defaultNavigationController: inYourFace,
  baseUrl: 'https://server-driven-ui.s3.us-east-2.amazonaws.com',
  components: {
    'custom:grid': Grid,
    'custom:card': Card,
    'custom:banner': Banner,
    'custom:container': Container,
    'custom:skeleton': Skeleton,
    'custom:error': BeagleError,
    'custom:boundary': BeagleError,
    'custom:exceptionState': ExceptionState,
  },
})
