import React from 'react';
import './ThreeDShadow.scss';

const ThreeDShadow = props =>{
    const {shadowDirection} = props;
    if(!shadowDirection){
        return null;
    }
    return(
        <div direction = {shadowDirection} className = "three-d-shadow">
            <div className = "skew-container skew-top-container">
                <div className = 'skew-top'/>
            </div>
            <div className = "skew-container skew-bottom-container">
                <div className = "skew-bottom"/>
            </div>
        </div>
    )
}

export default ThreeDShadow;