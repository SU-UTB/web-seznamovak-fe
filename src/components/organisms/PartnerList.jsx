import { Firebase } from '../../utils/firebase'
import Link from '../atoms/Link'

const PartnerList = ({ items, baseSize = 32 }) => {
  return (
    <div className="partner-list flex flex-col sm:flex-row gap-x-8 flex-wrap items-center">
      {items.map((item) => (
        <div
          className={`my-3 flex items-center justify-center w-${baseSize} h-${baseSize}`}
          key={item.pic}
        >
          <Link linkTo={item.link} onClick={() => Firebase.instance.aLog(AnalyticsEvents.partnerClicked, item.link)}>
            <img src={item.pic} alt={item.picAlt} loading="lazy" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PartnerList
