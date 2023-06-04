import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import instructors from '../../data/instructorsList'
import '../../scss/Instructors.scss'
import SectionTitle from '../atoms/SectionTitle'

const Instructors = () => {
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
              {/* TODO: create custom component (InstructorFlipCard) */}
              <div className="flex flex-col instructor-card gap-y-4">
                <img
                  className="instruktorsFront"
                  src={instructor.pic}
                  type="image/webp"
                  alt={instructor.name}
                />
                <h5 className="text-xl font-bold md:text-3xl xl:text-4xl text-beige">
                  {instructor.name}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Instructors
