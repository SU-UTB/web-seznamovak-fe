import { SpinnerCircular } from 'spinners-react'
import { getAvailablePlaces } from '../../utils/getAvailablePlaces'
import TurnusHeadline from './TurnusHeadline'
import { useEffect } from 'react';
import api from '../../api/api';

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

  // const {capacity, setCapacity} = useState();

  useEffect(()=>{
    api
    .post(endpoint, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  },[])

  const availablePlaces = 20 // TODO: update according to real data

  return (
    <div className="mx-4 mb-32 turnus lg:mb-12 xl:mb-0">
      <TurnusHeadline title={title} date={date} range={range} color={color} />
      {isLoading && (
        <div className="flex justify-center">
          <SpinnerCircular thickness={220} color="#FDECBE" />
        </div>
      )}
      {error && <p className="text-2xl text-beige">Neco se pokazilo...</p>}
      {data.length > 0 && (
        <div>
          <p
            className="mb-8 text-3xl font-medium"
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
            className="block px-6 py-3 text-2xl font-bold text-beige"
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
