import React from 'react';
import './LiquidityProblemCard.scss';

const LiquidityProblemCard = props =>{
    const {title, textParagraphs} = props;

    return(
        <div className = "liquidity-problem-card">
            <h3>{title}</h3>
            {
                textParagraphs && textParagraphs.map(a => <p key = {a}>{a}</p>)
            }
        </div>
    )
}

export default LiquidityProblemCard;