import SectionTitle from '../atoms/SectionTitle';
// Helper function to get a random item from an array
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

// Array of image paths
const imagePaths = [
  '/src/assets/img/gallery/gal1.webp',
  '/src/assets/img/gallery/gal2.webp',
  '/src/assets/img/gallery/gal3.webp',
  '/src/assets/img/gallery/gal4.webp',
  '/src/assets/img/gallery/gal5.webp',
  '/src/assets/img/gallery/gal6.webp',
  '/src/assets/img/gallery/gal7.webp',
  '/src/assets/img/gallery/gal8.webp',
  '/src/assets/img/gallery/gal9.webp',
  '/src/assets/img/gallery/gal10.webp',
  '/src/assets/img/gallery/gal11.webp',
  '/src/assets/img/gallery/gal12.webp',
  '/src/assets/img/gallery/gal13.webp',
  '/src/assets/img/gallery/gal14.webp',
  '/src/assets/img/gallery/gal15.webp',
  '/src/assets/img/gallery/gal16.webp',
  '/src/assets/img/gallery/gal17.webp',
  '/src/assets/img/gallery/gal18.webp',
];

const allImages = imagePaths.map((path, index) => ({
  id: index,
  src: path,
  widthClass: getRandomItem(imageWidths),
}));

// We split the images into two separate arrays, one for each row of the gallery.
const row1Images = allImages.slice(0, allImages.length / 2);
const row2Images = allImages.slice(allImages.length / 2);


// --- React Component ---
const Gallery = () => {

  // This component renders the entire gallery section.
  return (
    <div className="bg-[#FEFBF2] font-sans antialiased text-gray-800 flex items-center justify-center">
      <div className="w-full bg-primaryDark">        
        <SectionTitle title="GALERIE" color="onPrimaryDark"/>
        <div className="relative w-full overflow-hidden py-6">
           {/* We add a custom CSS style block for the scrolling animations. */}
          <style>
            {`
              @keyframes scroll-left {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
              }
              .animate-scroll-left {
                animation: scroll-left 250s linear infinite;
              }
              
              @keyframes scroll-right {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
              }
              .animate-scroll-right {
                animation: scroll-left 250s linear infinite;
              }
            `}
          </style>

          {/* Top Row - Scrolls from right to left */}
          <div className="flex mb-4">
            {/* The inner container uses flex and will be animated.
              We duplicate the images ([...row1Images, ...row1Images]) to create a seamless loop.
              As the first set of images scrolls out of view, the second identical set scrolls in.
            */}
            <div className="flex items-center space-x-4 animate-scroll-left pause-on-hover">
              {[...row1Images, ...row1Images].map((image, index) => (
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

          {/* Bottom Row - Scrolls from left to right */}
          <div className="flex">
            <div className="flex items-center space-x-4 animate-scroll-right pause-on-hover">
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
