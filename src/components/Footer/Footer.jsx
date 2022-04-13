import './Footer.scss';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import { DocumentationIcon, WhitepaperIcon } from '../../components/svgIcons';
import TitleText from '../TitleText/TitleText';
import BodyText from '../BodyText/BodyText';
import SocialsContainer from '../SocialsContainer/SocialsContainer';

const Card = props =>{
    return(
        <div className = "card">
            <TitleText>{props.title}</TitleText>
            <BodyText>{props.text}</BodyText>
        </div>
    )
}

const Footer = () => {
    return(
        <footer className="footer">
            <SectionPadding>
                <div className="row-container">
                    <div className = "first-block">
                        <TitleText>Honey Finance is run by our DAO and operated by Honey Labs.</TitleText>
                        <div className = "buttons-container">
                            <a href="https://honeylabs.medium.com/whitepaper-peer-to-contract-nft-collateral-and-lending-fdd6054328b0">
                                <WhitepaperIcon />
                                <BodyText>Whitepaper</BodyText>
                            </a>
                            <a href="https://docs.honey.finance">
                                <DocumentationIcon />
                                <BodyText>Documentation</BodyText>
                            </a>
                        </div>
                    </div>
                    <Card
                        title = "Honey DAO"
                        text = "Governed by the Honey token, the DAO allows stakeholders to decide vote on strategy. The  Honey DAO also governs the treasury, emissions, and insurance funds of the protocol."
                    />
                    <Card
                        title = "Honey Labs"
                        text = "Honey Labs builds the protocol and proposes changes to the DAO. It oversees day to day operations and implements changes to the protocol."
                    />                    
                </div>

                <hr/>
                <SocialsContainer />
            </SectionPadding>
        </footer>
    )
}

export default Footer;


