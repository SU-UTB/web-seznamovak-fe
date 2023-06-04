import ContactTitle from '../atoms/ContactTitle'
import Link from '../atoms/Link'

const ContactSocials = ({
  title,
  desc,
  fbLink,
  fbImg,
  backFbImg,
  igLink,
  igImg,
  backIgImg,
}) => {
  return (
    <div className="relative z-30 socials lg:mt-auto">
      <div className="text-center">
        <ContactTitle title={title} />
      </div>
      <p className="mb-4">{desc}</p>
      <div className="flex justify-center mx-auto mb-12 img-links gap-x-6 lg:gap-x-0 lg:justify-between lg:max-w-xs">
        {/* TODO: create custom component (SocialContactImgLink) */}
        <Link linkTo={fbLink}>
          <img
            src={fbImg}
            alt={`facebook: ${title}`}
            width={128}
            height={128}
          />
        </Link>
        <Link linkTo={igLink}>
          <img
            src={igImg}
            alt={`instagram: ${title}`}
            width={128}
            height={128}
          />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials
