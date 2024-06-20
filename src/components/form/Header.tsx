import React from 'react'
import imageLogo from '../../assets/img/logo.png'

interface HeaderProps {
  label: string
  date: string
}

const Header: React.FC<HeaderProps> = ({ label, date }) => {
  return (
    <div className="formHead">
      <img className="imgLogo" src={imageLogo} alt="" />
      <div className="headContainer">
        <header className="textHead">{label}</header>
        <header className="dateHead">{date}</header>
      </div>
    </div>
  )
}
export default Header
