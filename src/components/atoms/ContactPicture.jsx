const ContactPicture = ({ imgSrc, imgAlt, backImgSrc }) => {
  return (
    <picture className="manazers_pic">
      <div className="manazers_flip_inner">
        <div className="manazers_flip_front">
          <source srcSet={imgSrc} type="image/webp" />
          <img
            className="w-32 h-auto lg:px-2 xl:px-0 managersFront"
            src={imgSrc}
            type="image/webp"
            alt={imgAlt}
          />
        </div>
        <div className="manazers_flip_back">
          <source srcSet={backImgSrc} type="image/webp" />
          <img
            className="w-32 h-auto lg:px-2 xl:px-0 managersBack"
            src={backImgSrc}
            type="image/webp"
            alt={imgAlt}
          />
        </div>
      </div>
    </picture>
  )
}
export default ContactPicture
