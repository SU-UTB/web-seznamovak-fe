import ContactPicture from '../atoms/ContactPicture'
import ContactTitle from '../atoms/ContactTitle'
import Link from '../atoms/Link'

const ContactSocials = ({ title, desc, fbLink, fbImg, backFbImg, fbImgWebp, backFbImgWebp, igLink, igImg, backIgImg, igImgWebp, backIgImgWebp }) => {
  return (
    <div className="socials lg:mt-auto relative z-30">
      <div className="text-center">
        <ContactTitle title={title} />
      </div>
      <p className="mb-4">{desc}</p>
      <div className="img-links flex justify-center gap-x-6 lg:gap-x-0 mx-auto lg:justify-between lg:max-w-xs mb-12">
        <Link linkTo={fbLink}>
          <ContactPicture  imgSrc={fbImg} backImgSrc={backFbImg} webpImgSrc={fbImgWebp} backWebpImgSrc={backFbImgWebp} imgAlt={`facebook: ${title}`} />
        </Link>
        <Link linkTo={igLink}>
          <ContactPicture className="w-32 h-auto lg:px-2 xl:px-0" imgSrc={igImg} backImgSrc={backIgImg} webpImgSrc={igImgWebp} backWebpImgSrc={backIgImgWebp} imgAlt={`instagram: ${title}`} />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials