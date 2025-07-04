import React from 'react'
//import '../../scss/Overlay.scss'
import logo from '../../assets/img/logo.svg'
import backgroundImage from '../../assets/img/main_bg.webp';

const Overlay: React.FC = () => {

  return (
    <div
      className="overlay relative pt-12 bg-primaryDark h-[40vh] md:h-[70vh] w-full m-0 overflow-y-hidden flex items-center justify-center bg-cover md:bg-[center_top_60%]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay content goes here */}

      <img 
        src={logo} 
        alt="Logo" 
        className="w-auto h-[20vh] md:h-[35vh]" // Adjust size as needed
      />
    </div>
  )
}

export default Overlay
