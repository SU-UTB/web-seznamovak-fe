//import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'
// Import the constants from your data/constants.ts file
import { turnus1, turnus2, REGISTRATION_START_DATE } from '../../data/constants';

const Application = () => {
  // Use the REGISTRATION_START_DATE constant for the registration start time
  const startDate = REGISTRATION_START_DATE.getTime();
  const shouldStartRegistration = Date.now() >= startDate;
  // const shouldStartRegistration = true

  const { data, isLoading, error } = useFetchReservations();

  return (
    <section id="prihlaska" className='bg-primaryDark '>
      <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5 lg:pb-16">
        {!shouldStartRegistration && (
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
        {shouldStartRegistration && (
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
