import imageLogo from '../../assets/img/banner/su_logo.webp'

const Header = ({ label, date }) => {
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
