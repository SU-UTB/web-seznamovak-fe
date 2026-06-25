const Map = ({
  mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41528.175598350324!2d18.017196!3d49.418153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ab876252d17b823!2zS2VtcCBSYW7EjSBCeXN0xZlpxI1rYQ!5e0!3m2!1scs!2scz!4v1655956946045!5m2!1scs!2scz',
}) => {
  return (
    <div 
      id="map" 
      // Přidána třída "relative", aby se palmy pozicovaly k okrajům tohoto divu (celá šířka obrazovky)
      className="relative flex justify-center items-center h-auto m-0 p-[10%_5%] md:p-[3%] bg-[#FCEDC5] z-10"
    >
      {/* Levá palma - na okraji obrazovky, centrovaná vertikálně */}
      <img 
        src="/src/assets/img/palma.svg" 
        alt="Palma na levém okraji obrazovky" 
        className="block absolute left-0 top-1/4 -translate-y-1/2 w-[35vw] md:w-[20vw] h-auto z-40 pointer-events-none"
      />

      {/* Vnitřní kontejner s mapou */}
      <div className="w-full h-[80vh] max-w-[calc(80vh*(16/9))] rounded-[25px] shadow-[15px_15px_15px_-3px_rgba(34,43,69,0.3)] z-30 overflow-hidden">
        <iframe
          className="relative w-full h-full border-0"
          src={mapSrc}
          title="mapa"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </div>

      {/* Pravá palma - na okraji obrazovky, centrovaná vertikálně (zrcadlově otočená) */}
      <img 
        src="/src/assets/img/palma.svg" 
        alt="Palma na pravém okraji obrazovky" 
        className="block absolute right-0 top-1/2 -translate-y-1/2 w-[35vw] md:w-[20vw] h-auto z-40 scale-x-[-1] pointer-events-none"
      />
    </div>
  )
}

export default Map;
