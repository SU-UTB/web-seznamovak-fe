import React from 'react'

interface TurnusHeadlineProps {
  title: string
  date: string
}

const TurnusHeadline: React.FC<TurnusHeadlineProps> = ({
  title,
  date,
}) => {
  return (
    <div className="turnus-headline">
      <h3 className={`font-bold mb-2 text-4xl text-darkPink`}>
        {title}
      </h3>
      <h4 className="mb-1 text-darkBlue font-medium text-4xl">{date}</h4>
      <h5 className="mb-2 text-darkBlue font-regular text-xl">
        (pondělí - čtvrtek)
      </h5>
    </div>
  )
}

export default TurnusHeadline
