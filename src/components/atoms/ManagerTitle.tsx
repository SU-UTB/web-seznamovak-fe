import React from 'react'

interface ManagerTitleProps {
  title: string
  color: string
}

const ManagerTitle: React.FC<ManagerTitleProps> = ({
  title,
  color,
}) => {

  return (
    <h2
      className={`pb-8 pt-2 text-2xl md:text-4xl xl:text-4xl uppercase font-bold relative z-30 text-${color}`}
    >
      {title}
    </h2>
  )
}

export default ManagerTitle
