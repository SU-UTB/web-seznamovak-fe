import Link from '../atoms/Link'

const Footer = () => {
  return (
    <footer>
      <p>Vytvořila:
        <Link 
          linkTo="https://www.facebook.com/studentskaunieutb/" 
          linkName="Studentská Unie UTB" />
      </p>
    </footer>
  )
}

export default Footer