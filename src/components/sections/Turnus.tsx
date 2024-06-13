import React from 'react'
import '../../form.css'
import HomeButton from '../form/HomeButton.tsx'
import Header from '../form/Header.tsx'
import PostForm from './PostForm.tsx'
import Contact from './Contact'

interface TurnusProps {
  turnusNumber: number
  label: string
  date: string
}

const Turnus: React.FC<TurnusProps> = ({ turnusNumber, label, date }) => {
  return (
    <>
      <div className="mainContainer">
        <HomeButton />
        <div className="formContainer">
          <Header label={label} date={date} />
          <PostForm batch={turnusNumber} />
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Turnus
