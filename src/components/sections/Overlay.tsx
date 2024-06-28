import React from 'react'
import '../../scss/Overlay.scss'

const Overlay: React.FC = () => {

  return (
    <div className="overlay relative m-0 overflow-y-hidden">
      {/* <div className="pattern"></div> */}
      {/* <div className="pattern-mobile"></div> */}
      <div className="image"></div>
    </div>
  )
}

export default Overlay
