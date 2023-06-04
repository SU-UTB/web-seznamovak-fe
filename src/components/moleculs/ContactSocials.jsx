import ContactPicture from '../atoms/ContactPicture'
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
        <Link linkTo={fbLink}>
          <ContactPicture
            imgSrc={fbImg}
            backImgSrc={backFbImg}
            imgAlt={`facebook: ${title}`}
          />
        </Link>
        <Link linkTo={igLink}>
          <ContactPicture
            className="w-32 h-auto lg:px-2 xl:px-0"
            imgSrc={igImg}
            backImgSrc={backIgImg}
            imgAlt={`instagram: ${title}`}
          />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials
