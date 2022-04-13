import BodyText from '../../components/BodyText/BodyText';
import Button from '../../components/Button/Button';
import TitleText from '../../components/TitleText/TitleText';
import './HeroSection.scss';
import WaveImage from '../../assets/images/HeaderWave.png'

const HeroSection = props => {
    return(
        <div className="hero-section">
            <div className="content">
                <div className="details-container">
                    <TitleText>Honey Finance</TitleText>
                    <BodyText>Liquidity solution for NFTs</BodyText>
                    <div className="buttons-container">
                        <Button title="Launch app" href="https://app.honey.finance" />
                        <Button title="Learn more" href="https://docs.honey.finance" />
                    </div>
                </div>
                <div className="wave-img-container">
                    <img src={WaveImage} alt="background wave" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;