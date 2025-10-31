import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React from "react";

interface LocationSectionProps {
  imageUrl?: string;
  mapsUrl: string;
  address?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ imageUrl, mapsUrl, address }) => {
  return (
    <section id="localizacao" className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Nossa Localização
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estrutura física moderna e posição estratégica para atender todo o Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Foto da sede */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Sede Starmot"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-medium">
                Foto da sede
              </div>
            )}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-xl overflow-hidden shadow-md h-80">
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>

            {address && (
              <div className="flex items-center gap-2 mt-3 text-gray-700 text-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{address}</span>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
