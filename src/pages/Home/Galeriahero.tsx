// 📁 src/components/HeroGallery.tsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const images = [
  '/imgHero/video1.mp4',
  '/imgHero/img2.jpeg',
  '/imgHero/img1.jpeg',
];

export default function HeroGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Imagem principal */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-xl mb-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            {src.endsWith('.mp4') ? (
              <video
                src={src}
                controls
                className="w-full h-72 md:h-80 object-cover rounded-xl"
              />
            ) : (
              <img
                src={src}
                alt={`Galeria ${i + 1}`}
                className="w-full h-72 md:h-80 object-cover rounded-xl"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // duas miniaturas visíveis
        loop
        loopedSlides={images.length} // garante que todas participem do loop
        watchSlidesProgress
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            {src.endsWith('.mp4') ? (
              <video
                src={src}
                className="w-full h-20 md:h-24 object-cover rounded-xl"
                muted
              />
            ) : (
              <img
                src={src}
                alt={`Miniatura ${i + 1}`}
                className="w-full h-20 md:h-24 object-cover rounded-xl"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
