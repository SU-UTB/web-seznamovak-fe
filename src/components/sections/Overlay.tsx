import logo from './../../assets/img/logo.svg'
import '../../scss/Overlay.scss'

const Overlay: React.FC = () => {

  return (
    <div className="overlay relative m-0 overflow-y-hidden">
      <div className="lay1"></div>
      <div className="lay2"></div>
      <div className="lay3"></div>
      <div className="lay4"></div>
      <div className="lay5"></div>
      <div className="lay6"></div>
      <div className="lay7"></div>
      <img className="logo" src={logo} alt="seznamovak 2023 logo" />
      <div className="pattern"></div>
      <div className="cursorzone"></div>
      <div className="pattern-mobile"></div>
    </div>
  )
}

export default Overlay
