import React from 'react';
import ContactTitle from '../atoms/ContactTitle';
import Link from '../atoms/Link';
import { AnalyticsEvents, Firebase } from '../../utils/firebase';

interface ContactSocialsProps {
  title: string;
  desc: string;
  fbLink: string;
  fbImg: string;
  fbOverlay: string;
  igLink: string;
  igImg: string;
  igOverlay: string;
  index: number;
}

const ContactSocials: React.FC<ContactSocialsProps> = ({
  title,
  desc,
  fbLink,
  fbImg,
  fbOverlay,
  igLink,
  igImg,
  igOverlay,
}) => {

  return (
    <div className="relative z-30 socials lg:mt-auto">
      <div className="text-center">
        <ContactTitle title={title} color="" />
      </div>
      <p className="mb-4">{desc}</p>
      {/* <div className="flex justify-center mx-auto mb-12 img-links gap-x-6 lg:justify-between lg:max-w-xs">
        <Link
          linkName=""
          linkTo={fbLink}
          onClick={() =>
            Firebase.instance.aLog(AnalyticsEvents.contactFbClicked, title)
          }
        >
          <div style={styles.container}>
            <img
              src={fbImg}
              alt={`facebook: ${title}`}
              width={128}
              height={128}
              style={{ ...styles.image, boxShadow: '0px 0px 15px 7px rgba(56,89,153,1)' }}
            />
            <img
              src={fbOverlay}
              style={styles.overlayImage}
            />
          </div>
        </Link>
        <Link
          linkName=""
          linkTo={igLink}
          onClick={() =>
            Firebase.instance.aLog(AnalyticsEvents.contactIgClicked, title)
          }
        >
          <div style={styles.container}>
            <img
              src={igImg}
              alt={`instagram: ${title}`}
              width={128}
              height={128}
              style={{ ...styles.image, boxShadow: '0px 0px 15px 7px rgba(220,0,170,0.7)' }}
            />
            <img
              src={igOverlay}
              style={styles.overlayImage}
            />
          </div>
        </Link>
      </div> */}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative' as 'relative',
    width: 'auto',
    height: 'auto',
  },
  image: {
    borderRadius: '15px',
    width: '128px',
    height: 'auto',
  },
  overlayImage: {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    width: '128px',
    height: 'auto',
    borderRadius: '15px',
    pointerEvents: 'none' as 'none', // Ensures the overlay image does not interfere with click events
  },
};

export default ContactSocials;
