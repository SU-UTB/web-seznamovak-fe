import { useState } from 'react'
import ContactTitle from '../atoms/ContactTitle'
import Link from '../atoms/Link'
import { AnalyticsEvents, Firebase } from '../../utils/firebase'

interface ContactSocialsProps {
  title: string
  desc: string
  fbLink: string
  fbImg: string
  igLink: string
  igImg: string
  index: number
}

const ContactSocials: React.FC<ContactSocialsProps> = ({
  title,
  desc,
  fbLink,
  fbImg,
  igLink,
  igImg,
  index,
}) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <div className="relative z-30 socials lg:mt-auto">
      <div className="text-center">
        <ContactTitle title={title} color="" />
      </div>
      <p className="mb-4">{desc}</p>
      <div
        className="flex justify-center mx-auto mb-12 img-links gap-x-6 lg:justify-between lg:max-w-xs"
        onMouseEnter={() => handleCardFlip(index)}
        onMouseLeave={() => handleCardFlip(index)}
      >
        {/* TODO: create custom component (SocialContactImgLink) */}
        <Link
          linkName=""
          linkTo={fbLink}
          onClick={() =>
            Firebase.instance.aLog(AnalyticsEvents.contactFbClicked, title)
          }
        >
          <img
              src={fbImg}
              alt={`facebook: ${title}`}
              width={128}
              height={128}
              style={{borderRadius: "15px", boxShadow: '0px 0px 15px 7px rgba(56,89,153,1)'}}
            />
        </Link>
        <Link
          linkName=""
          linkTo={igLink}
          onClick={() =>
            Firebase.instance.aLog(AnalyticsEvents.contactIgClicked, title)
          }
        >
          <img
              src={igImg}
              alt={`instagram: ${title}`}
              width={128}
              height={128}
              style={{borderRadius: "15px", boxShadow: '0px 0px 15px 7px rgba(219,0,183,0.7)'}}
            />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials
