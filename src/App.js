import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NavMenu from './components/NavMenu/NavMenu';
import HeroSection from './containers/HeroSection/HeroSection';
import HoneyDefiSection from './containers/HoneyDefiSection/HoneyDefiSection';
import HowItWorksSection from './containers/HowItWorksSection/HowItWorksSection';
import LiquidityProblemsSection from './containers/LiquidityProblemsSection/LiquidityProblemsSection';
import NumbersSection from './containers/NumbersSection/NumbersSection';
import "./sass/global.scss";

function App() {
  const [ menuHidden, setMenuHidden ] = useState(true);

  const toggleMenuHidden = () => {
    setMenuHidden(!menuHidden)
  }

  return (
    <div className="App">
      <Navbar menuHidden={menuHidden} toggleMenuHidden={toggleMenuHidden} />
      <NavMenu hidden={menuHidden} toggleHidden={toggleMenuHidden} />
      <HeroSection />
      <HoneyDefiSection />
      <NumbersSection />
      <LiquidityProblemsSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}

export default App;
