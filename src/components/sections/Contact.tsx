import Organiser from '../moleculs/Organiser'
import ContactSocials from '../moleculs/ContactSocials'
import { documents } from '../../data/documents'
import { suSocials, managersSocials } from '../../data/contacts.ts'

import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'
import ManagerTitle from '../atoms/ManagerTitle'
import ContactTitle from '../atoms/ContactTitle'
import SuSocials from '../moleculs/SuSocials'
//import '../../scss/Contact.scss'

const Contact = () => {
  return (
    <section id="kontakt" className="bg-secondary4Dark text-secondaryDark px-4 lg:px-0">
      <SectionTitle title="kontakt" color="secondaryDark" />
      <div className="lg:grid lg:grid-cols-2 lg:content-end text-center lg:text-left mx-auto lg:w-4/5 gap-x-16">
        <div>
          <SuSocials
            title={suSocials.name}
            desc={suSocials.desc}
            fbLink={suSocials.fbLink}
            fbImg={suSocials.fbImg}
            igLink={suSocials.igLink}
            igImg={suSocials.igImg}
          />
        </div>
        <div className="divManagersOuter">
          <div className="divManagersTitle">
            <ManagerTitle title="MANAŽEŘI PROJEKTU" color="secondaryDark" />
          </div>
          <div className="divManagersInner">
            {managersSocials.map((manager) => (
              <ContactSocials
                desc=""
                index={0}
                key={manager.name}
                title={manager.name}
                fbLink={manager.fbLink}
                fbImg={manager.fbImg}
                fbOverlay={manager.fbOverlay}
                igLink={manager.igLink}
                igImg={manager.igImg}
                igOverlay={manager.igOverlay}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:gap-x-8 2xl:gap-x-20 text-center lg:text-left mx-auto lg:w-4/5 pb-12">
        <Organiser />
        <div className="documents lg:col-span-2">
          <ContactTitle title="dokumenty" color="secondaryDark" />
          <div className="document-list py-4 text-primary">
            {documents.map((doc) => (
              <div className="doc-link mb-2" key={doc.desc}>
                <Link linkTo={doc.file} linkName={doc.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
