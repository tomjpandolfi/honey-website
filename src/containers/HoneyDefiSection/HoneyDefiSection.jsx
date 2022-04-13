import './HoneyDefiSection.scss';
import BodyText from '../../components/BodyText/BodyText';
import DefiCompBox from '../../components/DefiCompBox/DefiCompBox';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';

const defiServices = [
    {
        name: "NFT loans",
        text: `
            Use your NFTs as collateral to receive instant loans. Honey enables users to borrow SOL against
            the value of their NFT. These loans have no fixed duration and accrue interest over time.
        `
    },
    {
        name: "Metaverse liquidity",
        text: `
            Honey is the premier source of liquidity for the metaverse. We integrate with different metaverse
            games to provide their virtual worlds with the financial primitives of tomorrow.
        `
    },
    {
        name: "NFT pools",
        text: `
            Liquidations are handled asynchronously with liquidation pools. Pools get rid of the peer to peer
            paradigm in NFTs, and allow for instant liquidity on non-fungible assets. Honey works with the
            deepest NFT pools to provide instant liquidity throughout our protocol.
        `
    }
]

const HoneyDefiSection = props =>{
    return(
        <div className = "defi-section">
            <SectionPadding className="content">
                <TitleText small>Borrow against your NFTs</TitleText>
                <BodyText>Our protocol enables NFTs and metaverse assets to be used as collateral on loans. Honey allows users to participate in DeFi using their illiquid assets.</BodyText>
                <div className = "boxes-container">
                    <DefiCompBox
                        title = {defiServices[0].name}
                        description={defiServices[0].text}
                        shadowDirection = 'right'
                    />
                    <DefiCompBox
                        title = {defiServices[1].name}
                        description={defiServices[1].text}
                    />
                    <DefiCompBox
                        title = {defiServices[2].name}
                        description={defiServices[2].text}
                        shadowDirection = "left"
                    />
                </div>                
            </SectionPadding>
            <div className="box-shadow" />
        </div>
    )
}

export default HoneyDefiSection;