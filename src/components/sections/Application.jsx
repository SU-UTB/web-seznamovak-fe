import TurnusItem from '../moleculs/TurnusItem'
import '../../scss/Application.scss'
import useGoogleSheets from 'use-google-sheets'
import Information from './Information'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2022, 6, 5, 15, 0, 0)
  const shouldStartRegistration = Date.now() >= startDate

  const {
    data: turnusOneData,
    loading: isLoadingTurnusOne,
    error: errorTurnusOne,
  } = shouldStartRegistration
    ? useGoogleSheets({
        apiKey: import.meta.env.VITE_SHEETS_API_KEY,
        sheetId: import.meta.env.VITE_SHEET_TURNUS_ONE_ID,
      })
    : { data: null, loading: false, error: null }

  const {
    data: turnusTwoData,
    loading: isLoadingTurnusTwo,
    error: errorTurnusTwo,
  } = shouldStartRegistration
    ? useGoogleSheets({
        apiKey: import.meta.env.VITE_SHEETS_API_KEY,
        sheetId: import.meta.env.VITE_SHEET_TURNUS_TWO_ID,
      })
    : { data: null, loading: false, error: null }

  const turnusList = [
    {
      title: '1. Turnus',
      date: '21. 8. – 24. 8. 2023',
      range: '(pondělí – čtvrtek)',
      totalPlaces: 100,
      color: '#E25525',
      data: turnusOneData,
      isLoading: isLoadingTurnusOne,
      error: errorTurnusOne,
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
      data: turnusTwoData,
      isLoading: isLoadingTurnusTwo,
      error: errorTurnusTwo,
      regLink: 'https://forms.gle/F5k6XBFayw5TzZZFA',
      subRegLink: 'https://forms.gle/F5k6XBFayw5TzZZFA',
      outOfStock: true,
    },
  ]

  return (
    <section id="prihlaska">
      <div className="w-full lg:w-4/5 mx-auto flex justify-around flex-wrap pt-32 lg:pb-16">
        {!shouldStartRegistration && (
          <div className="notify-headline w-full">
            <Notification />
            <div className="flex justify-around flex-wrap w-full lg:w-4/5 mx-auto pt-16">
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
