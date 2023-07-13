import { SpinnerCircular } from 'spinners-react'
import { Link } from 'react-router-dom'

import TurnusHeadline from './TurnusHeadline'

const TurnusItem = ({
  title,
  date,
  currentPlaces,
  totalPlaces,
  color,
  isLoading,
  error,
  regLink,
  outOfStock = false,
}) => {
  const available = currentPlaces > 0 && !outOfStock

  return (
    <div className="mx-4 mb-32 turnus lg:mb-12 xl:mb-0">
      <TurnusHeadline title={title} date={date} color={color} />
      {isLoading && (
        <div className="flex justify-center">
          <SpinnerCircular thickness={220} color="#FDECBE" />
        </div>
      )}
      {error && <p className="text-2xl text-beige">Neco se pokazilo...</p>}
      <div>
        <p className="mb-8 text-3xl font-medium" style={{ color: `${color}` }}>
          {available ? `Zbývá ${currentPlaces}/${totalPlaces}` : 'Vyprodáno'}
        </p>
        <Link
          to={regLink}
          className="block px-6 py-3 text-2xl font-bold text-beige"
          style={{ backgroundColor: `${color}` }}
        >
          {available ? 'PŘIHLÁSIT SE' : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
        </Link>
      </div>
    </div>
  )
}

export default TurnusItem
