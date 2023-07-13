import '../../form.css'
import HomeButton from '../form/HomeButton'
import Header from '../form/Header'
import PostForm from './PostForm'

const Turnus1 = () => {
  return (
    <div className="mainContainer">
      <HomeButton />
      <div className="formContainer">
        <Header label="1. Turnus" date="21.8. - 24.8. 2023" />
        <PostForm />
      </div>
    </div>
  )
}

export default Turnus1
