import { faqs } from '../../data/faqs'
import SectionTitle from '../atoms/SectionTitle'
import { useState } from 'react'
import Accordion from '../moleculs/Accordion'
import '../../scss/Faq.scss'

const Faq = () => {
  const [showed, setShowed] = useState(null)

  return (
    <section id="faq">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="FAQ" />
        <ul className="text-beige text-left lg:w-4/5 mx-auto pb-20">
          {faqs.map((faq, i) => (
            <Accordion
              key={faq.question}
              title={faq.question}
              content={faq.answer}
              showed={showed}
              setShowed={setShowed}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
