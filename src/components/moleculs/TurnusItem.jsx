import { SpinnerCircular } from 'spinners-react'
import { getAvailablePlaces } from '../../utils/getAvailablePlaces'
import TurnusHeadline from './TurnusHeadline'

const TurnusItem = ({
  title,
  date,
  range,
  totalPlaces,
  color,
  data,
  isLoading,
  error,
  regLink,
  subRegLink,
  outOfStock,
}) => {
  const availablePlaces = getAvailablePlaces(totalPlaces, data)

  return (
    <div className="turnus mx-4 mb-32 lg:mb-12 xl:mb-0">
      <TurnusHeadline title={title} date={date} range={range} color={color} />
      {isLoading && (
        <div className="flex justify-center">
          <SpinnerCircular thickness={220} color="#FDECBE" />
        </div>
      )}
      {error && <p className="text-beige text-2xl">Neco se pokazilo...</p>}
      {data.length > 0 && (
        <div>
          <p
            className="mb-8 font-medium text-3xl"
            style={{ color: `${color}` }}
          >
            {availablePlaces > 0 && !outOfStock
              ? `Zbývá ${availablePlaces}/${totalPlaces}`
              : 'Vyprodáno'}
          </p>
          <a
            href={availablePlaces > 0 && !outOfStock ? regLink : subRegLink}
            target="_blank"
            rel="nopener noreferrer"
            className="text-beige font-bold text-2xl px-6 py-3 block"
            style={{ backgroundColor: `${color}` }}
          >
            {availablePlaces > 0 && !outOfStock
              ? 'PŘIHLÁSIT SE'
              : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
          </a>
        </div>
      )}
    </div>
  )
}

export default TurnusItem
