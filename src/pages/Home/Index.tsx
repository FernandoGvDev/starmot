import Hero from './Hero'
import PorQueConfiar from './PorQueConfiar'
import ProdutoMX15 from '../../components/ProdutoMX15'
import ProdutoMotores from '../../components/ProdutoMotores'
import ContatoForm from '../../components/ContatoForm'

export default function Home() {
  return (
    <>
    <Hero />
    <PorQueConfiar />
    <div id ='produtos' className='produtos'>
    <ProdutoMX15 />
    </div>
    <ProdutoMotores />
    <ContatoForm />
    </>
  );
}
