
import 'bootstrap/dist/css/bootstrap.min.css';
import BcgParallax from './Modules/BcgParallax'
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroCards from './Modules/HeroCards';
import Logo from './Modules/Logo';
import Mission from './Modules/Mission';
import DataForm from './Modules/DataForm';
import HeroesSkills from './Modules/HeroesSkills/HeroesSkills'
import './App.css'

//backgroundColor: '#181D22'
function App() {
  return (
    <ParallaxProvider>
      <div >
        <BcgParallax />
        <div style={{position:'relative', zIndex: 1}}>
          <Logo />
          <br />
          <Mission />
          <br />
          <HeroCards />
          <br/>
          <HeroesSkills/>
          <br/>
          <br/>
          <br/>
          <DataForm/>
        </div>
      </div>
    </ParallaxProvider>
    
  );
}

export default App;
