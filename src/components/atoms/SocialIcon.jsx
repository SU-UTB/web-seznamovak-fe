const SocialIcon = ({ socialLink, socialIconImg, socialPlatform }) => {
  return (
    <a href={socialLink} target="_blank" rel="nopener noreferrer">
      <img src={socialIconImg} alt={socialPlatform} />
    </a>
  )
}

export default SocialIcon