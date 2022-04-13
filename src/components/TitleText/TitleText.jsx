import React from 'react';
import './TitleText.scss';

const TitleText = props =>{
  
  return(
    <h2 className = {`title-text ${props.className || ''}`}>
      {props.children}
    </h2>
  )
}

export default TitleText;