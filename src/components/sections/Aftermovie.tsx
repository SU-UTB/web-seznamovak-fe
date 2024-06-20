import '../../scss/Aftermovie.scss'

const Aftermovie = () => {
  const ytSources = [
    'https://www.youtube.com/embed/kR-IGHd-260'
  ]

  return (
    <section id="aftermovie">
      {ytSources.map((ytSrc) => (
        <div className="video-wrapper" key={ytSrc}>
          <div className="video-container">
            <iframe
              className="video-iframe z-30"
              src={ytSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="teaser"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Aftermovie
