import React from 'react'
import Lottie from 'react-lottie'
import animationData from './dots.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}


export const Loading = () => {
    return (
        <div style={{marginTop: '10rem'}}>
            <Lottie options={defaultOptions} height={120} width={120} />
        </div>
    )
}
