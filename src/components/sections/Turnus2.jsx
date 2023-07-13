import '../../form.css'
import HomeButton from '../form/HomeButton'
import Header from '../form/Header'
import PostForm from './PostForm'

const Turnus2 = () => {
  return (
    <div className="mainContainer">
      <HomeButton />
      <div className="formContainer">
        <Header label="2. Turnus" date="28.8. - 31.8. 2023" />
        <PostForm />
      </div>
    </div>
  )
}

export default Turnus2
