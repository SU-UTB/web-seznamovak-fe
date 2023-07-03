import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import instructors from '../../data/instructorsList'
import '../../scss/Instructors.scss'
import SectionTitle from '../atoms/SectionTitle'

const Instructors = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const handleCardFlip = (index) => {
    flippedIndex === index ? setFlippedIndex(null) : setFlippedIndex(index)
  }

  return (
    <section id="instruktori">
      <div className="mx-auto text-left lg:w-3/5">
        <SectionTitle
          title="A tito frajeři tě budou celým seznamovákem provázet."
          color="#FDECBE"
        />
      </div>
      <div className="pb-16 mx-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mx-8"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={instructor.pic}>
              <div
                className="flex flex-col instructor-card gap-y-4"
                onMouseEnter={() => handleCardFlip(index)}
                onMouseLeave={() => handleCardFlip(index)}
              >
                <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal">
                  <img
                    className="instruktorsFront"
                    src={instructor.pic}
                    type="image/webp"
                    alt={instructor.name}
                  />
                  {/* TODO: change the second image src, use the same width and height proportions */}
                  <img
                    className="instruktorsFront"
                    src={instructor.backPic}
                    type="image/webp"
                    alt={instructor.name}
                  />
                </ReactCardFlip>
                <h5 className="text-xl font-bold md:text-3xl xl:text-4xl text-beige">
                  {instructor.name}
                </h5>
              </div>
              {/* TODO: create custom component (InstructorFlipCard) */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Instructors
