import React from 'react'
import ContactTitle from '../atoms/ContactTitle'
import Link from '../atoms/Link'

interface SuSocialsProps {
  title: string
  desc: string
  fbLink: string
  fbImg: string
  igLink: string
  igImg: string
}

const SuSocials: React.FC<SuSocialsProps> = ({
  title,
  desc,
  fbLink,
  fbImg,
  igLink,
  igImg,
}) => {
  return (
    <div className="socials text-center lg:text-left relative z-30">
      <ContactTitle title={title} color="secondaryDark" />
      <p className="mb-4 text-primary">{desc}</p>
      <div className="img-links flex justify-center gap-x-6 lg:gap-x-0 lg:justify-between lg:max-w-xs mb-12">
        <Link linkTo={fbLink} linkName="">
          <img
            className="w-32 h-auto lg:px-0 xl:px-0 soc"
            src={fbImg}
            alt={`facebook: ${title}`}
            style={{borderRadius: "15px", boxShadow: '15px 15px 15px -3px rgba(0,0,0,0.2)'}}
          />
        </Link>
        <Link linkTo={igLink} linkName="">
          <img
            className="w-32 h-auto lg:px-0 xl:px-0 soc"
            src={igImg}
            alt={`instagram: ${title}`}
            style={{borderRadius: "15px", boxShadow: '15px 15px 15px -3px rgba(0,0,0,0.2)'}}
          />
        </Link>
      </div>
    </div>
  )
}

export default SuSocials
