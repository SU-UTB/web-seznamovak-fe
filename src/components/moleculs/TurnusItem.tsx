import { Link } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import TurnusHeadline from './TurnusHeadline'
import React from 'react'

interface TurnusItemProps {
  title: string
  date: string
  currentPlaces?: number
  totalPlaces: number
  color: string
  isLoading: boolean
  error: Error | null
  regLink: string
  outOfStock: boolean
}

const TurnusItem: React.FC<TurnusItemProps> = ({
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
  if (!currentPlaces) return

  const available = currentPlaces > 0 && !outOfStock
  //const available = false

  return (
    <div className="mx-4 mb-32 turnus lg:mb-12 xl:mb-0">
      <TurnusHeadline title={title} date={date} color={color} />
      {isLoading && (
        <div className="flex justify-center">
          <Oval color="#FDECBE" secondaryColor="lightblue" />
        </div>
      )}
      {error && <p className="text-2xl text-beige">Něco se pokazilo...</p>}
      <div>
        <p className="mb-8 text-3xl font-medium" style={{ color: `${color}` }}>
          {available ? `Zbývá ${currentPlaces}/${totalPlaces}` : 'Vyprodáno'}
        </p>
        <Link
          to={regLink}
          className="block px-6 py-3 text-2xl font-bold"
          style={{ backgroundColor: `${color}`,
                    color: '#222B45',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 30px -3px rgba(209, 186, 121, 0.6)' }}
        >
          {available ? 'PŘIHLÁSIT SE' : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
        </Link>
      </div>
    </div>
  )
}

export default TurnusItem
