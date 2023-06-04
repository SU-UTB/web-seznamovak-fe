const Picture = ({ imgSrc, imgAlt, backImgSrc }) => {
  return (
    <picture className="instruktors_pic">
      <div className="instruktors_flip_inner">
        <div className="instruktors_flip_front">
          <source srcSet={imgSrc} type="image/webp" />
          <img
            className="instruktorsFront"
            src={imgSrc}
            type="image/webp"
            alt={imgAlt}
          />
        </div>
        <div className="instruktors_flip_back">
          <source srcSet={backImgSrc} type="image/webp" />
          <img
            className="instruktorsBack"
            src={backImgSrc}
            type="image/webp"
            alt={backImgSrc}
          />
        </div>
      </div>
    </picture>
  )
}
export default Picture
