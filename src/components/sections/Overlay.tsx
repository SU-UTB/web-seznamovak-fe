import React, { useEffect } from 'react'
import logo from './../../assets/img/logo.svg'
import '../../scss/Overlay.scss'

const Overlay: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const pixels = window.scrollY
      const movingObjects = document.getElementsByClassName(
        'moving-obj'
      ) as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < movingObjects.length; i++) {
        movingObjects[i].style.transform = `translateY(${
          (pixels * i * 1.2) / movingObjects.length
        }px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="overlay relative m-0 overflow-y-hidden">
      <div className="lay1 moving-obj"></div>
      <div className="lay2 moving-obj"></div>
      <div className="lay3 moving-obj"></div>
      <div className="lay4 moving-obj"></div>
      <div className="lay5 moving-obj"></div>
      <div className="lay6 moving-obj"></div>
      <div className="lay7 moving-obj"></div>
      <img className="moving-obj logo" src={logo} alt="seznamovak 2023 logo" />
      <div className="pattern"></div>
      <div className="cursorzone"></div>
      <div className="pattern-mobile"></div>
    </div>
  )
}

export default Overlay
