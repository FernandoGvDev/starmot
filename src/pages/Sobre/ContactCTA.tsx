// 📁 src/components/HeroGallery.tsx
import { useState } from 'react'; // Importa useState do React para controlar o estado do swiper de miniaturas
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa Swiper e SwiperSlide do Swiper
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'; // Importa módulos do Swiper: navegação, thumbs e autoplay
import 'swiper/swiper-bundle.css'; // Importa CSS padrão do Swiper

// Array de imagens e vídeos da galeria
const images = [
  '/imgHero/video1.mp4', // Primeiro item: vídeo
  '/imgHero/img2.jpeg',  // Segundo item: imagem
  '/imgHero/img1.jpeg',  // Terceiro item: imagem
];

export default function HeroGallery() {
  // Estado para armazenar o swiper das miniaturas
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    // Container principal da galeria
    <div className="w-full max-w-full mx-auto px-2 sm:px-4">
      
      {/* Swiper principal */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]} // Ativa os módulos de navegação, thumbs e autoplay
        navigation // Mostra setas de navegação
        thumbs={{ swiper: thumbsSwiper }} // Conecta com o swiper das miniaturas
        spaceBetween={10} // Espaço de 10px entre slides
        slidesPerView={1} // Mostra 1 slide por vez
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Ativa autoplay a cada 3s
        loop // Habilita loop infinito
        className="w-full" // Largura total do container
      >
        {images.map((src, i) => (
          // Cada slide
          <SwiperSlide
            key={i} // Chave única
            className="w-full flex justify-center items-center" // Centraliza conteúdo
          >
            {src.endsWith('.mp4') ? (
              // Se for vídeo
              <video
                src={src} // Fonte do vídeo
                controls // Mostra controles de play/pause
                className="w-full max-w-full max-h-[70vh] object-contain rounded-xl" 
                // w-full: largura total
                // max-w-full: não ultrapassa container
                // max-h-[70vh]: não ultrapassa 70% da altura da tela
                // object-contain: mantém proporção sem cortar
                // rounded-xl: bordas arredondadas
              />
            ) : (
              // Se for imagem
              <img
                src={src} // Fonte da imagem
                alt={`Galeria ${i + 1}`} // Texto alternativo
                className="w-full max-w-full max-h-[70vh] object-contain rounded-xl"
                // Mesma lógica do vídeo para manter responsividade
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniaturas scroll horizontal */}
      <Swiper
        onSwiper={setThumbsSwiper} // Armazena o swiper das miniaturas no estado
        modules={[Autoplay]} // Apenas autoplay para miniaturas
        spaceBetween={8} // Espaço entre miniaturas
        slidesPerView={3} // 3 miniaturas visíveis no mobile
        breakpoints={{ // Ajusta quantidade de miniaturas conforme tela
          640: { slidesPerView: 4 }, // Tablets
          768: { slidesPerView: 5 }, // Desktops pequenos
          1024: { slidesPerView: 6 }, // Desktops grandes
        }}
        freeMode={true} // Permite scroll livre horizontal
        watchSlidesProgress // Observa progresso dos slides
        className="w-full mt-3" // Largura total + margem superior
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="cursor-pointer flex justify-center">
            {src.endsWith('.mp4') ? (
              // Miniatura de vídeo
              <video
                src={src} // Fonte do vídeo
                className="w-full max-w-full h-auto object-contain rounded-xl"
                // w-full e max-w-full: não ultrapassa container
                // h-auto: altura automática para manter proporção
                // object-contain: mantém proporção
                // rounded-xl: bordas arredondadas
                muted // Vídeo sem som
              />
            ) : (
              // Miniatura de imagem
              <img
                src={src} // Fonte da imagem
                alt={`Miniatura ${i + 1}`} // Texto alternativo
                className="w-full max-w-full h-auto object-contain rounded-xl"
                // Mesma lógica do vídeo para manter proporção
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
