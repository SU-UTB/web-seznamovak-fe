import React from 'react'
import '../../scss/Navbar.scss'
import { AnalyticsEvents, Firebase } from '../../utils/firebase'

interface MenuLinkProps {
  sectionLink: string
  sectionName: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ sectionLink, sectionName }) => {
  return (
    <a
      className="navbutton"
      href={`#${sectionLink}`}
      onClick={() =>
        Firebase.instance.aLog(AnalyticsEvents.navClicked, sectionName)
      }
    >
      {sectionName}
    </a>
  )
}

export default MenuLink
