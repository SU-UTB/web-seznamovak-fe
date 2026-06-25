import ContactTitle from '../atoms/ContactTitle'
import EmailLink from '../atoms/EmailLink'

const Organiser = () => {
  return (
    <div className="organiser mb-12">
      <ContactTitle title="POŘADATEL" color="darkBlue" />
      <div className="info font-medium text-darkBlue">
        <p className="mb-3">Studentská unie UTB, z.s</p>
        <p className="mb-3">Růmy 4046, 760 01 Zlín</p>
        <EmailLink email="seznamovak@sutb.cz" />
        <p className="mb-3">Prezident Studentské unie: Matúš Varga</p>
        <EmailLink email="varga@sutb.cz" />
      </div>
    </div>
  )
}

export default Organiser
