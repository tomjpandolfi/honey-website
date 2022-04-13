import React, { useState } from 'react';
import BodyText from '../BodyText/BodyText';
import ThreeDShadow from '../ThreeDShadow/ThreeDShadow';
import './DefiCompBox.scss';

const DefiCompBox =props=>{
    const {title, description, shadowDirection} = props;
    const [showFullDetails, setShowFullDetails] = useState(false);

    const toggleDetails = () => {
        setShowFullDetails(!showFullDetails)
    }
    return(
        <div onClick={ toggleDetails } className = 'defi-comp-box'>
            <ThreeDShadow shadowDirection = {shadowDirection}/>
            <BodyText>{title}</BodyText>
            {
                showFullDetails &&
                <BodyText className="description" >{description}</BodyText>
            }
        </div>
    )
}

export default DefiCompBox;