import React from 'react'
import { ModalBackground } from './Modal.styles'
import Spinner from '../Spinner'

const LoadingModal = () => {
  return (
    <ModalBackground>
      <Spinner/>
    </ModalBackground>
  )
}

export default LoadingModal