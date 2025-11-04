// 📁 src/components/Hero.tsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

const fadeLeft = { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } };

const media = [
  '/img/motoreseletricossorocaba-784x368.png',
];

export default function Hero() {
  return (
    <section role="banner" className="bg-gray-100 py-20 pt-50">
      <div className="max-w-6xl mx-auto px sm:px-6 lg:px-0 grid md:grid-cols-2 gap-10 items-center">

        {/* Texto */}
        <motion.div
          {...fadeLeft}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-left pl-3 pr-20 md:pr-0"
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Soluções em <span className="text-blue-800">Motores Elétricos</span> &<br />
            Micro Switch Fim de Curso
          </h1>
          <p className="text-lg max-w-md mx-auto md:mx-0">
            Na <strong>Starmot</strong>, oferecemos produtos de alto padrão para garantir
            performance, segurança e eficiência no seu processo de manutenção e industrial.
          </p>
        </motion.div>

        {/* Carrossel direto no Hero */}
        <div className="w-full md:h-80">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {media.map((src, i) => (
              <SwiperSlide key={i}>
                {src.endsWith('.mp4') ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-72 md:h-80 object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-72 md:h-80 object-cover rounded-lg"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
