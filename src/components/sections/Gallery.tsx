import SectionTitle from '../atoms/SectionTitle';

import gal1 from '../../assets/img/gallery/gal1.webp';
import gal2 from '../../assets/img/gallery/gal2.webp';
import gal3 from '../../assets/img/gallery/gal3.webp';
import gal4 from '../../assets/img/gallery/gal4.webp';
import gal5 from '../../assets/img/gallery/gal5.webp';
import gal6 from '../../assets/img/gallery/gal6.webp';
import gal7 from '../../assets/img/gallery/gal7.webp';
import gal8 from '../../assets/img/gallery/gal8.webp';
import gal9 from '../../assets/img/gallery/gal9.webp';
import gal10 from '../../assets/img/gallery/gal10.webp';
import gal11 from '../../assets/img/gallery/gal11.webp';
import gal12 from '../../assets/img/gallery/gal12.webp';
import gal13 from '../../assets/img/gallery/gal13.webp';
import gal14 from '../../assets/img/gallery/gal14.webp';
import gal15 from '../../assets/img/gallery/gal15.webp';
import gal16 from '../../assets/img/gallery/gal16.webp';
import gal17 from '../../assets/img/gallery/gal17.webp';
import gal18 from '../../assets/img/gallery/gal18.webp';


const getRandomItem = <T,>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// --- Data for the Gallery ---
// We define a set of possible Tailwind CSS width classes for the images.
const imageWidths = [
    'w-32 sm:w-48',
    'w-36 sm:w-56',
    'w-40 sm:w-64',
    'w-44 sm:w-72',
    'w-48 sm:w-80',
    'w-56 sm:w-96',
  ];  

const imageVariables = [
    gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9,
    gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17, gal18
  ];
  
const allImages = imageVariables.map((img, index) => ({
    id: index,
    src: img,
    widthClass: getRandomItem(imageWidths),
}));  

// We split the images into two separate arrays, one for each row of the gallery.
const row1Images = allImages.slice(0, allImages.length / 2);
const row2Images = allImages.slice(allImages.length / 2);


const Gallery = () => {

  return (
    <div className="antialiased flex items-center justify-center">
      <div className="w-full bg-primaryDark">        
        <SectionTitle title="GALERIE" color="onPrimaryDark"/>
        <div className="relative w-full overflow-hidden py-6">
          <style>
            {`
              @keyframes scroll-left-upper {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .animate-scroll-upper {
                animation: scroll-left-upper 80s linear infinite;
              }
              
              @keyframes scroll-left-lower {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .animate-scroll-lower {
                animation: scroll-left-lower 80s linear infinite;
              }
            `}
          </style>

          <div className="flex mb-4">
            <div className="flex items-center space-x-4 animate-scroll-upper min-w-max">
              {[...row1Images].map((image, index) => (
                <div key={`row1-${image.id}-${index}`} className={`flex-shrink-0 ${image.widthClass} h-40`}>
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg shadow-md border-4 border-onPrimaryDark"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center space-x-4 animate-scroll-lower min-w-max">
              {[...row2Images, ...row2Images].map((image, index) => (
                <div key={`row2-${image.id}-${index}`} className={`flex-shrink-0 ${image.widthClass} h-40`}>
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg shadow-md border-4 border-onPrimaryDark"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
