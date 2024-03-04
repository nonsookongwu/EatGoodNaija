import Spinner from '../Spinner'
import { ModalBackground } from './Modal.styles'

const LoadingModal = () => {
  return (
    <ModalBackground>
      <Spinner/>
    </ModalBackground>
  )
}

export default LoadingModal