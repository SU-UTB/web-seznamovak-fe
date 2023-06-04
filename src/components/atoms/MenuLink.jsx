import '../../scss/Navbar.scss'

const MenuLink = ({ sectionLink, sectionName }) => {
  return (
    <a className="navbutton" href={`#${sectionLink}`}>{sectionName}</a>
  )
}

export default MenuLink
