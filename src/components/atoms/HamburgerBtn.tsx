import React from 'react'
import '../../scss/HamburgerBtn.scss'

interface HamburgerBtnProps {
  isNavOpened: boolean
  onClick: () => void
}

const HamburgerBtn: React.FC<HamburgerBtnProps> = ({
  isNavOpened,
  onClick,
}) => {
  return (
    <div
      className={`lg:hidden hamb-btn absolute z-10 w-8 h-8 cursor-pointer top-3 right-6 ${
        isNavOpened ? 'active' : ''
      }`}
      onClick={onClick}
    >
      <div className="line1 bg-beige"></div>
      <div className="line2 bg-beige"></div>
      <div className="line3 bg-beige"></div>
    </div>
  )
}

export default HamburgerBtn
