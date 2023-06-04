const ContactPicture = ({ imgSrc, webpImgSrc, imgAlt, backImgSrc, backWebpImgSrc  }) => {
  return (
    <picture className="manazers_pic">
      <div className="manazers_flip_inner">
        <div className="manazers_flip_front">
          <source srcSet={webpImgSrc} type="image/webp" />
          <img
            className="w-32 h-auto lg:px-2 xl:px-0 managersFront"
            src={imgSrc}
            type="image/png"
            alt={imgAlt}
            loading="lazy"
          />
        </div>
        <div className="manazers_flip_back">
          <source srcSet={backWebpImgSrc} type="image/webp" />
          <img
            className="w-32 h-auto lg:px-2 xl:px-0 managersBack"
            src={backImgSrc}
            type="image/png"
            alt={imgAlt}
            loading="lazy"
          />
        </div>
      </div>
    </picture>
  )
}
export default ContactPicture
