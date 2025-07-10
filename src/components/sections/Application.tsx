//import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'
// Import the constants from your data/constants.ts file
import { turnus1, turnus2, REGISTRATION_START_DATE, REGISTRATION_END_DATE } from '../../data/constants';

const Application = () => {
  // Use the REGISTRATION_START_DATE constant for the registration start time
  const nowUTC = Date.now();
  const startDateUTC = Date.parse(REGISTRATION_START_DATE.toISOString());
  const endDateUTC = Date.parse(REGISTRATION_END_DATE.toISOString());
  
  const isRegistrationOpen = nowUTC >= startDateUTC && nowUTC <= endDateUTC;
  // const shouldStartRegistration = true

  const { data, isLoading, error } = useFetchReservations();

  return (
    <section id="prihlaska" className='bg-primaryDark '>
      <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5 lg:pb-16">
        {!isRegistrationOpen && (
          <div className="w-full notify-headline">
            <Notification />
            <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5">
              <TurnusHeadline
                title="1. Turnus"
                // Use the displayDate from turnus1 constant
                date={turnus1.displayDate}
                color="secondaryDark"
              />
              <TurnusHeadline
                title="2. Turnus"
                // Use the displayDate from turnus2 constant
                date={turnus2.displayDate}
                color="secondaryDark"
              />
            </div>
          </div>
        )}
        {isRegistrationOpen && (
          <>
            <TurnusItem
              outOfStock={false}
              title="1. Turnus"
              // Use the displayDate from turnus1 constant
              date={turnus1.displayDate}
              currentPlaces={data?.firstBatchCapacity}  // OVĚŘIT FUNGOVÁNÍ S DATABÁZÍ
              //currentPlaces={1}
              totalPlaces={100}
              color="secondaryDark"
              isLoading={isLoading}
              error={error}
              regLink="/turnus1"
            />
            <TurnusItem
              outOfStock={false}
              title="2. Turnus"
              // Use the displayDate from turnus2 constant
              date={turnus2.displayDate}
              currentPlaces={data?.secondBatchCapacity} // OVĚŘIT FUNGOVÁNÍ S DATABÁZÍ
              //currentPlaces={1} // TESTOVACÍ KÓD - ZMĚNIT ↑
              totalPlaces={100}
              color="secondaryDark"
              isLoading={isLoading}
              error={error}
              regLink="/turnus2"
            />
          </>
        )}
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application
