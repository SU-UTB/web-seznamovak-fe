import React from 'react'

interface ContactTitleProps {
  title: string
  color: string
}

const ContactTitle: React.FC<ContactTitleProps> = ({
  title,
  color,
}) => {

  return (
    <h2
      className={`py-2 text-2xl md:text-4xl xl:text-4xl uppercase font-bold text-${color}`}
    >
      {title}
    </h2>
  )
}

export default ContactTitle
