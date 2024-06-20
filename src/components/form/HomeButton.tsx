import React from 'react'
import { Link } from 'react-router-dom'
import homeButton from '../../assets/img/homeButton.png'

const HomeButton: React.FC = () => {
  return (
    <div className="homeButtonWrapper">
      <div className="homeButtonImg">
        <Link to="/">
          <img src={homeButton} alt="Zpátky" />
        </Link>
      </div>
    </div>
  )
}

export default HomeButton
