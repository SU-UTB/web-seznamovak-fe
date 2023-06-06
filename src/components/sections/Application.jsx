import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2022, 6, 5, 15, 0, 0)
  const shouldStartRegistration = Date.now() >= startDate

  // TODO: get real data from database by an api call (useEffect)
  const turnusList = [
    {
      title: '1. Turnus',
      date: '21. 8. – 24. 8. 2023',
      range: '(pondělí – čtvrtek)',
      totalPlaces: 100,
      color: '#E25525',
      data: {},
      isLoading: false,
      error: 'Error',
      regLink: 'https://forms.gle/qaEwv6kxMw4oHnQK6',
      subRegLink: 'https://forms.gle/qaEwv6kxMw4oHnQK6',
      outOfStock: true,
    },
    {
      title: '2. Turnus',
      date: '28. 8. – 31. 8. 2023',
      range: '(pondělí – čtvrtek)',
      totalPlaces: 100,
      color: '#F3A548',
      data: {},
      isLoading: false,
      error: 'Error',
      regLink: 'https://forms.gle/F5k6XBFayw5TzZZFA',
      subRegLink: 'https://forms.gle/F5k6XBFayw5TzZZFA',
      outOfStock: true,
    },
  ]

  return (
    <section id="prihlaska">
      <div className="flex flex-wrap justify-around w-full pt-32 mx-auto lg:w-4/5 lg:pb-16">
        {!shouldStartRegistration && (
          <div className="w-full notify-headline">
            <Notification />
            <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5">
              {turnusList.map(({ title, date, color, range }) => (
                <TurnusHeadline
                  key={title}
                  title={title}
                  date={date}
                  range={range}
                  color={color}
                />
              ))}
            </div>
          </div>
        )}
        {shouldStartRegistration &&
          turnusList.map(
            ({
              title,
              date,
              totalPlaces,
              linkToAssign,
              color,
              data,
              isLoading,
              error,
              regLink,
              subRegLink,
              outOfStock,
            }) => (
              <TurnusItem
                key={title}
                title={title}
                date={date}
                totalPlaces={totalPlaces}
                linkToAssign={linkToAssign}
                color={color}
                data={data}
                isLoading={isLoading}
                error={error}
                regLink={regLink}
                subRegLink={subRegLink}
                shouldStart={shouldStartRegistration}
                outOfStock={outOfStock}
              />
            )
          )}
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application
