import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "./SwipeWindow.css"
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules"
import SlideContent from "./SlideContent"

function SwipeWindow({ gameData }) {
  return (
    <Swiper
      className="swipeWindow"
      slidesPerView={"auto"}
      // autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[EffectCoverflow, Autoplay, Navigation]}
      loop={true}
      effect={"coverflow"}
      centeredSlides={true}
      navigation={true}
      grabCursor={true}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {gameData.map((game) => (
        <SwiperSlide key={game.id}>
          <SlideContent game={game} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwipeWindow
