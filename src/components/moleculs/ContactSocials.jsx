import { useState } from 'react';
import ContactTitle from '../atoms/ContactTitle';
import Link from '../atoms/Link';
import ReactCardFlip from 'react-card-flip';

const ContactSocials = ({
  title,
  desc,
  fbLink,
  fbImg,
  backFbImg,
  igLink,
  igImg,
  backIgImg,
  index,
}) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardFlip = (index) => {
    flippedIndex === index ? setFlippedIndex(null) : setFlippedIndex(index)
  }

  return (
    <div className="relative z-30 socials lg:mt-auto">
      <div className="text-center">
        <ContactTitle title={title} />
      </div>
      <p className="mb-4">{desc}</p>
      <div 
        className="flex justify-center mx-auto mb-12 img-links gap-x-6 lg:gap-x-0 lg:justify-between lg:max-w-xs"
        onMouseEnter={() => handleCardFlip(index)}
        onMouseLeave={() => handleCardFlip(index)}
      >
        {/* TODO: create custom component (SocialContactImgLink) */}
        <Link linkTo={fbLink}>
          <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal">
            <img
              src={fbImg}
              alt={`facebook: ${title}`}
              width={128}
              height={128}
            />
            <img
            src={backFbImg}
            alt={`facebook: ${title}`}
            width={128}
            height={128}
            />
          </ReactCardFlip>
        </Link>
        <Link linkTo={igLink}>
          <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal">
            <img
              src={igImg}
              alt={`instagram: ${title}`}
              width={128}
              height={128}
            />
            <img
              src={backIgImg}
              alt={`instagram: ${title}`}
              width={128}
              height={128}
            />
          </ReactCardFlip>
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials
