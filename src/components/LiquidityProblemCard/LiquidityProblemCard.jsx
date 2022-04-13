import React from 'react';
import BodyText from '../BodyText/BodyText';
import TitleText from '../TitleText/TitleText';
import './LiquidityProblemCard.scss';
import WaveTriangle from '../../assets/images/waveTriangle.png';

const LiquidityProblemCard = props =>{
    const {title, textParagraphs} = props;

    return(
        <div className = "liquidity-problem-card">
            <img src={WaveTriangle} alt="wave triangle" />
            <TitleText>{title}</TitleText>
            {
                textParagraphs && textParagraphs.map(a => <BodyText key = {a}>{a}</BodyText>)
            }
        </div>
    )
}

export default LiquidityProblemCard;