import Organiser from '../moleculs/Organiser'
import ContactSocials from '../moleculs/ContactSocials'
import { documents } from '../../data/documents'
import { suSocials, managersSocials } from '../../data/contacts'

import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'
import ContactTitle from '../atoms/ContactTitle'
import SuSocials from '../moleculs/SuSocials'
import '../../scss/Contact.scss'

const Contact = () => {
  return (
    <section id="kontakt" className="bg-dark_beige px-4 lg:px-0">
      <SectionTitle title="kontakt" />
      <div className="lg:grid lg:grid-cols-3 lg:content-end text-center lg:text-left mx-auto lg:w-4/5 gap-x-8">
        <SuSocials
          title={suSocials.name}
          desc={suSocials.desc}
          fbLink={suSocials.fbLink}
          fbImg={suSocials.fbImg}
          fbImgWebp={suSocials.fbImgWebp}
          igLink={suSocials.igLink}
          igImg={suSocials.igImg}
          igImgWebp={suSocials.igImgWebp}
        />
        <div className="lg:hidden">
          <SectionTitle title="MANAŽEŘI PROJEKTU" />
        </div>
        {managersSocials.map((manager) => (
          <ContactSocials
            key={manager.name}
            title={manager.name}
            fbLink={manager.fbLink}
            fbImg={manager.fbImg}
            fbImgWebp={manager.fbImgWebp}
            backFbImg={manager.backFbImg}
            igLink={manager.igLink}
            igImg={manager.igImg}
            igImgWebp={manager.igImgWebp}
            backIgImg={manager.backIgImg}
          />
        ))}
      </div>
      <div className="lg:grid lg:grid-flow-col lg:gap-x-8 2xl:gap-x-20 text-center lg:text-left mx-auto lg:w-4/5 pb-12">
        <Organiser />
        <div className="documents lg:col-span-2">
          <ContactTitle title="dokumenty" />
          <div className="document-list py-4">
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
