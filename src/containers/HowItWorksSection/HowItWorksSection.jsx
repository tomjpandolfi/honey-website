import React from 'react';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import './HowItWorksSection.scss';

const HowItWorksSection = props =>{
    return(
        <div className = "how-it-works-section">
            <SectionPadding>
                <div className = "container">
                    <h2>How it works</h2>
                    <div className = "details">
                        <div className = "paragraphs">
                            <p>
                                Honey brings lending and borrowing to NFTs, allowing you to utilize capital
                                stored away in your NFT collection.
                            </p>
                            <p>
                                Lenders lock up liquidity in exchange for $HONEY, which can be staked for protocol fees.
                            </p>
                            <p>
                                Borrowers stake NFTs as collateral and pay interest, which is distributed to $HONEY holders and lenders.
                            </p>
                        </div>
                        <div className = "image-container">
                            <ImageWithLoadBg
                                src = ''
                                aspectRatio = {1.14}
                                alt = ''
                            />
                        </div>
                    </div>
                </div>
            </SectionPadding>
        </div>
    )
}

export default HowItWorksSection;