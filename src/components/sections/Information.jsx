import Link from '../atoms/Link'
import '../../scss/Information.scss'

const Information = () => {
  const totalPriceCZK = 2599
  const depositCZK = totalPriceCZK - 1000

  const links = [
    { linkName: 'Mapa zde', linkTo: 'https://goo.gl/maps/mTdBDjBknPJoU5Yr8/' },
    { linkName: 'IDOS spoje zde', linkTo: 'https://idos.idnes.cz/vlakyautobusy/spojeni/vysledky/?date=22.08.2022&time=&f=&t=Byst%C5%99i%C4%8Dka,,u%20Nov%C3%A1k%C5%AF&tc=200003/' },
    { linkName: 'Web kempu zde', linkTo: 'http://kemp-bystricka.cz/' }
  ]


  return (
    <section id="informace" className="text-center lg:text-left lg:pb-32 px-4 lg:px-0">
      <div className="info-container lg:mx-auto 3xl:w-3/5">
        <div className="info-table w-full lg:flex lg:flex-col lg:items-end md:px-16 lg:px-32 2xl:px-52 3xl:px-16 py-12">
          <div className="info-price mb-8 lg:w-1/2 xl:w-2/5 3xl:w-full 3xl:max-w-md">
            <h4 className="text-yellow_orange lg:text-browny text-2xl uppercase font-extrabold">Kolik to stojí?</h4>
            <p className="text-3xl font-bold mb-2 text-white lg:text-dark_blu">{totalPriceCZK.toString()} Kč / 105€</p>
            <p className="text-white lg:text-dark_blu">Zálohu {depositCZK.toString()} Kč pošleš při přihlášení a zbylých<br />1 000 Kč zaplatíš až na místě.</p>
          </div>
          <div className="info-place mb-8 lg:w-1/2 xl:w-2/5 3xl:w-full 3xl:max-w-md">
          <h4 className="text-yellow_orange lg:text-browny text-2xl uppercase font-extrabold">KDE BUDU?</h4>
            <p className="uppercase text-3xl font-bold mb-2 text-white lg:text-dark_blu">Kemp Ranč Bystřička</p>
            <div className="flex justify-center flex-col md:flex-row lg:justify-start gap-y-4 md:gap-x-6 text-white lg:text-dark_blu">
              {
                links.map(({ linkName, linkTo }) => (
                  <Link key={linkName} linkName={linkName} linkTo={linkTo} />
                ))
              }
            </div>
          </div>
          <div className="info-prepare-or-die lg:w-1/2 xl:w-2/5 3xl:w-full 3xl:max-w-md">
            <h4 className="text-yellow_orange lg:text-browny text-2xl uppercase font-extrabold">JAK SE MÁM PŘIPRAVIT?</h4>
            <p className="text-white lg:text-dark_blu">Ubytování v chatkách a kompletní strava po celý pobyt je zajištěna. Vezmi si sportovní oblečení na teplé dny, ale i na chladnější rána.	A hlavně si nezapomeň dobrou náladu! Bude to jízda! Koukni na minulé ročníky!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
