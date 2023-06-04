const TurnusHeadline = ({ title, date, color, range, outOfStock }) => {
  return (
    <div className="turnus-headline">
      <h3 className="font-bold mb-2 text-4xl" style={{ color: `${color}` }}>
        {title}
      </h3>
      <h4 className="mb-1 text-beige font-medium text-4xl">{date}</h4>
      <h5 className="mb-2 text-beige font-regular text-xl">{range}</h5>
    </div>
  )
}

export default TurnusHeadline
