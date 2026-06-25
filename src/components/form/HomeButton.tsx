import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/img/ArrowLeft'

const HomeButton: React.FC = () => {
  return (
    <div className="homeButtonWrapper">
      <div className="homeButtonImg">
        <Link to="/" className="block w-14 h-14">
          <ArrowLeft />
        </Link>
      </div>
    </div>
  )
}

export default HomeButton
