// 📁 src/components/Galeriahero.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const images = [
  '/imgHero/video1.mp4',
  '/imgHero/img2.jpeg',
  '/imgHero/img1.jpeg',
];

export default function Galeriahero() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          {src.endsWith('.mp4') ? (
            <video src={src} controls autoPlay muted loop />
          ) : (
            <img src={src} alt={`Galeria ${i + 1}`} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
