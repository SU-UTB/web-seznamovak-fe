import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import instructors from '../../data/instructorsList'
import '../../scss/Instructors.scss'
import Picture from '../atoms/Picture'
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
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mx-8"
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 2,
            },

            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
              slidesPerGroup: 5,
            },
          }}
        >
          {instructors.map((instructor) => (
            <SwiperSlide key={instructor.pic}>
              <Picture
                imgSrc={instructor.pic}
                imgAlt={instructor.name}
                backImgSrc={instructor.backPic}
              />
              <h5 className="my-4 text-xl font-bold md:text-3xl xl:text-4xl text-beige">
                {instructor.name}
              </h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Instructors
