import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2024, 7, 20, 15, 0, 0)
  const shouldStartRegistration = Date.now() >= startDate
  // const shouldStartRegistration = false

  const { data, isLoading, error } = useFetchReservations()

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
                color="#E25525"
              />
              <TurnusHeadline
                title="2. Turnus"
                date="26. 8. - 29. 8. 2024"
                color="#F3A548"
              />
            </div>
          </div>
        )}
        {shouldStartRegistration && (
          <>
            <TurnusItem
              title="1. Turnus"
              date="19. 8. - 22. 8. 2024"
              currentPlaces={data?.firstBatchCapacity}
              totalPlaces={96}
              color="#E25525"
              isLoading={isLoading}
              error={error}
              regLink="/turnus1"
            />
            <TurnusItem
              title="2. Turnus"
              date="26. 8. - 29. 8. 2024"
              currentPlaces={data?.secondBatchCapacity}
              totalPlaces={96}
              color="#F3A548"
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
