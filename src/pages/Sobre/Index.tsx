import Hero from './Hero'
import TimelineStarmot from './TimelineStarmot'
import MissionVisionValues from './MissionVisionValues'
import CompanyDifferentials from './CompanyDifferentials'
import LocationSection from './LocationSection'

export default function Sobre() {
  return (
    <>
    <Hero />
    <TimelineStarmot />
    <MissionVisionValues />
    <CompanyDifferentials />
    <LocationSection mapsUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6222183580885!2d-51.163017499999995!3d-30.019002200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519777a6c6670cf%3A0xa88007e47e4fc8c4!2sStarmot%20Motores%20El%C3%A9tricos!5e0!3m2!1spt-BR!2sbr!4v1761936272097!5m2!1spt-BR!2sbr' imageUrl='/img/frente.jpeg'/>
    </>
  );
}
