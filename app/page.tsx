import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import HallOfFame from './components/HallOfFame';
import Inspiration from './components/Inspiration';
import {Hero} from './components/Hero';
import PremiumCarousel from './components/PremiumCarousel';


export default function Home() {
  return (
    <main>
      <Hero/>

      <Banner />
      <PremiumCarousel/>

      <Inspiration/>

      <Companies />
      <Buyers />
      <Provide />

      <Why />
      <HallOfFame/>

      <Network />
      <Clientsay />
    
      <Newsletter />
    </main>
  )
}
