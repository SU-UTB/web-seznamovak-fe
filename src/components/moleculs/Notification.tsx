import '../../scss/Notification.scss'
import { REGISTRATION_START_DATE_TEXT, REGISTRATION_START_TIME_TEXT } from '../../data/constants'

const Notification = () => {
  return (
    <div className="px-4 lg:px-0 flex flex-col items-center w-full">
      <h2 className="font-bold mb-2 text-onPrimaryDark text-2xl lg:text-4xl">
        REGISTRACE SE SPUSTÍ <br className="md:hidden" />
        <span className="text-3xl lg:text-5xl text-secondaryDark">{REGISTRATION_START_DATE_TEXT}</span>
      </h2>
      <p className="hidden font-bold mb-2 text-secondaryDark text-xl">{REGISTRATION_START_TIME_TEXT}</p>
      {/* <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeJa9s0eo8eBFntavLecKhKv2laoQ9WS5nGpviRlHgSFAsJ7Q/viewform"
        target="_blank"
        rel="nopener noreferrer"
      >
        CHCI UPOZORNĚNÍ
      </a> */}
      <p className="text-lg text-onPrimaryDark">
        Každý turnus má kapacitu pouze {' '}
        <b><span className="text-3xl lg:text-3xl text-secondaryDark">100&nbsp;</span></b>
        účastníků.
        <br />
        {/* Nastav si upozornění a my Ti spuštění registrací připomeneme! */}
      </p>
    </div>
  )
}
export default Notification
