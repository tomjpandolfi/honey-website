import React from 'react';
import WaveSvg from '../../components/waveSvg/waveSvg';
import './HeroSection.scss';

const HeroSection = props =>{
    return(
        <div className = "hero-section">
            <div className = "head">
                <h2>Honey Finance</h2>
                <p>Liquidity solution for NFTs</p>
            </div>
            <WaveSvg/>
            <div className = "buttons-container">
                <button>Farm</button>
                <button>Lend</button>
            </div>
        </div>
    )
}

export default HeroSection;