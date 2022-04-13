import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './NumbersSection.scss';
import WaveImage from '../../assets/images/HeaderWave.png';

const stats = [
    {
        name: "TVL",
        number: "3M+"
    },
    {
        name: "NFTs Deposited",
        number: "40k"
    },
    {
        name: "Total Deposit",
        number: "N/A"
    },
    {
        name: "Total Borrow",
        number: "N/A"
    },
]
const NumbersSection = props => {
    return(
        <div className="numbers-section">
            <div className="wave-img-container">
                <img src={WaveImage} alt="wave" />
            </div>
        {
            stats.map((stat, i) => (
                <div key={i} className="stat-container">
                    <TitleText>{stat.name}</TitleText>
                    <TitleText>{stat.number}</TitleText>
                </div>
            ))
        }                
        </div>
    )
}

export default NumbersSection;