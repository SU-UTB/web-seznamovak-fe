const Map = ({ mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41528.175598350324!2d18.017196!3d49.418153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ab876252d17b823!2zS2VtcCBSYW7EjSBCeXN0xZlpxI1rYQ!5e0!3m2!1scs!2scz!4v1655956946045!5m2!1scs!2scz' }) => {
  return (
    <div id="mapa">
      <iframe
        className="w-full h-96 relative z-30" 
        src={mapSrc}
        frameBorder="0"
        title="mapa"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        ></iframe>
    </div>
  )
}

export default Map