const Aftermovie = () => {
  const ytSources = [
    'https://www.youtube.com/embed/kR-IGHd-260'
  ]

  return (
    <section 
      id="aftermovie" 
      className="flex justify-center items-center h-auto md:h-screen p-[4%] md:p-[5%] bg-lightPink"
    >
      {ytSources.map((ytSrc) => (
        <div 
          className="relative w-full h-auto md:h-[80vh] max-h-[calc(80vw*(9/16))] md:max-h-none pt-[56.25%] md:pt-0 max-w-full md:max-w-[calc(80vh*(16/9))] m-auto rounded-[25px] overflow-hidden shadow-[15px_15px_15px_-3px_rgba(34,43,69,0.3)] z-30 md:z-auto" 
          key={ytSrc}
        >
          <div className="absolute md:relative top-0 left-0 w-full h-full">
            <iframe
              className="relative top-0 left-0 w-full h-full border-0 z-30"
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

export default Aftermovie;
