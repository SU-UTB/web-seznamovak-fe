import React from 'react'
import FaqToggler from '../../assets/img/faq_toggler.svg'

interface AccordionProps {
  title: string
  content: React.ReactNode
  showed: string | null
  setShowed: (title: string | null) => void
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  showed,
  setShowed,
}) => {
  return (
    <li className="bg-primaryLight mb-4 px-4 md:px-8 py-4 flex flex-col justify-center"
    style={{ borderRadius: '15px',
      boxShadow: '15px 15px 15px -3px rgba(0,0,0,0.2)'}}
    >
      <button
        type="button"
        className="font-bold uppercase text-lg text-left sm:text-xl md:text-2xl w-full flex justify-between items-center transition"
        onClick={() => setShowed(title === showed ? null : title)}
      >
        {title}
        <img
          className={
            (showed === title ? 'rotate-180' : 'rotate-0') +
            ' w-4 md:w-6 transition-transform'
          }
          src={FaqToggler}
          alt="šipka"
        />
      </button>
      <div
        className={
          'content overflow-hidden transition-all duration-500 ease-in-out ' +
          (showed === title ? 'max-h-80 mt-2 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        {content}
      </div>
    </li>
  )
}

export default Accordion
