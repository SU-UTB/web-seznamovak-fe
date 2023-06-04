const Picture = ({ imgSrc, webpImgSrc, imgAlt, backImgSrc, backWebpImgSrc }) => {
  return (
    <picture className="instruktors_pic">
      <div className="instruktors_flip_inner">
        <div className="instruktors_flip_front">
          <source srcSet={webpImgSrc} type="image/webp" />
          <img
            className="instruktorsFront"
            src={imgSrc}
            type="image/png"
            alt={imgAlt}
            loading="lazy"
          />
        </div>
        <div className="instruktors_flip_back">
          <source srcSet={webpImgSrc} type="image/webp" />
          <img
            className="instruktorsBack"
            src={backImgSrc}
            type="image/png"
            alt={backWebpImgSrc}
            loading="lazy"
          />
        </div>
      </div>
    </picture>
  )
}
export default Picture
