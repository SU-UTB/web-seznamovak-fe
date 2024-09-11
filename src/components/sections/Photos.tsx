import '../../scss/Photos.scss'
import SectionTitle from '../atoms/SectionTitle'

const Photos = () => {
  const photoSources = [
    {
      id: 1,
      src: 'src/assets/img/turnus1.webp',
      alt: '1. turnus',
      galleryLink: 'https://photos.app.goo.gl/nAHZX9H2h9A4wVVu5', // Replace with actual gallery link
    },
    {
      id: 2,
      src: 'src/assets/img/turnus2.webp',
      alt: '2. turnus',
      galleryLink: 'https://photos.app.goo.gl/DVo6cMq7n2TMut4u5', // Replace with actual gallery link
    },
  ];

  return (
    <section id="photos">
      {/* Adding the SectionTitle component */}
      <div className="mx-auto text-center lg:w-3/5 px-4 py-0 md:py-2 lg:py-3">
        <SectionTitle
          title="Fotky 2024"
          color="#FBFFE6"
          fontSize='35px'
        />
      </div>
      
      <div className="photos-container">
        {photoSources.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <a href={photo.galleryLink} target="_blank" rel="noopener noreferrer">
              <div className="photo-background" style={{ backgroundImage: `url(${photo.src})` }}>
                <div className="photo-overlay">
                  <p>{photo.alt}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
