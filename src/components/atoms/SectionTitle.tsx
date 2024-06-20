import React from 'react'

interface SectionTitleProps {
  title: string
  color: string
  fontSize?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color = '#222B45',
  fontSize
}) => {
  const colorRegex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')

  return (
    <h2
      className="py-16 px- text-2xl md:text-4xl xl:text-5xl uppercase font-bold relative z-30"
      style={{ color: `${colorRegex.test(color) ? color : '#222B45'}`, fontSize }}
    >
      {title}
    </h2>
  )
}

export default SectionTitle
