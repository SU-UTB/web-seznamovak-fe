import '../../scss/HamburgerBtn.scss'

const HamburgerBtn = ({ isNavOpened, onClick }) => {
  return (
    <div className={`lg:hidden hamb-btn absolute z-10 w-8 h-8 cursor-pointer top-3 right-6 ${isNavOpened ? 'active' : ''}`} onClick={onClick}>
      <div className="line1 bg-beige"></div>
      <div className="line2 bg-beige"></div>
      <div className="line3 bg-beige"></div>
    </div>
  )
}

export default HamburgerBtn