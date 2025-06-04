import React from 'react'

interface SectionTitleProps {
  title: string
  color: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color,
}) => {

  return (
    <h2
      className={`py-16 px-4 text-2xl md:text-4xl xl:text-5xl uppercase font-bold relative z-30 text-${color}`}
    >
      {title}
    </h2>
  )
}

export default SectionTitle
