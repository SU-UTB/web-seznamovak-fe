import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import stylů Swiperu
import 'swiper/css'
import 'swiper/css/free-mode'

import SectionTitle from '../atoms/SectionTitle'

import gal1 from '../../assets/img/gallery/gal1.webp'
import gal10 from '../../assets/img/gallery/gal10.webp'
import gal11 from '../../assets/img/gallery/gal11.webp'
import gal12 from '../../assets/img/gallery/gal12.webp'
import gal13 from '../../assets/img/gallery/gal13.webp'
import gal14 from '../../assets/img/gallery/gal14.webp'
import gal15 from '../../assets/img/gallery/gal15.webp'
import gal16 from '../../assets/img/gallery/gal16.webp'
import gal17 from '../../assets/img/gallery/gal17.webp'
import gal18 from '../../assets/img/gallery/gal18.webp'
import gal2 from '../../assets/img/gallery/gal2.webp'
import gal3 from '../../assets/img/gallery/gal3.webp'
import gal4 from '../../assets/img/gallery/gal4.webp'
import gal5 from '../../assets/img/gallery/gal5.webp'
import gal6 from '../../assets/img/gallery/gal6.webp'
import gal7 from '../../assets/img/gallery/gal7.webp'
import gal8 from '../../assets/img/gallery/gal8.webp'
import gal9 from '../../assets/img/gallery/gal9.webp'

const getRandomItem = <T,>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const imageWidths = [
  'w-32 sm:w-48',
  'w-36 sm:w-56',
  'w-40 sm:w-64',
  'w-44 sm:w-72',
  'w-48 sm:w-80',
  'w-56 sm:w-96',
]
const imageVariables = [
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
  gal9,
  gal10,
  gal11,
  gal12,
  gal13,
  gal14,
  gal15,
  gal16,
  gal17,
  gal18,
]

const allImages = imageVariables.map((img, index) => ({
  id: index,
  src: img,
  widthClass: getRandomItem(imageWidths),
}))

const row1Images = allImages.slice(0, allImages.length / 2)
const row2Images = allImages.slice(allImages.length / 2)

const Gallery = () => {
  return (
    <div className="antialiased bg-lightPink py-6">
      <SectionTitle title="LOŇSKÝ ROČNÍK" color="darkBlue" />

      {/* První řádek - nekonečný loop */}
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.5,
        }}
        className="px-4 mb-4"
      >
        {row1Images.map((image) => (
          <SwiperSlide key={`row1-${image.id}`} className="!w-auto">
            <div className={`${image.widthClass} h-40`}>
              <img
                src={image.src}
                alt={`Gallery image ${image.id + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-md border-4 border-darkPink"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Druhý řádek - nekonečný loop */}
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.5,
        }}
        className="px-4"
      >
        {row2Images.map((image) => (
          <SwiperSlide key={`row2-${image.id}`} className="!w-auto">
            <div className={`${image.widthClass} h-40`}>
              <img
                src={image.src}
                alt={`Gallery image ${image.id + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-md border-4 border-darkPink"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery
