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
  const [flipped, setFlipped] = useState(false)

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
          {instructors.map((instructor) => (
            <SwiperSlide key={instructor.pic}>
              <div
                className="flex flex-col instructor-card gap-y-4"
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}
              >
                <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                  <img
                    className="instruktorsFront"
                    src={instructor.pic}
                    type="image/webp"
                    alt={instructor.name}
                  />
                  {/* TODO: change the second image src, use the same width and height proportions */}
                  <img
                    className="instruktorsFront"
                    src="https://images.pexels.com/photos/17060790/pexels-photo-17060790/free-photo-of-fashion-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
