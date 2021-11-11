import DAOandLabsSection from "./containers/DAOandLabsSection/DAOandLabsSection";
import HeroSection from "./containers/HeroSection/HeroSection";
import HowItWorksSection from "./containers/HowItWorksSection/HowItWorksSection";
import LiquidityProblemSection from "./containers/LiquidityProblemSection/LiquidityProblemSection";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <div className = "page-content">
        <HowItWorksSection/>
        <LiquidityProblemSection/>
        <DAOandLabsSection/>
      </div>

    </div>
  );
}

export default App;
