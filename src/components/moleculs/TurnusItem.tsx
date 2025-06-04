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
  // outOfStock = false,
}) => {
  if (!currentPlaces && currentPlaces !== 0) return

  const available = currentPlaces > 0
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
        <p className={`mb-8 text-3xl font-medium text-${color}`}>
          {available ? `Zbývá ${currentPlaces}/${totalPlaces}` : 'Vyprodáno'}
        </p>
        <Link
          to={regLink}
          className={`block px-6 py-3 text-2xl font-bold rounded-[10px] shadow-[0px_0px_30px_-3px_rgba(209,186,121,0.6)]`}
          style={{ color: '#70308C', backgroundColor: '#F2BC1B' }}
        >
          {available ? 'PŘIHLÁSIT SE' : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
        </Link>

      </div>
    </div>
  )
}

export default TurnusItem
