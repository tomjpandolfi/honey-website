import BodyText from '../../components/BodyText/BodyText';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import TitleText from '../../components/TitleText/TitleText';
import './HowItWorksSection.scss';
import WaveTriangle from '../../assets/images/waveTriangle.png';
import StarImage from '../../assets/images/star.png';

const detailsParagraphs = [
    `
        Honey brings lending and borrowing to NFTs, allowing you to
        utilize capital stored away in your NFT collection.
    `,
    `
        Lenders lock up liquidity in exchange for HONEY, which can
        be staked for protocol fees.
    `,
    `
        Borrowers stake NFT as collateral and pay interest, which is
        distributed to HONEY holders
    `
]

const HowItWorksSection = props => {
    return(
        <div className="how-it-works-section">
            <img className='wave-triangle' src={WaveTriangle} alt="Wave triangle" />
            <div className="content">
                <img className='star-image' src={StarImage} alt="start" />
                <div className="details-container">
                    <TitleText>How it works</TitleText>
                    {
                        detailsParagraphs.map((paragraph, i) => (
                            <BodyText key={i}>{paragraph}</BodyText>
                        ))
                    }
                </div>
                <ImageWithLoadBg
                    src={''}
                    alt=""
                    aspectRatio={2.5}
                />
            </div>
        </div>
    )
}

export default HowItWorksSection;