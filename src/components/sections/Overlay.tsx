import React from 'react'
//import '../../scss/Overlay.scss'
import logo from '../../assets/img/logo.svg'

const Overlay: React.FC = () => {

  return (
    <div className="overlay relative pt-12 bg-primaryDark h-[35vh] md:h-[50vh] w-full m-0 overflow-y-hidden flex items-center justify-center">
      {/* <div className="pattern"></div> */}
      {/* <div className="pattern-mobile"></div> */}
      {/* <div className="image"></div> */}
      <img 
        src={logo} 
        alt="Logo" 
        className="w-auto h-[25vh] md:h-[35vh]" // Adjust size as needed
      />
    </div>
  )
}

export default Overlay
