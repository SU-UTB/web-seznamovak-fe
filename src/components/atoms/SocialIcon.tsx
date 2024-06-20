import React from 'react'

interface SocialIconProps {
  socialLink: string
  socialIconImg: string
  socialPlatform: string
}

const SocialIcon: React.FC<SocialIconProps> = ({
  socialLink,
  socialIconImg,
  socialPlatform,
}) => {
  return (
    <a href={socialLink} target="_blank" rel="nopener noreferrer">
      <img src={socialIconImg} alt={socialPlatform} />
    </a>
  )
}

export default SocialIcon
