import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2024, 7, 20, 15, 0, 0).getTime() // NEZAPOMENOUT 20.7.2024 15:00
  const shouldStartRegistration = Date.now() >= startDate
  //const shouldStartRegistration = true

  const { /*data,*/ isLoading, error } = useFetchReservations()

  return (
    <section id="prihlaska">
      <div className="flex flex-wrap justify-around w-full pt-32 mx-auto lg:w-4/5 lg:pb-16">
        {!shouldStartRegistration && (
          <div className="w-full notify-headline">
            <Notification />
            <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5">
              <TurnusHeadline
                title="1. Turnus"
                date="19. 8. - 22. 8. 2024"
                color="#C2D379"
              />
              <TurnusHeadline
                title="2. Turnus"
                date="26. 8. - 29. 8. 2024"
                color="#C2D379"
              />
            </div>
          </div>
        )}
        {shouldStartRegistration && (
          <>
            <TurnusItem
              outOfStock={false}
              title="1. Turnus"
              date="19. 8. - 22. 8. 2024"
              //currentPlaces={data?.firstBatchCapacity}
              currentPlaces={1}
              totalPlaces={96}
              color="#C2D379"
              isLoading={isLoading}
              error={error}
              regLink="/turnus1"
            />
            <TurnusItem
              outOfStock={false}
              title="2. Turnus"
              date="26. 8. - 29. 8. 2024"
              //currentPlaces={data?.secondBatchCapacity}
              currentPlaces={1} // TESTOVACÍ KÓD - ZMĚNIT ↑
              totalPlaces={96}
              color="#C2D379"
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
