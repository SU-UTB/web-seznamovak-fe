import React from 'react'

interface TurnusHeadlineProps {
  title: string
  date: string
  color: string
}

const TurnusHeadline: React.FC<TurnusHeadlineProps> = ({
  title,
  date,
  color,
}) => {
  return (
    <div className="turnus-headline">
      <h3 className={`font-bold mb-2 text-4xl text-${color}`}>
        {title}
      </h3>
      <h4 className="mb-1 text-onPrimaryDark font-medium text-4xl">{date}</h4>
      <h5 className="mb-2 text-onPrimaryDark font-regular text-xl">
        (pondělí - čtvrtek)
      </h5>
    </div>
  )
}

export default TurnusHeadline
