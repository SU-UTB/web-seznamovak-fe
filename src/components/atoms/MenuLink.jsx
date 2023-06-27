import '../../scss/Navbar.scss'
import {AnalyticsEvents, Firebase} from "../../utils/firebase";

const MenuLink = ({sectionLink, sectionName}) => {
    return (
        <a className="navbutton" href={`#${sectionLink}`}
           onClick={
               () => Firebase.instance.aLog(AnalyticsEvents.navClicked, sectionName)
           }>{sectionName}</a>
    )
}

export default MenuLink
